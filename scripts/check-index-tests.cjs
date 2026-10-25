const fs = require('fs');
const testJs = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = testJs.split('\n');
lines.forEach((l, i) => {
  if (l.includes('index.html') || l.includes('suite1Pages') || l.includes('suite28Pages')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});
