const fs = require('fs');

const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
const lines = hadithHtml.split('\n');

lines.forEach((l, i) => {
  if (l.includes('renderHadiths') || l.includes('function render') || l.includes('I18n.subscribe')) {
    console.log(`hadith.html line ${i+1}: ${l}`);
  }
});
