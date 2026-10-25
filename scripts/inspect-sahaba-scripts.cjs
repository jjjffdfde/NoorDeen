const fs = require('fs');

const sahaba = fs.readFileSync('public/sahaba.html', 'utf8');
const lines = sahaba.split('\n');
console.log('sahaba.html lines:', lines.length);

// Check scripts in sahaba.html
const scripts = sahaba.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
console.log('Scripts in sahaba.html:', scripts ? scripts.length : 0);
if (scripts) {
  scripts.forEach((s, i) => {
    if (s.length > 100 && s.length < 5000) {
      console.log(`--- Script ${i} (${s.length} chars) ---`);
      console.log(s.slice(0, 500) + '...');
    }
  });
}
