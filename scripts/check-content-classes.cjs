const fs = require('fs');

['seerah.html', 'prophets.html', 'sahaba.html', 'history.html'].forEach(file => {
  const html = fs.readFileSync('public/' + file, 'utf8');
  console.log(`\n=== File: ${file} ===`);
  const classMatches = html.match(/class="([^"]+)"/g);
  if (classMatches) {
    const classes = new Set();
    classMatches.forEach(c => {
      c.replace(/class="|"/g, '').split(/\s+/).forEach(cls => classes.add(cls));
    });
    console.log('Classes found:', [...classes].filter(c => c.includes('content') || c.includes('chapter') || c.includes('card') || c.includes('section') || c.includes('monograph') || c.includes('bio') || c.includes('era')).slice(0, 20));
  }
});
