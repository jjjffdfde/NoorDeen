# NoorDeen — SEO, Accessibility and Performance Audit

**Audited:** 26 October 2026
**Scope:** all 52 HTML pages, `robots.txt`, `sitemap.xml`, structured data, accessibility markup, asset weight and caching.
**Method:** static analysis of every HTML file plus browser checks of representative pages. Lighthouse, CrUX field data and a screen reader were **not available**; no score is invented.

---

## 1. SEO baseline (measured)

| Signal | Pages with signal | Total pages |
| :--- | --: | --: |
| `<title>` (5+ chars) | 52 | 52 |
| Meta description | 52 | 52 |
| Canonical URL | 52 | 52 |
| Open Graph title | 52 | 52 |
| Twitter card | 52 | 52 |
| JSON-LD block | 52 | 52 |
| `<h1>` | 52 | 52 |
| Viewport meta | 52 | 52 |
| Manifest link | 52 | 52 |
| Theme-color | 52 | 52 |
| `<html lang="en">` | 52 | 52 |

**Sitemap:** 52 unique `<loc>` entries, including 26 article URLs. **Robots:** valid `User-agent` rules; sitemap referenced.

**Structured data types present**

| Type | Count |
| :--- | --: |
| `BreadcrumbList` | 51 |
| `ListItem` | 135 |
| `FAQPage` | 38 |
| `Question` / `Answer` | 187 each |
| `Organization` | 2 |
| `WebSite` | 2 |
| `CollectionPage` | 1 |
| `SoftwareApplication` / `Offer` | 1 each |
| `Person` | 1 |
| `SearchAction` | 1 |

**Fix applied this cycle:** `index.html` was the only page missing `theme-color`; it now has `#0F5132`, so the count is 52/52.

**Honest limits**

- No ranking, backlink, indexing or Search Console data is available in this environment.
- Schema validity was checked structurally (JSON parses, required fields present), not through Google's Rich Results Test.
- Canonicals are absolute GitHub Pages URLs; a move to a custom domain would require regenerating them.

---

## 2. Accessibility

### 2.1 What is present

| Control | Status |
| :--- | :--- |
| `<html lang="en" dir="ltr">` on every page | Present |
| Single `<h1>` per page | Present (52/52) |
| Images with `alt` | 0 images missing `alt` |
| `:focus-visible` outline (light and dark) | Present in CSS |
| Search dialog labels and close button labels | Present |
| Mobile drawer `aria-expanded` / `aria-hidden` | Toggles correctly |
| Language modal `aria-label` | Present |
| Form labels on contact inputs | Present |
| Skip link | **Added this cycle** — injected on every page, targets `#main-content`, `main` receives `tabindex="-1"`, visible-state CSS verified |
| Keyboard `Escape` closes drawer | Verified |

### 2.2 Known accessibility gaps

| Gap | Detail | Severity |
| :--- | :--- | :--- |
| Heading-level jumps | 23 pages skip a level (e.g. `h2 → h4`, `h1 → h3`). Common where cards use `h4` without an `h3`. | Medium |
| Skip-link focus not machine-verified | Headless browser cannot grant document focus, so `:focus` and focus events do not fire. Presence, target and visible CSS were verified. | Low (environment) |
| No screen-reader session | NVDA/JAWS/VoiceOver not available. | Medium |
| No full WCAG 2.1 AA audit | Contrast, target size, reflow and motion were reviewed statically, not certified. | Medium |
| Some icon-only buttons rely on emoji + `aria-label` | Labels exist on primary controls; a full sweep of every card action was not performed. | Low |
| Responsive reflow | Viewport could not be changed in the browser tool; breakpoints exist in CSS but were not visually verified at 320/375/768/1024/1440. | Medium |

The About page no longer claims WCAG 2.1 AA certification.

### 2.3 Colour and focus
- Palette tokens are defined for light and dark themes; focus outlines use primary (light) and gold (dark).
- Contrast ratios were **not** calculated per pair in this cycle. A dedicated contrast pass is listed in `REMAINING_WORK.md`.

