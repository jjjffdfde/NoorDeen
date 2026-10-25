const fs = require('fs');

const pt = fs.readFileSync('public/prayer-times.html', 'utf8');
const lines = pt.split('\n');
lines.slice(200, 320).forEach((l, i) => console.log(`${200 + i + 1}: ${l}`));
