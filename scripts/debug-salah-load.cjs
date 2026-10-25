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

async function run() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-debug-salah-'));
  const port = 3041;
  const cdpPort = 9261;

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

    // First load eid-guide.html
    console.log('--- Loading /eid-guide.html ---');
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/eid-guide.html` });
    await new Promise(r => setTimeout(r, 600));

    const eidRes = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          return {
            page: 'eid-guide.html',
            sheetsCount: document.styleSheets.length,
            mainCssRulesCount: document.styleSheets[0] ? document.styleSheets[0].cssRules.length : 0,
            bodyBg: window.getComputedStyle(document.body).backgroundColor,
            containerDisplay: window.getComputedStyle(document.querySelector('.editorial-page-container')).display
          };
        })()
      `,
      returnByValue: true
    });
    console.log(eidRes.result.value);

    // Now load salah-guide.html
    console.log('\n--- Loading /salah-guide.html ---');
    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/salah-guide.html` });
    await new Promise(r => setTimeout(r, 600));

    const salahRes = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          const link = document.querySelector('link[rel="stylesheet"]');
          return {
            page: 'salah-guide.html',
            linkHref: link ? link.href : null,
            sheetsCount: document.styleSheets.length,
            mainCssRulesCount: document.styleSheets[0] ? document.styleSheets[0].cssRules.length : 0,
            bodyBg: window.getComputedStyle(document.body).backgroundColor,
            containerDisplay: window.getComputedStyle(document.querySelector('.editorial-page-container')).display
          };
        })()
      `,
      returnByValue: true
    });
    console.log(salahRes.result.value);

  } catch(e) {
    console.error(e);
  } finally {
    try { chromeProc.kill(); } catch (e) {}
    try { serverProc.kill(); } catch (e) {}
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}
  }
}

run();
