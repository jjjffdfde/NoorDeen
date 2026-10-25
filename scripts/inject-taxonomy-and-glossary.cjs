const fs = require('fs');
const glossaryTerms = require('./generate-glossary-data.cjs');

console.log(`Loaded ${glossaryTerms.length} glossary terms.`);

// 1. Build 20-Pillars Taxonomy Markup
const TWENTY_PILLARS = [
  {
    num: "1",
    title: "Quran & Quran Learning",
    icon: "📖",
    desc: "Complete 114 Surahs, 6,236 Ayahs in Tanzil Uthmani script with Hafs transmission and recitations.",
    link: "quran.html",
    tag: "Primary Scripture"
  },
  {
    num: "2",
    title: "Tafsir & Quranic Themes",
    icon: "🔍",
    desc: "Thematic revelation contexts, Asbab al-Nuzul, and classical exegesis of Ibn Kathir.",
    link: "quran.html",
    tag: "Exegesis"
  },
  {
    num: "3",
    title: "Hadith & Prophetic Sunnah",
    icon: "📜",
    desc: "Over 100 authenticated traditions from Kutub al-Sittah with Fiqh al-Hadith and scholarly gradings.",
    link: "hadith.html",
    tag: "Kutub al-Sittah"
  },
  {
    num: "4",
    title: "Daily Duas & Masnoon Adhkar",
    icon: "🤲",
    desc: "102 verified supplications across 17 life domains from Hisnul Muslim with counters and audio.",
    link: "duas.html",
    tag: "Adhkar & Dua"
  },
  {
    num: "5",
    title: "Aqeedah & Six Kalimas",
    icon: "🏛️",
    desc: "The Six Kalimas, three categories of Tawheed, Asma wa Sifat, and core tenets of Islamic faith.",
    link: "kalimas.html",
    tag: "Foundations"
  },
  {
    num: "6",
    title: "Salah & Purification (Taharah)",
    icon: "🕌",
    desc: "Step-by-step illustrated guides for Wudu, Ghusl, Tayammum, and 5 daily prayers with Arabic recitations.",
    link: "salah-guide.html",
    tag: "Daily Worship"
  },
  {
    num: "7",
    title: "Zakat, Fasting & Hajj",
    icon: "⚖️",
    desc: "Fiqh of the Five Pillars, dual Nisab calculation, rules of Ramadan fasting, and pilgrimage rites.",
    link: "pillars.html",
    tag: "Pillars of Islam"
  },
  {
    num: "8",
    title: "Prophetic Seerah (Biography)",
    icon: "🌹",
    desc: "25 chronological monographs tracing the blessed life, character, and milestones of Prophet Muhammad ﷺ.",
    link: "seerah.html",
    tag: "Biography"
  },
  {
    num: "9",
    title: "Stories of the Prophets",
    icon: "🌟",
    desc: "30 authentic prophetic narratives from Adam (AS) to Isa (AS) from classical Qisas al-Anbiya.",
    link: "prophets.html",
    tag: "Qisas al-Anbiya"
  },
  {
    num: "10",
    title: "Lives of the Noble Sahaba",
    icon: "👥",
    desc: "52 comprehensive biographical monographs covering the Caliphs, Asharah Mubasharah, and Mothers of the Believers.",
    link: "sahaba.html",
    tag: "Companions"
  },
  {
    num: "11",
    title: "Islamic History & Civilizations",
    icon: "🏛️",
    desc: "12 historical epochs from the Rightly Guided Caliphate through Golden Age sciences to modern times.",
    link: "history.html",
    tag: "Civilizations"
  },
  {
    num: "12",
    title: "Islamic Manners & Character (Akhlaq)",
    icon: "💎",
    desc: "Tazkiyah al-Nafs, modesty (Haya'), truthfulness (Sidq), forbearance, and eliminating spiritual vices.",
    link: "hadith.html?topic=Character",
    tag: "Ethics"
  },
  {
    num: "13",
    title: "Family, Parenting & Society",
    icon: "🏡",
    desc: "Marital harmony, rights of parents and children, upholding kinship (Silat ar-Rahim), and social solidarity.",
    link: "hadith.html?topic=Family",
    tag: "Community"
  },
  {
    num: "14",
    title: "New Muslim Study Pathways",
    icon: "🧭",
    desc: "Progressive beginner curriculum tracks covering faith, purification, daily prayer, and the Quran.",
    link: "#guided-learning",
    tag: "Foundations"
  },
  {
    num: "15",
    title: "Seasonal & Funeral Rites",
    icon: "🌙",
    desc: "Procedural guides for Eid al-Fitr, Eid al-Adha, Janazah funeral prayers, and burial etiquettes.",
    link: "janazah-guide.html",
    tag: "Rites of Passage"
  },
  {
    num: "16",
    title: "Islamic Glossary & Terminology",
    icon: "📚",
    desc: "135 foundational Arabic terms in theology, jurisprudence, Hadith, and spiritual purification.",
    link: "#islamic-glossary",
    tag: "Terminology"
  },
  {
    num: "17",
    title: "Astronomical Solar Prayer Calculator",
    icon: "☀️",
    desc: "UISK solar equation engine with separated Istiwa' prohibited zenith window and automated Qibla sync.",
    link: "prayer-times.html",
    tag: "Utilities"
  },
  {
    num: "18",
    title: "Dual-Nisab Zakat Calculation Engine",
    icon: "🪙",
    desc: "Hanafi (612.36g/87.48g) vs OIC Metric (595g/85g) thresholds across 13 international currencies.",
    link: "zakat-calculator.html",
    tag: "Calculators"
  },
  {
    num: "19",
    title: "Lunar Hijri Calendar Converter",
    icon: "📅",
    desc: "Umm al-Qura astronomical algorithm with Islamic holidays schedule and manual sighting offset.",
    link: "calendar.html",
    tag: "Calendar"
  },
  {
    num: "20",
    title: "Digital Tasbih & Spiritual Bookmarks",
    icon: "📿",
    desc: "Interactive Dhikr counter with haptic feedback, audio toggles, and privacy-first local bookmarks.",
    link: "tasbih.html",
    tag: "Daily Tools"
  }
];

