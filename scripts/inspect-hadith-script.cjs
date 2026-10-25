const fs = require('fs');

const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
const scriptMatches = hadithHtml.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);
console.log('Script count in hadith.html:', scriptMatches ? scriptMatches.length : 0);
if (scriptMatches && scriptMatches.length > 0) {
  const lastScript = scriptMatches[scriptMatches.length - 1];
  console.log('Last script sample:');
  console.log(lastScript.slice(0, 1000));
}
