const { spawn } = require('child_process');
const http = require('http');
const path = require('path');
const os = require('os');
const fs = require('fs');
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function test() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-warm-'));
  const serverProc = spawn('node', ['server.js'], { env: { ...process.env, PORT: '3030' }, stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1200));
  const chromeProc = spawn(chromePath, ['--headless=new', '--remote-debugging-port=9250', '--disable-gpu', '--no-sandbox', '--user-data-dir=' + tempProfile, 'about:blank'], { stdio: 'ignore' });
  await new Promise(r => setTimeout(r, 1500));
  
  const tab = await new Promise(res => {
    http.get('http://127.0.0.1:9250/json/list', r => {
      let d = ''; r.on('data', c => d += c); r.on('end', () => res(JSON.parse(d)[0]));
    });
  });

  const ws = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise(res => ws.onopen = res);
  let id = 1;
  const send = (m, p={}) => new Promise(res => {
    const i = id++;
    const handler = (e) => {
      const msg = JSON.parse(e.data);
      if (msg.id === i) { ws.removeEventListener('message', handler); res(msg.result); }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id: i, method: m, params: p }));
  });

  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
  await send('Page.navigate', { url: 'http://127.0.0.1:3030/salah-guide.html' });
  await new Promise(r => setTimeout(r, 1200));

  const check = await send('Runtime.evaluate', {
    expression: 'JSON.stringify({ cW: Math.round(document.querySelector(".editorial-page-container").getBoundingClientRect().width), tW: Math.round(document.querySelector(".sticky-toc-wrapper").getBoundingClientRect().width), bW: Math.round(document.querySelector(".editorial-content-body").getBoundingClientRect().width) })',
    returnByValue: true
  });
  console.log('Warm test result:', check.value);

  chromeProc.kill();
  serverProc.kill();
  fs.rmSync(tempProfile, { recursive: true, force: true });
}
test();
