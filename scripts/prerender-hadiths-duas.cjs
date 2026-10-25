const fs = require('fs');
const vm = require('vm');

const dataCode = fs.readFileSync('public/js/data.js', 'utf8');
const context = {};
vm.createContext(context);
vm.runInContext(dataCode.replace('const ISLAMIC_DATA =', 'globalThis.ISLAMIC_DATA ='), context);
const data = context.ISLAMIC_DATA;

// Load Hadith Commentary registry from hadith.html
const hadithHtml = fs.readFileSync('public/hadith.html', 'utf8');
const commMatch = hadithHtml.match(/const HADITH_COMMENTARY = \{[\s\S]*?\n    \};/);
let HADITH_COMMENTARY = {};
if (commMatch) {
  try {
    const commContext = {};
    vm.createContext(commContext);
    vm.runInContext(commMatch[0].replace('const HADITH_COMMENTARY =', 'globalThis.HADITH_COMMENTARY ='), commContext);
    HADITH_COMMENTARY = commContext.HADITH_COMMENTARY;
  } catch (e) {
    console.error('Error parsing HADITH_COMMENTARY:', e);
  }
}

// 1. Generate Hadith Cards
function generateHadithCard(h) {
  const comm = HADITH_COMMENTARY[h.id];
  return `        <div class="hadith-card" id="${h.id}" style="margin-bottom: 24px; padding: 24px; background: var(--color-card); border-radius: var(--radius-md); border: 1px solid var(--color-border); border-top: 3px solid var(--color-primary);">
          <div class="hadith-meta" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div>
              <span class="hadith-ref" style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem;">${h.collection} #${h.number}</span>
              <span style="font-size: 0.85rem; color: var(--color-text-muted); margin-left: 8px;">Book: ${h.book}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span class="hadith-badge-grade" style="font-size: 0.8rem; padding: 3px 10px; background: rgba(15,81,50,0.1); color: var(--color-primary); border-radius: 12px; font-weight: 700;">${h.grade}${h.gradeScholar ? ' • ' + h.gradeScholar : ''}</span>
              <span style="font-size: 0.78rem; padding: 3px 8px; background-color: var(--color-surface); border: 1px solid var(--color-border); border-radius: 4px; font-weight: 600; color: var(--color-gold-dark);">${h.topic}</span>
            </div>
          </div>
          
          <div class="hadith-arabic font-quran" style="font-size: 1.6rem; line-height: 2.3; color: var(--color-primary); margin-bottom: 14px; text-align: right; direction: rtl;" lang="ar" translate="no">
            ${h.ar}
          </div>

          <div style="font-size: 1.05rem; line-height: 1.7; color: var(--color-text-main); margin-bottom: 12px;">
            "${h.en}"
          </div>

          <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 14px;" dir="rtl" lang="ur">
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
        </div>`;
}

// Replace hadiths-list-container contents in public/hadith.html
const hadithStartTag = '<div id="hadiths-list-container">';
const hadithStartIdx = hadithHtml.indexOf(hadithStartTag);
if (hadithStartIdx === -1) throw new Error('Could not find #hadiths-list-container in hadith.html');

const hadithEndMatch = hadithHtml.slice(hadithStartIdx).match(/<\/div>\s*<\/main>/);
if (!hadithEndMatch) throw new Error('Could not find end of #hadiths-list-container in hadith.html');
const hadithEndIdx = hadithStartIdx + hadithEndMatch.index;

const allHadithCards = data.hadiths.map(generateHadithCard).join('\n\n');
const updatedHadithHtml = hadithHtml.slice(0, hadithStartIdx + hadithStartTag.length) + '\n\n' + allHadithCards + '\n    ' + hadithHtml.slice(hadithEndIdx);
fs.writeFileSync('public/hadith.html', updatedHadithHtml, 'utf8');
console.log(`Pre-rendered ${data.hadiths.length} Hadiths into public/hadith.html`);

// 2. Generate Dua Cards
function generateDuaCard(d) {
  return `        <div class="card dua-card" id="${d.id}" style="margin-bottom: 24px; padding: 24px; border-left: 5px solid var(--color-primary); background: var(--color-card); border-radius: var(--radius-md);">
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

          <div class="urdu-text" style="font-size: 1.15rem; line-height: 2.2; color: var(--color-text-muted); border-top: 1px solid var(--color-border-subtle); padding-top: 10px; margin-bottom: 16px;" dir="rtl" lang="ur">
            ${d.ur}
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--color-border); padding-top: 12px; flex-wrap: wrap; gap: 8px;">
            <div style="font-size: 0.85rem; color: var(--color-text-muted);">
              Prescribed repetition: <strong>${d.target} time(s)</strong>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.82rem;" onclick="copyDua('${d.id}')" aria-label="Copy Dua ${d.id}">
                📋 Copy
              </button>
              <button class="btn btn-outline" style="padding: 4px 12px; font-size: 0.82rem;" onclick="shareDua('${d.id}')" aria-label="Share Dua ${d.id}">
                🔗 Share
              </button>
            </div>
          </div>
        </div>`;
}

// Replace duas-list-container contents in public/duas.html
const duasHtml = fs.readFileSync('public/duas.html', 'utf8');
const duaStartTag = '<div id="duas-list-container">';
const duaStartIdx = duasHtml.indexOf(duaStartTag);
if (duaStartIdx === -1) throw new Error('Could not find #duas-list-container in duas.html');

const duaEndMatch = duasHtml.slice(duaStartIdx).match(/<\/div>\s*<\/main>/);
if (!duaEndMatch) throw new Error('Could not find end of #duas-list-container in duas.html');
const duaEndIdx = duaStartIdx + duaEndMatch.index;

const allDuaCards = data.duas.map(generateDuaCard).join('\n\n');
const updatedDuasHtml = duasHtml.slice(0, duaStartIdx + duaStartTag.length) + '\n\n' + allDuaCards + '\n    ' + duasHtml.slice(duaEndIdx);
fs.writeFileSync('public/duas.html', updatedDuasHtml, 'utf8');
console.log(`Pre-rendered ${data.duas.length} Duas into public/duas.html`);
