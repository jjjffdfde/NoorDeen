const fs = require('fs');
const content = fs.readFileSync('public/js/data.js', 'utf8');
const lines = content.split('\n');
lines.forEach((l, i) => {
  const trimmed = l.trim();
  if (trimmed.startsWith('hadiths:') || trimmed.startsWith('duas:') || trimmed.startsWith('kalimas:') || trimmed.startsWith('offlineSurahs:')) {
    console.log((i + 1) + ': ' + trimmed.slice(0, 40));
  }
});
