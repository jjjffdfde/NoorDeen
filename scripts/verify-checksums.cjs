const fs = require('fs');
const crypto = require('crypto');

function getHash(filePath) {
  const fileBuffer = fs.readFileSync(filePath);
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);
  return {
    hash: hashSum.digest('hex'),
    size: fileBuffer.length
  };
}

console.log('=== Actual SHA-256 of Download Assets ===');
const apk = getHash('public/downloads/islamic-portal-release.apk');
console.log('APK:', apk.hash, `(${apk.size} bytes)`);

const zip = getHash('public/downloads/islamic-portal-offline-bundle.zip');
console.log('ZIP:', zip.hash, `(${zip.size} bytes)`);

console.log('\n=== Content of CHECKSUMS.sha256 ===');
const checksums = fs.readFileSync('public/downloads/CHECKSUMS.sha256', 'utf8');
console.log(checksums);

console.log('APK matches?', checksums.includes(apk.hash));
console.log('ZIP matches?', checksums.includes(zip.hash));
