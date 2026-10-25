const fs = require('fs');
const html = fs.readFileSync('public/seerah.html', 'utf8');

const chIdx = html.indexOf('seerah-chapter-card');
console.log('Snippet of seerah chapter card:');
console.log(html.substring(chIdx - 50, chIdx + 1200));
