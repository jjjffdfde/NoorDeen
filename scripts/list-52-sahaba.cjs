const fs = require('fs');

const html = fs.readFileSync('public/sahaba.html', 'utf8');
const cardRegex = /<article id="([^"]+)" class="card sahaba-card"[^>]*>[\s\S]*?<h2[^>]*>([^<]+)<\/h2>/gi;
let m;
const list = [];
while ((m = cardRegex.exec(html)) !== null) {
  list.push({ id: m[1], title: m[2] });
}

console.log(`Total sahaba found: ${list.length}`);
list.forEach((s, i) => console.log(`${i+1}: ${s.id.padEnd(25)} -> ${s.title}`));
