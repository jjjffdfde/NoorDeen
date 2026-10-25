const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');

const regex = /keydown|keyup|keypress/g;
let m;
console.log('=== Keyboard events in app.js ===');
while ((m = regex.exec(appJs)) !== null) {
  console.log(appJs.substring(m.index - 20, m.index + 200));
  console.log('---');
}
