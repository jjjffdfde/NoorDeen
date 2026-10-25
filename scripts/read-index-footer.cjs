const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');
const lines = html.split('\n');

console.log('--- Lines 600-750 ---');
console.log(lines.slice(600, 750).join('\n'));

console.log('--- Lines 750 to end ---');
console.log(lines.slice(750).join('\n'));
