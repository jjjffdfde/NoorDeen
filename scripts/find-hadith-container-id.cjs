const fs = require('fs');
const content = fs.readFileSync('public/hadith.html', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  if (l.includes('container') || l.includes('hadith-list') || l.includes('id=')) {
    if (l.includes('id=') && (l.includes('list') || l.includes('hadith') || l.includes('grid') || l.includes('cards'))) {
      console.log((i + 1) + ': ' + l.trim());
    }
  }
});
