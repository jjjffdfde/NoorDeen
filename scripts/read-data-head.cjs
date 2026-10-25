const fs = require('fs');
const lines = fs.readFileSync('public/js/data.js', 'utf8').split('\n');
console.log(lines.slice(0, 40).join('\n'));
