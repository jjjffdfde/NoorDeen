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
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-deep-'));
  
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3007' },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9229',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    '--window-size=360,640',
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  try {
    const tab = await getExistingTab(9229);
    const session = await createCdpSession(tab.webSocketDebuggerUrl);

    await session.send('Page.enable');
    await session.send('DOM.enable');
    await session.send('Emulation.setUserAgentOverride', {
      userAgent: 'Mozilla/5.0 (Linux; Android 14; Pixel 7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
    });
    await session.send('Emulation.setDeviceMetricsOverride', {
      width: 360,
      height: 640,
      deviceScaleFactor: 2.625,
      mobile: true
    });

    const loadPromise = new Promise(resolve => {
      session.on('Page.loadEventFired', resolve);
    });
    await session.send('Page.navigate', { url: 'http://127.0.0.1:3007/prophets.html' });
    await loadPromise;
    await new Promise(r => setTimeout(r, 500));

    const evalRes = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          const winW = 360;
          const offenders = [];
          document.querySelectorAll('main *').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > winW + 1 || el.scrollWidth > winW + 1) {
              let sel = el.tagName.toLowerCase();
              if (el.id) sel += '#' + el.id;
              else if (el.className && typeof el.className === 'string') {
                sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
              }
              offenders.push({
                selector: sel,
                right: Math.round(r.right),
                scrollWidth: el.scrollWidth,
                clientWidth: el.clientWidth,
                textSnippet: el.innerText ? el.innerText.trim().slice(0, 40) : ''
              });
            }
          });
          return JSON.stringify(offenders.filter(o => o.scrollWidth > winW).slice(0, 10));
        })()
      `,
      returnByValue: true
    });

    console.log('=== Deep offenders in prophets.html ===');
    console.log(evalRes.result.value);

    // Also test history.html
    const loadPromise2 = new Promise(resolve => {
      session.on('Page.loadEventFired', resolve);
    });
    await session.send('Page.navigate', { url: 'http://127.0.0.1:3007/history.html' });
    await loadPromise2;
    await new Promise(r => setTimeout(r, 500));

    const evalRes2 = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          const winW = 360;
          const offenders = [];
          document.querySelectorAll('article#era3 *').forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.right > winW + 1 || el.scrollWidth > winW + 1) {
              let sel = el.tagName.toLowerCase();
              if (el.id) sel += '#' + el.id;
              else if (el.className && typeof el.className === 'string') {
                sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
              }
              offenders.push({
                selector: sel,
                right: Math.round(r.right),
                scrollWidth: el.scrollWidth,
                clientWidth: el.clientWidth,
                textSnippet: el.innerText ? el.innerText.trim().slice(0, 50) : ''
              });
            }
          });
          return JSON.stringify(offenders.filter(o => o.scrollWidth > winW).slice(0, 10));
        })()
      `,
      returnByValue: true
    });

    console.log('=== Deep offenders in history.html era3 ===');
    console.log(evalRes2.result.value);

    session.close();
  } finally {
    chromeProc.kill();
    serverProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

run().catch(console.error);
