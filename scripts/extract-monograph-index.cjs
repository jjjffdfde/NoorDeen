const fs = require('fs');

console.log('--- SEERAH CHAPTERS ---');
const seerah = fs.readFileSync('public/seerah.html', 'utf8');
const seerahMatches = [...seerah.matchAll(/id="(ch\d+)"[^>]*>[\s\S]*?<h2[^>]*>([^<]+)<\/h2>/g)];
console.log('Seerah count:', seerahMatches.length);
seerahMatches.slice(0, 5).forEach(m => console.log(m[1], '->', m[2].trim()));

console.log('\n--- SAHABA BIOGRAPHIES ---');
const sahaba = fs.readFileSync('public/sahaba.html', 'utf8');
const sahabaMatches = [...sahaba.matchAll(/id="([a-z0-9-]+)" class="card sahaba-card"[^>]*>[\s\S]*?<h2[^>]*>([^<]+)<\/h2>/g)];
console.log('Sahaba count:', sahabaMatches.length);
sahabaMatches.slice(0, 5).forEach(m => console.log(m[1], '->', m[2].trim()));

console.log('\n--- PROPHETS NARRATIVES ---');
const prophets = fs.readFileSync('public/prophets.html', 'utf8');
const prophetMatches = [...prophets.matchAll(/id="([a-z0-9-]+)" class="card prophet-card"[^>]*>[\s\S]*?<h2[^>]*>([^<]+)<\/h2>/g)];
console.log('Prophets count:', prophetMatches.length);
prophetMatches.slice(0, 5).forEach(m => console.log(m[1], '->', m[2].trim()));

console.log('\n--- HISTORY ERAS ---');
const history = fs.readFileSync('public/history.html', 'utf8');
const historyMatches = [...history.matchAll(/id="(era\d+)" class="card era-card"[^>]*>[\s\S]*?<h2[^>]*>([^<]+)<\/h2>/g)];
console.log('History count:', historyMatches.length);
historyMatches.slice(0, 5).forEach(m => console.log(m[1], '->', m[2].trim()));
