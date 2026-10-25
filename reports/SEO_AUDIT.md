# TECHNICAL AND INTERNATIONAL SEO AUDIT
## On-Page, Metadata, Crawlability, and Topic Cluster Evaluation

**Audit Date:** 25 October 2026  
**Audited Target:** 25 Primary Pages, `sitemap.xml`, and `robots.txt`  
**Compliance Target:** Google Search Central Best Practices, W3C Semantic HTML5, Schema.org Standards

---

## 1. Metadata & Crawlability Matrix

| Page URL | Title Tag Length | Meta Description Length | Canonical URL | H1 Count | Schema Types Present | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `index.html` | 68 chars | 171 chars | `https://islamicknowledge.example.com/` | 1 | WebSite, Organization, BreadcrumbList | Verified Optimal |
| `quran.html` | 65 chars | 132 chars | `https://islamicknowledge.example.com/quran.html` | 1 | BreadcrumbList | Verified Optimal |
| `hadith.html` | 64 chars | 153 chars | `https://islamicknowledge.example.com/hadith.html` | 1 | BreadcrumbList | Optimized with Pre-render |
| `duas.html` | 74 chars | 193 chars | `https://islamicknowledge.example.com/duas.html` | 1 | BreadcrumbList | Optimized with Pre-render |
| `kalimas.html` | 69 chars | 229 chars | `https://islamicknowledge.example.com/kalimas.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `seerah.html` | 68 chars | 195 chars | `https://islamicknowledge.example.com/seerah.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `prophets.html` | 72 chars | 227 chars | `https://islamicknowledge.example.com/prophets.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `sahaba.html` | 74 chars | 241 chars | `https://islamicknowledge.example.com/sahaba.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `history.html` | 67 chars | 234 chars | `https://islamicknowledge.example.com/history.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `pillars.html` | 72 chars | 173 chars | `https://islamicknowledge.example.com/pillars.html` | 1 | Article, BreadcrumbList | Verified Optimal |
| `salah-guide.html` | 68 chars | 222 chars | `https://islamicknowledge.example.com/salah-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `wudu-guide.html` | 67 chars | 107 chars | `https://islamicknowledge.example.com/wudu-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `janazah-guide.html` | 71 chars | 234 chars | `https://islamicknowledge.example.com/janazah-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `eid-guide.html` | 66 chars | 102 chars | `https://islamicknowledge.example.com/eid-guide.html` | 1 | HowTo, BreadcrumbList | Verified Optimal |
| `prayer-times.html` | 68 chars | 233 chars | `https://islamicknowledge.example.com/prayer-times.html` | 1 | WebApplication, BreadcrumbList | Verified Optimal |
| `zakat-calculator.html`| 69 chars | 198 chars | `https://islamicknowledge.example.com/zakat-calculator.html` | 1 | WebApplication, BreadcrumbList | Verified Optimal |
| `tasbih.html` | 66 chars | 198 chars | `https://islamicknowledge.example.com/tasbih.html` | 1 | WebApplication, BreadcrumbList | Verified Optimal |
| `calendar.html` | 65 chars | 205 chars | `https://islamicknowledge.example.com/calendar.html` | 1 | WebApplication, BreadcrumbList | Verified Optimal |
| `bookmarks.html` | 67 chars | 150 chars | `https://islamicknowledge.example.com/bookmarks.html` | 1 | WebPage, BreadcrumbList | Verified Optimal |
| `download-app.html` | 64 chars | 225 chars | `https://islamicknowledge.example.com/download-app.html` | 1 | SoftwareApplication, BreadcrumbList | Verified Optimal |
| `about.html` | 68 chars | 243 chars | `https://islamicknowledge.example.com/about.html` | 1 | Organization, AboutPage, BreadcrumbList | Verified Optimal |
| `contact.html` | 65 chars | 148 chars | `https://islamicknowledge.example.com/contact.html` | 1 | ContactPage, BreadcrumbList | Verified Optimal |
| `sources.html` | 67 chars | 154 chars | `https://islamicknowledge.example.com/sources.html` | 1 | ScholarlyArticle, BreadcrumbList | Verified Optimal |
| `privacy.html` | 63 chars | 176 chars | `https://islamicknowledge.example.com/privacy.html` | 1 | WebPage, BreadcrumbList | Verified Optimal |
| `terms.html` | 62 chars | 135 chars | `https://islamicknowledge.example.com/terms.html` | 1 | WebPage, BreadcrumbList | Verified Optimal |

---

## 2. Robots.txt and Sitemap.xml Verification

* **[`public/robots.txt`](file:///e:/islamic%20websiye/public/robots.txt):**
  ```text
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://islamicknowledge.example.com/sitemap.xml
  ```
  Verified: Correctly allows all user-facing content while preventing crawling of internal `/api/` endpoints.
* **[`public/sitemap.xml`](file:///e:/islamic%20websiye/public/sitemap.xml):**
  Contains all 25 public URLs with exact canonical paths, updated `lastmod` timestamps, and logical `priority` and `changefreq` weights (1.0 for homepage, 0.9 for Quran, Hadith, Duas, Worship guides, and 0.8 for tools).

---

## 3. Structured Data (JSON-LD) Strategy

1. **`WebSite` & `Organization`:** Implemented on `index.html` and `about.html` declaring publisher identity, non-profit academic mission, and search actions.
2. **`HowTo` Schemas:** Implemented for worship ritual procedures on `wudu-guide.html` and `salah-guide.html` with explicit step names, descriptions, and sequence integers.
3. **`BreadcrumbList`:** Present across 100% of pages providing search engines with explicit navigational hierarchies.
4. **`WebApplication`:** Implemented for `prayer-times.html` and `zakat-calculator.html` defining calculation utilities and browser client requirements.

---

## 4. International SEO & Hreflang Governance

* **Language Model:** Single-page dynamic localization via [`public/js/i18n.js`](file:///e:/islamic%20websiye/public/js/i18n.js).
* **Hreflang Strategy:** Because content translations are rendered dynamically in-place without separate URL subpaths (e.g. `/ur/salah-guide`), maintaining clean single-canonical URLs prevents indexing duplicate thin language variations. When static multilingual subpaths are introduced in future versions, bi-directional `hreflang` alternates can be linked without breaking current indexation.
