// scripts/audit-content-deep.cjs
// Deep content audit script analyzing all 25 HTML pages, datasets, and translation dictionaries.

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const htmlFiles = fs.readdirSync(PUBLIC_DIR).filter(f => f.endsWith('.html'));

function stripHtml(html) {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ')
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const auditResults = [];

for (const file of htmlFiles) {
  const filePath = path.join(PUBLIC_DIR, file);
  const rawContent = fs.readFileSync(filePath, 'utf8');
  const size = fs.statSync(filePath).size;
  const strippedText = stripHtml(rawContent);
  const words = strippedText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Extract metadata
  const titleMatch = rawContent.match(/<title>(.*?)<\/title>/i);
  const descMatch = rawContent.match(/<meta\s+name=["']description["']\s+content=["'](.*?)["']/i);
  const h1Match = rawContent.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h2Count = (rawContent.match(/<h2\b/gi) || []).length;
  const h3Count = (rawContent.match(/<h3\b/gi) || []).length;
  const internalLinks = (rawContent.match(/href=["'][^"']+\.html["']/gi) || []).length;
  const arabicCharCount = (rawContent.match(/[\u0600-\u06FF]/g) || []).length;

  auditResults.push({
    file,
    size,
    wordCount,
    title: titleMatch ? titleMatch[1].trim() : 'N/A',
    description: descMatch ? descMatch[1].trim() : 'N/A',
    h1: h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'N/A',
    h2Count,
    h3Count,
    internalLinks,
    arabicCharCount
  });
}

auditResults.sort((a, b) => b.wordCount - a.wordCount);

console.log('=== NOORDEEN DEEP CONTENT AUDIT ===');
console.log(`Total Pages Analyzed: ${auditResults.length}`);
const totalRenderedWords = auditResults.reduce((sum, p) => sum + p.wordCount, 0);
console.log(`Cumulative Rendered Body Words: ${totalRenderedWords.toLocaleString()}`);

console.log('\nTop 10 Largest Educational Pages:');
auditResults.slice(0, 10).forEach(p => {
  console.log(`- ${p.file}: ${p.wordCount.toLocaleString()} words, ${p.h2Count} H2s, ${p.h3Count} H3s, ${p.arabicCharCount} Arabic chars`);
});

console.log('\nPages Requiring Meaningful Content Expansion (< 2,000 words):');
auditResults.filter(p => p.wordCount < 2000).forEach(p => {
  console.log(`- ${p.file}: ${p.wordCount.toLocaleString()} words (H1: "${p.h1.slice(0, 40)}...")`);
});

// Output JSON summary for report generation
fs.writeFileSync(path.join(ROOT_DIR, 'AUDIT', 'content-audit-summary.json'), JSON.stringify({
  auditDate: new Date().toISOString(),
  totalPages: auditResults.length,
  totalWords: totalRenderedWords,
  pages: auditResults
}, null, 2));

console.log('\nAudit summary exported to AUDIT/content-audit-summary.json');
