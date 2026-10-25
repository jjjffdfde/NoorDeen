const fs = require('fs');

console.log('=== public/robots.txt ===');
console.log(fs.readFileSync('public/robots.txt', 'utf8'));

console.log('=== public/manifest.json ===');
console.log(fs.readFileSync('public/manifest.json', 'utf8'));

console.log('=== capacitor.config.json ===');
console.log(fs.readFileSync('capacitor.config.json', 'utf8'));

console.log('=== public/downloads/CHECKSUMS.sha256 ===');
console.log(fs.readFileSync('public/downloads/CHECKSUMS.sha256', 'utf8'));

console.log('=== public/sitemap.xml (first 40 lines) ===');
const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
console.log(sitemap.split('\n').slice(0, 40).join('\n'));
console.log('Total URLs in sitemap:', (sitemap.match(/<loc>/g) || []).length);
