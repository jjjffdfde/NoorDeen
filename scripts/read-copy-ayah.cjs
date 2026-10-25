const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
const lines = code.split('\n');
const idx = lines.findIndex(l => l.includes('copyAyah('));
console.log(lines.slice(idx, idx + 45).join('\n'));
