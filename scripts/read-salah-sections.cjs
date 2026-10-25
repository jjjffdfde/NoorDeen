const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');

const sections = [...content.matchAll(/<section[^>]*id="([^"]+)"[^>]*>/gi)].map(m => m[1]);
console.log('Sections in salah-guide.html:', sections);
