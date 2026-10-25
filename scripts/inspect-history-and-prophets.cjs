const fs = require('fs');

const hist = fs.readFileSync('public/history.html', 'utf-8');
const proph = fs.readFileSync('public/prophets.html', 'utf-8');

// Find all occurrences of flex-wrap: gap
const allHtml = fs.readdirSync('public').filter(f => f.endsWith('.html'));
console.log('--- Checking flex-wrap: gap across files ---');
for (const f of allHtml) {
  const c = fs.readFileSync('public/' + f, 'utf-8');
  if (c.includes('flex-wrap: gap')) {
    console.log(`Found flex-wrap: gap in ${f}`);
  }
}

// In history.html, inspect era3 paragraphs
const era3Idx = hist.indexOf('id="era3"');
const era3End = hist.indexOf('</article>', era3Idx);
const era3Content = hist.slice(era3Idx, era3End);
console.log('\n--- Checking long lines / unbreakable words / tables in era3 ---');
const lines = era3Content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('<table') || l.includes('style="display: flex') || l.length > 300) {
    console.log(`era3 line ${idx}: ${l.slice(0, 100)}... (len ${l.length})`);
  }
});

// In prophets.html, inspect what has width or grid or long words
console.log('\n--- Checking wide items in prophets.html ---');
const pLines = proph.split('\n');
pLines.forEach((l, idx) => {
  if (l.includes('<table') || l.includes('grid-template-columns') || (l.includes('style="display: flex') && !l.includes('wrap'))) {
    console.log(`prophets line ${idx+1}: ${l.slice(0, 100)}`);
  }
});
