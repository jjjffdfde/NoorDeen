const fs = require('fs');

const content = fs.readFileSync('public/duas.html', 'utf8');
const scripts = [...content.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)];
console.log(scripts[1][1]);
