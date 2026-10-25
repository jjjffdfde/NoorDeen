const fs = require('fs');

const content = fs.readFileSync('public/wudu-guide.html', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('<h2')) {
    console.log(`Line ${i+1}: ${lines[i].replace(/<[^>]+>/g, '').trim()}`);
  }
}
