const fs = require('fs');

const content = fs.readFileSync('scripts/phase7-prompt-full.txt', 'utf8');
const lines = content.split('\n');

console.log(lines.slice(1075, 1145).join('\n'));
