const fs = require('fs');

const sahaba = fs.readFileSync('public/sahaba.html', 'utf8');
const cardMatch = sahaba.match(/<article id="abu-bakr"[\s\S]*?<\/article>/i);
if (cardMatch) {
  console.log('Abu Bakr card full HTML:');
  console.log(cardMatch[0]);
}
