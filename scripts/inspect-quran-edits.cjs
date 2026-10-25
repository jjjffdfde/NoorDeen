const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = code.split('\n');
console.log('--- Lines 452 to 468 ---');
console.log(lines.slice(452, 468).join('\n'));
console.log('--- Lines 712 to 726 ---');
console.log(lines.slice(712, 726).join('\n'));
