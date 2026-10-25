const fs = require('fs');
const testJs = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = testJs.split('\n');
console.log('--- Line 390-410 ---');
console.log(lines.slice(390, 410).join('\n'));
console.log('--- Line 585-605 ---');
console.log(lines.slice(585, 605).join('\n'));
console.log('--- Line 645-665 ---');
console.log(lines.slice(645, 665).join('\n'));
