const fs = require('fs');
const path = require('path');

function searchDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git' || e.name === 'brain') continue;
    const full = path.join(dir, e.name);
    if (e.isDirectory()) {
      searchDir(full);
    } else if (e.isFile() && (full.endsWith('.js') || full.endsWith('.html') || full.endsWith('.json') || full.endsWith('.cjs'))) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('11:30') || content.includes('Islamabad') || content.includes('Gujranwala') || content.includes('Multan')) {
        console.log(`Match in ${full}`);
      }
    }
  }
}

searchDir('.');
