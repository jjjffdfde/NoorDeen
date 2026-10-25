const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');

// 1. Patch zakat-calculator.html
console.log('Patching zakat-calculator.html...');
const zakatPath = path.join(publicDir, 'zakat-calculator.html');
let zakat = fs.readFileSync(zakatPath, 'utf8');

// Update FAQ Schema answer
zakat = zakat.replace(
  '"Classical scholars recommend using the Silver Nisab (595 grams / 200 Dirhams) for cash, liquid savings, and trade merchandise because its lower financial threshold benefits the poor by bringing more wealth into communal circulation. The Gold Nisab (85 grams / 20 Dinars) is strictly applied if one\'s wealth is held predominantly in physical gold."',
  '"Classical scholars recommend using the Silver Nisab threshold for cash, bank savings, and trade merchandise because its lower financial threshold benefits the poor by bringing more wealth into communal circulation. The Gold Nisab is strictly applied if one\'s wealth is held predominantly in physical gold. The portal provides both established juristic standards: (1) South Asian / Hanafi classical standard: Silver 612.36g (52.5 tolas) and Gold 87.48g (7.5 tolas); and (2) Contemporary Metric / OIC Fiqh standard: Silver 595g (200 Dirhams) and Gold 85g (20 Dinars)."'
);

// Update On-Page FAQ
zakat = zakat.replace(
  '<p>Classical scholars recommend using the Silver Nisab (595 grams / 200 Dirhams) for cash, liquid savings, and trade merchandise because its lower financial threshold benefits the poor by bringing more wealth into communal circulation. The Gold Nisab (85 grams / 20 Dinars) is strictly applied if one\'s wealth is held predominantly in physical gold.</p>',
  '<p>Classical scholars recommend using the Silver Nisab threshold for cash, liquid savings, and trade merchandise because its lower financial threshold benefits the poor by bringing more wealth into communal circulation. The Gold Nisab is strictly applied if one\'s wealth is held predominantly in physical gold. The portal provides both established juristic standards: (1) South Asian / Hanafi classical standard: Silver 612.36g (52.5 tolas) and Gold 87.48g (7.5 tolas); and (2) Contemporary Metric / OIC Fiqh standard: Silver 595g (200 Dirhams) and Gold 85g (20 Dinars).</p>'
);

// Update dropdown options
const newDropdown = `<select id="nisab-standard-select" class="btn btn-outline" style="background-color: var(--color-surface); padding: 9px 12px; font-weight: 600; font-size: 0.88rem; border: 1px solid var(--color-border); color: var(--color-text-main); width: 100%;">
            <option value="silver" selected>Silver Nisab (612.36g / 52.5 tola) — Hanafi Standard (Recommended)</option>
            <option value="silver_metric">Silver Nisab (595g / 200 Dirhams) — OIC Contemporary Metric</option>
            <option value="gold">Gold Nisab (87.48g / 7.5 tola) — Hanafi Standard (Physical Gold)</option>
            <option value="gold_metric">Gold Nisab (85g / 20 Dinars) — OIC Contemporary Metric</option>
          </select>`;

zakat = zakat.replace(
  /<select id="nisab-standard-select"[\s\S]*?<\/select>/,
  newDropdown
);

// Update reference info bar
const newBar = `<div><span>⚖️ Reference Nisab Standards: </span><strong>Hanafi:</strong> Gold 87.48g (7.5 tola), Silver 612.36g (52.5 tola) • <strong>OIC Metric:</strong> Gold 85g, Silver 595g. Rates update automatically on currency change or manual input.</div>
        <button id="btn-reset-rates" class="btn btn-outline" style="padding: 4px 10px; font-size: 0.78rem;">Reset Benchmark Rates</button>`;

zakat = zakat.replace(
  /<div><span>[ℹ️⚖️] (?:Standard|Reference) Nisab Weights: <\/span>[\s\S]*?<\/button>/,
  newBar
);

// Update calculate() rendering of res-nisab-name
zakat = zakat.replace(
  "document.getElementById('res-nisab-name').textContent = res.nisabStandard === 'gold' ? 'Gold (87.48g)' : 'Silver (612.36g)';",
  "document.getElementById('res-nisab-name').textContent = res.activeNisabLabel || (res.nisabStandard.startsWith('gold') ? 'Gold Nisab' : 'Silver Nisab');"
);

