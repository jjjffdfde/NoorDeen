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

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-320-priv-'));
  
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3016' },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9238',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    '--window-size=320,568',
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  try {
    const tab = await getExistingTab(9238);
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

    const loadPromise = new Promise(resolve => {
      session.on('Page.loadEventFired', resolve);
    });
    await session.send('Page.navigate', { url: 'http://127.0.0.1:3016/privacy.html' });
    await loadPromise;
    await new Promise(r => setTimeout(r, 400));

    const evalRes = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          const winW = 320;
          const offenders = [];
          document.querySelectorAll('*').forEach(el => {
            if (el.tagName === 'HTML' || el.tagName === 'BODY' || el.id === 'mobile-drawer-overlay' || el.id === 'cookie-consent-banner') return;
            const r = el.getBoundingClientRect();
            if (r.right > winW + 0.5 || el.scrollWidth > winW + 0.5 || el.offsetWidth > winW + 0.5) {
              offenders.push({
                tag: el.tagName,
                id: el.id,
                className: el.className,
                right: r.right,
                offsetWidth: el.offsetWidth,
                scrollWidth: el.scrollWidth,
                outer: el.outerHTML.slice(0, 100)
              });
            }
          });
          return JSON.stringify(offenders);
        })()
      `,
      returnByValue: true
    });

    console.log('=== Privacy 320px Exact Element ===');
    console.log(evalRes.result.value);

    session.close();
  } finally {
    chromeProc.kill();
    serverProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

run().catch(console.error);
