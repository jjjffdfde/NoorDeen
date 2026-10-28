/**
 * NoorDeen — Offline Quran Store & Khatam Tracker (Phase 1)
 *
 * Provides:
 *  - IndexedDB persistence for the 114 bundled surah chunks
 *  - Network/cache fallback loading (works with the service worker)
 *  - Reading-position persistence
 *  - Khatam (complete-Quran) planning and progress maths
 *
 * The store never generates scripture. It only reads the verified JSON chunks
 * produced by scripts/fetch-quran-corpus.cjs.
 */
(function (global) {
  'use strict';

  var DB_NAME = 'noordeen-quran';
  var DB_VERSION = 1;
  var SURAH_STORE = 'surahs';
  var META_STORE = 'meta';
  var STATE_KEY = 'islamic_portal_quran_state';
  var TOTAL_AYAHS = 6236;

  var memory = Object.create(null);
  var dbPromise = null;

  function basePath() {
    if (global.App && typeof global.App.getBasePath === 'function') {
      return global.App.getBasePath();
    }
    if (global.App && typeof global.App.resolveUrl === 'function') {
      return global.App.resolveUrl('');
    }
    return './';
  }

  function resolve(path) {
    if (global.App && typeof global.App.resolveUrl === 'function') {
      return global.App.resolveUrl(path);
    }
    return basePath() + path;
  }

  function surahPath(number) {
    return 'data/quran/surahs/' + String(number).padStart(3, '0') + '.json';
  }

  function hasIndexedDB() {
    return typeof indexedDB !== 'undefined' && indexedDB !== null;
  }

  function openDb() {
    if (!hasIndexedDB()) return Promise.resolve(null);
    if (dbPromise) return dbPromise;
    dbPromise = new Promise(function (resolveDb) {
      var request;
      try {
        request = indexedDB.open(DB_NAME, DB_VERSION);
      } catch (error) {
        console.warn('[QuranStore] IndexedDB unavailable:', error);
        resolveDb(null);
        return;
      }
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        if (!db.objectStoreNames.contains(SURAH_STORE)) {
          db.createObjectStore(SURAH_STORE, { keyPath: 'number' });
        }
        if (!db.objectStoreNames.contains(META_STORE)) {
          db.createObjectStore(META_STORE);
        }
      };
      request.onsuccess = function () { resolveDb(request.result); };
      request.onerror = function () {
        console.warn('[QuranStore] IndexedDB open failed:', request.error);
        resolveDb(null);
      };
      request.onblocked = function () { resolveDb(null); };
    });
    return dbPromise;
  }

  function idbGet(storeName, key) {
    return openDb().then(function (db) {
      if (!db) return null;
      return new Promise(function (resolveValue) {
        try {
          var tx = db.transaction(storeName, 'readonly');
          var request = tx.objectStore(storeName).get(key);
          request.onsuccess = function () { resolveValue(request.result || null); };
          request.onerror = function () { resolveValue(null); };
        } catch (error) {
          resolveValue(null);
        }
      });
    });
  }

  function idbPut(storeName, value, key) {
    return openDb().then(function (db) {
      if (!db) return false;
      return new Promise(function (resolveValue) {
        try {
          var tx = db.transaction(storeName, 'readwrite');
          var store = tx.objectStore(storeName);
          if (key === undefined) store.put(value);
          else store.put(value, key);
          tx.oncomplete = function () { resolveValue(true); };
          tx.onerror = function () { resolveValue(false); };
          tx.onabort = function () { resolveValue(false); };
        } catch (error) {
          resolveValue(false);
        }
      });
    });
  }

  function idbCount(storeName) {
    return openDb().then(function (db) {
      if (!db) return 0;
      return new Promise(function (resolveValue) {
        try {
          var tx = db.transaction(storeName, 'readonly');
          var request = tx.objectStore(storeName).count();
          request.onsuccess = function () { resolveValue(request.result || 0); };
          request.onerror = function () { resolveValue(0); };
        } catch (error) {
          resolveValue(0);
        }
      });
    });
  }

  function validateSurah(chunk) {
    if (!chunk || typeof chunk !== 'object') return false;
    if (!Number.isInteger(chunk.number) || chunk.number < 1 || chunk.number > 114) return false;
    if (!Array.isArray(chunk.ayahs) || chunk.ayahs.length === 0) return false;
    if (Number.isInteger(chunk.numberOfAyahs) && chunk.ayahs.length !== chunk.numberOfAyahs) return false;
    return chunk.ayahs.every(function (ayah) {
      return ayah && Number.isInteger(ayah.num) && typeof ayah.ar === 'string' && ayah.ar.length > 0;
    });
  }

  function fetchJson(url) {
    return fetch(url, { credentials: 'same-origin' }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status + ' for ' + url);
      return response.json();
    });
  }

  /**
   * Load one surah: memory → IndexedDB → HTTP (service worker cache first).
   * Resolves null when the chunk cannot be obtained; never fabricates text.
   */
  function getSurah(number) {
    var n = Number(number);
    if (!Number.isInteger(n) || n < 1 || n > 114) return Promise.resolve(null);
    if (memory[n]) return Promise.resolve(memory[n]);

    return idbGet(SURAH_STORE, n).then(function (stored) {
      if (validateSurah(stored)) {
        memory[n] = stored;
        return stored;
      }
      return fetchJson(resolve(surahPath(n))).then(function (chunk) {
        if (!validateSurah(chunk)) throw new Error('Invalid surah chunk ' + n);
        memory[n] = chunk;
        idbPut(SURAH_STORE, chunk);
        return chunk;
      }).catch(function (error) {
        console.warn('[QuranStore] Could not load surah ' + n + ':', error.message);
        return null;
      });
    });
  }

  function getManifest() {
    return fetchJson(resolve('data/quran/manifest.json'));
  }

  /**
   * Fetch and persist the whole corpus. Progress is reported as
   * {done, total, failed} after each surah.
   */
  function downloadAll(onProgress) {
    var total = 114;
    var done = 0;
    var failed = 0;
    var numbers = [];
    for (var i = 1; i <= total; i += 1) numbers.push(i);

    return numbers.reduce(function (chain, n) {
      return chain.then(function () {
        return getSurah(n).then(function (chunk) {
          if (chunk) done += 1;
          else failed += 1;
          if (typeof onProgress === 'function') {
            onProgress({ done: done, total: total, failed: failed, current: n });
          }
        });
      });
    }, Promise.resolve()).then(function () {
      return { done: done, total: total, failed: failed };
    });
  }

  function cachedCount() {
    return idbCount(SURAH_STORE);
  }

  // --- Reading state & Khatam planner -------------------------------------

  function readState() {
    var fallback = {
      lastRead: null,
      completedSurahs: [],
      khatam: { days: 30, startDate: null }
    };
    try {
      var raw = global.localStorage ? global.localStorage.getItem(STATE_KEY) : null;
      if (!raw) return fallback;
      var parsed = JSON.parse(raw);
      return {
        lastRead: parsed.lastRead || null,
        completedSurahs: Array.isArray(parsed.completedSurahs) ? parsed.completedSurahs : [],
        khatam: parsed.khatam && typeof parsed.khatam === 'object'
          ? { days: Number(parsed.khatam.days) || 30, startDate: parsed.khatam.startDate || null }
          : fallback.khatam
      };
    } catch (error) {
      return fallback;
    }
  }

  function writeState(state) {
    try {
      if (global.localStorage) global.localStorage.setItem(STATE_KEY, JSON.stringify(state));
      return true;
    } catch (error) {
      console.warn('[QuranStore] Could not persist reading state:', error);
      return false;
    }
  }

  function setLastRead(surah, ayah) {
    var state = readState();
    state.lastRead = {
      surah: Number(surah),
      ayah: Number(ayah),
      timestamp: Date.now()
    };
    writeState(state);
    return state;
  }

  function toggleSurahComplete(surah) {
    var n = Number(surah);
    var state = readState();
    var index = state.completedSurahs.indexOf(n);
    if (index >= 0) state.completedSurahs.splice(index, 1);
    else state.completedSurahs.push(n);
    state.completedSurahs.sort(function (a, b) { return a - b; });
    writeState(state);
    return state;
  }

  function setKhatamDays(days) {
    var d = Number(days);
    if ([15, 30, 60].indexOf(d) === -1) d = 30;
    var state = readState();
    state.khatam = { days: d, startDate: state.khatam.startDate || new Date().toISOString().slice(0, 10) };
    writeState(state);
    return state;
  }

  function resetKhatam() {
    var state = readState();
    state.completedSurahs = [];
    state.khatam = { days: state.khatam.days || 30, startDate: new Date().toISOString().slice(0, 10) };
    writeState(state);
    return state;
  }

  // Ayah totals per surah, supplied by the page (ISLAMIC_DATA.surahs) or the
  // bundled manifest. Kept injectable so the maths stays unit-testable in Node.
  function ayahCountsFromMetadata(surahs) {
    if (!Array.isArray(surahs)) return null;
    var map = {};
    surahs.forEach(function (surah) {
      if (surah && Number.isInteger(surah.number)) map[surah.number] = surah.numberOfAyahs;
    });
    return map;
  }

  /**
   * Compute khatam progress.
   * @param {Object} state   output of readState()
   * @param {Object} counts  {surahNumber: ayahCount}
   */
  function computeKhatamProgress(state, counts) {
    var completed = (state && state.completedSurahs) || [];
    var total = 0;
    completed.forEach(function (n) {
      if (counts && counts[n]) total += counts[n];
    });
    var lastRead = state && state.lastRead;
    if (lastRead && counts && counts[lastRead.surah] && completed.indexOf(lastRead.surah) === -1) {
      total += Math.min(Math.max(Number(lastRead.ayah) || 0, 0), counts[lastRead.surah]);
    }
    total = Math.min(total, TOTAL_AYAHS);
    return {
      ayahsRead: total,
      totalAyahs: TOTAL_AYAHS,
      percent: Math.round((total / TOTAL_AYAHS) * 1000) / 10,
      surahsCompleted: completed.length
    };
  }

  /**
   * Daily reading plan. Returns ayahs and 604-page Mushaf targets, plus the
   * projected finish date. Pure function so it can be tested without a browser.
   */
  function computeKhatamPlan(days, startDate) {
    var d = Number(days);
    if ([15, 30, 60].indexOf(d) === -1) d = 30;
    var start = startDate ? new Date(startDate) : new Date();
    if (isNaN(start.getTime())) start = new Date();
    var perDay = Math.ceil(TOTAL_AYAHS / d);
    var pagesPerDay = Math.ceil(604 / d);
    var finish = new Date(start.getTime());
    finish.setDate(finish.getDate() + (d - 1));
    return {
      days: d,
      totalAyahs: TOTAL_AYAHS,
      ayahsPerDay: perDay,
      pagesPerDay: pagesPerDay,
      startDate: start.toISOString().slice(0, 10),
      finishDate: finish.toISOString().slice(0, 10)
    };
  }

  function daysRemaining(finishDate, today) {
    var finish = new Date(finishDate);
    var now = today ? new Date(today) : new Date();
    if (isNaN(finish.getTime())) return 0;
    var ms = finish.setHours(0, 0, 0, 0) - now.setHours(0, 0, 0, 0);
    return Math.max(0, Math.round(ms / 86400000));
  }

  // --- Audio helpers ------------------------------------------------------

  var RECITER_BASE = 'https://everyayah.com/data/';

  function buildAudioUrl(reciter, surah, ayah) {
    var r = reciter || 'Alafasy_128kbps';
    var s = String(Number(surah)).padStart(3, '0');
    var a = String(Number(ayah)).padStart(3, '0');
    return RECITER_BASE + r + '/' + s + a + '.mp3';
  }

  var REPEAT_MODES = ['none', 'ayah', 'ayah3', 'ayah5', 'surah'];

  function nextRepeatMode(mode) {
    var index = REPEAT_MODES.indexOf(mode);
    return REPEAT_MODES[(index + 1) % REPEAT_MODES.length];
  }

  var SPEEDS = [0.75, 1, 1.25];

  function nextPlaybackSpeed(speed) {
    var index = SPEEDS.indexOf(Number(speed));
    return SPEEDS[(index + 1) % SPEEDS.length];
  }

  var api = {
    TOTAL_AYAHS: TOTAL_AYAHS,
    REPEAT_MODES: REPEAT_MODES,
    SPEEDS: SPEEDS,
    getSurah: getSurah,
    getManifest: getManifest,
    downloadAll: downloadAll,
    cachedCount: cachedCount,
    validateSurah: validateSurah,
    readState: readState,
    writeState: writeState,
    setLastRead: setLastRead,
    toggleSurahComplete: toggleSurahComplete,
    setKhatamDays: setKhatamDays,
    resetKhatam: resetKhatam,
    computeKhatamProgress: computeKhatamProgress,
    computeKhatamPlan: computeKhatamPlan,
    daysRemaining: daysRemaining,
    ayahCountsFromMetadata: ayahCountsFromMetadata,
    buildAudioUrl: buildAudioUrl,
    nextRepeatMode: nextRepeatMode,
    nextPlaybackSpeed: nextPlaybackSpeed,
    surahPath: surahPath
  };

  global.QuranStore = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : globalThis);
