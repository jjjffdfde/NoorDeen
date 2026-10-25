const fs = require('fs');
for (const f of ['search.js', 'app.js']) {
  const code = fs.readFileSync('public/js/' + f, 'utf8');
  if (code.includes('search-modal') || code.includes('search-overlay')) {
    console.log(`Found in public/js/${f}`);
  }
}
