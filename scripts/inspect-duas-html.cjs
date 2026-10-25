const fs = require('fs');
const content = fs.readFileSync('public/duas.html', 'utf8');
const cardMatches = content.match(/<div class="dua-card"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log(`duas.html static cards count: ${cardMatches.length}`);
const scriptMatch = content.match(/<script>[\s\S]*?<\/script>/g);
if (scriptMatch) {
  console.log('Found scripts in duas.html:', scriptMatch.length);
  console.log('Script snippet (last 500 chars):\n', scriptMatch[scriptMatch.length - 1].slice(-500));
}
