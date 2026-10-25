const fs = require('fs');

const duasHtmlPath = 'public/duas.html';
let content = fs.readFileSync(duasHtmlPath, 'utf8');

const oldFilterBar = `<div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; margin-bottom: 32px;">
      <button class="btn btn-primary dua-filter-btn" data-cat="all" onclick="filterDuas('all', this)">All Duas</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="morning" onclick="filterDuas('morning', this)">🌅 Morning & Evening</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="salah" onclick="filterDuas('salah', this)">🕌 Salah, Istikharah & Qunut</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="janazah" onclick="filterDuas('janazah', this)">⚰️ Janazah (Funeral)</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="eid" onclick="filterDuas('eid', this)">🌙 Eid & Tashreeq</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="quranic" onclick="filterDuas('quranic', this)">📖 Quranic Rabbana</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="forgiveness" onclick="filterDuas('forgiveness', this)">🤲 Forgiveness (Istighfar)</button>
      <button class="btn btn-outline dua-filter-btn" data-cat="sleep" onclick="filterDuas('sleep', this)">🛏️ Sleep & Protection</button>
    </div>`;

const newFilterBar = `<div class="card" style="margin-bottom: 28px; padding: 22px 26px; border-top: 3px solid var(--color-primary);">
      <!-- Real-time Search Input -->
      <div style="display: flex; gap: 12px; margin-bottom: 18px; flex-wrap: wrap;">
        <div style="position: relative; flex: 1; min-width: 280px;">
          <input type="text" id="dua-search-input" placeholder="🔍 Search supplications by keyword, Arabic, meaning or reference..." class="input-text" style="width: 100%; padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text-main); font-size: 0.98rem; box-sizing: border-box;">
        </div>
        <button class="btn btn-outline" onclick="resetDuaFilters()" style="padding: 10px 18px; font-size: 0.9rem;">Reset Filters</button>
      </div>

      <!-- Category Filter Pills -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap; justify-content: center;">
        <button class="btn btn-primary dua-filter-btn" data-cat="all" onclick="filterDuas('all', this)">All Supplications</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="morning" onclick="filterDuas('morning', this)">🌅 Morning & Evening</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="salah" onclick="filterDuas('salah', this)">🕌 Salah & Dhikr</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="quranic" onclick="filterDuas('quranic', this)">📖 Quranic Rabbana</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="forgiveness" onclick="filterDuas('forgiveness', this)">🤲 Forgiveness (Istighfar)</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="fasting" onclick="filterDuas('fasting', this)">🌙 Fasting & Ramadan</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="hajj" onclick="filterDuas('hajj', this)">🕋 Hajj & Umrah</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="food" onclick="filterDuas('food', this)">🍽️ Food & Drink</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="travel" onclick="filterDuas('travel', this)">✈️ Travel (Safar)</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="home" onclick="filterDuas('home', this)">🏠 Home & Mosque</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="sleep" onclick="filterDuas('sleep', this)">🛏️ Sleep & Waking</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="distress" onclick="filterDuas('distress', this)">⛈️ Distress & Relief</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="health" onclick="filterDuas('health', this)">🩺 Health & Visiting Sick</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="janazah" onclick="filterDuas('janazah', this)">⚰️ Janazah</button>
        <button class="btn btn-outline dua-filter-btn" data-cat="eid" onclick="filterDuas('eid', this)">🌙 Eid & Tashreeq</button>
      </div>
    </div>`;

