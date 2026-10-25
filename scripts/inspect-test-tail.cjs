const fs = require('fs');

const testJs = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = testJs.split('\n');
console.log('Total lines in test/run-tests.js:', lines.length);
lines.slice(Math.max(0, lines.length - 80)).forEach((l, i) => console.log(`${lines.length - 80 + i + 1}: ${l}`));
