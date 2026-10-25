/**
 * Article Index Generator: Generates public/articles/index.html
 * Features the 10 Published Articles and the 100-Topic Knowledge Library Master Roadmap
 */

function getArticleIndexHtml() {
  const publishedArticles = [
    {
      slug: "beginners-guide-to-islam",
      category: "New-Muslim Education",
      badge: "Flagship Foundation",
      icon: "🌱",
      title: "A Complete Beginner's Guide to Islam",
      desc: "An authentic, accessible introduction covering the meaning of Islam, purpose of worship, the Six Articles of Faith, Five Pillars, and a 5-phase learning pathway.",
      words: "2,250",
      readingTime: "11 min",
      topics: ["Tawhid", "Six Articles of Iman", "Five Pillars", "Daily Routine", "Pedagogy"]
    },
    {
      slug: "how-to-read-and-understand-quran",
      category: "Quranic Sciences",
      badge: "Study Methodology",
      icon: "📖",
      title: "How to Read and Understand the Quran",
      desc: "Learn how to engage with the Holy Quran respectfully and effectively. Explores Surah architecture, Makki vs Madani epochs, Tilawah vs Tadabbur, and a 15-minute daily framework.",
      words: "2,300",
      readingTime: "12 min",
      topics: ["114 Surahs", "Makki vs Madani", "Tajweed", "Tadabbur", "15-Min Routine"]
    },
    {
      slug: "quran-translation-vs-tafsir",
      category: "Quranic Sciences",
      badge: "Linguistic Analysis",
      icon: "🔍",
      title: "Quran Translation vs Tafsir: Understanding the Critical Difference",
      desc: "Why an English translation is not the Quran. Examines the limits of translating divine Arabic, the role of classical Tafsir, transliteration pitfalls, and premier classical commentaries.",
      words: "2,350",
      readingTime: "12 min",
      topics: ["I'jaz al-Quran", "Untranslatability", "Transliteration Risks", "Tabari & Ibn Kathir"]
    },
    {
      slug: "tawhid-and-the-shahadah",
      category: "Aqeedah & Creed",
      badge: "Theological Treatise",
      icon: "☝️",
      title: "Tawhid and the Shahadah: Meaning, Categories & Significance",
      desc: "A source-verified treatise on Islamic monotheism. Covers Rububiyyah, Uluhiyyah, Asma' was-Sifat, the 7 conditions of Shahadah, and negating major and minor Shirk.",
      words: "2,400",
      readingTime: "13 min",
      topics: ["Rububiyyah", "Uluhiyyah", "Asma' was-Sifat", "7 Shurut", "Ayatul Kursi"]
    },
    {
      slug: "five-pillars-of-islam",
      category: "Worship & Fiqh",
      badge: "Core Framework",
      icon: "🏛️",
      title: "The Five Pillars of Islam: A Detailed Learning Guide",
      desc: "A comprehensive guide exploring Shahadah, Salah, Zakat, Sawm, and Hajj. Details their scriptural evidence, spiritual wisdom, social cohesion, and practical observance.",
      words: "2,350",
      readingTime: "13 min",
      topics: ["Architectural Analogy", "Bukhari #8", "Spiritual Balance", "Social Justice"]
    },
    {
      slug: "salah-complete-beginners-guide",
      category: "Salah & Purification",
      badge: "Practical Guide",
      icon: "🕌",
      title: "Salah: A Complete Beginner's Learning Guide",
      desc: "Learn how to perform the five daily Islamic prayers step-by-step. Includes Arabic recitations with Tashkeel, English meanings, physical postures, school differences, and common FAQs.",
      words: "2,450",
      readingTime: "14 min",
      topics: ["5 Daily Prayers", "Step-by-Step Rakat", "Arabic Recitation", "Madhhab Differences", "Khushu'"]
    },
    {
      slug: "wudu-ghusl-tayammum-guide",
      category: "Salah & Purification",
      badge: "Purification Fiqh",
      icon: "💧",
      title: "Wudu, Ghusl and Tayammum: A Practical Study Guide",
      desc: "Complete practical guide to Taharah in Islam. Step-by-step instructions for minor ablution (Wudu), major bath (Ghusl), and dry ablution (Tayammum) with Quranic proofs.",
      words: "2,380",
      readingTime: "13 min",
      topics: ["Surah Ma'idah 5:6", "Ghusl Method", "Footwear Wiping", "Tayammum", "Waswasah"]
    },
    {
      slug: "hadith-and-sunnah-authenticity",
      category: "Hadith & Sunnah",
      badge: "Hadith Methodology",
      icon: "📜",
      title: "Hadith and Sunnah: Collections, Numbering Systems & Authenticity",
      desc: "An authoritative guide to Mustalah al-Hadith. Learn the difference between Sunnah and Hadith, Isnad and Matn, authenticity grades, the Kutub al-Sittah, and reference numbering.",
      words: "2,320",
      readingTime: "13 min",
      topics: ["Isnad System", "5 Sahih Criteria", "Kutub al-Sittah", "Darussalam Numbering", "Da'if vs Mawdu'"]
    },
    {
      slug: "daily-adhkar-and-supplications",
      category: "Duas & Adhkar",
      badge: "Spiritual Practice",
      icon: "📿",
      title: "Daily Adhkar and Supplications: A Source-Based Guide",
      desc: "A verified guide to daily Islamic remembrance. Features authentic morning, evening, post-prayer, and bedtime Adhkar with vocalized Arabic, transliteration, and canonical references.",
      words: "2,420",
      readingTime: "13 min",
      topics: ["Sayyid al-Istighfar", "Morning & Evening", "Post-Salah 33s", "Bedtime Shield", "Authentic Chains"]
    },
    {
      slug: "zakat-educational-calculation-guide",
      category: "Worship & Fiqh",
      badge: "Wealth Purification",
      icon: "💰",
      title: "Zakat: A Detailed Educational and Calculation Guide",
      desc: "An in-depth guide to Zakat. Covers Nisab thresholds (Gold & Silver standards), eligible wealth categories, deduction of liabilities, the 8 Quranic recipient classes, and formulas.",
      words: "2,420",
      readingTime: "13 min",
      topics: ["Gold vs Silver Nisab", "Eligible Wealth", "Debt Deductions", "8 Quranic Categories", "2.5% Formula"]
    }
  ];

  return `<!DOCTYPE html>
<html lang="en" dir="ltr" data-theme="light">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Islamic Educational Articles & Comprehensive Knowledge Library — NoorDeen</title>
  <meta name="description" content="Explore NoorDeen's library of in-depth, source-verified Islamic educational articles, beginner guides, and scholarly treatises across Aqeedah, Quran, Hadith, Salah, and Zakat.">
  <link rel="stylesheet" href="../css/main.css">
  <link rel="manifest" href="../manifest.json">
  <meta name="theme-color" content="#0F5132">
  <link rel="canonical" href="https://jjjffdfde.github.io/NoorDeen/articles/">

  <!-- Open Graph -->
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="NoorDeen Islamic Knowledge Library">
  <meta property="og:url" content="https://jjjffdfde.github.io/NoorDeen/articles/">
  <meta property="og:title" content="Islamic Educational Articles & Knowledge Library — NoorDeen">
  <meta property="og:description" content="Authentic, detailed Islamic educational treatises and practical guides synthesized from classical sources.">
  <meta property="og:image" content="https://jjjffdfde.github.io/NoorDeen/icons/icon-512.svg">
  <meta property="og:locale" content="en_US">

  <!-- Twitter Cards -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Islamic Educational Articles — NoorDeen">
  <meta name="twitter:description" content="Comprehensive, source-verified Islamic learning resources and master roadmap.">
  <meta name="twitter:image" content="https://jjjffdfde.github.io/NoorDeen/icons/icon-512.svg">

  <!-- Breadcrumbs Schema -->
  <script type="application/ld+json">
  {
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
      }
    ]
  }
  </script>
</head>
<body>

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
  <div style="background: radial-gradient(circle at 50% 30%, #0F5132 0%, #073320 100%); color: #FFFFFF; padding: 56px 0 48px; text-align: center; border-bottom: 3px solid var(--color-gold);">
    <div class="container">
      <div style="display: inline-block; padding: 4px 16px; background: rgba(255,255,255,0.12); border-radius: 20px; font-size: 0.85rem; font-weight: 700; color: var(--color-gold); margin-bottom: 14px;">
        مَكْتَبَةُ الْمَعْرِفَةِ الْإِسْلَامِيَّةِ — ISLAMIC EDUCATIONAL LIBRARY
      </div>
      <h1 style="font-size: 2.5rem; font-weight: 800; max-width: 900px; margin: 0 auto 14px; line-height: 1.25;">
        Comprehensive Islamic Educational Articles & Guides
      </h1>
      <p style="color: #D1D5DB; max-width: 760px; margin: 0 auto 24px; font-size: 1.08rem; line-height: 1.6;">
        Explore rigorous, source-verified educational treatises and practical guides synthesized from primary classical Sunni sources. Designed for beginners and lifelong students seeking authentic understanding without polemics.
      </p>

      <!-- Search & Filter Controls -->
      <div style="max-width: 600px; margin: 0 auto;">
        <input type="text" id="article-search-input" placeholder="🔍 Search articles, topics, or terms..." 
               style="width: 100%; padding: 14px 20px; font-size: 1rem; border-radius: 30px; border: 2px solid var(--color-gold); background: rgba(255,255,255,0.95); color: #111; outline: none; box-shadow: 0 4px 16px rgba(0,0,0,0.2);">
      </div>
    </div>
  </div>

  <!-- Main Content Container -->
  <main class="container" style="padding-top: 48px; padding-bottom: 80px;">

    <!-- Section: Batch 1 Published Flagship Treatises -->
    <div style="display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 12px; margin-bottom: 28px; border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 14px;">
      <div>
        <div style="font-size: 0.82rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase; letter-spacing: 0.5px;">
          Batch 1: Published & Verified
        </div>
        <h2 style="font-size: 1.85rem; color: var(--color-primary); margin: 4px 0 0 0;">
          10 Comprehensive Educational Treatises
        </h2>
      </div>
      <div style="font-size: 0.9rem; color: var(--color-text-muted);">
        Over 23,500 words of authentic classical scholarship
      </div>
    </div>

    <!-- Articles Grid -->
    <div class="articles-grid" id="published-articles-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-bottom: 64px;">
      ${publishedArticles.map((art, idx) => `
        <article class="card article-summary-card" data-category="${art.category}" style="display: flex; flex-direction: column; height: 100%; border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; transition: transform 0.2s ease, box-shadow 0.2s ease; background: var(--color-card);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 1.6rem;">${art.icon}</span>
            <span style="font-size: 0.75rem; font-weight: 700; color: var(--color-gold); background: rgba(181, 139, 80, 0.12); padding: 4px 10px; border-radius: 12px; border: 1px solid rgba(181, 139, 80, 0.3);">
              ${art.badge}
            </span>
          </div>

          <div style="font-size: 0.8rem; font-weight: 700; color: var(--color-primary); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;">
            ${art.category} • #${idx + 1}
          </div>

          <h3 style="font-size: 1.25rem; color: var(--color-text-main); margin: 0 0 10px 0; line-height: 1.35;">
            <a href="${art.slug}.html" style="color: inherit; text-decoration: none;">
              ${art.title}
            </a>
          </h3>

          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0 0 16px 0; flex-grow: 1;">
            ${art.desc}
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 16px;">
            ${art.topics.map(t => `<span style="font-size: 0.75rem; background: var(--color-surface); padding: 3px 8px; border-radius: 6px; color: var(--color-text-muted);">${t}</span>`).join('')}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 14px; border-top: 1px solid var(--color-border-subtle); font-size: 0.85rem;">
            <span style="color: var(--color-text-muted);">⏱️ ${art.readingTime} (~${art.words} words)</span>
            <a href="${art.slug}.html" style="color: var(--color-primary); font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 4px;">
              Read Guide →
            </a>
          </div>
        </article>
      `).join('')}
    </div>

    <!-- Section: 100-Topic Master Educational Roadmap -->
    <div style="background: var(--color-surface); border: 1.5px solid var(--color-border); border-radius: 16px; padding: 36px 30px; margin-bottom: 48px;">
      <div style="text-align: center; max-width: 800px; margin: 0 auto 32px;">
        <div style="display: inline-block; padding: 4px 14px; background: rgba(15, 81, 50, 0.1); border-radius: 20px; font-size: 0.82rem; font-weight: 700; color: var(--color-primary); margin-bottom: 10px;">
          ROADMAP & SYSTEMATIC SYLLABUS
        </div>
        <h2 style="font-size: 2rem; color: var(--color-primary); margin: 0 0 12px 0;">
          The 100-Topic Master Islamic Educational Library
        </h2>
        <p style="color: var(--color-text-muted); font-size: 1rem; line-height: 1.6; margin: 0;">
          To ensure NoorDeen matures into an international-quality Islamic knowledge repository, we have structured a systematic curriculum of 100 distinct educational topics across 17 essential disciplines. 10 flagship articles are published live, and the remaining 90 topics are scheduled for phased expansion.
        </p>
      </div>

      <!-- Roadmap Categories Accordion -->
      <div class="roadmap-accordion-wrapper" style="display: flex; flex-direction: column; gap: 14px;">

        <!-- 1. Quran & Quranic Sciences -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);" open>
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>📖 1. Quran & Quranic Sciences (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">2 Published • 6 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>1. How to Read and Understand the Quran</strong> — <a href="how-to-read-and-understand-quran.html" style="color: var(--color-primary);">Read Published Treatise</a> (Surah architecture, Tilawah vs Tadabbur, 15-min daily routine)</div>
            <div>✅ <strong>2. Quran Translation vs Tafsir: Understanding the Difference</strong> — <a href="quran-translation-vs-tafsir.html" style="color: var(--color-primary);">Read Published Treatise</a> (I'jaz, untranslatability, classical commentaries)</div>
            <div style="color: var(--color-text-muted);">🟡 3. The Science of Asbab al-Nuzul: Historical Occasions of Revelation</div>
            <div style="color: var(--color-text-muted);">🟡 4. The Rules of Tajweed: Reciting the Quran with Phonetic Precision</div>
            <div style="color: var(--color-text-muted);">🟡 5. Makki and Madani Surahs: Characteristics, Themes, and Milestones</div>
            <div style="color: var(--color-text-muted);">🟡 6. The Preservation and Compilation of the Quran: From Oral Revelation to Uthmanic Codex</div>
            <div style="color: var(--color-text-muted);">🟡 7. The Inimitability of the Quran (I'jaz al-Quran): Linguistic and Rhetorical Wonders</div>
            <div style="color: var(--color-text-muted);">🟡 8. Understanding Ayatul Kursi: The Greatest Verse in the Quran</div>
          </div>
        </details>

        <!-- 2. Hadith & Sunnah -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>📜 2. Hadith & Sunnah (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">1 Published • 7 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>9. Hadith and Sunnah: Collections, Numbering & Authenticity</strong> — <a href="hadith-and-sunnah-authenticity.html" style="color: var(--color-primary);">Read Published Treatise</a> (Isnad, Kutub al-Sittah, 5 Sahih criteria)</div>
            <div style="color: var(--color-text-muted);">🟡 10. The Life and Methodology of Imam al-Bukhari</div>
            <div style="color: var(--color-text-muted);">🟡 11. Understanding the 40 Hadith of Imam al-Nawawi: Essential Principles of Islam</div>
            <div style="color: var(--color-text-muted);">🟡 12. The Role of Sunnah in Islamic Jurisprudence: Clarifying the Quran</div>
            <div style="color: var(--color-text-muted);">🟡 13. How to Identify Weak and Fabricated Hadiths: A Guide for Non-Scholars</div>
            <div style="color: var(--color-text-muted);">🟡 14. The Sunnah of the Prophet ﷺ in Everyday Conduct: Eating, Sleeping, and Speech</div>
            <div style="color: var(--color-text-muted);">🟡 15. The Science of Narrator Criticism ('Ilm al-Jarh wat-Ta'dil)</div>
            <div style="color: var(--color-text-muted);">🟡 16. The Muwatta of Imam Malik: The Earliest Surviving Legal Hadith Collection</div>
          </div>
        </details>

        <!-- 3. Aqeedah & Foundational Beliefs -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>☝️ 3. Aqeedah & Foundational Beliefs (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">1 Published • 7 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>17. Tawhid and the Shahadah: Meaning and Significance</strong> — <a href="tawhid-and-the-shahadah.html" style="color: var(--color-primary);">Read Published Treatise</a> (Rububiyyah, Uluhiyyah, 7 Shurut, Shirk)</div>
            <div style="color: var(--color-text-muted);">🟡 18. Belief in the Angels (Mala'ikah): Roles, Names, and Spiritual Lessons</div>
            <div style="color: var(--color-text-muted);">🟡 19. The Divine Books of Revelation: Tawrat, Zabur, Injeel, and the Quran</div>
            <div style="color: var(--color-text-muted);">🟡 20. The Prophethood (Nubuwwah): Qualities and Necessity of Divine Messengers</div>
            <div style="color: var(--color-text-muted);">🟡 21. The Day of Resurrection (Yawm al-Qiyamah): Minor and Major Signs</div>
            <div style="color: var(--color-text-muted);">🟡 22. Understanding Divine Decree and Destiny (Al-Qadr): Free Will and Allah's Knowledge</div>
            <div style="color: var(--color-text-muted);">🟡 23. The Beautiful Names of Allah (Asma' Allah al-Husna): Contemplation and Invocation</div>
            <div style="color: var(--color-text-muted);">🟡 24. Protecting Faith: Understanding Hypocrisy (Nifaq), Doubts, and Spiritual Fortification</div>
          </div>
        </details>

        <!-- 4. Salah & Purification -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🕌 4. Salah & Purification (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">2 Published • 6 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>25. Salah: A Complete Beginner's Learning Guide</strong> — <a href="salah-complete-beginners-guide.html" style="color: var(--color-primary);">Read Published Treatise</a> (Step-by-step postures, recitations, Khushu')</div>
            <div>✅ <strong>26. Wudu, Ghusl and Tayammum: A Practical Study Guide</strong> — <a href="wudu-ghusl-tayammum-guide.html" style="color: var(--color-primary);">Read Published Treatise</a> (Quranic Fara'id, nullifiers, footwear wiping)</div>
            <div style="color: var(--color-text-muted);">🟡 27. The Spiritual Secrets of Prayer: Achieving Khushu' (Humility and Focus)</div>
            <div style="color: var(--color-text-muted);">🟡 28. The Friday Prayer (Salat al-Jumu'ah): Virtues, Conditions, and Etiquette</div>
            <div style="color: var(--color-text-muted);">🟡 29. The Night Prayer (Tahajjud & Qiyam al-Layl): Spiritual Nobility of the Believer</div>
            <div style="color: var(--color-text-muted);">🟡 30. Voluntary Sunnah Prayers (Rawatib, Duha, and Witr): Merits and Scheduling</div>
            <div style="color: var(--color-text-muted);">🟡 31. The Funeral Prayer (Salat al-Janazah): Rules, Duas, and Bereavement Etiquette (See <a href="../janazah-guide.html">Janazah Guide</a>)</div>
            <div style="color: var(--color-text-muted);">🟡 32. Catching Missed Prayers (Qada'): Rules for Oversleeping or Forgetting</div>
          </div>
        </details>

        <!-- 5. Zakat, Fasting, Hajj & Umrah -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>💰 5. Zakat, Fasting, Hajj & Umrah (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">2 Published • 6 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>33. Zakat: A Detailed Educational and Calculation Guide</strong> — <a href="zakat-educational-calculation-guide.html" style="color: var(--color-primary);">Read Published Treatise</a> (Nisab, wealth categories, 8 recipients)</div>
            <div>✅ <strong>34. The Five Pillars of Islam: A Detailed Learning Guide</strong> — <a href="five-pillars-of-islam.html" style="color: var(--color-primary);">Read Published Treatise</a> (Architectural harmony, scriptural proofs)</div>
            <div style="color: var(--color-text-muted);">🟡 35. The Spiritual and Physical Objectives of Fasting (Sawm): Cultivating Taqwa</div>
            <div style="color: var(--color-text-muted);">🟡 36. Rules and Exemptions of Ramadan Fasting: Travel, Illness, Pregnancy, and Fidya</div>
            <div style="color: var(--color-text-muted);">🟡 37. The Virtues of the Last Ten Nights of Ramadan & Laylat al-Qadr</div>
            <div style="color: var(--color-text-muted);">🟡 38. Zakat al-Fitr: Calculation, Timing, Recipients, and Wisdom</div>
            <div style="color: var(--color-text-muted);">🟡 39. Step-by-Step Umrah Guide: Ihram, Tawaf, Sa'i, and Halq</div>
            <div style="color: var(--color-text-muted);">🟡 40. The Journey of a Lifetime: A Comprehensive Guide to the Rites of Hajj</div>
          </div>
        </details>

        <!-- 6. Daily Duas & Sacred Adhkar -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🤲 6. Daily Duas & Sacred Adhkar (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">1 Published • 7 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>41. Daily Adhkar and Supplications: A Source-Based Guide</strong> — <a href="daily-adhkar-and-supplications.html" style="color: var(--color-primary);">Read Published Treatise</a> (Morning, evening, post-prayer, bedtime)</div>
            <div style="color: var(--color-text-muted);">🟡 42. Morning and Evening Adhkar: Fortifying the Soul and Mind</div>
            <div style="color: var(--color-text-muted);">🟡 43. Supplications for Anxiety, Stress, and Grief from the Sunnah</div>
            <div style="color: var(--color-text-muted);">🟡 44. The Etiquette of Dua: Why Some Supplications are Answered and Others Delayed</div>
            <div style="color: var(--color-text-muted);">🟡 45. Istikharah: Seeking Divine Guidance in Important Life Decisions</div>
            <div style="color: var(--color-text-muted);">🟡 46. The Virtues of Sending Blessings upon the Prophet ﷺ (Salawat)</div>
            <div style="color: var(--color-text-muted);">🟡 47. Quranic Duas: The Prayers of the Prophets in the Holy Quran</div>
            <div style="color: var(--color-text-muted);">🟡 48. Ruqyah according to the Sunnah: Spiritual Healing through Quran and Authentic Adhkar</div>
          </div>
        </details>

        <!-- 7. New-Muslim Education -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🌱 7. New-Muslim Education (4 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-gold);">1 Published • 3 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>✅ <strong>49. A Complete Beginner's Guide to Islam</strong> — <a href="beginners-guide-to-islam.html" style="color: var(--color-primary);">Read Published Treatise</a> (Foundational beliefs, worship, learning pathway)</div>
            <div style="color: var(--color-text-muted);">🟡 50. Navigating Non-Muslim Family Relationships after Embracing Islam</div>
            <div style="color: var(--color-text-muted);">🟡 51. First Ramadan as a Muslim: Practical Tips and Managing Energy</div>
            <div style="color: var(--color-text-muted);">🟡 52. Dealing with Doubts and Spiritual Fluctuations (Iman Ups and Downs)</div>
          </div>
        </details>

        <!-- 8. Prophetic Seerah (8 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🌹 8. Prophetic Seerah (8 Topics — Integrated in 25-Chapter Library)</span>
            <span style="font-size: 0.85rem; color: var(--color-primary);">See Full Seerah Library</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>📖 The full 25 master chapters are published in our <a href="../seerah.html" style="color: var(--color-primary); font-weight: 700;">Complete Seerah al-Nabawiyyah Library</a> (25,000+ words). Specific monographs planned for expansion:</div>
            <div style="color: var(--color-text-muted);">🟡 53. The Pre-Islamic World (Jahiliyyah) and the Birth of Prophet Muhammad ﷺ</div>
            <div style="color: var(--color-text-muted);">🟡 54. The Meccan Phase: Persecution, Patience, and the Early Believers</div>
            <div style="color: var(--color-text-muted);">🟡 55. The Miraculous Night Journey and Ascension (Al-Isra' wal-Mi'raj)</div>
            <div style="color: var(--color-text-muted);">🟡 56. The Hijrah to Madinah: Strategic Planning, Divine Support, and New Society</div>
            <div style="color: var(--color-text-muted);">🟡 57. The Constitution of Madinah: Early Pluralism and Social Contract</div>
            <div style="color: var(--color-text-muted);">🟡 58. The Major Battles in Islam: Badr, Uhud, and the Trench (Khandaq)</div>
            <div style="color: var(--color-text-muted);">🟡 59. The Treaty of Hudaybiyyah and the Peaceful Conquest of Makkah</div>
            <div style="color: var(--color-text-muted);">🟡 60. The Farewell Sermon (Khutbat al-Wada'): Universal Human Rights in Islam</div>
          </div>
        </details>

        <!-- 9. Stories of the Prophets (8 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>📜 9. Stories of the Prophets (8 Topics — Integrated in 30-Story Library)</span>
            <span style="font-size: 0.85rem; color: var(--color-primary);">See Prophets Library</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>📖 All 30 Quranic prophets are published in our <a href="../prophets.html" style="color: var(--color-primary); font-weight: 700;">Stories of the Prophets Portal</a>. Specific in-depth monographs planned:</div>
            <div style="color: var(--color-text-muted);">🟡 61. Prophet Adam (AS): The Creation of Humanity and Divine Repentance</div>
            <div style="color: var(--color-text-muted);">🟡 62. Prophet Nuh (AS): Nine Centuries of Patience and the Great Ark</div>
            <div style="color: var(--color-text-muted);">🟡 63. Prophet Ibrahim (AS): The Friend of Allah and Father of Prophets</div>
            <div style="color: var(--color-text-muted);">🟡 64. Prophet Yusuf (AS): The Best of Stories — From the Well to the Throne</div>
            <div style="color: var(--color-text-muted);">🟡 65. Prophet Musa (AS): Confronting Pharaoh and Leading Bani Israel</div>
            <div style="color: var(--color-text-muted);">🟡 66. Prophet Dawud and Sulayman (AS): Kingdom, Justice, and Gratitude</div>
            <div style="color: var(--color-text-muted);">🟡 67. Prophet Yunus (AS): The Darkness of the Whale and the Power of Repentance</div>
            <div style="color: var(--color-text-muted);">🟡 68. Prophet Isa (AS): The Miraculous Birth, Message, and Islamic Perspective</div>
          </div>
        </details>

        <!-- 10. Lives of the Noble Sahaba (8 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>👥 10. Lives of the Noble Sahaba (8 Topics — Integrated in 52 Monographs)</span>
            <span style="font-size: 0.85rem; color: var(--color-primary);">See Sahaba Library</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>📖 52 exhaustive monographs (33,500+ words) are live in our <a href="../sahaba.html" style="color: var(--color-primary); font-weight: 700;">Lives of the Sahaba Library</a>. Highlights include:</div>
            <div style="color: var(--color-text-muted);">🟡 69. Abu Bakr as-Siddiq (RA): Loyalty, Steadfastness, and the First Caliph</div>
            <div style="color: var(--color-text-muted);">🟡 70. Umar ibn al-Khattab (RA): Justice, Strength, and Administrative Genius</div>
            <div style="color: var(--color-text-muted);">🟡 71. Uthman ibn Affan (RA): Modesty, Generosity, and Compiling the Quran</div>
            <div style="color: var(--color-text-muted);">🟡 72. Ali ibn Abi Talib (RA): Courage, Wisdom, and Spiritual Depth</div>
            <div style="color: var(--color-text-muted);">🟡 73. Khadijah bint Khuwaylid (RA): The Pillar of Prophetic Support</div>
            <div style="color: var(--color-text-muted);">🟡 74. Aisha bint Abi Bakr (RA): The Scholar of Madinah and Teacher of Sahaba</div>
            <div style="color: var(--color-text-muted);">🟡 75. Bilal ibn Rabah (RA): Unshakable Faith and the Voice of the Adhan</div>
            <div style="color: var(--color-text-muted);">🟡 76. Salman al-Farsi (RA): The Quest for Truth and the Trench Strategy</div>
          </div>
        </details>

        <!-- 11. Islamic History & Civilization (8 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🏛️ 11. Islamic History & Civilization (8 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-primary);">See History Portal</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div>📖 Explore 12 epochs and 66 milestones in our <a href="../history.html" style="color: var(--color-primary); font-weight: 700;">Islamic History Library</a>. Upcoming thematic treatises:</div>
            <div style="color: var(--color-text-muted);">🟡 77. The Golden Era of the Rightly Guided Caliphs (Al-Khulafa' al-Rashidun)</div>
            <div style="color: var(--color-text-muted);">🟡 78. The Umayyad Caliphate: Expansion from Andalusia to the Indus River</div>
            <div style="color: var(--color-text-muted);">🟡 79. The Abbasid Golden Age: House of Wisdom and Scientific Flourishing</div>
            <div style="color: var(--color-text-muted);">🟡 80. Islamic Spain (Al-Andalus): 800 Years of Knowledge, Architecture, and Coexistence</div>
            <div style="color: var(--color-text-muted);">🟡 81. The Ottoman Empire: Governance, Waqf System, and Architectural Mastery</div>
            <div style="color: var(--color-text-muted);">🟡 82. Islamic Contributions to Medicine, Optics, Mathematics, and Astronomy</div>
            <div style="color: var(--color-text-muted);">🟡 83. The Waqf Institution: How Endowments Funded Free Healthcare and Education</div>
            <div style="color: var(--color-text-muted);">🟡 84. The Spread of Islam to Southeast Asia and Sub-Saharan Africa through Trade</div>
          </div>
        </details>

        <!-- 12. Character, Manners & Ethics (6 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🤝 12. Character, Manners & Ethics (6 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-text-muted);">6 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div style="color: var(--color-text-muted);">🟡 85. The Concept of Akhlaq: Refining Character as the Pinnacle of Faith</div>
            <div style="color: var(--color-text-muted);">🟡 86. Guarding the Tongue: The Dangers of Backbiting (Gheebah) and Slander (Buhtan)</div>
            <div style="color: var(--color-text-muted);">🟡 87. The Ethics of Disagreement (Adab al-Ikhtilaf): Respecting Scholarly Differences</div>
            <div style="color: var(--color-text-muted);">🟡 88. Humility vs Pride: Overcoming Kibr in Islam</div>
            <div style="color: var(--color-text-muted);">🟡 89. Truthfulness and Fulfilling Promises: Foundational Islamic Ethics</div>
            <div style="color: var(--color-text-muted);">🟡 90. Generosity and Selflessness (Ithar): Overcoming Greed</div>
          </div>
        </details>

        <!-- 13. Family & Everyday Life (6 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🏡 13. Family & Everyday Life (6 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-text-muted);">6 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div style="color: var(--color-text-muted);">🟡 91. Honoring Parents (Birr al-Walidayn): A Highest Good Deed</div>
            <div style="color: var(--color-text-muted);">🟡 92. Marriage in Islam: Mutual Love, Mercy, Rights, and Responsibilities</div>
            <div style="color: var(--color-text-muted);">🟡 93. Raising Righteous Children: Islamic Parenting in the Modern World</div>
            <div style="color: var(--color-text-muted);">🟡 94. Ties of Kinship (Silat al-Rahim): Benefits and Repercussions of Severing</div>
            <div style="color: var(--color-text-muted);">🟡 95. Halal and Tayyib: Islamic Dietary Principles and Mindful Consumption</div>
            <div style="color: var(--color-text-muted);">🟡 96. Islamic Financial Ethics: Avoiding Riba (Usury), Gharar, and Fraud</div>
          </div>
        </details>

        <!-- 14. Sacred Seasons & Specialized Topics (4 Topics) -->
        <details class="card" style="padding: 16px 20px; border-radius: 10px; background: var(--color-card);">
          <summary style="font-weight: 700; color: var(--color-primary); font-size: 1.1rem; cursor: pointer; display: flex; justify-content: space-between; align-items: center;">
            <span>🌙 14. Sacred Seasons, Terminology & Practical Guides (4 Topics)</span>
            <span style="font-size: 0.85rem; color: var(--color-text-muted);">4 Planned</span>
          </summary>
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid var(--color-border-subtle); line-height: 1.9; font-size: 0.92rem;">
            <div style="color: var(--color-text-muted);">🟡 97. The Sacred Months in Islam: Rajab, Dhu al-Qi'dah, Dhu al-Hijjah, and Muharram</div>
            <div style="color: var(--color-text-muted);">🟡 98. The Day of Ashura: History, Virtues, and Fasting</div>
            <div style="color: var(--color-text-muted);">🟡 99. The First Ten Days of Dhu al-Hijjah: The Greatest Days of the Year</div>
            <div style="color: var(--color-text-muted);">🟡 100. Celebrating Eid in Islam: Sunnahs, Etiquette, and Community Joy (See <a href="../eid-guide.html">Eid Guide</a>)</div>
          </div>
        </details>

      </div>
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

  <!-- Search Filter Script -->
  <script>
    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('article-search-input');
      const cards = document.querySelectorAll('.article-summary-card');

      if (searchInput && cards.length) {
        searchInput.addEventListener('input', (e) => {
          const q = e.target.value.toLowerCase().trim();
          cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(q)) {
              card.style.display = 'flex';
            } else {
              card.style.display = 'none';
            }
          });
        });
      }
    });
  </script>

  <!-- Scripts -->
  <script src="../js/config.js"></script>
  <script src="../js/i18n.js"></script>
  <script src="../js/search.js"></script>
  <script src="../js/app.js"></script>
</body>
</html>
`;
}

module.exports = { getArticleIndexHtml };
