const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Lines 50-120 ---');
console.log(lines.slice(50, 120).join('\n'));

console.log('--- Lines 120-200 ---');
console.log(lines.slice(120, 200).join('\n'));
