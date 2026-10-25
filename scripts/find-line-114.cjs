const fs = require('fs');

const content = fs.readFileSync('public/js/data.js', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('number: 114')) {
    console.log(lines.slice(i - 2, i + 8).join('\n'));
    break;
  }
}
