const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');
const idx = lines.findIndex(l => l.includes('setupLanguageModal('));
console.log(lines.slice(idx, idx + 50).join('\n'));
