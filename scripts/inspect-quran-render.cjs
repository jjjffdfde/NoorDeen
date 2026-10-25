const fs = require('fs');

const quranJs = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = quranJs.split('\n');

lines.forEach((l, i) => {
  if (l.includes('renderAyah') || l.includes('translation') || l.includes('I18n.subscribe') || l.includes('selectedLang')) {
    console.log(`quran.js line ${i+1}: ${l}`);
  }
});
