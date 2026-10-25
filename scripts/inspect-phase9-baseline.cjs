const fs = require('fs');
const path = require('path');

console.log('=== Inspecting Root Files ===');
const rootFiles = fs.readdirSync('.');
console.log('Root directories/files:', rootFiles);

console.log('\n=== Inspecting public/ for SEO & PWA files ===');
['sitemap.xml', 'robots.txt', 'manifest.json', 'service-worker.js'].forEach(f => {
  const p = path.join('public', f);
  if (fs.existsSync(p)) {
    console.log(`- public/${f}: ${fs.statSync(p).size} bytes`);
  } else {
    console.log(`- public/${f}: NOT FOUND`);
  }
});

console.log('\n=== Checking android / capacitor / downloads ===');
['android', 'capacitor.config.json', 'capacitor.config.ts', 'public/downloads'].forEach(p => {
  if (fs.existsSync(p)) {
    console.log(`- ${p} exists!`);
    if (fs.statSync(p).isDirectory()) {
      console.log(`  Contents of ${p}:`, fs.readdirSync(p));
    }
  } else {
    console.log(`- ${p}: NOT FOUND`);
  }
});
