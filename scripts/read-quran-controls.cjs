const fs = require('fs');
const html = fs.readFileSync('public/quran.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(150, 195).join('\n'));
