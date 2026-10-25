const https = require('https');

const urls = [
  'https://jjjffdfde.github.io/NoorDeen/',
  'https://jjjffdfde.github.io/NoorDeen/hadith.html',
  'https://jjjffdfde.github.io/NoorDeen/duas.html',
  'https://jjjffdfde.github.io/NoorDeen/sahaba.html',
  'https://jjjffdfde.github.io/NoorDeen/download-app.html',
  'https://jjjffdfde.github.io/NoorDeen/downloads/CHECKSUMS.sha256',
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
