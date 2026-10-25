const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SCREENSHOT_DIR = path.join(__dirname, '..', 'AUDIT', 'screenshots');

if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

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

async function waitForCss(session) {
  for (let i = 0; i < 30; i++) {
    const res = await session.send('Runtime.evaluate', {
      expression: `(() => {
        const body = document.body;
        if (!body) return false;
        const cs = window.getComputedStyle(body);
        return document.styleSheets.length > 0 && cs.backgroundColor !== 'rgba(0, 0, 0, 0)';
      })()`,
      returnByValue: true
    });
    if (res.result.value) return true;
    await new Promise(r => setTimeout(r, 100));
  }
  return false;
}

async function capture(session, filename) {
  const result = await session.send('Page.captureScreenshot', { format: 'png' });
  const buffer = Buffer.from(result.data, 'base64');
  const filePath = path.join(SCREENSHOT_DIR, filename);
  fs.writeFileSync(filePath, buffer);
  console.log(`Saved screenshot: ${filename} (${buffer.length} bytes)`);
  return filePath;
}

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-screenshots-'));
  const port = 3045;
  const cdpPort = 9265;

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

    console.log('=== CAPTURING REAL CHROME SCREENSHOTS FOR AUDIT REPORT ===\n');

    // 1. Desktop 1920x1080 - Salah Guide with Open Worship Dropdown
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      mobile: false
    });
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/salah-guide.html` });
    await waitForCss(session);

    // Open Worship Guide dropdown visually
    await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          const dropdowns = Array.from(document.querySelectorAll('.desktop-nav .nav-dropdown'));
          const worshipDropdown = dropdowns.find(d => {
            const btn = d.querySelector('.nav-btn');
            return btn && (btn.textContent.includes('Worship') || btn.querySelector('[data-i18n=\"navWorship\"]'));
          });
          if (worshipDropdown) {
            const menu = worshipDropdown.querySelector('.nav-dropdown-menu');
            if (menu) menu.style.display = 'flex';
          }
        })()
      `
    });
    await new Promise(r => setTimeout(r, 300));
    await capture(session, 'worship-dropdown-desktop-1920x1080.png');

    // Close menu for full article capture
    await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          document.querySelectorAll('.nav-dropdown-menu').forEach(m => m.style.display = '');
        })()
      `
    });
    await new Promise(r => setTimeout(r, 200));
    await capture(session, 'salah-guide-desktop-1920x1080.png');

    // 2. Compact Desktop / Tablet Landscape 1024x768 - Salah Guide
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 1024,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false
    });
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/salah-guide.html` });
    await waitForCss(session);
    await capture(session, 'salah-guide-landscape-1024x768.png');

    // 3. Laptop 1366x768 - Wudu Guide
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 1366,
      height: 768,
      deviceScaleFactor: 1,
      mobile: false
    });
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/wudu-guide.html` });
    await waitForCss(session);
    await capture(session, 'wudu-guide-laptop-1366x768.png');

    // 4. Laptop 1280x800 - Janazah Guide
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 1280,
      height: 800,
      deviceScaleFactor: 1,
      mobile: false
    });
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/janazah-guide.html` });
    await waitForCss(session);
    await capture(session, 'janazah-guide-laptop-1280x800.png');

    // 5. Desktop 1920x1080 - Eid Guide
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 1920,
      height: 1080,
      deviceScaleFactor: 1,
      mobile: false
    });
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/eid-guide.html` });
    await waitForCss(session);
    await capture(session, 'eid-guide-desktop-1920x1080.png');

    // 6. Desktop 1920x1080 - Pillars of Islam
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/pillars.html` });
    await waitForCss(session);
    await capture(session, 'pillars-desktop-1920x1080.png');

    // 7. Mobile Viewport 390x844 - Salah Guide
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true
    });
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/salah-guide.html` });
    await waitForCss(session);
    await capture(session, 'salah-guide-mobile-390x844.png');

    console.log('\nAll 7 real screenshots captured successfully!');

  } catch(e) {
    console.error('Screenshot Capture Error:', e);
  } finally {
    try { chromeProc.kill(); } catch (e) {}
    try { serverProc.kill(); } catch (e) {}
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
