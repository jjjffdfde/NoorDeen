#!/usr/bin/env node
/**
 * Generate public/data/dr-israr/catalog.js from catalog.json.
 *
 * Why: the offline ZIP instructs users to open index.html directly from disk
 * (file://). Browsers block fetch() of local files, so the lecture page showed
 * "Catalog could not be loaded (Failed to fetch)". A plain <script> payload
 * loads fine over file://, http(s):// and inside the Capacitor WebView.
 *
 * catalog.json stays the single source of truth. Run this script after any
 * catalog update; the test suite asserts the two files are byte-for-byte
 * equivalent in content.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const JSON_PATH = path.join(ROOT, 'public', 'data', 'dr-israr', 'catalog.json');
const JS_PATH = path.join(ROOT, 'public', 'data', 'dr-israr', 'catalog.js');

function validate(catalog) {
  const errors = [];
  if (!catalog || typeof catalog !== 'object') errors.push('catalog is not an object');
  if (catalog.schemaVersion !== 1) errors.push(`unexpected schemaVersion: ${catalog.schemaVersion}`);
  if (!Array.isArray(catalog.videos)) errors.push('videos is not an array');
  if (!Array.isArray(catalog.series)) errors.push('series is not an array');
  if (!catalog.speaker || typeof catalog.speaker.name !== 'string') errors.push('speaker.name missing');
  if (!catalog.source || typeof catalog.source.primary !== 'string') errors.push('source.primary missing');

  const seen = new Set();
  (catalog.videos || []).forEach((v, i) => {
    const where = `videos[${i}]`;
    if (!v || typeof v !== 'object') { errors.push(`${where} is not an object`); return; }
    if (!v.id) errors.push(`${where}.id missing`);
    if (!v.title) errors.push(`${where}.title missing`);
    if (!v.series) errors.push(`${where}.series missing`);
    if (!v.language) errors.push(`${where}.language missing`);
    if (v.id) {
      if (seen.has(v.id)) errors.push(`${where}.id duplicated: ${v.id}`);
      seen.add(v.id);
    }
    try {
      const u = new URL(v.sourceUrl);
      if (u.protocol !== 'https:') errors.push(`${where}.sourceUrl is not https`);
    } catch (e) {
      errors.push(`${where}.sourceUrl invalid: ${v.sourceUrl}`);
    }
  });
  return errors;
}

function main() {
  if (!fs.existsSync(JSON_PATH)) {
    console.error('Missing catalog.json at', JSON_PATH);
    process.exit(1);
  }
  const catalog = JSON.parse(fs.readFileSync(JSON_PATH, 'utf8'));
  const errors = validate(catalog);
  if (errors.length) {
    console.error('Catalog validation failed:');
    errors.slice(0, 25).forEach((e) => console.error(' -', e));
    process.exit(1);
  }

  const banner = [
    '/* AUTO-GENERATED FILE - do not edit by hand.',
    ' * Source: public/data/dr-israr/catalog.json',
    ' * Generator: scripts/build-lecture-catalog-js.cjs',
    ' * Purpose: load the verified lecture catalog over file:// (offline ZIP),',
    ' * http(s):// (GitHub Pages) and the Capacitor Android WebView without fetch().',
    ' */',
  ].join('\n');

  const payload = 'window.__DR_ISRAR_CATALOG__ = ' + JSON.stringify(catalog) + ';\n';
  fs.writeFileSync(JS_PATH, banner + '\n' + payload, 'utf8');

  const bytes = fs.statSync(JS_PATH).size;
  console.log(`Wrote ${path.relative(ROOT, JS_PATH)} (${bytes} bytes, ${catalog.videos.length} records)`);
}

main();
