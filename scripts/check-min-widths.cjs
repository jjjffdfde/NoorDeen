const fs = require('fs');

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));
files.push('css/main.css');

files.forEach(f => {
  const content = fs.readFileSync('public/' + f, 'utf8');
  const matches = content.match(/min-width:\s*([3-9]\d{2}|[1-9]\d{3,})px/g);
  if (matches) {
    console.log(`File: ${f} has large min-width:`, [...new Set(matches)]);
  }
});
