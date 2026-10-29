/**
 * ISLAMIC KNOWLEDGE PORTAL — PROGRESSIVE WEB APP SERVICE WORKER
 * Network-First Navigation Engine • Cache-First Static Assets • Audio Caching • Safe Cache Invalidation
 */

const CACHE_VERSION = 'v23';
const CACHE_NAME = 'islamic-portal-shell-v23';
const AUDIO_CACHE = 'islamic-portal-audio-v1';
const QURAN_CACHE = 'islamic-portal-quran-v1';
const TAFSIR_CACHE = 'islamic-portal-tafsir-v1';

const STATIC_ASSETS = [
  './',
  './index.html',
  './quran.html',
  './hadith.html',
  './kalimas.html',
  './duas.html',
  './seerah.html',
  './prophets.html',
  './sahaba.html',
  './history.html',
  './pillars.html',
  './dr-israr-ahmed.html',
  './data/dr-israr/catalog.json',
  './data/dr-israr/catalog.js',
  './salah-guide.html',
  './wudu-guide.html',
  './janazah-guide.html',
  './eid-guide.html',
  './download-app.html',
  './offline.html',
  './prayer-times.html',
  './tasbih.html',
  './zakat-calculator.html',
  './calendar.html',
  './bookmarks.html',
  './about.html',
  './contact.html',
  './sources.html',
  './privacy.html',
  './terms.html',
  './manifest.json',
  './css/main.css?v=20261029a',
  './js/config.js?v=20261029a',
  './js/data.js?v=20261029a',
  './js/i18n.js?v=20261029a',
  './js/tools.js?v=20261029a',
  './js/search.js?v=20261029a',
  './js/quran-store.js?v=20261029a',
  './js/tafsir-store.js?v=20261029a',
  './js/quran.js?v=20261029a',
  './js/thematic-index.js?v=20261029a',
  './data/quran/manifest.json',
  './data/tafsir/manifest.json',
  './data/tafsir/themes.json',
  './js/app.js?v=20261029a',
  './js/sahaba-urdu.js?v=20261029a',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-maskable-192.png',
  './icons/icon-maskable-512.png',
  './icons/icon-192.svg',
  './icons/icon-512.svg'
];

// 1. Install Event: Pre-cache core shell, then the full Quran corpus.
// Corpus caching is best-effort so one slow chunk cannot abort installation.
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline application shell:', CACHE_NAME);
      return cache.addAll(STATIC_ASSETS);
    }).then(() => preCacheQuranCorpus())
      .then(() => preCacheTafsirIndex())
      .then(() => self.skipWaiting())
  );
});

async function preCacheQuranCorpus() {
  try {
    const cache = await caches.open(QURAN_CACHE);
    const response = await fetch('./data/quran/manifest.json');
    if (!response.ok) throw new Error(`manifest HTTP ${response.status}`);
    const manifest = await response.json();
    const files = (manifest.surahs || []).map((surah) => `./data/quran/surahs/${surah.file}`);
    if (!files.length) throw new Error('empty Quran manifest');
    const results = await Promise.allSettled(files.map((file) => cache.add(file)));
    const failed = results.filter((result) => result.status === 'rejected').length;
    console.log(`[ServiceWorker] Quran corpus cached: ${files.length - failed}/${files.length} surahs`);
  } catch (error) {
    console.warn('[ServiceWorker] Quran corpus pre-cache skipped:', error.message);
  }
}

// The tafsir corpus is ~5.8 MB. Only the manifest and thematic index are
// pre-cached; surah chunks are cached on demand by the fetch handler below.
async function preCacheTafsirIndex() {
  try {
    const cache = await caches.open(TAFSIR_CACHE);
    const files = ['./data/tafsir/manifest.json', './data/tafsir/themes.json'];
    const results = await Promise.allSettled(files.map((file) => cache.add(file)));
    const failed = results.filter((result) => result.status === 'rejected').length;
    console.log(`[ServiceWorker] Tafsir index cached: ${files.length - failed}/${files.length} files`);
  } catch (error) {
    console.warn('[ServiceWorker] Tafsir index pre-cache skipped:', error.message);
  }
}

// 2. Activate Event: Clean obsolete caches safely
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          // Invalidate legacy application shell caches while preserving the
          // audio cache and the full Quran corpus cache.
          if (key !== CACHE_NAME && key !== AUDIO_CACHE && key !== QURAN_CACHE && key !== TAFSIR_CACHE) {
            console.log('[ServiceWorker] Removing legacy application shell cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Network-First for Navigation, Cache-First for Static Assets, Dedicated Audio Cache
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Audio files cache handling: Cache-First
  if (url.hostname.includes('everyayah.com') || url.pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.open(AUDIO_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request);
        if (cached) return cached;
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch {
          return new Response('Audio unavailable offline', { status: 503 });
        }
      })
    );
    return;
  }

  // Bundled tafsir: manifest and thematic index are network-first (small and
  // occasionally regenerated); surah chunks are cache-first so a verse can be
  // studied offline after it has been opened once.
  if (url.origin === self.location.origin && url.pathname.includes('/data/tafsir/')) {
    const isIndex = url.pathname.endsWith('/manifest.json') || url.pathname.endsWith('/themes.json');
    event.respondWith(
      caches.open(TAFSIR_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request, { ignoreSearch: true });
        if (!isIndex && cached) return cached;
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch (error) {
          if (cached) return cached;
          return new Response(JSON.stringify({ error: 'Tafsir data not cached offline' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })
    );
    return;
  }

  // Bundled Quran corpus: dedicated cache, checked before the generic shell.
  if (url.origin === self.location.origin && url.pathname.includes('/data/quran/surahs/')) {
    event.respondWith(
      caches.open(QURAN_CACHE).then(async (cache) => {
        const cached = await cache.match(event.request, { ignoreSearch: true });
        if (cached) return cached;
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch (error) {
          return new Response(JSON.stringify({ error: 'Surah not cached offline' }), {
            status: 503,
            headers: { 'Content-Type': 'application/json' }
          });
        }
      })
    );
    return;
  }

  // Network-First for HTML navigation requests to ensure fresh content and prevent stale cache across deployments
  const isNavigation = event.request.mode === 'navigate' ||
    (event.request.method === 'GET' && event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  if (isNavigation) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(async () => {
          // Device is offline or network failed: retrieve matched page from cache
          const cached = await caches.match(event.request);
          if (cached) return cached;

          // Informative offline page instead of silently serving the homepage.
          return (await caches.match('./offline.html')) ||
                 new Response('<h1>You are offline</h1><p>Open the cached Quran reader at quran.html.</p>', {
                   status: 200,
                   headers: { 'Content-Type': 'text/html; charset=utf-8' }
                 });
        })
    );
    return;
  }

  // Checksums and downloadable release assets must never be served stale:
  // Network-First with cache fallback so a rebuilt APK/ZIP hash is visible immediately.
  if (url.pathname.includes('/downloads/') || url.pathname.endsWith('.sha256')) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }

  // Same-origin static assets (CSS, JS, SVG, JSON): Cache-First with Network Fallback
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) return cachedResponse;

        return fetch(event.request).then((networkResponse) => {
          if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
            return networkResponse;
          }
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return networkResponse;
        });
      })
    );
    return;
  }

  // External APIs (e.g. Al-Quran Cloud): Network first with cache fallback
  event.respondWith(
    fetch(event.request).then((response) => {
      const cloned = response.clone();
      caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, cloned);
      });
      return response;
    }).catch(() => {
      return caches.match(event.request);
    })
  );
});
