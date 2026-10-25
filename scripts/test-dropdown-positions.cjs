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

const DESKTOP_RESOLUTIONS = [
  { name: '1024x768 (Tablet Landscape / Netbook)', width: 1024, height: 768 },
  { name: '1280x800 (Compact Laptop)', width: 1280, height: 800 },
  { name: '1366x768 (Mainstream Laptop)', width: 1366, height: 768 },
  { name: '1440x900 (High-Res Laptop)', width: 1440, height: 900 },
  { name: '1600x900 (HD+ Desktop)', width: 1600, height: 900 },
  { name: '1920x1080 (Full HD Desktop)', width: 1920, height: 1080 }
];

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-worship-dropdown-'));
  const port = 3031;
  const cdpPort = 9251;

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

    console.log('=== TESTING WORSHIP GUIDE DROPDOWN ACROSS ALL DESKTOP RESOLUTIONS ===\n');

    for (const res of DESKTOP_RESOLUTIONS) {
      console.log(`\nTesting Resolution: ${res.name} (${res.width}x${res.height})`);
      await session.send('Emulation.setDeviceMetricsOverride', {
        width: res.width,
        height: res.height,
        deviceScaleFactor: 1,
        mobile: false
      });

      // Test on index.html and salah-guide.html
      for (const page of ['/index.html', '/salah-guide.html']) {
        await session.send('Page.navigate', { url: `http://127.0.0.1:${port}${page}` });
        await new Promise(r => setTimeout(r, 500));

        // Evaluate dropdown in LTR
        const ltrEval = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              const dropdown = document.querySelector('.nav-dropdown');
              const btn = dropdown ? dropdown.querySelector('.nav-btn') : null;
              const menu = dropdown ? dropdown.querySelector('.nav-dropdown-menu') : null;
              if (!dropdown || !menu) return { error: 'Dropdown elements not found' };

              // Simulate hover/focus by adding focus
              btn.focus();
              dropdown.classList.add('nav-dropdown-test-hover');
              
              // Force menu display for measurement
              const origDisplay = menu.style.display;
              menu.style.display = 'flex';
              
              const rect = menu.getBoundingClientRect();
              const items = Array.from(menu.querySelectorAll('.nav-dropdown-item')).map(a => ({
                text: a.textContent.trim(),
                href: a.getAttribute('href'),
                visible: a.offsetWidth > 0 && a.offsetHeight > 0
              }));

              const outOfScreenLeft = rect.left < 0;
              const outOfScreenRight = rect.right > window.innerWidth;
              const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;

              menu.style.display = origDisplay;

              return {
                page: '${page}',
                dir: 'ltr',
                dropdownLeft: Math.round(rect.left),
                dropdownRight: Math.round(rect.right),
                dropdownWidth: Math.round(rect.width),
                dropdownHeight: Math.round(rect.height),
                outOfScreenLeft,
                outOfScreenRight,
                itemCount: items.length,
                allItemsVisible: items.every(i => i.visible),
                hasHorizontalScroll,
                scrollWidth: document.documentElement.scrollWidth,
                items
              };
            })()
          `,
          returnByValue: true
        });

        const ltr = ltrEval.result.value;
        console.log(`  [LTR ${page}]`);
        console.log(`    Dropdown bounds: left=${ltr.dropdownLeft}px, right=${ltr.dropdownRight}px, width=${ltr.dropdownWidth}px`);
        console.log(`    Out of screen: left=${ltr.outOfScreenLeft}, right=${ltr.outOfScreenRight}`);
        console.log(`    Items: count=${ltr.itemCount}, allVisible=${ltr.allItemsVisible}`);
        console.log(`    Horizontal scroll: ${ltr.hasHorizontalScroll ? 'YES (overflow!)' : 'NONE (clean)'}`);

        // Evaluate dropdown in RTL
        const rtlEval = await session.send('Runtime.evaluate', {
          expression: `
            (() => {
              document.documentElement.setAttribute('dir', 'rtl');
              const dropdown = document.querySelector('.nav-dropdown');
              const menu = dropdown ? dropdown.querySelector('.nav-dropdown-menu') : null;
              if (!menu) return { error: 'Menu not found' };
              
              menu.style.display = 'flex';
              const rect = menu.getBoundingClientRect();
              const outOfScreenLeft = rect.left < 0;
              const outOfScreenRight = rect.right > window.innerWidth;
              const hasHorizontalScroll = document.documentElement.scrollWidth > window.innerWidth;
              menu.style.display = '';
              document.documentElement.setAttribute('dir', 'ltr');

              return {
                dropdownLeft: Math.round(rect.left),
                dropdownRight: Math.round(rect.right),
                dropdownWidth: Math.round(rect.width),
                outOfScreenLeft,
                outOfScreenRight,
                hasHorizontalScroll
              };
            })()
          `,
          returnByValue: true
        });

        const rtl = rtlEval.result.value;
        console.log(`  [RTL ${page}]`);
        console.log(`    Dropdown bounds: left=${rtl.dropdownLeft}px, right=${rtl.dropdownRight}px, width=${rtl.dropdownWidth}px`);
        console.log(`    Out of screen: left=${rtl.outOfScreenLeft}, right=${rtl.outOfScreenRight}`);
        console.log(`    Horizontal scroll: ${rtl.hasHorizontalScroll ? 'YES (overflow!)' : 'NONE (clean)'}`);
      }
    }

  } catch (err) {
    console.error('CDP Error:', err);
  } finally {
    try { chromeProc.kill(); } catch (e) {}
    try { serverProc.kill(); } catch (e) {}
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
