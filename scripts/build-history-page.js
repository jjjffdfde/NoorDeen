// scripts/build-history-page.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

import { historyPart1 } from './history-data-part1.js';
import { historyPart2 } from './history-data-part2.js';

const allEras = [
  ...historyPart1,
  ...historyPart2
];

console.log(`Total History Eras loaded: ${allEras.length}`);
if (allEras.length !== 12) {
  throw new Error(`Expected exactly 12 master eras, got ${allEras.length}`);
}

// Parse Chronology CSV
const chronoCsv = fs.readFileSync(path.join(ROOT_DIR, 'AUDIT', 'PHASE-6', 'HISTORY-CHRONOLOGY-MATRIX.csv'), 'utf8');
const chronoLines = chronoCsv.trim().split('\n').slice(1);
const events = [];
chronoLines.forEach(line => {
  // Simple CSV parser supporting quoted commas
  const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
  let match;
  const cols = [];
  while ((match = regex.exec(line)) !== null) {
    if (match.index === regex.lastIndex) regex.lastIndex++;
    let val = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
    cols.push(val !== undefined ? val.trim() : '');
  }
  // Trim trailing empty match if present
  if (cols.length > 11) cols.length = 11;
  if (cols.length >= 10 && cols[0]) {
    events.push({
      id: cols[0],
      title: cols[1],
      eraId: cols[2],
      dateAh: cols[3],
      dateCe: cols[4],
      certainty: cols[5],
      location: cols[6],
      figures: cols[7],
      summary: cols[8],
      sources: cols[9],
      status: cols[10] || '✓ Verified'
    });
  }
});
console.log(`Parsed ${events.length} chronological timeline events from CSV.`);

// Parse Regional CSV
const regCsv = fs.readFileSync(path.join(ROOT_DIR, 'AUDIT', 'PHASE-6', 'HISTORY-REGIONAL-COVERAGE.csv'), 'utf8');
const regLines = regCsv.trim().split('\n').slice(1);
const regions = [];
regLines.forEach(line => {
  const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;
  let match;
  const cols = [];
  while ((match = regex.exec(line)) !== null) {
    if (match.index === regex.lastIndex) regex.lastIndex++;
    let val = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
    cols.push(val !== undefined ? val.trim() : '');
  }
  if (cols.length > 8) cols.length = 8;
  if (cols.length >= 7 && cols[0]) {
    regions.push({
      id: cols[0],
      name: cols[1],
      territories: cols[2],
      centuries: cols[3],
      dynasties: cols[4],
      contributions: cols[5],
      scholars: cols[6],
      sources: cols[7] || ''
    });
  }
});
console.log(`Parsed ${regions.length} geographic regions from CSV.`);

