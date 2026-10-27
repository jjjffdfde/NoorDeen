# Dr. Israr Ahmed Lecture Catalog — Methodology and Coverage

**Catalog built:** 26 October 2026
**File:** `public/data/dr-israr/catalog.json`
**Page:** `public/dr-israr-ahmed.html`
**Source:** [tanzeem.org — Dr. Israr Ahmed speaker archive](https://www.tanzeem.org/video_speakers/dr-israr-ahmed/)

---

## 1. What this is, and what it is not

This is a **catalog of links**. It is not a video archive.

- No video file is downloaded, stored, transcoded or re-uploaded by NoorDeen.
- Each record holds metadata plus the archive's own source URL and the YouTube ID found embedded on that source page.
- Playback uses a `youtube-nocookie.com` iframe created **only when the user clicks play**, so no third-party request is made on page load.
- Every card has a visible link back to the tanzeem.org page it came from.

The site therefore depends on the official archive and YouTube remaining available. If a video is removed at the source, this catalog cannot replace it.

---

## 2. How the catalog was built

1. Fetched the official speaker archive listing pages 1–10.
2. Parsed each listing for title, series code, episode number, language, source URL, publication date and the embedded YouTube ID.
3. Excluded entries with no embedded video (index/landing pages).
4. Assigned a stable record ID from the archive's own identifier (e.g. `04-002-016`).
5. De-duplicated by YouTube ID for counting purposes while **keeping** every record the source actually publishes.
6. Wrote `catalog.json` with `speaker`, `source`, `rights`, `series`, `excluded` and `videos`.

The two excluded entries, with reasons, are recorded in the JSON itself:

| Title | Reason for exclusion |
| :--- | :--- |
| "View All Videos of Dr Israr Ahmad" | No embedded video (index page) |
| "Bayan-ul-Quran by Dr. Israr Ahmad" | No embedded video (index page) |

---

## 3. Counts (verified against the JSON)

| Metric | Value |
| :--- | --: |
| Listing entries retrieved | 150 |
| Records kept | **148** |
| Records excluded | 2 |
| **Unique YouTube uploads** | **147** |
| Duplicate listing records | 1 |
| Series | **7** |
| Urdu records | **131** |
| English records | **17** |
| Pages retrieved | 10 |
| Pages the archive reports | **74** |

### Series breakdown

| Code | Series | Language | Records |
| :--- | :--- | :--- | --: |
| `03-003` | Muntakhab Nisab | Urdu | 2 |
| `03-004` | Al-Huda: Selected Course of Study of the Qur'an | Urdu | 72 |
| `04-001` | Arbaeen-e-Nawawi (1995 Series) | Urdu | 9 |
| `04-002` | Arbaeen-e-Nawawi (English) | English | 16 |
| `04-003` | Arbaeen-e-Nawawi (Urdu, 2019 Series) | Urdu | 47 |
| `04-004` | Arbaeen-e-Nawawi — Selected Hadith | Urdu | 1 |
| `04-005` | Do Ahadith, Do Lectures | English | 1 |
| | **Total** | | **148** |

Series counts sum exactly to 148, and Suite 40 asserts this.

**Browser check (26 October 2026):** 148 cards render; search `Arbaeen` → 73; series filter → 9; clearing the search → 148; the duplicate badge is visible on `04-002-016`; 0 console errors.

---

## 4. The duplicate

Two archive listings embed the same YouTube upload, `c6czfEhWVo8`:

| Record | Title | Published on source |
| :--- | :--- | :--- |
| `04-002-001` | Arbaeen-e-Nawawi -English – (Hadees 01 to 02) – (Dars 01) | 5 Sep 2019 |
| `04-002-016` | Arbaeen-e-Nawawi (Dars-e-Hadith in English) By Dr. Israr Ahmed | 12 Sep 2019 |

Both source pages were fetched and both contain the same YouTube ID, so this is a duplicate **at the source**, not a parsing error.

Handling: both records are kept (they exist on the source and removing one would silently drop a real listing), `04-002-016` is flagged `isDuplicate: true` with `duplicateOf: "04-002-001"`, the UI shows a "♻️ Same upload as 04-002-001" badge, and the page displays both **148 records** and **147 unique uploads** so the number is not inflated.

---

## 5. Coverage honesty

The archive reports **74 pages**; this catalog covers **pages 1–10** — roughly the 150 most recent listing entries. That means:

- The catalog is a substantial sample, **not** the complete lecture corpus.
- Missing material includes older series and any content added after retrieval.
- The page states this limitation in its own copy rather than implying completeness.

Coverage by series is uneven by nature: `03-004` (Al-Huda) alone accounts for 72 of 148 records, while three series have a single record each.

---

## 6. Interface behaviour

| Feature | Behaviour |
| :--- | :--- |
| Search | Free-text filter over title, series and record ID |
| Series filter | 7 options, derived from the JSON |
| Language filter | Urdu / English; English returns 17 of 148 |
| Sort | By series then episode |
| Play | Click-to-load `youtube-nocookie.com` embed with `autoplay=1&rel=0` |
| Source link | Every card links to its tanzeem.org page |
| Duplicate badge | Shown on `04-002-016` only |
| Failure state | If the catalog cannot be fetched, the page shows a link to the official archive instead of an empty grid |

Browser-verified on 26 October 2026: 148 cards rendered, "148 of 148 lecture records shown", English filter "17 of 148", embed URL `https://www.youtube-nocookie.com/embed/8FXHsF8AigA?autoplay=1&rel=0`, zero console errors.

---

## 7. Integrity assertions (Suite 40)

The test suite checks, and currently passes:

- 148 records exactly; 7 series exactly; 131 Urdu + 17 English = 148.
- Every record has a unique `id`.
- Unique YouTube IDs equal the declared `source.uniqueVideoCount` (147).
- Every duplicate flag points at a real record with the same YouTube ID.
- Every YouTube ID matches `^[A-Za-z0-9_-]{11}$`.
- Every `sourceUrl` starts with `https://www.tanzeem.org/`.
- Every `seriesCode` exists in the series array; series counts sum to 148.
- `rights.hosting` states that no video is hosted.
- No `.mp4`, `.m3u8` or `.webm` string appears anywhere in the catalog.
- The page uses `youtube-nocookie.com` and never `youtube.com/embed/`.
- The page and catalog are listed in `search.js`, `sitemap.xml` and the service worker pre-cache.

---

## 8. Rights and takedown

The catalog records the archive's own metadata and links. It does not claim ownership of the lectures or of the recordings. If Tanzeem-e-Islami or the rights holder asks for removal, the affected records can be deleted from `catalog.json` without touching any hosted media, because none is hosted here. The correction channel is the issue tracker linked from `contact.html`.
