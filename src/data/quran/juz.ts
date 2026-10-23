export interface JuzMeta {
  number: number;
  arabicName: string;
  name: string;
  startSurah: number;
  startSurahName: string;
  startAyah: number;
  endSurah: number;
  endSurahName: string;
  endAyah: number;
}

export const JUZ_LIST: JuzMeta[] = [
  { number: 1, arabicName: "آلم", name: "Alif Lam Meem", startSurah: 1, startSurahName: "Al-Fatihah", startAyah: 1, endSurah: 2, endSurahName: "Al-Baqarah", endAyah: 141 },
  { number: 2, arabicName: "سَيَقُولُ", name: "Sayaqulu", startSurah: 2, startSurahName: "Al-Baqarah", startAyah: 142, endSurah: 2, endSurahName: "Al-Baqarah", endAyah: 252 },
  { number: 3, arabicName: "تِلْكَ الرُّسُلُ", name: "Tilka-r-Rusul", startSurah: 2, startSurahName: "Al-Baqarah", startAyah: 253, endSurah: 3, endSurahName: "Ali 'Imran", endAyah: 92 },
  { number: 4, arabicName: "لَنْ تَنَالُوا", name: "Lan Tanalu", startSurah: 3, startSurahName: "Ali 'Imran", startAyah: 93, endSurah: 4, endSurahName: "An-Nisa", endAyah: 23 },
  { number: 5, arabicName: "وَالمُحْصَنَاتُ", name: "Wal-Muhsanat", startSurah: 4, startSurahName: "An-Nisa", startAyah: 24, endSurah: 4, endSurahName: "An-Nisa", endAyah: 147 },
  { number: 6, arabicName: "لَا يُحِبُّ اللهُ", name: "La Yuhibbullah", startSurah: 4, startSurahName: "An-Nisa", startAyah: 148, endSurah: 5, endSurahName: "Al-Ma'idah", endAyah: 81 },
  { number: 7, arabicName: "وَإِذَا سَمِعُوا", name: "Wa Iza Sami'u", startSurah: 5, startSurahName: "Al-Ma'idah", startAyah: 82, endSurah: 6, endSurahName: "Al-An'am", endAyah: 110 },
  { number: 8, arabicName: "وَلَوْ أَنَّنَا", name: "Wa Law Annana", startSurah: 6, startSurahName: "Al-An'am", startAyah: 111, endSurah: 7, endSurahName: "Al-A'raf", endAyah: 87 },
  { number: 9, arabicName: "قَالَ المَلَأُ", name: "Qalal-Mala'u", startSurah: 7, startSurahName: "Al-A'raf", startAyah: 88, endSurah: 8, endSurahName: "Al-Anfal", endAyah: 40 },
  { number: 10, arabicName: "وَاعْلَمُوا", name: "Wa'lamu", startSurah: 8, startSurahName: "Al-Anfal", startAyah: 41, endSurah: 9, endSurahName: "At-Tawbah", endAyah: 92 },
  { number: 11, arabicName: "يَعْتَذِرُونَ", name: "Ya'tadhiruna", startSurah: 9, startSurahName: "At-Tawbah", startAyah: 93, endSurah: 11, endSurahName: "Hud", endAyah: 5 },
  { number: 12, arabicName: "وَمَا مِنْ دَابَّةٍ", name: "Wa Mamin Da'bbah", startSurah: 11, startSurahName: "Hud", startAyah: 6, endSurah: 12, endSurahName: "Yusuf", endAyah: 52 },
  { number: 13, arabicName: "وَمَا أُبَرِّئُ", name: "Wa Ma Ubarri'u", startSurah: 12, startSurahName: "Yusuf", startAyah: 53, endSurah: 14, endSurahName: "Ibrahim", endAyah: 52 },
  { number: 14, arabicName: "رُبَمَا", name: "Rubama", startSurah: 15, startSurahName: "Al-Hijr", startAyah: 1, endSurah: 16, endSurahName: "An-Nahl", endAyah: 128 },
  { number: 15, arabicName: "سُبْحَانَ الَّذِي", name: "Subhana-lladhi", startSurah: 17, startSurahName: "Al-Isra", startAyah: 1, endSurah: 18, endSurahName: "Al-Kahf", endAyah: 74 },
  { number: 16, arabicName: "قَالَ أَلَمْ", name: "Qala Alam", startSurah: 18, startSurahName: "Al-Kahf", startAyah: 75, endSurah: 20, endSurahName: "Taha", endAyah: 135 },
  { number: 17, arabicName: "اقْتَرَبَ لِلنَّاسِ", name: "Iqtaraba Lin-Nasi", startSurah: 21, startSurahName: "Al-Anbiya", startAyah: 1, endSurah: 22, endSurahName: "Al-Hajj", endAyah: 78 },
  { number: 18, arabicName: "قَدْ أَفْلَحَ", name: "Qad Aflaha", startSurah: 23, startSurahName: "Al-Mu'minun", startAyah: 1, endSurah: 25, endSurahName: "Al-Furqan", endAyah: 20 },
  { number: 19, arabicName: "وَقَالَ الَّذِينَ", name: "Wa Qala-lladhina", startSurah: 25, startSurahName: "Al-Furqan", startAyah: 21, endSurah: 27, endSurahName: "An-Naml", endAyah: 55 },
  { number: 20, arabicName: "أَمَّنْ خَلَقَ", name: "Amman Khalaqa", startSurah: 27, startSurahName: "An-Naml", startAyah: 56, endSurah: 29, endSurahName: "Al-'Ankabut", endAyah: 45 },
  { number: 21, arabicName: "اتْلُ مَا أُوحِيَ", name: "Utlu Ma Oohiya", startSurah: 29, startSurahName: "Al-'Ankabut", startAyah: 46, endSurah: 33, endSurahName: "Al-Ahzab", endAyah: 30 },
  { number: 22, arabicName: "وَمَنْ يَقْنُتْ", name: "Wa Manyaqnut", startSurah: 33, startSurahName: "Al-Ahzab", startAyah: 31, endSurah: 36, endSurahName: "Ya-Sin", endAyah: 27 },
  { number: 23, arabicName: "وَمَا لِيَ", name: "Wa Maliya", startSurah: 36, startSurahName: "Ya-Sin", startAyah: 28, endSurah: 39, endSurahName: "Az-Zumar", endAyah: 31 },
  { number: 24, arabicName: "فَمَنْ أَظْلَمُ", name: "Faman Azlamu", startSurah: 39, startSurahName: "Az-Zumar", startAyah: 32, endSurah: 41, endSurahName: "Fussilat", endAyah: 46 },
  { number: 25, arabicName: "إِلَيْهِ يُرَدُّ", name: "Ilayhi Yuraddu", startSurah: 41, startSurahName: "Fussilat", startAyah: 47, endSurah: 45, endSurahName: "Al-Jathiyah", endAyah: 37 },
  { number: 26, arabicName: "حم", name: "Ha' Meem", startSurah: 46, startSurahName: "Al-Ahqaf", startAyah: 1, endSurah: 51, endSurahName: "Adh-Dhariyat", endAyah: 30 },
  { number: 27, arabicName: "قَالَ فَمَا خَطْبُكُمْ", name: "Qala Fama Khatbukum", startSurah: 51, startSurahName: "Adh-Dhariyat", startAyah: 31, endSurah: 57, endSurahName: "Al-Hadid", endAyah: 29 },
  { number: 28, arabicName: "قَدْ سَمِعَ اللهُ", name: "Qad Sami'a-llahu", startSurah: 58, startSurahName: "Al-Mujadila", startAyah: 1, endSurah: 66, endSurahName: "At-Tahrim", endAyah: 12 },
  { number: 29, arabicName: "تَبَارَكَ الَّذِي", name: "Tabaraka-lladhi", startSurah: 67, startSurahName: "Al-Mulk", startAyah: 1, endSurah: 77, endSurahName: "Al-Mursalat", endAyah: 50 },
  { number: 30, arabicName: "عَمَّ", name: "'Amma Yatasa'alun", startSurah: 78, startSurahName: "An-Naba", startAyah: 1, endSurah: 114, endSurahName: "An-Nas", endAyah: 6 }
];
