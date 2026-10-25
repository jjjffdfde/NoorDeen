import fs from 'fs';
import path from 'path';

// Read data.js
const dataCode = fs.readFileSync('./public/js/data.js', 'utf8');
const fn = new Function(dataCode + '; return ISLAMIC_DATA;');
const ISLAMIC_DATA = fn();

// 1. Pre-render Duas
const duasHtmlPath = './public/duas.html';
let duasHtml = fs.readFileSync(duasHtmlPath, 'utf8');

// Extract DUA_COMMENTARY from duas.html
const commMatch = duasHtml.match(/const DUA_COMMENTARY = (\{[\s\S]*?\n\s*\});/);
let DUA_COMMENTARY = {};
if (commMatch) {
  DUA_COMMENTARY = new Function('return ' + commMatch[1])();
}

const renderedDuas = ISLAMIC_DATA.duas.map(d => {
  const comm = DUA_COMMENTARY[d.id];
  return `
          <div class="card" id="${d.id}" style="margin-bottom: 24px; padding: 24px; border-left: 5px solid var(--color-primary); background: var(--color-card); border-radius: var(--radius-md);">
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
              <div>
                <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--color-primary); margin-bottom: 4px;">${d.title}</h2>
                <span style="font-size: 0.82rem; color: var(--color-gold-dark); font-weight: 600;">${d.ref}</span>
              </div>
              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span style="font-size: 0.78rem; text-transform: uppercase; font-weight: 700; color: var(--color-text-muted); background: var(--color-surface); border: 1px solid var(--color-border); padding: 3px 8px; border-radius: 4px;">${d.cat}</span>
                <span style="font-size: 0.82rem; font-weight: 700; color: var(--color-primary); background: rgba(15,81,50,0.08); padding: 4px 12px; border-radius: 12px;">Target: ${d.target}x</span>
              </div>
            </div>

            <div class="ayah-arabic font-quran" translate="no" dir="rtl" lang="ar" style="font-size: 1.65rem; line-height: 2.3; margin-bottom: 16px; color: var(--color-primary); text-align: right; direction: rtl;">
              ${d.ar}
            </div>

            <div style="font-style: italic; color: var(--color-gold-dark); font-size: 0.95rem; margin-bottom: 10px; line-height: 1.6;">
              ${d.tr}
            </div>

            <div style="font-size: 1rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 12px;">
              ${d.en}
            </div>

            <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 16px;">
              ${d.ur}
            </div>

            ${comm ? `
            <details style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 16px;">
              <summary style="font-weight: 700; color: var(--color-primary); cursor: pointer; font-size: 0.9rem; user-select: none;">
                📖 ${comm.title}
              </summary>
              <p style="margin: 8px 0 0 0; font-size: 0.88rem; line-height: 1.7; color: var(--color-text-main);">
                ${comm.content}
              </p>
            </details>
            ` : ''}

            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--color-border); padding-top: 14px; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.82rem;" onclick="copyDua('${d.id}')" aria-label="Copy Dua ${d.id}">
                  📋 Copy
                </button>
                <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.82rem;" onclick="shareDua('${d.id}')" aria-label="Share Dua ${d.id}">
                  🔗 Share
                </button>
                <button class="btn btn-outline" style="padding: 6px 12px; font-size: 0.82rem;" onclick="resetCount('${d.id}')" aria-label="Reset counter for Dua ${d.id}">
                  ↺ Reset
                </button>
              </div>
              <button class="btn btn-outline" style="padding: 8px 24px; font-weight: 700; font-size: 0.95rem;" onclick="incrementCount('${d.id}', ${d.target})">
                📿 Recite: <span id="count-val-${d.id}">0</span> / ${d.target}
              </button>
            </div>
          </div>
  `;
}).join('\n');

duasHtml = duasHtml.replace(
  /<div id="duas-list-container">[\s\S]*?<\/div>/,
  `<div id="duas-list-container">\n${renderedDuas}\n    </div>`
);

fs.writeFileSync(duasHtmlPath, duasHtml, 'utf8');
console.log('duas.html updated with', ISLAMIC_DATA.duas.length, 'pre-rendered Dua cards');

// 2. Pre-render Hadiths
const hadithHtmlPath = './public/hadith.html';
let hadithHtml = fs.readFileSync(hadithHtmlPath, 'utf8');

const hadithCommMatch = hadithHtml.match(/const HADITH_COMMENTARY = (\{[\s\S]*?\n\s*\});/);
let HADITH_COMMENTARY = {};
if (hadithCommMatch) {
  HADITH_COMMENTARY = new Function('return ' + hadithCommMatch[1])();
}

const renderedHadiths = ISLAMIC_DATA.hadiths.map(h => {
  const comm = HADITH_COMMENTARY[h.id];
  return `
        <div class="hadith-card" id="${h.id}" style="margin-bottom: 24px; padding: 24px; background: var(--color-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); border-top: 3px solid var(--color-primary);">
          <div class="hadith-meta" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
            <div>
              <strong style="color: var(--color-primary); font-size: 1.05rem;">${h.collection} #${h.number}</strong>
              <span style="color: var(--color-text-muted); margin-left: 8px;">[${h.book}]</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="hadith-badge-grade" style="font-size: 0.8rem; padding: 3px 10px; background: rgba(15,81,50,0.1); color: var(--color-primary); border-radius: 12px; font-weight: 700;">${h.grade}${h.gradeScholar ? ' • ' + h.gradeScholar : ''}</span>
              <span style="font-size: 0.78rem; padding: 3px 8px; background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: 4px; font-weight: 600; color: var(--color-gold-dark);">${h.topic}</span>
            </div>
          </div>
          
          <div class="hadith-arabic font-quran" translate="no" dir="rtl" lang="ar" style="font-size: 1.6rem; line-height: 2.3; color: var(--color-primary); margin-bottom: 14px; text-align: right; direction: rtl;">
            ${h.ar}
          </div>

          <div style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 12px;">
            "${h.en}"
          </div>

          <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 14px;">
            ${h.ur}
          </div>

          ${comm ? `
          <!-- Fiqh al-Hadith Commentary -->
          <details style="background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); padding: 12px 16px; margin-bottom: 14px;">
            <summary style="font-weight: 700; color: var(--color-primary); cursor: pointer; font-size: 0.92rem; user-select: none;">
              📖 ${comm.title}
            </summary>
            <p style="margin: 8px 0 0 0; font-size: 0.88rem; line-height: 1.7; color: var(--color-text-main);">
              ${comm.content}
            </p>
          </details>
          ` : ''}

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--color-border); padding-top: 12px; font-size: 0.85rem; color: var(--color-text-muted); flex-wrap: wrap; gap: 8px;">
            <div>Narrated by: <strong style="color: var(--color-text-main); font-weight: 700;">${h.narrator}</strong></div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.82rem;" onclick="copyHadith('${h.id}')" aria-label="Copy Hadith ${h.id} citation">
                📋 Copy
              </button>
              <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.82rem;" onclick="shareHadith('${h.id}')" aria-label="Share Hadith ${h.id}">
                🔗 Share
              </button>
            </div>
          </div>
        </div>
  `;
}).join('\n');

hadithHtml = hadithHtml.replace(
  /<div id="hadiths-list-container">[\s\S]*?<\/div>/,
  `<div id="hadiths-list-container">\n${renderedHadiths}\n    </div>`
);

fs.writeFileSync(hadithHtmlPath, hadithHtml, 'utf8');
console.log('hadith.html updated with', ISLAMIC_DATA.hadiths.length, 'pre-rendered Hadith cards');
