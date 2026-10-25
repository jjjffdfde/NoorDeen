const fs = require('fs');

const i18n = fs.readFileSync('public/js/i18n.js', 'utf8');
const lines = i18n.split('\n');
lines.slice(630, 675).forEach((l, i) => console.log(`${630 + i + 1}: ${l}`));
