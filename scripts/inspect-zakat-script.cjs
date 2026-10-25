const fs = require('fs');

const zc = fs.readFileSync('public/zakat-calculator.html', 'utf8');
const lines = zc.split('\n');
console.log('zakat-calculator.html lines:', lines.length);

// Print script in zakat-calculator.html
const scripts = zc.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
console.log('Scripts count:', scripts ? scripts.length : 0);
if (scripts && scripts.length > 0) {
  const lastScript = scripts[scripts.length - 1];
  console.log('Last script sample:');
  console.log(lastScript.slice(0, 800));
}
