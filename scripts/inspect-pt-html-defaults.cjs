const fs = require('fs');

const pt = fs.readFileSync('public/prayer-times.html', 'utf8');
const lines = pt.split('\n');
lines.slice(315, 370).forEach((l, i) => console.log(`${315 + i + 1}: ${l}`));
