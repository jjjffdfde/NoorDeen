const fs = require('fs');

const files = fs.readdirSync('scripts');
files.forEach(f => {
  if (f.includes('sahaba')) console.log('Script:', f);
});
