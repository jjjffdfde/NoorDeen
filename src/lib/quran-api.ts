import { OFFLINE_SURAHS, OfflineSurahDetail, AyahData } from '@/data/quran/offline-surahs';
import { SURAHS, SurahMeta } from '@/data/quran/surahs';

export interface Reciter {
  id: string;
  name: string;
  subfolder: string;
}

export const RECITERS: Reciter[] = [
  { id: 'alafasy', name: 'Mishary Rashid Alafasy', subfolder: 'Alafasy_128kbps' },
  { id: 'abdulbasit', name: 'Abdul Basit Murattal', subfolder: 'Abdul_Basit_Murattal_192kbps' },
  { id: 'shatri', name: 'Abu Bakr Ash-Shatri', subfolder: 'Abu_Bakr_Ash-Shaatree_128kbps' },
  { id: 'ghamadi', name: 'Saad Al-Ghamadi', subfolder: 'Ghamadi_40kbps' },
  { id: 'husary', name: 'Mahmoud Khalil Al-Husary', subfolder: 'Husary_128kbps' },
];

export function getAyahAudioUrl(surahNumber: number, ayahNumber: number, reciterId: string = 'alafasy'): string {
  const reciter = RECITERS.find(r => r.id === reciterId) || RECITERS[0];
  const s = String(surahNumber).padStart(3, '0');
  const a = String(ayahNumber).padStart(3, '0');
  return `https://everyayah.com/data/${reciter.subfolder}/${s}${a}.mp3`;
}

const memoryCache = new Map<string, OfflineSurahDetail>();

export async function fetchSurahDetail(surahNumber: number): Promise<OfflineSurahDetail> {
  const cacheKey = `surah_${surahNumber}`;
  if (memoryCache.has(cacheKey)) {
    return memoryCache.get(cacheKey)!;
  }

  // Check bundled offline database first for instant load
  if (OFFLINE_SURAHS[surahNumber]) {
    const data = OFFLINE_SURAHS[surahNumber];
    memoryCache.set(cacheKey, data);
    return data;
  }

  const meta: SurahMeta | undefined = SURAHS.find(s => s.number === surahNumber);
  if (!meta) {
    throw new Error(`Surah ${surahNumber} not found.`);
  }

  try {
    // Attempt fetch from Al-Quran Cloud API (Uthmani Arabic, Saheeh English, Jalandhry Urdu)
    const res = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.sahih,ur.jalandhry`, {
      headers: { 'Accept': 'application/json' },
      next: { revalidate: 86400 } // Cache for 24 hours
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch from Quran API: status ${res.status}`);
    }

    const json = await res.json();
    if (json.code === 200 && Array.isArray(json.data) && json.data.length >= 3) {
      const arabicEdition = json.data[0];
      const englishEdition = json.data[1];
      const urduEdition = json.data[2];

      const ayahs: AyahData[] = arabicEdition.ayahs.map((arAyah: { numberInSurah: number; text: string }, idx: number) => {
        const numInSurah = arAyah.numberInSurah;
        const enText = englishEdition.ayahs[idx]?.text || '';
        const urText = urduEdition.ayahs[idx]?.text || '';

        return {
          numberInSurah: numInSurah,
          text: arAyah.text,
          translations: {
            en: enText,
            ur: urText
          },
          audioUrl: getAyahAudioUrl(surahNumber, numInSurah)
        };
      });

      const result: OfflineSurahDetail = {
        number: meta.number,
        name: meta.name,
        englishName: meta.englishName,
        englishNameTranslation: meta.englishNameTranslation,
        revelationType: meta.revelationType,
        numberOfAyahs: meta.numberOfAyahs,
        bismillahPre: meta.number !== 1 && meta.number !== 9,
        ayahs
      };

      memoryCache.set(cacheKey, result);
      return result;
    }
  } catch (err) {
    console.warn(`Quran API network fetch failed for Surah ${surahNumber}, checking fallback:`, err);
  }

  // If external fetch fails, return meta placeholder with instruction
  return {
    number: meta.number,
    name: meta.name,
    englishName: meta.englishName,
    englishNameTranslation: meta.englishNameTranslation,
    revelationType: meta.revelationType,
    numberOfAyahs: meta.numberOfAyahs,
    bismillahPre: meta.number !== 1 && meta.number !== 9,
    ayahs: []
  };
}
