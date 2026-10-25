const fs = require('fs');
const content = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(139, 175).join('\n'));
