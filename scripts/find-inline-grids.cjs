const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(pub).filter(f => f.endsWith('.html'));

console.log('--- Inline grid-template-columns search ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(pub, f), 'utf-8');
  const matches = content.match(/grid-template-columns:[^;\"']+/g);
  if (matches) {
    console.log(`${f}: ${matches.length} inline grids`);
    matches.forEach(m => console.log('   ' + m));
  }
}
