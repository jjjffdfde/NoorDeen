const fs = require('fs');

const content = fs.readFileSync('public/wudu-guide.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('Common Mistakes to Avoid')) {
    console.log(lines.slice(Math.max(0, i - 10), i + 5).join('\n'));
    break;
  }
}
