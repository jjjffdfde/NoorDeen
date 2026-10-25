const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));

console.log('=== Auditing SEO Tags across 25 HTML Pages ===');
const results = [];

files.forEach(f => {
  const content = fs.readFileSync(path.join('public', f), 'utf8');

  // Title
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const title = titleMatch ? titleMatch[1].trim() : 'MISSING';

  // Description
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
                    content.match(/<meta\s+content=["']([^"']+)["']\s+name=["']description["']/i);
  const desc = descMatch ? descMatch[1].trim() : 'MISSING';

  // Canonical
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) ||
                     content.match(/<link\s+href=["']([^"']+)["']\s+rel=["']canonical["']/i);
  const canonical = canonMatch ? canonMatch[1].trim() : 'MISSING';

  // Structured Data / JSON-LD
  const jsonLdMatches = [...content.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
  const schemas = [];
  jsonLdMatches.forEach(m => {
    try {
      const parsed = JSON.parse(m[1].trim());
      if (Array.isArray(parsed)) {
        parsed.forEach(p => schemas.push(p['@type'] || 'Unknown'));
      } else if (parsed['@graph']) {
        parsed['@graph'].forEach(p => schemas.push(p['@type'] || 'Unknown'));
      } else {
        schemas.push(parsed['@type'] || 'Unknown');
      }
    } catch (e) {
      schemas.push('INVALID_JSON');
    }
  });

  results.push({
    file: f,
    title,
    descLen: desc.length,
    descSnippet: desc.substring(0, 60),
    canonical,
    schemas: schemas.join(', ') || 'NONE'
  });
});

console.table(results);
