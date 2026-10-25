const fs = require('fs');

const sahaba = fs.readFileSync('public/sahaba.html', 'utf8');
const cardMatches = sahaba.match(/<article[^>]*class=["'][^"']*sahaba-card[^"']*["'][^>]*>[\s\S]*?<\/article>/gi);
console.log('Sahaba cards count:', cardMatches ? cardMatches.length : 0);
if (cardMatches && cardMatches.length > 0) {
  console.log('First sahaba card sample:');
  console.log(cardMatches[0].slice(0, 1000));
}
