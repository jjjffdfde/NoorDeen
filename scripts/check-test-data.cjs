const fs = require('fs');
const content = fs.readFileSync('test/run-tests.js', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('data.js') || lines[i].includes('ISLAMIC_DATA')) {
    console.log(`${i+1}: ${lines[i]}`);
  }
}
