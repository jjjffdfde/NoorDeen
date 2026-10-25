const fs = require('fs');

const hadithHtmlPath = 'public/hadith.html';
let content = fs.readFileSync(hadithHtmlPath, 'utf8');

// Replace controls section
const oldControls = `<select id="hadith-collection-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main);">
            <option value="all">All Canonical Collections</option>
            <option value="Sahih al-Bukhari">Sahih al-Bukhari</option>
            <option value="Sahih Muslim">Sahih Muslim</option>
            <option value="Jami\` at-Tirmidhi">Jami\` at-Tirmidhi</option>
            <option value="Sunan Abi Dawud">Sunan Abi Dawud</option>
            <option value="Sunan an-Nasa'i">Sunan an-Nasa'i</option>
            <option value="Sunan Ibn Majah">Sunan Ibn Majah</option>
          </select>
          <select id="hadith-topic-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main);">
            <option value="all">All Topics</option>
            <option value="Iman">Iman (Faith & Sincerity)</option>
            <option value="Akhlaq">Akhlaq (Character & Conduct)</option>
            <option value="Knowledge">Knowledge ('Ilm)</option>
            <option value="Mercy">Mercy & Compassion</option>
            <option value="Salah">Salah & Purification</option>
          </select>`;

const newControls = `<div style="display: flex; gap: 12px; flex-wrap: wrap; width: 100%; margin-bottom: 8px;">
            <input type="text" id="hadith-search-input" placeholder="🔍 Search Hadiths by text, Arabic, Urdu, narrator or reference..." class="input-text" style="flex: 1; min-width: 280px; padding: 10px 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text-main); font-size: 0.95rem;">
          </div>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; width: 100%;">
            <select id="hadith-collection-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main); flex: 1; min-width: 180px;">
              <option value="all">All Canonical Collections</option>
              <option value="Sahih al-Bukhari">Sahih al-Bukhari</option>
              <option value="Sahih Muslim">Sahih Muslim</option>
              <option value="Jami\` at-Tirmidhi">Jami\` at-Tirmidhi</option>
              <option value="Sunan Abi Dawud">Sunan Abi Dawud</option>
              <option value="Sunan an-Nasa'i">Sunan an-Nasa'i</option>
              <option value="Sunan Ibn Majah">Sunan Ibn Majah</option>
            </select>
            <select id="hadith-topic-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main); flex: 1; min-width: 180px;">
              <option value="all">All Topics & Themes</option>
              <option value="Iman">Iman (Faith & Sincerity)</option>
              <option value="Salah">Salah (Prayer)</option>
              <option value="Purification">Purification (Taharah)</option>
              <option value="Fasting">Fasting (Sawm)</option>
              <option value="Zakat">Zakat & Charity</option>
              <option value="Hajj">Hajj & Umrah</option>
              <option value="Akhlaq">Akhlaq (Character & Conduct)</option>
              <option value="Knowledge">Knowledge ('Ilm)</option>
              <option value="Dua">Dua & Supplication</option>
              <option value="Family">Family & Parents</option>
            </select>
            <select id="hadith-grade-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main); flex: 1; min-width: 160px;">
              <option value="all">All Authenticity Grades</option>
              <option value="Sahih">Sahih (Authentic)</option>
              <option value="Hasan">Hasan (Good / Sound)</option>
            </select>
          </div>`;

