export interface WuduStep {
  step: number;
  title: string;
  arabicTitle: string;
  isFard: boolean;
  description: string;
  times: string;
  supplication?: {
    arabic: string;
    transliteration: string;
    translation: string;
  };
}

export const WUDU_STEPS: WuduStep[] = [
  {
    step: 1,
    title: 'Intention (Niyyah) & Saying Bismillah',
    arabicTitle: 'النية والتسمية',
    isFard: false,
    description: 'Make the sincere intention in the heart to purify oneself for worship, and say "Bismillah" (In the name of Allah).',
    times: 'Once at the beginning',
    supplication: {
      arabic: 'بِسْمِ اللَّهِ',
      transliteration: 'Bismillaah',
      translation: 'In the name of Allah.'
    }
  },
  {
    step: 2,
    title: 'Washing Hands to the Wrists',
    arabicTitle: 'غسل اليدين إلى الرسغين',
    isFard: false,
    description: 'Wash both hands thoroughly up to the wrists three times, ensuring water passes between all fingers (Takhlil).',
    times: '3 times'
  },
  {
    step: 3,
    title: 'Rinsing the Mouth (Madmadah)',
    arabicTitle: 'المضمضة',
    isFard: false,
    description: 'Take a handful of water with the right hand, swish it thoroughly inside the mouth, and spit it out.',
    times: '3 times'
  },
  {
    step: 4,
    title: 'Sniffing Water into the Nostrils (Istinshaq & Istinthar)',
    arabicTitle: 'الاستنشاق والاستنثار',
    isFard: false,
    description: 'Inhale a little water gently into the nostrils using the right hand, then blow it out using the left hand.',
    times: '3 times'
  },
  {
    step: 5,
    title: 'Washing the Face (Fard)',
    arabicTitle: 'غسل الوجه (فرض)',
    isFard: true,
    description: 'Wash the entire face from hairline to the bottom of the chin, and from earlobe to earlobe.',
    times: '3 times (First is obligatory)'
  },
  {
    step: 6,
    title: 'Washing Forearms to the Elbows (Fard)',
    arabicTitle: 'غسل اليدين إلى المرفقين (فرض)',
    isFard: true,
    description: 'Wash the right forearm thoroughly from fingertips up to and including the elbow, then repeat for the left forearm.',
    times: '3 times each'
  },
  {
    step: 7,
    title: 'Wiping the Head and Ears (Masah) (Fard)',
    arabicTitle: 'مسح الرأس والأذنين (فرض)',
    isFard: true,
    description: 'Wet hands and wipe over the head from front hairline to the nape of the neck and back, then wipe the inside and back of both ears with index fingers and thumbs.',
    times: 'Once'
  },
  {
    step: 8,
    title: 'Washing Feet to the Ankles (Fard)',
    arabicTitle: 'غسل الرجلين إلى الكعبين (فرض)',
    isFard: true,
    description: 'Wash the right foot including the ankle bone and between toes, then wash the left foot likewise.',
    times: '3 times each'
  },
  {
    step: 9,
    title: 'Supplication After Wudu',
    arabicTitle: 'دعاء ما بعد الوضوء',
    isFard: false,
    description: 'Reciting the Shahadah and prayer for purification opens all eight gates of Paradise according to authentic Hadith.',
    times: 'Once upon completion',
    supplication: {
      arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ. اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ.',
      transliteration: 'Ash-hadu al-laa ilaaha illal-laahu wahdahoo laa shareeka lahoo, wa ash-hadu anna Muhammadan \'abduhoo wa Rasooluh. Allaahummaj-\'alnee minat-tawwaabeena waj-\'alnee minal-mutatahhireen.',
      translation: 'I bear witness that there is no deity except Allah alone without partner, and Muhammad is His servant and Messenger. O Allah! Make me among those who constantly repent and make me among those who purify themselves.'
    }
  }
];

export const WUDU_NULLIFIERS = [
  'Natural bodily discharges (urine, stool, passing gas)',
  'Deep sleep where awareness of bodily control is lost',
  'Loss of consciousness (fainting, intoxication, anesthesia)',
  'Direct naked skin-to-skin touch of the private parts with desire (scholarly nuance)',
  'State of Janabah requiring full bath (Ghusl)'
];
