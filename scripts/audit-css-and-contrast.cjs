const fs = require('fs');

function luminance(r, g, b) {
  const a = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
  const num = parseInt(hex, 16);
  return [num >> 16, (num >> 8) & 255, num & 255];
}

function contrast(hex1, hex2) {
  const [r1, g1, b1] = hexToRgb(hex1);
  const [r2, g2, b2] = hexToRgb(hex2);
  const lum1 = luminance(r1, g1, b1);
  const lum2 = luminance(r2, g2, b2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

console.log('=== Color Contrast Ratios (WCAG AA requires >= 4.5:1 for normal text, >= 3:1 for large text) ===');
const pairs = [
  ['Deep Jade on Ivory', '#176B5B', '#F7F4EC'],
  ['Midnight Ink on Ivory', '#142326', '#F7F4EC'],
  ['Text Muted on Ivory', '#4A5E5B', '#F7F4EC'],
  ['Muted Brass on Ivory', '#B58B50', '#F7F4EC'],
  ['Brass Dark on Ivory', '#8F6932', '#F7F4EC'],
  ['Dark Mode Main Text on BG', '#F1F5F4', '#101A1C'],
  ['Dark Mode Muted Text on BG', '#9BB0AC', '#101A1C'],
  ['Dark Mode Primary on BG', '#208D79', '#101A1C'],
  ['Dark Mode Gold on BG', '#D4A86A', '#101A1C'],
  ['Primary Light on Dark BG', '#34B9A1', '#101A1C'],
];

pairs.forEach(([name, c1, c2]) => {
  const cr = contrast(c1, c2);
  const passAA = cr >= 4.5 ? 'PASS (AA)' : (cr >= 3.0 ? 'PASS (Large AA / UI)' : 'FAIL (<3.0)');
  console.log(`${name}: ${cr.toFixed(2)}:1 -> ${passAA}`);
});

console.log('\n=== Checking CSS for Fixed Widths in main.css ===');
const css = fs.readFileSync('public/css/main.css', 'utf8');
const fixedWidthMatches = css.match(/[^-]width:\s*([4-9]\d{2}|[1-9]\d{3,})px/g);
console.log('Fixed widths >= 400px found in main.css:');
if (fixedWidthMatches) {
  console.log([...new Set(fixedWidthMatches)]);
} else {
  console.log('None found.');
}