const newDuasScript = `    const counts = {};
    let activeCategory = 'all';

    // Fiqh Commentary for Key Duas
    const DUA_COMMENTARY = {
      'dua-sayyidul-istighfar': {
        title: 'Scholarly Commentary: The Master of Forgiveness',
        content: 'Prophet Muhammad ﷺ declared that whoever recites Sayyidul Istighfar with sincere conviction in the morning and dies before evening, or recites it in the evening and dies before morning, will be among the people of Paradise (Sahih al-Bukhari #6306). It begins with acknowledging Allah’s supreme Lordship and creation, affirms servitude and the primordial covenant, confesses the overwhelming bounty of Allah, and acknowledges human deficiency and sin.'
      },
      'dua-istikharah': {
        title: 'Fiqh al-Hadith: When and How to Pray Istikharah',
        content: 'Jabir ibn Abdullah (RA) narrated that the Prophet ﷺ taught Istikharah for every matter just as he taught a Surah from the Quran (Sahih al-Bukhari #1162). Offer two voluntary Rak‘ahs of prayer (outside the forbidden prayer times), then recite this supplication with an unbiased heart, placing complete trust in Allah’s divine knowledge and decree.'
      },
      'dua-qunut': {
        title: 'Fiqh al-Hadith: The Supplication of Qunut',
        content: 'Taught by Prophet Muhammad ﷺ to his grandson Al-Hasan ibn Ali (RA) for the Witr prayer (Sunan Abi Dawud #1425). It is also recited during times of severe calamity (Qunut an-Nazilah) in congregational obligatory prayers to beseech Allah’s protection for oppressed Muslims.'
      },
      'dua-ayatul-kursi': {
        title: 'Prophetic Virtues: The Greatest Verse in the Quran',
        content: 'Narrated by Ubayy ibn Ka‘b in Sahih Muslim #810. The Prophet ﷺ stated that reciting Ayatul Kursi after every obligatory prayer leaves nothing between the servant and Paradise except death (Sunan an-Nasa\'i in As-Sunan al-Kubra #9848). Reciting it before sleep assigns a divine guardian angel from Allah, protecting against Shaytan until morning.'
      },
      'dua-distress': {
        title: 'The Infallible Supplication of Dhul-Nun (Prophet Yunus AS)',
        content: 'The Prophet ﷺ said: "No Muslim supplication in distress with the words of Dhul-Nun except that Allah responds to him" (Jami\` at-Tirmidhi #3505). It combines Tawheed (affirming Allah\\'s absolute uniqueness), Tasbih (declaring His perfection above all flaws), and Istighfar (acknowledging one\\'s personal faults).'
      },
      'dua-laylatul-qadr': {
        title: 'The Chosen Supplication for Laylat al-Qadr',
        content: 'When Sayyidah Aishah (RA) asked: "O Messenger of Allah, if I know which night is Laylat al-Qadr, what should I say?" He replied: "Say: O Allah, You are Most Forgiving, and You love to forgive, so forgive me" (Jami\` at-Tirmidhi #3513). It requests Afw (complete expunging and erasure of sins).'
      },
      'dua-talbiyah': {
        title: 'The Sacred Anthem of the Pilgrimage',
        content: 'Narrated by Abdullah ibn Umar (RA) in Sahih al-Bukhari #1549. Talbiyah is the verbal response to Prophet Ibrahim\\'s call to pilgrimage. The pilgrim declares readiness to obey, affirms absolute Tawheed, and proclaims that all sovereignty, blessings, and praise belong solely to Allah.'
      }
    };

    function filterDuas(category, btnElement) {
      activeCategory = category;
      document.querySelectorAll('.dua-filter-btn').forEach(btn => {
        btn.classList.remove('btn-primary');
        btn.classList.add('btn-outline');
      });
      if (btnElement) {
        btnElement.classList.remove('btn-outline');
        btnElement.classList.add('btn-primary');
      }
      renderDuas();
    }

    function resetDuaFilters() {
      const searchInput = document.getElementById('dua-search-input');
      if (searchInput) searchInput.value = '';
      activeCategory = 'all';
      document.querySelectorAll('.dua-filter-btn').forEach((btn, idx) => {
        if (idx === 0) {
          btn.classList.remove('btn-outline');
          btn.classList.add('btn-primary');
        } else {
          btn.classList.remove('btn-primary');
          btn.classList.add('btn-outline');
        }
      });
      renderDuas();
    }

    function renderDuas() {
      const container = document.getElementById('duas-list-container');
      const searchInput = document.getElementById('dua-search-input');
      const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';

      const filtered = ISLAMIC_DATA.duas.filter(d => {
        let matchCat = false;
        if (activeCategory === 'all') {
          matchCat = true;
        } else if (activeCategory === 'morning') {
          matchCat = (d.cat === 'morning' || d.cat === 'evening');
        } else if (activeCategory === 'home') {
          matchCat = (d.cat === 'home' || d.cat === 'mosque');
        } else if (activeCategory === 'sleep') {
          matchCat = (d.cat === 'sleep');
        } else {
          matchCat = (d.cat === activeCategory);
        }

        let matchSearch = true;
        if (searchTerm) {
          const haystack = [
            d.title,
            d.ar,
            d.tr,
            d.en,
            d.ur,
            d.ref,
            d.cat
          ].join(' ').toLowerCase();
          matchSearch = haystack.includes(searchTerm);
        }

        return matchCat && matchSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = '<div class="card" style="text-align: center; padding: 40px; color: var(--color-text-muted);"><p>No supplications found matching your search query.</p><button class="btn btn-outline" style="margin-top:12px;" onclick="resetDuaFilters()">Reset Filters</button></div>';
        return;
      }

      container.innerHTML = filtered.map(d => {
        if (!counts[d.id]) counts[d.id] = 0;
        const currentCount = counts[d.id];
        const isCompleted = currentCount >= d.target;
        const comm = DUA_COMMENTARY[d.id];

        return \`
          <div class="card" id="\${d.id}" style="margin-bottom: 24px; padding: 24px; border-left: 5px solid \${isCompleted ? 'var(--color-gold)' : 'var(--color-primary)'}; background: var(--color-card); border-radius: var(--radius-md);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">\${d.title}</h2>
                <span style="font-size: 0.82rem; color: var(--color-gold-dark); font-weight: 600;">\${d.ref}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted); background: var(--color-surface); border: 1px solid var(--color-border); padding: 3px 8px; border-radius: 4px;">\${d.cat}</span>
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--color-primary); background: rgba(15,81,50,0.08); padding: 4px 12px; border-radius: 12px;">Target: \${d.target}x</span>
              </div>
            </div>

            <div class="ayah-arabic font-quran" style="font-size: 1.65rem; line-height: 2.3; margin-bottom: 16px; color: var(--color-primary); text-align: right; direction: rtl;">
              \${d.ar}
            </div>

            <div style="font-style: italic; color: var(--color-gold-dark); font-size: 0.95rem; margin-bottom: 10px; line-height: 1.6;">
              \${d.tr}
            </div>

            <div style="font-size: 1rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 12px;">
              \${d.en}
            </div>

            <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 16px;">
              \${d.ur}
            </div>

            \${comm ? \`
            <details style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 16px;">
              <summary style="font-weight: 700; color: var(--color-primary); cursor: pointer; font-size: 0.9rem; user-select: none;">
                📖 \${comm.title}
              </summary>
              <p style="margin: 8px 0 0 0; font-size: 0.88rem; line-height: 1.7; color: var(--color-text-main);">
                \${comm.content}
              </p>
            </details>
            \` : ''}

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--color-border); padding-top: 14px; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; gap: 8px;">
                <button class="btn btn-outline" style="padding: 6px 14px; font-size: 0.82rem;" onclick="copyDua('\${d.id}')">
                  📋 Copy Dua
                </button>
                <button class="btn btn-outline" style="padding: 6px 14px; font-size: 0.82rem;" onclick="resetCount('\${d.id}')">
                  ↺ Reset Counter
                </button>
              </div>
              <button class="btn \${isCompleted ? 'btn-primary' : 'btn-outline'}" style="padding: 8px 24px; font-weight: 700; font-size: 0.95rem;" onclick="incrementCount('\${d.id}', \${d.target})">
                📿 Recite: <span id="count-val-\${d.id}">\${currentCount}</span> / \${d.target} \${isCompleted ? '✓ Completed' : ''}
              </button>
            </div>
          </div>
        \`;
      }).join('');
    }

    function incrementCount(id, target) {
      if (!counts[id]) counts[id] = 0;
      counts[id]++;
      if (window.IslamicTools && window.IslamicTools.playTasbihSound) {
        window.IslamicTools.playTasbihSound();
      }
      if (counts[id] >= target && window.App && window.App.showToast) {
        window.App.showToast(\`Completed \${target}x recitations! Alhamdulillah.\`);
      }
      renderDuas();
    }

    function resetCount(id) {
      counts[id] = 0;
      renderDuas();
    }

    function copyDua(id) {
      const d = ISLAMIC_DATA.duas.find(item => item.id === id);
      if (!d) return;
      const text = \`\${d.title}\\n\\n\${d.ar}\\n\\n\${d.tr}\\n\\n"\${d.en}"\\n\\n\${d.ur}\\n\\nReference: \${d.ref}\`;
      navigator.clipboard.writeText(text).then(() => {
        if (window.App) window.App.showToast('Supplication copied with citation!');
      });
    }

    const searchInput = document.getElementById('dua-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', renderDuas);
    }

    renderDuas();`;

const isCrlf = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

if (content.includes(oldFilterBar.replace(/\r\n/g, '\n'))) {
  content = content.replace(oldFilterBar.replace(/\r\n/g, '\n'), newFilterBar);
  console.log('Replaced dua filter bar successfully!');
} else {
  console.log('Old dua filter bar not found!');
}

const sStart = content.indexOf('const counts = {};');
const sEnd = content.lastIndexOf('renderDuas();');

if (sStart !== -1 && sEnd !== -1) {
  content = content.substring(0, sStart) + newDuasScript + content.substring(sEnd + 'renderDuas();'.length);
  console.log('Replaced dua script successfully!');
} else {
  console.log('Dua script indices not found!');
}

if (isCrlf) content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(duasHtmlPath, content, 'utf8');
console.log('Updated public/duas.html size:', fs.statSync(duasHtmlPath).size);
