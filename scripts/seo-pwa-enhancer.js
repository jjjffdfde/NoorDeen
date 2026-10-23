import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.resolve(__dirname, '../public');
const BASE_URL = 'https://islamicknowledge.example.com';

const pagesMeta = {
  'index.html': {
    breadcrumb: 'Home',
    canonical: `${BASE_URL}/`,
    isHome: true
  },
  'quran.html': {
    breadcrumb: 'Holy Quran',
    canonical: `${BASE_URL}/quran.html`
  },
  'hadith.html': {
    breadcrumb: 'Hadith Library',
    canonical: `${BASE_URL}/hadith.html`
  },
  'kalimas.html': {
    breadcrumb: 'Six Kalimas',
    canonical: `${BASE_URL}/kalimas.html`
  },
  'duas.html': {
    breadcrumb: 'Duas & Adhkar',
    canonical: `${BASE_URL}/duas.html`
  },
  'seerah.html': {
    breadcrumb: 'Prophetic Seerah',
    canonical: `${BASE_URL}/seerah.html`
  },
  'prophets.html': {
    breadcrumb: 'Stories of the Prophets',
    canonical: `${BASE_URL}/prophets.html`
  },
  'sahaba.html': {
    breadcrumb: 'Lives of the Sahaba',
    canonical: `${BASE_URL}/sahaba.html`
  },
  'pillars.html': {
    breadcrumb: 'Five Pillars of Islam',
    canonical: `${BASE_URL}/pillars.html`
  },
  'salah-guide.html': {
    breadcrumb: 'Salah Guide',
    canonical: `${BASE_URL}/salah-guide.html`
  },
  'wudu-guide.html': {
    breadcrumb: 'Wudu Guide',
    canonical: `${BASE_URL}/wudu-guide.html`
  },
  'prayer-times.html': {
    breadcrumb: 'Prayer Times',
    canonical: `${BASE_URL}/prayer-times.html`
  },
  'tasbih.html': {
    breadcrumb: 'Digital Tasbih',
    canonical: `${BASE_URL}/tasbih.html`
  },
  'zakat-calculator.html': {
    breadcrumb: 'Zakat Calculator',
    canonical: `${BASE_URL}/zakat-calculator.html`
  },
  'calendar.html': {
    breadcrumb: 'Islamic Calendar',
    canonical: `${BASE_URL}/calendar.html`
  },
  'bookmarks.html': {
    breadcrumb: 'My Bookmarks',
    canonical: `${BASE_URL}/bookmarks.html`
  },
  'about.html': {
    breadcrumb: 'About the Portal',
    canonical: `${BASE_URL}/about.html`
  },
  'sources.html': {
    breadcrumb: 'Authentic Sources',
    canonical: `${BASE_URL}/sources.html`
  },
  'privacy.html': {
    breadcrumb: 'Privacy Policy',
    canonical: `${BASE_URL}/privacy.html`
  },
  'terms.html': {
    breadcrumb: 'Terms of Use',
    canonical: `${BASE_URL}/terms.html`
  }
};

console.log('Inspecting and enhancing 20 HTML pages...');

let updatedCount = 0;

for (const [filename, info] of Object.entries(pagesMeta)) {
  const filePath = path.join(PUBLIC_DIR, filename);
  if (!fs.existsSync(filePath)) {
    console.warn(`File not found: ${filePath}`);
    continue;
  }

  let html = fs.readFileSync(filePath, 'utf-8');

  // Extract title and description
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const currentTitle = titleMatch ? titleMatch[1].trim() : 'Islamic Knowledge Portal';

  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const currentDesc = descMatch ? descMatch[1].trim() : 'Authentic multilingual Islamic knowledge platform serving Muslims worldwide.';

  // 1. Ensure Manifest link
  if (!html.includes('rel="manifest"') && !html.includes("rel='manifest'")) {
    html = html.replace('</head>', '  <link rel="manifest" href="manifest.json">\n</head>');
  }

  // 2. Ensure Theme color meta
  if (!html.includes('name="theme-color"')) {
    html = html.replace('</head>', '  <meta name="theme-color" content="#0F5132">\n</head>');
  }

  // 3. Ensure Canonical URL
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${info.canonical}">\n</head>`);
  }

  // 4. Ensure Open Graph Tags
  if (!html.includes('property="og:title"') && !html.includes("property='og:title'")) {
    const ogBlock = `
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="${info.isHome ? 'website' : 'article'}">
  <meta property="og:site_name" content="Islamic Knowledge Portal">
  <meta property="og:url" content="${info.canonical}">
  <meta property="og:title" content="${currentTitle}">
  <meta property="og:description" content="${currentDesc}">
  <meta property="og:image" content="${BASE_URL}/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">
`;
    html = html.replace('</head>', `${ogBlock}</head>`);
  }

  // 5. Ensure Twitter Card Tags
  if (!html.includes('name="twitter:card"')) {
    const twitterBlock = `
  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="${info.canonical}">
  <meta name="twitter:title" content="${currentTitle}">
  <meta name="twitter:description" content="${currentDesc}">
  <meta name="twitter:image" content="${BASE_URL}/icons/icon-512.svg">
`;
    html = html.replace('</head>', `${twitterBlock}</head>`);
  }

  // 6. Ensure JSON-LD BreadcrumbList Schema for subpages
  if (!info.isHome && !html.includes('"BreadcrumbList"')) {
    const breadcrumbJson = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}/`
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": info.breadcrumb,
          "item": info.canonical
        }
      ]
    };

    const breadcrumbScript = `
  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbJson, null, 2)}
  </script>
`;
    html = html.replace('</head>', `${breadcrumbScript}</head>`);
  }

  // 7. Ensure Mobile Hamburger Menu Button in header-actions
  if (!html.includes('mobile-menu-btn')) {
    const mobileBtnHtml = '<button class="btn-icon mobile-menu-btn" onclick="App.toggleMobileDrawer()" aria-label="Toggle navigation menu" style="display: none;">☰</button>\n      </div>';
    html = html.replace(/<\/div>\s*<\/div>\s*<\/header>/, `${mobileBtnHtml}\n    </div>\n  </header>`);
  }

  fs.writeFileSync(filePath, html, 'utf-8');
  updatedCount++;
  console.log(`✓ Enhanced ${filename} with SEO, PWA manifest, and mobile menu button.`);
}

console.log(`\nSuccessfully processed all ${updatedCount} pages.`);
