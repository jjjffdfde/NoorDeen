const fs = require('fs');
const content = fs.readFileSync('public/js/data.js', 'utf8');
console.log(content.slice(-500));
