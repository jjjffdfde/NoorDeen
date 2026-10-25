const fs = require('fs');
const content = fs.readFileSync('public/js/data.js', 'utf8');
const lines = content.split('\n');
console.log('Total lines in data.js:', lines.length);
console.log('Last 20 lines:\n', lines.slice(-20).join('\n'));
