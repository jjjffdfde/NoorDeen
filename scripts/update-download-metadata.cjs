const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const apkPath = path.resolve('public/downloads/islamic-portal-release.apk');
const zipPath = path.resolve('public/downloads/islamic-portal-offline-bundle.zip');
const checksumsPath = path.resolve('public/downloads/CHECKSUMS.sha256');
const downloadHtmlPath = path.resolve('public/download-app.html');
const metadataPath = path.resolve('AUDIT/apk-metadata.json');

if (!fs.existsSync(apkPath)) {
  console.error('APK file not found at:', apkPath);
  process.exit(1);
}

const apkBuffer = fs.readFileSync(apkPath);
const apkSize = apkBuffer.length;
const apkSha = crypto.createHash('sha256').update(apkBuffer).digest('hex');

let zipSha = '';
let zipSize = 0;
if (fs.existsSync(zipPath)) {
  const zipBuffer = fs.readFileSync(zipPath);
  zipSize = zipBuffer.length;
  zipSha = crypto.createHash('sha256').update(zipBuffer).digest('hex');
}

console.log(`Release APK Size: ${apkSize} bytes`);
console.log(`Release APK SHA-256: ${apkSha}`);
if (zipSha) {
  console.log(`Offline Bundle ZIP Size: ${zipSize} bytes`);
  console.log(`Offline Bundle ZIP SHA-256: ${zipSha}`);
}

// 1. Update CHECKSUMS.sha256
const checksumsContent = `${apkSha}  islamic-portal-release.apk\n${zipSha}  islamic-portal-offline-bundle.zip\n`;
fs.writeFileSync(checksumsPath, checksumsContent, 'utf8');
console.log('Updated public/downloads/CHECKSUMS.sha256');

// 2. Update public/download-app.html
let html = fs.readFileSync(downloadHtmlPath, 'utf8');

// Replace any occurrence of the old 51f89b... hash or placeholder
html = html.replace(/51f89b62764a788652c7ad902e3a34818fea516d9e9f116d9429b322c5b8bdb5/g, apkSha);

// Update inlined fallback in script if present
html = html.replace(/(apkDisplay\.textContent\s*=\s*['"])[a-f0-9]{64}(['"])/g, `$1${apkSha}$2`);

fs.writeFileSync(downloadHtmlPath, html, 'utf8');
console.log('Updated public/download-app.html');

// 3. Update AUDIT/apk-metadata.json
const metadata = {
  versionName: "1.2.0",
  versionCode: 10200,
  minSdk: 22,
  targetSdk: 34,
  compileSdk: 34,
  packageId: "com.islamicknowledge.portal",
  appName: "NoorDeen",
  apkSize: apkSize,
  apkSha256: apkSha,
  zipSize: zipSize,
  zipSha256: zipSha,
  lastUpdated: new Date().toISOString()
};

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2) + '\n', 'utf8');
console.log('Updated AUDIT/apk-metadata.json');
