/**
 * NoorDeen — Offline Tafsir Store (Phase 2)
 *
 * Loads the per-surah tafsir / asbab al-nuzul chunks produced by
 * scripts/fetch-tafsir.cjs:
 *
 *   data/tafsir/manifest.json      editions, coverage, rights metadata
 *   data/tafsir/surahs/001.json    { surah, ayahs: { "1": { en, ar, asbab[], asbabRange } } }
 *
 * Loading order is memory → IndexedDB → HTTP (service-worker cache first).
 * The store never generates commentary. Missing text is reported as missing so
 * the UI can say so honestly instead of inventing an explanation.
 */
(function (global) {
  'use strict';

  var DB_NAME = 'noordeen-tafsir';
  var DB_VERSION = 1;
  var SURAH_STORE = 'surahs';
  var MANIFEST_KEY = 'manifest';
  var META_STORE = 'meta';

  var memory = Object.create(null);
  var manifestPromise = null;
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
    return 'data/tafsir/surahs/' + String(number).padStart(3, '0') + '.json';
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
        console.warn('[TafsirStore] IndexedDB unavailable:', error);
        resolveDb(null);
        return;
      }
      request.onupgradeneeded = function (event) {
        var db = event.target.result;
        if (!db.objectStoreNames.contains(SURAH_STORE)) {
          db.createObjectStore(SURAH_STORE, { keyPath: 'surah' });
        }
        if (!db.objectStoreNames.contains(META_STORE)) {
          db.createObjectStore(META_STORE);
        }
      };
      request.onsuccess = function () { resolveDb(request.result); };
      request.onerror = function () {
        console.warn('[TafsirStore] IndexedDB open failed:', request.error);
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

  function idbClear(storeName) {
    return openDb().then(function (db) {
      if (!db) return false;
      return new Promise(function (resolveValue) {
        try {
          var tx = db.transaction(storeName, 'readwrite');
          tx.objectStore(storeName).clear();
          tx.oncomplete = function () { resolveValue(true); };
          tx.onerror = function () { resolveValue(false); };
          tx.onabort = function () { resolveValue(false); };
        } catch (error) {
          resolveValue(false);
        }
      });
    });
  }

  function isNonEmptyString(value) {
    return typeof value === 'string' && value.replace(/[\s\u200b-\u200f]/g, '').length > 0;
  }

  /**
   * A chunk is usable when it identifies a valid surah and every ayah entry has
   * at least one non-empty edition field. It must not claim to contain HTML.
   */
  function validateSurah(chunk) {
    if (!chunk || typeof chunk !== 'object') return false;
    if (!Number.isInteger(chunk.surah) || chunk.surah < 1 || chunk.surah > 114) return false;
    if (!chunk.ayahs || typeof chunk.ayahs !== 'object' || Array.isArray(chunk.ayahs)) return false;
    var keys = Object.keys(chunk.ayahs);
    if (keys.length === 0) return false;
    for (var i = 0; i < keys.length; i += 1) {
      var ayah = Number(keys[i]);
      if (!Number.isInteger(ayah) || ayah < 1 || ayah > 286) return false;
      var fields = chunk.ayahs[keys[i]];
      if (!fields || typeof fields !== 'object') return false;
      var hasText = isNonEmptyString(fields.en) || isNonEmptyString(fields.ar) ||
        (Array.isArray(fields.asbab) && fields.asbab.some(isNonEmptyString));
      if (!hasText) return false;
      if (isNonEmptyString(fields.en) && /<[a-z/][^>]*>/i.test(fields.en)) return false;
      if (isNonEmptyString(fields.ar) && /<[a-z/][^>]*>/i.test(fields.ar)) return false;
      if (Array.isArray(fields.asbab) && fields.asbab.some(function (text) {
        return isNonEmptyString(text) && /<[a-z/][^>]*>/i.test(text);
      })) return false;
    }
    return true;
  }

  function fetchJson(url) {
    return fetch(url, { credentials: 'same-origin' }).then(function (response) {
      if (!response.ok) throw new Error('HTTP ' + response.status + ' for ' + url);
      return response.json();
    });
  }

  function normalizeSurah(number) {
    var n = Number(number);
    if (!Number.isInteger(n) || n < 1 || n > 114) return null;
    return n;
  }

  /**
   * Load one surah's tafsir chunk: memory → IndexedDB → HTTP.
   * Resolves null when the chunk cannot be obtained; never fabricates text.
   */
  function getSurah(number) {
    var n = normalizeSurah(number);
    if (n === null) return Promise.resolve(null);
    if (memory[n]) return Promise.resolve(memory[n]);

    return idbGet(SURAH_STORE, n).then(function (stored) {
      if (validateSurah(stored)) {
        memory[n] = stored;
        return stored;
      }
      return fetchJson(resolve(surahPath(n))).then(function (chunk) {
        if (!validateSurah(chunk)) throw new Error('Invalid tafsir chunk ' + n);
        memory[n] = chunk;
        idbPut(SURAH_STORE, chunk);
        return chunk;
      }).catch(function (error) {
        console.warn('[TafsirStore] Could not load tafsir for surah ' + n + ':', error.message);
        return null;
      });
    });
  }

  /**
   * Return the bundled commentary fields for one verse, or null when no entry
   * exists. The returned object is a shallow copy so callers cannot mutate the
   * cached chunk.
   */
  function getVerse(surah, ayah) {
    var s = normalizeSurah(surah);
    var a = Number(ayah);
    if (s === null || !Number.isInteger(a) || a < 1) return Promise.resolve(null);
    return getSurah(s).then(function (chunk) {
      if (!chunk) return null;
      var fields = chunk.ayahs[String(a)];
      if (!fields) return null;
      return {
        surah: s,
        ayah: a,
        en: isNonEmptyString(fields.en) ? fields.en : null,
        ar: isNonEmptyString(fields.ar) ? fields.ar : null,
        asbab: Array.isArray(fields.asbab) ? fields.asbab.slice() : null,
        asbabRange: fields.asbabRange || null
      };
    });
  }

  /**
   * Manifest: editions, per-surah coverage and rights metadata. Cached in
   * memory and IndexedDB; resolves null if it cannot be read.
   */
  function getManifest() {
    if (manifestPromise) return manifestPromise;
    manifestPromise = idbGet(META_STORE, MANIFEST_KEY).then(function (stored) {
      if (stored && Array.isArray(stored.editions) && Array.isArray(stored.surahs)) return stored;
      return fetchJson(resolve('data/tafsir/manifest.json')).then(function (manifest) {
        if (!manifest || !Array.isArray(manifest.editions)) throw new Error('Invalid tafsir manifest');
        idbPut(META_STORE, manifest, MANIFEST_KEY);
        return manifest;
      });
    }).catch(function (error) {
      console.warn('[TafsirStore] Could not load tafsir manifest:', error.message);
      manifestPromise = null;
      return null;
    });
    return manifestPromise;
  }

  function getEditions() {
    return getManifest().then(function (manifest) {
      return manifest ? manifest.editions : [];
    });
  }

  function getEdition(id) {
    return getEditions().then(function (editions) {
      for (var i = 0; i < editions.length; i += 1) {
        if (editions[i].id === id) return editions[i];
      }
      return null;
    });
  }

  function getCoverage(surah) {
    var s = normalizeSurah(surah);
    if (s === null) return Promise.resolve(null);
    return getManifest().then(function (manifest) {
      if (!manifest || !Array.isArray(manifest.surahs)) return null;
      for (var i = 0; i < manifest.surahs.length; i += 1) {
        if (manifest.surahs[i].number === s) return manifest.surahs[i];
      }
      return null;
    });
  }

  function cachedCount() {
    return idbCount(SURAH_STORE);
  }

  function isCached(number) {
    var n = normalizeSurah(number);
    if (n === null) return Promise.resolve(false);
    if (memory[n]) return Promise.resolve(true);
    return idbGet(SURAH_STORE, n).then(function (stored) {
      return validateSurah(stored);
    });
  }

  function clear() {
    memory = Object.create(null);
    manifestPromise = null;
    return Promise.all([idbClear(SURAH_STORE), idbClear(META_STORE)]).then(function (results) {
      return results[0] && results[1];
    });
  }

  global.TafsirStore = {
    getSurah: getSurah,
    getVerse: getVerse,
    getManifest: getManifest,
    getEditions: getEditions,
    getEdition: getEdition,
    getCoverage: getCoverage,
    cachedCount: cachedCount,
    isCached: isCached,
    clear: clear,
    validateSurah: validateSurah
  };
})(typeof window !== 'undefined' ? window : globalThis);
