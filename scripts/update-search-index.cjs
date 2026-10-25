const fs = require('fs');
const path = require('path');

const searchJsPath = path.join(__dirname, '..', 'public', 'js', 'search.js');
let content = fs.readFileSync(searchJsPath, 'utf8');

const newEntries = [
  {
    title: "Islamic Educational Articles & Knowledge Library",
    snippet: "Curated library of in-depth Islamic treatises, beginner guides, and 100-topic syllabus.",
    url: "articles/index.html",
    keywords: ["articles", "library", "guides", "treatises", "learning", "study", "syllabus", "roadmap", "knowledge"]
  },
  {
    title: "A Complete Beginner's Guide to Islam",
    snippet: "Foundational beliefs, purpose of worship, 6 articles of faith, 5 pillars, and learning pathway.",
    url: "articles/beginners-guide-to-islam.html",
    keywords: ["beginner", "new muslim", "convert", "revert", "basics", "beliefs", "learning", "intro", "introduction", "islam guide"]
  },
  {
    title: "How to Read and Understand the Quran",
    snippet: "Surah architecture, Makki vs Madani context, Arabic recitation merits, Tadabbur, and 15-minute daily routine.",
    url: "articles/how-to-read-and-understand-quran.html",
    keywords: ["read quran", "understand quran", "quran guide", "tadabbur", "tilawah", "quran study", "makki", "madani"]
  },
  {
    title: "Quran Translation vs Tafsir: Understanding the Critical Difference",
    snippet: "Why translation is not the Quran. Explores untranslatability, classical Tafsir, and transliteration pitfalls.",
    url: "articles/quran-translation-vs-tafsir.html",
    keywords: ["tafsir", "translation", "transliteration", "difference", "tabari", "ibn kathir", "meaning of quran", "ijaz"]
  },
  {
    title: "Tawhid and the Shahadah: Meaning, Categories & Significance",
    snippet: "Theological treatise on Rububiyyah, Uluhiyyah, Asma' was-Sifat, the 7 conditions of Shahadah, and negating Shirk.",
    url: "articles/tawhid-and-the-shahadah.html",
    keywords: ["tawhid", "shahadah", "monotheism", "rububiyyah", "uluhiyyah", "asma was sifat", "shirk", "riya", "creed", "aqeedah"]
  },
  {
    title: "The Five Pillars of Islam: A Detailed Learning Guide",
    snippet: "Scholarly guide to Shahadah, Salah, Zakat, Sawm, and Hajj with spiritual wisdom and proofs.",
    url: "articles/five-pillars-of-islam.html",
    keywords: ["five pillars", "arkan al-islam", "pillars", "shahadah", "salah", "zakat", "sawm", "hajj", "arkan"]
  },
  {
    title: "Salah: A Complete Beginner's Learning Guide",
    snippet: "Step-by-step prayer guide with Arabic recitations, meanings, postures, school differences, and Khushu'.",
    url: "articles/salah-complete-beginners-guide.html",
    keywords: ["salah guide", "how to pray", "namaz guide", "prayer steps", "rakah", "ruku", "sujud", "tashahhud", "fatihah"]
  },
  {
    title: "Wudu, Ghusl and Tayammum: A Practical Study Guide",
    snippet: "Taharah guide covering Quranic obligations, Sunan, nullifiers, footwear wiping, Ghusl bath, and dry ablution.",
    url: "articles/wudu-ghusl-tayammum-guide.html",
    keywords: ["wudu guide", "ghusl guide", "tayammum guide", "taharah", "purification", "ablution", "bath", "nawaqid"]
  },
  {
    title: "Hadith and Sunnah: Collections, Numbering Systems & Authenticity",
    snippet: "Mustalah al-Hadith guide: Sunnah vs Hadith, Isnad, Matn, Sahih criteria, Kutub al-Sittah, and numbering.",
    url: "articles/hadith-and-sunnah-authenticity.html",
    keywords: ["hadith guide", "authenticity", "isnad", "matn", "kutub al-sittah", "bukhari", "muslim", "numbering", "sahih", "daif"]
  },
  {
    title: "Daily Adhkar and Supplications: A Source-Based Guide",
    snippet: "Verified daily remembrance: morning, evening, post-prayer, and bedtime Adhkar with vocalized Arabic.",
    url: "articles/daily-adhkar-and-supplications.html",
    keywords: ["daily adhkar", "supplications", "morning adhkar", "evening adhkar", "sayyidul istighfar", "hisnul muslim", "tasbih fatimi"]
  },
  {
    title: "Zakat: A Detailed Educational and Calculation Guide",
    snippet: "Comprehensive Zakat treatise: Gold and Silver Nisab, eligible wealth, debt deductions, and 8 Quranic categories.",
    url: "articles/zakat-educational-calculation-guide.html",
    keywords: ["zakat guide", "zakat calculation", "nisab", "gold nisab", "silver nisab", "wealth purification", "8 recipients", "masarif"]
  }
];

const targetPattern = /keywords:\s*\["app",\s*"apk",\s*"android",\s*"download",\s*"offline",\s*"install",\s*"mobile",\s*"pwa"\]\s*\}/;

if (!targetPattern.test(content)) {
  console.error('Target pattern not found in search.js');
  process.exit(1);
}

const formattedEntries = ',\n' + newEntries.map(e => `  {\n    title: ${JSON.stringify(e.title)},\n    snippet: ${JSON.stringify(e.snippet)},\n    url: ${JSON.stringify(e.url)},\n    keywords: ${JSON.stringify(e.keywords)}\n  }`).join(',\n');

content = content.replace(targetPattern, (match) => match + formattedEntries);
fs.writeFileSync(searchJsPath, content, 'utf8');
console.log('Successfully appended 11 article entries to EDUCATIONAL_SEARCH_PAGES in search.js');
