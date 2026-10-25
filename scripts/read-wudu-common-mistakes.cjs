const fs = require('fs');

const content = fs.readFileSync('public/wudu-guide.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('id="common-mistakes"')) {
    console.log(lines.slice(Math.max(0, i - 5), i + 10).join('\n'));
    break;
  }
}
