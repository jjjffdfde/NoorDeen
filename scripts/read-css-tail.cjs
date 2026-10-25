const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');
console.log(css.split('\n').slice(-70).join('\n'));
