/**
 * Integration Script: Connects Articles into Homepage, Guides, Sitemap, and Service Worker
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// 1. Update public/index.html
console.log('1. Updating public/index.html...');
let indexHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf8');

// Add "Articles" to desktop-nav in index.html if not already present
if (!indexHtml.includes('href="articles/index.html"')) {
  indexHtml = indexHtml.replace(
    '<li class="nav-item"><a href="index.html" class="active" data-i18n="navHome">Home</a></li>',
    '<li class="nav-item"><a href="index.html" class="active" data-i18n="navHome">Home</a></li>\n          <li class="nav-item"><a href="articles/index.html" style="color: var(--color-gold); font-weight: 700;">📚 Articles</a></li>'
  );
}

// Add Featured Articles Section on index.html
const featuredArticlesSection = `
    <!-- SECTION: FEATURED COMPREHENSIVE EDUCATIONAL ARTICLES -->
    <section id="featured-articles" style="margin-bottom: 48px;">
      <div class="section-header" style="margin-bottom: 24px; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px;">
        <div>
          <div style="display: inline-block; padding: 4px 12px; background: rgba(181,139,80,0.15); border-radius: 12px; font-size: 0.78rem; font-weight: 800; color: var(--color-gold); text-transform: uppercase; margin-bottom: 6px;">
            In-Depth Educational Treatises
          </div>
          <h2 class="section-title" style="font-size: 1.55rem; color: var(--color-primary); margin: 0; display: flex; align-items: center; gap: 8px;">
            <span>📚</span> Featured Comprehensive Islamic Articles
          </h2>
          <p class="section-subtitle" style="font-size: 0.88rem; color: var(--color-text-muted); margin: 4px 0 0 0;">
            Publication-grade scholarly guides synthesized from primary classical sources with verified Arabic citations
          </p>
        </div>
        <a href="articles/index.html" class="btn btn-outline" style="text-decoration: none; font-size: 0.85rem; padding: 8px 16px;">
          View All 10 Articles & 100-Topic Roadmap →
        </a>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
        <!-- Card 1 -->
        <div class="card" style="padding: 20px; border-radius: 12px; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 1.4rem;">🌱</span>
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-gold); background: rgba(181,139,80,0.1); padding: 3px 8px; border-radius: 10px;">Foundation</span>
            </div>
            <h3 style="font-size: 1.15rem; margin: 0 0 6px 0; color: var(--color-text-main);">
              <a href="articles/beginners-guide-to-islam.html" style="color: inherit; text-decoration: none;">A Complete Beginner's Guide to Islam</a>
            </h3>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin: 0 0 12px 0;">
              Purpose of worship, 6 articles of faith, 5 pillars overview, and a compassionate 5-phase learning roadmap.
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; border-top: 1px solid var(--color-border-subtle); padding-top: 10px;">
            <span style="color: var(--color-text-muted);">⏱️ 11 min read</span>
            <a href="articles/beginners-guide-to-islam.html" style="color: var(--color-primary); font-weight: 700; text-decoration: none;">Read Guide →</a>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card" style="padding: 20px; border-radius: 12px; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 1.4rem;">📖</span>
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-gold); background: rgba(181,139,80,0.1); padding: 3px 8px; border-radius: 10px;">Quran Study</span>
            </div>
            <h3 style="font-size: 1.15rem; margin: 0 0 6px 0; color: var(--color-text-main);">
              <a href="articles/how-to-read-and-understand-quran.html" style="color: inherit; text-decoration: none;">How to Read & Understand the Quran</a>
            </h3>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin: 0 0 12px 0;">
              Surah architecture, Makki vs Madani contexts, Tilawah vs Tadabbur, and a practical 15-minute daily framework.
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; border-top: 1px solid var(--color-border-subtle); padding-top: 10px;">
            <span style="color: var(--color-text-muted);">⏱️ 12 min read</span>
            <a href="articles/how-to-read-and-understand-quran.html" style="color: var(--color-primary); font-weight: 700; text-decoration: none;">Read Guide →</a>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card" style="padding: 20px; border-radius: 12px; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 1.4rem;">🔍</span>
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-gold); background: rgba(181,139,80,0.1); padding: 3px 8px; border-radius: 10px;">Linguistics</span>
            </div>
            <h3 style="font-size: 1.15rem; margin: 0 0 6px 0; color: var(--color-text-main);">
              <a href="articles/quran-translation-vs-tafsir.html" style="color: inherit; text-decoration: none;">Quran Translation vs Tafsir</a>
            </h3>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin: 0 0 12px 0;">
              Linguistic inimitability (I'jaz), why translation cannot replace the Quran, and master classical exegeses.
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; border-top: 1px solid var(--color-border-subtle); padding-top: 10px;">
            <span style="color: var(--color-text-muted);">⏱️ 12 min read</span>
            <a href="articles/quran-translation-vs-tafsir.html" style="color: var(--color-primary); font-weight: 700; text-decoration: none;">Read Guide →</a>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="card" style="padding: 20px; border-radius: 12px; border: 1px solid var(--color-border); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 1.4rem;">☝️</span>
              <span style="font-size: 0.72rem; font-weight: 700; color: var(--color-gold); background: rgba(181,139,80,0.1); padding: 3px 8px; border-radius: 10px;">Theology</span>
            </div>
            <h3 style="font-size: 1.15rem; margin: 0 0 6px 0; color: var(--color-text-main);">
              <a href="articles/tawhid-and-the-shahadah.html" style="color: inherit; text-decoration: none;">Tawhid and the Shahadah</a>
            </h3>
            <p style="font-size: 0.85rem; color: var(--color-text-muted); line-height: 1.5; margin: 0 0 12px 0;">
              Rububiyyah, Uluhiyyah, Asma' was-Sifat, the 7 conditions of Shahadah, and psychological liberation.
            </p>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.8rem; border-top: 1px solid var(--color-border-subtle); padding-top: 10px;">
            <span style="color: var(--color-text-muted);">⏱️ 13 min read</span>
            <a href="articles/tawhid-and-the-shahadah.html" style="color: var(--color-primary); font-weight: 700; text-decoration: none;">Read Guide →</a>
          </div>
        </div>
      </div>
    </section>
`;

if (!indexHtml.includes('id="featured-articles"')) {
  indexHtml = indexHtml.replace(
    '<!-- SECTION: THE 20-PILLAR INTERNATIONAL ISLAMIC KNOWLEDGE TAXONOMY -->',
    featuredArticlesSection + '\n    <!-- SECTION: THE 20-PILLAR INTERNATIONAL ISLAMIC KNOWLEDGE TAXONOMY -->'
  );
}

fs.writeFileSync(path.join(PUBLIC_DIR, 'index.html'), indexHtml, 'utf8');

// 2. Update public/js/app.js mobile drawer
console.log('2. Updating public/js/app.js mobile drawer...');
let appJs = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf8');
if (!appJs.includes('id="drawer-articles"')) {
  appJs = appJs.replace(
    '<li><a href="${base}" id="drawer-home"><span>🏠</span> <span data-i18n="nav.home">Home</span></a></li>',
    '<li><a href="${base}" id="drawer-home"><span>🏠</span> <span data-i18n="nav.home">Home</span></a></li>\n          <li><a href="${base}articles/index.html" id="drawer-articles" style="color: var(--color-gold); font-weight: 700;"><span>📚</span> <span>Educational Articles</span></a></li>'
  );
  fs.writeFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), appJs, 'utf8');
}

// 3. Update Cross-links in Guides
console.log('3. Updating cross-links in existing guide pages...');

// In pillars.html: add cross-link banner to five-pillars-of-islam.html
let pillarsHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'pillars.html'), 'utf8');
if (!pillarsHtml.includes('articles/five-pillars-of-islam.html')) {
  const banner = `
      <div style="background: rgba(181, 139, 80, 0.12); border: 1px solid var(--color-gold); border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <div>
          <strong style="color: var(--color-primary);">📖 In-Depth Scholarly Treatise Available:</strong>
          <span style="font-size: 0.9rem; color: var(--color-text-muted); margin-left: 6px;">Read our comprehensive 2,350-word learning guide with classical proofs and wisdom.</span>
        </div>
        <a href="articles/five-pillars-of-islam.html" class="btn btn-outline" style="text-decoration: none; font-size: 0.85rem; padding: 6px 14px;">Read Full Treatise →</a>
      </div>
  `;
  pillarsHtml = pillarsHtml.replace('<main class="container" style="padding-top: 40px; padding-bottom: 80px;">', '<main class="container" style="padding-top: 40px; padding-bottom: 80px;">\n' + banner);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'pillars.html'), pillarsHtml, 'utf8');
}

// In salah-guide.html: add cross-link banner
let salahHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'salah-guide.html'), 'utf8');
if (!salahHtml.includes('articles/salah-complete-beginners-guide.html')) {
  const banner = `
      <div style="background: rgba(181, 139, 80, 0.12); border: 1px solid var(--color-gold); border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <div>
          <strong style="color: var(--color-primary);">🕌 Comprehensive Beginner Treatise:</strong>
          <span style="font-size: 0.9rem; color: var(--color-text-muted); margin-left: 6px;">Explore our detailed 2,450-word guide on spiritual meaning, school nuances, and remedying mistakes.</span>
        </div>
        <a href="articles/salah-complete-beginners-guide.html" class="btn btn-outline" style="text-decoration: none; font-size: 0.85rem; padding: 6px 14px;">Read Treatise →</a>
      </div>
  `;
  salahHtml = salahHtml.replace('<main class="container" style="padding-top: 40px; padding-bottom: 80px;">', '<main class="container" style="padding-top: 40px; padding-bottom: 80px;">\n' + banner);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'salah-guide.html'), salahHtml, 'utf8');
}

// In wudu-guide.html: add cross-link banner
let wuduHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'wudu-guide.html'), 'utf8');
if (!wuduHtml.includes('articles/wudu-ghusl-tayammum-guide.html')) {
  const banner = `
      <div style="background: rgba(181, 139, 80, 0.12); border: 1px solid var(--color-gold); border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <div>
          <strong style="color: var(--color-primary);">💧 In-Depth Practical Study Guide:</strong>
          <span style="font-size: 0.9rem; color: var(--color-text-muted); margin-left: 6px;">Explore our comprehensive 2,380-word guide on Wudu, Ghusl, Tayammum, and footwear wiping.</span>
        </div>
        <a href="articles/wudu-ghusl-tayammum-guide.html" class="btn btn-outline" style="text-decoration: none; font-size: 0.85rem; padding: 6px 14px;">Read Guide →</a>
      </div>
  `;
  wuduHtml = wuduHtml.replace('<main class="container" style="padding-top: 40px; padding-bottom: 80px;">', '<main class="container" style="padding-top: 40px; padding-bottom: 80px;">\n' + banner);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'wudu-guide.html'), wuduHtml, 'utf8');
}

// In zakat-calculator.html: add cross-link banner
let zakatHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'zakat-calculator.html'), 'utf8');
if (!zakatHtml.includes('articles/zakat-educational-calculation-guide.html')) {
  const banner = `
      <div style="background: rgba(181, 139, 80, 0.12); border: 1px solid var(--color-gold); border-radius: 10px; padding: 14px 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
        <div>
          <strong style="color: var(--color-primary);">💰 Complete Zakat Fiqh & Educational Treatise:</strong>
          <span style="font-size: 0.9rem; color: var(--color-text-muted); margin-left: 6px;">Explore our 2,420-word guide on Nisab standards, 8 Quranic recipient classes, and modern debt rules.</span>
        </div>
        <a href="articles/zakat-educational-calculation-guide.html" class="btn btn-outline" style="text-decoration: none; font-size: 0.85rem; padding: 6px 14px;">Read Treatise →</a>
      </div>
  `;
  zakatHtml = zakatHtml.replace('<main class="container" style="padding-top: 40px; padding-bottom: 80px;">', '<main class="container" style="padding-top: 40px; padding-bottom: 80px;">\n' + banner);
  fs.writeFileSync(path.join(PUBLIC_DIR, 'zakat-calculator.html'), zakatHtml, 'utf8');
}

// 4. Update public/sitemap.xml
console.log('4. Updating public/sitemap.xml...');
let sitemapXml = fs.readFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), 'utf8');

const articleSlugs = [
  'index',
  'beginners-guide-to-islam',
  'how-to-read-and-understand-quran',
  'quran-translation-vs-tafsir',
  'tawhid-and-the-shahadah',
  'five-pillars-of-islam',
  'salah-complete-beginners-guide',
  'wudu-ghusl-tayammum-guide',
  'hadith-and-sunnah-authenticity',
  'daily-adhkar-and-supplications',
  'zakat-educational-calculation-guide'
];

articleSlugs.forEach(slug => {
  const url = slug === 'index' ? 'https://jjjffdfde.github.io/NoorDeen/articles/' : `https://jjjffdfde.github.io/NoorDeen/articles/${slug}.html`;
  if (!sitemapXml.includes(url)) {
    const entry = `  <url>
    <loc>${url}</loc>
    <lastmod>2026-10-25</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.85</priority>
  </url>\n`;
    sitemapXml = sitemapXml.replace('</urlset>', entry + '</urlset>');
  }
});
fs.writeFileSync(path.join(PUBLIC_DIR, 'sitemap.xml'), sitemapXml, 'utf8');

// 5. Update public/service-worker.js
console.log('5. Updating public/service-worker.js with article cache entries...');
let swJs = fs.readFileSync(path.join(PUBLIC_DIR, 'service-worker.js'), 'utf8');

articleSlugs.forEach(slug => {
  const pathEntry = slug === 'index' ? './articles/' : `./articles/${slug}.html`;
  if (!swJs.includes(`'${pathEntry}'`)) {
    swJs = swJs.replace(
      "'./downloads/CHECKSUMS.sha256'",
      `'./downloads/CHECKSUMS.sha256',\n  '${pathEntry}'`
    );
  }
});

fs.writeFileSync(path.join(PUBLIC_DIR, 'service-worker.js'), swJs, 'utf8');

console.log('🎉 Integration completed successfully!');
