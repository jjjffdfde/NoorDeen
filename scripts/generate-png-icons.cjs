const fs = require('fs');
const path = require('path');
const http = require('http');

function getCdpPort() {
  const portPath = path.join(process.env.APPDATA, 'Antigravity', 'DevToolsActivePort');
  if (fs.existsSync(portPath)) {
    const lines = fs.readFileSync(portPath, 'utf8').split('\n');
    return parseInt(lines[0].trim(), 10);
  }
  return 56536;
}

function getExistingTab(port) {
  return new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${port}/json/list`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const list = JSON.parse(data);
          const tab = list.find(t => t.type === 'page');
          if (tab) resolve(tab);
          else reject(new Error('No page tab found'));
        } catch (e) {
          reject(e);
        }
      });
    }).on('error', reject);
  });
}

function createCdpSession(wsUrl) {
  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let id = 1;
    const pending = new Map();

    ws.onopen = () => {
      resolve({
        send(method, params = {}) {
          return new Promise((res, rej) => {
            const reqId = id++;
            pending.set(reqId, { res, rej });
            ws.send(JSON.stringify({ id: reqId, method, params }));
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
        if (msg.error) rej(new Error(msg.error.message || JSON.stringify(msg.error)));
        else res(msg.result);
      }
    };

    ws.onerror = (err) => reject(err);
  });
}

async function renderIcons() {
  const port = getCdpPort();
  console.log('Connecting to Chrome tab on port:', port);
  const tab = await getExistingTab(port);
  const session = await createCdpSession(tab.webSocketDebuggerUrl);

  await session.send('Page.enable');

  const iconsDir = path.join(__dirname, '..', 'public', 'icons');
  const svg192Path = path.join(iconsDir, 'icon-192.svg');
  const svg512Path = path.join(iconsDir, 'icon-512.svg');

  const svg192Content = fs.readFileSync(svg192Path, 'utf8');
  const svg512Content = fs.readFileSync(svg512Path, 'utf8');

  async function captureSvg(svgContent, width, height, isMaskable, outPath) {
    let html;
    if (isMaskable) {
      html = `<!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            width: ${width}px;
            height: ${height}px;
            background: #0F5132;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .inner {
            width: ${Math.round(width * 0.8)}px;
            height: ${Math.round(height * 0.8)}px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          svg { width: 100%; height: 100%; }
        </style>
      </head>
      <body>
        <div class="inner">${svgContent}</div>
      </body>
      </html>`;
    } else {
      html = `<!DOCTYPE html>
      <html>
      <head>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            width: ${width}px;
            height: ${height}px;
            background: transparent;
            overflow: hidden;
          }
          svg { width: 100%; height: 100%; display: block; }
        </style>
      </head>
      <body>
        ${svgContent}
      </body>
      </html>`;
    }

    await session.send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: false
    });

    await session.send('Page.navigate', {
      url: `data:text/html;charset=utf-8,${encodeURIComponent(html)}`
    });

    await new Promise(r => setTimeout(r, 400));

    const screenshot = await session.send('Page.captureScreenshot', {
      format: 'png',
      fromSurface: true
    });

    const buffer = Buffer.from(screenshot.data, 'base64');
    fs.writeFileSync(outPath, buffer);
    console.log(`✓ Generated: ${path.basename(outPath)} (${width}x${height}, ${buffer.length} bytes)`);
  }

  console.log('Rendering raster PNG icons...');
  await captureSvg(svg192Content, 192, 192, false, path.join(iconsDir, 'icon-192.png'));
  await captureSvg(svg512Content, 512, 512, false, path.join(iconsDir, 'icon-512.png'));
  await captureSvg(svg192Content, 192, 192, true, path.join(iconsDir, 'icon-maskable-192.png'));
  await captureSvg(svg512Content, 512, 512, true, path.join(iconsDir, 'icon-maskable-512.png'));

  // Reset viewport to normal desktop
  await session.send('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 800,
    deviceScaleFactor: 1,
    mobile: false
  });

  session.close();
  console.log('All PNG icons successfully generated!');
}

renderIcons().catch(err => {
  console.error('Failed to render icons:', err);
  process.exit(1);
});
