const fs = require('fs');
const code = fs.readFileSync('public/js/quran.js', 'utf8');
console.log('Top 40 lines of quran.js:');
console.log(code.split('\n').slice(0, 40).join('\n'));

console.log('\nBottom 30 lines of quran.js:');
console.log(code.split('\n').slice(-30).join('\n'));
