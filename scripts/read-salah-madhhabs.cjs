const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');

const matches = [...content.matchAll(/(?:Hanafi|Shafi|Maliki|Hanbali)[^\n]+/gi)].map(m => m[0]);
console.log('Madhhab references in salah-guide.html:');
matches.forEach((m, idx) => console.log(`  ${idx + 1}. ${m.trim()}`));
