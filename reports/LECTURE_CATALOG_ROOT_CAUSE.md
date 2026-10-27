# Lecture Catalog `Failed to fetch` — Root Cause and Fix

**Date:** 27 October 2026  
**Component:** `public/dr-israr-ahmed.html`, `public/data/dr-israr/catalog.json`, offline ZIP, Android assets  
**Status:** Fixed in source, tested over HTTP with `fetch()` forcibly blocked, rebuilt into the offline bundle and APK.

---

## 1. Reported symptom

The lecture page displayed:

- `Catalog could not be loaded (Failed to fetch).`
- `Reset filters`
- `The local catalog file could not be read.`

This is the browser's `TypeError: Failed to fetch`, not a JSON or schema error.

## 2. Environments checked

| Environment | Result before fix | Evidence |
|---|---|---|
| Live GitHub Pages `https://jjjffdfde.github.io/NoorDeen/dr-israr-ahmed.html` | Worked — 148 cards rendered | Browser DOM check, 27 Oct 2026 |
| Live catalog URL `/NoorDeen/data/dr-israr/catalog.json` | HTTP 200, `application/json`, 94,559 bytes | Direct fetch |
| Local HTTP server (`http://localhost:3400`) | Worked — 148 cards | Browser DOM check |
| Offline ZIP opened as `file://…/index.html` | **Failed** | Offline instructions explicitly tell users to double-click `index.html` |
| Android WebView assets | JSON present at `assets/public/data/dr-israr/catalog.json` | APK extraction; device not available for runtime test |

Because the live site and local HTTP both rendered 148 records, the failure was **not** a wrong path, missing file, malformed JSON, GitHub Pages base path, or stale cache.

## 3. Root cause

The offline archive is documented to be launched by opening `index.html` directly from disk (`file://`). Browsers block `fetch()` of local files for security reasons, so:

```js
fetch('data/dr-israr/catalog.json')   // rejects under file://
```

rejects with `TypeError: Failed to fetch`. The page then showed its generic catch message. The JSON file was valid and present; only the transport was blocked.

## 4. Fix implemented

1. **Generated embedded payload** — `scripts/build-lecture-catalog-js.cjs` reads `catalog.json` and writes `public/data/dr-israr/catalog.js`:

   ```js
   window.__DR_ISRAR_CATALOG__ = { …148 verified records… };
   ```

   `catalog.json` remains the single source of truth. The generator validates schema version, speaker/source metadata, unique IDs, HTTPS source URLs and required fields before writing.

2. **Loader prefers the embedded payload** — `dr-israr-ahmed.html` loads `data/dr-israr/catalog.js` with a normal `<script>` tag (works over `file://`, HTTP and the Capacitor WebView), then:

   - uses `window.__DR_ISRAR_CATALOG__` when present;
   - falls back to `fetch('data/dr-israr/catalog.json')` for older copies of the archive;
   - validates the catalog before rendering;
   - distinguishes `file`, `network`, `invalid` and `empty` failures;
   - offers a retry button for network failures;
   - never renders partial or fabricated records.

3. **Service worker** — pre-caches `./data/dr-israr/catalog.js` alongside the JSON so the PWA has the same offline capability.

4. **Build pipeline** — both `build-offline-bundle.cjs` and `build-complete-apk.cjs` copy `public/` unchanged, so the embedded catalog ships automatically.

## 5. Verification

### 5.1 Embedded payload with `fetch()` blocked

A temporary copy of the page was served with:

```js
window.fetch = () => Promise.reject(new Error('fetch blocked (simulated file://)'));
```

Result:

- `window.__DR_ISRAR_CATALOG__` present
- **148 `.video-card` elements rendered**
- `148 of 148 lecture records shown`
- no error state

This proves the page no longer depends on `fetch()` when the embedded payload exists.

### 5.2 Missing payload + blocked `fetch()`

A second temporary copy removed the `catalog.js` script and blocked `fetch()`. Result:

- 0 cards
- `Catalog could not be loaded.`
- `The catalog request failed. Check your connection, then retry.`
- `Retry loading catalog` button present
- official Tanzeem archive fallback link present

No placeholder videos were invented.

### 5.3 Filters, search and reset

On the normal HTTP page:

| Action | Result |
|---|---|
| Search `muntakhib` | `2 of 148 lecture records shown` |
| Series filter `Muntakhab Nisab` | `2 of 148` |
| Language filter `English` | `17 of 148` |
| Reset filters | `148 of 148`, search field empty |

### 5.4 Automated tests

Suite 41 in `test/run-tests.js` asserts:

- `catalog.js` exists and assigns `window.__DR_ISRAR_CATALOG__`;
- the embedded object is JSON-identical to `catalog.json`;
- the lecture page loads `catalog.js` before using it;
- schema validation, `file://` detection, distinct error messages and retry action are present;
- the service worker pre-caches `catalog.js`.

Full suite: **1,509 executed / 1,509 passed / 0 failed** (after all fixes in this batch).

## 6. Build artifacts

| Artifact | Size | SHA-256 |
|---|---|---|
| `islamic-portal-release.apk` | 1,411,393 bytes | `50c53cad69a51e44adc7737ea892f0b6db0d470296e5297033253af6e57ec3e2` |
| `islamic-portal-offline-bundle.zip` | 1,311,325 bytes | `5196661a39d2b7cb490d611903aad6351282779d7bc72c1da6919608a682d668` |

Both artifacts contain `catalog.js` (80,225 bytes) and `catalog.json`, and the copied `app.js`, `search.js`, `config.js` and HTML match the source hashes exactly.

## 7. Remaining limitations

- The browser tool used for verification rejects `file://` URLs, so the literal `file://` launch could not be executed end-to-end. The `fetch()`-blocked simulation reproduces the exact failure mode and proves the embedded path works.
- No Android device or emulator is available (`adb` not on PATH), so the APK was not installed or launched. Static inspection confirms the assets are packaged.
- The catalog still covers pages 1–10 of the official Tanzeem archive (148 records, 147 unique uploads), not the full 74-page archive.
