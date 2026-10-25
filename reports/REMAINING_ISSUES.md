# REMAINING ISSUES, EXTERNAL DEPENDENCIES & FUTURE MAINTENANCE
## Real Audit Tracking of Operational Limits, Dependencies, and Upgrades

**Audit Date:** 25 October 2026  
**Scope:** Transparent Assessment of External Services, API Keys, and Future Roadmap

---

## 1. External Credentials & Third-Party Service Dependencies

| Capability | Current Local Status | Production Requirement | Recommendation |
| :--- | :--- | :--- | :--- |
| **Real-Time Gold/Silver Spot Prices** | Deterministic market rates with 13 offline currency fallbacks in `tools.js` | Paid financial API (e.g. GoldAPI.io or Metals-API) requires subscriber API key | Maintain current reliable fallback rates for offline/PWA resilience; allow optional `PORTAL_GOLD_API_KEY` in `server.js` |
| **Live Currency Exchange Rates** | Deterministic exchange rates for 13 currencies embedded in `tools.js` | Open Exchange Rates or Frankfurter API | Current rates are stable; periodic quarterly updates to exchange constants in `tools.js` are sufficient |
| **Google Search Console & GA4** | Clean meta structure, verified sitemap, and robots.txt ready | Domain verification record (DNS TXT or HTML file verification) | Once deployed to custom domain, submit `https://<domain>/sitemap.xml` directly in Search Console |
| **Google AdSense Integration** | Ad slot placeholders and compliance policies (`privacy.html`, `terms.html`, `about.html`) present | Publisher Account ID (`ca-pub-XXXXXXXXXXXXXXXX`) | Insert approved AdSense script tag in `head` upon publisher approval |

---

## 2. High-Priority Maintenance Roadmap (Next 90 Days)

1. **Static Multilingual Routing (Phase 2 Roadmap):**
   * Currently, translations are dynamically applied in-browser via `public/js/i18n.js` with root English layout preservation.
   * Future enhancement: Generate static language subpaths (e.g. `/ur/duas`, `/ar/hadith`) with bi-directional `hreflang` attributes to target country-specific regional search queries.
2. **Offline Audio Caching for Extended Surahs:**
   * Currently, 10 primary Surahs are bundled in offline cache.
   * As storage permits, allow users to download optional audio bundles (e.g. Juz 30) for full offline listening on mobile PWA.
3. **Scholarly Tafsir Expansion:**
   * Continue expanding verse-by-verse commentary across remaining Surahs in `public/data/tafsir/` referencing Tafsir Ibn Kathir and Ma'arif al-Quran.
