const fs = require('fs');
const path = require('path');

const sahabaFile = 'public/sahaba.html';
let html = fs.readFileSync(sahabaFile, 'utf8');

// 1. Update Title and Header Counts
html = html.replace(/The Noble Sahaba — Comprehensive Biographies of the Companions \(30 Monographs\)/g,
                    'The Noble Sahaba — Comprehensive Biographies of the Companions (52 Comprehensive Biographies)');
html = html.replace(/30 foremost Sahaba \(Companions\)/g, '52 foremost Sahaba (Companions)');
html = html.replace(/📚 <strong>30 Standalone Biographies<\/strong>/g, '📚 <strong>52 Standalone Biographies</strong>');
html = html.replace(/📖 <strong>21,000\+ Words of Rigorous Classical Scholarship<\/strong>/g, '📖 <strong>38,000+ Words of Rigorous Classical Scholarship</strong>');

// 2. Update Filter Buttons
const oldFilterGroup = `<div style="display: flex; flex-wrap: wrap; gap: 8px;" id="sahaba-filter-group">
        <button class="btn btn-primary sahaba-filter-btn" data-cat-btn="all" onclick="filterSahabaCategory('all')">All 30 Companions</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="caliphs" onclick="filterSahabaCategory('caliphs')">Rightly Guided Caliphs (4)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="promised-paradise" onclick="filterSahabaCategory('promised-paradise')">Promised Paradise (6)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="women-companions" onclick="filterSahabaCategory('women-companions')">Mothers & Women Companions (10)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="scholars" onclick="filterSahabaCategory('scholars')">Scholars, Jurists & Scribes (6)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="stalwarts" onclick="filterSahabaCategory('stalwarts')">Early Stalwarts & Heroes (4)</button>
      </div>`;

const newFilterGroup = `<div style="display: flex; flex-wrap: wrap; gap: 8px;" id="sahaba-filter-group">
        <button class="btn btn-primary sahaba-filter-btn" data-cat-btn="all" onclick="filterSahabaCategory('all')">All 52 Companions</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="caliphs" onclick="filterSahabaCategory('caliphs')">Rightly Guided Caliphs (4)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="promised-paradise" onclick="filterSahabaCategory('promised-paradise')">Promised Paradise (6)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="women-companions" onclick="filterSahabaCategory('women-companions')">Mothers & Women Companions (14)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="scholars" onclick="filterSahabaCategory('scholars')">Scholars, Jurists & Scribes (10)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="ansar-leaders" onclick="filterSahabaCategory('ansar-leaders')">Chieftains & Heroes of the Ansar (6)</button>
        <button class="btn btn-outline sahaba-filter-btn" data-cat-btn="stalwarts" onclick="filterSahabaCategory('stalwarts')">Martyrs, Leaders & Stalwarts (12)</button>
      </div>`;

if (html.includes(oldFilterGroup)) {
  html = html.replace(oldFilterGroup, newFilterGroup);
  console.log('Filter group updated successfully.');
} else {
  console.log('Old filter group exact text not found, updating via regex...');
  html = html.replace(/<div style="display: flex; flex-wrap: wrap; gap: 8px;" id="sahaba-filter-group">[\s\S]*?<\/div>/, newFilterGroup);
}

// 3. Quick Index Update
const quickIndexAdditions = `
        <a href="#hamzah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Hamzah ibn Abdul Muttalib</a>
        <a href="#jafar" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Ja'far ibn Abi Talib</a>
        <a href="#ubayy-ibn-kab" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Ubayy ibn Ka'b</a>
        <a href="#sad-ibn-muadh" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Sa'd ibn Mu'adh</a>
        <a href="#abu-ayyub" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Abu Ayyub al-Ansari</a>
        <a href="#amr-ibn-al-aas" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Amr ibn al-Aas</a>
        <a href="#ammar-ibn-yasir" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Ammar ibn Yasir</a>
        <a href="#hudhayfah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Hudhayfah ibn al-Yaman</a>
        <a href="#ibn-umar" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Abdullah ibn Umar</a>
        <a href="#abu-musa" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Abu Musa al-Ash'ari</a>
        <a href="#zayd-ibn-harithah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Zayd ibn Harithah</a>
        <a href="#usamah-ibn-zayd" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Usamah ibn Zayd</a>
        <a href="#sad-ibn-ubadah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Sa'd ibn Ubadah</a>
        <a href="#abu-darda" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Abu Darda al-Ansari</a>
        <a href="#jabir-ibn-abdullah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Jabir ibn Abdullah</a>
        <a href="#anas-ibn-malik" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Anas ibn Malik</a>
        <a href="#sawdah-bint-zamah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Sawdah bint Zam'ah</a>
        <a href="#zaynab-bint-khuzaymah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Zaynab bint Khuzaymah</a>
        <a href="#umm-ayman" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Umm Ayman Barakah</a>
        <a href="#rufaydah" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Rufaydah al-Aslamiyyah</a>
        <a href="#al-bara-ibn-malik" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Al-Bara' ibn Malik</a>
        <a href="#thabit-ibn-qays" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Thabit ibn Qays</a>
`;

html = html.replace('<a href="#musab" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Mus\'ab ibn Umayr</a>',
                   '<a href="#musab" class="btn btn-outline" style="text-align: left; justify-content: flex-start; padding: 8px 12px; font-weight: 500;">Mus\'ab ibn Umayr</a>\n' + quickIndexAdditions);

console.log('Quick index updated.');
fs.writeFileSync(sahabaFile, html);
