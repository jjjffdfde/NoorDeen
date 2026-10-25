const fs = require('fs');
const code = fs.readFileSync('public/js/i18n.js', 'utf8');
console.log(code.split('\n').slice(0, 100).join('\n'));
