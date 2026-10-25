const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');

// Find major section headings or landmarks
const headings = [...html.matchAll(/<(?:h1|h2|h3|section)[^>]*>([\s\S]*?)<\/(?:h1|h2|h3|section)>/gi)].map(m => m[0].replace(/<[^>]+>/g, '').trim().slice(0, 100)).filter(Boolean);
console.log('Homepage headings & sections:');
console.log(headings.slice(0, 30));

console.log('\nLength of index.html:', html.length, 'bytes');
