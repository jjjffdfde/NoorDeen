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

async function testPrayerDOM() {
  const tempProfile = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-pt-'));
  const port = 3120;
  const cdpPort = 9310;

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

    await session.send('Page.navigate', { url: `http://127.0.0.1:${port}/prayer-times.html` });
    await new Promise(r => setTimeout(r, 1000));

    // Test on date: 2026-10-25
    const results = await session.send('Runtime.evaluate', {
      expression: `
        (() => {
          const dateInput = document.getElementById('date-select');
          dateInput.value = '2026-10-25';
          dateInput.dispatchEvent(new Event('change'));

          const citySelect = document.getElementById('city-select');
          const testCities = ['Islamabad', 'Lahore', 'Gujranwala', 'Multan', 'Karachi', 'Quetta', 'Peshawar'];
          const cityResults = {};

          for (const cityName of testCities) {
            // Find option
            const opt = Array.from(citySelect.options).find(o => o.text.includes(cityName));
            if (!opt) {
              cityResults[cityName] = { error: 'Option not found' };
              continue;
            }
            citySelect.value = opt.value;
            citySelect.dispatchEvent(new Event('change'));

            cityResults[cityName] = {
              fajr: document.getElementById('time-fajr').textContent.trim(),
              sunrise: document.getElementById('time-sunrise').textContent.trim(),
              zawal: document.getElementById('time-zawal') ? document.getElementById('time-zawal').textContent.trim() : null,
              dhuhr: document.getElementById('time-dhuhr').textContent.trim(),
              asr: document.getElementById('time-asr').textContent.trim(),
              maghrib: document.getElementById('time-maghrib').textContent.trim(),
              isha: document.getElementById('time-isha').textContent.trim()
            };
          }

          return cityResults;
        })()
      `,
      returnByValue: true
    });

    console.log('DOM Prayer Times for 25 October 2026 in Browser:');
    console.log(JSON.stringify(results.result.value, null, 2));

    session.close();
  } finally {
    serverProc.kill();
    chromeProc.kill();
    try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch(e){}
  }
}

testPrayerDOM().catch(console.error);
