/**
 * Build long-form article HTML from structured content modules.
 * Source content lives in scripts/article-content/*.cjs (not published).
 * Output: public/articles/<slug>.html
 *
 * Usage:
 *   node scripts/build-articles.cjs               # build every batch
 *   node scripts/build-articles.cjs batch-6a.cjs  # build one batch only
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(__dirname, 'article-content');
const OUT_DIR = path.join(ROOT, 'public', 'articles');

const SITE = 'https://jjjffdfde.github.io/NoorDeen';

const NAV = `      <nav class="desktop-nav">
        <ul class="nav-menu">
          <li class="nav-item"><a href="../index.html" data-i18n="navHome">Home</a></li>
          <li class="nav-item"><a href="index.html" class="active" style="color: var(--color-gold); font-weight: 700;">📚 Articles</a></li>

          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navQuran">Holy Quran</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="../quran.html" class="nav-dropdown-item">📖 Complete Quran (114 Surahs)</a>
              <a href="../bookmarks.html" class="nav-dropdown-item">🔖 Bookmarked Ayahs</a>
              <a href="how-to-read-and-understand-quran.html" class="nav-dropdown-item">🔍 How to Read the Quran</a>
              <a href="quran-translation-vs-tafsir.html" class="nav-dropdown-item">📜 Translation vs Tafsir</a>
            </div>
          </li>

          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navHadith">Hadith & Duas</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="../hadith.html" class="nav-dropdown-item">📜 Authentic Hadith Collections</a>
              <a href="../duas.html" class="nav-dropdown-item">🤲 Daily Duas & Adhkar</a>
              <a href="../kalimas.html" class="nav-dropdown-item">⭐ Six Kalimas of Islam</a>
              <a href="hadith-and-sunnah-authenticity.html" class="nav-dropdown-item">⚖️ Hadith Sciences & Grading</a>
              <a href="daily-adhkar-and-supplications.html" class="nav-dropdown-item">📿 Daily Adhkar Guide</a>
              <a href="../seerah.html" class="nav-dropdown-item">🌹 Prophetic Seerah</a>
              <a href="../prophets.html" class="nav-dropdown-item">📜 Stories of the Prophets</a>
              <a href="../sahaba.html" class="nav-dropdown-item">👥 Lives of the Sahaba</a>
            </div>
          </li>

          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navWorship">Worship Guides</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="../salah-guide.html" class="nav-dropdown-item">🕌 Five Daily Prayers (Salah)</a>
              <a href="../wudu-guide.html" class="nav-dropdown-item">💧 Step-by-Step Wudu Guide</a>
              <a href="../janazah-guide.html" class="nav-dropdown-item">⚰️ Funeral Prayer (Janazah)</a>
              <a href="../eid-guide.html" class="nav-dropdown-item">🌙 Eid Prayer (Fitr & Adha)</a>
              <a href="../pillars.html" class="nav-dropdown-item">🏛️ Five Pillars of Islam</a>
            </div>
          </li>

          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navTools">Islamic Tools</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="../prayer-times.html" class="nav-dropdown-item">⏱️ Solar Prayer Times</a>
              <a href="../zakat-calculator.html" class="nav-dropdown-item">💰 Zakat Calculation Engine</a>
              <a href="../tasbih.html" class="nav-dropdown-item">📿 Digital Tasbih Counter</a>
              <a href="../calendar.html" class="nav-dropdown-item">📅 Lunar Hijri Calendar</a>
            </div>
          </li>

          <li class="nav-item"><a href="../dr-israr-ahmed.html">🎬 Lectures</a></li>

          <li class="nav-item">
            <a href="../download-app.html" class="nav-app-pill">
              <span>📱</span> <span data-i18n="navApp">App</span>
            </a>
          </li>
        </ul>
      </nav>`;

const FOOTER = `  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="footer-title">About the Portal</div>
        <p style="font-size: 0.88rem; line-height: 1.7; color: #D1D5DB; margin-bottom: 14px;">
          An authentic, universally accessible digital repository of core Islamic texts, classical scholarship, and worship tools, serving seekers of knowledge worldwide.
        </p>
        <div style="font-size: 0.8rem; color: var(--color-gold);">
          Hafs Uthmanic Standard • Six Canonical Hadith Books • Four Sunnite Madhhabs
        </div>
      </div>
      <div>
        <div class="footer-title">Sacred Knowledge</div>
        <ul class="footer-links">
          <li><a href="../quran.html">📖 Complete Quran (114 Surahs)</a></li>
          <li><a href="../hadith.html">📜 Authentic Hadith Collections</a></li>
          <li><a href="../duas.html">🤲 Daily Duas & Adhkar</a></li>
          <li><a href="../kalimas.html">⭐ Six Kalimas with Audio</a></li>
          <li><a href="../seerah.html">🌹 Seerah of Prophet Muhammad ﷺ</a></li>
          <li><a href="../prophets.html">📜 Stories of the Prophets</a></li>
          <li><a href="../sahaba.html">👥 Lives of the Sahaba</a></li>
          <li><a href="../history.html">📜 Islamic History</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">Worship Guides & Tools</div>
        <ul class="footer-links">
          <li><a href="../salah-guide.html">🕌 Five Daily Prayers (Salah)</a></li>
          <li><a href="../wudu-guide.html">💧 Step-by-Step Wudu Guide</a></li>
          <li><a href="../janazah-guide.html">⚰️ Funeral Prayer (Janazah)</a></li>
          <li><a href="../eid-guide.html">🌙 Eid Prayer (Fitr & Adha)</a></li>
          <li><a href="../zakat-calculator.html">💰 Zakat Calculation Engine</a></li>
          <li><a href="../prayer-times.html">⏱️ Solar Prayer Times</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">Legal & Trust</div>
        <ul class="footer-links">
          <li><a href="../about.html">🏛️ About Us & Methodology</a></li>
          <li><a href="../sources.html">📚 Sourcing & Bibliography</a></li>
          <li><a href="../contact.html">✉️ Contact & Corrections</a></li>
          <li><a href="../privacy.html">🛡️ Privacy Policy & Cookies</a></li>
          <li><a href="../terms.html">⚖️ Terms of Use</a></li>
          <li><a href="../download-app.html">📱 Download App (PWA & APK)</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <div>© 2026 NoorDeen. All Rights Reserved. Dedicated to Authentic Public Learning.</div>
        <div style="display: flex; gap: 16px;">
          <a href="../privacy.html">Privacy</a>
          <a href="../terms.html">Terms</a>
          <a href="../contact.html">Contact</a>
          <a href="../sources.html">Sources</a>
        </div>
      </div>
    </div>
  </footer>`;

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function build(article) {
  const {
    slug, title, metaTitle, description, category, readTime, intro,
    sections, faqs, bibliography, related, keyTakeaways
  } = article;

  const toc = sections.map((s, i) =>
    `          <li class="toc-nav-item">
            <a href="#${s.id}" class="toc-nav-link">${i + 1}. ${esc(s.heading)}</a>
          </li>`
  ).join('\n');

  const body = sections.map((s, i) => `
    <section id="${s.id}" style="margin-bottom: 42px;">
      <h2 style="font-size: 1.7rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        ${i + 1}. ${esc(s.heading)}
      </h2>
      ${s.html}
    </section>`).join('\n');

  const faqHtml = faqs.map((f, i) => `
      <div style="margin-bottom: 22px;">
        <h3 style="font-size: 1.1rem; color: var(--color-primary); margin-bottom: 8px;">${i + 1}. ${esc(f.q)}</h3>
        <p style="line-height: 1.8; color: var(--color-text-main);">${f.a}</p>
      </div>`).join('\n');

  const bibHtml = bibliography.map(b => `        <li style="margin-bottom: 8px;">${b}</li>`).join('\n');

  const relatedHtml = related.map(r =>
    `          <li style="margin-bottom: 8px;"><a href="${r.href}" style="color: var(--color-primary);">${esc(r.label)}</a></li>`
  ).join('\n');

  const takeaways = keyTakeaways && keyTakeaways.length ? `
    <div style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px 24px; margin: 30px 0 38px;">
      <div style="font-weight: 800; color: var(--color-primary); margin-bottom: 10px; font-size: 1.02rem;">Key takeaways</div>
      <ul style="margin: 0; padding-left: 20px; line-height: 1.9; color: var(--color-text-main);">
        ${keyTakeaways.map(t => `<li>${t}</li>`).join('\n        ')}
      </ul>
    </div>` : '';

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(f => ({
      '@type': 'Question',
      name: f.q.replace(/<[^>]+>/g, ''),
      acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') }
    }))
  };

  const crumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
      { '@type': 'ListItem', position: 2, name: 'Articles Library', item: SITE + '/articles/' },
      { '@type': 'ListItem', position: 3, name: title, item: `${SITE}/articles/${slug}.html` }
    ]
  };

  return `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${esc(metaTitle)} — NoorDeen Islamic Library</title>
  <meta name="description" content="${esc(description)}">
  <link rel="stylesheet" href="../css/main.css?v=20261030a">
  <link rel="manifest" href="../manifest.json">
  <meta name="theme-color" content="#0F5132">
  <link rel="canonical" href="${SITE}/articles/${slug}.html">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="NoorDeen Islamic Knowledge Library">
  <meta property="og:url" content="${SITE}/articles/${slug}.html">
  <meta property="og:title" content="${esc(title)} — NoorDeen">
  <meta property="og:description" content="${esc(description)}">
  <meta property="og:image" content="${SITE}/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(title)}">
  <meta name="twitter:description" content="${esc(description)}">
  <meta name="twitter:image" content="${SITE}/icons/icon-512.svg">

  <script type="application/ld+json">
${JSON.stringify(crumbSchema, null, 2)}
  </script>

  <script type="application/ld+json">
${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <div class="ad-slot-container" id="ad-banner-top" data-ad-slot="portal_top_leaderboard" style="display: none; min-height: 90px; margin: 10px auto; text-align: center;"></div>

  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="logo-group">
        <div class="logo-icon">☪</div>
        <div class="logo-text-wrapper">
          <div class="logo-text-title" data-i18n="siteTitle">NoorDeen</div>
          <div class="logo-text-subtitle" data-i18n="siteSubtitle">International Islamic Knowledge Library</div>
        </div>
      </a>

${NAV}

      <div class="header-actions">
        <button id="search-modal-btn" class="search-trigger-btn" aria-label="Search Portal (Ctrl+K)">
          <span>🔍</span>
          <span class="search-trigger-text" data-i18n="navSearch">Search...</span>
          <kbd class="search-kbd">Ctrl K</kbd>
        </button>
        <button id="language-selector-btn" class="btn btn-outline" title="Select Language">
          🌐 <span id="current-language-label">English</span>
        </button>
        <button id="theme-toggle-btn" class="btn-icon" title="Toggle Theme" aria-label="Toggle dark/light theme">🌙</button>
        <button class="btn-icon mobile-menu-btn" onclick="App.toggleMobileDrawer()" aria-label="Toggle navigation menu">☰</button>
      </div>
    </div>
  </header>

  <main class="container" style="padding-top: 40px; padding-bottom: 80px;">
    <nav aria-label="Breadcrumb" style="font-size: 0.85rem; color: var(--color-text-muted); margin-bottom: 18px;">
      <a href="../index.html" style="color: var(--color-primary);">Home</a> ›
      <a href="index.html" style="color: var(--color-primary);">Articles</a> ›
      <span>${esc(title)}</span>
    </nav>

    <header style="margin-bottom: 30px;">
      <div style="display: inline-block; background: var(--color-primary); color: #fff; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; padding: 5px 12px; border-radius: 20px; margin-bottom: 12px;">${esc(category)}</div>
      <h1 style="font-size: clamp(1.8rem, 4vw, 2.5rem); color: var(--color-primary); line-height: 1.25; margin: 0 0 12px;">${esc(title)}</h1>
      <p style="color: var(--color-text-muted); font-size: 0.92rem; margin: 0;">NoorDeen Editorial · ${esc(readTime)} read · Reviewed against the sources listed below</p>
    </header>

    <div class="editorial-page-container">
      <aside class="sticky-toc-wrapper">
        <div class="sticky-toc-title">Table of Contents</div>
        <ul class="toc-nav-list">
${toc}
          <li class="toc-nav-item"><a href="#frequently-asked-questions" class="toc-nav-link">${sections.length + 1}. Common Questions (FAQ)</a></li>
          <li class="toc-nav-item"><a href="#scholarly-bibliography" class="toc-nav-link">${sections.length + 2}. Sources & Further Reading</a></li>
        </ul>
      </aside>

      <article class="editorial-content-body" style="min-width: 0;">
        <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 32px; border-left: 4px solid var(--color-primary);">
          ${intro}
        </div>
${takeaways}
${body}

        <section id="frequently-asked-questions" style="margin-bottom: 40px;">
          <h2 style="font-size: 1.7rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
            ${sections.length + 1}. Common Questions (FAQ)
          </h2>
${faqHtml}
        </section>

        <section id="scholarly-bibliography" class="scholarly-bibliography" style="margin-bottom: 40px;">
          <h2 style="font-size: 1.7rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
            ${sections.length + 2}. Sources & Further Reading
          </h2>
          <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 14px;">
            This article cites the Qur'an by surah and verse, and identifies hadith by collection and, where verified, book or number. Where scholars differ, the difference is stated rather than resolved by assertion.
          </p>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.9rem; color: var(--color-text-main); line-height: 1.8;">
${bibHtml}
          </ul>
        </section>

        <section style="margin-bottom: 40px;">
          <h2 style="font-size: 1.4rem; color: var(--color-primary); margin-bottom: 12px;">Related reading</h2>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.9;">
${relatedHtml}
          </ul>
        </section>

        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <a href="index.html" class="btn btn-outline" style="text-decoration: none;">← Return to Articles Library</a>
          <a href="../index.html" class="btn btn-primary" style="text-decoration: none;">Explore All Knowledge Pillars →</a>
        </div>
      </article>
    </div>
  </main>

${FOOTER}

  <script src="../js/config.js?v=20261030a"></script>
  <script src="../js/i18n.js?v=20261030a"></script>
  <script src="../js/search.js?v=20261030a"></script>
  <script src="../js/app.js?v=20261030a"></script>
</body>
</html>
`;
}

function main() {
  const filter = process.argv[2];
  const files = fs.readdirSync(CONTENT_DIR)
    .filter(f => f.endsWith('.cjs'))
    .filter(f => !filter || f === filter || f === `${filter}.cjs`);
  if (filter && files.length === 0) {
    console.error(`No content file matched "${filter}" in ${CONTENT_DIR}`);
    process.exit(1);
  }
  let built = 0;
  for (const f of files) {
    const mod = require(path.join(CONTENT_DIR, f));
    const articles = Array.isArray(mod) ? mod : [mod];
    for (const article of articles) {
      const html = build(article);
      fs.writeFileSync(path.join(OUT_DIR, `${article.slug}.html`), html, 'utf8');
      const words = (html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<[^>]+>/g, ' ').match(/[A-Za-z0-9\u0600-\u06FF']+/g) || []).length;
      console.log(`${article.slug}.html  ${(html.length / 1024).toFixed(1)}KB  ${words} words`);
      built++;
    }
  }
  console.log(`Built ${built} article(s).`);
}

main();
