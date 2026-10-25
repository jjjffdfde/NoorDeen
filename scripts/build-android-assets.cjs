const fs = require('fs');
const path = require('path');

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    // Avoid copying downloads folder (such as the apk itself) recursively into the apk assets!
    if (entry.name === 'downloads') continue;
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const assetsDir = path.join('android', 'app', 'src', 'main', 'assets');
const publicDest = path.join(assetsDir, 'public');

console.log('Copying web assets to android assets directory...');
copyDirRecursive('public', publicDest);

// Copy capacitor config
if (fs.existsSync('capacitor.config.json')) {
  fs.copyFileSync('capacitor.config.json', path.join(assetsDir, 'capacitor.config.json'));
}

console.log('Android assets synced successfully.');