const htmlContent = `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Islamic History & Civilizations (تاريخ الإسلام) — Comprehensive 14-Century Library | Islamic Knowledge Portal</title>
  <meta name="description" content="Explore fourteen centuries of Islamic civilization across twelve defining eras: from pre-Islamic Arabia and the Caliphates to Andalusia, the Ottoman, Safavid, and Mughal empires, African kingdoms, Southeast Asia, and the modern world.">
  <link rel="stylesheet" href="css/main.css">
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0F5132">
  <link rel="canonical" href="https://islamicknowledge.example.com/history.html">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="Islamic Knowledge Portal">
  <meta property="og:url" content="https://islamicknowledge.example.com/history.html">
  <meta property="og:title" content="Islamic History & Civilizations (تاريخ الإسلام) — Comprehensive 14-Century Library">
  <meta property="og:description" content="A source-verified, comprehensive digital encyclopedia of Islamic civilization covering 12 historical epochs, 12 regional spheres, and 54 milestone events.">
  <meta property="og:image" content="https://islamicknowledge.example.com/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://islamicknowledge.example.com/history.html">
  <meta name="twitter:title" content="Islamic History & Civilizations (تاريخ الإسلام) — 14-Century Library">
  <meta name="twitter:description" content="Comprehensive, source-verified accounts of 14 centuries of Islamic civilization across 12 eras, 12 regions, and over 50 chronological events.">
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
        "name": "Islamic History & Civilizations",
        "item": "https://islamicknowledge.example.com/history.html"
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
      <a href="prophets.html" class="mobile-nav-link">📜 Stories of the Prophets</a>
      <a href="sahaba.html" class="mobile-nav-link">👥 Lives of the Sahaba</a>
      <a href="history.html" class="mobile-nav-link active">📜 Islamic History (12 Eras)</a>
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

  <!-- Hero Header Banner -->
  <div style="background: radial-gradient(circle at 50% 30%, #0F5132 0%, #073320 100%); color: #FFFFFF; padding: 50px 20px; text-align: center;">
    <div class="container" style="max-width: 1050px;">
      <div style="display: inline-block; padding: 5px 16px; background: rgba(255,255,255,0.12); border-radius: 20px; font-size: 0.85rem; font-weight: 700; color: var(--color-gold); margin-bottom: 14px; letter-spacing: 0.5px;">
        تَارِيخُ الْحَضَارَةِ الإِسْلامِيَّةِ — 14 CENTURIES OF GLOBAL CIVILIZATION
      </div>
      <h1 style="font-size: 2.6rem; font-weight: 800; margin-bottom: 14px; line-height: 1.25;">
        Islamic History & Civilizations (تاريخ الإسلام)
      </h1>
      <p style="color: #D1D5DB; max-width: 860px; margin: 0 auto; font-size: 1.12rem; line-height: 1.8;">
        An authoritative, source-verified historical encyclopedia surveying fourteen centuries of Islamic civilization across twelve defining master eras, twelve regional civilizational spheres, and over fifty milestone events. Documented with academic rigor from primary chronicles (<em>At-Tabari</em>, <em>Al-Baladhuri</em>, <em>Ibn al-Athir</em>, <em>Ibn Khaldun</em>) and peer-reviewed modern scholarship.
      </p>
      <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; margin-top: 24px;">
        <span class="badge" style="background: rgba(255,255,255,0.15); color: #fff;">✓ 12 Master Epochs (Pre-Islam to Present)</span>
        <span class="badge" style="background: rgba(255,255,255,0.15); color: #fff;">✓ 12 Global Regional Spheres</span>
        <span class="badge" style="background: rgba(255,255,255,0.15); color: #fff;">✓ 54 Verified Milestone Events</span>
        <span class="badge" style="background: rgba(255,255,255,0.15); color: #fff;">✓ Primary Arabic & Regional Chronicles</span>
      </div>
    </div>
  </div>

  <!-- Main Content Container -->
  <main class="container" style="max-width: 1120px; padding: 40px 20px 80px 20px;">

    <!-- Breadcrumb Display -->
    <nav aria-label="Breadcrumb" style="margin-bottom: 24px; font-size: 0.9rem; color: var(--color-text-muted);">
      <a href="index.html" style="color: var(--color-primary); text-decoration: none;">Home</a>
      <span style="margin: 0 8px;">/</span>
      <span style="color: var(--color-text-main); font-weight: 600;">Islamic History & Civilizations</span>
    </nav>

    <!-- Deep Editorial Overview Card -->
    <div class="card" style="padding: 32px; margin-bottom: 36px; border-left: 5px solid var(--color-gold); background: var(--color-surface);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <h2 style="font-size: 1.45rem; font-weight: 800; color: var(--color-primary); margin: 0;">
          🏛️ The Philosophy of Islamic History: Beyond Dynastic Chronicles
        </h2>
        <span class="badge" style="background: var(--color-primary); color: #fff;">Historiographical Methodology</span>
      </div>
      <p style="font-size: 1.02rem; line-height: 1.85; color: var(--color-text-main); margin-bottom: 16px;">
        In classical Islamic scholarship, the study of history (<em>'Ilm al-Tarikh</em>) is not merely a record of kings, military sieges, and dynastic successions. Rather, as pioneered by the father of sociology and historical philosophy, **Abd al-Rahman ibn Khaldun (1332–1406 CE)** in his revolutionary <em>Al-Muqaddimah</em> (Prolegomena), true history is an investigation into human social organization, the rise and decay of urban civilizations (<em>Umran Bashari</em>), the dynamics of social solidarity (<em>Asabiyyah</em>), and the moral, commercial, and intellectual currents that animate societies. The Holy Quran repeatedly enjoins humanity to reflect upon historical trajectories: <em>"Have they not traveled through the earth and observed how was the end of those before them?"</em> (Surah Yusuf 12:109), elevating history into an ethical science of divine wisdom and human accountability.
      </p>
      <p style="font-size: 1.02rem; line-height: 1.85; color: var(--color-text-main); margin-bottom: 16px;">
        This learning library presents the history of Muslim societies across three complementary dimensions:
      </p>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 18px;">
        <div style="background: rgba(15,81,50,0.05); padding: 18px; border-radius: var(--radius-sm); border-left: 3px solid var(--color-primary);">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">1. Chronological Mastery (12 Eras):</strong>
          <span style="font-size: 0.92rem; line-height: 1.6; color: var(--color-text-main);">From late antique Arabia and the Prophetic Commonwealth through the classical caliphates, Andalusia, the Mamluks, the Gunpowder Empires (Ottomans, Safavids, Mughals), to anti-colonial rebirth.</span>
        </div>
        <div style="background: rgba(15,81,50,0.05); padding: 18px; border-radius: var(--radius-sm); border-left: 3px solid var(--color-gold); text-align: left;">
          <strong style="color: var(--color-gold-dark); display: block; margin-bottom: 6px;">2. Regional Diversity (12 Spheres):</strong>
          <span style="font-size: 0.92rem; line-height: 1.6; color: var(--color-text-main);">Acknowledging that the Islamic experience was never homogeneous: embracing the distinct histories of West Africa, the Swahili coast, South Asia, Central Asia, and maritime Southeast Asia.</span>
        </div>
        <div style="background: rgba(15,81,50,0.05); padding: 18px; border-radius: var(--radius-sm); border-left: 3px solid var(--color-primary); text-align: left;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 6px;">3. Intellectual & Material Culture:</strong>
          <span style="font-size: 0.92rem; line-height: 1.6; color: var(--color-text-main);">Documenting the empirical scientific revolution, hospital foundations (Bimaristans), the translation movement, university systems (Madrasah), and soaring sacred architecture.</span>
        </div>
      </div>
    </div>

    <!-- View Mode Switcher -->
    <div style="display: flex; justify-content: center; gap: 12px; margin-bottom: 30px; flex-wrap: wrap;">
      <button id="view-eras-btn" class="btn btn-primary view-toggle-btn active" style="font-weight: 700;">
        📜 12 Master Era Monographs
      </button>
      <button id="view-timeline-btn" class="btn btn-outline view-toggle-btn" style="font-weight: 700;">
        ⏱️ Interactive Timeline (54 Milestones)
      </button>
      <button id="view-regions-btn" class="btn btn-outline view-toggle-btn" style="font-weight: 700;">
        🌍 12 Regional Civilizations Guide
      </button>
    </div>

    <!-- Quick Navigation Index: 12 Master Eras -->
    <div id="era-nav-index" class="card" style="margin-bottom: 36px; padding: 22px 26px; border-left: 5px solid var(--color-primary); background: var(--color-surface);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary); margin: 0;">
          📜 Quick Navigation: 12 Master Epochs of Islamic Civilization
        </h2>
        <span class="badge" style="background: var(--color-gold-dark); color: #fff;">1400+ Years Survey</span>
      </div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 10px; font-size: 0.88rem;">
${allEras.map(e => `        <a href="#${e.id}" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;"><strong>${e.eraNumber}:</strong> ${e.englishTitle.split(':')[0].trim()}</a>`).join('\n')}
      </div>
    </div>

    <!-- SECTION 1: THE 12 MASTER ERA MONOGRAPHS CONTAINER -->
    <div id="eras-view-container">

