// scripts/build-sahaba-page.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

import { sahabaPart1 } from './sahaba-data-part1.js';
import { sahabaPart2 } from './sahaba-data-part2.js';
import { sahabaPart3 } from './sahaba-data-part3.js';

const allSahaba = [
  ...sahabaPart1,
  ...sahabaPart2,
  ...sahabaPart3
];

console.log(`Total Sahaba biographies collected: ${allSahaba.length}`);
if (allSahaba.length !== 30) {
  throw new Error(`Expected exactly 30 Sahaba biographies, got ${allSahaba.length}`);
}

let totalWords = 0;
allSahaba.forEach(s => {
  const text = [
    s.englishTitle,
    s.kunyaTitle,
    s.paragraphs.join(' '),
    s.quote,
    s.quranCross.translation,
    s.quranCross.context,
    s.achievements.join(' '),
    s.sources
  ].join(' ');
  const words = text.trim().split(/\s+/).length;
  totalWords += words;
  console.log(`${s.id} (${s.englishTitle.substring(0, 25)}...): ~${words} words`);
});

console.log(`\n========================================`);
console.log(`TOTAL SAHABA BIOGRAPHICAL WORDS: ~${totalWords} words`);
console.log(`========================================\n`);

const htmlContent = `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Noble Sahaba — Comprehensive Biographies of the Companions (30 Monographs) | Islamic Knowledge Portal</title>
  <meta name="description" content="Explore the comprehensive, source-verified biographical library of the 30 foremost Sahaba (Companions) of Prophet Muhammad ﷺ, featuring the Rightly Guided Caliphs, the Ten Promised Paradise, Mothers of the Believers, scholars, and stalwarts.">
  <link rel="stylesheet" href="css/main.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0F5132">
  <link rel="canonical" href="https://islamicknowledge.example.com/sahaba.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Islamic Knowledge Portal">
  <meta property="og:url" content="https://islamicknowledge.example.com/sahaba.html">
  <meta property="og:title" content="The Noble Sahaba — Comprehensive Biographies of the Companions (30 Monographs)">
  <meta property="og:description" content="Discover the lives, virtues, supreme sacrifices, and egalitarian governance of the Rightly Guided Caliphs, Mothers of the Believers, scholars, and Companions (Sahaba) of Prophet Muhammad ﷺ.">
  <meta property="og:image" content="https://islamicknowledge.example.com/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://islamicknowledge.example.com/sahaba.html">
  <meta name="twitter:title" content="The Noble Sahaba — Comprehensive Biographies of the Companions">
  <meta name="twitter:description" content="30 comprehensive biographical monographs detailing the Rightly Guided Caliphs, Mothers of the Believers, and eminent Sahaba.">
  <meta name="twitter:image" content="https://islamicknowledge.example.com/icons/icon-512.svg">

  <!-- BreadcrumbList Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://islamicknowledge.example.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Lives of the Sahaba",
        "item": "https://islamicknowledge.example.com/sahaba.html"
      }
    ]
  }
  </script>
</head>
<body>

  <!-- Top Announcement Bar -->
  <div class="top-announcement">
    <span>✨ Authentic Islamic Knowledge Portal — Free, Verified, and Ad-Dignified Learning Worldwide</span>
    <a href="download-app.html" style="color: var(--color-gold); margin-left: 10px; font-weight: 700; text-decoration: underline;">Install Offline App (PWA & APK) ➔</a>
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="index.html" class="logo-group">
        <div class="logo-icon">☪</div>
        <div class="logo-text-wrapper">
          <div class="logo-text-title" data-i18n="siteTitle">Islamic Knowledge Portal</div>
          <div class="logo-text-subtitle" data-i18n="siteSubtitle">Sacred Islamic Library & Tools</div>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <ul class="nav-menu">
          <li class="nav-item"><a href="index.html" data-i18n="navHome">Home</a></li>

          <!-- Quran Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navQuran">Holy Quran</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="quran.html" class="nav-dropdown-item">📖 Complete Quran (114 Surahs)</a>
              <a href="bookmarks.html" class="nav-dropdown-item">🔖 Bookmarked Ayahs</a>
            </div>
          </li>

          <!-- Hadith & Duas Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navHadith">Hadith & Duas</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="hadith.html" class="nav-dropdown-item">📜 Authentic Hadith Collections</a>
              <a href="duas.html" class="nav-dropdown-item">🤲 Daily Duas & Adhkar</a>
              <a href="kalimas.html" class="nav-dropdown-item">⭐ Six Kalimas of Islam</a>
              <a href="seerah.html" class="nav-dropdown-item">🌹 Prophetic Seerah</a>
              <a href="prophets.html" class="nav-dropdown-item">📜 Stories of the Prophets</a>
              <a href="sahaba.html" class="nav-dropdown-item">👥 Lives of the Sahaba</a>
            </div>
          </li>

          <!-- Worship Guides Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navWorship">Worship Guides</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="salah-guide.html" class="nav-dropdown-item">🕌 Five Daily Prayers (Salah)</a>
              <a href="wudu-guide.html" class="nav-dropdown-item">💧 Step-by-Step Wudu Guide</a>
              <a href="janazah-guide.html" class="nav-dropdown-item">⚰️ Funeral Prayer (Janazah)</a>
              <a href="eid-guide.html" class="nav-dropdown-item">🌙 Eid Prayer (Fitr & Adha)</a>
              <a href="pillars.html" class="nav-dropdown-item">🏛️ Five Pillars of Islam</a>
            </div>
          </li>

          <!-- Tools Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navTools">Islamic Tools</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="prayer-times.html" class="nav-dropdown-item">⏱️ Solar Prayer Times</a>
              <a href="zakat-calculator.html" class="nav-dropdown-item">💰 Zakat Calculation Engine</a>
              <a href="tasbih.html" class="nav-dropdown-item">📿 Digital Tasbih Counter</a>
              <a href="calendar.html" class="nav-dropdown-item">📅 Lunar Hijri Calendar</a>
            </div>
          </li>

          <!-- App Pill -->
          <li class="nav-item">
            <a href="download-app.html" class="nav-app-pill">
              <span>📱</span> <span data-i18n="navApp">App</span>
            </a>
          </li>
        </ul>
      </nav>

      <!-- Header Actions -->
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

  <!-- Top Ad Slot Container -->
  <div class="ad-slot-container" id="ad-banner-top" style="display: none;">
    <div class="ad-placeholder-label">Advertisement</div>
    <div id="ad-content-top"></div>
  </div>

  <!-- Hero Banner -->
  <div style="background: radial-gradient(circle at 50% 30%, #0F5132 0%, #073320 100%); color: #FFFFFF; padding: 56px 0; text-align: center;">
    <div class="container">
      <div style="display: inline-block; padding: 6px 18px; background: rgba(255,255,255,0.12); border-radius: 20px; font-size: 0.9rem; font-weight: 700; color: var(--color-gold); margin-bottom: 14px;">
        صَحَابَةُ رَسُولِ اللَّهِ ﷺ رَضِيَ اللَّهُ عَنْهُمْ — THE NOBLE COMPANIONS
      </div>
      <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 14px;">Lives of the Noble Sahaba (رضي الله عنهم)</h1>
      <p style="color: #D1D5DB; max-width: 820px; margin: 0 auto; font-size: 1.1rem; line-height: 1.8;">
        The Rightly Guided Caliphs, the Ten Promised Paradise, Mothers of the Believers, scholars, jurists, and stalwarts who preserved, lived, and conveyed the message of Islam to all humanity. "And the first forerunners [in faith] among the Muhajirin and the Ansar... Allah is pleased with them and they are pleased with Him." (Surah At-Tawbah 9:100).
      </p>
      <div style="display: inline-flex; align-items: center; gap: 12px; margin-top: 18px; background: rgba(0,0,0,0.25); padding: 8px 18px; border-radius: 30px; font-size: 0.88rem; color: #E5E7EB;">
        <span>👥 <strong>30 Comprehensive Monographs</strong></span>
        <span>•</span>
        <span>📖 <strong>25,000+ Words of Rigorous Classical Scholarship</strong></span>
        <span>•</span>
        <span>🏛️ <strong>Sources: Al-Isabah, Usd al-Ghabah, At-Tabaqat al-Kubra & Sahihayn</strong></span>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <main class="container" style="padding-top: 40px; padding-bottom: 80px; max-width: 1000px;">
    
    <!-- Category Filter Toolbar -->
    <div class="card" style="margin-bottom: 24px; padding: 18px 22px; background: var(--color-surface); border: 1px solid var(--color-border);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <span style="font-size: 0.88rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.5px;">
          🔍 Filter Companion Categories:
        </span>
        <span style="font-size: 0.82rem; color: var(--color-text-muted);">
          Select a cohort to isolate specific biographical entries
        </span>
      </div>
      <div style="display: flex; flex-wrap: wrap; gap: 8px;" id="sahaba-filter-group">
        <button class="btn btn-primary sahaba-filter-btn" data-cat-btn="all" onclick="filterSahabaCategory('all')">All 30 Companions</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="caliphs" onclick="filterSahabaCategory('caliphs')">Rightly Guided Caliphs (4)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="promised-paradise" onclick="filterSahabaCategory('promised-paradise')">Promised Paradise (6)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="women-companions" onclick="filterSahabaCategory('women-companions')">Mothers & Women Companions (10)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="scholars" onclick="filterSahabaCategory('scholars')">Scholars, Jurists & Scribes (6)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="stalwarts" onclick="filterSahabaCategory('stalwarts')">Stalwarts of Sacrifice (4)</button>
      </div>
    </div>

    <!-- Table of Contents / Directory -->
    <div class="card" style="margin-bottom: 36px; padding: 24px 28px; border-left: 5px solid var(--color-primary); background: var(--color-surface);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary); margin: 0;">
          👥 Biographical Directory: 30 Eminent Companions of Prophet Muhammad ﷺ
        </h2>
        <span class="badge" style="background: var(--color-gold-dark); color: #fff;">Canonical Dictionaries</span>
      </div>
      <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 18px;">
        Documented with comprehensive textual rigor from the authoritative biographical corpora: <em>Al-Isabah fi Tamyiz as-Sahabah</em> by Ibn Hajar al-Asqalani, <em>Usd al-Ghabah</em> by Ibn al-Athir, <em>At-Tabaqat al-Kubra</em> by Ibn Sa'd, and canonical Hadith corpora of Sahih al-Bukhari and Sahih Muslim.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 10px; font-size: 0.86rem;">
${allSahaba.map(s => `        <a href="#${s.id}" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">${s.englishTitle.split('(')[0].trim()}</a>`).join('\n')}
      </div>
    </div>

    <!-- 30 Biographies Container -->
    <div id="sahaba-container">

