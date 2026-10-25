const fs = require('fs');
const content = fs.readFileSync('scripts/phase7-prompt-full.txt', 'utf8');
const lines = content.split('\n');

function printRange(start, end) {
  console.log(`=== LINES ${start} - ${end} ===`);
  console.log(lines.slice(start - 1, end).join('\n'));
}

printRange(786, 1075);
