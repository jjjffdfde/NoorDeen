const https = require('https');
const http = require('http');
const { URL } = require('url');

const targets = [
  { name: 'Quran.com', url: 'https://quran.com/' },
  { name: 'Sunnah.com', url: 'https://sunnah.com/' },
  { name: 'IslamQA.info', url: 'https://islamqa.info/en' },
  { name: 'IslamQA.org', url: 'https://islamqa.org/about/' },
  { name: 'Yaqeen Institute', url: 'https://yaqeeninstitute.org/' },
  { name: 'SeekersGuidance', url: 'https://seekersguidance.org/' },
  { name: 'Al-Islam.org', url: 'https://www.al-islam.org/' },
  { name: 'IslamicFinder', url: 'https://www.islamicfinder.org/' },
  { name: 'Tanzil', url: 'https://tanzil.net/' },
  { name: 'QuranEnc', url: 'https://quranenc.com/' }
];

async function checkUrl(target) {
  return new Promise((resolve) => {
    try {
      const u = new URL(target.url);
      const req = https.request({
        method: 'HEAD',
        hostname: u.hostname,
        path: u.pathname,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        timeout: 10000
      }, (res) => {
        resolve({
          name: target.name,
          url: target.url,
          status: res.statusCode,
          headers: {
            server: res.headers['server'],
            contentType: res.headers['content-type'],
            cfRay: res.headers['cf-ray']
          }
        });
      });
      req.on('error', (e) => {
        resolve({ name: target.name, url: target.url, error: e.message });
      });
      req.on('timeout', () => {
        req.destroy();
        resolve({ name: target.name, url: target.url, error: 'TIMEOUT' });
      });
      req.end();
    } catch (err) {
      resolve({ name: target.name, url: target.url, error: err.message });
    }
  });
}

(async () => {
  console.log('Testing connectivity to all 10 competitor reference sites...');
  const results = [];
  for (const t of targets) {
    const res = await checkUrl(t);
    results.push(res);
    console.log(`${res.name}: ${res.status || res.error}`);
  }
  console.log('\nDetailed results:');
  console.log(JSON.stringify(results, null, 2));
})();