// Replace script logic
const oldScript = `    function renderHadiths() {
      const container = document.getElementById('hadiths-list-container');
      const collFilter = document.getElementById('hadith-collection-filter').value;
      const topicFilter = document.getElementById('hadith-topic-filter').value;

      const filtered = ISLAMIC_DATA.hadiths.filter(h => {
        const matchColl = collFilter === 'all' || h.collection === collFilter;
        const matchTopic = topicFilter === 'all' || h.topic === topicFilter;
        return matchColl && matchTopic;
      });

      if (filtered.length === 0) {
        container.innerHTML = '<div class="card" style="text-align:center; padding: 40px;"><p>No Hadiths match your selected filter.</p></div>';
        return;
      }

      container.innerHTML = filtered.map(h => {
        const comm = HADITH_COMMENTARY[h.id];
        return \`
        <div class="hadith-card" style="margin-bottom: 24px; padding: 24px; background: var(--color-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); border-top: 3px solid var(--color-primary);">
          <div class="hadith-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div>
              <strong style="color: var(--color-primary); font-size: 1.05rem;">\${h.collection} #\${h.number}</strong>
              <span style="color: var(--color-text-muted); margin-left: 8px;">[\${h.book}]</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
              <span class="hadith-badge-grade">\${h.grade}</span>
              <span style="font-size: 0.78rem; padding: 3px 8px; background-color: var(--color-surface); border-radius: 4px; font-weight: 600;">\${h.topic}</span>
            </div>
          </div>
          
          <div class="hadith-arabic font-quran" style="font-size: 1.6rem; line-height: 2.3; color: var(--color-primary); margin-bottom: 14px; text-align: right; direction: rtl;">
            \${h.ar}
          </div>

          <div style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 12px;">
            "\${h.en}"
          </div>

          <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 14px;">
            \${h.ur}
          </div>

          \${comm ? \`
          <!-- Fiqh al-Hadith Commentary -->
          <details style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 14px;">
            <summary style="font-weight: 700; color: var(--color-primary); cursor: pointer; font-size: 0.92rem; user-select: none;">
              📖 \${comm.title}
            </summary>
            <p style="margin: 8px 0 0 0; font-size: 0.88rem; line-height: 1.7; color: var(--color-text-main);">
              \${comm.content}
            </p>
          </details>
          \` : ''}

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--color-border); padding-top: 12px; font-size: 0.85rem; color: var(--color-text-muted);">
            <div>Narrated by: <strong style="color: var(--color-text-main);">\${h.narrator}</strong></div>
            <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.8rem;" onclick="copyHadith('\${h.id}')">
              Copy Hadith
            </button>
          </div>
        </div>
      \`;
      }).join('');
    }

    function copyHadith(id) {
      const h = ISLAMIC_DATA.hadiths.find(item => item.id === id);
      if (!h) return;
      const text = \`\${h.ar}\\n\\n"\${h.en}"\\n\\nNarrated by: \${h.narrator}\\nReference: \${h.collection} #\${h.number} (\${h.grade})\`;
      navigator.clipboard.writeText(text).then(() => {
        if (window.App) window.App.showToast('Hadith copied with citation!');
      });
    }

    document.getElementById('hadith-collection-filter').addEventListener('change', renderHadiths);
    document.getElementById('hadith-topic-filter').addEventListener('change', renderHadiths);
    renderHadiths();`;

