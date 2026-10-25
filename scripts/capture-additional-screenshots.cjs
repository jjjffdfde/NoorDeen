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

async function capture() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-ss-'));
  const port = 3099;
  const cdpPort = 9299;

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

    const screenshots = [
      {
        name: 'worship-dropdown-landscape-1024x768.png',
        url: `http://127.0.0.1:${port}/salah-guide.html`,
        width: 1024,
        height: 768,
        openDropdown: true
      },
      {
        name: 'worship-dropdown-rtl-1920x1080.png',
        url: `http://127.0.0.1:${port}/salah-guide.html`,
        width: 1920,
        height: 1080,
        rtl: true,
        openDropdown: true
      },
      {
        name: 'eid-guide-laptop-1280x800.png',
        url: `http://127.0.0.1:${port}/eid-guide.html`,
        width: 1280,
        height: 800
      },
      {
        name: 'pillars-laptop-1366x768.png',
        url: `http://127.0.0.1:${port}/pillars.html`,
        width: 1366,
        height: 768
      }
    ];

    for (const item of screenshots) {
      await session.send('Emulation.setDeviceMetricsOverride', {
        width: item.width,
        height: item.height,
        deviceScaleFactor: 1,
        mobile: false
      });
      await session.send('Page.navigate', { url: item.url });
      await new Promise(r => setTimeout(r, 800));

      if (item.rtl) {
        await session.send('Runtime.evaluate', {
          expression: `document.documentElement.setAttribute('dir', 'rtl'); document.documentElement.setAttribute('lang', 'ur');`
        });
        await new Promise(r => setTimeout(r, 200));
      }

      if (item.openDropdown) {
        await session.send('Runtime.evaluate', {
          expression: `(() => {
            const dropdowns = Array.from(document.querySelectorAll('.desktop-nav .nav-dropdown'));
            const worship = dropdowns.find(d => {
              const btn = d.querySelector('.nav-btn');
              return btn && (btn.textContent.includes('Worship') || btn.querySelector('[data-i18n="navWorship"]'));
            });
            if (worship) {
              const menu = worship.querySelector('.nav-dropdown-menu');
              if (menu) menu.style.display = 'flex';
            }
          })()`
        });
        await new Promise(r => setTimeout(r, 300));
      }

      const res = await session.send('Page.captureScreenshot', { format: 'png' });
      const buffer = Buffer.from(res.data, 'base64');
      const outPath = path.join(__dirname, '..', 'AUDIT', 'screenshots', item.name);
      fs.writeFileSync(outPath, buffer);
      console.log(`Saved screenshot: ${item.name} (${buffer.length} bytes)`);
    }

    session.close();
  } finally {
    serverProc.kill();
    chromeProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

capture().catch(console.error);
