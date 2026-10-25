/**
 * Shared HTML Layout Template for NoorDeen In-Depth Articles
 */

function buildArticleHtml({
  slug,
  title,
  arabicSubtitle,
  metaDescription,
  readingTime,
  wordCount,
  publishedDate = 'October 25, 2026',
  verificationStatus = 'Source-Verified Scholarly Bibliography (Primary Classical Compilations)',
  tocItems, // Array of { id, title, label }
  relatedTools = [], // Array of { icon, title, url }
  faqItems = [], // Array of { question, answer }
  contentHtml,
  sourcesHtml
}) {
  const canonicalUrl = `https://jjjffdfde.github.io/NoorDeen/articles/${slug}.html`;

  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jjjffdfde.github.io/NoorDeen/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Articles Library",
        "item": "https://jjjffdfde.github.io/NoorDeen/articles/"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": canonicalUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim()
      }
    }))
  };

  const tocListHtml = tocItems.map((item, idx) => `
          <li class="toc-nav-item">
            <a href="#${item.id}" class="toc-nav-link">${idx + 1}. ${item.title}</a>
          </li>
  `).join('');

  const relatedToolsHtml = relatedTools.map(tool => `
            <a href="${tool.url}" style="color: var(--color-primary); text-decoration: none; display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span>${tool.icon}</span> <span>${tool.title}</span>
            </a>
  `).join('');

  const faqsHtml = faqItems.length > 0 ? `
        <!-- Frequently Asked Questions -->
        <section id="frequently-asked-questions" style="margin-top: 48px; padding-top: 32px; border-top: 2px solid var(--color-border-subtle);">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
            <span style="font-size: 1.5rem;">❓</span>
            <h2 style="font-size: 1.6rem; color: var(--color-primary); margin: 0;">Frequently Asked Questions</h2>
          </div>
          <p style="color: var(--color-text-muted); margin-bottom: 24px;">Authentic, source-grounded answers to common questions arising from this study topic.</p>
          
          <div class="faq-accordion-group">
            ${faqItems.map((faq, i) => `
              <details class="faq-card" style="margin-bottom: 14px; background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; padding: 16px 20px;">
                <summary style="font-weight: 700; color: var(--color-text-main); cursor: pointer; display: flex; justify-content: space-between; align-items: center; list-style: none;">
                  <span>${faq.question}</span>
                  <span class="faq-icon-indicator" style="color: var(--color-gold); font-size: 1.1rem;">▾</span>
                </summary>
                <div style="margin-top: 14px; color: var(--color-text-muted); line-height: 1.7; font-size: 0.95rem; border-top: 1px solid var(--color-border-subtle); padding-top: 12px;">
                  ${faq.answer}
                </div>
              </details>
            `).join('')}
          </div>
        </section>
  ` : '';

  return `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} — NoorDeen Islamic Library</title>
  <meta name="description" content="${metaDescription}">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="manifest" href="../manifest.json">
  <meta name="theme-color" content="#0F5132">
  <link rel="canonical" href="${canonicalUrl}">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:site_name" content="NoorDeen Islamic Knowledge Library">
  <meta property="og:url" content="${canonicalUrl}">
  <meta property="og:title" content="${title} — NoorDeen">
  <meta property="og:description" content="${metaDescription}">
  <meta property="og:image" content="https://jjjffdfde.github.io/NoorDeen/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${metaDescription}">
  <meta name="twitter:image" content="https://jjjffdfde.github.io/NoorDeen/icons/icon-512.svg">

  <!-- Breadcrumbs JSON-LD Schema -->
  <script type="application/ld+json">
  ${JSON.stringify(breadcrumbsSchema, null, 2)}
  </script>

  <!-- FAQPage JSON-LD Schema -->
  <script type="application/ld+json">
  ${JSON.stringify(faqSchema, null, 2)}
  </script>
</head>
<body>

  <!-- Top Ad Slot Container -->
  <div class="ad-slot-container" id="ad-banner-top" data-ad-slot="portal_top_leaderboard" style="display: none; min-height: 90px; margin: 10px auto; text-align: center;">
    <!-- Ad container managed by PortalConfig -->
  </div>

  <!-- Header -->
  <header class="site-header">
    <div class="container header-inner">
      <a href="../index.html" class="logo-group">
        <div class="logo-icon">☪</div>
        <div class="logo-text-wrapper">
          <div class="logo-text-title" data-i18n="siteTitle">NoorDeen</div>
          <div class="logo-text-subtitle" data-i18n="siteSubtitle">International Islamic Knowledge Library</div>
        </div>
      </a>

      <!-- Desktop Nav -->
      <nav class="desktop-nav">
        <ul class="nav-menu">
          <li class="nav-item"><a href="../index.html" data-i18n="navHome">Home</a></li>

          <!-- Articles Library Link -->
          <li class="nav-item"><a href="index.html" class="active" style="color: var(--color-gold); font-weight: 700;">📚 Articles</a></li>

          <!-- Quran Dropdown -->
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

          <!-- Hadith & Duas Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navHadith">Hadith & Duas</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="../hadith.html" class="nav-dropdown-item">📜 Authentic Hadith (101 Traditions)</a>
              <a href="../duas.html" class="nav-dropdown-item">🤲 Masnoon Duas (102 Duas)</a>
              <a href="../kalimas.html" class="nav-dropdown-item">⭐ Six Kalimas of Islam</a>
              <a href="hadith-and-sunnah-authenticity.html" class="nav-dropdown-item">⚖️ Hadith Sciences & Grading</a>
              <a href="daily-adhkar-and-supplications.html" class="nav-dropdown-item">📿 Daily Adhkar Guide</a>
              <a href="../seerah.html" class="nav-dropdown-item">🌹 Prophetic Seerah (25 Chapters)</a>
              <a href="../prophets.html" class="nav-dropdown-item">📜 Stories of the Prophets</a>
              <a href="../sahaba.html" class="nav-dropdown-item">👥 Lives of the Sahaba (52 Biographies)</a>
            </div>
          </li>

          <!-- Worship Guides Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navWorship">Worship Guides</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="beginners-guide-to-islam.html" class="nav-dropdown-item">🌱 Beginner's Guide to Islam</a>
              <a href="tawhid-and-the-shahadah.html" class="nav-dropdown-item">☝️ Meaning of Tawhid</a>
              <a href="../pillars.html" class="nav-dropdown-item">🏛️ Five Pillars of Islam</a>
              <a href="../salah-guide.html" class="nav-dropdown-item">🕌 Five Daily Prayers (Salah)</a>
              <a href="../wudu-guide.html" class="nav-dropdown-item">💧 Step-by-Step Wudu Guide</a>
              <a href="../janazah-guide.html" class="nav-dropdown-item">⚰️ Funeral Prayer (Janazah)</a>
              <a href="../eid-guide.html" class="nav-dropdown-item">🌙 Eid Prayer (Fitr & Adha)</a>
            </div>
          </li>

          <!-- Tools Dropdown -->
          <li class="nav-item nav-dropdown">
            <button class="nav-btn" aria-haspopup="true">
              <span data-i18n="navTools">Islamic Tools</span> <span class="dropdown-caret">▾</span>
            </button>
            <div class="nav-dropdown-menu">
              <a href="../prayer-times.html" class="nav-dropdown-item">⏱️ Solar Prayer Times</a>
              <a href="../zakat-calculator.html" class="nav-dropdown-item">💰 Zakat Calculation Engine</a>
              <a href="zakat-educational-calculation-guide.html" class="nav-dropdown-item">📊 Complete Zakat Treatise</a>
              <a href="../tasbih.html" class="nav-dropdown-item">📿 Digital Tasbih Counter</a>
              <a href="../calendar.html" class="nav-dropdown-item">📅 Lunar Hijri Calendar</a>
            </div>
          </li>

          <!-- App Pill -->
          <li class="nav-item">
            <a href="../download-app.html" class="nav-app-pill">
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

  <!-- Hero Banner -->
  <div style="background: radial-gradient(circle at 50% 30%, #0F5132 0%, #073320 100%); color: #FFFFFF; padding: 52px 0 44px; text-align: center; border-bottom: 3px solid var(--color-gold);">
    <div class="container">
      <div style="display: inline-block; padding: 4px 16px; background: rgba(255,255,255,0.12); border-radius: 20px; font-size: 0.85rem; font-weight: 700; color: var(--color-gold); margin-bottom: 14px;">
        ${arabicSubtitle || 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ — IN THE NAME OF ALLAH'}
      </div>
      <h1 style="font-size: 2.35rem; font-weight: 800; max-width: 900px; margin: 0 auto 14px; line-height: 1.25;">${title}</h1>
      <p style="color: #D1D5DB; max-width: 760px; margin: 0 auto 20px; font-size: 1.05rem; line-height: 1.6;">
        ${metaDescription}
      </p>

      <!-- Article Meta Badges -->
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 16px; font-size: 0.82rem; color: #E5E7EB; margin-top: 10px;">
        <span style="display: inline-flex; align-items: center; gap: 6px; background: rgba(0,0,0,0.25); padding: 5px 12px; border-radius: 16px;">
          ⏱️ Estimated Reading: ${readingTime}
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px; background: rgba(0,0,0,0.25); padding: 5px 12px; border-radius: 16px;">
          📖 Scope: ~${wordCount} Words
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px; background: rgba(0,0,0,0.25); padding: 5px 12px; border-radius: 16px;">
          📅 Published: ${publishedDate}
        </span>
        <span style="display: inline-flex; align-items: center; gap: 6px; background: rgba(181, 139, 80, 0.25); border: 1px solid var(--color-gold); padding: 5px 12px; border-radius: 16px; color: #FFF;">
          🛡️ ${verificationStatus}
        </span>
      </div>
    </div>
  </div>

  <!-- Editorial Two-Column Main Container -->
  <main class="container" style="padding-top: 40px; padding-bottom: 80px;">
    <div class="editorial-page-container">
      
      <!-- Sticky Sidebar: Table of Contents -->
      <aside class="sticky-toc-wrapper">
        <div class="sticky-toc-title">Table of Contents</div>
        <ul class="toc-nav-list">
          ${tocListHtml}
          ${faqItems.length > 0 ? `
          <li class="toc-nav-item">
            <a href="#frequently-asked-questions" class="toc-nav-link">${tocItems.length + 1}. Common Questions (FAQ)</a>
          </li>` : ''}
          <li class="toc-nav-item">
            <a href="#scholarly-bibliography" class="toc-nav-link">${tocItems.length + (faqItems.length > 0 ? 2 : 1)}. Scholarly Bibliography</a>
          </li>
        </ul>

        ${relatedTools.length > 0 ? `
        <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--color-border); font-size: 0.85rem;">
          <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 8px;">Interactive Study Tools:</div>
          <div style="line-height: 1.8;">
            ${relatedToolsHtml}
          </div>
        </div>` : ''}

        <div style="margin-top: 20px; padding: 12px; background: var(--color-surface); border-radius: 8px; font-size: 0.8rem; color: var(--color-text-muted); line-height: 1.5;">
          <strong>Editorial Integrity Note:</strong> NoorDeen provides educational material synthesized from authentic classical sources without sectarian polemics.
        </div>
      </aside>

      <!-- Main Article Body -->
      <article class="editorial-content-body" style="min-width: 0;">
        ${contentHtml}

        ${faqsHtml}

        <!-- Scholarly Bibliography & Provenance -->
        <section id="scholarly-bibliography" style="margin-top: 48px; padding: 24px; background: var(--color-card); border: 1px solid var(--color-border); border-left: 4px solid var(--color-brass); border-radius: 8px;">
          <h2 style="font-size: 1.35rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
            <span>📚</span> Scholarly Provenance & Cited Primary References
          </h2>
          <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-bottom: 14px;">
            Every religious text, Hadith narration, and theological principle in this treatise is anchored in recognized classical Sunni Islamic scholarship:
          </p>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.88rem; color: var(--color-text-main); line-height: 1.8;">
            ${sourcesHtml}
          </ul>
        </section>

        <!-- Navigation Bar to Next/Previous Articles -->
        <div style="margin-top: 40px; padding-top: 24px; border-top: 1px solid var(--color-border); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 16px;">
          <a href="index.html" class="btn btn-outline" style="text-decoration: none;">
            ← Return to Articles Library
          </a>
          <a href="../index.html" class="btn btn-primary" style="text-decoration: none;">
            Explore All 20 Knowledge Pillars →
          </a>
        </div>
      </article>

    </div>
  </main>

  <!-- Site Footer -->
  <footer class="site-footer">
    <div class="container footer-inner">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo-group">
            <span class="logo-icon">☪</span>
            <span class="logo-text-title" style="color: var(--color-gold);">NoorDeen</span>
          </div>
          <p class="footer-desc">
            A comprehensive, verified Islamic knowledge library and educational portal dedicated to authentic classical teachings, spiritual development, and accessible Islamic resources.
          </p>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Primary Library</div>
          <ul class="footer-links">
            <li><a href="../quran.html">Holy Quran</a></li>
            <li><a href="../hadith.html">Hadith Collections</a></li>
            <li><a href="../duas.html">Duas & Adhkar</a></li>
            <li><a href="../seerah.html">Prophetic Seerah</a></li>
            <li><a href="index.html">Educational Articles</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">Interactive Tools</div>
          <ul class="footer-links">
            <li><a href="../prayer-times.html">Solar Prayer Times</a></li>
            <li><a href="../zakat-calculator.html">Zakat Calculator</a></li>
            <li><a href="../tasbih.html">Digital Tasbih</a></li>
            <li><a href="../calendar.html">Hijri Calendar</a></li>
            <li><a href="../download-app.html">Mobile App</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <div class="footer-col-title">About & Trust</div>
          <ul class="footer-links">
            <li><a href="../about.html">About NoorDeen</a></li>
            <li><a href="../contact.html">Contact Us</a></li>
            <li><a href="../sources.html">Scholarly Sources</a></li>
            <li><a href="../privacy.html">Privacy Policy</a></li>
            <li><a href="../terms.html">Terms of Service</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <div>© 2026 NoorDeen. All rights reserved. Free and non-commercial educational library.</div>
        <div>Preserving authentic classical Islamic knowledge with verified citations.</div>
      </div>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="../js/config.js"></script>
  <script src="../js/i18n.js"></script>
  <script src="../js/search.js"></script>
  <script src="../js/app.js"></script>
</body>
</html>
`;
}

module.exports = { buildArticleHtml };
