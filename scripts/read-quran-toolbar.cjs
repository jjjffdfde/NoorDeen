const fs = require('fs');
const html = fs.readFileSync('public/quran.html', 'utf8');
const lines = html.split('\n');
lines.forEach((l, i) => {
  if (l.includes('surah-select') || l.includes('juz-select') || l.includes('quran-toolbar')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
