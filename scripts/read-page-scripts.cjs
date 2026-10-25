const fs = require('fs');

const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
const duasHtml = fs.readFileSync('public/duas.html', 'utf8');

console.log('hadith.html inline scripts:');
const hadithScripts = [...hadithHtml.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)];
hadithScripts.forEach((s, idx) => console.log(`Script ${idx+1}:\n`, s[1].slice(0, 300), '\n---'));

console.log('duas.html inline scripts:');
const duasScripts = [...duasHtml.matchAll(/<script(?![^>]*src)[^>]*>([\s\S]*?)<\/script>/gi)];
duasScripts.forEach((s, idx) => console.log(`Script ${idx+1}:\n`, s[1].slice(0, 300), '\n---'));
