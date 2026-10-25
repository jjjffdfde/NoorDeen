const fs = require('fs');
const path = require('path');

const publicDir = 'public';
const htmlFiles = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const inventory = [];

htmlFiles.forEach(file => {
  const filePath = path.join(publicDir, file);
  const content = fs.readFileSync(filePath, 'utf8');

  // Extract metadata
  const titleMatch = content.match(/<title[^>]*>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';

  const metaDescMatch = content.match(/<meta[^>]*name=["']description["'][^>]*content=["'](.*?)["']/i);
  const metaDesc = metaDescMatch ? metaDescMatch[1].trim() : '';

  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/i);
  const h1 = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : '';

  const h2Matches = content.match(/<h2[^>]*>(.*?)<\/h2>/gi) || [];
  const h2Count = h2Matches.length;

  const internalLinks = (content.match(/href=["']([a-zA-Z0-9_-]+\.html|#|\/)[^"']*["']/gi) || []).length;

  // Extract visible body text (strip nav, footer, script, style)
  let bodyText = content;
  // Remove script and style
  bodyText = bodyText.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, ' ');
  bodyText = bodyText.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, ' ');
  bodyText = bodyText.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, ' ');
  bodyText = bodyText.replace(/<footer\b[^<]*(?:(?!<\/footer>)<[^<]*)*<\/footer>/gi, ' ');
  bodyText = bodyText.replace(/<[^>]+>/g, ' ');
  bodyText = bodyText.replace(/\s+/g, ' ').trim();

  const words = bodyText ? bodyText.split(/\s+/).length : 0;

  inventory.push({
    file,
    title,
    metaDesc,
    h1,
    h2Count,
    internalLinks,
    words
  });
});

console.log('Total HTML pages audited:', inventory.length);
const totalVisibleWords = inventory.reduce((sum, p) => sum + p.words, 0);
console.log('Total visible content words across 25 pages:', totalVisibleWords);

// Sort by word count
inventory.sort((a,b) => b.words - a.words);
fs.writeFileSync('reports/audit-inventory-data.json', JSON.stringify({
  totalVisibleWords,
  totalPages: inventory.length,
  pages: inventory
}, null, 2));

console.log('Saved audit-inventory-data.json');