const newScript = `    // Extended Scholarly Commentary Registry (Fiqh al-Hadith)
    const HADITH_COMMENTARY = {
      'bukhari-1': {
        title: 'Fiqh al-Hadith: The Centrality of Sincere Intention',
        content: 'Imam ash-Shafi‘i and Imam Ahmad ibn Hanbal declared that this hadith encompasses one-third of all Islamic knowledge. Human accountability centers upon intention (Niyyah). Practically, even ordinary habits such as eating, sleeping, or working are transformed into rewarded acts of worship when undertaken with the intention of gaining strength to worship Allah and support one\\'s family.'
      },
      'bukhari-8': {
        title: 'Fiqh al-Hadith: The Architectural Metaphor of Islam',
        content: 'Ibn Umar (RA) narrated this fundamental tradition comparing Islam to a majestic canopy sustained by five load-bearing pillars. The Shahadah is the foundational bedrock, Salah is the central tent pole, and Zakat, Sawm, and Hajj constitute the outer pillars. If the central pillar collapses, the tent cannot remain upright.'
      },
      'bukhari-13': {
        title: 'Fiqh al-Hadith: Altruism as the Criterion of Complete Faith',
        content: 'Scholars explain that the negation of faith ("none of you truly believes") signifies the negation of spiritual perfection, not the complete departure from Islam. A believer\\'s heart must be purified of malice, jealousy (Hasad), and selfish rivalry, genuinely rejoicing when good fortune reaches other human beings.'
      },
      'muslim-2564': {
        title: 'Fiqh al-Hadith: The Sanctity of the Spiritual Heart (Qalb)',
        content: 'Worldly standards judge humans by superficial aesthetics, ethnic lineage, and material net worth. Allah the Almighty looks exclusively upon the spiritual purity of the inward heart and the righteousness of outward conduct. An outwardly humble deed animated by pure sincerity weighs heavier in the Scales than oceans of ostentatious charity.'
      },
      'muslim-223': {
        title: 'Fiqh al-Hadith: The Dual Dimensions of Purification',
        content: 'Purification is termed half of faith because spiritual salvation comprises two fundamental movements: Takhliyah (cleansing the heart of sins, pride, and false deities) and Tahliyah (adorning it with Tawheed and good deeds). Physical Wudu and Ghusl externally manifest this inner spiritual purification.'
      },
      'muslim-137': {
        title: 'Fiqh al-Hadith: The Supreme Priority of the Five Daily Prayers',
        content: 'Salah is the very first accountability point on the Day of Judgment. The Prophet ﷺ clarified that if one\\'s obligatory prayers are complete and sound, all other deeds will be facilitated. If obligatory prayers have deficiencies, Allah in His boundless mercy commands the angels to see if the slave has voluntary (Nafl) prayers to compensate for the shortcomings.'
      },
      'bukhari-1904': {
        title: 'Fiqh al-Hadith: The Spiritual Shield and Musk of Fasting',
        content: 'Fasting acts as a spiritual fortress guarding the believer against sins, lust, and hellfire. The fasting person is trained in supreme self-restraint (Sabr). Responding to hostility with the calm affirmation "I am fasting" neutralizes provocation and preserves spiritual tranquility.'
      },
      'bukhari-1395': {
        title: 'Fiqh al-Hadith: Divine Multiplication of Sincere Charity',
        content: 'While mathematical subtraction occurs when giving money, spiritual reality increases wealth through Barakah (divine blessing), protection from calamities, and eternal compensation in the Akhirah. Charity purifies accumulated wealth and extinguishes sins like water extinguishes fire.'
      },
      'bukhari-1773': {
        title: 'Fiqh al-Hadith: The Pure State of Hajj Mabrur',
        content: 'An accepted, upright Hajj—free of obscenity, dispute, and unlawful earnings—completely cleanses the pilgrim from sins, returning them pure like the day their mother gave birth to them. Its ultimate reward is nothing less than the eternal gardens of Paradise.'
      },
      'tirmidhi-1924': {
        title: 'Fiqh al-Hadith: Divine Reciprocity in Mercy',
        content: 'Known in classical Hadith sciences as Hadith al-Musalsal bil-Awwaliyyah (traditionally the first hadith a student receives from their teacher). It establishes universal benevolence: whoever seeks the expansive mercy of the Creator must demonstrate active tenderness, justice, and mercy toward all creations on earth, including animals.'
      },
      'abudawud-4799': {
        title: 'Fiqh al-Hadith: Moral Excellence on the Divine Scales',
        content: 'Good character (Husn al-Khuluq)—characterized by a cheerful countenance, withholding harm, and abundant generosity—outweighs voluminous voluntary worship that lacks moral rectitude. The Prophet ﷺ declared that the closest people to him on Judgment Day will be those with the finest character.'
      },
      'nasai-3140': {
        title: 'Fiqh al-Hadith: Devotion to Parents as the Path to Paradise',
        content: 'When Jahima (RA) sought to join the military expedition, the Prophet ﷺ asked if his mother was alive. Upon learning she was, he commanded him: "Stay with her, for Paradise lies beneath her feet." Serving an elderly mother, lowering one\\'s wing of humility, and seeking her blessing takes precedence over voluntary expeditions.'
      },
      'ibnmajah-224': {
        title: 'Fiqh al-Hadith: The Obligation of Seeking Beneficial Knowledge',
        content: 'Imam al-Ghazali and classical jurists explain that seeking knowledge of the essentials of faith—how to pray, purify oneself, fast, calculate Zakat, conduct lawful transactions, and purify the heart from spiritual diseases—is Fard al-Ayn (an individual obligation upon every mature Muslim).'
      },
      'abudawud-1479': {
        title: 'Fiqh al-Hadith: Supplication as the Soul of Worship',
        content: 'Dua is described as the essence and core of Ibadah because it embodies utter humility, complete acknowledgment of human helplessness, and total reliance upon Allah\\'s infinite power and boundless generosity.'
      },
      'tirmidhi-2516': {
        title: 'Fiqh al-Hadith: The Comprehensive Advice to Ibn Abbas',
        content: 'This master prophetic testament lays down the foundations of Tawheed, absolute reliance (Tawakkul), and faith in divine decree (Qadr). Whatever was destined to reach you could never have missed you, and whatever missed you was never destined to reach you.'
      }
    };

    function renderHadiths() {
      const container = document.getElementById('hadiths-list-container');
      const searchInput = document.getElementById('hadith-search-input');
      const searchTerm = searchInput ? searchInput.value.trim().toLowerCase() : '';
      const collFilter = document.getElementById('hadith-collection-filter').value;
      const topicFilter = document.getElementById('hadith-topic-filter').value;
      const gradeFilter = document.getElementById('hadith-grade-filter') ? document.getElementById('hadith-grade-filter').value : 'all';

      const filtered = ISLAMIC_DATA.hadiths.filter(h => {
        const matchColl = collFilter === 'all' || h.collection === collFilter;
        const matchTopic = topicFilter === 'all' || h.topic === topicFilter;
        const matchGrade = gradeFilter === 'all' || (h.grade && h.grade.toLowerCase().includes(gradeFilter.toLowerCase()));
        
        let matchSearch = true;
        if (searchTerm) {
          const haystack = [
            h.ar,
            h.en,
            h.ur,
            h.narrator,
            h.book,
            h.collection,
            String(h.number),
            h.topic,
            h.grade,
            h.gradeScholar || ''
          ].join(' ').toLowerCase();
          matchSearch = haystack.includes(searchTerm);
        }

        return matchColl && matchTopic && matchGrade && matchSearch;
      });

      if (filtered.length === 0) {
        container.innerHTML = '<div class="card" style="text-align:center; padding: 40px; color: var(--color-text-muted);"><p>No Hadiths match your search query and selected filters.</p><button class="btn btn-outline" style="margin-top:12px;" onclick="resetHadithFilters()">Reset All Filters</button></div>';
        return;
      }

      container.innerHTML = filtered.map(h => {
        const comm = HADITH_COMMENTARY[h.id];
        return \`
        <div class="hadith-card" id="\${h.id}" style="margin-bottom: 24px; padding: 24px; background: var(--color-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); border-top: 3px solid var(--color-primary);">
          <div class="hadith-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div>
              <strong style="color: var(--color-primary); font-size: 1.05rem;">\${h.collection} #\${h.number}</strong>
              <span style="color: var(--color-text-muted); margin-left: 8px;">[\${h.book}]</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="hadith-badge-grade" style="font-size: 0.8rem; padding: 3px 10px; background: rgba(15,81,50,0.1); color: var(--color-primary); border-radius: 12px; font-weight: 700;">\${h.grade}\${h.gradeScholar ? ' • ' + h.gradeScholar : ''}</span>
              <span style="font-size: 0.78rem; padding: 3px 8px; background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: 4px; font-weight: 600; color: var(--color-gold-dark);">\${h.topic}</span>
            </div>
          </div>
          
          <div class="hadith-arabic font-quran" style="font-size: 1.6rem; line-height: 2.3; color: var(--color-primary); margin-bottom: 14px; text-align: right; direction: rtl;">
            \${h.ar}
          </div>

          <div style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 12px;">
            "\${h.en}"
          </div>

          <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 14px;">
            \${h.ur}
          </div>

          \${comm ? \`
          <!-- Fiqh al-Hadith Commentary -->
          <details style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 14px;">
            <summary style="font-weight: 700; color: var(--color-primary); cursor: pointer; font-size: 0.92rem; user-select: none;">
              📖 \${comm.title}
            </summary>
            <p style="margin: 8px 0 0 0; font-size: 0.88rem; line-height: 1.7; color: var(--color-text-main);">
              \${comm.content}
            </p>
          </details>
          \` : ''}

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--color-border); padding-top: 12px; font-size: 0.85rem; color: var(--color-text-muted); flex-wrap: wrap; gap: 8px;">
            <div>Narrated by: <strong style="color: var(--color-text-main); font-weight: 700;">\${h.narrator}</strong></div>
            <button class="btn btn-outline" style="padding: 4px 14px; font-size: 0.82rem;" onclick="copyHadith('\${h.id}')">
              📋 Copy Hadith with Citation
            </button>
          </div>
        </div>
      \`;
      }).join('');
    }

    function resetHadithFilters() {
      const searchInput = document.getElementById('hadith-search-input');
      if (searchInput) searchInput.value = '';
      document.getElementById('hadith-collection-filter').value = 'all';
      document.getElementById('hadith-topic-filter').value = 'all';
      const gradeFilter = document.getElementById('hadith-grade-filter');
      if (gradeFilter) gradeFilter.value = 'all';
      renderHadiths();
    }

    function copyHadith(id) {
      const h = ISLAMIC_DATA.hadiths.find(item => item.id === id);
      if (!h) return;
      const text = \`\${h.ar}\\n\\n"\${h.en}"\\n\\nNarrated by: \${h.narrator}\\nReference: \${h.collection} #\${h.number} (\${h.grade}\${h.gradeScholar ? ' - ' + h.gradeScholar : ''})\`;
      navigator.clipboard.writeText(text).then(() => {
        if (window.App) window.App.showToast('Hadith copied with citation!');
      });
    }

    document.getElementById('hadith-collection-filter').addEventListener('change', renderHadiths);
    document.getElementById('hadith-topic-filter').addEventListener('change', renderHadiths);
    const gradeSelect = document.getElementById('hadith-grade-filter');
    if (gradeSelect) gradeSelect.addEventListener('change', renderHadiths);
    const searchField = document.getElementById('hadith-search-input');
    if (searchField) searchField.addEventListener('input', renderHadiths);
    renderHadiths();`;

const isCrlf = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

if (content.includes(oldControls.replace(/\r\n/g, '\n'))) {
  content = content.replace(oldControls.replace(/\r\n/g, '\n'), newControls);
  console.log('Replaced hadith controls successfully!');
} else {
  console.log('Old hadith controls not found!');
}

// Replace script
const scriptStartTag = '// Scholarly Commentary Registry (Fiqh al-Hadith)';
const scriptEndTag = 'renderHadiths();';

const sStart = content.indexOf(scriptStartTag);
const sEnd = content.indexOf(scriptEndTag, sStart);

if (sStart !== -1 && sEnd !== -1) {
  content = content.substring(0, sStart) + newScript + content.substring(sEnd + scriptEndTag.length);
  console.log('Replaced hadith script successfully!');
} else {
  console.log('Hadith script indices not found!');
}

if (isCrlf) content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(hadithHtmlPath, content, 'utf8');
console.log('Updated public/hadith.html size:', fs.statSync(hadithHtmlPath).size);
