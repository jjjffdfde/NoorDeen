const fs = require('fs');

const content = fs.readFileSync('public/js/tools.js', 'utf8');

const zakatMatch = content.match(/function calculateZakat[\s\S]*?^}/m) || content.match(/calculateZakat[\s\S]*?^}/m);
if (zakatMatch) {
  console.log('calculateZakat function:\n', zakatMatch[0]);
} else {
  console.log('Searching for zakat in tools.js:');
  const lines = content.split('\n');
  lines.forEach((l, idx) => {
    if (l.toLowerCase().includes('zakat')) console.log(`${idx+1}: ${l}`);
  });
}
