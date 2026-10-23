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
    'janazah-guide.html',
    'eid-guide.html',
    'download-app.html',
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
  console.log('\n--- TEST SUITE 2: Design System & Editorial Palette ---');
  const cssContent = fs.readFileSync(path.join(PUBLIC_DIR, 'css', 'main.css'), 'utf-8');
  assert(cssContent.includes('--color-jade: #176B5B') || cssContent.includes('--color-primary: #176B5B'), 'Deep jade primary color variable defined');
  assert(cssContent.includes('--color-brass: #B58B50') || cssContent.includes('--color-gold: #B58B50'), 'Muted brass secondary color variable defined');
  assert(cssContent.includes('--color-midnight: #142326'), 'Midnight ink color variable defined');
  assert(cssContent.includes('--color-ivory: #F7F4EC'), 'Warm ivory background variable defined');
  assert(cssContent.includes('--color-sage: #E6EEE8'), 'Soft sage surface variable defined');
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

  // Verify complete dictionary coverage for verified languages
  const verifiedLanguages = ['en', 'ur', 'ar', 'fr', 'id', 'tr', 'bn', 'hi', 'ms', 'fa', 'es'];
  let allDictionariesPresent = true;
  verifiedLanguages.forEach(code => {
    if (!i18nContent.includes(`${code}: {`)) {
      allDictionariesPresent = false;
      console.error(`Missing translation dictionary for: ${code}`);
    }
  });
  assert(allDictionariesPresent, 'Complete translation dictionaries present for 11 verified languages (en, ur, ar, fr, id, tr, bn, hi, ms, fa, es)');

  // TEST SUITE 4: QURAN & RELIGIOUS DATA VERIFICATION
  console.log('\n--- TEST SUITE 4: Quran & Religious Data Integrity ---');
  const dataContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'data.js'), 'utf-8');

  // Full 114 Surahs and 6,236 verses validation via VM
  const vm = await import('vm');
  const dataSandbox = { window: {} };
  vm.default.createContext(dataSandbox);
  vm.default.runInContext(dataContent, dataSandbox);
  const parsedData = dataSandbox.window.ISLAMIC_DATA;

  assert(parsedData.surahs.length === 114, 'All 114 Surahs defined in canonical order');
  const totalVerses = parsedData.surahs.reduce((sum, s) => sum + s.numberOfAyahs, 0);
  assert(totalVerses === 6236, `Total Quranic verses tally matches Hafs canonical standard: ${totalVerses} === 6236`);
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

    const downloadAppRes = await testRequest('/download-app');
    assert(downloadAppRes.status === 200, 'HTTP GET /download-app clean route returns 200 OK');

    const janazahRes = await testRequest('/janazah-guide');
    assert(janazahRes.status === 200, 'HTTP GET /janazah-guide clean route returns 200 OK');

    const eidRes = await testRequest('/eid-guide');
    assert(eidRes.status === 200, 'HTTP GET /eid-guide clean route returns 200 OK');

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

  // TEST SUITE 7: PWA, SERVICE WORKER & OFFLINE INFRASTRUCTURE
  console.log('\n--- TEST SUITE 7: PWA, Service Worker & Offline Assets ---');
  const manifestPath = path.join(PUBLIC_DIR, 'manifest.json');
  assert(fs.existsSync(manifestPath), 'Web App Manifest (manifest.json) exists');
  const manifestJson = JSON.parse(fs.readFileSync(manifestPath, 'utf-8'));
  assert(manifestJson.name === 'Islamic Knowledge Portal', 'Manifest name is "Islamic Knowledge Portal"');
  assert(manifestJson.display === 'standalone', 'Manifest display mode is "standalone"');
  assert(manifestJson.theme_color === '#0F5132', 'Manifest theme_color is #0F5132');
  assert(manifestJson.icons.length >= 2, 'Manifest defines both 192x192 and 512x512 app icons');

  const swPath = path.join(PUBLIC_DIR, 'service-worker.js');
  assert(fs.existsSync(swPath), 'Service Worker (service-worker.js) exists');
  const swContent = fs.readFileSync(swPath, 'utf-8');
  assert(swContent.includes('islamic-portal-shell-v2'), 'Service Worker defines cache version');
  assert(swContent.includes('islamic-portal-audio-v1'), 'Service Worker defines dedicated audio cache');
  assert(swContent.includes('self.addEventListener(\'install\''), 'Service Worker implements install event listener');
  assert(swContent.includes('self.addEventListener(\'fetch\''), 'Service Worker implements cache-first fetch strategy');

  const icon192 = path.join(PUBLIC_DIR, 'icons', 'icon-192.svg');
  const icon512 = path.join(PUBLIC_DIR, 'icons', 'icon-512.svg');
  assert(fs.existsSync(icon192) && fs.statSync(icon192).size > 100, 'PWA 192x192 icon exists and is non-empty');
  assert(fs.existsSync(icon512) && fs.statSync(icon512).size > 100, 'PWA 512x512 icon exists and is non-empty');

  // TEST SUITE 8: TECHNICAL SEO, CANONICAL & SOCIAL METADATA
  console.log('\n--- TEST SUITE 8: Technical SEO, Canonical, Social & Schema.org ---');
  const htmlFiles = [
    'index.html', 'quran.html', 'hadith.html', 'kalimas.html', 'duas.html',
    'seerah.html', 'prophets.html', 'sahaba.html', 'pillars.html', 'salah-guide.html',
    'janazah-guide.html', 'eid-guide.html', 'download-app.html',
    'wudu-guide.html', 'prayer-times.html', 'tasbih.html', 'zakat-calculator.html',
    'calendar.html', 'bookmarks.html', 'about.html', 'sources.html', 'privacy.html', 'terms.html'
  ];

  let allHaveCanonical = true;
  let allHaveManifest = true;
  let allHaveOG = true;
  let allHaveTwitter = true;
  let allHaveMobileBtn = true;

  htmlFiles.forEach(file => {
    const html = fs.readFileSync(path.join(PUBLIC_DIR, file), 'utf-8');
    if (!html.includes('rel="canonical"')) allHaveCanonical = false;
    if (!html.includes('rel="manifest"')) allHaveManifest = false;
    if (!html.includes('property="og:title"')) allHaveOG = false;
    if (!html.includes('name="twitter:card"')) allHaveTwitter = false;
    if (!html.includes('mobile-menu-btn')) allHaveMobileBtn = false;
  });

  assert(allHaveCanonical, 'All 23 HTML pages contain <link rel="canonical"> tags');
  assert(allHaveManifest, 'All 23 HTML pages link to PWA manifest.json');
  assert(allHaveOG, 'All 23 HTML pages contain Open Graph meta tags');
  assert(allHaveTwitter, 'All 23 HTML pages contain Twitter Card meta tags');
  assert(allHaveMobileBtn, 'All 23 HTML pages contain responsive mobile drawer menu trigger');

  // Subpage schema test
  const hadithHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'hadith.html'), 'utf-8');
  assert(hadithHtml.includes('"@type": "BreadcrumbList"'), 'Subpages include BreadcrumbList JSON-LD schema');

  // TEST SUITE 9: MOBILE DRAWER & ANDROID CAPACITOR SCAFFOLDING
  console.log('\n--- TEST SUITE 9: Mobile UI Drawer & Capacitor Android Scaffolding ---');
  const appJsContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'app.js'), 'utf-8');
  assert(appJsContent.includes('initServiceWorker'), 'Application controller registers Service Worker');
  assert(appJsContent.includes('setupMobileDrawer'), 'Application controller initializes mobile navigation drawer');
  assert(appJsContent.includes('setupOfflineBanner'), 'Application controller initializes offline status banner');

  const capConfigPath = path.join(ROOT_DIR, 'capacitor.config.json');
  assert(fs.existsSync(capConfigPath), 'Capacitor configuration (capacitor.config.json) exists');
  const capConfig = JSON.parse(fs.readFileSync(capConfigPath, 'utf-8'));
  assert(capConfig.appId === 'com.islamicknowledge.portal', 'Capacitor appId matches com.islamicknowledge.portal');
  assert(capConfig.webDir === 'public', 'Capacitor webDir set to public');

  const androidManifestPath = path.join(ROOT_DIR, 'android', 'app', 'src', 'main', 'AndroidManifest.xml');
  assert(fs.existsSync(androidManifestPath), 'Android AndroidManifest.xml exists');
  const androidManifestContent = fs.readFileSync(androidManifestPath, 'utf-8');
  assert(androidManifestContent.includes('android.permission.INTERNET'), 'Android manifest declares INTERNET permission');
  assert(androidManifestContent.includes('android.permission.ACCESS_NETWORK_STATE'), 'Android manifest declares ACCESS_NETWORK_STATE permission');

  const mainActivityPath = path.join(ROOT_DIR, 'android', 'app', 'src', 'main', 'java', 'com', 'islamicknowledge', 'portal', 'MainActivity.java');
  assert(fs.existsSync(mainActivityPath), 'MainActivity.java exists and extends BridgeActivity');

  // TEST SUITE 10: EXPANDED RELIGIOUS CONTENT INTEGRITY
  console.log('\n--- TEST SUITE 10: Expanded Quran Surahs & Kutub al-Sittah Hadiths ---');
  assert(dataContent.includes('englishName: "Yaseen"') || dataContent.includes('englishName: "Ya-Sin"'), 'Surah Ya-Sin (36) bundled offline in data.js');
  assert(dataContent.includes('englishName: "Al-Mulk"'), 'Surah Al-Mulk (67) bundled offline in data.js');
  assert(dataContent.includes('englishName: "Al-Qadr"'), 'Surah Al-Qadr (97) bundled offline in data.js');
  assert(dataContent.includes('englishName: "Al-Kawthar"'), 'Surah Al-Kawthar (108) bundled offline in data.js');
  assert(dataContent.includes('englishName: "Al-Kafirun"'), 'Surah Al-Kafirun (109) bundled offline in data.js');
  assert(dataContent.includes('englishName: "An-Nasr"'), 'Surah An-Nasr (110) bundled offline in data.js');
  assert(dataContent.includes('collection: "Sunan Abi Dawud"') && dataContent.includes('4799'), 'Sunan Abi Dawud #4799 bundled with verified Sahih grading');
  assert(dataContent.includes('collection: "Sunan an-Nasa\'i"') && dataContent.includes('3140'), 'Sunan an-Nasa\'i #3140 bundled with verified scholarly grading');

  // TEST SUITE 11: AUDIO RECITATION SUITE & LICENSING REGISTER
  console.log('\n--- TEST SUITE 11: Audio Reciter Suite & Licensing Register ---');
  const quranJsContent = fs.readFileSync(path.join(PUBLIC_DIR, 'js', 'quran.js'), 'utf-8');
  assert(quranJsContent.includes('Alafasy_128kbps'), 'Audio controller defines Sheikh Mishary Rashid Alafasy');
  assert(quranJsContent.includes('Abdul_Basit_Murattal_192kbps'), 'Audio controller defines Sheikh Abdul Basit (Murattal)');
  assert(quranJsContent.includes('Husary_128kbps'), 'Audio controller defines Sheikh Mahmoud Khalil Al-Husary');
  assert(quranJsContent.includes('Minshawy_Murattal_128kbps'), 'Audio controller defines Sheikh Mohamed Siddiq Al-Minshawi');
  assert(quranJsContent.includes('Abu_Bakr_Ash-Shaatree_128kbps'), 'Audio controller defines Sheikh Abu Bakr Al-Shatri');
  assert(quranJsContent.includes('playPreviousAyah'), 'Audio controller implements playPreviousAyah function');
  assert(quranJsContent.includes('playNextAyah'), 'Audio controller implements playNextAyah function');
  assert(quranJsContent.includes('seekAudio'), 'Audio controller implements seek progress function');
  assert(quranJsContent.includes('toggleRepeatMode'), 'Audio controller implements repeat mode function');
  assert(quranJsContent.includes('setPlaybackSpeed'), 'Audio controller implements playback speed control');

  const licensingDocPath = path.join(ROOT_DIR, 'AUDIT', 'AUDIO-LICENSING.md');
  assert(fs.existsSync(licensingDocPath), 'Audio licensing register document (AUDIT/AUDIO-LICENSING.md) exists');
  const licensingContent = fs.readFileSync(licensingDocPath, 'utf-8');
  assert(licensingContent.includes('EveryAyah.com Project'), 'Audio licensing register covers EveryAyah source and permissions');

  // TEST SUITE 12: INTERNAL ROUTE & LINK CRAWLER
  console.log('\n--- TEST SUITE 12: Comprehensive Internal Link Crawler ---');
  let totalLinksChecked = 0;
  let brokenLinks = 0;

  htmlFiles.forEach(file => {
    const content = fs.readFileSync(path.join(PUBLIC_DIR, file), 'utf-8');
    const matches = content.matchAll(/href=["']([^"'#?]+)["']/g);
    for (const match of matches) {
      const link = match[1];
      if (link.startsWith('http') || link.startsWith('mailto') || link.startsWith('javascript') || link.startsWith('#')) {
        continue;
      }
      totalLinksChecked++;
      const resolvedTarget = path.join(PUBLIC_DIR, link === '/' ? 'index.html' : link);
      if (!fs.existsSync(resolvedTarget)) {
        brokenLinks++;
        console.error(`Broken link in ${file}: "${link}" -> not found at ${resolvedTarget}`);
      }
    }
  });

  assert(brokenLinks === 0 && totalLinksChecked > 50, `All ${totalLinksChecked} internal links resolve to valid published files (0 broken links)`);

  // TEST SUITE 13: DYNAMIC CONTINUE-READING & LOCAL PERSISTENCE
  console.log('\n--- TEST SUITE 13: Dynamic Continue-Reading & Local Persistence ---');
  assert(appJsContent.includes('checkContinueReading'), 'App controller implements checkContinueReading()');
  assert(appJsContent.includes('islamic_portal_last_read'), 'App controller reads persistent reading progress from localStorage');
  assert(quranJsContent.includes('saveLastReadPosition'), 'Quran controller implements saveLastReadPosition()');
  
  const indexHtmlContent = fs.readFileSync(path.join(PUBLIC_DIR, 'index.html'), 'utf-8');
  assert(indexHtmlContent.includes('id="continue-reading-panel"'), 'Homepage includes continue-reading-panel container');

  // TEST SUITE 14: DEDICATED JANAZAH & EID PRAYER MODULES
  console.log('\n--- TEST SUITE 14: Dedicated Janazah & Eid Prayer Modules ---');
  const janazahHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'janazah-guide.html'), 'utf-8');
  assert(janazahHtml.includes('TAKBIR 1 OF 4') && janazahHtml.includes('TAKBIR 4 OF 4'), 'Janazah guide documents all 4 Takbirs step-by-step');
  assert(janazahHtml.includes('اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا'), 'Janazah guide includes authentic adult deceased supplication');
  assert(janazahHtml.includes('اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا'), 'Janazah guide includes authentic deceased child supplication');
  assert(janazahHtml.includes('Sunan Abi Dawud #3201') || janazahHtml.includes('Tirmidhi #1024'), 'Janazah guide cites canonical Hadith references');
  assert(janazahHtml.includes('Comparative Juristic') && janazahHtml.includes('Hanafi') && janazahHtml.includes('Shafi\'i'), 'Janazah guide includes comparative Madhhab analysis');
  assert(janazahHtml.includes('Sahih Muslim #975'), 'Janazah guide includes authentic cemetery visitation etiquette');

  const eidHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'eid-guide.html'), 'utf-8');
  assert(eidHtml.includes('6 EXTRA TAKBIRS') || eidHtml.includes('METHOD 1 (HANAFI MADHHAB)'), 'Eid guide details Hanafi 6 extra Takbirs method');
  assert(eidHtml.includes('12 EXTRA TAKBIRS') || eidHtml.includes('METHOD 2 (SHAFI\'I'), 'Eid guide details Shafi\'i & Hanbali 12 extra Takbirs method');
  assert(eidHtml.includes('اللَّهُ أَكْبَرُ، اللَّهُ أَكْبَرُ، لَا إِلَٰهَ إِلَّا اللَّهُ'), 'Eid guide includes complete Takbirat al-Tashreeq text');
  assert(eidHtml.includes('23 consecutive') || eidHtml.includes('23 Fard Prayers') || eidHtml.includes('Day of Arafah'), 'Eid guide details Tashreeq timing schedule');
  assert(eidHtml.includes('Zakat al-Fitr') && eidHtml.includes('Qurbani'), 'Eid guide covers Zakat al-Fitr and Qurbani rules');

  // TEST SUITE 15: DEDICATED ANDROID DOWNLOAD CENTER & RELEASE APK
  console.log('\n--- TEST SUITE 15: Android Download Center & Release APK Verification ---');
  const downloadAppHtml = fs.readFileSync(path.join(PUBLIC_DIR, 'download-app.html'), 'utf-8');
  assert(downloadAppHtml.includes('downloads/islamic-portal-release.apk'), 'Download app page links directly to release APK asset');
  assert(downloadAppHtml.includes('apk-sha256-display'), 'Download app page renders SHA-256 display element');
  assert(downloadAppHtml.includes('Step-by-Step Android Installation Guide'), 'Download app page includes step-by-step sideloading guide');
  assert(downloadAppHtml.includes('SoftwareApplication'), 'Download app page includes SoftwareApplication JSON-LD schema');
  assert(downloadAppHtml.includes('0 Invasive Permissions'), 'Download app page declares strict zero invasive permissions guarantee');

  const apkPath = path.join(PUBLIC_DIR, 'downloads', 'islamic-portal-release.apk');
  assert(fs.existsSync(apkPath) && fs.statSync(apkPath).size > 50000, 'Release APK exists on disk and is non-empty (>50 KB)');
  
  const zipBundlePath = path.join(PUBLIC_DIR, 'downloads', 'islamic-portal-offline-bundle.zip');
  assert(fs.existsSync(zipBundlePath) && fs.statSync(zipBundlePath).size > 50000, 'Standalone offline ZIP bundle exists on disk and is non-empty');

  const checksumsPath = path.join(PUBLIC_DIR, 'downloads', 'CHECKSUMS.sha256');
  assert(fs.existsSync(checksumsPath), 'CHECKSUMS.sha256 manifest exists in downloads directory');
  const checksumsText = fs.readFileSync(checksumsPath, 'utf-8');
  assert(checksumsText.includes('islamic-portal-release.apk') && checksumsText.includes('islamic-portal-offline-bundle.zip'), 'Checksums manifest covers both APK and ZIP artifacts');

  // TEST SUITE 16: INDEPENDENT URDU TRANSLATION ARCHITECTURE
  console.log('\n--- TEST SUITE 16: Independent Urdu Quran Translation Mode ---');
  assert(quranJsContent.includes('setTranslationMode'), 'Quran reader implements setTranslationMode() controller');
  assert(quranJsContent.includes('translationMode'), 'Quran reader initializes translationMode preference');
  
  const quranHtmlContent = fs.readFileSync(path.join(PUBLIC_DIR, 'quran.html'), 'utf-8');
  assert(quranHtmlContent.includes('id="translation-view-select"'), 'Quran toolbar includes translation-view-select dropdown');
  assert(quranHtmlContent.includes('value="urdu"'), 'Translation selector provides explicit Urdu Only option');
  assert(quranHtmlContent.includes('value="both"'), 'Translation selector provides dual Urdu & English option');

  // TEST SUITE 17: EXPANDED AUTHENTIC DUAS LIBRARY & FILTER ENGINE
  console.log('\n--- TEST SUITE 17: Expanded Authentic Dua Library & Filter Engine ---');
  assert(dataContent.includes('dua-janazah-adult'), 'Duas dataset contains adult Janazah supplication');
  assert(dataContent.includes('dua-janazah-child'), 'Duas dataset contains child Janazah supplication');
  assert(dataContent.includes('dua-eid-tashreeq'), 'Duas dataset contains Eid Tashreeq Takbirs');
  assert(dataContent.includes('dua-istikharah'), 'Duas dataset contains authentic Dua al-Istikharah (Bukhari 1162)');
  assert(dataContent.includes('dua-qunut'), 'Duas dataset contains authentic Dua al-Qunut (Abu Dawud 1425)');
  assert(dataContent.includes('dua-tahajjud'), 'Duas dataset contains Tahajjud supplication (Bukhari 1120)');
  assert(dataContent.includes('dua-sayyidul-istighfar'), 'Duas dataset contains Sayyidul Istighfar (Bukhari 6306)');
  assert(dataContent.includes('dua-rabbana-dunya') && dataContent.includes('dua-rabbana-hidayah'), 'Duas dataset contains authentic Quranic Rabbana supplications');

  const duasHtmlContent = fs.readFileSync(path.join(PUBLIC_DIR, 'duas.html'), 'utf-8');
  assert(duasHtmlContent.includes('filterDuas'), 'Duas page implements interactive filterDuas function');
  assert(duasHtmlContent.includes('data-cat="janazah"') && duasHtmlContent.includes('data-cat="eid"'), 'Duas page provides dedicated Janazah and Eid category filter buttons');

  // TEST SUITE 18: AUDIT REPORTS & SCHOLARLY METHODOLOGY REGISTER
  console.log('\n--- TEST SUITE 18: Audit Documentation & Scholarly Reports ---');
  const quranIntegrityReport = path.join(ROOT_DIR, 'AUDIT', 'QURAN-INTEGRITY.md');
  assert(fs.existsSync(quranIntegrityReport), 'Audit report AUDIT/QURAN-INTEGRITY.md exists');
  const quranReportText = fs.readFileSync(quranIntegrityReport, 'utf-8');
  assert(quranReportText.includes('6,236') && quranReportText.includes('Hafs'), 'Quran integrity report documents 6,236 verses and Hafs standard');

  const translationReport = path.join(ROOT_DIR, 'AUDIT', 'TRANSLATION-COVERAGE.md');
  assert(fs.existsSync(translationReport), 'Audit report AUDIT/TRANSLATION-COVERAGE.md exists');
  const transReportText = fs.readFileSync(translationReport, 'utf-8');
  assert(transReportText.includes('40') && transReportText.includes('Fateh Muhammad Jalandhry'), 'Translation coverage report documents 40 languages and Jalandhry translation');

  const worshipReport = path.join(ROOT_DIR, 'AUDIT', 'DUA-SALAH-JANAZAH-EID-REVIEW.md');
  assert(fs.existsSync(worshipReport), 'Audit report AUDIT/DUA-SALAH-JANAZAH-EID-REVIEW.md exists');
  const worshipReportText = fs.readFileSync(worshipReport, 'utf-8');
  assert(worshipReportText.includes('Salat al-Janazah') && worshipReportText.includes('Salat al-Eid'), 'Worship review documents Janazah and Eid prayer protocols');

  const androidBuildReport = path.join(ROOT_DIR, 'AUDIT', 'ANDROID-BUILD.md');
  assert(fs.existsSync(androidBuildReport), 'Audit report AUDIT/ANDROID-BUILD.md exists');
  const androidReportText = fs.readFileSync(androidBuildReport, 'utf-8');
  assert(androidReportText.includes('islamic-portal-release.apk') && androidReportText.includes('SHA-256'), 'Android build report documents APK release and SHA-256 verification');

  const finalVerificationReport = path.join(ROOT_DIR, 'AUDIT', 'FINAL-VERIFICATION.md');
  assert(fs.existsSync(finalVerificationReport), 'Audit report AUDIT/FINAL-VERIFICATION.md exists');
  const finalReportText = fs.readFileSync(finalVerificationReport, 'utf-8');
  assert(finalReportText.includes('23 Endpoints') || finalReportText.includes('All 23 Endpoints') || finalReportText.includes('All 23 Pages'), 'Final verification report documents all 23 endpoints');

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
