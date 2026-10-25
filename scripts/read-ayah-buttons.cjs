const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = code.split('\n');
console.log(lines.slice(445, 475).join('\n'));
