const fs = require('fs');

const i18nJs = fs.readFileSync('public/js/i18n.js', 'utf8');
const translateDomIdx = i18nJs.indexOf('translateDOM()');
if (translateDomIdx !== -1) {
  console.log('=== translateDOM() implementation ===');
  console.log(i18nJs.substring(translateDomIdx, translateDomIdx + 1200));
}
