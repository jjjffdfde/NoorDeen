const fs = require('fs');

const pt = fs.readFileSync('public/prayer-times.html', 'utf8');
const scriptMatches = pt.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
console.log('Script 8:');
console.log(scriptMatches[8]);
