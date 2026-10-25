const fs = require('fs');

const pt = fs.readFileSync('public/prayer-times.html', 'utf8');
console.log('prayer-times.html length:', pt.length);

// Find scripts or city definitions
const scriptMatches = pt.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
console.log('Script count:', scriptMatches ? scriptMatches.length : 0);
if (scriptMatches) {
  scriptMatches.forEach((s, i) => {
    console.log(`Script ${i}: length ${s.length}`);
    if (s.length < 500) console.log(s);
  });
}