const pillarsHtml = `
    <!-- SECTION: THE 20-PILLAR INTERNATIONAL ISLAMIC KNOWLEDGE TAXONOMY -->
    <section id="knowledge-taxonomy" style="margin-bottom: 48px;">
      <div class="section-header" style="margin-bottom: 20px;">
        <div>
          <div style="display: inline-block; padding: 4px 12px; background: rgba(15,81,50,0.1); border-radius: 12px; font-size: 0.78rem; font-weight: 800; color: var(--color-primary); text-transform: uppercase; margin-bottom: 6px;">
            Core Educational Framework
          </div>
          <h2 class="section-title" style="font-size: 1.45rem; color: var(--color-primary); font-family: var(--font-heading);">
            <span>🏛️</span> The 20-Pillar International Knowledge Taxonomy
          </h2>
          <p class="section-subtitle" style="font-size: 0.88rem; color: var(--color-text-muted);">
            A structured, comprehensive Islamic educational taxonomy interconnecting scripture, jurisprudence, history, and spiritual practice
          </p>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        ${TWENTY_PILLARS.map(p => `
        <a href="${p.link}" class="card knowledge-taxonomy-card" style="display: flex; flex-direction: column; justify-content: space-between; padding: 18px; border-left: 4px solid var(--color-primary); text-decoration: none; color: inherit; transition: transform var(--transition-fast), box-shadow var(--transition-fast);">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 1.4rem;">${p.icon}</span>
              <span style="font-size: 0.72rem; font-weight: 800; background: var(--color-surface); padding: 3px 8px; border-radius: 4px; border: 1px solid var(--color-border); color: var(--color-gold-dark); text-transform: uppercase;">${p.tag}</span>
            </div>
            <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--color-primary); margin: 0 0 6px 0;">${p.num}. ${p.title}</h3>
            <p style="font-size: 0.85rem; line-height: 1.6; color: var(--color-text-muted); margin: 0;">${p.desc}</p>
          </div>
          <div style="margin-top: 12px; padding-top: 8px; border-top: 1px dashed var(--color-border-subtle); display: flex; justify-content: space-between; font-size: 0.82rem; font-weight: 700; color: var(--color-primary);">
            <span>Explore Pillar</span>
            <span>➔</span>
          </div>
        </a>`).join('')}
      </div>
    </section>
`;

