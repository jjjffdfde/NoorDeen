const fs = require('fs');

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));

console.log('=== Checking for inline styles with fixed widths >= 320px in HTML files ===');
let foundAny = false;

files.forEach(f => {
  const content = fs.readFileSync('public/' + f, 'utf8');
  const matches = content.match(/style="[^"]*width:\s*([3-9]\d{2}|[1-9]\d{3,})px[^"]*"/g);
  if (matches) {
    foundAny = true;
    console.log(`\nFile: ${f}`);
    matches.forEach(m => console.log('  ' + m));
  }
});

if (!foundAny) {
  console.log('No fixed width >= 320px in inline styles.');
}
