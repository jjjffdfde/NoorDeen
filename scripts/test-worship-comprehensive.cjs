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
    const eventHandlers = new Map();

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
          eventHandlers.set(event, handler);
        },
        close() { ws.close(); }
      });
    };

    ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.method && eventHandlers.has(msg.method)) {
        eventHandlers.get(msg.method)(msg.params);
      }
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
  { file: 'salah-guide.html', name: 'Five Daily Prayers Salah Guide' },
  { file: 'wudu-guide.html', name: 'Step-by-Step Wudu Guide' },
  { file: 'janazah-guide.html', name: 'Funeral Prayer Janazah Guide' },
  { file: 'eid-guide.html', name: 'Eid Prayers Guide' },
  { file: 'pillars.html', name: 'Five Pillars of Islam' }
];

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-worship-comp-'));
  const port = 3088;
  const cdpPort = 9295;

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

  let totalTests = 0;
  let passedTests = 0;
  let failedTests = 0;

  function report(suite, desc, pass, details = '') {
    totalTests++;
    if (pass) {
      passedTests++;
      console.log(`  ✓ PASS [${suite}]: ${desc} ${details ? '(' + details + ')' : ''}`);
    } else {
      failedTests++;
      console.log(`  ✗ FAIL [${suite}]: ${desc} ${details ? '(' + details + ')' : ''}`);
    }
  }

  try {
    const tab = await getExistingTab(cdpPort);
    const session = await createCdpSession(tab.webSocketDebuggerUrl);
    await session.send('Page.enable');
    await session.send('Runtime.enable');

    const consoleErrors = [];
    session.on('Runtime.exceptionThrown', (e) => {
      consoleErrors.push(e.exceptionDetails.text || 'Uncaught Exception');
    });

    console.log('===================================================================');
    console.log('   DEEP DESKTOP & MOBILE RESPONSIVE VERIFICATION: WORSHIP GUIDES   ');
    console.log('===================================================================\n');

    for (const pageObj of PAGES) {
      const page = pageObj.file;
      console.log(`\n>>> AUDITING ROUTE: /${page} (${pageObj.name})`);

      // 1. DESKTOP VIEWPORT SUITE (LTR & RTL)
      for (const vp of DESKTOP_VIEWPORTS) {
        console.log(`\n  --- Desktop Viewport: ${vp.name} [LTR & RTL] ---`);
        await session.send('Emulation.setDeviceMetricsOverride', {
          width: vp.width,
          height: vp.height,
          deviceScaleFactor: 1,
          mobile: false
        });

        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/${page}` });
        await new Promise(r => setTimeout(r, 500));

        // Evaluate LTR
        const ltrData = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const container = document.querySelector('.editorial-page-container');
              const toc = document.querySelector('.sticky-toc-wrapper');
              const body = document.querySelector('.editorial-content-body');
              const desktopNav = document.querySelector('.desktop-nav');
              const mobileBtn = document.querySelector('.mobile-menu-btn');

              // Dropdown
              const dropdowns = Array.from(document.querySelectorAll('.desktop-nav .nav-dropdown'));
              const worshipDropdown = dropdowns.find(d => {
                const btn = d.querySelector('.nav-btn');
                return btn && (btn.textContent.includes('Worship') || btn.querySelector('[data-i18n="navWorship"]'));
              });

              let dropdownStats = null;
              if (worshipDropdown) {
                const menu = worshipDropdown.querySelector('.nav-dropdown-menu');
                menu.style.display = 'flex';
                const rect = menu.getBoundingClientRect();
                const items = Array.from(menu.querySelectorAll('.nav-dropdown-item')).map(a => ({
                  text: a.textContent.trim(),
                  href: a.getAttribute('href')
                }));
                dropdownStats = {
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  width: Math.round(rect.width),
                  outLeft: rect.left < 0,
                  outRight: rect.right > window.innerWidth,
                  itemCount: items.length,
                  items
                };
                menu.style.display = '';
              }

              return {
                scrollWidth: docEl.scrollWidth,
                innerWidth: window.innerWidth,
                hasHScroll: docEl.scrollWidth > window.innerWidth,
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

        const ltr = ltrData.result.value;
        report('Desktop-LTR', `No horizontal scrollbar at ${vp.width}px`, !ltr.hasHScroll, `scrollWidth=${ltr.scrollWidth}px, innerWidth=${ltr.innerWidth}px`);
        report('Desktop-LTR', `Desktop navigation active & mobile button hidden`, ltr.desktopNavDisplay === 'block' && ltr.mobileBtnDisplay === 'none', `desktopNav=${ltr.desktopNavDisplay}, mobileBtn=${ltr.mobileBtnDisplay}`);
        report('Desktop-LTR', `Editorial 2-column layout active`, ltr.containerDisplay === 'grid' && ltr.tocWidth > 200 && ltr.bodyWidth > 500, `display=${ltr.containerDisplay}, TOC=${ltr.tocWidth}px, Body=${ltr.bodyWidth}px`);
        
        if (ltr.dropdownStats) {
          report('Desktop-LTR', `Worship dropdown contains exactly 5 items`, ltr.dropdownStats.itemCount === 5, `count=${ltr.dropdownStats.itemCount}`);
          report('Desktop-LTR', `Worship dropdown stays inside viewport horizontal bounds`, !ltr.dropdownStats.outLeft && !ltr.dropdownStats.outRight, `left=${ltr.dropdownStats.left}px, right=${ltr.dropdownStats.right}px, max=${vp.width}px`);
        }

        // Test RTL
        await session.send('Runtime.evaluate', {
          expression: `document.documentElement.setAttribute('dir', 'rtl'); document.documentElement.setAttribute('lang', 'ur');`
        });
        await new Promise(r => setTimeout(r, 200));

        const rtlData = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const hasHScroll = docEl.scrollWidth > window.innerWidth;
              const dropdowns = Array.from(document.querySelectorAll('.desktop-nav .nav-dropdown'));
              const worshipDropdown = dropdowns.find(d => {
                const btn = d.querySelector('.nav-btn');
                return btn && (btn.textContent.includes('Worship') || btn.querySelector('[data-i18n="navWorship"]'));
              });

              let dropdownStats = null;
              if (worshipDropdown) {
                const menu = worshipDropdown.querySelector('.nav-dropdown-menu');
                menu.style.display = 'flex';
                const rect = menu.getBoundingClientRect();
                dropdownStats = {
                  left: Math.round(rect.left),
                  right: Math.round(rect.right),
                  outLeft: rect.left < 0,
                  outRight: rect.right > window.innerWidth
                };
                menu.style.display = '';
              }

              return {
                hasHScroll,
                scrollWidth: docEl.scrollWidth,
                dropdownStats
              };
            })()
          `,
          returnByValue: true
        });

        const rtl = rtlData.result.value;
        report('Desktop-RTL', `No horizontal scroll in RTL at ${vp.width}px`, !rtl.hasHScroll, `scrollWidth=${rtl.scrollWidth}px`);
        if (rtl.dropdownStats) {
          report('Desktop-RTL', `RTL dropdown stays within viewport bounds`, !rtl.dropdownStats.outLeft && !rtl.dropdownStats.outRight, `left=${rtl.dropdownStats.left}px, right=${rtl.dropdownStats.right}px`);
        }
      }

      // 2. MOBILE VIEWPORT SUITE
      for (const mvp of MOBILE_VIEWPORTS) {
        await session.send('Emulation.setDeviceMetricsOverride', {
          width: mvp.width,
          height: mvp.height,
          deviceScaleFactor: 2,
          mobile: true
        });

        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/${page}` });
        await new Promise(r => setTimeout(r, 400));

        const mData = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const container = document.querySelector('.editorial-page-container');
              const toc = document.querySelector('.sticky-toc-wrapper');
              const body = document.querySelector('.editorial-content-body');
              const desktopNav = document.querySelector('.desktop-nav');
              const mobileBtn = document.querySelector('.mobile-menu-btn');

              return {
                scrollWidth: docEl.scrollWidth,
                innerWidth: window.innerWidth,
                hasHScroll: docEl.scrollWidth > window.innerWidth,
                containerDisplay: container ? window.getComputedStyle(container).display : 'none',
                tocPosition: toc ? window.getComputedStyle(toc).position : 'none',
                bodyWidth: body ? Math.round(body.getBoundingClientRect().width) : 0,
                desktopNavDisplay: desktopNav ? window.getComputedStyle(desktopNav).display : 'none',
                mobileBtnDisplay: mobileBtn ? window.getComputedStyle(mobileBtn).display : 'none'
              };
            })()
          `,
          returnByValue: true
        });

        const m = mData.result.value;
        report('Mobile', `No horizontal scroll at ${mvp.width}x${mvp.height}`, !m.hasHScroll, `scrollWidth=${m.scrollWidth}px, innerWidth=${m.innerWidth}px`);
        report('Mobile', `Mobile menu trigger visible & desktop nav hidden`, m.mobileBtnDisplay !== 'none' && m.desktopNavDisplay === 'none', `mobileBtn=${m.mobileBtnDisplay}, desktopNav=${m.desktopNavDisplay}`);
        report('Mobile', `Editorial container collapses to single column flow`, m.containerDisplay === 'block', `display=${m.containerDisplay}`);
      }
    }

    report('Console-Integrity', 'No uncaught exceptions occurred during audit', consoleErrors.length === 0, consoleErrors.join(', '));

    console.log('\n===================================================================');
    console.log(`AUDIT SCORECARD: ${passedTests} / ${totalTests} checks passed (${Math.round((passedTests/totalTests)*100)}%)`);
    console.log('===================================================================');

    session.close();
  } finally {
    serverProc.kill();
    chromeProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }

  if (failedTests > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
