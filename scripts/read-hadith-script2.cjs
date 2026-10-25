const fs = require('fs');

const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
const duasHtml = fs.readFileSync('public/duas.html', 'utf8');

const hadithScript2 = [...hadithHtml.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)][1][1];
console.log('hadith.html Script 2 length:', hadithScript2.length);
console.log(hadithScript2.slice(0, 1500));
console.log('...\n', hadithScript2.slice(-1000));
