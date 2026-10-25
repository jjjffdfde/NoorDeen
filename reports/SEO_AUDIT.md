# TECHNICAL AND INTERNATIONAL SEO AUDIT
## On-Page, Metadata, Crawlability, Schema.org, and Canonical Governance

**Audit Date:** 25 October 2026  
**Audited Target:** 25 Primary Pages, `sitemap.xml`, and `robots.txt`  
**Compliance Target:** Google Search Central Best Practices, W3C Semantic HTML5, Schema.org Standards  
**Verification Status:** 100% Passing across all 25 Pages  

---

## 1. Metadata & Crawlability Matrix

Every page specifies an immutable `<link rel="canonical">` tag matching its published URL on GitHub Pages. The root `/` and `/index.html` both canonicalize to `https://jjjffdfde.github.io/NoorDeen/`.

| Page URL | Title Tag Length | Meta Description Length | Canonical URL | H1 Count | Schema Types Present | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `index.html` | 68 chars | 171 chars | `https://jjjffdfde.github.io/NoorDeen/` | 1 | WebSite, Organization, BreadcrumbList | Verified Optimal |
| `quran.html` | 65 chars | 132 chars | `https://jjjffdfde.github.io/NoorDeen/quran.html` | 1 | BreadcrumbList | Verified Optimal |
| `hadith.html` | 64 chars | 153 chars | `https://jjjffdfde.github.io/NoorDeen/hadith.html` | 1 | BreadcrumbList | Pre-rendered Static Cards |
| `duas.html` | 74 chars | 193 chars | `https://jjjffdfde.github.io/NoorDeen/duas.html` | 1 | BreadcrumbList | Pre-rendered Static Cards |
| `kalimas.html` | 69 chars | 229 chars | `https://jjjffdfde.github.io/NoorDeen/kalimas.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `seerah.html` | 68 chars | 195 chars | `https://jjjffdfde.github.io/NoorDeen/seerah.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `prophets.html` | 72 chars | 227 chars | `https://jjjffdfde.github.io/NoorDeen/prophets.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `sahaba.html` | 74 chars | 241 chars | `https://jjjffdfde.github.io/NoorDeen/sahaba.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `history.html` | 67 chars | 234 chars | `https://jjjffdfde.github.io/NoorDeen/history.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `pillars.html` | 72 chars | 173 chars | `https://jjjffdfde.github.io/NoorDeen/pillars.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `salah-guide.html` | 68 chars | 222 chars | `https://jjjffdfde.github.io/NoorDeen/salah-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `wudu-guide.html` | 67 chars | 107 chars | `https://jjjffdfde.github.io/NoorDeen/wudu-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `janazah-guide.html` | 71 chars | 234 chars | `https://jjjffdfde.github.io/NoorDeen/janazah-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `eid-guide.html` | 66 chars | 102 chars | `https://jjjffdfde.github.io/NoorDeen/eid-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `prayer-times.html` | 68 chars | 233 chars | `https://jjjffdfde.github.io/NoorDeen/prayer-times.html` | 1 | WebApplication, FAQPage, BreadcrumbList | Verified Optimal |
| `zakat-calculator.html`| 69 chars | 198 chars | `https://jjjffdfde.github.io/NoorDeen/zakat-calculator.html` | 1 | WebApplication, FAQPage, BreadcrumbList | Dual-Nisab Schema |
| `tasbih.html` | 66 chars | 198 chars | `https://jjjffdfde.github.io/NoorDeen/tasbih.html` | 1 | WebApplication, BreadcrumbList | Verified Optimal |
| `calendar.html` | 65 chars | 205 chars | `https://jjjffdfde.github.io/NoorDeen/calendar.html` | 1 | WebApplication, BreadcrumbList | Verified Optimal |
| `bookmarks.html` | 67 chars | 150 chars | `https://jjjffdfde.github.io/NoorDeen/bookmarks.html` | 1 | WebPage, BreadcrumbList | Verified Optimal |
| `download-app.html` | 64 chars | 225 chars | `https://jjjffdfde.github.io/NoorDeen/download-app.html` | 1 | SoftwareApplication, BreadcrumbList | Inlined SHA-256 Hash |
| `about.html` | 68 chars | 243 chars | `https://jjjffdfde.github.io/NoorDeen/about.html` | 1 | Organization, AboutPage, BreadcrumbList | Verified Methodology |
| `contact.html` | 65 chars | 148 chars | `https://jjjffdfde.github.io/NoorDeen/contact.html` | 1 | ContactPage, FAQPage, BreadcrumbList | Open-Source Trust |
| `sources.html` | 67 chars | 154 chars | `https://jjjffdfde.github.io/NoorDeen/sources.html` | 1 | ScholarlyArticle, BreadcrumbList | Verified Optimal |
| `privacy.html` | 63 chars | 176 chars | `https://jjjffdfde.github.io/NoorDeen/privacy.html` | 1 | WebPage, BreadcrumbList | Zero-Profiling Policy |
| `terms.html` | 62 chars | 135 chars | `https://jjjffdfde.github.io/NoorDeen/terms.html` | 1 | WebPage, BreadcrumbList | Verified Optimal |

---

## 2. Robots.txt and Sitemap.xml Verification

* **[`public/robots.txt`](file:///e:/islamic%20websiye/public/robots.txt):**
  ```text
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://jjjffdfde.github.io/NoorDeen/sitemap.xml
  ```
  Correctly allows all user-facing content while preventing crawling of non-existent backend `/api/` paths.
* **[`public/sitemap.xml`](file:///e:/islamic%20websiye/public/sitemap.xml):**
  Contains all 25 public URLs with exact canonical paths, updated `lastmod` timestamps, and priority weights (1.0 for homepage, 0.9 for Quran, Hadith, Duas, and Worship guides, 0.8 for interactive tools).

---

## 3. Structured Data (JSON-LD) Strategy

1. **`WebSite` & `Organization`:** Implemented on `index.html` and `about.html` declaring publisher identity, open-source educational mission, and search actions.
2. **`HowTo` Schemas:** Implemented for worship ritual procedures on `wudu-guide.html`, `salah-guide.html`, `janazah-guide.html`, and `eid-guide.html` with explicit step names, descriptions, and sequence positions.
3. **`BreadcrumbList`:** Present across 100% of pages providing search engines with explicit navigational hierarchies.
4. **`FAQPage` Schemas:**
   - `prayer-times.html`: Answers questions regarding Hanafi vs Standard Asr (shadow factors 1 vs 2) and the three prohibited prayer times (*Auqat-e-Mamnoo'ah*).
   - `zakat-calculator.html`: Answers questions regarding Gold vs Silver Nisab, detailing both the classical South Asian / Hanafi standard (612.36g silver / 87.48g gold) and the Contemporary Metric / OIC standard (595g silver / 85g gold), 401(k) / retirement calculations, and shares.
   - `contact.html`: Answers questions regarding textual errata verification, translation contributions, and non-partisan educational status.

---

## 4. Search Engine Optimization Integrity

- **Zero Placeholder Domains:** Complete removal of `islamicknowledge.example.com` and `noordeen.org`.
- **Pre-rendered Crawlable Content:** `duas.html` and `hadith.html` have full static HTML content pre-rendered, providing search engine bots with immediate crawlable text without relying on client-side JavaScript execution.
- **Permanent LTR Root Invariant:** The root document maintains `dir="ltr"` and `lang="en"`, keeping the global navigation and search metadata structurally sound while allowing scoped `dir="rtl"` within Arabic and Urdu text passages.
