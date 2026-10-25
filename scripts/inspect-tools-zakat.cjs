const fs = require('fs');

const tools = fs.readFileSync('public/js/tools.js', 'utf8');
const lines = tools.split('\n');
lines.slice(180, 270).forEach((l, i) => console.log(`${180 + i + 1}: ${l}`));
