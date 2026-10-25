const fs = require('fs');
const searchJs = fs.readFileSync('public/js/search.js', 'utf8');
const types = [...searchJs.matchAll(/type:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Unique search types:', [...new Set(types)]);
