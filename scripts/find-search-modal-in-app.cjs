const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('search-modal') || l.includes('openSearchModal')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
