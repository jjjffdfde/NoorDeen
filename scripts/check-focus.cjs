const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');

const regex = /[^{}]*:focus[^{}]*\{([^}]+)\}/g;
let m;
console.log('=== Focus Rules in main.css ===');
while ((m = regex.exec(css)) !== null) {
  console.log(m[0].trim());
}
