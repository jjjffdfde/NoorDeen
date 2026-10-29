// scripts/build-thematic-index.cjs
// Builds a keyword-generated thematic verse index over the bundled English
// translation (Saheeh International, field `en`) in public/data/quran/surahs.
//
// This is a finding aid, not a scholarly thematic classification. Every theme
// records the keywords used, the number of matching verses and a capped sample
// of references, so the result can be audited and is never presented as tafsir.
//
// Usage: node scripts/build-thematic-index.cjs [--check]

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const CORPUS_DIR = path.join(ROOT, 'public', 'data', 'quran');
const OUT_FILE = path.join(ROOT, 'public', 'data', 'tafsir', 'themes.json');
const MAX_REFS = 40;
const SNIPPET_LENGTH = 180;

const THEMES = [
  {
    id: 'tawhid',
    title: 'Tawhid — the Oneness of God',
    description: 'Verses affirming that God is one, without partner, and alone worthy of worship.',
    keywords: ['there is no deity except', 'no god but', 'oneness', 'associate partners', 'polytheism', 'idols', 'graven images']
  },
  {
    id: 'mercy',
    title: 'Mercy & Forgiveness',
    description: 'Verses on divine mercy, pardon and the forgiveness of sins.',
    keywords: ['mercy', 'merciful', 'forgive', 'forgiveness', 'pardon', 'compassion']
  },
  {
    id: 'prayer',
    title: 'Prayer & Worship',
    description: 'Verses on ritual prayer, prostration, glorification and worship.',
    keywords: ['prayer', 'pray', 'prostration', 'prostrate', 'bow', 'worship', 'glorify']
  },
  {
    id: 'charity',
    title: 'Charity & Almsgiving',
    description: 'Verses on zakah, voluntary charity and spending for the poor.',
    keywords: ['charity', 'zakah', 'zakat', 'spend in the way', 'spend of what', 'the poor', 'the needy']
  },
  {
    id: 'fasting',
    title: 'Fasting & Ramadan',
    description: 'Verses on fasting and the month of Ramadan.',
    keywords: ['fasting', 'fast', 'ramadan']
  },
  {
    id: 'pilgrimage',
    title: 'Pilgrimage & the Sacred House',
    description: 'Verses on Hajj, Umrah and the Kaaba.',
    keywords: ['hajj', 'pilgrimage', 'kaaba', 'sacred house', 'umrah', 'sacred mosque']
  },
  {
    id: 'patience',
    title: 'Patience & Steadfastness',
    description: 'Verses on patience, endurance and remaining steadfast.',
    keywords: ['patience', 'patient', 'persevere', 'steadfast']
  },
  {
    id: 'gratitude',
    title: 'Gratitude & Thankfulness',
    description: 'Verses commanding gratitude and describing thankfulness.',
    keywords: ['grateful', 'thankful', 'gratitude', 'give thanks', 'thanks']
  },
  {
    id: 'justice',
    title: 'Justice & Oppression',
    description: 'Verses on justice, fairness, wrongdoing and oppression.',
    keywords: ['justice', 'just', 'equitable', 'wrongdoing', 'wrongdoers', 'oppression', 'oppressors']
  },
  {
    id: 'knowledge',
    title: 'Knowledge, Reason & Reflection',
    description: 'Verses inviting reflection, understanding and the pursuit of knowledge.',
    keywords: ['knowledge', 'reflect', 'reason', 'understand', 'signs', 'contemplate']
  },
  {
    id: 'family',
    title: 'Family & Marriage',
    description: 'Verses on marriage, spouses, parents and children.',
    keywords: ['marriage', 'wives', 'husband', 'spouse', 'parents', 'children', 'family', 'orphans']
  },
  {
    id: 'inheritance',
    title: 'Inheritance & Wealth',
    description: 'Verses on inheritance, bequests and the handling of wealth.',
    keywords: ['inheritance', 'inherit', 'bequest', 'wealth', 'property']
  },
  {
    id: 'trade',
    title: 'Trade, Debt & Usury',
    description: 'Verses on contracts, honest measure and the prohibition of usury.',
    keywords: ['trade', 'contract', 'debt', 'measure', 'weight', 'usury', 'riba', 'business']
  },
  {
    id: 'food',
    title: 'Food, Drink & Purity of Consumption',
    description: 'Verses on lawful food, intoxicants and what is permitted.',
    keywords: ['food', 'eat', 'drink', 'intoxicants', 'wine', 'pork', 'lawful', 'unlawful']
  },
  {
    id: 'creation',
    title: 'Creation & Nature',
    description: 'Verses on the creation of the heavens and earth and the natural world.',
    keywords: ['created', 'creation', 'heavens', 'earth', 'mountains', 'rain', 'winds', 'sun', 'moon', 'stars']
  },
  {
    id: 'hereafter',
    title: 'Resurrection & the Hereafter',
    description: 'Verses on the Day of Judgment, resurrection, Paradise and Hellfire.',
    keywords: ['resurrection', 'hereafter', 'day of judgment', 'day of resurrection', 'raised', 'reckoning', 'paradise', 'hellfire', 'garden', 'fire']
  },
  {
    id: 'unseen',
    title: 'Angels, Jinn & the Unseen',
    description: 'Verses mentioning angels, jinn, Satan and the unseen world.',
    keywords: ['angels', 'angel', 'jinn', 'unseen', 'shaytan', 'satan', 'iblis']
  },
  {
    id: 'prophets',
    title: 'Prophets & Messengers',
    description: 'Verses naming or describing the prophets and messengers.',
    keywords: ['prophet', 'messenger', 'moses', 'abraham', 'jesus', 'noah', 'david', 'solomon', 'joseph', 'adam']
  },
  {
    id: 'scripture',
    title: 'Scripture & Revelation',
    description: 'Verses on the Quran, earlier scriptures and divine revelation.',
    keywords: ['quran', 'scripture', 'book', 'revelation', 'revealed', 'gospel', 'torah', 'verses']
  },
  {
    id: 'covenant',
    title: 'Covenant, Oaths & Promises',
    description: 'Verses on covenants, pledges, oaths and keeping promises.',
    keywords: ['covenant', 'oath', 'promise', 'pledge']
  },
  {
    id: 'repentance',
    title: 'Repentance & Return to God',
    description: 'Verses on repentance and turning back to God.',
    keywords: ['repent', 'repentance', 'turn back', 'return to allah']
  },
  {
    id: 'trials',
    title: 'Trials & Hardship',
    description: 'Verses on testing, affliction, calamity and hardship.',
    keywords: ['trial', 'test', 'affliction', 'hardship', 'calamity', 'suffering']
  },
  {
    id: 'speech',
    title: 'Speech, Truth & Backbiting',
    description: 'Verses on truthful speech, falsehood, slander and gossip.',
    keywords: ['speech', 'speak', 'truth', 'lie', 'backbite', 'slander', 'gossip']
  },
  {
    id: 'humility',
    title: 'Humility & Arrogance',
    description: 'Verses on humility and the condemnation of arrogance.',
    keywords: ['humble', 'humility', 'arrogant', 'arrogance', 'proud', 'boast']
  },
  {
    id: 'parents',
    title: 'Parents & Kindness to Elders',
    description: 'Verses on honouring parents and kindness within the household.',
    keywords: ['parents', 'mother', 'father', 'kindness to parents']
  },
  {
    id: 'vulnerable',
    title: 'Orphans & the Vulnerable',
    description: 'Verses on orphans, widows, the weak and the oppressed.',
    keywords: ['orphan', 'orphans', 'widow', 'the weak', 'oppressed']
  },
  {
    id: 'war',
    title: 'War, Peace & Treaties',
    description: 'Verses on fighting, peace, treaties and the ethics of conflict.',
    keywords: ['fight', 'fighting', 'war', 'peace', 'treaty', 'enemy', 'captives']
  },
  {
    id: 'animals',
    title: 'Animals & Livestock',
    description: 'Verses mentioning cattle, birds, bees and other creatures.',
    keywords: ['cattle', 'livestock', 'camel', 'horse', 'bird', 'bee', 'fish', 'animal']
  },
  {
    id: 'provision',
    title: 'Water, Provision & Sustenance',
    description: 'Verses on rain, water, rivers, provision and sustenance.',
    keywords: ['water', 'rain', 'river', 'sea', 'provision', 'sustenance', 'fruit']
  },
  {
    id: 'purity',
    title: 'Purity & Purification',
    description: 'Verses on purification, cleanliness and ablution.',
    keywords: ['purify', 'pure', 'clean', 'ablution', 'wash']
  }
];

