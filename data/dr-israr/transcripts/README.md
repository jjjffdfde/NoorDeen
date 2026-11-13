# NoorDeen — Dr. Israr Ahmed transcript and subtitle manifest

This directory is the **only** place from which the lecture page loads lecture text.
It exists so that the page can tell the truth about what it has: at present, **no
authorized transcript or subtitle track is bundled**.

## Current audit (5 November 2026)

| Item | Count |
| :--- | --: |
| Catalog records | 399 |
| Records with bundled text | 0 |
| Authorized transcripts | 0 |
| Authorized translations | 0 |
| Verified subtitle tracks | 0 |
| AI-generated drafts | 0 |

The repository contains no `.srt`, `.vtt`, `.ass` or `.sbv` files, and no
transcript JSON/XML files. The Internet Archive item
`DrIsrar_BuQ_HD-Format` lists 930 files; its only text files are five Tanzeem
guideline documents, not lecture transcripts. YouTube caption availability is
not asserted and YouTube captions are not downloaded or redistributed.

## Adding a track

`manifest.json` is the source of truth. Add an object to `tracks` only when the
project holds a source that can be identified, attributed and lawfully
redistributed. Then run:

```text
node scripts/build-lecture-transcripts-js.cjs
```

Required fields:

```json
{
  "videoId": "BUQ-MP4-001",
  "language": "Urdu",
  "label": "Official Urdu transcript",
  "kind": "official",
  "source": "Publisher name and URL",
  "rights": "Written permission or licence statement",
  "copyright": "Attribution line shown to users",
  "segments": [
    { "start": 0, "end": 12.4, "text": "Original wording only." }
  ]
}
```

Allowed `kind` values:

- `official` — supplied or approved by the rights holder.
- `authorized-translation` — a translation the rights holder approved.
- `ai-generated-unverified` — a machine draft made with permission. The UI must
  show `AI-GENERATED TRANSCRIPT — UNVERIFIED` and the generator will reject the
  track if that exact label is missing from `label` or `copyright`.

Rules:

1. Never invent timestamps, wording or translations.
2. Keep the original language wording unchanged in `text`.
3. Sort segments by `start`; the generator validates order and bounds.
4. Quranic verses, hadith, names and religious references must be checked
   against reliable sources before they are presented as verified.
5. Do not copy YouTube captions or any other text without permission.

The page loads `manifest.json` over HTTP and `manifest.js` over `file://` and in
the Android WebView, where local JSON fetch is blocked.
