const fs = require('fs');
const content = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = content.split('\n');
lines.forEach((line, idx) => {
  if (line.includes('index.html') && (line.includes('[') || line.includes('const') || line.includes('assert'))) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
  if (line.includes('.length === 25') || line.includes('.length == 25') || line.includes('25 HTML')) {
    console.log(`L${idx+1}: ${line.trim()}`);
  }
});
