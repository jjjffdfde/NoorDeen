const fs = require('fs');

const pt = fs.readFileSync('public/prayer-times.html', 'utf8');
const lines = pt.split('\n');
lines.slice(70, 200).forEach((l, i) => console.log(`${70 + i + 1}: ${l}`));
