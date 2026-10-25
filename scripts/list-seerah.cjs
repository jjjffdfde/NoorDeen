const fs = require('fs');

const seerah = fs.readFileSync('public/seerah.html', 'utf8');
const arts = seerah.match(/<article[\s\S]*?<\/article>/g) || [];
arts.forEach((a, i) => {
  const id = (a.match(/id="([^"]+)"/) || [])[1];
  const h2 = (a.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1].replace(/<[^>]+>/g, '').trim();
  console.log((i+1) + '. ch=' + id + ': ' + h2);
});
