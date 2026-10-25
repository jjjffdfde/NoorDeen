const fs = require('fs');
const code = fs.readFileSync('public/js/search.js', 'utf8');
console.log('Top 50 lines of search.js:');
console.log(code.split('\n').slice(0, 50).join('\n'));
