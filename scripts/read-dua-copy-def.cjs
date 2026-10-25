const fs = require('fs');
const html = fs.readFileSync('public/duas.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(460, 485).join('\n'));
