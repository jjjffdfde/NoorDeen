/**
 * ISLAMIC KNOWLEDGE PORTAL — UNIVERSAL SEARCH ENGINE
 */

const UniversalSearch = {
  search(query) {
    if (!query || query.trim().length < 2) return [];
    const q = query.trim().toLowerCase();
    const results = [];

    // 1. Search Surahs (English name, Arabic name, translation)
    ISLAMIC_DATA.surahs.forEach(s => {
      if (
        s.englishName.toLowerCase().includes(q) ||
        s.englishNameTranslation.toLowerCase().includes(q) ||
        s.name.includes(q)
      ) {
        results.push({
          type: 'Quran Surah',
          title: `Surah ${s.englishName} (${s.name})`,
          snippet: `${s.englishNameTranslation} • ${s.numberOfAyahs} Verses • ${s.revelationType}`,
          url: `quran.html?surah=${s.number}`
        });
      }
    });

    // 2. Search Offline Ayahs
    Object.values(ISLAMIC_DATA.offlineSurahs).forEach(s => {
      s.ayahs.forEach(a => {
        if (
          a.en.toLowerCase().includes(q) ||
          a.ur.includes(q) ||
          a.ar.includes(q)
        ) {
          results.push({
            type: 'Quran Verse',
            title: `Surah ${s.englishName} [${s.number}:${a.num}]`,
            snippet: a.en || a.ur || a.ar,
            url: `quran.html?surah=${s.number}#ayah-${a.num}`
          });
        }
      });
    });

    // 3. Search Hadith
    ISLAMIC_DATA.hadiths.forEach(h => {
      if (
        h.en.toLowerCase().includes(q) ||
        h.ur.includes(q) ||
        h.narrator.toLowerCase().includes(q) ||
        h.collection.toLowerCase().includes(q) ||
        h.topic.toLowerCase().includes(q)
      ) {
        results.push({
          type: 'Hadith',
          title: `${h.collection} #${h.number} (${h.topic})`,
          snippet: `"${h.en}" — Narrated by ${h.narrator}`,
          url: `hadith.html?id=${h.id}`
        });
      }
    });

    // 4. Search Kalimas
    ISLAMIC_DATA.kalimas.forEach(k => {
      if (
        k.name.toLowerCase().includes(q) ||
        k.en.toLowerCase().includes(q) ||
        k.ur.includes(q)
      ) {
        results.push({
          type: 'Six Kalimas',
          title: k.name,
          snippet: k.en,
          url: `kalimas.html#kalima-${k.id}`
        });
      }
    });

    // 5. Search Duas
    ISLAMIC_DATA.duas.forEach(d => {
      if (
        d.title.toLowerCase().includes(q) ||
        d.en.toLowerCase().includes(q) ||
        d.ur.includes(q)
      ) {
        results.push({
          type: 'Daily Dua',
          title: d.title,
          snippet: `"${d.en}" [${d.ref}]`,
          url: `duas.html#${d.id}`
        });
      }
    });

    // 6. Search Educational & Practice Modules
    const educationalPages = [
      {
        title: "Complete Janazah (Funeral Prayer) Guide",
        snippet: "4 Takbirs step-by-step, adult and child duas, Madhhab differences, and graveyard etiquette.",
        url: "janazah-guide.html",
        keywords: ["janazah", "funeral", "mayyit", "burial", "takbir", "grave", "death", "condolence", "taziyah", "fard kifayah"]
      },
      {
        title: "Complete Eid Prayer Guide (Eid al-Fitr & Eid al-Adha)",
        snippet: "Hanafi 6 extra Takbirs vs Shafi'i 12 Takbirs, Takbirat al-Tashreeq, Zakat al-Fitr, Qurbani, and Sunan.",
        url: "eid-guide.html",
        keywords: ["eid", "fitr", "adha", "tashreeq", "qurbani", "udhiyah", "takbeer", "khutbah", "shawwal", "dhul hijjah"]
      },
      {
        title: "Download Android APK & Offline Application",
        snippet: "Official v1.2.0 release APK download, SHA-256 verification, and 100% offline Quran reading.",
        url: "download-app.html",
        keywords: ["app", "apk", "android", "download", "offline", "install", "mobile", "pwa"]
      },
      {
        title: "Step-by-Step Salah (Five Daily Prayers) Guide",
        snippet: "Visual positions, rak'ahs, recitations, and meanings for Fajr, Dhuhr, Asr, Maghrib, and Isha.",
        url: "salah-guide.html",
        keywords: ["salah", "namaz", "prayer", "rakah", "ruku", "sujud", "tashahhud", "fard", "sunnah"]
      },
      {
        title: "Ablution (Wudu) & Purification Guide",
        snippet: "Obligatory steps, sunnah acts, tayammum, and nullifiers of wudu according to authentic Sunnah.",
        url: "wudu-guide.html",
        keywords: ["wudu", "ablution", "purification", "taharah", "tayammum", "ghusl", "wash"]
      },
      {
        title: "Astronomical Solar Prayer Times & Qiblah",
        snippet: "Precise calculated prayer times for any global city without mobile data or external APIs.",
        url: "prayer-times.html",
        keywords: ["prayer times", "salat times", "azan", "fajr", "maghrib", "dhuhr", "asr", "isha", "qibla"]
      },
      {
        title: "Zakat Calculator & Nisab Thresholds",
        snippet: "Calculate 2.5% Zakat on gold, silver, savings, investments, and business stock.",
        url: "zakat-calculator.html",
        keywords: ["zakat", "nisab", "charity", "gold", "silver", "wealth", "wealth tax"]
      }
    ];

    educationalPages.forEach(p => {
      if (
        p.title.toLowerCase().includes(q) ||
        p.snippet.toLowerCase().includes(q) ||
        p.keywords.some(k => k.includes(q) || q.includes(k))
      ) {
        results.push({
          type: 'Islamic Guide',
          title: p.title,
          snippet: p.snippet,
          url: p.url
        });
      }
    });

    return results;
  }
};

window.UniversalSearch = UniversalSearch;
