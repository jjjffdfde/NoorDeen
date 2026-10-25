# PHASE 12L — REMAINING RISKS, SCHOLARLY REVIEW DEPENDENCIES AND LIMITATIONS

**Audit Date:** October 24, 2026  
**Auditor:** Principal Software Architect & Islamic Content Quality Auditor  
**Purpose:** Honest disclosure of technical limitations, external operational dependencies, and areas strictly requiring qualified human scholarly review before production launch.  

---

## 1. Dependencies Requiring Human Scholarly Review

While all textual Quran verses, canonical Hadith narrations, and biographical monographs have been verified against authoritative classical sources, the following areas require formal review by qualified Islamic scholars:

1. **Multilingual Quran Translations (29 In-Progress Languages):**  
   The portal's 40-language framework contains verified, complete dictionaries and translations for 11 core languages (English, Urdu, Arabic, French, Indonesian, Turkish, Bengali, Hindi, Malay, Persian, Spanish). The remaining 29 language slots currently display a clear theological disclaimer advising users to consult verified languages while translations undergo scholarly review.  
   *Requirement:* Qualified native-speaking Islamic scholars must review and approve these translations before removing the disclaimer.
2. **Contemporary Jurisprudential Nuances (*Nawazil*):**  
   While foundational worship rulings (Salah, Wudu, Ghusl, Janazah, Eid, Zakat) reflect classical Sunni consensus and documented madhhab differences, modern financial questions (e.g., cryptocurrency zakat, contemporary stock trading, retirement accounts) must always be accompanied by the existing disclaimer advising consultation with local qualified Muftis.
3. **AdSense Sensitive Category Restrictions:**  
   When Google AdSense is activated via `PortalConfig.ADS_ENABLED = true`, the portal administrator must configure strict category blocking inside the Google AdSense dashboard to prevent ads containing interest (*riba*), alcohol, gambling, dating, or inappropriate imagery.

---

## 2. Infrastructure & Production Launch Dependencies

The following items could not be executed within the local codebase environment and represent operational deployment steps:

1. **Production Domain & CDN Hosting:**  
   The codebase currently defines `https://islamicknowledge.example.com/` as its canonical domain. For production deployment, the portal administrator must configure a custom registered domain (e.g., `islamicknowledgeportal.com`), provision an SSL/TLS certificate (Let's Encrypt / Cloudflare), and deploy via static CDN (Cloudflare Pages, Vercel, Netlify) or a Node.js server.
2. **Google Play Console Release Signing:**  
   The generated APK in `public/downloads/islamic-portal-release.apk` is an unsigned release binary. For official distribution via the Google Play Store, the APK/AAB must be signed with the organization's official release keystore and uploaded to the Google Play Developer Console.
3. **Search Engine Webmaster Indexing:**  
   Submitting `public/sitemap.xml` to Google Search Console and Bing Webmaster Tools requires ownership verification of the live public domain.

---

## 3. Prioritized Next Steps (P2 & P3 Recommendations)

1. **Dedicated Ramadan & Fasting Guide:** Create a standalone `fasting-guide.html` covering Suhoor, Iftar, medical exemptions, Fidya, and Kaffarah.
2. **Beginner "New to Islam" Learning Pathway:** Provide a structured introductory progression linking Kalimas $\rightarrow$ Purification $\rightarrow$ Salah $\rightarrow$ Five Pillars.
3. **Juz-by-Juz 30 Summaries:** Add thematic overviews of each of the 30 Juz to supplement the 114 Surah list.
4. **Qibla Direction Live Device Orientation Sensor:** Integrate `DeviceOrientationEvent` API where supported by mobile hardware.
5. **Hadith Commentary (*Sharh*) Expansion:** Provide expandable commentary notes on the 40 Hadith Nawawi traditions.
