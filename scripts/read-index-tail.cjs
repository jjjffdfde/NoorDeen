const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Lines 400-500 ---');
console.log(lines.slice(400, 500).join('\n'));

console.log('--- Lines 500-600 ---');
console.log(lines.slice(500, 600).join('\n'));
