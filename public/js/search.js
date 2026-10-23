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

    return results;
  }
};

window.UniversalSearch = UniversalSearch;
