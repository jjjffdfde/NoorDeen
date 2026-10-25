const fs = require('fs');
const testJs = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = testJs.split('\n');
console.log(lines.slice(-60).join('\n'));
