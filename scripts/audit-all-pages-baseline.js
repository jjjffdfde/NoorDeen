import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = fs.readdirSync(publicDir).filter(f => f.endsWith('.html'));

const results = files.map(file => {
  const content = fs.readFileSync(path.join(publicDir, file), 'utf8');
  
  const titleMatch = content.match(/<title>([^<]*)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : 'MISSING';
  
  const descMatch = content.match(/<meta\s+name=["']description["']\s+content=["']([^"']*)["']/i);
  const desc = descMatch ? descMatch[1].trim() : 'MISSING';
  
  const canonMatch = content.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']*)["']/i);
  const canonical = canonMatch ? canonMatch[1].trim() : 'MISSING';
  
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  const h1Count = h1Matches.length;
  
  const schemaMatches = content.match(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi) || [];
  const schemaCount = schemaMatches.length;
  
  const ogTitleMatch = content.match(/<meta\s+property=["']og:title["']\s+content=["']([^"']*)["']/i);
  const ogTitle = ogTitleMatch ? ogTitleMatch[1].trim() : 'MISSING';
  
  const ogDescMatch = content.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']*)["']/i);
  const ogDesc = ogDescMatch ? ogDescMatch[1].trim() : 'MISSING';
  
  const bodyText = content.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ');
  const words = bodyText.trim().split(/\s+/).filter(Boolean).length;
  
  // Sacred text preservation check
  const arabicSpanCount = (content.match(/class=["'][^"']*font-arabic[^"']*["']/gi) || []).length;
  const translateNoCount = (content.match(/translate=["']no["']/gi) || []).length;
  
  return {
    file,
    title: title.slice(0, 35) + (title.length > 35 ? '...' : ''),
    descLen: desc === 'MISSING' ? 0 : desc.length,
    canonical: canonical !== 'MISSING',
    h1Count,
    schemaCount,
    ogTitle: ogTitle !== 'MISSING',
    words,
    arabicSpanCount,
    translateNoCount
  };
});

console.table(results);
