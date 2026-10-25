const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Lines 200-300 ---');
console.log(lines.slice(200, 300).join('\n'));

console.log('--- Lines 300-400 ---');
console.log(lines.slice(300, 400).join('\n'));
