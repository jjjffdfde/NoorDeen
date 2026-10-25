const fs = require('fs');
const html = fs.readFileSync('public/quran.html', 'utf8');
const lines = html.split('\n');
console.log('--- Lines 165-180 ---');
console.log(lines.slice(164, 180).join('\n'));
console.log('--- Lines 530-550 ---');
console.log(lines.slice(530, 550).join('\n'));
