const fs = require('fs');

const css = fs.readFileSync('public/css/main.css', 'utf8');
const lines = css.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('nav-dropdown') || line.includes('dropdown-menu') || line.includes('desktop-nav')) {
    console.log(`Line ${idx + 1}: ${line}`);
  }
});
