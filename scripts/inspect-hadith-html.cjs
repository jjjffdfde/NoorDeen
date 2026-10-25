const fs = require('fs');
const content = fs.readFileSync('public/hadith.html', 'utf8');
const cardMatches = content.match(/<div class="hadith-card"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log(`hadith.html static cards count: ${cardMatches.length}`);
if (cardMatches.length > 0) {
  console.log('Sample card excerpt (first 300 chars):');
  console.log(cardMatches[0].slice(0, 300));
}

// Check script at bottom
const scriptMatch = content.match(/<script>[\s\S]*?<\/script>/g);
if (scriptMatch) {
  console.log('Found scripts:', scriptMatch.length);
  console.log('Last script:\n', scriptMatch[scriptMatch.length - 1]);
}
