const fs = require('fs');

const css = fs.readFileSync('public/css/main.css', 'utf8');
const lines = css.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('editorial-page-container') || line.includes('sticky-toc-wrapper') || line.includes('editorial-content-body')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
