const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function createCdpSession(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 1;
    const pending = new Map();

    ws.onopen = () => {
      resolve({
        send(method, params = {}) {
          return new Promise((res, rej) => {
            const msgId = id++;
            pending.set(msgId, { res, rej });
            ws.send(JSON.stringify({ id: msgId, method, params }));
          });
        },
        close() {
          ws.close();
        }
      });
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) rej(new Error(msg.error.message));
        else res(msg.result);
      }
    };

    ws.onerror = (err) => reject(err);
  });
}

function getExistingTab(port) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json/list`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const list = JSON.parse(data);
          if (list.length > 0) resolve(list[0]);
          else reject(new Error('No tabs available'));
        } catch(e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

async function runDiagnosis() {
  console.log('--- Starting server.js on port 3001 ---');
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3001' },
    stdio: 'ignore'
  });

  await new Promise(r => setTimeout(r, 1200));

  console.log('--- Starting Chrome Headless on port 9223 ---');
  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9223',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    'http://localhost:3001/'
  ], { stdio: 'ignore' });

  await new Promise(r => setTimeout(r, 1500));

  try {
    const targetInfo = await getExistingTab(9223);
    console.log('Connected to Chrome tab:', targetInfo.id, targetInfo.title);
    const session = await createCdpSession(targetInfo.webSocketDebuggerUrl);

    await session.send('Page.enable');
    await session.send('DOM.enable');

    const testPages = [
      '/',
      '/quran.html',
      '/seerah.html',
      '/sahaba.html',
      '/prophets.html',
      '/history.html',
      '/salah-guide.html',
      '/wudu-guide.html',
      '/prayer-times.html',
      '/zakat-calculator.html',
      '/download-app.html'
    ];

    const testViewports = [
      { width: 320, height: 568, name: '320x568 (iPhone SE)' },
      { width: 360, height: 640, name: '360x640 (Galaxy S / Moto G)' },
      { width: 375, height: 667, name: '375x667 (iPhone 8/SE2)' },
      { width: 390, height: 844, name: '390x844 (iPhone 14)' },
      { width: 412, height: 915, name: '412x915 (Pixel 7)' },
      { width: 540, height: 720, name: '540x720 (Surface Duo)' },
      { width: 768, height: 1024, name: '768x1024 (iPad Mini)' },
      { width: 1024, height: 768, name: '1024x768 (Desktop/Tablet)' }
    ];

    const findings = [];

    for (const pagePath of testPages) {
      console.log(`\n========================================`);
      console.log(`TESTING PAGE: ${pagePath}`);
      console.log(`========================================`);

      for (const vp of testViewports) {
        await session.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: vp.width <= 768
        });

        await session.send('Page.navigate', { url: `http://localhost:3001${pagePath}` });
        await new Promise(r => setTimeout(r, 500));

        const evalRes = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const sw = document.documentElement.scrollWidth;
              const cw = document.documentElement.clientWidth;
              const overflows = sw > cw;

              const culprits = [];
              const all = document.querySelectorAll('*');
              all.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.right > cw + 1) {
                  let sel = el.tagName.toLowerCase();
                  if (el.id) sel += '#' + el.id;
                  else if (el.className && typeof el.className === 'string') {
                    sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
                  }
                  culprits.push({
                    selector: sel,
                    tagName: el.tagName,
                    right: Math.round(rect.right),
                    width: Math.round(rect.width),
                    excess: Math.round(rect.right - cw)
                  });
                }
              });

              const headerInner = document.querySelector('.header-inner');
              const headerSw = headerInner ? headerInner.scrollWidth : 0;
              const headerCw = headerInner ? headerInner.clientWidth : 0;

              return {
                scrollWidth: sw,
                clientWidth: cw,
                overflows: overflows,
                headerInner: { scrollWidth: headerSw, clientWidth: headerCw },
                culpritCount: culprits.length,
                topCulprits: culprits.sort((a,b) => b.excess - a.excess).slice(0, 5)
              };
            })()
          `,
          returnByValue: true
        });

        const res = evalRes.result.value;
        const status = res.overflows ? 'FAIL (OVERFLOW)' : 'PASS (STABLE)';
        console.log(`  [${vp.name}] -> sw: ${res.scrollWidth}px, cw: ${res.clientWidth}px | ${status}`);
        if (res.overflows) {
          console.log(`    Header Inner: sw=${res.headerInner.scrollWidth}px vs cw=${res.headerInner.clientWidth}px`);
          console.log(`    Culprits count: ${res.culpritCount}`);
          res.topCulprits.forEach(c => {
            console.log(`      * ${c.selector}: width=${c.width}px, right=${c.right}px (+${c.excess}px over viewport)`);
          });
          findings.push({
            page: pagePath,
            viewport: vp.name,
            scrollWidth: res.scrollWidth,
            clientWidth: res.clientWidth,
            excess: res.scrollWidth - res.clientWidth,
            headerInner: res.headerInner,
            culprits: res.topCulprits
          });
        }
      }
    }

    session.close();
    console.log('\n=== DIAGNOSIS COMPLETE ===');
    console.log(`Total overflow failures recorded: ${findings.length}`);

    fs.writeFileSync(
      path.join(__dirname, '..', 'AUDIT', 'PHASE-11', 'raw-overflow-findings.json'),
      JSON.stringify(findings, null, 2),
      'utf-8'
    );

  } finally {
    chromeProc.kill();
    serverProc.kill();
  }
}

runDiagnosis().catch(err => {
  console.error('Fatal diagnosis error:', err);
  process.exit(1);
});
