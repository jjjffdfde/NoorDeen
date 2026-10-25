const fs = require('fs');

const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');

lines.forEach((l, i) => {
  if (l.includes('selectLanguage') || l.includes('openLanguageModal') || l.includes('renderLanguageModal') || l.includes('current-language-label')) {
    console.log(`app.js line ${i+1}: ${l}`);
  }
});
