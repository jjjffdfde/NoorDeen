const fs = require('fs');

function analyzeFile(filename) {
  const content = fs.readFileSync('public/' + filename, 'utf8');
  const articles = (content.match(/<article[\s>]/gi) || []).length;
  const sections = (content.match(/<section[\s>]/gi) || []).length;
  const h1 = (content.match(/<h1[\s>][\s\S]*?<\/h1>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h2 = (content.match(/<h2[\s>][\s\S]*?<\/h2>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());
  const h3 = (content.match(/<h3[\s>][\s\S]*?<\/h3>/gi) || []).map(h => h.replace(/<[^>]+>/g, '').trim());

  // Count sahaba-card or similar cards
  const sahabaCards = (content.match(/class="[^"]*sahaba-card[^"]*"/gi) || []).length;
  const prophetCards = (content.match(/class="[^"]*prophet-card[^"]*"/gi) || []).length;
  const hadithCards = (content.match(/class="[^"]*hadith-card[^"]*"/gi) || []).length;
  const duaCards = (content.match(/class="[^"]*dua-card[^"]*"/gi) || []).length;
  const seerahCards = (content.match(/class="[^"]*seerah-card[^"]*"/gi) || []).length;
  const historyCards = (content.match(/class="[^"]*history-card[^"]*"/gi) || []).length;

  console.log(`=== ${filename} ===`);
  console.log(`Articles: ${articles}, Sections: ${sections}`);
  console.log(`H1 (${h1.length}):`, h1.join(' | '));
  console.log(`H2 count: ${h2.length}, H3 count: ${h3.length}`);
  console.log(`Cards -> sahaba: ${sahabaCards}, prophet: ${prophetCards}, hadith: ${hadithCards}, dua: ${duaCards}, seerah: ${seerahCards}, history: ${historyCards}`);
}

['sahaba.html', 'prophets.html', 'seerah.html', 'history.html', 'hadith.html', 'duas.html'].forEach(analyzeFile);