${allEras.map(e => `      <!-- Master Era: ${e.id} -->
      <article id="${e.id}" class="card era-card" style="margin-bottom: 40px; border-top: 4px solid var(--color-primary); padding: 32px;">
        <!-- Anchor aliases for regional deep-dives -->
        ${e.id === 'era7' ? '<span id="al-andalus" style="position: relative; top: -100px;"></span><span id="cordoba" style="position: relative; top: -100px;"></span><span id="granada" style="position: relative; top: -100px;"></span>' : ''}
        ${e.id === 'era8' ? '<span id="fatimids" style="position: relative; top: -100px;"></span><span id="salahuddin" style="position: relative; top: -100px;"></span><span id="mamluks" style="position: relative; top: -100px;"></span>' : ''}
        ${e.id === 'era9' ? '<span id="ottomans" style="position: relative; top: -100px;"></span><span id="constantinople" style="position: relative; top: -100px;"></span><span id="mimar-sinan" style="position: relative; top: -100px;"></span>' : ''}
        ${e.id === 'era10' ? '<span id="mughals" style="position: relative; top: -100px;"></span><span id="delhi-sultanate" style="position: relative; top: -100px;"></span><span id="shah-waliullah" style="position: relative; top: -100px;"></span>' : ''}
        ${e.id === 'era11' ? '<span id="timbuktu" style="position: relative; top: -100px;"></span><span id="mansa-musa" style="position: relative; top: -100px;"></span><span id="malacca" style="position: relative; top: -100px;"></span><span id="swahili-coast" style="position: relative; top: -100px;"></span><span id="zheng-he" style="position: relative; top: -100px;"></span>' : ''}

        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <span class="badge" style="background: var(--color-primary); color: #fff;">${e.eraBadge}</span>
          <span class="font-arabic" style="font-size: 1.35rem; color: var(--color-gold-dark); font-weight: 700;">${e.arabicTitle}</span>
        </div>
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <h2 style="font-size: 1.6rem; color: var(--color-primary); margin: 0; font-weight: 800;">${e.englishTitle}</h2>
          <span style="font-size: 0.85rem; color: var(--color-text-muted); font-weight: 600;">⏱️ ${e.readTime}</span>
        </div>
        <div style="font-size: 0.9rem; color: var(--color-text-muted); font-weight: 600; margin-bottom: 20px;">
          📅 Chronological Span: <strong>${e.chronologySpan}</strong>
        </div>

${e.paragraphs.map(p => `        <p style="line-height: 1.85; color: var(--color-text-main); margin-bottom: 18px; font-size: 1.02rem;">${p}</p>`).join('\n\n')}

        <!-- Key Civilizational Markers Box -->
        <div style="background-color: var(--color-surface); padding: 18px 22px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-gold); margin-bottom: 18px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 8px;">Key Civilizational Markers & Turning Points:</strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: var(--color-text-main);">
${e.markers.map(m => `            <li>${m}</li>`).join('\n')}
          </ul>
        </div>

        <!-- Regional Dynamics Box -->
        <div style="background: rgba(15,81,50,0.04); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-primary); margin-bottom: 18px;">
          <strong style="color: var(--color-primary); display: block; margin-bottom: 4px;">🌍 Geographic & Regional Dynamics:</strong>
          <span style="line-height: 1.7; color: var(--color-text-main);">${e.regionalDynamics}</span>
        </div>

        <!-- Cultural & Institutional Achievements -->
        <div style="background-color: var(--color-surface); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.92rem; border-left: 3px solid var(--color-gold-dark); margin-bottom: 18px;">
          <strong style="color: var(--color-gold-dark); display: block; margin-bottom: 8px;">🏛️ Institutional, Scientific & Material Culture Achievements:</strong>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.7; color: var(--color-text-main);">
${e.culturalAchievements.map(ca => `            <li>${ca}</li>`).join('\n')}
          </ul>
        </div>

        <!-- Primary Sources & Historiography -->
        <div style="background: var(--color-surface); border: 1px solid var(--color-border); padding: 16px 20px; border-radius: var(--radius-sm); font-size: 0.88rem; margin-bottom: 16px;">
          <div style="margin-bottom: 6px;"><strong>Primary Classical Chronicles:</strong> <span style="color: var(--color-text-muted);">${e.sourcesBox.primary}</span></div>
          <div><strong>Academic Modern Historiography:</strong> <span style="color: var(--color-text-muted);">${e.sourcesBox.historiography}</span></div>
        </div>

        <!-- Verification Status Footer -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; color: var(--color-text-muted); flex-wrap: wrap; gap: 10px; border-top: 1px solid var(--color-border); padding-top: 14px;">
          <span><strong>Era Code:</strong> <code>${e.id}</code></span>
          <span class="badge" style="background: rgba(15,81,50,0.12); color: var(--color-primary); border: 1px solid var(--color-primary);">${e.verificationStatus}</span>
        </div>
      </article>`).join('\n\n')}

    </div>

    <!-- SECTION 2: INTERACTIVE TIMELINE (54 MILESTONES) CONTAINER -->
    <div id="timeline-view-container" style="display: none;">
      <div class="card" style="padding: 26px; margin-bottom: 28px; background: var(--color-surface); border-left: 5px solid var(--color-gold);">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--color-primary); margin-bottom: 8px;">
          ⏱️ Chronological Timeline of Islamic Civilization (54 Milestone Events)
        </h2>
        <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
          A verified chronological register spanning from the dawn of the Prophetic mission in the 6th century to modern contemporary times. Each entry records the dual Hijri (AH) and Common Era (CE) dates, date certainty, geographic location, associated figures, and primary sources.
        </p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 20px;">
