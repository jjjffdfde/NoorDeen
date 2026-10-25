const fs = require('fs');
const code = fs.readFileSync('public/js/i18n.js', 'utf8');
const lines = code.split('\n');
const idx = lines.findIndex(l => l.includes('translateDOM()'));
console.log(lines.slice(idx, idx + 60).join('\n'));
