// scripts/build-prophets-page.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

import { prophetsPart1 } from './prophets-data-part1.js';
import { prophetsPart2 } from './prophets-data-part2.js';
import { prophetsPart3 } from './prophets-data-part3.js';

const allProphets = [
  ...prophetsPart1,
  ...prophetsPart2,
  ...prophetsPart3
];

console.log(`Total Prophet & Quranic narratives collected: ${allProphets.length}`);
if (allProphets.length !== 30) {
  throw new Error(`Expected exactly 30 narratives, got ${allProphets.length}`);
}

let totalWords = 0;
allProphets.forEach(p => {
  const text = [
    p.englishTitle,
    p.quranMentions,
    p.era,
    p.paragraphs.join(' '),
    p.quranPassage.translation,
    p.tafsirHadithBox.tafsir,
    p.tafsirHadithBox.hadith,
    p.theologicalLessons.join(' '),
    p.sources
  ].join(' ');
  const words = text.trim().split(/\s+/).length;
  totalWords += words;
  console.log(`${p.id} (${p.englishTitle.substring(0, 25)}...): ~${words} words`);
});

console.log(`\n========================================`);
console.log(`TOTAL PROPHET NARRATIVE WORDS: ~${totalWords} words`);
console.log(`========================================\n`);

const htmlContent = `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Stories of the Prophets (Qisas al-Anbiya) & Quranic Narratives — 30 Comprehensive Accounts | Islamic Knowledge Portal</title>
  <meta name="description" content="Explore the comprehensive, source-verified library of all 25 Prophets in Islam and 5 exemplary Quranic narratives (Maryam, Ashab al-Kahf, Luqman, Dhul-Qarnayn, Ashab al-Ukhdud) according to the Holy Quran and Tafsir Ibn Kathir.">
  <link rel="stylesheet" href="css/main.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0F5132">
  <link rel="canonical" href="https://islamicknowledge.example.com/prophets.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Islamic Knowledge Portal">
  <meta property="og:url" content="https://islamicknowledge.example.com/prophets.html">
  <meta property="og:title" content="Stories of the Prophets (Qisas al-Anbiya) & Quranic Narratives — 30 Accounts">
  <meta property="og:description" content="Authentic, source-backed accounts of the 25 Quranic Prophets and 5 exemplary Quranic figures, sourced from Tafsir Ibn Kathir, At-Tabari, and Sahih Hadith corpora.">
  <meta property="og:image" content="https://islamicknowledge.example.com/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://islamicknowledge.example.com/prophets.html">
  <meta name="twitter:title" content="Stories of the Prophets & Quranic Narratives (30 Comprehensive Accounts)">
  <meta name="twitter:description" content="Complete educational accounts of all 25 Quranic prophets and verified Quranic figures according to authoritative classical exegesis.">
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
        "name": "Stories of the Prophets",
        "item": "https://islamicknowledge.example.com/prophets.html"
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

  <!-- Mobile Drawer -->
  <aside id="mobile-drawer" class="mobile-drawer" aria-label="Mobile Navigation Drawer">
    <div class="mobile-drawer-header">
      <div class="logo-group">
        <div class="logo-icon">☪</div>
        <div class="logo-text-title" data-i18n="siteTitle">Islamic Portal</div>
      </div>
      <button class="btn-icon" onclick="App.toggleMobileDrawer()" aria-label="Close Navigation Menu">✕</button>
    </div>
    <nav class="mobile-nav-links">
      <a href="index.html" class="mobile-nav-link" data-i18n="navHome">🏠 Home</a>
      <a href="quran.html" class="mobile-nav-link" data-i18n="navQuran">📖 Holy Quran (114 Surahs)</a>
      <a href="bookmarks.html" class="mobile-nav-link">🔖 Bookmarked Ayahs</a>
      <a href="hadith.html" class="mobile-nav-link" data-i18n="navHadith">📜 Hadith Collections</a>
      <a href="duas.html" class="mobile-nav-link">🤲 Daily Duas & Adhkar</a>
      <a href="kalimas.html" class="mobile-nav-link">⭐ Six Kalimas</a>
      <a href="seerah.html" class="mobile-nav-link">🌹 Prophetic Seerah</a>
      <a href="prophets.html" class="mobile-nav-link active">📜 Stories of the Prophets</a>
      <a href="sahaba.html" class="mobile-nav-link">👥 Lives of the Sahaba</a>
      <a href="salah-guide.html" class="mobile-nav-link">🕌 Salah Guide</a>
      <a href="wudu-guide.html" class="mobile-nav-link">💧 Wudu Guide</a>
      <a href="janazah-guide.html" class="mobile-nav-link">⚰️ Janazah Guide</a>
      <a href="eid-guide.html" class="mobile-nav-link">🌙 Eid Guide</a>
      <a href="pillars.html" class="mobile-nav-link">🏛️ Five Pillars</a>
      <a href="prayer-times.html" class="mobile-nav-link">⏱️ Solar Prayer Times</a>
      <a href="zakat-calculator.html" class="mobile-nav-link">💰 Zakat Calculator</a>
      <a href="tasbih.html" class="mobile-nav-link">📿 Tasbih Counter</a>
      <a href="calendar.html" class="mobile-nav-link">📅 Hijri Calendar</a>
      <a href="download-app.html" class="mobile-nav-link">📱 Download App</a>
    </nav>
  </aside>

  <!-- Main Content Container -->
  <main class="container" style="max-width: 1120px; padding: 40px 20px;">

    <!-- Breadcrumb Display -->
    <nav aria-label="Breadcrumb" style="margin-bottom: 24px; font-size: 0.9rem; color: var(--color-text-muted);">
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">Home</a>
      <span style="margin: 0 8px;">/</span>
      <span style="color: var(--color-text-main); font-weight: 600;">Stories of the Prophets</span>
    </nav>

    <!-- Page Title & Editorial Header -->
    <header class="section-header" style="text-align: center; margin-bottom: 40px;">
      <div class="badge" style="background-color: var(--color-primary-light); color: var(--color-primary); margin-bottom: 12px; font-size: 0.85rem; letter-spacing: 0.5px; padding: 6px 14px; text-transform: uppercase; font-weight: 700;">
        Qisas al-Anbiya • The Golden Chain of Prophetic Monotheism
      </div>
      <h1 style="font-size: 2.5rem; font-weight: 800; color: var(--color-primary); margin-bottom: 16px; line-height: 1.25;">
        Stories of the Prophets & Quranic Narratives
      </h1>
      <p style="font-size: 1.12rem; line-height: 1.8; color: var(--color-text-muted); max-width: 860px; margin: 0 auto 20px auto;">
        An authoritative, source-verified encyclopedia covering <strong>all 25 Prophets</strong> explicitly named in the Holy Quran, alongside <strong>5 exemplary Quranic figures and historical communities</strong> (Maryam, Ashab al-Kahf, Luqman, Dhul-Qarnayn, Ashab al-Ukhdud). Sourced directly from Quranic exegesis (<em>Tafsir Ibn Kathir</em>, <em>At-Tabari</em>, <em>Al-Qurtubi</em>) and canonical Hadith literature, completely purified of uncorroborated Isra'iliyyat fables.
      </p>
      <div style="display: flex; justify-content: center; gap: 14px; flex-wrap: wrap; margin-top: 20px;">
        <span class="badge" style="background: rgba(15,81,50,0.1); color: var(--color-primary); border: 1px solid var(--color-primary);">✓ All 25 Quranic Prophets Included</span>
        <span class="badge" style="background: rgba(15,81,50,0.1); color: var(--color-primary); border: 1px solid var(--color-primary);">✓ 5 Stage 7 Exemplary Narratives</span>
        <span class="badge" style="background: rgba(15,81,50,0.1); color: var(--color-primary); border: 1px solid var(--color-primary);">✓ Classical Exegesis & Hadith Verified</span>
        <span class="badge" style="background: rgba(15,81,50,0.1); color: var(--color-primary); border: 1px solid var(--color-primary);">✓ Pure Infallibility ('Ismah) Preserved</span>
      </div>
    </header>

    <!-- Deep Editorial Overview Card -->
    <div class="card" style="padding: 32px; margin-bottom: 36px; border-left: 5px solid var(--color-gold); background: var(--color-surface);">
      <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--color-primary); margin-bottom: 14px;">
        🏛️ Theological Framework: The Quranic Philosophy of Prophethood
      </h2>
      <p style="font-size: 1.02rem; line-height: 1.85; color: var(--color-text-main); margin-bottom: 16px;">
        In Islamic theology, belief in the Prophets and Messengers of God (<em>Al-Iman bil-Anbiya' wal-Rusul</em>) is the fourth pillar of faith (Iman). The Quran asserts that God never left any nation without divine guidance: <em>"And for every nation is a messenger"</em> (Surah Yunus 10:47), and <em>"And there was no nation but that there had passed within it a warner"</em> (Surah Fatir 35:24). The total number of prophets sent across human history is traditionally reported as 124,000, among whom 313 were messengers (Rusul) bearing new sacred covenants or legal dispensations (Sahih Ibn Hibban #361). Of this vast prophetic succession, the Holy Quran specifically commemorates <strong>twenty-five prophets by name</strong>.
      </p>
      <p style="font-size: 1.02rem; line-height: 1.85; color: var(--color-text-main); margin-bottom: 16px;">
        Orthodox Islamic doctrine (Ahl al-Sunnah wa al-Jama'ah) upholds the essential theological principle of <strong>'Ismat al-Anbiya</strong> (the moral infallibility of the Prophets). Prophets are divinely protected from major sins, deceit, treachery, and pagan idolatry both before and after their prophetic commission. Consequently, Quranic narratives stand in stark contrast to corrupt biblical interpolations that slander holy prophets with egregious moral transgressions: Islam vigorously clears Lut of incest, Harun of fashioning the golden calf, Dawud of murdering his loyal general, and Sulayman of practicing witchcraft or idolatry.
      </p>
      <div style="background: rgba(15,81,50,0.05); padding: 18px 22px; border-radius: var(--radius-sm); border-left: 3px solid var(--color-primary); margin-top: 14px;">
        <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">The Five Arch-Prophets of Firm Resolve (Ulul-'Azm min ar-Rusul):</strong>
        <p style="font-size: 0.95rem; line-height: 1.7; color: var(--color-text-main); margin: 0;">
          While all prophets share equal divine election in their essential call to monotheism (<em>Tawheed</em>), the Holy Quran distinguishes five supreme messengers who endured catastrophic trials with monumental patience and uncompromising dedication: <strong>Nuh</strong>, <strong>Ibrahim</strong>, <strong>Musa</strong>, <strong>Isa</strong>, and <strong>Muhammad ﷺ</strong> (Surah Al-Ahzab 33:7, Surah Ash-Shura 42:13, Surah Al-Ahqaf 46:35).
        </p>
      </div>
    </div>

    <!-- Category Filter Controls -->
    <div style="margin-bottom: 28px; text-align: center;">
      <div style="font-size: 0.88rem; font-weight: 700; color: var(--color-text-muted); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 12px;">Filter Narratives by Historical Cohort:</div>
      <div class="prophets-filter-group" style="display: flex; justify-content: center; flex-wrap: wrap; gap: 8px;">
        <button class="btn btn-primary filter-btn active" data-filter="all">🌟 All 30 Narratives</button>
        <button class="btn btn-outline filter-btn" data-filter="ulul-azm">👑 Ulul-'Azm (The Five)</button>
        <button class="btn btn-outline filter-btn" data-filter="early-patriarchs">🌱 Early Patriarchs</button>
        <button class="btn btn-outline filter-btn" data-filter="arabian-prophets">🏜️ Arabian Prophets</button>
        <button class="btn btn-outline filter-btn" data-filter="banu-israel">📜 Banu Israel Prophets</button>
        <button class="btn btn-outline filter-btn" data-filter="exemplary-figures">✨ Quranic Exemplars</button>
      </div>
    </div>

    <!-- Quick Directory Grid -->
    <div class="card" style="padding: 24px; margin-bottom: 36px; background-color: var(--color-surface); border: 1px solid var(--color-border);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
        <h2 style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary); margin: 0;">
          📜 Quick Navigation: Complete Index of 30 Accounts
        </h2>
        <span class="badge" style="background: var(--color-gold-dark); color: #fff;">Canonical Chronology</span>
      </div>
      <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin-bottom: 18px;">
        Click any figure below to jump directly to their full biographical monograph, complete with Quranic verses, exegesis from Ibn Kathir, prophetic Hadith, and theological reflections.
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; font-size: 0.86rem;">
${allProphets.map(p => `        <a href="#${p.id}" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">${p.englishTitle.split('(')[0].trim()}</a>`).join('\n')}
      </div>
    </div>

    <!-- 30 Narratives Container -->
    <div id="prophets-container">

