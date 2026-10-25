const fs = require('fs');

const i18n = fs.readFileSync('public/js/i18n.js', 'utf8');
const lines = i18n.split('\n');
console.log('Total lines:', lines.length);
// print tail of i18n.js
lines.slice(Math.max(0, lines.length - 80)).forEach((l, i) => console.log(`${lines.length - 80 + i + 1}: ${l}`));
