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

async function runAllPagesDiagnosis() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-audit-all-'));
  
  const serverProc = spawn('node', ['server.js'], {
    cwd: path.join(__dirname, '..'),
    env: { ...process.env, PORT: '3004' },
    stdio: 'ignore'
  });
  await new Promise(r => setTimeout(r, 1200));

  const chromeProc = spawn(chromePath, [
    '--headless=new',
    '--remote-debugging-port=9226',
    '--disable-gpu',
    '--no-sandbox',
    '--no-first-run',
    `--user-data-dir=${tempProfile}`,
    '--window-size=360,640',
    'about:blank'
  ], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1800));

  try {
    const tab = await getExistingTab(9226);
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

    const pub = path.join(__dirname, '..', 'public');
    const files = fs.readdirSync(pub).filter(f => f.endsWith('.html')).sort();

    const results = [];

    for (const f of files) {
      const pagePath = f === 'index.html' ? '/' : `/${f}`;
      
      const loadPromise = new Promise(resolve => {
        session.on('Page.loadEventFired', resolve);
      });

      await session.send('Page.navigate', { url: `http://127.0.0.1:3004${pagePath}` });
      await loadPromise;
      await new Promise(r => setTimeout(r, 400));

      const evalRes = await session.send('Runtime.evaluate', {
        expression: `
          (() => {
            const winW = 360; // target width
            const docSw = document.documentElement.scrollWidth;
            const docCw = document.documentElement.clientWidth;
            const bodySw = document.body ? document.body.scrollWidth : 0;

            const headerInner = document.querySelector('.header-inner');
            const hiSw = headerInner ? headerInner.scrollWidth : 0;
            const hiRight = headerInner ? Math.round(headerInner.getBoundingClientRect().right) : 0;

            const menuBtn = document.querySelector('.mobile-menu-btn');
            const menuRight = menuBtn ? Math.round(menuBtn.getBoundingClientRect().right) : 0;

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
                  right: Math.round(r.right),
                  scrollWidth: el.scrollWidth,
                  excess: Math.round(Math.max(r.right - winW, el.scrollWidth - winW))
                });
              }
            });

            return JSON.stringify({
              page: '${pagePath}',
              docScrollWidth: docSw,
              bodyScrollWidth: bodySw,
              headerInnerScrollWidth: hiSw,
              headerInnerRight: hiRight,
              menuBtnRight: menuRight,
              menuBtnOverflows: menuRight > winW,
              overflowCount: overflowing.length,
              topOverflows: overflowing.sort((a,b) => b.excess - a.excess).slice(0, 3)
            });
          })()
        `,
        returnByValue: true
      });

      const res = JSON.parse(evalRes.result.value);
      results.push(res);
      console.log(`Page ${res.page.padEnd(22)} | docSW: ${res.docScrollWidth}px | headerSW: ${res.headerInnerScrollWidth}px | menuBtnRight: ${res.menuBtnRight}px | ${res.menuBtnOverflows ? 'FAIL (MENU OFF-SCREEN)' : 'PASS'}`);
    }

    fs.writeFileSync(
      path.join(__dirname, '..', 'AUDIT', 'PHASE-11', 'all-pages-mobile-overflow-raw.json'),
      JSON.stringify(results, null, 2),
      'utf-8'
    );

    session.close();
  } finally {
    chromeProc.kill();
    serverProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

runAllPagesDiagnosis().catch(err => {
  console.error('Audit error:', err);
  process.exit(1);
});
