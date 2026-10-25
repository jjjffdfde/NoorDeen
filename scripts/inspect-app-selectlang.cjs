const fs = require('fs');

const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');
lines.slice(725, 765).forEach((l, i) => console.log(`${725 + i + 1}: ${l}`));
