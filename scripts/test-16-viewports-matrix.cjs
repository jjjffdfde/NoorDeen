const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

function createCdpSession(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 1;
    const pending = new Map();
    const eventListeners = new Map();
    ws.onopen = () => {
      resolve({
        send(method, params = {}) {
          return new Promise((res, rej) => {
            const msgId = id++;
            pending.set(msgId, { res, rej });
            ws.send(JSON.stringify({ id: msgId, method, params }));
          });
        },
        on(event, handler) {
          if (!eventListeners.has(event)) eventListeners.set(event, []);
          eventListeners.get(event).push(handler);
        },
        close() { ws.close(); }
      });
    };
    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) rej(new Error(msg.error.message));
        else res(msg.result);
      } else if (msg.method && eventListeners.has(msg.method)) {
        eventListeners.get(msg.method).forEach(h => h(msg.params));
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
          const tab = list.find(t => t.type === 'page') || list[0];
          resolve(tab);
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

const VIEWPORTS = [
  { name: 'iPhone SE 1st Gen', width: 320, height: 568, isMobile: true, dpr: 2.0 },
  { name: 'Standard Android / Galaxy S5', width: 360, height: 640, isMobile: true, dpr: 2.625 },
  { name: 'Galaxy A Series (Tall)', width: 360, height: 800, isMobile: true, dpr: 2.625 },
  { name: 'iPhone 8 / SE 2nd & 3rd Gen', width: 375, height: 667, isMobile: true, dpr: 2.0 },
  { name: 'iPhone 12 / 13 / 14 / 15', width: 390, height: 844, isMobile: true, dpr: 3.0 },
  { name: 'Pixel 7 / Galaxy S21', width: 412, height: 915, isMobile: true, dpr: 2.625 },
  { name: 'iPhone XR / 11', width: 414, height: 896, isMobile: true, dpr: 2.0 },
  { name: 'iPhone 13 / 14 Pro Max', width: 428, height: 926, isMobile: true, dpr: 3.0 },
  { name: 'Android WVGA', width: 480, height: 800, isMobile: true, dpr: 1.5 },
  { name: 'qHD Screen', width: 540, height: 960, isMobile: true, dpr: 1.5 },
  { name: '7-inch Tablet Portrait', width: 600, height: 960, isMobile: true, dpr: 1.5 },
  { name: 'iPad Portrait', width: 768, height: 1024, isMobile: false, dpr: 2.0 },
  { name: '10-inch Android Tablet Portrait', width: 800, height: 1280, isMobile: false, dpr: 1.5 },
  { name: 'iPad Landscape', width: 1024, height: 768, isMobile: false, dpr: 2.0 },
  { name: 'Small Laptop / Tablet Landscape', width: 1280, height: 800, isMobile: false, dpr: 1.0 },
  { name: 'Full HD Desktop', width: 1920, height: 1080, isMobile: false, dpr: 1.0 }
];

async function runMatrix() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-matrix-'));
  
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3017' },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9239',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  const matrixResults = [];

  try {
    const tab = await getExistingTab(9239);
    const session = await createCdpSession(tab.webSocketDebuggerUrl);
    await session.send('Page.enable');
    await session.send('DOM.enable');

    const testRoutes = [
      '/',
      '/quran.html',
      '/hadith.html',
      '/salah-guide.html',
      '/prayer-times.html',
      '/seerah.html',
      '/prophets.html',
      '/sahaba.html',
      '/history.html',
      '/zakat-calculator.html',
      '/contact.html',
      '/download-app.html'
    ];

    console.log('========================================================================');
    console.log('   ISLAMIC KNOWLEDGE PORTAL — 16-VIEWPORT COMPATIBILITY MATRIX AUDIT   ');
    console.log('========================================================================\n');

    for (const vp of VIEWPORTS) {
      await session.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: vp.dpr,
        mobile: vp.isMobile
      });

      let vpAllPass = true;
      const routeDetails = [];

      for (const route of testRoutes) {
        const loadPromise = new Promise(resolve => {
          session.on('Page.loadEventFired', resolve);
        });
        await session.send('Page.navigate', { url: `http://127.0.0.1:3017${route}` });
        await loadPromise;
        await new Promise(r => setTimeout(r, 200));

        const evalRes = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const targetW = ${vp.width};
              const docSw = document.documentElement.scrollWidth;
              const docCw = document.documentElement.clientWidth;
              const hi = document.querySelector('.header-inner');
              const hiSw = hi ? hi.scrollWidth : 0;
              const menuBtn = document.querySelector('.mobile-menu-btn');
              const menuRight = menuBtn && window.getComputedStyle(menuBtn).display !== 'none'
                ? Math.round(menuBtn.getBoundingClientRect().right)
                : 0;
              const bottomNav = document.querySelector('.mobile-bottom-nav');
              const bottomNavVisible = bottomNav && window.getComputedStyle(bottomNav).display !== 'none';
              
              const pass = (docSw <= targetW + 1) && (menuRight <= targetW + 1);

              return JSON.stringify({
                docSW: docSw,
                headerSW: hiSw,
                menuRight: menuRight,
                bottomNavVisible: bottomNavVisible,
                pass: pass
              });
            })()
          `,
          returnByValue: true
        });

        const r = JSON.parse(evalRes.result.value);
        if (!r.pass) vpAllPass = false;
        routeDetails.push({ route, ...r });
      }

      matrixResults.push({
        viewport: vp,
        allPass: vpAllPass,
        routes: routeDetails
      });

      const icon = vpAllPass ? '✅ PASS' : '❌ FAIL';
      console.log(`[Viewport ${vp.width}x${vp.height.toString().padEnd(4)}] ${vp.name.padEnd(34)} | ${icon}`);
    }

    fs.writeFileSync(
      path.join(__dirname, '..', 'AUDIT', 'PHASE-11', 'viewport-matrix-raw.json'),
      JSON.stringify(matrixResults, null, 2),
      'utf-8'
    );

    console.log('\n--- Viewport Matrix Audit Complete: All 16 viewports tested ---');
    session.close();
  } finally {
    chromeProc.kill();
    serverProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

runMatrix().catch(console.error);
