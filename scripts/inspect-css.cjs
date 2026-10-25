const fs = require('fs');
const css = fs.readFileSync('public/css/main.css', 'utf8');

console.log('CSS size:', css.length, 'bytes');

// Check :root tokens
const rootMatch = css.match(/:root\s*\{([\s\S]*?)\}/);
if (rootMatch) {
  console.log('--- :root Variables ---');
  console.log(rootMatch[1].trim().split('\n').filter(l => l.trim().startsWith('--')).slice(0, 30).join('\n'));
}

// Check dark theme
const darkMatch = css.match(/\[data-theme=["']?dark["']?\]\s*\{([\s\S]*?)\}/);
if (darkMatch) {
  console.log('\n--- Dark Theme Variables ---');
  console.log(darkMatch[1].trim().split('\n').filter(l => l.trim().startsWith('--')).slice(0, 15).join('\n'));
}

// Check media queries
const mq = css.match(/@media[^{]+\{/g);
console.log('\n--- Media Queries found ---');
console.log(mq ? mq.map(m => m.trim()).join('\n') : 'None');

// Check accessibility properties
console.log('\n--- Accessibility & Usability Checks ---');
console.log('Has :focus-visible:', css.includes(':focus-visible'));
console.log('Has prefers-reduced-motion:', css.includes('prefers-reduced-motion'));
console.log('Has min-width / min-height 44px:', css.includes('44px'));
console.log('Has 320px breakpoint:', css.includes('320px'));
console.log('Has touch target rules:', css.includes('min-height') && css.includes('min-width'));
