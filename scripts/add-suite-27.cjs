const fs = require('fs');

let testContent = fs.readFileSync('test/run-tests.js', 'utf8');

if (!testContent.includes('TEST SUITE 27:')) {
  const target = '  // SUMMARY\n  console.log(\'\\n====================================================\');';

  const suite27Code = `  // --- TEST SUITE 27: Phase 8 UX, UI, Accessibility & Responsive Consistency ---
  console.log('\\n--- TEST SUITE 27: Phase 8 UX, UI, Accessibility & Responsive Consistency ---');

  // 1. Accessibility Tokens & Reduced Motion in CSS
  const mainCssContent = fs.readFileSync(path.join(PUBLIC_DIR, 'css', 'main.css'), 'utf-8');
  assert(mainCssContent.includes('@media (prefers-reduced-motion: reduce)'), 'CSS defines prefers-reduced-motion media query');
  assert(mainCssContent.includes('*:focus-visible') && mainCssContent.includes('var(--color-primary)'), 'CSS defines high-contrast focus indicator in light mode');
  assert(mainCssContent.includes('[data-theme="dark"] *:focus-visible'), 'CSS defines dedicated dark-theme focus indicator');
  assert(mainCssContent.includes('.article-prose') && mainCssContent.includes('max-width: 72ch'), 'CSS defines optimal article reading measure');
  assert(mainCssContent.includes('.table-responsive') && mainCssContent.includes('overflow-x: auto'), 'CSS defines responsive table overflow container');

  // 2. Mobile Pointer Target Ergonomics
  assert(mainCssContent.includes('@media (max-width: 768px)') && mainCssContent.includes('min-width: 44px') && mainCssContent.includes('min-height: 44px'), 'CSS enforces 44px minimum touch targets on mobile viewports');

  // 3. Search Engine Monograph Coverage & Phonetics
  assert(searchContent.includes('SEERAH_SEARCH_CHAPTERS'), 'UniversalSearch registers Seerah chapters dataset');
  assert(searchContent.includes('SAHABA_SEARCH_PROFILES'), 'UniversalSearch registers Sahaba profiles dataset');
  assert(searchContent.includes('PROPHET_SEARCH_STORIES'), 'UniversalSearch registers Prophetic stories dataset');
  assert(searchContent.includes('HISTORY_SEARCH_ERAS'), 'UniversalSearch registers History eras dataset');

  // 4. Verification of Search Queries Across Datasets
  const badrRes = searchEngine.search('badr');
  assert(badrRes.length > 0 && badrRes.some(r => r.url.includes('seerah.html#ch17')), 'Search query "badr" resolves to Seerah Chapter 17');

  const abuBakrRes = searchEngine.search('abu bakr');
  assert(abuBakrRes.length > 0 && abuBakrRes.some(r => r.url.includes('sahaba.html#abu-bakr')), 'Search query "abu bakr" resolves to Sahaba Abu Bakr as-Siddiq');

  const musaRes = searchEngine.search('musa');
  assert(musaRes.length > 0 && musaRes.some(r => r.url.includes('prophets.html#musa')), 'Search query "musa" resolves to Prophet Musa story');

  const andalusRes = searchEngine.search('andalus');
  assert(andalusRes.length > 0 && andalusRes.some(r => r.url.includes('history.html#era6')), 'Search query "andalus" resolves to Islamic Spain / Al-Andalus era');

  // 5. Modal Dialog Accessibility Attributes in app.js
  const appJsContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf-8');
  assert(appJsContent.includes("modal.setAttribute('role', 'dialog')"), 'app.js declares role="dialog" on search and language modals');
  assert(appJsContent.includes("modal.setAttribute('aria-modal', 'true')"), 'app.js declares aria-modal="true" on search and language modals');
  assert(appJsContent.includes("modal.setAttribute('aria-label', 'Global Islamic Search')"), 'Search modal declares accessible label');
  assert(appJsContent.includes("modal.setAttribute('aria-label', 'Select Interface Language')"), 'Language modal declares accessible label');
  assert(appJsContent.includes("this.searchTriggerElement.focus()"), 'app.js restores focus to trigger element when search modal closes');
  assert(appJsContent.includes("this.langTriggerElement.focus()"), 'app.js restores focus to trigger element when language modal closes');
  assert(appJsContent.includes("this.drawerTriggerElement.focus()"), 'app.js restores focus to trigger element when mobile drawer closes');

  // 6. Viewport & Semantic Metadata Across All 25 HTML Pages
  const allHtmlPages = fs.readdirSync(PUBLIC_DIR).filter(f => f.endsWith('.html'));
  assert(allHtmlPages.length >= 25, 'Repository contains at least 25 public HTML pages');
  allHtmlPages.forEach(pageFile => {
    const pageHtml = fs.readFileSync(path.join(PUBLIC_DIR, pageFile), 'utf-8');
    assert(pageHtml.includes('name="viewport"') && pageHtml.includes('width=device-width'), \`Page \${pageFile} includes responsive viewport meta tag\`);
    assert(pageHtml.includes('lang=') && pageHtml.includes('dir='), \`Page \${pageFile} defines html lang and dir attributes\`);
    assert(pageHtml.includes('id="search-modal-btn"'), \`Page \${pageFile} includes canonical search trigger button\`);
    assert(pageHtml.includes('id="language-selector-btn"'), \`Page \${pageFile} includes canonical language trigger button\`);
    assert(pageHtml.includes('id="theme-toggle-btn"'), \`Page \${pageFile} includes canonical theme toggle button\`);
  });

`;

  testContent = testContent.replace(target, suite27Code + target);
  fs.writeFileSync('test/run-tests.js', testContent, 'utf8');
  console.log('Successfully appended Test Suite 27 to test/run-tests.js');
} else {
  console.log('Suite 27 already present in test/run-tests.js');
}
