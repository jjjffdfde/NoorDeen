#!/usr/bin/env node
/**
 * Bump the static asset cache-busting version across every published HTML page
 * and the service-worker shell cache. Keeps the deployed site from serving
 * stale CSS/JS after a release.
 *
 * Usage:
 *   node scripts/bump-asset-version.cjs 20261027a 14
 *     -> replaces ?v=<old> with ?v=20261027a
 *     -> sets CACHE_VERSION = 'v14' and islamic-portal-shell-v14
 */
'use strict';

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const OLD_VERSION_PATTERN = /\?v=[0-9a-z]+/gi;

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === 'downloads' || entry.name === 'node_modules') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

function main() {
  const newVersion = process.argv[2];
  const newCacheNumber = process.argv[3];
  if (!newVersion || !newCacheNumber) {
    console.error('Usage: node scripts/bump-asset-version.cjs <asset-version> <cache-number>');
    process.exit(1);
  }
  if (!/^[0-9a-z]+$/i.test(newVersion) || !/^\d+$/.test(newCacheNumber)) {
    console.error('Asset version must be alphanumeric; cache number must be an integer.');
    process.exit(1);
  }

  const htmlFiles = walk(PUBLIC_DIR);
  let changedFiles = 0;
  let replacements = 0;

  for (const file of htmlFiles) {
    const before = fs.readFileSync(file, 'utf8');
    const after = before.replace(OLD_VERSION_PATTERN, `?v=${newVersion}`);
    if (after !== before) {
      fs.writeFileSync(file, after, 'utf8');
      changedFiles += 1;
      replacements += (before.match(OLD_VERSION_PATTERN) || []).length;
    }
  }

  // Keep the article generator in sync so regenerated pages use the new version.
  const generator = path.join(__dirname, 'build-articles.cjs');
  if (fs.existsSync(generator)) {
    const before = fs.readFileSync(generator, 'utf8');
    const after = before.replace(OLD_VERSION_PATTERN, `?v=${newVersion}`);
    if (after !== before) {
      fs.writeFileSync(generator, after, 'utf8');
      changedFiles += 1;
    }
  }

  // Service worker shell cache must change or clients keep the old assets.
  const swPath = path.join(PUBLIC_DIR, 'service-worker.js');
  if (fs.existsSync(swPath)) {
    let sw = fs.readFileSync(swPath, 'utf8');
    const before = sw;
    sw = sw.replace(/CACHE_VERSION\s*=\s*'v\d+'/g, `CACHE_VERSION = 'v${newCacheNumber}'`);
    sw = sw.replace(/islamic-portal-shell-v\d+/g, `islamic-portal-shell-v${newCacheNumber}`);
    sw = sw.replace(OLD_VERSION_PATTERN, `?v=${newVersion}`);
    if (sw !== before) {
      fs.writeFileSync(swPath, sw, 'utf8');
      changedFiles += 1;
    }
  }

  console.log(`Asset version: ${newVersion}`);
  console.log(`Shell cache: v${newCacheNumber}`);
  console.log(`Files changed: ${changedFiles}`);
  console.log(`HTML asset references updated: ${replacements}`);
}

main();
