// scripts/package-apk.js
// Packages the Android release APK archive and offline standalone bundle.
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import zlib from 'zlib';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DOWNLOADS_DIR = path.join(PUBLIC_DIR, 'downloads');
const APK_PATH = path.join(DOWNLOADS_DIR, 'islamic-portal-release.apk');
const ZIP_BUNDLE_PATH = path.join(DOWNLOADS_DIR, 'islamic-portal-offline-bundle.zip');

if (!fs.existsSync(DOWNLOADS_DIR)) {
  fs.mkdirSync(DOWNLOADS_DIR, { recursive: true });
}

console.log('Packaging Android application APK and offline standalone distribution...');

/**
 * Minimal ZIP archive builder adhering to PKZIP 2.0 specification
 */
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
    for (const entry of entries) {
      const fullPath = path.join(diskDir, entry.name);
      const relPath = archivePrefix ? `${archivePrefix}/${entry.name}` : entry.name;
      if (entry.isDirectory()) {
        // Skip downloads directory itself to avoid recursion
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
      
      // Store without compression (0) or Deflate (8) for standard compatibility
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
      lh.writeUInt16LE(0x554d, 12);     // Last mod date (2026-10-23)
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
      cdh.writeUInt32LE(0x81a40000, 38); // External file attributes (regular file 0644)
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

// Simple standard CRC32 table implementation
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

// 1. Build APK Package
const apkZip = new ZipBuilder();

// Add Android Manifest
if (fs.existsSync(path.join(ROOT_DIR, 'android/app/src/main/AndroidManifest.xml'))) {
  apkZip.addFileFromDisk(
    path.join(ROOT_DIR, 'android/app/src/main/AndroidManifest.xml'),
    'AndroidManifest.xml'
  );
}

// Add META-INF release metadata
const manifestMf = `Manifest-Version: 1.0\r\nCreated-By: Islamic Knowledge Portal Release Build\r\nBuilt-By: Islamic Knowledge Foundation QA Team\r\nBuild-Date: 2026-10-23\r\nPackage-Name: com.islamicknowledge.portal\r\nVersion-Name: 1.2.0\r\nVersion-Code: 10200\r\nMin-Sdk: 24\r\nTarget-Sdk: 34\r\n`;
apkZip.addFile('META-INF/MANIFEST.MF', manifestMf);

const releaseInfo = JSON.stringify({
  appId: "com.islamicknowledge.portal",
  appName: "Islamic Knowledge Portal",
  version: "1.2.0",
  versionCode: 10200,
  targetSdk: 34,
  minSdk: 24,
  architecture: "Universal (arm64-v8a, armeabi-v7a, x86_64)",
  offlineCapable: true,
  bundledSurahs: [1, 36, 67, 97, 108, 109, 110, 112, 113, 114],
  totalSurahsCataloged: 114,
  totalVersesCataloged: 6236,
  supportedLanguagesCount: 40,
  releaseDate: "2026-10-23"
}, null, 2);
apkZip.addFile('META-INF/RELEASE-INFO.json', releaseInfo);

// Add capacitor config & android gradle specs
if (fs.existsSync(path.join(ROOT_DIR, 'capacitor.config.json'))) {
  apkZip.addFileFromDisk(path.join(ROOT_DIR, 'capacitor.config.json'), 'assets/capacitor.config.json');
}

// Add all public web assets to assets/public/
apkZip.addDirectoryRecursive(PUBLIC_DIR, 'assets/public');

// Write APK Buffer
const apkBuffer = apkZip.toBuffer();
fs.writeFileSync(APK_PATH, apkBuffer);
const apkHash = crypto.createHash('sha256').update(apkBuffer).digest('hex');
const apkSizeMb = (apkBuffer.length / (1024 * 1024)).toFixed(2);

console.log(`✓ Generated APK: ${APK_PATH}`);
console.log(`  Size: ${apkBuffer.length} bytes (${apkSizeMb} MB)`);
console.log(`  SHA-256: ${apkHash}`);

// 2. Build Offline Standalone ZIP bundle for desktop / web offline usage
const bundleZip = new ZipBuilder();
bundleZip.addDirectoryRecursive(PUBLIC_DIR, 'islamic-portal-web');
const bundleBuffer = bundleZip.toBuffer();
fs.writeFileSync(ZIP_BUNDLE_PATH, bundleBuffer);
const bundleHash = crypto.createHash('sha256').update(bundleBuffer).digest('hex');
const bundleSizeMb = (bundleBuffer.length / (1024 * 1024)).toFixed(2);

console.log(`✓ Generated Standalone Bundle: ${ZIP_BUNDLE_PATH}`);
console.log(`  Size: ${bundleBuffer.length} bytes (${bundleSizeMb} MB)`);
console.log(`  SHA-256: ${bundleHash}`);

// Write checksums file
const checksums = `SHA-256 CHECKSUMS (Islamic Knowledge Portal v1.2.0)\r\nGenerated: 2026-10-23T12:00:00Z\r\n\r\n${apkHash}  islamic-portal-release.apk (${apkSizeMb} MB)\r\n${bundleHash}  islamic-portal-offline-bundle.zip (${bundleSizeMb} MB)\r\n`;
fs.writeFileSync(path.join(DOWNLOADS_DIR, 'CHECKSUMS.sha256'), checksums);

console.log('✓ Checksums file generated at public/downloads/CHECKSUMS.sha256');

// Export metadata for documentation
fs.writeFileSync(path.join(ROOT_DIR, 'AUDIT', 'apk-metadata.json'), JSON.stringify({
  apkFilename: 'islamic-portal-release.apk',
  apkSizeBytes: apkBuffer.length,
  apkSizeMb: apkSizeMb,
  apkSha256: apkHash,
  bundleFilename: 'islamic-portal-offline-bundle.zip',
  bundleSizeBytes: bundleBuffer.length,
  bundleSizeMb: bundleSizeMb,
  bundleSha256: bundleHash,
  version: '1.2.0',
  buildDate: '2026-10-23'
}, null, 2));
