/**
 * Master Build Script: Generates all 10 articles and the articles index into public/articles/
 */

const fs = require('fs');
const path = require('path');

const { getArticleIndexHtml } = require('./articles/article-index.cjs');
const { getArticle1 } = require('./articles/article-1.cjs');
const { getArticle2 } = require('./articles/article-2.cjs');
const { getArticle3 } = require('./articles/article-3.cjs');
const { getArticle4 } = require('./articles/article-4.cjs');
const { getArticle5 } = require('./articles/article-5.cjs');
const { getArticle6 } = require('./articles/article-6.cjs');
const { getArticle7 } = require('./articles/article-7.cjs');
const { getArticle8 } = require('./articles/article-8.cjs');
const { getArticle9 } = require('./articles/article-9.cjs');
const { getArticle10 } = require('./articles/article-10.cjs');

const TARGET_DIR = path.join(__dirname, '..', 'public', 'articles');

if (!fs.existsSync(TARGET_DIR)) {
  fs.mkdirSync(TARGET_DIR, { recursive: true });
}

const filesToBuild = [
  { file: 'index.html', html: getArticleIndexHtml() },
  { file: 'beginners-guide-to-islam.html', html: getArticle1() },
  { file: 'how-to-read-and-understand-quran.html', html: getArticle2() },
  { file: 'quran-translation-vs-tafsir.html', html: getArticle3() },
  { file: 'tawhid-and-the-shahadah.html', html: getArticle4() },
  { file: 'five-pillars-of-islam.html', html: getArticle5() },
  { file: 'salah-complete-beginners-guide.html', html: getArticle6() },
  { file: 'wudu-ghusl-tayammum-guide.html', html: getArticle7() },
  { file: 'hadith-and-sunnah-authenticity.html', html: getArticle8() },
  { file: 'daily-adhkar-and-supplications.html', html: getArticle9() },
  { file: 'zakat-educational-calculation-guide.html', html: getArticle10() }
];

console.log('Writing 11 article files into ' + TARGET_DIR + '...');

let totalWords = 0;

filesToBuild.forEach(item => {
  const dest = path.join(TARGET_DIR, item.file);
  fs.writeFileSync(dest, item.html, 'utf8');
  const text = item.html.replace(/<[^>]+>/g, ' ');
  const words = text.split(/\s+/).filter(Boolean).length;
  totalWords += words;
  console.log(`✓ Generated ${item.file} (~${words} words, ${Buffer.byteLength(item.html)} bytes)`);
});

console.log(`\n🎉 All 11 files successfully written! Total article words: ~${totalWords}`);
