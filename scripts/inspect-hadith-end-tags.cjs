const fs = require('fs');
const content = fs.readFileSync('public/hadith.html', 'utf8');
const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.includes('id="hadiths-list-container"'));
console.log('hadith-list-container line:', startIdx + 1);

// Look around line 1250 - 1270
console.log('Lines 1250 to 1275:\n', lines.slice(1250, 1275).map((l, i) => `${1251 + i}: ${l}`).join('\n'));
