const fs = require('fs');
const code = fs.readFileSync('public/js/i18n.js', 'utf8');
const lines = code.split('\n');
const idx = lines.findIndex(l => l.includes('applyLanguage(') || l.includes('translateDOM('));
console.log(lines.slice(idx - 10, idx + 60).join('\n'));
