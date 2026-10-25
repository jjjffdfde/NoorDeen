const fs = require('fs');
const content = fs.readFileSync('public/hadith.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Collection Filter')) {
    console.log(lines.slice(Math.max(0, i - 3), i + 35).join('\n'));
    break;
  }
}
