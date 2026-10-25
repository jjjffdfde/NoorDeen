const fs = require('fs');

const i18n = fs.readFileSync('public/js/i18n.js', 'utf8');
const lines = i18n.split('\n');
lines.slice(670, 740).forEach((l, i) => console.log(`${670 + i + 1}: ${l}`));