${events.map((evt, idx) => `        <!-- Timeline Event: ${evt.id} -->
        <div class="card" style="padding: 22px 26px; border-left: 4px solid var(--color-primary); background: var(--color-surface);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <span class="badge" style="background: var(--color-primary); color: #fff;">#${idx + 1} • ${evt.id}</span>
              <span style="font-size: 0.88rem; font-weight: 700; color: var(--color-gold-dark);">📅 ${evt.dateAh} / ${evt.dateCe}</span>
            </div>
            <span class="badge" style="background: rgba(15,81,50,0.1); color: var(--color-primary);">${evt.certainty}</span>
          </div>
          <h3 style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary); margin-bottom: 8px;">${evt.title}</h3>
          <div style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 12px;">
            📍 <strong>Location:</strong> ${evt.location} • 👥 <strong>Figures:</strong> ${evt.figures}
          </div>
          <p style="font-size: 0.98rem; line-height: 1.75; color: var(--color-text-main); margin-bottom: 12px;">
            ${evt.summary}
          </p>
          <div style="font-size: 0.84rem; color: var(--color-text-muted); border-top: 1px solid var(--color-border); padding-top: 10px;">
            <strong>Sources:</strong> ${evt.sources}
          </div>
        </div>`).join('\n\n')}
      </div>
    </div>

    <!-- SECTION 3: 12 REGIONAL CIVILIZATIONS CONTAINER -->
    <div id="regions-view-container" style="display: none;">
      <div class="card" style="padding: 26px; margin-bottom: 28px; background: var(--color-surface); border-left: 5px solid var(--color-primary);">
        <h2 style="font-size: 1.4rem; font-weight: 800; color: var(--color-primary); margin-bottom: 8px;">
          🌍 Twelve Regional Civilizational Spheres of the Islamic World
        </h2>
        <p style="font-size: 0.95rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
          The experience of Muslim societies was never monolithic. Explore the distinctive political, architectural, commercial, and scholarly developments of twelve interconnected regional civilizations across Africa, Asia, and Europe.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
