const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');

const regex = /\.(reading|prose|article|monograph)[^{]*\{([^}]+)\}/g;
let m;
console.log('=== Reading & Article Classes in main.css ===');
while ((m = regex.exec(css)) !== null) {
  console.log(m[0].trim());
}
