const fs = require('fs');
const content = fs.readFileSync('public/duas.html', 'utf8');
const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.includes('id="duas-list-container"'));
console.log('duas-list-container line:', startIdx + 1);

const mainEndIdx = lines.findIndex(l => l.includes('</main>'));
console.log('main end line:', mainEndIdx + 1);
console.log('Lines before main end:\n', lines.slice(mainEndIdx - 10, mainEndIdx + 5).map((l, i) => `${mainEndIdx - 9 + i}: ${l}`).join('\n'));
