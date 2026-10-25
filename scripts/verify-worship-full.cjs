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
  { name: '1024x768 (Tablet Landscape / Netbook)', width: 1024, height: 768 },
  { name: '1280x800 (Compact Laptop)', width: 1280, height: 800 },
  { name: '1366x768 (Mainstream Laptop)', width: 1366, height: 768 },
  { name: '1440x900 (High-Res Laptop)', width: 1440, height: 900 },
  { name: '1600x900 (HD+ Desktop)', width: 1600, height: 900 },
  { name: '1920x1080 (Full HD Desktop)', width: 1920, height: 1080 }
];

const MOBILE_VIEWPORTS = [
  { name: '320x640 (Ultra-compact Mobile)', width: 320, height: 640 },
  { name: '360x800 (Android Standard)', width: 360, height: 800 },
  { name: '390x844 (iPhone Standard)', width: 390, height: 844 },
  { name: '414x896 (iPhone Plus)', width: 414, height: 896 },
  { name: '768x1024 (Tablet Portrait)', width: 768, height: 1024 }
];

const PAGES = [
  'salah-guide.html',
  'wudu-guide.html',
  'janazah-guide.html',
  'eid-guide.html',
  'pillars.html'
];

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-worship-full-'));
  const port = 3040;
  const cdpPort = 9260;

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

    console.log('===================================================================');
    console.log(' VERIFYING ALL 5 WORSHIP GUIDE PAGES & DROPDOWN ACROSS ALL VIEWPORTS');
    console.log('===================================================================\n');

    let allPassed = true;

    for (const page of PAGES) {
      console.log(`\n=================== PAGE: /${page} ===================`);
      
      // Test Desktop Viewports
      for (const vp of DESKTOP_VIEWPORTS) {
        await session.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: false
        });

        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/${page}` });
        await new Promise(r => setTimeout(r, 500));

        const res = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const hasHScroll = docEl.scrollWidth > window.innerWidth;
              const container = document.querySelector('.editorial-page-container');
              const toc = document.querySelector('.sticky-toc-wrapper');
              const body = document.querySelector('.editorial-content-body');
              const desktopNav = document.querySelector('.desktop-nav');
              const mobileBtn = document.querySelector('.mobile-menu-btn');

              // Dropdown check
              const dropdowns = Array.from(document.querySelectorAll('.desktop-nav .nav-dropdown'));
              const worshipDropdown = dropdowns.find(d => {
                const btn = d.querySelector('.nav-btn');
                return btn && (btn.textContent.includes('Worship') || btn.querySelector('[data-i18n=\"navWorship\"]'));
              });

              let dropdownStats = null;
              if (worshipDropdown) {
                const btn = worshipDropdown.querySelector('.nav-btn');
                const menu = worshipDropdown.querySelector('.nav-dropdown-menu');
                menu.style.display = 'flex';
                const rect = menu.getBoundingClientRect();
                const items = Array.from(menu.querySelectorAll('.nav-dropdown-item')).map(a => a.textContent.trim());
                dropdownStats = {
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  width: Math.round(rect.width),
                  outLeft: rect.left < 0,
                  outRight: rect.right > window.innerWidth,
                  itemCount: items.length
                };
                menu.style.display = '';
              }

              return {
                hasHScroll,
                scrollWidth: docEl.scrollWidth,
                containerDisplay: container ? window.getComputedStyle(container).display : 'none',
                containerWidth: container ? Math.round(container.getBoundingClientRect().width) : 0,
                tocDisplay: toc ? window.getComputedStyle(toc).display : 'none',
                tocWidth: toc ? Math.round(toc.getBoundingClientRect().width) : 0,
                bodyWidth: body ? Math.round(body.getBoundingClientRect().width) : 0,
                desktopNavDisplay: desktopNav ? window.getComputedStyle(desktopNav).display : 'none',
                mobileBtnDisplay: mobileBtn ? window.getComputedStyle(mobileBtn).display : 'none',
                dropdownStats
              };
            })()
          `,
          returnByValue: true
        });

        const r = res.result.value;
        const pass = !r.hasHScroll && (r.desktopNavDisplay !== 'none') && (r.dropdownStats && !r.dropdownStats.outRight);
        if (!pass) allPassed = false;

        console.log(`[DESKTOP ${vp.name}]`);
        console.log(`  Layout: Container=${r.containerDisplay} (${r.containerWidth}px), TOC=${r.tocDisplay} (${r.tocWidth}px), Body=${r.bodyWidth}px`);
        console.log(`  Nav: DesktopNav=${r.desktopNavDisplay}, MobileBtn=${r.mobileBtnDisplay}`);
        console.log(`  Dropdown: items=${r.dropdownStats ? r.dropdownStats.itemCount : 0}, width=${r.dropdownStats ? r.dropdownStats.width : 0}px, outRight=${r.dropdownStats ? r.dropdownStats.outRight : true}`);
        console.log(`  H-Scroll: ${r.hasHScroll ? 'FAIL (' + r.scrollWidth + 'px)' : 'PASS (0px overflow)'}`);
      }

      // Test Mobile Viewports
      for (const mv of MOBILE_VIEWPORTS) {
        await session.send('Emulation.setDeviceMetricsOverride', {
          width: mv.width,
          height: mv.height,
          deviceScaleFactor: 2,
          mobile: true
        });

        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/${page}` });
        await new Promise(r => setTimeout(r, 400));

        const mRes = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const hasHScroll = docEl.scrollWidth > window.innerWidth;
              const mobileBtn = document.querySelector('.mobile-menu-btn');
              const desktopNav = document.querySelector('.desktop-nav');
              const container = document.querySelector('.editorial-page-container');
              const body = document.querySelector('.editorial-content-body');

              return {
                hasHScroll,
                scrollWidth: docEl.scrollWidth,
                mobileBtnDisplay: mobileBtn ? window.getComputedStyle(mobileBtn).display : 'none',
                desktopNavDisplay: desktopNav ? window.getComputedStyle(desktopNav).display : 'none',
                containerDisplay: container ? window.getComputedStyle(container).display : 'none',
                bodyWidth: body ? Math.round(body.getBoundingClientRect().width) : 0
              };
            })()
          `,
          returnByValue: true
        });

        const mr = mRes.result.value;
        const mPass = !mr.hasHScroll;
        if (!mPass) allPassed = false;

        console.log(`[MOBILE ${mv.name}] H-Scroll: ${mr.hasHScroll ? 'FAIL (' + mr.scrollWidth + 'px)' : 'PASS (0px)'}, MobileBtn: ${mr.mobileBtnDisplay}, BodyWidth: ${mr.bodyWidth}px`);
      }
    }

    console.log(`\n===================================================================`);
    console.log(`FINAL RESULT: ${allPassed ? 'ALL VIEWPORTS PASSED SUCCESSFULLY!' : 'SOME VIEWPORTS FAILED'}`);
    console.log(`===================================================================`);

  } catch (err) {
    console.error('Audit Error:', err);
  } finally {
    try { chromeProc.kill(); } catch (e) {}
    try { serverProc.kill(); } catch (e) {}
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
