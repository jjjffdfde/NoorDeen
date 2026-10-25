const fs = require('fs');
const html = fs.readFileSync('public/duas.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('copy') || l.includes('Copy')) {
    console.log(`Line ${i + 1}: ${l.trim()}`);
  }
});
