const fs = require('fs');
const path = require('path');

const resDir = path.join('android', 'app', 'src', 'main', 'res');

const mipmaps = [
  'mipmap-mdpi',
  'mipmap-hdpi',
  'mipmap-xhdpi',
  'mipmap-xxhdpi',
  'mipmap-xxxhdpi'
];

const icon192 = fs.readFileSync('public/icons/icon-192.png');
const icon512 = fs.readFileSync('public/icons/icon-512.png');

mipmaps.forEach(m => {
  const dir = path.join(resDir, m);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'ic_launcher.png'), icon192);
  fs.writeFileSync(path.join(dir, 'ic_launcher_round.png'), icon192);
});

const anydpiDir = path.join(resDir, 'mipmap-anydpi-v26');
if (!fs.existsSync(anydpiDir)) fs.mkdirSync(anydpiDir, { recursive: true });

const adaptiveXml = `<?xml version="1.0" encoding="utf-8"?>
<adaptive-icon xmlns:android="http://schemas.android.com/apk/res/android">
    <background android:drawable="@color/ic_launcher_background"/>
    <foreground android:drawable="@drawable/ic_launcher_foreground"/>
</adaptive-icon>
`;

fs.writeFileSync(path.join(anydpiDir, 'ic_launcher.xml'), adaptiveXml);
fs.writeFileSync(path.join(anydpiDir, 'ic_launcher_round.xml'), adaptiveXml);

const bgXml = `<?xml version="1.0" encoding="utf-8"?>
<vector xmlns:android="http://schemas.android.com/apk/res/android">
    <path
        android:fillColor="#176B5B"
        android:pathData="M0,0h108v108h-108z"/>
</vector>
`;
fs.writeFileSync(path.join(resDir, 'drawable', 'ic_launcher_background.xml'), bgXml);
fs.writeFileSync(path.join(resDir, 'drawable', 'splash.png'), icon512);

console.log('Successfully created all Android mipmap and drawable icon resources!');
