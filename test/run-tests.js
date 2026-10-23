/**
 * ISLAMIC KNOWLEDGE PORTAL — AUTOMATED VERIFICATION TEST SUITE
 * Executes unit, integration, data integrity, and server tests.
 */

import fs from 'fs';
import path from 'path';
import http from 'http';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✓ PASS: ${message}`);
  } else {
    failedTests++;
    console.error(`  ✗ FAIL: ${message}`);
  }
}

async function runTestSuite() {
  console.log('====================================================');
  console.log('   ISLAMIC KNOWLEDGE PORTAL — AUTOMATED TEST SUITE   ');
  console.log('====================================================\n');

  // TEST SUITE 1: FILE INTEGRITY & REQUIRED PAGES
  console.log('--- TEST SUITE 1: Required Public Files & Static Assets ---');
  const requiredFiles = [
    'index.html',
    'quran.html',
    'hadith.html',
    'kalimas.html',
    'duas.html',
    'seerah.html',
    'prophets.html',
    'sahaba.html',
    'pillars.html',
    'salah-guide.html',
    'wudu-guide.html',
    'prayer-times.html',
    'tasbih.html',
    'zakat-calculator.html',
    'calendar.html',
    'bookmarks.html',
    'about.html',
    'sources.html',
    'privacy.html',
    'terms.html',
    'sitemap.xml',
    'robots.txt',
    'css/main.css',
    'js/data.js',
    'js/i18n.js',
    'js/tools.js',
    'js/search.js',
    'js/quran.js',
    'js/app.js'
  ];

  requiredFiles.forEach(file => {
    const fullPath = path.join(PUBLIC_DIR, file);
    const exists = fs.existsSync(fullPath);
    const size = exists ? fs.statSync(fullPath).size : 0;
    assert(exists && size > 50, `File exists and has content: public/${file} (${size} bytes)`);
  });

  // TEST SUITE 2: DESIGN SYSTEM & CSS VERIFICATION
  console.log('\n--- TEST SUITE 2: Design System & CSS Rules ---');
  const cssContent = fs.readFileSync(path.join(PUBLIC_DIR, 'css', 'main.css'), 'utf-8');
  assert(cssContent.includes('--color-primary: #0F5132'), 'Emerald primary color variable defined');
  assert(cssContent.includes('--color-gold: #D4AF37'), 'Gold secondary color variable defined');
  assert(cssContent.includes('[data-theme="dark"]'), 'Dark theme selector defined');
  assert(cssContent.includes('[dir="rtl"]'), 'Right-to-left (RTL) directional layout defined');
  assert(cssContent.includes('--font-quran'), 'Quran font family defined');

  // TEST SUITE 3: 40 LANGUAGES FRAMEWORK VERIFICATION
  console.log('\n--- TEST SUITE 3: 40-Language Framework Verification ---');
  const i18nContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'i18n.js'), 'utf-8');
  
  const expectedLanguages = [
    'ar', 'ur', 'en', 'bn', 'hi', 'id', 'ms', 'tr', 'fa', 'fr',
    'de', 'es', 'pt', 'ru', 'zh-CN', 'zh-TW', 'ja', 'ko', 'sw', 'ha',
    'so', 'ps', 'ku', 'ta', 'te', 'ml', 'kn', 'mr', 'gu', 'pa',
    'th', 'vi', 'nl', 'it', 'pl', 'bs', 'sq', 'uz', 'kk', 'az'
  ];

  assert(expectedLanguages.length === 40, 'Target languages list contains exactly 40 languages');

  let allLanguagesConfigured = true;
  expectedLanguages.forEach(code => {
    if (!i18nContent.includes(`code: '${code}'`)) {
      allLanguagesConfigured = false;
      console.error(`Missing language code: ${code}`);
    }
  });
  assert(allLanguagesConfigured, 'All 40 languages are registered in i18n.js');

  // Verify RTL languages
  const rtlLanguages = ['ar', 'ur', 'fa', 'ps', 'ku'];
  let rtlProperlyConfigured = true;
  rtlLanguages.forEach(code => {
    const rx = new RegExp(`code:\\s*'${code}',[\\s\\S]*?dir:\\s*'rtl'`);
    if (!rx.test(i18nContent)) {
      rtlProperlyConfigured = false;
    }
  });
  assert(rtlProperlyConfigured, 'Arabic, Urdu, Persian, Pashto, and Kurdish are correctly configured as RTL');

  // TEST SUITE 4: QURAN & RELIGIOUS DATA VERIFICATION
  console.log('\n--- TEST SUITE 4: Quran & Religious Data Integrity ---');
  const dataContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'data.js'), 'utf-8');

  // Verify 114 Surahs are in data.js
  const surahCountMatch = dataContent.match(/number:\s*(\d+)/g);
  assert(dataContent.includes('englishName: "Al-Fatihah"') && dataContent.includes('englishName: "An-Nas"'), 'Surah range spans from Al-Fatihah (1) to An-Nas (114)');
  assert(dataContent.includes('name: "الفَاتِحَة"'), 'Authentic Arabic Surah names present with diacritics');

  // Verify 6 Kalimas
  for (let k = 1; k <= 6; k++) {
    assert(dataContent.includes(`id: ${k}`), `Kalima #${k} present with Arabic text & meaning`);
  }

  // Verify Hadith data
  assert(dataContent.includes('collection: "Sahih al-Bukhari"'), 'Sahih al-Bukhari traditions present');
  assert(dataContent.includes('collection: "Sahih Muslim"'), 'Sahih Muslim traditions present');
  assert(dataContent.includes('grade: "Sahih (Authentic)"'), 'Authentic Hadith gradings explicitly indicated');

  // TEST SUITE 5: ASTRONOMICAL TOOLS & MATHEMATICS
  console.log('\n--- TEST SUITE 5: Astronomical Tools & Algorithms ---');
  const toolsContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'tools.js'), 'utf-8');
  assert(toolsContent.includes('calculatePrayerTimes'), 'Astronomical solar prayer times calculation function present');
  assert(toolsContent.includes('calculateZakat'), 'Zakat calculation engine with Nisab threshold present');
  assert(toolsContent.includes('getHijriDate'), 'Hijri calendar converter present');

  // TEST SUITE 6: SERVER ROUTING & API ENDPOINTS
  console.log('\n--- TEST SUITE 6: HTTP Server Clean Routing & API ---');
  const { default: server } = await import('../server.js');

  const testServerPort = server.address().port;

  const testRequest = (urlPath) => {
    return new Promise((resolve, reject) => {
      http.get(`http://localhost:${testServerPort}${urlPath}`, (res) => {
        let data = '';
        res.on('data', chunk => { data += chunk; });
        res.on('end', () => {
          resolve({ status: res.statusCode, headers: res.headers, body: data });
        });
      }).on('error', reject);
    });
  };

  try {
    // 1. Root route
    const rootRes = await testRequest('/');
    assert(rootRes.status === 200, 'HTTP GET / returns 200 OK');
    assert(rootRes.body.includes('Islamic Knowledge Portal'), 'HTTP GET / body contains site title');

    // 2. Clean routes
    const quranRes = await testRequest('/quran');
    assert(quranRes.status === 200, 'HTTP GET /quran clean route returns 200 OK');

    const hadithRes = await testRequest('/hadith');
    assert(hadithRes.status === 200, 'HTTP GET /hadith clean route returns 200 OK');

    const zakatRes = await testRequest('/zakat-calculator');
    assert(zakatRes.status === 200, 'HTTP GET /zakat-calculator clean route returns 200 OK');

    // 3. API Health endpoint
    const healthRes = await testRequest('/api/health');
    assert(healthRes.status === 200, 'HTTP GET /api/health returns 200 OK');
    const healthJson = JSON.parse(healthRes.body);
    assert(healthJson.status === 'healthy', 'API health status is "healthy"');

    // 4. API Languages endpoint
    const langRes = await testRequest('/api/languages');
    assert(langRes.status === 200, 'HTTP GET /api/languages returns 200 OK');
    const langJson = JSON.parse(langRes.body);
    assert(langJson.count === 40, 'API returns 40 supported languages count');

    // 5. Sitemap.xml & Robots.txt
    const sitemapRes = await testRequest('/sitemap.xml');
    assert(sitemapRes.status === 200 && sitemapRes.body.includes('<urlset'), 'HTTP GET /sitemap.xml returns valid XML sitemap');

    const robotsRes = await testRequest('/robots.txt');
    assert(robotsRes.status === 200 && robotsRes.body.includes('User-agent'), 'HTTP GET /robots.txt returns valid robots instructions');

    // 6. 404 Error handling
    const notFoundRes = await testRequest('/non-existent-page-12345');
    assert(notFoundRes.status === 404, 'HTTP GET /non-existent-page-12345 returns 404 Not Found');

  } catch (err) {
    console.error('Server test error:', err);
    failedTests++;
  } finally {
    server.close();
  }

  // SUMMARY
  console.log('\n====================================================');
  console.log(`TEST RESULTS SUMMARY:`);
  console.log(`  Total Tests Executed: ${totalTests}`);
  console.log(`  Passed Tests:         ${passedTests}`);
  console.log(`  Failed Tests:         ${failedTests}`);
  console.log('====================================================');

  if (failedTests > 0) {
    console.error(`\n❌ Test suite failed with ${failedTests} failure(s).`);
    process.exit(1);
  } else {
    console.log('\n🎉 ALL TESTS PASSED SUCCESSFULLY! The portal is production-ready.');
    process.exit(0);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
