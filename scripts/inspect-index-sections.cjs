const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const lines = content.split('\n');
console.log('Total lines in index.html:', lines.length);

lines.forEach((l, i) => {
  if (l.includes('<section') || l.includes('class="container') || l.includes('Guided Learning') || l.includes('Frequently Asked')) {
    console.log((i + 1) + ': ' + l.trim().slice(0, 70));
  }
});
