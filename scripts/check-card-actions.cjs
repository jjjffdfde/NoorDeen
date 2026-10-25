const fs = require('fs');
const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
console.log('hadith.html has copy button?', hadithHtml.includes('copy') || hadithHtml.includes('Copy'));
console.log('hadith.html has share button?', hadithHtml.includes('share') || hadithHtml.includes('Share'));

const duasHtml = fs.readFileSync('public/duas.html', 'utf8');
console.log('duas.html has copy button?', duasHtml.includes('copy') || duasHtml.includes('Copy'));
console.log('duas.html has share button?', duasHtml.includes('share') || duasHtml.includes('Share'));
