const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');

const s4Match = content.match(/<section id="step-by-step-postures"[\s\S]*?<\/section>/i);
if (s4Match) {
  const s4 = s4Match[0];
  console.log('Section 4 length:', s4.length);
  // find all h3 titles in section 4
  const h3s = [...s4.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('H3s in Section 4:');
  h3s.forEach((h, idx) => console.log(`  ${idx + 1}. ${h}`));
  
  // check some sample snippets
  console.log('\nFirst 800 chars of Section 4:\n', s4.slice(0, 800));
} else {
  console.log('Section 4 not found by id');
}
