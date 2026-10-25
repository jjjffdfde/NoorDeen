/**
 * ISLAMIC KNOWLEDGE PORTAL — PROGRESSIVE WEB APP SERVICE WORKER
 * Cache-First Offline Engine • Audio Caching • Safe Cache Invalidation
 */

const CACHE_NAME = 'islamic-portal-shell-v2';
const AUDIO_CACHE = 'islamic-portal-audio-v1';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/quran.html',
  '/hadith.html',
  '/kalimas.html',
  '/duas.html',
  '/seerah.html',
  '/prophets.html',
  '/sahaba.html',
  '/history.html',
  '/pillars.html',
  '/salah-guide.html',
  '/wudu-guide.html',
  '/janazah-guide.html',
  '/eid-guide.html',
  '/download-app.html',
  '/prayer-times.html',
  '/tasbih.html',
  '/zakat-calculator.html',
  '/calendar.html',
  '/bookmarks.html',
  '/about.html',
  '/contact.html',
  '/sources.html',
  '/privacy.html',
  '/terms.html',
  '/manifest.json',
  '/css/main.css',
  '/js/config.js',
  '/js/data.js',
  '/js/i18n.js',
  '/js/tools.js',
  '/js/search.js',
  '/js/quran.js',
  '/js/app.js',
  '/icons/icon-192.svg',
  '/icons/icon-512.svg'
];

// 1. Install Event: Pre-cache core shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline application shell');
      return cache.addAll(STATIC_ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 2. Activate Event: Clean obsolete caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME && key !== AUDIO_CACHE) {
            console.log('[ServiceWorker] Removing legacy cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Fetch Event: Cache-First for static, Network-First for external APIs
self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Audio files cache handling
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

  // Same-origin static assets: Cache-First
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
        }).catch(() => {
          // Fallback to index.html for navigation requests if offline
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
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
