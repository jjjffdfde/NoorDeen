const fs = require('fs');
const appJs = fs.readFileSync('public/js/app.js', 'utf8');
const lines = appJs.split('\n');
lines.forEach((l, i) => {
  if (l.match(/^\s*setupLanguageModal\s*\(/)) {
    console.log(`Line ${i+1}: ${l}`);
    console.log(lines.slice(i, i + 40).join('\n'));
  }
});
