const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');
const idx = lines.findIndex(l => l.includes('openLanguageModal()'));
console.log(lines.slice(idx, idx + 60).join('\n'));
