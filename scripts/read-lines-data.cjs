const fs = require('fs');
const lines = fs.readFileSync('public/js/data.js', 'utf8').split('\n');
console.log('--- Lines 395 - 415 ---');
console.log(lines.slice(394, 415).join('\n'));
console.log('--- Lines 650 - 668 ---');
console.log(lines.slice(649, 668).join('\n'));
