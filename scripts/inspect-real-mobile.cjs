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

async function runMobileAudit() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-'));
  
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3003' },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9225',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    '--window-size=360,640',
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  try {
    const tab = await getExistingTab(9225);
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

    await session.send('Page.navigate', { url: 'http://127.0.0.1:3003/' });
    await loadPromise;
    await new Promise(r => setTimeout(r, 1000));

    const evalRes = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          try {
            const winW = window.innerWidth;
            const docW = document.documentElement ? document.documentElement.clientWidth : 0;
            const docSw = document.documentElement ? document.documentElement.scrollWidth : 0;
            const bodySw = document.body ? document.body.scrollWidth : 0;
            const bodyW = document.body ? document.body.clientWidth : 0;

            const header = document.querySelector('.site-header');
            const headerInner = document.querySelector('.header-inner');
            const logoGroup = document.querySelector('.logo-group');
            const headerActions = document.querySelector('.header-actions');
            const searchBtn = document.querySelector('#search-modal-btn');
            const langBtn = document.querySelector('#language-selector-btn');
            const themeBtn = document.querySelector('#theme-toggle-btn');
            const menuBtn = document.querySelector('.mobile-menu-btn');

            function inspectEl(el, name) {
              if (!el) return { name, present: false };
              const r = el.getBoundingClientRect();
              return {
                name,
                present: true,
                rectWidth: Math.round(r.width),
                rectRight: Math.round(r.right),
                scrollWidth: el.scrollWidth,
                clientWidth: el.clientWidth,
                offsetWidth: el.offsetWidth,
                overflowsWindow: Math.round(r.right) > winW
              };
            }

            const overflowing = [];
            document.querySelectorAll('*').forEach(el => {
              const r = el.getBoundingClientRect();
              if (r.right > winW + 1 || el.scrollWidth > winW + 1) {
                let sel = el.tagName.toLowerCase();
                if (el.id) sel += '#' + el.id;
                else if (el.className && typeof el.className === 'string') {
                  sel += '.' + el.className.trim().split(/\\s+/).slice(0, 2).join('.');
                }
                overflowing.push({
                  selector: sel,
                  rectRight: Math.round(r.right),
                  rectWidth: Math.round(r.width),
                  scrollWidth: el.scrollWidth,
                  excess: Math.round(Math.max(r.right - winW, el.scrollWidth - winW))
                });
              }
            });

            return JSON.stringify({
              windowInnerWidth: winW,
              docClientWidth: docW,
              docScrollWidth: docSw,
              bodyClientWidth: bodyW,
              bodyScrollWidth: bodySw,
              header: inspectEl(header, '.site-header'),
              headerInner: inspectEl(headerInner, '.header-inner'),
              logoGroup: inspectEl(logoGroup, '.logo-group'),
              headerActions: inspectEl(headerActions, '.header-actions'),
              searchBtn: inspectEl(searchBtn, '#search-modal-btn'),
              langBtn: inspectEl(langBtn, '#language-selector-btn'),
              themeBtn: inspectEl(themeBtn, '#theme-toggle-btn'),
              menuBtn: inspectEl(menuBtn, '.mobile-menu-btn'),
              overflowingElementsCount: overflowing.length,
              overflowing: overflowing.sort((a,b) => b.excess - a.excess).slice(0, 15)
            });
          } catch(err) {
            return JSON.stringify({ error: err.message, stack: err.stack });
          }
        })()
      `,
      returnByValue: true
    });

    console.log('Mobile Audit Result (Viewport 360x640):');
    const resultObj = JSON.parse(evalRes.result.value);
    console.log(JSON.stringify(resultObj, null, 2));

    session.close();
  } finally {
    chromeProc.kill();
    serverProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

runMobileAudit().catch(err => {
  console.error('Audit error:', err);
  process.exit(1);
});
