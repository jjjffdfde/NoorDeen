const fs = require('fs');

// Read data.js and find top-level keys
const content = fs.readFileSync('public/js/data.js', 'utf8');
const keyMatches = content.match(/^\s*([a-zA-Z0-9_]+)\s*:\s*(\[|\{)/gm) || [];
console.log('Top-level keys in data.js:', keyMatches.map(k => k.trim()));

// Let's check hadith.html, sahaba.html, etc. to see where their data is stored
const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
console.log('hadith.html size:', hadithHtml.length);
const sahabaHtml = fs.readFileSync('public/sahaba.html', 'utf8');
console.log('sahaba.html size:', sahabaHtml.length);
const quranHtml = fs.readFileSync('public/quran.html', 'utf8');
console.log('quran.html size:', quranHtml.length);