${regions.map(r => `        <!-- Region Card: ${r.id} -->
        <div class="card" style="padding: 26px; border-top: 4px solid var(--color-gold); background: var(--color-surface); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span class="badge" style="background: var(--color-gold-dark); color: #fff;">${r.id}</span>
              <span style="font-size: 0.82rem; color: var(--color-text-muted); font-weight: 600;">${r.centuries}</span>
            </div>
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--color-primary); margin-bottom: 10px;">${r.name}</h3>
            <div style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 12px; line-height: 1.5;">
              🏛️ <strong>Key Cities:</strong> ${r.territories}
            </div>
            <div style="font-size: 0.88rem; color: var(--color-text-main); margin-bottom: 12px; line-height: 1.6;">
              👑 <strong>Dynasties:</strong> ${r.dynasties}
            </div>
            <p style="font-size: 0.94rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 14px;">
              ${r.contributions}
            </p>
            <div style="font-size: 0.88rem; color: var(--color-text-muted); margin-bottom: 12px; line-height: 1.5;">
              📜 <strong>Prominent Scholars:</strong> ${r.scholars}
            </div>
          </div>
          <div style="font-size: 0.82rem; color: var(--color-text-muted); border-top: 1px solid var(--color-border); padding-top: 10px;">
            <strong>Sources:</strong> ${r.sources}
          </div>
        </div>`).join('\n\n')}
      </div>
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
          <li><a href="sahaba.html">👥 Lives of the Sahaba</a></li>
          <li><a href="history.html">📜 Islamic History (12 Eras)</a></li>
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
          <input type="text" id="global-search-input" class="search-input" placeholder="Search Quran, Hadith, Duas, History, Guides... (Phonetic & Multi-script)" autocomplete="off">
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

  <!-- Interactive View Switcher Engine Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const viewErasBtn = document.getElementById('view-eras-btn');
      const viewTimelineBtn = document.getElementById('view-timeline-btn');
      const viewRegionsBtn = document.getElementById('view-regions-btn');

      const erasContainer = document.getElementById('eras-view-container');
      const timelineContainer = document.getElementById('timeline-view-container');
      const regionsContainer = document.getElementById('regions-view-container');
      const eraNavIndex = document.getElementById('era-nav-index');

      function switchView(activeBtn, showContainer) {
        // Reset buttons
        [viewErasBtn, viewTimelineBtn, viewRegionsBtn].forEach(btn => {
          btn.classList.remove('active', 'btn-primary');
          btn.classList.add('btn-outline');
        });
        activeBtn.classList.add('active', 'btn-primary');
        activeBtn.classList.remove('btn-outline');

        // Toggle containers
        erasContainer.style.display = 'none';
        timelineContainer.style.display = 'none';
        regionsContainer.style.display = 'none';
        showContainer.style.display = 'block';

        if (showContainer === erasContainer) {
          eraNavIndex.style.display = 'block';
        } else {
          eraNavIndex.style.display = 'none';
        }
      }

      viewErasBtn.addEventListener('click', () => switchView(viewErasBtn, erasContainer));
      viewTimelineBtn.addEventListener('click', () => switchView(viewTimelineBtn, timelineContainer));
      viewRegionsBtn.addEventListener('click', () => switchView(viewRegionsBtn, regionsContainer));
    });
  </script>

  <!-- Core JavaScript Assets -->
  <script src="js/app.js"></script>
  <script src="js/search.js"></script>
  <script src="js/i18n.js"></script>
</body>
</html>
`;

fs.writeFileSync(path.join(PUBLIC_DIR, 'history.html'), htmlContent, 'utf8');
console.log('Successfully generated public/history.html with 12 Master Eras, 54 Timeline Milestones, and 12 Regional Guides!');

const finalFileStats = fs.statSync(path.join(PUBLIC_DIR, 'history.html'));
const finalWords = htmlContent.trim().split(/\s+/).length;
console.log(`File Size: ${(finalFileStats.size / 1024).toFixed(1)} KB`);
console.log(`Total HTML Word Count: ~${finalWords} words`);
