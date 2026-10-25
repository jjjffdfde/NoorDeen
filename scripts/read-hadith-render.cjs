const fs = require('fs');
const html = fs.readFileSync('public/hadith.html', 'utf8');
const lines = html.split('\n');
console.log(lines.slice(425, 465).join('\n'));
