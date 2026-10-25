const fs = require('fs');

const hadithHtmlPath = 'public/hadith.html';
let content = fs.readFileSync(hadithHtmlPath, 'utf8');

const targetBox = `<div class="card" style="margin-bottom: 28px; padding: 20px 24px;">
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
        
        <!-- Collection Filter -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; font-size: 0.95rem; color: var(--color-primary);">Collection:</span>
          <select id="hadith-collection-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main);">
            <option value="all">All Canonical Collections</option>
            <option value="Sahih al-Bukhari">Sahih al-Bukhari</option>
            <option value="Sahih Muslim">Sahih Muslim</option>
            <option value="Jami\` at-Tirmidhi">Jami\` at-Tirmidhi</option>
            <option value="Sunan Abi Dawud">Sunan Abi Dawud</option>
            <option value="Sunan an-Nasa'i">Sunan an-Nasa'i</option>
            <option value="Sunan Ibn Majah">Sunan Ibn Majah</option>
          </select>
        </div>

        <!-- Topic Filter -->
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 700; font-size: 0.95rem; color: var(--color-primary);">Thematic Topic:</span>
          <select id="hadith-topic-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 14px; font-size: 0.92rem; border: 1px solid var(--color-border); color: var(--color-text-main);">
            <option value="all">All Topics</option>
            <option value="Iman">Iman (Faith & Sincerity)</option>
            <option value="Akhlaq">Akhlaq (Character & Conduct)</option>
            <option value="Knowledge">Knowledge ('Ilm)</option>
            <option value="Mercy">Mercy & Compassion</option>
            <option value="Salah">Salah & Purification</option>
          </select>
        </div>

      </div>
    </div>`;

const replacementBox = `<div class="card" style="margin-bottom: 28px; padding: 22px 26px; border-top: 3px solid var(--color-primary);">
      <!-- Search Input -->
      <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
        <div style="position: relative; flex: 1; min-width: 280px;">
          <input type="text" id="hadith-search-input" placeholder="🔍 Search Hadiths by text, Arabic, Urdu, narrator or reference..." class="input-text" style="width: 100%; padding: 12px 16px; border-radius: var(--radius-sm); border: 1px solid var(--color-border); background: var(--color-surface); color: var(--color-text-main); font-size: 0.98rem; box-sizing: border-box;">
        </div>
        <button class="btn btn-outline" onclick="resetHadithFilters()" style="padding: 10px 18px; font-size: 0.9rem;">Reset Filters</button>
      </div>

      <!-- Dropdown Filters -->
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px;">
        
        <!-- Collection Filter -->
        <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 220px;">
          <span style="font-weight: 700; font-size: 0.92rem; color: var(--color-primary); white-space: nowrap;">Collection:</span>
          <select id="hadith-collection-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 12px; font-size: 0.9rem; border: 1px solid var(--color-border); color: var(--color-text-main); width: 100%;">
            <option value="all">All Canonical Collections (Kutub al-Sittah)</option>
            <option value="Sahih al-Bukhari">Sahih al-Bukhari</option>
            <option value="Sahih Muslim">Sahih Muslim</option>
            <option value="Jami\` at-Tirmidhi">Jami\` at-Tirmidhi</option>
            <option value="Sunan Abi Dawud">Sunan Abi Dawud</option>
            <option value="Sunan an-Nasa'i">Sunan an-Nasa'i</option>
            <option value="Sunan Ibn Majah">Sunan Ibn Majah</option>
          </select>
        </div>

        <!-- Topic Filter -->
        <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 200px;">
          <span style="font-weight: 700; font-size: 0.92rem; color: var(--color-primary); white-space: nowrap;">Topic:</span>
          <select id="hadith-topic-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 12px; font-size: 0.9rem; border: 1px solid var(--color-border); color: var(--color-text-main); width: 100%;">
            <option value="all">All Topics & Themes</option>
            <option value="Iman">Iman (Faith & Sincerity)</option>
            <option value="Salah">Salah (Daily Prayer)</option>
            <option value="Purification">Purification (Taharah)</option>
            <option value="Fasting">Fasting (Sawm)</option>
            <option value="Zakat">Zakat & Charity</option>
            <option value="Hajj">Hajj & Umrah</option>
            <option value="Akhlaq">Akhlaq (Character & Conduct)</option>
            <option value="Knowledge">Knowledge ('Ilm)</option>
            <option value="Dua">Dua & Supplication</option>
            <option value="Family">Family & Parents</option>
          </select>
        </div>

        <!-- Grade Filter -->
        <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 170px;">
          <span style="font-weight: 700; font-size: 0.92rem; color: var(--color-primary); white-space: nowrap;">Grade:</span>
          <select id="hadith-grade-filter" class="btn btn-outline" style="background-color: var(--color-surface); padding: 8px 12px; font-size: 0.9rem; border: 1px solid var(--color-border); color: var(--color-text-main); width: 100%;">
            <option value="all">All Authenticity Grades</option>
            <option value="Sahih">Sahih (Authentic)</option>
            <option value="Hasan">Hasan (Sound / Good)</option>
          </select>
        </div>

      </div>
    </div>`;

const isCrlf = content.includes('\r\n');
content = content.replace(/\r\n/g, '\n');

if (content.includes(targetBox.replace(/\r\n/g, '\n'))) {
  content = content.replace(targetBox.replace(/\r\n/g, '\n'), replacementBox);
  console.log('Replaced filter box successfully!');
} else {
  console.log('Target filter box not found!');
}

if (isCrlf) content = content.replace(/\n/g, '\r\n');
fs.writeFileSync(hadithHtmlPath, content, 'utf8');
