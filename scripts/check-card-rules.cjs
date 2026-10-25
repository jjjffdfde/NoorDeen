const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');

const regex = /\.card[^{]*\{([^}]+)\}/g;
let m;
console.log('=== .card in main.css ===');
while ((m = regex.exec(css)) !== null) {
  console.log(m[0].trim());
}
