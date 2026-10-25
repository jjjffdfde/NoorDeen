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
    ws.onopen = () => {
      resolve({
        send(method, params = {}) {
          return new Promise((res, rej) => {
            const msgId = id++;
            pending.set(msgId, { res, rej });
            ws.send(JSON.stringify({ id: msgId, method, params }));
          });
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
          resolve(list.find(t => t.type === 'page') || list[0]);
        } catch(e) { reject(e); }
      });
    }).on('error', reject);
  });
}

const DESKTOP_VIEWPORTS = [
  { name: 'Full HD Desktop', width: 1920, height: 1080 },
  { name: 'Standard Laptop', width: 1366, height: 768 },
  { name: 'Small Laptop', width: 1280, height: 800 },
  { name: 'Tablet Landscape / Small Desktop', width: 1024, height: 768 }
];

const PAGES = [
  '/salah-guide.html',
  '/wudu-guide.html',
  '/janazah-guide.html',
  '/eid-guide.html',
  '/pillars.html'
];

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-worship-audit-fixed-'));
  const port = 3028;
  const cdpPort = 9248;

  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: String(port) },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    `--remote-debugging-port=${cdpPort}`,
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  try {
    const tab = await getExistingTab(cdpPort);
    const session = await createCdpSession(tab.webSocketDebuggerUrl);
    await session.send('Page.enable');

    console.log('=== RUNNING VERIFIED WORSHIP GUIDE DESKTOP AUDIT ===\n');

    for (const page of PAGES) {
      console.log(`\n------------------ Page: ${page} ------------------`);
      for (const vp of DESKTOP_VIEWPORTS) {
        await session.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: false
        });

        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}${page}` });
        // wait for DOM ready and css rendering
        await new Promise(r => setTimeout(r, 600));

        const checkResult = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const hasHScroll = docEl.scrollWidth > window.innerWidth;
              const toc = document.querySelector('.sticky-toc-wrapper');
              const container = document.querySelector('.editorial-page-container');
              const content = document.querySelector('.editorial-content-body');
              const desktopNav = document.querySelector('.desktop-nav');
              const mobileBtn = document.querySelector('.mobile-menu-btn');
              
              const tocDisplay = toc ? window.getComputedStyle(toc).display : 'none';
              const tocRect = toc ? toc.getBoundingClientRect() : null;
              const containerDisplay = container ? window.getComputedStyle(container).display : 'none';
              const containerWidth = container ? container.getBoundingClientRect().width : 0;
              const contentWidth = content ? content.getBoundingClientRect().width : 0;
              const navDisplay = desktopNav ? window.getComputedStyle(desktopNav).display : 'none';
              const mobileBtnDisplay = mobileBtn ? window.getComputedStyle(mobileBtn).display : 'none';

              return {
                viewport: { w: window.innerWidth, h: window.innerHeight },
                scrollWidth: docEl.scrollWidth,
                hasHScroll,
                containerDisplay,
                containerWidth: Math.round(containerWidth),
                tocDisplay,
                tocWidth: tocRect ? Math.round(tocRect.width) : 0,
                contentWidth: Math.round(contentWidth),
                navDisplay,
                mobileBtnDisplay
              };
            })()
          `,
          returnByValue: true
        });

        const r = checkResult.result.value;
        console.log(`[${vp.name} (${vp.width}x${vp.height})]`);
        console.log(`  H-Scroll: ${r.hasHScroll ? 'FAIL (ScrollWidth: ' + r.scrollWidth + ')' : 'PASS'}`);
        console.log(`  Container: display=${r.containerDisplay}, width=${r.containerWidth}px`);
        console.log(`  TOC Sidebar: display=${r.tocDisplay}, width=${r.tocWidth}px`);
        console.log(`  Content Body: width=${r.contentWidth}px`);
        console.log(`  Nav Mode: desktopNav=${r.navDisplay}, mobileBtn=${r.mobileBtnDisplay}`);
      }
    }
  } catch (err) {
    console.error('Audit Error:', err);
  } finally {
    try { chromeProc.kill(); } catch (e) {}
    try { serverProc.kill(); } catch (e) {}
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
