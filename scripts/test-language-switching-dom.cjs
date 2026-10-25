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

async function testLanguageDOM() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-lang-'));
  const port = 3125;
  const cdpPort = 9315;

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

    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/index.html` });
    await new Promise(r => setTimeout(r, 1200));

    // Test 1: Check default English state
    const enState = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          return {
            docDir: document.documentElement.dir,
            navHomeText: document.querySelector('.desktop-nav a[href="index.html"]').textContent.trim(),
            logoTitle: document.querySelector('.logo-text-title').textContent.trim()
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Default English State:', enState.result.value);

    // Test 2: Switch language to Urdu ('ur')
    const urState = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          window.I18n.setLanguage('ur');
          return {
            docDir: document.documentElement.dir,
            docLang: document.documentElement.lang,
            contentLang: document.documentElement.getAttribute('data-content-lang'),
            navHomeText: document.querySelector('.desktop-nav a[href="index.html"]').textContent.trim(),
            logoTitle: document.querySelector('.logo-text-title').textContent.trim(),
            heroTitle: document.querySelector('.hero-title') ? document.querySelector('.hero-title').textContent.trim() : null
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Urdu Content Selected State:', urState.result.value);

    // Test 3: Switch back to English ('en')
    const backEnState = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          window.I18n.setLanguage('en');
          return {
            docDir: document.documentElement.dir,
            docLang: document.documentElement.lang,
            contentLang: document.documentElement.getAttribute('data-content-lang'),
            navHomeText: document.querySelector('.desktop-nav a[href="index.html"]').textContent.trim(),
            logoTitle: document.querySelector('.logo-text-title').textContent.trim()
          };
        })()
      `,
      returnByValue: true
    });
    console.log('Switched Back to English State:', backEnState.result.value);

    session.close();
  } finally {
    serverProc.kill();
    chromeProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

testLanguageDOM().catch(console.error);
