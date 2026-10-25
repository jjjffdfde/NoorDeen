const fs = require('fs');
const html = fs.readFileSync('public/index.html', 'utf8');

const modalIdx = html.indexOf('search-modal') !== -1 ? html.indexOf('search-modal') : html.indexOf('searchModal');
if (modalIdx !== -1) {
  console.log(html.substring(modalIdx - 100, modalIdx + 600));
} else {
  console.log('No search-modal string directly in index.html');
}

// Check search in app.js
const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const appSearchIdx = appJs.indexOf('search');
console.log('\n--- search in app.js ---');
const matches = [];
let pos = 0;
while ((pos = appJs.indexOf('search', pos)) !== -1) {
  matches.push(pos);
  pos += 6;
}
console.log('Found', matches.length, 'occurrences of "search" in app.js');
matches.slice(0, 5).forEach(p => {
  console.log('Snippet at', p, ':\n', appJs.substring(Math.max(0, p - 40), p + 120), '\n---');
});
