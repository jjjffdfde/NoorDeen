const fs = require('fs');

['scripts/sahaba-data-part1.js', 'scripts/sahaba-data-part2.js', 'scripts/sahaba-data-part3.js'].forEach(f => {
  if (!fs.existsSync(f)) {
    console.log('Missing:', f);
    return;
  }
  const code = fs.readFileSync(f, 'utf8');
  console.log(f, 'Length:', code.length);
  const ids = code.match(/id:\s*['"][^'"]+['"]/g) || [];
  console.log('IDs count:', ids.length, 'Samples:', ids.slice(0, 8));
});
