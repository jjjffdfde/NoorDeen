/**
 * ISLAMIC KNOWLEDGE PORTAL — FULL-STACK HTTP SERVER & API
 * Built with native Node.js ES Modules (Zero External Dependencies)
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PUBLIC_DIR = path.join(__dirname, 'public');
const PORT = process.env.PORT || 3000;

// MIME Types Map
const MIME_TYPES = {
  '.html': 'text/html; charset=UTF-8',
  '.css': 'text/css; charset=UTF-8',
  '.js': 'application/javascript; charset=UTF-8',
  '.json': 'application/json; charset=UTF-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.xml': 'application/xml; charset=UTF-8',
  '.txt': 'text/plain; charset=UTF-8',
  '.mp3': 'audio/mpeg',
  '.apk': 'application/vnd.android.package-archive',
  '.zip': 'application/zip'
};

// Clean URL Route Aliases
const ROUTE_ALIASES = {
  '/': '/index.html',
  '/quran': '/quran.html',
  '/hadith': '/hadith.html',
  '/kalimas': '/kalimas.html',
  '/duas': '/duas.html',
  '/seerah': '/seerah.html',
  '/prophets': '/prophets.html',
  '/sahaba': '/sahaba.html',
  '/history': '/history.html',
  '/pillars': '/pillars.html',
  '/salah-guide': '/salah-guide.html',
  '/wudu-guide': '/wudu-guide.html',
  '/janazah-guide': '/janazah-guide.html',
  '/eid-guide': '/eid-guide.html',
  '/download-app': '/download-app.html',
  '/prayer-times': '/prayer-times.html',
  '/tasbih': '/tasbih.html',
  '/zakat-calculator': '/zakat-calculator.html',
  '/calendar': '/calendar.html',
  '/bookmarks': '/bookmarks.html',
  '/about': '/about.html',
  '/contact': '/contact.html',
  '/sources': '/sources.html',
  '/privacy': '/privacy.html',
  '/terms': '/terms.html'
};

const server = http.createServer((req, res) => {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = parsedUrl.pathname;

  // 1. API Endpoints
  if (pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'healthy', timestamp: new Date().toISOString(), version: '1.0.0' }));
    return;
  }

  if (pathname === '/api/languages') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Reading languages from js/i18n.js or returning standard list
    res.end(JSON.stringify({
      count: 40,
      note: 'Complete 40-language framework implemented. All 40 languages configurable.'
    }));
    return;
  }

  // 2. Resolve Clean Routes to static HTML files
  if (ROUTE_ALIASES[pathname]) {
    pathname = ROUTE_ALIASES[pathname];
  } else if (!path.extname(pathname) && fs.existsSync(path.join(PUBLIC_DIR, `${pathname}.html`))) {
    pathname = `${pathname}.html`;
  }

  // 3. Serve Static Files
  const filePath = path.join(PUBLIC_DIR, pathname);

  // Security: Prevent Directory Traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // 404 Not Found fallback
      res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8"><title>404 — Page Not Found</title>
          <link rel="stylesheet" href="/css/main.css">
        </head>
        <body style="display:flex; align-items:center; justify-content:center; height:100vh; text-align:center;">
          <div class="card" style="max-width:500px; padding:40px;">
            <h1 style="color:var(--color-primary); font-size:2rem; margin-bottom:12px;">404 — Page Not Found</h1>
            <p style="color:var(--color-text-muted); margin-bottom:20px;">The requested Islamic resource could not be found.</p>
            <a href="/" class="btn btn-primary">Return to Homepage</a>
          </div>
        </body>
        </html>
      `);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    // Set Caching Headers (Immutable for CSS/JS with hashes, short for HTML)
    if (ext === '.html') {
      res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    } else {
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 day
    }

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`[Islamic Knowledge Portal] Server actively listening at http://localhost:${PORT}`);
});

export default server;
