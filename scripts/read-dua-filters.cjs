const fs = require('fs');

const content = fs.readFileSync('public/duas.html', 'utf8');

const catSection = content.match(/<div class="category-filters"[\s\S]*?<\/div>/i) || content.match(/<div class="filter[\s\S]*?<\/div>/i);
if (catSection) {
  console.log('Category filters in duas.html:\n', catSection[0]);
} else {
  console.log('Searching for buttons in duas.html:');
  const btns = [...content.matchAll(/<button[^>]*class="[^"]*filter[^"]*"[^>]*>[\s\S]*?<\/button>/gi)].map(m => m[0]);
  console.log(btns.slice(0, 15).join('\n'));
}
