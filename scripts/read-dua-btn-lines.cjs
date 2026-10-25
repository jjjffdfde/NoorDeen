const fs = require('fs');

const content = fs.readFileSync('public/duas.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('dua-filter-btn')) {
    console.log(lines.slice(Math.max(0, i - 3), i + 12).join('\n'));
    break;
  }
}