---

## 3. Performance and weight

### 3.1 Static weight

| Item | Size |
| :--- | --: |
| `public/` excluding downloads | ~5.34 MB |
| `js/data.js` | 246 KB |
| `js/quran.js` | 81 KB |
| `css/main.css` | 61 KB |
| `js/search.js` | 57 KB |
| `js/app.js` | 48 KB |
| `js/i18n.js` | 41 KB |
| `js/tools.js` | 19 KB |
| Largest pages | `sahaba.html` 431 KB, `hadith.html` 410 KB, `duas.html` 400 KB, `index.html` 315 KB |
| Offline bundle | 1,298,402 bytes (1.24 MB), 80 files |
| APK | 1,398,233 bytes (1.4 MB), 89 entries |

### 3.2 Loading strategy

- HTML is **network-first** in the service worker, so deployments are picked up immediately.
- Static same-origin assets are **cache-first**; all asset URLs carry `?v=20261026e` and the shell cache is `v13`.
- Downloads and `.sha256` files are **network-first** after this cycle's stale-checksum fix.
- External Quran API calls are network-first with cache fallback.
- No web fonts are downloaded; the design uses system font stacks, avoiding render-blocking font requests.
- Images are SVG/PNG icons; there is no hero photograph.

### 3.3 Performance risks

| Risk | Impact | Mitigation |
| :--- | :--- | :--- |
| `data.js` is 246 KB and parsed on every page | Adds parse time on low-end phones | Could be split per module or fetched lazily |
| `sahaba.html` / `hadith.html` / `duas.html` are 400–431 KB of static HTML | Slower first paint on 3G | Could paginate or lazy-render |
| All pages load `quran.js` (81 KB) even when unused | Wasted bytes | Could be conditionally loaded |
| External Quran API latency | Reader first load can take seconds; first call may fail and retry | Retry + fallback implemented; bundled surahs work offline |
| No HTTP/2 or CDN control on GitHub Pages | Limited tuning | Out of project control |

### 3.4 What was not measured

- Lighthouse Performance / Accessibility / SEO scores.
- Core Web Vitals (LCP, INP, CLS) in the field or lab.
- Time to interactive on a real mid-range Android device.
- Bandwidth-constrained load tests.

These are marked **unavailable**, not passed. A browser timing run was attempted but the automation timed out; no numbers are reported rather than guessed.

---

## 4. International SEO

- `hreflang` is not emitted. The UI is English-first and content is English; translated content lives inside the same URLs via client-side switching. Adding `hreflang` before real translated URLs exist would be misleading.
- Arabic and Urdu content blocks use `dir` attributes but the document remains `lang="en"`, which matches the actual interface language.
- Canonical URLs are self-referential and absolute.

**Recommendation:** if translated article URLs are created, add `hreflang` and translated canonicals at that point.

---

## 5. Summary scorecard (qualitative)

| Area | Rating | Basis |
| :--- | :--- | :--- |
| Technical SEO metadata | Strong | 52/52 on all core tags; valid sitemap and robots |
| Structured data | Good | Breadcrumb, FAQ, article, organisation, website; not Rich-Results-tested |
| Semantic HTML | Fair | Single h1 and landmarks, but 23 heading-level jumps |
| Keyboard access | Fair | Focus styles, skip link, Escape handling; skip-link focus not machine-verified |
| Screen-reader readiness | Unverified | No assistive technology session |
| Responsive layout | Unverified | Breakpoints present; viewport not changeable in this environment |
| Payload efficiency | Fair | No web fonts, but large data.js and 400 KB content pages |
| Caching/offline | Good | Versioned assets, SW v13, network-first HTML, network-first checksums |
| Measured performance | Unavailable | No Lighthouse/CrUX |

No numeric score is claimed. The site's public copy was corrected to avoid implying certification.
