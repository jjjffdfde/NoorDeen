const fs = require('fs');

const content = fs.readFileSync('public/salah-guide.html', 'utf8');

const sMatch = content.match(/<section id="step-by-step"[\s\S]*?<\/section>/i);
if (sMatch) {
  const s = sMatch[0];
  console.log('step-by-step length:', s.length);
  const h3s = [...s.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  h3s.forEach((h, idx) => console.log(`  ${idx + 1}. ${h}`));

  // Check some Arabic recitations present
  const arabicSnippets = [...s.matchAll(/<div[^>]*class="[^"]*ayah-arabic[^"]*"[^>]*>([\s\S]*?)<\/div>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log('\nArabic snippets found in step-by-step:');
  arabicSnippets.forEach((a, idx) => console.log(`  [${idx + 1}] ${a.slice(0, 60)}...`));
}