function escapeRegExp(text) {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function buildMatcher(keywords) {
  return new RegExp('\\b(?:' + keywords.map(escapeRegExp).join('|') + ')\\b', 'i');
}

function snippet(text) {
  const clean = String(text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= SNIPPET_LENGTH) return clean;
  const cut = clean.slice(0, SNIPPET_LENGTH);
  const lastSpace = cut.lastIndexOf(' ');
  return (lastSpace > 60 ? cut.slice(0, lastSpace) : cut).trim() + '…';
}

function readCorpus() {
  const manifestPath = path.join(CORPUS_DIR, 'manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  const surahs = [];
  for (const entry of manifest.surahs) {
    const file = path.join(CORPUS_DIR, 'surahs', entry.file);
    const chunk = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (!Array.isArray(chunk.ayahs)) throw new Error(`Invalid corpus chunk ${entry.file}`);
    surahs.push({ number: chunk.number, ayahs: chunk.ayahs });
  }
  return { manifest, surahs };
}

function build() {
  const { manifest, surahs } = readCorpus();
  const results = THEMES.map((theme) => {
    const matcher = buildMatcher(theme.keywords);
    const refs = [];
    let total = 0;
    for (const surah of surahs) {
      for (const ayah of surah.ayahs) {
        const text = String(ayah.en || '');
        if (!text || !matcher.test(text)) continue;
        total += 1;
        if (refs.length < MAX_REFS) {
          refs.push({ s: surah.number, a: ayah.num, t: snippet(text) });
        }
      }
    }
    return {
      id: theme.id,
      title: theme.title,
      description: theme.description,
      keywords: theme.keywords,
      totalVerses: total,
      shownVerses: refs.length,
      truncated: total > refs.length,
      verses: refs
    };
  });

  const output = {
    catalogVersion: '1.0.0',
    generatedAt: new Date().toISOString(),
    generatedBy: 'scripts/build-thematic-index.cjs',
    method: 'word-boundary keyword match',
    disclaimer:
      'This is a keyword-generated finding aid over the bundled English translation. It is not a scholarly thematic classification (tafsir mawdu\'i) and may miss relevant verses or include imperfect matches. Verify themes against published works before relying on them.',
    sourceEdition: {
      id: 'en.sahih',
      title: 'Saheeh International English translation',
      field: 'en',
      note: 'English text as bundled in the Phase 1 Quran corpus. See public/data/quran/manifest.json for source and licence metadata.'
    },
    corpus: {
      totalSurahs: manifest.totalSurahs,
      totalAyahs: manifest.totalAyahs
    },
    maxRefsPerTheme: MAX_REFS,
    totalThemes: results.length,
    themes: results
  };

  return output;
}

function check() {
  if (!fs.existsSync(OUT_FILE)) {
    console.error('themes.json missing; run without --check first');
    process.exit(1);
  }
  const data = JSON.parse(fs.readFileSync(OUT_FILE, 'utf8'));
  const problems = [];
  if (!Array.isArray(data.themes) || data.themes.length === 0) problems.push('no themes');
  for (const theme of data.themes || []) {
    if (!theme.id || !theme.title) problems.push('theme without id/title');
    if (!Array.isArray(theme.keywords) || theme.keywords.length === 0) problems.push(`${theme.id}: no keywords`);
    if (!Number.isInteger(theme.totalVerses) || theme.totalVerses < 0) problems.push(`${theme.id}: bad totalVerses`);
    if (!Array.isArray(theme.verses)) problems.push(`${theme.id}: missing verses`);
    for (const ref of theme.verses || []) {
      if (!Number.isInteger(ref.s) || ref.s < 1 || ref.s > 114) problems.push(`${theme.id}: bad surah ref`);
      if (!Number.isInteger(ref.a) || ref.a < 1) problems.push(`${theme.id}: bad ayah ref`);
      if (typeof ref.t !== 'string' || !ref.t) problems.push(`${theme.id}: empty snippet`);
    }
  }
  if (problems.length) {
    console.log(`THEMES CHECK FAILED (${problems.length}):`);
    problems.slice(0, 20).forEach((p) => console.log(' - ' + p));
    process.exit(1);
  }
  console.log(`THEMES CHECK OK: ${data.totalThemes} themes, ${data.themes.reduce((n, t) => n + t.totalVerses, 0)} total matches`);
}

if (process.argv.includes('--check')) {
  check();
} else {
  const output = build();
  fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
  fs.writeFileSync(OUT_FILE, JSON.stringify(output, null, 1) + '\n', 'utf8');
  const bytes = fs.statSync(OUT_FILE).size;
  console.log(`Wrote ${path.relative(ROOT, OUT_FILE)}: ${output.totalThemes} themes, ${bytes} bytes`);
  for (const theme of output.themes) {
    console.log(`  ${theme.id.padEnd(12)} ${String(theme.totalVerses).padStart(4)} verses${theme.truncated ? ` (showing ${theme.shownVerses})` : ''}`);
  }
}
