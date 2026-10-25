const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.match(/^\s*copyAyah\s*\(/)) {
    console.log(`Line ${i + 1}: ${l}`);
    console.log(lines.slice(i, i + 25).join('\n'));
  }
});
