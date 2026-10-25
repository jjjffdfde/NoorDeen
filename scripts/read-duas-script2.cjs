const fs = require('fs');

const duasHtml = fs.readFileSync('public/duas.html', 'utf8');
const duasScript2 = [...duasHtml.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)][1][1];
console.log('duas.html Script 2 length:', duasScript2.length);
console.log(duasScript2.slice(0, 1500));
console.log('...\n', duasScript2.slice(-1000));