// 2. Build Islamic Glossary Component
const glossaryHtml = `
    <!-- SECTION: ENCYCLOPEDIC ISLAMIC GLOSSARY (135 TERMS) -->
    <section id="islamic-glossary" style="margin-bottom: 48px;">
      <div class="section-header" style="margin-bottom: 20px;">
        <div>
          <div style="display: inline-block; padding: 4px 12px; background: rgba(181,139,80,0.15); border-radius: 12px; font-size: 0.78rem; font-weight: 800; color: var(--color-gold-dark); text-transform: uppercase; margin-bottom: 6px;">
            قاموس المصطلحات الإسلامية • Encyclopedic Terminology Hub
          </div>
          <h2 class="section-title" style="font-size: 1.45rem; color: var(--color-primary); font-family: var(--font-heading);">
            <span>📚</span> Interactive Islamic Glossary & Terminology (135 Essential Terms)
          </h2>
          <p class="section-subtitle" style="font-size: 0.88rem; color: var(--color-text-muted);">
            Source-verified definitions, exact Arabic vocalizations, phonetic transliterations, and classical citations across theology, jurisprudence, and character
          </p>
        </div>
      </div>

      <!-- Glossary Controls -->
      <div class="card" style="padding: 16px; margin-bottom: 20px; background: var(--color-card); border: 1px solid var(--color-border);">
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 12px;">
          <input type="text" id="glossary-search-input" placeholder="🔍 Search 135 terms by English, Arabic, transliteration or concept..." class="input-text" style="flex: 1; min-width: 240px; padding: 10px 14px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text-main); font-size: 0.92rem;">
        </div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;" id="glossary-category-pills">
          <button class="btn btn-primary glossary-filter-btn active" data-cat="all" style="padding: 5px 12px; font-size: 0.82rem;">All (135)</button>
          <button class="btn btn-outline glossary-filter-btn" data-cat="creed" style="padding: 5px 12px; font-size: 0.82rem;">Creed & Theology (Aqeedah)</button>
          <button class="btn btn-outline glossary-filter-btn" data-cat="fiqh" style="padding: 5px 12px; font-size: 0.82rem;">Worship & Jurisprudence (Fiqh)</button>
          <button class="btn btn-outline glossary-filter-btn" data-cat="quran" style="padding: 5px 12px; font-size: 0.82rem;">Quranic Sciences ('Ulum al-Quran)</button>
          <button class="btn btn-outline glossary-filter-btn" data-cat="hadith" style="padding: 5px 12px; font-size: 0.82rem;">Hadith Sciences (Mustalah)</button>
          <button class="btn btn-outline glossary-filter-btn" data-cat="character" style="padding: 5px 12px; font-size: 0.82rem;">Ethics & Spirituality (Tazkiyah)</button>
        </div>
      </div>

      <!-- Glossary Terms Container -->
      <div id="glossary-terms-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 16px;">
        ${glossaryTerms.map(t => `
        <div class="card glossary-term-card" data-cat="${t.cat}" data-term="${t.term.toLowerCase()}" data-tr="${t.tr.toLowerCase()}" data-ar="${t.ar}" style="padding: 18px; border-top: 3px solid var(--color-primary); display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
              <div>
                <h3 style="font-size: 1.15rem; font-weight: 700; color: var(--color-primary); margin: 0;">${t.term}</h3>
                <span style="font-size: 0.82rem; font-style: italic; color: var(--color-gold-dark);">${t.tr}</span>
              </div>
              <div class="font-quran" style="font-size: 1.4rem; color: var(--color-primary); text-align: right;" dir="rtl" lang="ar" translate="no">
                ${t.ar}
              </div>
            </div>
            <p style="font-size: 0.88rem; line-height: 1.65; color: var(--color-text-main); margin: 8px 0 12px 0;">
              ${t.def}
            </p>
          </div>
          <div style="border-top: 1px dashed var(--color-border-subtle); padding-top: 8px; font-size: 0.78rem; color: var(--color-text-muted);">
            <strong>Reference:</strong> ${t.ref}
          </div>
        </div>`).join('')}
      </div>
    </section>
`;

// Read index.html
let indexHtml = fs.readFileSync('public/index.html', 'utf8');

// Find insertion point before FAQ section
const faqIdx = indexHtml.indexOf('<span>❓</span> Frequently Asked Questions (FAQ)');
if (faqIdx === -1) throw new Error('Could not find FAQ section in index.html');

// Find the section tag right before faqIdx
const beforeFaq = indexHtml.slice(0, faqIdx);
const sectionTagIdx = beforeFaq.lastIndexOf('<section');
if (sectionTagIdx === -1) throw new Error('Could not find <section tag before FAQ');

// Inject Taxonomy and Glossary
const newIndexHtml = indexHtml.slice(0, sectionTagIdx) + pillarsHtml + '\n' + glossaryHtml + '\n    ' + indexHtml.slice(sectionTagIdx);

// Append client-side search script for glossary right before </body>
const glossaryScript = `
  <script>
    // Islamic Glossary Real-time Search and Category Filter
    (function initGlossary() {
      const searchInput = document.getElementById('glossary-search-input');
      const filterBtns = document.querySelectorAll('.glossary-filter-btn');
      const cards = document.querySelectorAll('.glossary-term-card');

      let currentCat = 'all';

      function filterGlossary() {
        const query = (searchInput ? searchInput.value : '').trim().toLowerCase();
        cards.forEach(card => {
          const cat = card.getAttribute('data-cat');
          const term = card.getAttribute('data-term') || '';
          const tr = card.getAttribute('data-tr') || '';
          const ar = card.getAttribute('data-ar') || '';
          const text = card.textContent.toLowerCase();

          const matchesCat = (currentCat === 'all' || cat === currentCat);
          const matchesQuery = !query || term.includes(query) || tr.includes(query) || ar.includes(query) || text.includes(query);

          if (matchesCat && matchesQuery) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      }

      if (searchInput) {
        searchInput.addEventListener('input', filterGlossary);
      }

      filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          filterBtns.forEach(b => {
            b.classList.remove('btn-primary', 'active');
            b.classList.add('btn-outline');
          });
          btn.classList.add('btn-primary', 'active');
          btn.classList.remove('btn-outline');
          currentCat = btn.getAttribute('data-cat') || 'all';
          filterGlossary();
        });
      });
    })();
  </script>
`;

const bodyCloseIdx = newIndexHtml.lastIndexOf('</body>');
const finalIndexHtml = newIndexHtml.slice(0, bodyCloseIdx) + glossaryScript + '\n' + newIndexHtml.slice(bodyCloseIdx);

fs.writeFileSync('public/index.html', finalIndexHtml, 'utf8');
console.log('Successfully injected 20-Pillars Taxonomy and 135-Term Glossary into public/index.html!');
