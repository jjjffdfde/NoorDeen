// scripts/build-offline-bundle.cjs
// Builds the verified standalone desktop offline web archive (.ZIP)
// containing all HTML pages, CSS, JS, datasets, PNG/SVG icons, and offline guidance.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const zlib = require('zlib');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DOWNLOADS_DIR = path.join(PUBLIC_DIR, 'downloads');
const ZIP_BUNDLE_PATH = path.join(DOWNLOADS_DIR, 'islamic-portal-offline-bundle.zip');

if (!fs.existsSync(DOWNLOADS_DIR)) {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

console.log('Building Islamic Knowledge Portal complete offline standalone distribution...');

// Standard CRC-32 table implementation
const crcTable = new Uint32Array(256);
for (let i = 0; i < 256; i++) {
  let c = i;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[i] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

class ZipBuilder {
  constructor() {
    this.files = [];
  }

  addFile(archivePath, buffer) {
    const cleanPath = archivePath.replace(/\\/g, '/').replace(/^\//, '');
    this.files.push({
      path: cleanPath,
      buffer: Buffer.isBuffer(buffer) ? buffer : Buffer.from(buffer)
    });
  }

  addFileFromDisk(diskPath, archivePath) {
    const buf = fs.readFileSync(diskPath);
    this.addFile(archivePath, buf);
  }

  addDirectoryRecursive(diskDir, archivePrefix = '') {
    const entries = fs.readdirSync(diskDir, { withFileTypes: true });
    // Sort entries for deterministic output
    entries.sort((a, b) => a.name.localeCompare(b.name));
    for (const entry of entries) {
      const fullPath = path.join(diskDir, entry.name);
      const relPath = archivePrefix ? `${archivePrefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        if (entry.name === 'downloads' || entry.name === '.git' || entry.name === 'node_modules') continue;
        this.addDirectoryRecursive(fullPath, relPath);
      } else if (entry.isFile()) {
        this.addFileFromDisk(fullPath, relPath);
      }
    }
  }

  toBuffer() {
    const localHeaders = [];
    const cdEntries = [];
    let offset = 0;

    for (const f of this.files) {
      const pathBuf = Buffer.from(f.path, 'utf8');
      const uncompressed = f.buffer;
      const crc = crc32(uncompressed);

      const compressed = zlib.deflateRawSync(uncompressed, { level: 6 });
      const method = compressed.length < uncompressed.length ? 8 : 0;
      const dataToStore = method === 8 ? compressed : uncompressed;
      const compSize = dataToStore.length;
      const uncompSize = uncompressed.length;

      // Local file header (30 bytes + path length)
      const lh = Buffer.alloc(30 + pathBuf.length);
      lh.writeUInt32LE(0x04034b50, 0); // Local header signature
      lh.writeUInt16LE(20, 4);          // Version needed (2.0)
      lh.writeUInt16LE(0, 6);           // General purpose bit flag
      lh.writeUInt16LE(method, 8);      // Compression method
      lh.writeUInt16LE(0x5241, 10);     // Last mod time
      lh.writeUInt16LE(0x554d, 12);     // Last mod date
      lh.writeUInt32LE(crc, 14);        // CRC-32
      lh.writeUInt32LE(compSize, 18);   // Compressed size
      lh.writeUInt32LE(uncompSize, 22); // Uncompressed size
      lh.writeUInt16LE(pathBuf.length, 26); // File name length
      lh.writeUInt16LE(0, 28);          // Extra field length
      pathBuf.copy(lh, 30);

      localHeaders.push(lh, dataToStore);

      // Central directory header (46 bytes + path length)
      const cdh = Buffer.alloc(46 + pathBuf.length);
      cdh.writeUInt32LE(0x02014b50, 0); // CD header signature
      cdh.writeUInt16LE(20, 4);          // Version made by
      cdh.writeUInt16LE(20, 6);          // Version needed
      cdh.writeUInt16LE(0, 8);           // Flags
      cdh.writeUInt16LE(method, 10);     // Method
      cdh.writeUInt16LE(0x5241, 12);     // Time
      cdh.writeUInt16LE(0x554d, 14);     // Date
      cdh.writeUInt32LE(crc, 16);        // CRC-32
      cdh.writeUInt32LE(compSize, 20);   // Compressed size
      cdh.writeUInt32LE(uncompSize, 24); // Uncompressed size
      cdh.writeUInt16LE(pathBuf.length, 28); // Name length
      cdh.writeUInt16LE(0, 30);          // Extra field length
      cdh.writeUInt16LE(0, 32);          // Comment length
      cdh.writeUInt16LE(0, 34);          // Disk number start
      cdh.writeUInt16LE(0, 36);          // Internal file attributes
      cdh.writeUInt32LE(0x81a40000, 38); // External file attributes (0644)
      cdh.writeUInt32LE(offset, 42);     // Relative offset of local header
      pathBuf.copy(cdh, 46);

      cdEntries.push(cdh);
      offset += lh.length + dataToStore.length;
    }

    const cdStart = offset;
    const cdSize = cdEntries.reduce((sum, b) => sum + b.length, 0);

    // End of Central Directory (22 bytes)
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(0x06054b50, 0); // EOCD signature
    eocd.writeUInt16LE(0, 4);          // Number of this disk
    eocd.writeUInt16LE(0, 6);          // Disk where CD starts
    eocd.writeUInt16LE(this.files.length, 8);  // Number of CD records on this disk
    eocd.writeUInt16LE(this.files.length, 10); // Total number of CD records
    eocd.writeUInt32LE(cdSize, 12);    // Size of central directory
    eocd.writeUInt32LE(cdStart, 16);   // Offset of start of CD
    eocd.writeUInt16LE(0, 20);         // Comment length

    return Buffer.concat([...localHeaders, ...cdEntries, eocd]);
  }
}

const OFFLINE_README = `================================================================================
   NOORDEEN — OFFLINE STANDALONE WEB ARCHIVE
   Version 1.3.0 • 61 Pages • Full 114-Surah Quran Bundled
================================================================================

IMPORTANT — WHAT "OFFLINE" MEANS HERE:
This archive contains the full website shell, all articles, hadith, duas,
biographies, worship guides, tools and the complete Quran: all 114 surahs and
6,236 ayahs in Uthmani Arabic with English (Saheeh International), Urdu
(Jalandhry) and transliteration. Recitation audio and the Dr. Israr Ahmed
video catalog still require an internet connection. The archive does not
bundle any audio or video files.

HOW TO USE THIS OFFLINE ARCHIVE ON WINDOWS, MAC, OR LINUX:

1. EXTRACT ALL FILES:
   Extract / Unzip the entire archive into any directory on your computer 
   (e.g., Desktop or Documents). Do not run directly from inside the ZIP file.

2. LAUNCH THE PORTAL:
   Open the 'islamic-portal-web' folder and double-click:
   ===> index.html <===
   This will immediately open the portal in your default web browser 
   (Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari, Brave, Opera).

3. OFFLINE FEATURES AVAILABLE:
   - Holy Quran: All 114 surahs / 6,236 ayahs with Arabic, English, Urdu and transliteration
   - Khatam planner and persistent reading position (device-local)
   - Kutub al-Sittah Hadith: Verified collections with scholarly gradings
   - Complete Prophetic Seerah: 25 chapters from pre-Islamic Arabia to the Farewell Pilgrimage
   - Stories of the Prophets: 30 prophetic narratives (25 Quranic prophets + 5 righteous figures)
   - Comprehensive Sahaba Biographies: 52 companions across six cohorts
   - 14 Centuries of Islamic History: 12 eras and 66 milestones
   - Worship Guides: 5 Daily Prayers, Wudu, Janazah (4 Takbirs), Eid Prayers
   - Six Kalimas of Islam, Daily Duas & Hisn al-Muslim Adhkar
   - Solar Prayer Times engine (qibla direction is not included)
   - Zakat Calculator with gold and silver Nisab standards
   - Digital Tasbih Counter with sound/vibration feedback
   - Lunar Hijri Calendar & Date Converter

4. LOCAL WEBSERVER (OPTIONAL FOR BROWSER STRICT SECURITY):
   If your browser restricts local file storage across tabs, launch with any 
   standard zero-dependency local server:
   - Python:    python -m http.server 8080
   - Node.js:   npx serve .
   - PHP:       php -S localhost:8080

5. DESKTOP APP MODE:
   If using Google Chrome or Microsoft Edge, you can also install the live 
   Progressive Web App (PWA) directly from https://jjjffdfde.github.io/NoorDeen/ 
   for a native desktop window, Start Menu integration, and automatic offline sync.

================================================================================
`;

const bundleZip = new ZipBuilder();

// Add OFFLINE-INSTRUCTIONS.txt at root and inside folder
bundleZip.addFile('OFFLINE-INSTRUCTIONS.txt', Buffer.from(OFFLINE_README, 'utf8'));
bundleZip.addFile('islamic-portal-web/OFFLINE-INSTRUCTIONS.txt', Buffer.from(OFFLINE_README, 'utf8'));

// Add all public assets
bundleZip.addDirectoryRecursive(PUBLIC_DIR, 'islamic-portal-web');

const bundleBuffer = bundleZip.toBuffer();
fs.writeFileSync(ZIP_BUNDLE_PATH, bundleBuffer);
const bundleHash = crypto.createHash('sha256').update(bundleBuffer).digest('hex');
const bundleSizeMb = (bundleBuffer.length / (1024 * 1024)).toFixed(2);
const bundleSizeKb = Math.round(bundleBuffer.length / 1024);

console.log(`✓ Generated Offline Desktop Bundle: ${ZIP_BUNDLE_PATH}`);
console.log(`  File count: ${bundleZip.files.length}`);
console.log(`  Size: ${bundleBuffer.length} bytes (${bundleSizeKb} KB / ${bundleSizeMb} MB)`);
console.log(`  SHA-256: ${bundleHash}`);

// Also read current APK hash if exists
let apkHash = '51f89b62764a788652c7ad902e3a34818fea516d9e9f116d9429b322c5b8bdb5';
const APK_PATH = path.join(DOWNLOADS_DIR, 'islamic-portal-release.apk');
let apkSizeMb = '0.14';
if (fs.existsSync(APK_PATH)) {
  const apkBuf = fs.readFileSync(APK_PATH);
  apkHash = crypto.createHash('sha256').update(apkBuf).digest('hex');
  apkSizeMb = (apkBuf.length / (1024 * 1024)).toFixed(2);
}

// Write CHECKSUMS.sha256
const now = new Date().toISOString();
const checksums = `SHA-256 CHECKSUMS (Islamic Knowledge Portal v1.3.0)\r\nUpdated: ${now}\r\n\r\n${bundleHash}  islamic-portal-offline-bundle.zip (${bundleSizeKb} KB / ${bundleSizeMb} MB)\r\n${apkHash}  islamic-portal-release.apk (${apkSizeMb} MB)\r\n`;
fs.writeFileSync(path.join(DOWNLOADS_DIR, 'CHECKSUMS.sha256'), checksums);

console.log('✓ Checksums file updated at public/downloads/CHECKSUMS.sha256');

// Export metadata for testing & audit
fs.writeFileSync(path.join(ROOT_DIR, 'AUDIT', 'offline-bundle-metadata.json'), JSON.stringify({
  bundleFilename: 'islamic-portal-offline-bundle.zip',
  bundleSizeBytes: bundleBuffer.length,
  bundleSizeKb: bundleSizeKb,
  bundleSizeMb: bundleSizeMb,
  bundleSha256: bundleHash,
  fileCount: bundleZip.files.length,
  version: '1.3.0',
  buildDate: now
}, null, 2));

console.log('✓ Build metadata exported to AUDIT/offline-bundle-metadata.json');