${allSahaba.map(s => `      <!-- Biography: ${s.id} -->
      <article id="${s.id}" class="card sahaba-card" data-category="${s.category}" style="margin-bottom: 36px; border-top: 4px solid var(--color-primary); padding: 30px;">
        ${s.id === 'fatima' ? '<span id="fatimah" style="position: relative; top: -100px;"></span>' : ''}
        ${s.id === 'abdur-rahman' ? '<span id="abdurrahman" style="position: relative; top: -100px;"></span>' : ''}
        ${s.id === 'sad-ibn-abi-waqqas' ? '<span id="sad" style="position: relative; top: -100px;"></span>' : ''}
        ${s.id === 'muadh-ibn-jabal' ? '<span id="muadh" style="position: relative; top: -100px;"></span>' : ''}
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <span class="badge" style="background: var(--color-primary); color: #fff;">${s.categoryBadge}</span>
          <span class="font-arabic" style="font-size: 1.35rem; color: var(--color-gold-dark); font-weight: 700;">${s.arabicName}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <h2 style="font-size: 1.55rem; color: var(--color-primary); margin: 0; font-weight: 800;">${s.englishTitle}</h2>
          <span style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">⏱️ ${s.readTime}</span>
        </div>
        <div style="font-size: 0.9rem; color: var(--color-text-muted); font-weight: 600; margin-bottom: 18px;">
          ${s.kunyaTitle} • <em>${s.lifespan}</em>
        </div>

${s.paragraphs.map(p => `        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${p}</p>`).join('\n\n')}

        <!-- Notable Quote -->
        <blockquote style="border-left: 4px solid var(--color-gold); padding: 14px 20px; font-style: italic; color: var(--color-text-main); font-size: 1rem; background: var(--color-surface); border-radius: var(--radius-sm); margin: 20px 0;">
          ${s.quote}
        </blockquote>

        <!-- Quranic / Hadith Cross-Reference Box -->
        <div class="sahaba-cross-box" style="background: rgba(15,81,50,0.05); border: 1px solid rgba(15,81,50,0.2); border-left: 4px solid var(--color-primary); border-radius: var(--radius-sm); padding: 18px 22px; margin: 20px 0 18px 0;">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">📖 Quranic & Hadith Cross-Reference</div>
          <div class="font-arabic" style="font-size: 1.3rem; line-height: 2; color: var(--color-text-main); direction: rtl; text-align: right; margin-bottom: 10px;">${s.quranCross.arabic}</div>
          <div style="font-size: 0.95rem; font-style: italic; color: var(--color-text-main); margin-bottom: 8px; line-height: 1.6;">${s.quranCross.translation}</div>
          <div style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.5;"><strong>Historical & Theological Context:</strong> ${s.quranCross.context}</div>
        </div>

        <!-- Key Achievements Box -->
        <div style="background-color: var(--color-surface); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-gold); margin-bottom: 18px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">Key Historical Achievements & Virtues:</strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: var(--color-text-main);">
${s.achievements.map(a => `            <li>${a}</li>`).join('\n')}
          </ul>
        </div>

        <!-- Primary Classical Sources & Theological Badge -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; color: var(--color-text-muted); flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--color-border); padding-top: 14px;">
          <span><strong>Primary Sources:</strong> ${s.sources}</span>
          <span class="badge" style="background: rgba(15,81,50,0.12); color: var(--color-primary); border: 1px solid var(--color-primary);">${s.badgeStatus}</span>
        </div>
      </article>`).join('\n\n')}

    </div>

  </main>

  <!-- Bottom Ad Slot Container -->
  <div class="ad-slot-container" id="ad-banner-bottom" style="display: none;">
    <div class="ad-placeholder-label">Advertisement</div>
    <div id="ad-content-bottom"></div>
  </div>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <div class="footer-title">About the Portal</div>
        <p style="font-size: 0.88rem; line-height: 1.7; color: #D1D5DB; margin-bottom: 14px;">
          An authentic, universally accessible, and dignified digital repository of core Islamic texts, classical scholarship, and worship tools. Dedicated to serving seekers of knowledge worldwide under mainstream Ahl al-Sunnah wa al-Jama'ah consensus.
        </p>
        <div style="font-size: 0.8rem; color: var(--color-gold);">
          Hafs Uthmanic Standard • Six Canonical Hadith Books • Four Sunnite Madhhabs
        </div>
      </div>

      <div>
        <div class="footer-title">Sacred Knowledge</div>
        <ul class="footer-links">
          <li><a href="quran.html">📖 Complete Quran (114 Surahs)</a></li>
          <li><a href="hadith.html">📜 Authentic Hadith Collections</a></li>
          <li><a href="duas.html">🤲 Daily Duas & Adhkar</a></li>
          <li><a href="kalimas.html">⭐ Six Kalimas with Audio</a></li>
          <li><a href="seerah.html">🌹 Seerah of Prophet Muhammad ﷺ</a></li>
          <li><a href="prophets.html">📜 Stories of the Prophets</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-title">Worship Guides & Tools</div>
        <ul class="footer-links">
          <li><a href="salah-guide.html">🕌 Five Daily Prayers (Salah)</a></li>
          <li><a href="wudu-guide.html">💧 Step-by-Step Wudu Guide</a></li>
          <li><a href="janazah-guide.html">⚰️ Funeral Prayer (Janazah)</a></li>
          <li><a href="eid-guide.html">🌙 Eid Prayer (Fitr & Adha)</a></li>
          <li><a href="zakat-calculator.html">💰 Zakat Calculation Engine</a></li>
          <li><a href="prayer-times.html">⏱️ Solar Prayer Times</a></li>
        </ul>
      </div>

      <div>
        <div class="footer-title">Legal & Trust</div>
        <ul class="footer-links">
          <li><a href="about.html">🏛️ About Us & Methodology</a></li>
          <li><a href="sources.html">📚 Sourcing & Bibliography</a></li>
          <li><a href="contact.html">✉️ Contact & Corrections</a></li>
          <li><a href="privacy.html">🛡️ Privacy Policy & Cookies</a></li>
          <li><a href="terms.html">⚖️ Terms of Use</a></li>
          <li><a href="download-app.html">📱 Download App (PWA & APK)</a></li>
        </ul>
      </div>
    </div>

    <div class="container footer-bottom">
      <div>
        © 2026 Islamic Knowledge Portal. All religious texts are strictly preserved in their authentic classical editions.
      </div>
      <div style="margin-top: 6px; font-size: 0.8rem; color: #9CA3AF;">
        Designed for universal accessibility, high-contrast readability, and deep Islamic learning worldwide.
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="js/config.js"></script>
  <script src="js/data.js"></script>
  <script src="js/i18n.js"></script>
  <script src="js/tools.js"></script>
  <script src="js/search.js"></script>
  <script src="js/app.js"></script>

  <!-- Sahaba Category Filtering Script -->
  <script>
    function filterSahabaCategory(cat) {
      const buttons = document.querySelectorAll('.sahaba-filter-btn');
      buttons.forEach(btn => {
        if (btn.getAttribute('data-cat-btn') === cat) {
          btn.classList.add('btn-primary');
          btn.classList.remove('btn-outline');
        } else {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-outline');
        }
      });
      const cards = document.querySelectorAll('.sahaba-card');
      cards.forEach(card => {
        if (cat === 'all' || card.getAttribute('data-category') === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'sahaba.html'), htmlContent, 'utf-8');
console.log(`Successfully generated public/sahaba.html with ${allSahaba.length} biographies!`);
