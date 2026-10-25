const fs = require('fs');

const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
const lines = hadithHtml.split('\n');
lines.slice(365, 440).forEach((l, i) => console.log(`${365 + i + 1}: ${l}`));
