const https = require('https');

const urls = [
  'https://jjjffdfde.github.io/NoorDeen/',
  'https://jjjffdfde.github.io/NoorDeen/hadith.html',
  'https://jjjffdfde.github.io/NoorDeen/duas.html',
  'https://jjjffdfde.github.io/NoorDeen/sahaba.html',
  'https://jjjffdfde.github.io/NoorDeen/download-app.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/',
  'https://jjjffdfde.github.io/NoorDeen/articles/beginners-guide-to-islam.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/how-to-read-and-understand-quran.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/quran-translation-vs-tafsir.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/tawhid-and-the-shahadah.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/five-pillars-of-islam.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/salah-complete-beginners-guide.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/wudu-ghusl-tayammum-guide.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/hadith-and-sunnah-authenticity.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/daily-adhkar-and-supplications.html',
  'https://jjjffdfde.github.io/NoorDeen/articles/zakat-educational-calculation-guide.html',
  'https://jjjffdfde.github.io/NoorDeen/downloads/CHECKSUMS.sha256',
  'https://jjjffdfde.github.io/NoorDeen/downloads/islamic-portal-offline-bundle.zip',
  'https://jjjffdfde.github.io/NoorDeen/downloads/islamic-portal-release.apk'
];

async function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'NoorDeen-Verifier/1.0' } }, (res) => {
      resolve({
        url,
        statusCode: res.statusCode,
        contentLength: res.headers['content-length'] || 'chunked',
        lastModified: res.headers['last-modified'] || res.headers['date'],
        etag: res.headers['etag']
      });
    });
    req.on('error', (err) => resolve({ url, error: err.message }));
    req.setTimeout(8000, () => {
      req.destroy();
      resolve({ url, error: 'TIMEOUT' });
    });
    req.end();
  });
}

async function run() {
  console.log('Checking live deployment endpoints...');
  for (const url of urls) {
    const res = await checkUrl(url);
    console.log(JSON.stringify(res));
  }
}

run();
