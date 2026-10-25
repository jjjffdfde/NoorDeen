const fs = require('fs');

const files = [
  'public/salah-guide.html',
  'public/wudu-guide.html',
  'public/janazah-guide.html',
  'public/eid-guide.html',
  'public/pillars.html'
];

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  const tokens = html.match(/<\/?([a-z0-9-]+)[^>]*>/gi) || [];
  
  const stack = [];
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);

  let unclosed = 0;
  let divBalance = 0;
  
  for (let t of tokens) {
    const isClose = t.startsWith('</');
    const tagName = t.replace(/<\/?([a-z0-9-]+)[\s\S]*/i, '$1').toLowerCase();
    
    if (voidTags.has(tagName)) continue;
    if (t.endsWith('/>')) continue;

    if (tagName === 'div') {
      if (isClose) divBalance--;
      else divBalance++;
    }

    if (!isClose) {
      stack.push({ tag: tagName, token: t.slice(0, 30) });
    } else {
      if (stack.length === 0) {
        console.log(`[${f}] Extra close tag </${tagName}>`);
        unclosed++;
      } else {
        const top = stack.pop();
        if (top.tag !== tagName) {
          // Mismatched
          // console.log(`[${f}] Mismatch: expected </${top.tag}> but got </${tagName}>`);
        }
      }
    }
  }

  console.log(`=== ${f} ===`);
  console.log(`  Div balance (open - close): ${divBalance}`);
  console.log(`  Unclosed tags remaining on stack: ${stack.length}`);
  if (divBalance !== 0) {
    console.log(`  WARNING: DIV BALANCE IS NOT ZERO! (${divBalance})`);
  }
});
