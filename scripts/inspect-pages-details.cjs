const fs = require('fs');

console.log('--- Inspecting era3 in history.html ---');
const historyHtml = fs.readFileSync('public/history.html', 'utf-8');
const era3Idx = historyHtml.indexOf('id="era3"');
if (era3Idx !== -1) {
  console.log(historyHtml.slice(era3Idx, era3Idx + 1200));
}

console.log('\n--- Inspecting city-select in prayer-times.html ---');
const ptHtml = fs.readFileSync('public/prayer-times.html', 'utf-8');
const csIdx = ptHtml.indexOf('id="city-select"');
if (csIdx !== -1) {
  console.log(ptHtml.slice(csIdx - 200, csIdx + 400));
}

console.log('\n--- Inspecting footer-bottom in privacy.html ---');
const privHtml = fs.readFileSync('public/privacy.html', 'utf-8');
const fbIdx = privHtml.indexOf('footer-bottom');
if (fbIdx !== -1) {
  console.log(privHtml.slice(fbIdx - 100, fbIdx + 600));
}

console.log('\n--- Inspecting zakat-calculator.html ---');
const zakatHtml = fs.readFileSync('public/zakat-calculator.html', 'utf-8');
const zakGridIdx = zakatHtml.indexOf('grid-template-columns');
if (zakGridIdx !== -1) {
  console.log(zakatHtml.slice(zakGridIdx - 100, zakGridIdx + 500));
}
