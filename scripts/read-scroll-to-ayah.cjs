const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('scrollToAyah(')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
    console.log(lines.slice(i, i + 20).join('\n'));
  }
});
