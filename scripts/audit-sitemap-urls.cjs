const fs = require('fs');

const sitemap = fs.readFileSync('public/sitemap.xml', 'utf8');
const locMatches = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
console.log('Total URLs in sitemap:', locMatches.length);
locMatches.forEach(u => console.log(' - ' + u));

const files = fs.readdirSync('public').filter(f => f.endsWith('.html'));
console.log('\nHTML files in public/ (' + files.length + '):');
files.forEach(f => {
  const url = f === 'index.html' ? 'https://islamicknowledge.example.com/' : `https://islamicknowledge.example.com/${f}`;
  const found = locMatches.includes(url);
  console.log(` - ${f} -> in sitemap? ${found}`);
});