${allProphets.map(p => `      <!-- Narrative: ${p.id} -->
      <article id="${p.id}" class="card prophet-card" data-category="${p.category}" style="margin-bottom: 36px; border-top: 4px solid var(--color-primary); padding: 30px;">
        <!-- Legacy Anchor Aliases for External Backwards-Compatibility -->
        ${p.id === 'hud' ? '<span id="hud-salih" style="position: relative; top: -100px;"></span>' : ''}
        ${p.id === 'ismail' ? '<span id="ismail-ishaq-yaqub" style="position: relative; top: -100px;"></span>' : ''}
        ${p.id === 'dawud' ? '<span id="dawud-sulayman" style="position: relative; top: -100px;"></span>' : ''}

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
          <span class="badge" style="background: var(--color-primary); color: #fff;">${p.categoryBadge}</span>
          <span class="font-arabic" style="font-size: 1.4rem; color: var(--color-gold-dark); font-weight: 700;">${p.arabicName}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <h2 style="font-size: 1.6rem; color: var(--color-primary); margin: 0; font-weight: 800;">${p.englishTitle}</h2>
          <span style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">⏱️ ${p.readTime}</span>
        </div>
        <div style="font-size: 0.9rem; color: var(--color-text-muted); font-weight: 600; margin-bottom: 18px;">
          📖 ${p.quranMentions} • <em>${p.era}</em>
        </div>

${p.paragraphs.map(para => `        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${para}</p>`).join('\n\n')}

        <!-- Quranic Passage Box -->
        <div class="prophet-quran-box" style="background: rgba(15,81,50,0.05); border: 1px solid rgba(15,81,50,0.2); border-left: 4px solid var(--color-primary); border-radius: var(--radius-sm); padding: 18px 22px; margin: 20px 0 18px 0;">
          <div style="font-size: 0.82rem; font-weight: 700; color: var(--color-primary); text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">📖 Quranic Revelation: ${p.quranPassage.surahRef}</div>
          <div class="font-arabic" style="font-size: 1.35rem; line-height: 2.1; color: var(--color-text-main); direction: rtl; text-align: right; margin-bottom: 10px;">${p.quranPassage.arabic}</div>
          <div style="font-size: 0.96rem; font-style: italic; color: var(--color-text-main); margin-bottom: 8px; line-height: 1.6;">${p.quranPassage.translation}</div>
        </div>

        <!-- Exegetical Tafsir & Hadith Context Box -->
        <div style="background-color: var(--color-surface); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-gold); margin-bottom: 18px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">Classical Exegesis (Tafsir) & Hadith Commentary:</strong>
          <p style="line-height: 1.7; color: var(--color-text-main); margin-bottom: 8px;"><strong>Tafsir Insight:</strong> ${p.tafsirHadithBox.tafsir}</p>
          <p style="line-height: 1.7; color: var(--color-text-main); margin: 0;"><strong>Hadith Context:</strong> ${p.tafsirHadithBox.hadith}</p>
        </div>

        <!-- Theological Lessons Box -->
        <div style="background-color: var(--color-surface); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-primary); margin-bottom: 18px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">Key Theological Lessons & Spiritual Principles:</strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: var(--color-text-main);">
${p.theologicalLessons.map(lesson => `            <li>${lesson}</li>`).join('\n')}
          </ul>
        </div>

        <!-- Primary Classical Sources & Verification Badge -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; color: var(--color-text-muted); flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--color-border); padding-top: 14px;">
          <span><strong>Primary Sources:</strong> ${p.sources}</span>
          <span class="badge" style="background: rgba(15,81,50,0.12); color: var(--color-primary); border: 1px solid var(--color-primary);">${p.badgeStatus}</span>
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

    <div class="footer-bottom">
      <div class="container footer-bottom-inner">
        <div>© 2026 Islamic Knowledge Portal. All Rights Reserved. Dedicated to Authentic Public Learning.</div>
        <div style="display: flex; gap: 16px;">
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="contact.html">Contact</a>
          <a href="sources.html">Sources</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Search Modal -->
  <div id="search-modal" class="modal-backdrop" aria-hidden="true" style="display: none;">
    <div class="modal-dialog search-modal-dialog">
      <div class="search-modal-header">
        <div class="search-input-wrapper">
          <span class="search-icon">🔍</span>
          <input type="text" id="global-search-input" class="search-input" placeholder="Search Quran, Hadith, Duas, Guides, Tools... (Phonetic & Multi-script)" autocomplete="off">
        </div>
        <button id="search-modal-close" class="modal-close-btn" aria-label="Close search">✕</button>
      </div>
      <div id="search-modal-results" class="search-modal-results">
        <div class="search-initial-state">
          <p>Type to search across the entire Islamic Knowledge Portal...</p>
        </div>
      </div>
    </div>
  </div>

  <!-- Filter & Interactive Engine Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const filterButtons = document.querySelectorAll('.prophets-filter-group .filter-btn');
      const prophetCards = document.querySelectorAll('#prophets-container .prophet-card');

      filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-filter');

          // Update active button state
          filterButtons.forEach(b => {
            b.classList.remove('active', 'btn-primary');
            b.classList.add('btn-outline');
          });
          btn.classList.add('active', 'btn-primary');
          btn.classList.remove('btn-outline');

          // Filter monographs
          prophetCards.forEach(card => {
            const cardCat = card.getAttribute('data-category');
            if (filter === 'all' || cardCat === filter) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    });
  </script>

  <!-- Core JavaScript Assets -->
  <script src="js/app.js"></script>
  <script src="js/search.js"></script>
  <script src="js/i18n.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'prophets.html'), htmlContent, 'utf8');
console.log(`Successfully generated public/prophets.html with all 30 narratives!`);

const finalFileStats = fs.statSync(path.join(PUBLIC_DIR, 'prophets.html'));
const finalWords = htmlContent.trim().split(/\s+/).length;
console.log(`File Size: ${(finalFileStats.size / 1024).toFixed(1)} KB`);
console.log(`Total HTML Word Count: ~${finalWords} words`);
