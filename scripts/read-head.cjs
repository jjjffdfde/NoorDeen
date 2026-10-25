const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');
const headMatch = content.match(/<head>([\s\S]*?)<\/head>/i);
if (headMatch) {
  console.log('Head content:\n', headMatch[1].slice(0, 1000));
}
