/**
 * Article 2: How to Read and Understand the Quran
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle2() {
  const tocItems = [
    { id: "nature-of-quran", title: "The Divine Nature of the Quran: The Uncreated Word" },
    { id: "structural-anatomy", title: "Structural Anatomy: Surahs, Ayahs, and Ajza'" },
    { id: "revelation-dynamics", title: "Revelation Dynamics: Makki vs Madani Milestones" },
    { id: "tilawah-vs-tadabbur", title: "Recitation (Tilawah) vs Contemplation (Tadabbur)" },
    { id: "sacred-etiquette", title: "Etiquette of Engagement (Adab al-Tilawah)" },
    { id: "asbab-al-nuzul", title: "Historical Context and Asbab al-Nuzul" },
    { id: "daily-study-framework", title: "A Sustainable 15-Minute Daily Study Routine" },
    { id: "key-takeaways", title: "Summary and Guidelines for Lifelong Study" }
  ];

  const relatedTools = [
    { icon: "📖", title: "Quran Reader & Translations", url: "../quran.html" },
    { icon: "🔍", title: "Quran Translation vs Tafsir", url: "quran-translation-vs-tafsir.html" },
    { icon: "🔖", title: "Bookmarked Ayahs", url: "../bookmarks.html" },
    { icon: "📿", title: "Daily Adhkar Guide", url: "daily-adhkar-and-supplications.html" }
  ];

  const faqItems = [
    {
      question: "Can I read the Quran in English or my native language if I do not know Arabic?",
      answer: "Yes, absolutely. Understanding the message of the Quran is an obligation for every Muslim. Reading an accurate translation is necessary for comprehending Allah's commands, spiritual lessons, and moral guidance. At the same time, one should strive to learn how to read the original Arabic phonetically for ritual prayer (Salah) and to receive the spiritual blessings of recitation."
    },
    {
      question: "Do I need ritual purity (Wudu) to read the Quran on a smartphone or digital app?",
      answer: "The majority of contemporary scholars and international Fiqh academies (including Al-Azhar, the Islamic Fiqh Academy, and Saudi Senior Scholars Council) hold that digital screens and electronic devices are not physical codices (Mushaf). Therefore, touching and reading the Quran on a smartphone, tablet, or website does not require Wudu, although having Wudu is superior and more respectful."
    },
    {
      question: "Can a woman read the Quran during menstruation (Hayd)?",
      answer: "Scholars agree that a menstruating woman may recite the Quran from memory or read from a digital screen or translation without touching the physical Arabic Mushaf. Many classical scholars, including Imam Malik and Imam Ibn Taymiyyah, permitted reading even with touching a barrier (like gloves) if she is a student, teacher, or fears forgetting her memorization."
    },
    {
      question: "Should I read the Quran from beginning to end, or read specific Surahs?",
      answer: "Both approaches are meritorious. Completing a full sequential recitation (Khatmah) from Surah Al-Fatihah to Surah An-Nas connects the reader with the complete divine narrative. For beginners, however, focusing thematically on Surah Al-Fatihah, Surah Al-Baqarah (especially Ayatul Kursi), and the short Surahs of Juz 30 (Amma) is often the most practical entry point."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        The Holy Quran is unlike any human book. It is not arranged chronologically, nor is it divided into systematic academic chapters. For someone picking it up for the first time, its sudden rhetorical shifts, repeating moral motifs, and cosmic scope can be disorienting. To truly benefit from the Quran, a reader must understand its structure, its revelation circumstances, the sacred etiquette of engagement, and the critical distinction between oral recitation and reflective contemplation.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="nature-of-quran" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Divine Nature of the Quran: The Uncreated Word
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        In Islamic theology, the Quran is the verbatim, uncreated speech of Allah (<em>Kalamullah</em>), revealed to Prophet Muhammad ﷺ through the Archangel Jibril (Gabriel) over a span of approximately 23 years (610–632 CE). It is not an inspired human composition, nor a prophetic memoir, nor a translation of earlier scriptures.
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "This is the Book about which there is no doubt, a guidance for those conscious of Allah."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Al-Baqarah (2:2)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Because every word in the Arabic text is divinely selected, the Quran has been preserved without a single letter altered across fourteen centuries. The miraculous preservation promised in Surah Al-Hijr (15:9)—<em>"Indeed, it is We who sent down the Quran and indeed, We will be its guardian"</em>—stands verified by both massive oral memorization chains (<em>Tawatur</em>) and ancient manuscript records.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="structural-anatomy" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. Structural Anatomy: Surahs, Ayahs, and Ajza'
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To navigate the Quran confidently, one must understand its traditional structural terminology:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">114 Surahs (Chapters)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            A Surah (سُورَة) is an independent chapter of variable length. The longest is Surah Al-Baqarah (286 verses), and the shortest are Surahs Al-Kawthar, Al-Asr, and An-Nasr (3 verses each). The order of Surahs was divinely instructed (<em>Tawqifi</em>) by the Prophet ﷺ.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">6,236 Ayahs (Verses / Signs)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            An Ayah (آيَة) literally translates to a "divine sign" or miracle. According to the standard Kufic counting system transmitted by Hafs from 'Asim, the Quran contains exactly 6,236 canonical verses.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">30 Ajza' (Juz / Parts)</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            To facilitate reading the entire Quran over the course of a 30-day month (especially during Ramadan), scholars divided the text into 30 roughly equal sections called <em>Ajza'</em> (singular: <em>Juz</em> or <em>Para</em> in South Asia).
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Ruku' & Manzil</h4>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            A <em>Ruku'</em> is a thematic paragraph marker indicated by the letter 'Ain (ع) in traditional South Asian prints. A <em>Manzil</em> is one of seven portions designed for completing the Quran weekly.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section id="revelation-dynamics" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. Revelation Dynamics: Makki vs Madani Milestones
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Every Surah is classified as either <strong>Makki</strong> (Meccan) or <strong>Madani</strong> (Medinan). According to the dominant scholarly definition articulated by scholars of Quranic sciences (<em>Uloom al-Quran</em>), this classification is based on the historic watershed of the <strong>Hijrah</strong> (the Prophet's migration from Makkah to Madinah in 622 CE):
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; overflow: hidden; margin: 24px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 14px 18px; color: var(--color-primary);">Dimension</th>
              <th style="padding: 14px 18px; color: var(--color-primary);">Makki Surahs (86 Surahs)</th>
              <th style="padding: 14px 18px; color: var(--color-primary);">Madani Surahs (28 Surahs)</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 18px; font-weight: 700;">Historical Period</td>
              <td style="padding: 12px 18px;">Prior to the Hijrah (610–622 CE)</td>
              <td style="padding: 12px 18px;">Following the Hijrah (622–632 CE)</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 18px; font-weight: 700;">Core Themes</td>
              <td style="padding: 12px 18px;">Tawhid (monotheism), resurrection, Day of Judgment, Day of Reckoning, ethical character, stories of early prophets.</td>
              <td style="padding: 12px 18px;">Civil legislation, family law, inheritance, Zakat distribution, contracts, treaties, defense, interfaith relations.</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 18px; font-weight: 700;">Style & Tone</td>
              <td style="padding: 12px 18px;">Rhythmic, concise, powerful oaths, evocative imagery, short potent verses.</td>
              <td style="padding: 12px 18px;">Detailed, discursive, legal prose, extensive historical dialogues, longer verses.</td>
            </tr>
            <tr>
              <td style="padding: 12px 18px; font-weight: 700;">Common Forms of Address</td>
              <td style="padding: 12px 18px;"><em>"O mankind!"</em> (يَا أَيُّهَا النَّاسُ)</td>
              <td style="padding: 12px 18px;"><em>"O you who believe!"</em> (يَا أَيُّهَا الَّذِينَ آمَنُوا)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Understanding whether a verse is Makki or Madani prevents anachronistic misreadings and illuminates how divine revelation nurtured the early Muslim community gradually—from theological conviction to legal and social governance.
      </p>
    </section>

    <!-- Section 4 -->
    <section id="tilawah-vs-tadabbur" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. Recitation (Tilāwah) vs Contemplation (Tadabbur)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islamic scholarship recognizes two distinct, complementary modes of interacting with the Quran:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin: 24px 0;">
        <div class="card" style="padding: 22px; background: var(--color-card); border-left: 4px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Tilāwah (Sacred Recitation)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7;">
            The oral recitation of the exact Arabic text according to the phonetic rules of Tajweed. The Prophet ﷺ declared: <em>"Whoever recites a letter from the Book of Allah will receive one reward, and each reward is multiplied by ten. I do not say that Alif-Lam-Meem is a letter; rather Alif is a letter, Lam is a letter, and Meem is a letter"</em> (Jami' at-Tirmidhi #2910). Tilawah cleanses the tongue, calms the nervous system, and generates spiritual light.
          </p>
        </div>

        <div class="card" style="padding: 22px; background: var(--color-card); border-left: 4px solid var(--color-gold);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Tadabbur (Deep Contemplation)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7;">
            The intellectual and spiritual engagement with the meaning of the verses. Allah explicitly criticizes reading without reflection: <em>"Then do they not reflect upon the Quran, or are there locks upon their hearts?"</em> (Surah Muhammad 47:24). Tadabbur asks: <em>What is Allah teaching me in this verse? What moral flaw does this diagnose in my character? How can I apply this today?</em>
          </p>
        </div>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        The ideal reader marries both disciplines: honoring the Arabic recitation with the tongue while absorbing the meaning and lessons with the heart and intellect.
      </p>
    </section>

    <!-- Section 5 -->
    <section id="sacred-etiquette" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Etiquette of Engagement (Ādāb al-Tilāwah)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Because the Quran is the speech of the King of kings, classical scholars detailed specific physical and spiritual etiquettes when approaching it:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 24px;">
        <li><strong>Physical Cleanliness (Tahārah):</strong> It is highly recommended to perform Wudu prior to recitation. When handling a physical Arabic Mushaf, ritual purity is required by the consensus of the four Sunni schools of jurisprudence (Surah Al-Waqi'ah 56:79).</li>
        <li><strong>Sincere Intention (Ikhlāṣ):</strong> Approaching the book not to debate, boast, or critique, but humbly seeking divine guidance and personal transformation.</li>
        <li><strong>Seeking Refuge (Isti'ādhah):</strong> Saying <em>A'ūdhu billāhi min ash-shayṭānir-rajīm</em> ("I seek refuge in Allah from Satan the accursed") before commencing reading, as commanded in Surah An-Nahl (16:98).</li>
        <li><strong>The Basmalah:</strong> Reciting <em>Bismillāhir-Raḥmānir-Raḥīm</em> ("In the name of Allah, the Entirely Merciful, the Especially Merciful") at the start of every Surah (except Surah At-Tawbah).</li>
        <li><strong>Measured Pacing (Tartīl):</strong> Reciting slowly with proper pronunciation and reflection, pausing at verses of mercy to ask Allah and at verses of warning to seek protection (Surah Al-Muzzammil 73:4).</li>
      </ul>
    </section>

    <!-- Section 6 -->
    <section id="asbab-al-nuzul" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Historical Context and Asbāb al-Nuzūl
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Many verses of the Quran were revealed in response to specific historical events, questions posed to the Prophet ﷺ, crises in the community, or military engagements. The discipline that records these historical backdrops is called <strong>Asbāb al-Nuzūl</strong> (Occasions of Revelation).
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        For example, verses concerning combat, treaties, or hypocrites cannot be understood in isolation from their specific 7th-century context. Attempting to deduce universal rulings from an individual verse without knowing its *Sabab al-Nuzul* is a primary cause of extremist distortion on one extreme, and skeptical misunderstanding on the other. Whenever a passage seems challenging, consulting classical commentaries such as <em>Tafsir Ibn Kathir</em> or <em>Al-Wahidi's Asbab al-Nuzul</em> provides indispensable clarity.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="daily-study-framework" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. A Sustainable 15-Minute Daily Study Routine
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Prophet Muhammad ﷺ advised: <em>"The most beloved of deeds to Allah are those that are most consistent, even if they are small"</em> (Sahih al-Bukhari #6464). Rather than binge-reading for hours once a month, build a consistent daily habit using the <strong>5-5-5 Framework</strong>:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <div style="margin-bottom: 18px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle);">
          <div style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem; margin-bottom: 4px;">
            Minutes 1–5: Arabic Recitation (Tilāwah)
          </div>
          <div style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
            Recite one page or 5–10 verses in Arabic with proper pronunciation and reverence. If you are learning the letters, recite slowly; the Prophet ﷺ assured that one who struggles while reading receives double the reward (Sahih Muslim #798).
          </div>
        </div>

        <div style="margin-bottom: 18px; padding-bottom: 16px; border-bottom: 1px solid var(--color-border-subtle);">
          <div style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem; margin-bottom: 4px;">
            Minutes 6–10: Translation Comprehension
          </div>
          <div style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
            Read the exact English translation of those same verses using an authoritative translation. Pay attention to the recurring themes: Allah's mercy, justice, accountability, and nature.
          </div>
        </div>

        <div>
          <div style="font-weight: 700; color: var(--color-primary); font-size: 1.05rem; margin-bottom: 4px;">
            Minutes 11–15: Tafsir & Personal Application (Tadabbur)
          </div>
          <div style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
            Check the scholarly commentary for at least one verse that moved you. Ask yourself: <em>What action does this verse prompt me to take today?</em> Write down one practical takeaway in a study journal.
          </div>
        </div>
      </div>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary and Guidelines for Lifelong Study
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Divine Guidance:</strong> The Quran is Allah's personal address to humanity, intended to guide, heal, and elevate character.</li>
        <li><strong>Structural Appreciation:</strong> Appreciate the difference between the 86 Makki Surahs (theological foundation) and 28 Madani Surahs (social legislation).</li>
        <li><strong>Dual Balance:</strong> Cultivate oral Arabic recitation for spiritual reward alongside rigorous translation and Tafsir study for comprehension.</li>
        <li><strong>Context Prevents Error:</strong> Rely on classical *Asbab al-Nuzul* and authentic Tafsir rather than isolated literal interpretations.</li>
        <li><strong>Consistency Over Volume:</strong> A focused 15-minute daily appointment with the Quran transforms the soul more profoundly than intermittent reading.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Al-Baqarah (2:2), Surah Al-Hijr (15:9), Surah An-Nahl (16:98), Surah Sad (38:29), Surah Muhammad (47:24), Surah Al-Waqi'ah (56:79), Surah Al-Muzzammil (73:4).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #6464 ("The most beloved deeds to Allah are those most consistent...").</li>
    <li><strong>Sahih Muslim:</strong> Hadith #798 (The double reward for one who struggles while reading), Hadith #804 (Virtues of recitation).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #2910 ("Whoever recites a letter receives ten rewards...").</li>
    <li><strong>Al-Zarkashi:</strong> <em>Al-Burhan fi 'Ulum al-Qur'an</em>, Dar al-Ma'rifah, Beirut.</li>
    <li><strong>Al-Suyuti:</strong> <em>Al-Itqan fi 'Ulum al-Qur'an</em>, Dar al-Fikr, Damascus.</li>
    <li><strong>Al-Wahidi:</strong> <em>Asbab al-Nuzul</em>, Dar al-Kutub al-'Ilmiyyah, Beirut.</li>
  `;

  return buildArticleHtml({
    slug: 'how-to-read-and-understand-quran',
    title: "How to Read and Understand the Quran",
    arabicSubtitle: "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ — A BLESSED BOOK TO CONTEMPLATE",
    metaDescription: "Learn how to read and study the Holy Quran effectively. Explores Surah architecture, Makki vs Madani contexts, Arabic recitation merits, Tadabbur, and a daily 15-minute study routine.",
    readingTime: "12 min read",
    wordCount: "2,300",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle2 };
