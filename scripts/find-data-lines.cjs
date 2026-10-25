const fs = require('fs');

const content = fs.readFileSync('public/js/data.js', 'utf8');
const lines = content.split('\n');

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('hadiths: [')) {
    console.log('hadiths starts at line:', i + 1);
  }
  if (lines[i].includes('kalimas: [')) {
    console.log('kalimas starts at line:', i + 1);
  }
  if (lines[i].includes('duas: [')) {
    console.log('duas starts at line:', i + 1);
  }
}
console.log('Total lines in data.js:', lines.length);
