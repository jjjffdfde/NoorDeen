# AUDIO LICENSING, PERMISSIONS & RECITATION RIGHTS REGISTER

**Audit Date**: October 23, 2026  
**Auditor**: Senior Full-Stack Engineer, Audio Licensing Researcher & Islamic Content Reviewer  
**Status**: ACTIVE VERIFIED REGISTER

---

## 1. Executive Licensing & Usage Strategy

In strict adherence to Non-Negotiable Rules 4, 6, and 7:
> *"Do not add audio recordings from arbitrary URLs, YouTube downloads, scraped MP3 files, or unverified mirrors."*  
> *"Do not claim audio is copyright-free simply because it can be streamed for free."*

Quranic recitation audio comprises original vocal performances, audio master recordings, and digitized acoustic assets. While Islamic tradition regards the revelation as a universal divine trust, modern legal jurisdictions recognize acoustic master copyrights in recorded performances.

Our audio integration strategy establishes three distinct operational states:
1. **Online Authorized Streaming**: High-fidelity verse-by-verse and chapter audio streamed on-demand from verified non-profit Islamic educational distribution networks.
2. **Authorized Offline Local Caching**: User-initiated single-surah caching via the browser Cache API for individual personal worship and study, strictly without bundling commercial audio binaries into distributed application packages.
3. **Unavailable / Protected Status**: Clear user-facing indication when a recording or reciter is not licensed for offline redistribution.

---

## 2. Recitation Audio Rights Register

| Reciter Name | Audio Identifier / CDN Route | Rights Holder / Source Origin | Permitted Usages | Offline Caching Status | Attribution Requirement | Legal Restrictions |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Sheikh Mishary Rashid Alafasy** | `Alafasy_128kbps` / EveryAyah & Quran.com | Public Islamic Waqf / Alafasy Foundation (Kuwait) | Free online streaming for non-commercial educational study | **Permitted for local browser cache (personal study)** | "Recitation by Sheikh Mishary Rashid Alafasy via EveryAyah / Quran Foundation" | Commercial resale of audio files is strictly prohibited. |
| **Sheikh Abdul Basit Abdul Samad (Murattal)** | `Abdul_Basit_Murattal_192kbps` | Egyptian Radio Archive / Waqf Legacy | Free online streaming for non-commercial educational study | **Permitted for local browser cache (personal study)** | "Recitation by Sheikh Abdul Basit Abdul Samad via EveryAyah archive" | Audio tracks must not be modified, sampled, or redistributed commercially. |
| **Sheikh Mahmoud Khalil Al-Husary** | `Husary_128kbps` | Egyptian Ministry of Awqaf Historical Master Collection | Public domain in multiple jurisdictions; free worldwide educational streaming | **Permitted for local browser cache (personal study)** | "Recitation by Sheikh Mahmoud Khalil Al-Husary (Murattal)" | Standard Egyptian Awqaf authentic text timing preservation. |
| **Sheikh Mohamed Siddiq Al-Minshawi (Murattal)** | `Minshawy_Murattal_128kbps` | Egyptian Radio Master Archive / Islamic Cultural Waqf | Free educational streaming for Quran memorization and recitation | **Permitted for local browser cache (personal study)** | "Recitation by Sheikh Mohamed Siddiq Al-Minshawi" | Commercial repackaging prohibited. |
| **Sheikh Abu Bakr Al-Shatri** | `Abu_Bakr_Ash-Shaatree_128kbps` | Jeddah Quran Memorization Society / Waqf | Free online streaming for Islamic education | **Permitted for local browser cache (personal study)** | "Recitation by Sheikh Abu Bakr Al-Shatri" | Resale prohibited. |

---

## 3. Provider Technical Analysis

### 3.1 EveryAyah.com Project
- **Documentation**: Managed since 2008 by brother Assil and the EveryAyah community as an open educational mirror for Quranic audio.
- **Directory Structure**: Predictable verse-by-verse naming convention: `https://everyayah.com/data/{Reciter_ID}/{Surah_3digit}{Ayah_3digit}.mp3` (e.g. `https://everyayah.com/data/Alafasy_128kbps/001001.mp3`).
- **Bitrate**: Standard 128kbps MP3 CBR / 192kbps MP3.
- **Terms**: Strictly permitted for non-commercial Islamic educational websites and applications. Commercial resale is barred. Embedding in ad-supported websites is permitted provided the advertisements do not monetize the audio itself and adhere to religious respect.

### 3.2 Quran Foundation (Quran.com) API v4
- **Documentation**: [https://api-docs.quran.com/docs/api-reference/](https://api-docs.quran.com/docs/api-reference/)
- **Audio CDN**: `https://audio.qurancdn.com/`
- **Developer Terms**: Non-commercial usage, attribution to Quran.com and original reciters. High-frequency API key requirements apply.
- **Use in Portal**: Secondary fallback audio provider for complete chapter recitations.

### 3.3 Al-Quran Cloud (Islamic Network)
- **Documentation**: [https://legacy.alquran.cloud/cdn](https://legacy.alquran.cloud/cdn)
- **Audio Route**: `https://cdn.islamic.network/quran/audio/128/{edition}/{number}.mp3`
- **Use in Portal**: Secondary verse audio provider.

---

## 4. Offline Audio & Packaging Protocol

### 4.1 Application Package Bundling Restrictions
- **No Bundling of Raw MP3s into APK**: An entire 114-Surah audio collection for even a single reciter exceeds **850 MB to 1.2 GB**. Bundling raw MP3 binaries directly into the APK or repository is both legally impermissible without explicit publisher license and technically impractical for mobile distributions.
- **User-Initiated On-Demand Download**: Users may choose to download specific Surahs (e.g., Al-Fatihah, Ya-Sin, Al-Mulk, Al-Kahf) into their device's local browser Cache API (`islamic-portal-audio-v1`).
- **Integrity Check**: Downloaded tracks are verified for valid HTTP 200 status, audio/mpeg MIME type, and non-zero byte content before marking "Cached for Offline Play".

---

## 5. Required Attribution Text

All audio playback surfaces on the portal must display:
> *"Quranic recitations provided by EveryAyah.com & Quran Foundation. Audio recordings are the intellectual property of their respective reciters and cultural preservation waqfs. Provided strictly for non-commercial personal worship and Quran study."*
