const fs = require('fs');

const content = fs.readFileSync('public/hadith.html', 'utf8');

const filterSection = content.match(/<div class="hadith-controls"[\s\S]*?<\/div>\s*<\/div>/i);
if (filterSection) {
  console.log('Hadith controls:\n', filterSection[0]);
} else {
  console.log('No hadith-controls found. Searching for select tags:');
  const selects = [...content.matchAll(/<select[^>]*>[\s\S]*?<\/select>/gi)].map(m => m[0]);
  console.log(selects.join('\n---\n'));
}
