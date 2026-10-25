const fs = require('fs');

const files = [
  'public/index.html',
  'public/salah-guide.html',
  'public/wudu-guide.html',
  'public/janazah-guide.html',
  'public/eid-guide.html',
  'public/pillars.html'
];

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const match = html.match(/<li[^>]*nav-dropdown[^>]*>[\s\S]*?navWorship[\s\S]*?<\/li>/i);
  console.log(`${f}: ${match ? 'FOUND WORSHIP DROPDOWN' : 'NOT FOUND'}`);
  if (match) {
    const items = match[0].match(/<a[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi);
    if (items) {
      console.log(`  Items count: ${items.length}`);
      items.forEach(it => console.log('    ' + it.replace(/\s+/g, ' ')));
    }
  }
});
