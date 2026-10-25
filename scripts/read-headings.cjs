const fs = require('fs');

const content = fs.readFileSync('scripts/phase7-prompt-full.txt', 'utf8');
const lines = content.split('\n');

const headings = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (line.startsWith('#')) {
    headings.push({ lineNum: i + 1, heading: line });
  }
}

console.log('--- Headings in Phase 7 prompt ---');
headings.forEach(h => console.log(`${h.lineNum}: ${h.heading}`));
