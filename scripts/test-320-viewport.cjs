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

async function run320Audit() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-320-'));
  
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3012' },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9234',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    '--window-size=320,568',
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  try {
    const tab = await getExistingTab(9234);
    const session = await createCdpSession(tab.webSocketDebuggerUrl);
    await session.send('Page.enable');
    await session.send('DOM.enable');
    await session.send('Emulation.setUserAgentOverride', {
      userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1'
    });
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 320,
      height: 568,
      deviceScaleFactor: 2.0,
      mobile: true
    });

    const pub = path.join(__dirname, '..', 'public');
    const files = fs.readdirSync(pub).filter(f => f.endsWith('.html')).sort();

    console.log('=== Testing 320px Viewport across all 25 pages ===');
    let failCount = 0;

    for (const f of files) {
      const pagePath = f === 'index.html' ? '/' : `/${f}`;
      const loadPromise = new Promise(resolve => {
        session.on('Page.loadEventFired', resolve);
      });
      await session.send('Page.navigate', { url: `http://127.0.0.1:3012${pagePath}` });
      await loadPromise;
      await new Promise(r => setTimeout(r, 300));

      const evalRes = await session.send('Runtime.evaluate', {
        expression: `
          (() => {
            const winW = 320;
            const docSw = document.documentElement.scrollWidth;
            const menuBtn = document.querySelector('.mobile-menu-btn');
            const menuRight = menuBtn ? Math.round(menuBtn.getBoundingClientRect().right) : 0;
            return JSON.stringify({
              docSW: docSw,
              menuRight: menuRight,
              pass: docSw <= winW && menuRight <= winW
            });
          })()
        `,
        returnByValue: true
      });

      const res = JSON.parse(evalRes.result.value);
      const status = res.pass ? 'PASS' : 'FAIL';
      if (!res.pass) failCount++;
      console.log(`Page ${pagePath.padEnd(22)} | docSW: ${res.docSW}px | menuRight: ${res.menuRight}px | ${status}`);
    }

    console.log(`\n320px Viewport Result: ${25 - failCount}/25 PASSED`);
    session.close();
  } finally {
    chromeProc.kill();
    serverProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

run320Audit().catch(console.error);
