const fs = require('fs');
const s = fs.readFileSync('public/sitemap.xml', 'utf8');

const regex = /hreflang="([^"]+)"/g;
let m;
const langs = [];
while ((m = regex.exec(s)) !== null) {
  langs.push(m[1]);
}
console.log('All hreflang values in sitemap.xml:', langs);
