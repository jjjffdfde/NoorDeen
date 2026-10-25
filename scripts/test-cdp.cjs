const { spawn } = require('child_process');
const http = require('http');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const fs = require('fs');

const browserPath = fs.existsSync(chromePath) ? chromePath : edgePath;
console.log('Using browser at:', browserPath);

const proc = spawn(browserPath, [
  '--headless=new',
  '--remote-debugging-port=9222',
  '--disable-gpu',
  '--no-sandbox',
  '--no-first-run'
], { stdio: 'ignore' });

setTimeout(() => {
  http.get('http://127.0.0.1:9222/json/version', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      console.log('Browser CDP connected:', data);
      proc.kill();
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('CDP connection error:', err.message);
    proc.kill();
    process.exit(1);
  });
}, 1500);