fs.writeFileSync(zakatPath, zakat, 'utf8');
console.log('zakat-calculator.html patched successfully.');

// 2. Patch prayer-times.html
console.log('Patching prayer-times.html...');
const prayerPath = path.join(publicDir, 'prayer-times.html');
let prayer = fs.readFileSync(prayerPath, 'utf8');

// Update Zenith card in prayer-times.html
const oldZawalStart = '<div class="card" style="text-align: center; border-top: 4px solid var(--color-danger); padding: 24px;">';
const zawalIdx = prayer.indexOf(oldZawalStart);
if (zawalIdx !== -1) {
  const zawalEndIdx = prayer.indexOf('</div>\r\n\r\n      <div class="card"', zawalIdx) !== -1
    ? prayer.indexOf('</div>\r\n\r\n      <div class="card"', zawalIdx) + 6
    : prayer.indexOf('</div>\n\n      <div class="card"', zawalIdx) + 6;
  
  const newZawalCard = `<div class="card" style="text-align: center; border-top: 4px solid var(--color-danger); padding: 24px;">
        <div style="font-size: 1.1rem; color: var(--color-danger); font-weight: 700;" class="font-arabic">وقت الاستواء (المكروه)</div>
        <div style="font-size: 1.25rem; font-weight: 800; color: var(--color-danger); margin: 6px 0;">Prohibited Zenith Window (Istiwa')</div>
        <div id="time-zawal" style="font-size: 1.9rem; font-weight: 800; color: var(--color-text-main); letter-spacing: -0.5px;">11:42 AM – 11:52 AM</div>
        <div style="font-size: 0.8rem; color: var(--color-danger); font-weight: 700; margin-top: 6px;">⚠️ Voluntary Prayers Prohibited (~10m until Dhuhr)</div>
      </div>`;
  
  prayer = prayer.slice(0, zawalIdx) + newZawalCard + prayer.slice(zawalEndIdx);
  console.log('Zenith card updated.');
}

// Update Dhuhr card
const oldDhuhrSnippet = '<div style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary); margin: 6px 0;">Dhuhr (Midday)</div>';
const newDhuhrCard = `<div style="font-size: 1.1rem; color: var(--color-primary); font-weight: 700;" class="font-arabic">الظهر / الزوال</div>
        <div style="font-size: 1.25rem; font-weight: 800; color: var(--color-primary); margin: 6px 0;">Solar Noon / Dhuhr Begins (Zawal)</div>
        <div id="time-dhuhr" style="font-size: 2.2rem; font-weight: 800; color: var(--color-text-main); letter-spacing: -0.5px;">11:52 AM</div>
        <div style="font-size: 0.8rem; color: var(--color-text-muted); margin-top: 6px;">Sun Declines from Meridian (Zawal begins Dhuhr)</div>`;

if (prayer.includes(oldDhuhrSnippet)) {
  const dhuhrCardStart = prayer.lastIndexOf('<div class="card"', prayer.indexOf(oldDhuhrSnippet));
  const dhuhrCardEnd = prayer.indexOf('</div>\r\n\r\n      <div class="card"', dhuhrCardStart) !== -1
    ? prayer.indexOf('</div>\r\n\r\n      <div class="card"', dhuhrCardStart) + 6
    : prayer.indexOf('</div>\n\n      <div class="card"', dhuhrCardStart) + 6;

  const fullDhuhrCard = `<div class="card" style="text-align: center; border-top: 4px solid var(--color-primary); padding: 24px;">\n        ` + newDhuhrCard + `\n      </div>`;
  prayer = prayer.slice(0, dhuhrCardStart) + fullDhuhrCard + prayer.slice(dhuhrCardEnd);
  console.log('Dhuhr card updated.');
}

// In prayer-times.html script, update time-zawal textContent update
if (prayer.includes('if (zawalEl) zawalEl.textContent = times.zawalStart;')) {
  prayer = prayer.replace(
    'if (zawalEl) zawalEl.textContent = times.zawalStart;',
    'if (zawalEl) zawalEl.textContent = `${times.zawalStart} – ${times.dhuhr}`;'
  );
  console.log('prayer script zawal textContent updated.');
}

fs.writeFileSync(prayerPath, prayer, 'utf8');
console.log('prayer-times.html patched successfully.');
