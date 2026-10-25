const fs = require('fs');
const rep = fs.readFileSync('scripts/juzlist-replacement.txt', 'utf8');
console.log(rep.slice(0, 500));
console.log('...\n', rep.slice(-300));
