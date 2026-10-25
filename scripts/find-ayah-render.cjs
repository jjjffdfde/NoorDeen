const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = code.split('\n');
lines.forEach((l, i) => {
  if (l.includes('copyAyah(')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
