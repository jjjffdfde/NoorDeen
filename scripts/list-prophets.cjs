const fs = require('fs');

const prophetsHtml = fs.readFileSync('public/prophets.html', 'utf8');
const arts = prophetsHtml.match(/<article[\s\S]*?<\/article>/g) || [];
arts.forEach((a, i) => {
  const id = (a.match(/id="([^"]+)"/) || [])[1];
  const h2 = (a.match(/<h2[^>]*>([\s\S]*?)<\/h2>/) || [])[1].replace(/<[^>]+>/g, '').trim();
  const wordCount = a.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log((i+1) + '. id=' + id + ' (' + wordCount + ' words): ' + h2);
});
