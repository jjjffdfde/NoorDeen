const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(dir, f), 'utf-8');
  const match = content.match(/<header class="site-header">([\s\S]*?)<\/header>/);
  if (!match) {
    console.log(f.padEnd(25), 'NO HEADER');
  } else {
    const headerHtml = match[1];
    const liMatches = headerHtml.match(/<li[^>]*>/g) || [];
    const hasSearch = headerHtml.includes('search-modal-btn');
    const hasLang = headerHtml.includes('language-selector-btn');
    const hasTheme = headerHtml.includes('theme-toggle-btn');
    const hasDrawer = headerHtml.includes('mobile-menu-btn');
    const subtitleMatch = headerHtml.match(/<div class="logo-text-subtitle">([^<]*)<\/div>/);
    const subtitle = subtitleMatch ? subtitleMatch[1] : 'NONE';
    console.log(
      f.padEnd(25),
      `li: ${liMatches.length}`.padEnd(8),
      `search: ${hasSearch}`.padEnd(14),
      `sub: "${subtitle}"`
    );
  }
});
