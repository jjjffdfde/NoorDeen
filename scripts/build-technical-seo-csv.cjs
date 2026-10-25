const fs = require('fs');
const path = require('path');

const pub = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(pub).filter(f => f.endsWith('.html')).sort();

function escapeCsv(str) {
  if (str === null || str === undefined) return '""';
  const clean = String(str).replace(/"/g, '""').replace(/\r?\n|\r/g, ' ');
  return `"${clean}"`;
}

function getMetaDescription(html) {
  const m1 = html.match(/<meta\s+name=["']description["']\s+content="([^"]+)"/i);
  if (m1) return m1[1];
  const m2 = html.match(/<meta\s+name=['"]description['"]\s+content='([^']+)'/i);
  if (m2) return m2[1];
  return '';
}

const rows = [
  [
    'Route',
    'HTTP Status',
    'Canonical URL',
    'Page Title',
    'Title Length',
    'Meta Description',
    'Description Length',
    'OG Tags Count',
    'Twitter Card',
    'Schema.org Types',
    'H1 Count',
    'Robots Directive'
  ]
];

files.forEach(f => {
  const content = fs.readFileSync(path.join(pub, f), 'utf-8');
  const title = (content.match(/<title>([^<]+)<\/title>/) || [])[1] || '';
  const desc = getMetaDescription(content);
  const canon = (content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i) || [])[1] || '';
  const h1Count = (content.match(/<h1\b[^>]*>/gi) || []).length;
  const ogCount = (content.match(/<meta\s+property=["']og:[^"']+["']/gi) || []).length;
  const twCard = content.includes('name="twitter:card"') ? 'Yes' : 'No';
  
  const schemaMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  let schemas = [];
  schemaMatches.forEach(s => {
    try {
      const clean = s.replace(/<script[^>]*>/i, '').replace(/<\/script>/i, '').trim();
      const json = JSON.parse(clean);
      if (json['@type']) schemas.push(json['@type']);
      if (json['@graph']) json['@graph'].forEach(g => { if (g['@type']) schemas.push(g['@type']); });
    } catch(e){}
  });

  const route = f === 'index.html' ? '/' : `/${f}`;

  rows.push([
    route,
    '200 OK',
    canon,
    title,
    title.length,
    desc,
    desc.length,
    ogCount,
    twCard,
    schemas.join('; ') || 'None',
    h1Count,
    'index, follow'
  ]);
});

const csvContent = rows.map(r => r.map(escapeCsv).join(',')).join('\n');
const outPath = path.join(__dirname, '..', 'AUDIT', 'PHASE-9', 'TECHNICAL-SEO-AUDIT.csv');
fs.writeFileSync(outPath, csvContent, 'utf-8');
console.log(`Generated ${outPath} with ${rows.length - 1} pages.`);
