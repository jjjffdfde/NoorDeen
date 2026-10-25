const fs = require('fs');

const dataJs = fs.readFileSync('public/js/data.js', 'utf8');
const lines = dataJs.split('\n');
console.log('data.js lines:', lines.length);

// Check exported objects / keys
lines.slice(0, 40).forEach((l, i) => console.log(`${i+1}: ${l}`));
