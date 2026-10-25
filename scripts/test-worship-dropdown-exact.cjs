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
  { name: '1024x768', width: 1024, height: 768 },
  { name: '1280x800', width: 1280, height: 800 },
  { name: '1366x768', width: 1366, height: 768 },
  { name: '1440x900', width: 1440, height: 900 },
  { name: '1600x900', width: 1600, height: 900 },
  { name: '1920x1080', width: 1920, height: 1080 }
];

const MOBILE_VIEWPORTS = [
  { name: '320x640', width: 320, height: 640 },
  { name: '360x800', width: 360, height: 800 },
  { name: '390x844', width: 390, height: 844 },
  { name: '414x896', width: 414, height: 896 },
  { name: '768x1024', width: 768, height: 1024 }
];

const WORSHIP_PAGES = [
  'salah-guide.html',
  'wudu-guide.html',
  'janazah-guide.html',
  'eid-guide.html',
  'pillars.html'
];

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-worship-exact-'));
  const port = 3033;
  const cdpPort = 9253;

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

    console.log('===============================================================');
    console.log('   DEEP AUDIT: WORSHIP GUIDE DROPDOWN & DESKTOP LAYOUT        ');
    console.log('===============================================================\n');

    for (const vp of DESKTOP_VIEWPORTS) {
      console.log(`\n>>> TESTING DESKTOP VIEWPORT: ${vp.name}`);
      await session.send('Emulation.setDeviceMetricsOverride', {
        width: vp.width,
        height: vp.height,
        deviceScaleFactor: 1,
        mobile: false
      });

      for (const p of WORSHIP_PAGES) {
        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/${p}` });
        await new Promise(r => setTimeout(r, 500));

        const res = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              // Locate the Worship Guides nav dropdown specifically
              const dropdowns = Array.from(document.querySelectorAll('.desktop-nav .nav-dropdown'));
              const worshipDropdown = dropdowns.find(d => {
                const btn = d.querySelector('.nav-btn');
                return btn && (btn.textContent.includes('Worship') || btn.querySelector('[data-i18n=\"navWorship\"]'));
              });

              if (!worshipDropdown) {
                return { error: 'Worship Guides dropdown element not found in .desktop-nav' };
              }

              const btn = worshipDropdown.querySelector('.nav-btn');
              const menu = worshipDropdown.querySelector('.nav-dropdown-menu');
              
              // Test hover/open
              menu.style.display = 'flex';
              const menuRect = menu.getBoundingClientRect();
              const btnRect = btn.getBoundingClientRect();

              const items = Array.from(menu.querySelectorAll('.nav-dropdown-item')).map(a => ({
                href: a.getAttribute('href'),
                text: a.textContent.trim(),
                width: a.getBoundingClientRect().width,
                height: a.getBoundingClientRect().height
              }));

              const outLeft = menuRect.left < 0;
              const outRight = menuRect.right > window.innerWidth;
              const outTop = menuRect.top < 0;
              const overlapsBtn = menuRect.top < btnRect.bottom - 2;

              // Hide menu back
              menu.style.display = '';

              // Page content inspection
              const docEl = document.documentElement;
              const hasHScroll = docEl.scrollWidth > window.innerWidth;
              const container = document.querySelector('.editorial-page-container');
              const toc = document.querySelector('.sticky-toc-wrapper');
              const body = document.querySelector('.editorial-content-body');
              const desktopNav = document.querySelector('.desktop-nav');
              const mobileBtn = document.querySelector('.mobile-menu-btn');

              return {
                page: '${p}',
                worshipDropdownFound: true,
                btnText: btn.textContent.trim(),
                menuLeft: Math.round(menuRect.left),
                menuRight: Math.round(menuRect.right),
                menuWidth: Math.round(menuRect.width),
                menuHeight: Math.round(menuRect.height),
                outLeft,
                outRight,
                outTop,
                overlapsBtn,
                itemCount: items.length,
                items,
                hasHScroll,
                scrollWidth: docEl.scrollWidth,
                containerWidth: container ? Math.round(container.getBoundingClientRect().width) : 0,
                tocDisplay: toc ? window.getComputedStyle(toc).display : 'none',
                tocWidth: toc ? Math.round(toc.getBoundingClientRect().width) : 0,
                bodyWidth: body ? Math.round(body.getBoundingClientRect().width) : 0,
                desktopNavDisplay: desktopNav ? window.getComputedStyle(desktopNav).display : 'none',
                mobileBtnDisplay: mobileBtn ? window.getComputedStyle(mobileBtn).display : 'none'
              };
            })()
          `,
          returnByValue: true
        });

        const r = res.result.value;
        if (r.error) {
          console.error(`  [${p}] FAIL: ${r.error}`);
        } else {
          console.log(`  [${p}]`);
          console.log(`    Dropdown Menu: left=${r.menuLeft}px, right=${r.menuRight}px, width=${r.menuWidth}px, items=${r.itemCount}`);
          console.log(`    Bounds Clean: outLeft=${r.outLeft}, outRight=${r.outRight}, overlapsBtn=${r.overlapsBtn}`);
          console.log(`    Layout: TOC=${r.tocDisplay} (${r.tocWidth}px), Body=${r.bodyWidth}px, HScroll=${r.hasHScroll ? 'FAIL ('+r.scrollWidth+'px)' : '0px (PASS)'}`);
          console.log(`    Nav: DesktopNav=${r.desktopNavDisplay}, MobileBtn=${r.mobileBtnDisplay}`);
        }
      }
    }

    // Now test mobile viewports for regression
    console.log('\n===============================================================');
    console.log('   MOBILE VIEWPORT REGRESSION AUDIT (320px to 768px)          ');
    console.log('===============================================================\n');

    for (const mv of MOBILE_VIEWPORTS) {
      console.log(`>>> TESTING MOBILE VIEWPORT: ${mv.name}`);
      await session.send('Emulation.setDeviceMetricsOverride', {
        width: mv.width,
        height: mv.height,
        deviceScaleFactor: 2,
        mobile: true
      });

      for (const p of WORSHIP_PAGES) {
        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/${p}` });
        await new Promise(r => setTimeout(r, 400));

        const mRes = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const docEl = document.documentElement;
              const hasHScroll = docEl.scrollWidth > window.innerWidth;
              const mobileBtn = document.querySelector('.mobile-menu-btn');
              const mobileBtnDisplay = mobileBtn ? window.getComputedStyle(mobileBtn).display : 'none';
              const desktopNav = document.querySelector('.desktop-nav');
              const desktopNavDisplay = desktopNav ? window.getComputedStyle(desktopNav).display : 'none';

              return {
                page: '${p}',
                hasHScroll,
                scrollWidth: docEl.scrollWidth,
                mobileBtnDisplay,
                desktopNavDisplay
              };
            })()
          `,
          returnByValue: true
        });

        const mr = mRes.result.value;
        console.log(`  [${p} ${mv.name}] HScroll=${mr.hasHScroll ? 'FAIL ('+mr.scrollWidth+'px)' : '0px (PASS)'}, MobileBtn=${mr.mobileBtnDisplay}, DesktopNav=${mr.desktopNavDisplay}`);
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
