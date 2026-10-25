const fs = require('fs');

const sahaba = fs.readFileSync('public/sahaba.html', 'utf8');
const lines = sahaba.split('\n');
console.log('sahaba.html total lines:', lines.length);

lines.slice(Math.max(0, lines.length - 60)).forEach((l, i) => console.log(`${lines.length - 60 + i + 1}: ${l}`));
