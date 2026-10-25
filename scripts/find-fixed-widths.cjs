const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(pub).filter(f => f.endsWith('.html'));

console.log('--- Checking exact inline width matches ---');
for (const f of files) {
  const content = fs.readFileSync(path.join(pub, f), 'utf-8');
  // Look for style="..." containing width: (not max-width)
  const regex = /style="[^"]*?(?<!max-)(width|min-width):\s*([0-9]+px)[^"]*"/g;
  let match;
  const found = [];
  while ((match = regex.exec(content)) !== null) {
    found.push(match[0]);
  }
  if (found.length > 0) {
    console.log(`${f}: ${found.length} matches`);
    found.forEach(s => console.log('   ' + s));
  }
}
