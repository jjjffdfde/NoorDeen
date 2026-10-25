const fs = require('fs');

const s1 = fs.readFileSync('scripts/sahaba-data-part1.js', 'utf8');
console.log('sahaba-data-part1.js length:', s1.length);
console.log('Sample:', s1.slice(0, 500));
