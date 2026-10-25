const fs = require('fs');
const path = require('path');

const css = fs.readFileSync(path.join(__dirname, '..', 'public', 'css', 'main.css'), 'utf-8');
const lines = css.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('.hero') && !l.includes('.hero-mandala')) {
    console.log(`${idx + 1}: ${l}`);
  }
});
