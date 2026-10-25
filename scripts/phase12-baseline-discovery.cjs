const fs = require('fs');
const path = require('path');

// 1. Discover all public files
const publicDir = path.join(__dirname, '..', 'public');
const allPublicFiles = [];
function walkDir(dir, prefix = '') {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const full = path.join(dir, item);
    const rel = path.join(prefix, item).replace(/\\/g, '/');
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walkDir(full, rel);
    } else {
      allPublicFiles.push({ path: rel, size: stat.size });
    }
  }
}
walkDir(publicDir);

const htmlPages = allPublicFiles.filter(f => f.path.endsWith('.html'));

// 2. Discover server routes
const serverCode = fs.readFileSync(path.join(__dirname, '..', 'server.js'), 'utf8');
const serverRoutes = [];
const endpointRegex = /req\.url === '([^']+)'|url === '([^']+)'|url\.startsWith\('([^']+)'\)/g;
let match;
while ((match = endpointRegex.exec(serverCode)) !== null) {
  const route = match[1] || match[2] || match[3];
  if (route && !serverRoutes.includes(route)) {
    serverRoutes.push(route);
  }
}

// 3. Data files in data/ and public/data/
const rootDataFiles = fs.existsSync(path.join(__dirname, '..', 'data')) ? fs.readdirSync(path.join(__dirname, '..', 'data')) : [];

// 4. Capacitor configuration
let capacitorConfig = null;
if (fs.existsSync(path.join(__dirname, '..', 'capacitor.config.json'))) {
  capacitorConfig = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'capacitor.config.json'), 'utf8'));
}

// 5. PWA Manifest
let manifest = null;
if (fs.existsSync(path.join(publicDir, 'manifest.json'))) {
  manifest = JSON.parse(fs.readFileSync(path.join(publicDir, 'manifest.json'), 'utf8'));
}

// 6. Summary metrics
console.log(JSON.stringify({
  totalPublicFiles: allPublicFiles.length,
  htmlPagesCount: htmlPages.length,
  htmlPages: htmlPages.map(p => p.path),
  serverRoutes,
  rootDataFiles,
  capacitorConfig,
  manifestName: manifest ? manifest.name : null,
  manifestShortName: manifest ? manifest.short_name : null,
  manifestStartUrl: manifest ? manifest.start_url : null
}, null, 2));
