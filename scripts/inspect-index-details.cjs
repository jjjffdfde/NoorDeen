const fs = require('fs');
const content = fs.readFileSync('public/index.html', 'utf8');
const lines = content.split('\n');
console.log('Lines 635 to 660:\n', lines.slice(635, 660).join('\n'));
console.log('Lines 725 to 750:\n', lines.slice(725, 750).join('\n'));
console.log('Lines 820 to 845:\n', lines.slice(820, 845).join('\n'));
