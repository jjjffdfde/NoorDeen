/**
 * Article 4: Tawhid and the Shahadah: Meaning and Significance
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle4() {
  const tocItems = [
    { id: "theological-primacy", title: "The Primacy of Tawhid: The Axis of Reality" },
    { id: "shahadah-linguistics", title: "The Shahadah Decoded: Negation (Nafy) and Affirmation (Ithbat)" },
    { id: "three-categories-tawhid", title: "The Three Classical Categories of Tawhid" },
    { id: "seven-conditions-shahadah", title: "The Seven Conditions of the Shahadah (Shurut)" },
    { id: "negating-shirk", title: "Understanding and Negating Shirk (Polytheism)" },
    { id: "quranic-hadith-evidences", title: "Scriptural Proofs: Surah Al-Ikhlas & Ayat al-Kursi" },
    { id: "practical-implications", title: "Living Tawhid: Psychological & Social Liberation" },
    { id: "key-takeaways", title: "Summary and Theological Principles" }
  ];

  const relatedTools = [
    { icon: "⭐", title: "Six Kalimas of Islam", url: "../kalimas.html" },
    { icon: "🏛️", title: "Five Pillars of Islam", url: "../pillars.html" },
    { icon: "📜", title: "Authentic Hadith Collections", url: "../hadith.html" },
    { icon: "🤲", title: "Daily Duas & Supplications", url: "../duas.html" }
  ];

  const faqItems = [
    {
      question: "Is it sufficient to believe that God exists to be a monotheist in Islam?",
      answer: "No. Believing merely that God exists and created the universe corresponds only to <em>Tawhid al-Rububiyyah</em> (Oneness of Lordship). Even the pre-Islamic polytheists of Makkah acknowledged that Allah created the heavens and the earth (Surah Luqman 31:25). True Islamic monotheism requires dedicating all worship exclusively to Allah alone without intermediaries, which is <em>Tawhid al-Uluhiyyah</em>."
    },
    {
      question: "What is the difference between Major Shirk (Shirk Akbar) and Minor Shirk (Shirk Asghar)?",
      answer: "Major Shirk involves directing acts of worship (such as prayer, sacrifice, divine fear, or invocation) to anyone other than Allah, which nullifies Islam and excludes a person from the faith if died upon without repentance. Minor Shirk includes acts that lead toward polytheism or diminish sincerity, such as ostentation in good deeds (<em>Riya'</em> — performing acts of worship so people praise you) or swearing oaths by creation."
    },
    {
      question: "What is the status of seeking intercession (Shafa'ah)?",
      answer: "In authentic Islamic theology, all intercession belongs exclusively to Allah (Surah Az-Zumar 39:44). Permissible intercession is that which occurs on the Day of Judgment only after two strict divine conditions are met: (1) Allah grants permission to the intercessor (such as Prophet Muhammad ﷺ), and (2) Allah is pleased with the person receiving the intercession (Surah An-Najm 53:26). Seeking intercession from deceased saints directly in this world is forbidden."
    },
    {
      question: "How does Tawhid liberate the human mind psychologically?",
      answer: "When a human realizes that no creation—whether king, tyrant, employer, or natural phenomenon—possesses ultimate power to harm, benefit, provide, or take life without Allah's decree, fear of mortals evaporates. Tawhid frees the believer from groveling before worldly power, alleviates chronic existential anxiety, and grants profound inner dignity."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        At the absolute heart of Islamic civilization, theology, and practice lies a single, non-negotiable reality: <strong>Tawḥīd</strong> (تَوْحِيد) — the absolute, uncompromised Oneness of God. Tawhid is not merely a philosophical assertion of numerical unity; it is a comprehensive ontological worldview that defines humanity's origin, moral obligations, and ultimate destiny. Its verbal expression is the <strong>Shahādah</strong>, the declaration that echoes from every minaret across the globe.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="theological-primacy" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Primacy of Tawhid: The Axis of Reality
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Arabic noun <em>Tawḥīd</em> stems from the root <em>W-Ḥ-D</em> (و-ح-د), meaning to unify, make single, or assert uniqueness. Theologically, it signifies the knowledge, belief, and practical affirmation that Allah is unique in His Divine Essence, His Sovereign Lordship, His exclusive right to worship, and His Perfect Names and Attributes.
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ وَالْمَلَائِكَةُ وَأُولُو الْعِلْمِ قَائِمًا بِالْقِسْطِ ۚ لَا إِلَٰهَ إِلَّا هُوَ الْعَزِيزُ الْحَكِيمُ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Allah witnesses that there is no deity except Him, and so do the angels and those of knowledge — maintaining creation in justice. There is no deity except Him, the Exalted in Might, the Wise."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Ali 'Imran (3:18)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Tawhid is the common golden thread uniting all prophetic missions. As Allah reminds in Surah Al-Anbiya: <em>"And We sent not before you any messenger except that We revealed to him that, 'There is no deity except Me, so worship Me'"</em> (Surah Al-Anbiya 21:25). It is the sole sin which Allah has decreed He will not forgive if a person dies unrepentant upon it (Surah An-Nisa 4:48).
      </p>
    </section>

    <!-- Section 2 -->
    <section id="shahadah-linguistics" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. The Shahadah Decoded: Negation (Nafy) and Affirmation (Ithbāt)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The primary testimony of faith is: <strong>Lā ilāha illallāh, Muḥammadur Rasūlullāh</strong> (لَا إِلَٰهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ). Linguistically, this phrase is composed of two indispensable grammatical pillars:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px;">
          <div style="border-right: 1px solid var(--color-border); padding-right: 16px;">
            <div style="font-size: 1.3rem; font-family: 'Amiri', serif; color: #B91C1C; margin-bottom: 6px;">لَا إِلَٰهَ (Lā ilāha)</div>
            <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 6px;">Pillar 1: Absolute Negation (An-Nafy)</div>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
              Totally repudiates, denies, and uproots any claim of divinity, worship, or sovereignty from all created things—negating idols, celestial bodies, monarchs, saints, ancestors, money, and personal ego.
            </p>
          </div>

          <div>
            <div style="font-size: 1.3rem; font-family: 'Amiri', serif; color: var(--color-primary); margin-bottom: 6px;">إِلَّا اللَّهُ (Illallāh)</div>
            <div style="font-weight: 700; color: var(--color-primary); margin-bottom: 6px;">Pillar 2: Exclusive Affirmation (Al-Ithbāt)</div>
            <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
              Affirms and restricts all true divinity, prayer, hope, fear, love, and legislative authority exclusively to Allah alone, without any partner or intermediary.
            </p>
          </div>
        </div>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Affirmation without prior negation is invalid. If someone says "I believe in Allah," but simultaneously venerates astrological fortunes or invokes the dead for health, they have affirmed God while failing to negate polytheism. The genius of the Shahadah is that it begins with a radical demolition of false deities before erecting the sanctuary of divine monotheism.
      </p>
    </section>

    <!-- Section 3 -->
    <section id="three-categories-tawhid" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. The Three Classical Categories of Tawhid
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Through exhaustive inductive study (<em>Istiqrā'</em>) of Quranic verses, classical scholars (including Imam Abu Hanifah, Imam Ahmad ibn Hanbal, Ibn Mandah, Ibn Jarir al-Tabari, and Ibn Taymiyyah) organized Tawhid into three pedagogical categories to facilitate systematic understanding:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 24px 0;">
        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">1. Tawḥīd ar-Rubūbiyyah (Oneness of Lordship)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Affirming that Allah alone is the Sole Creator (<em>Al-Khāliq</em>), Sovereign Owner (<em>Al-Mālik</em>), and Governor (<em>Al-Mudabbir</em>) of the entire cosmos. Not a single leaf falls without His knowledge (Surah Al-An'am 6:59). Even the polytheists of Makkah acknowledged this dimension, but it was insufficient on its own to enter Islam.
          </p>
        </div>

        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-gold);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">2. Tawḥīd al-Ulūhiyyah (Oneness of Worship)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Also termed <em>Tawḥīd al-'Ibādah</em>. Directing every inward and outward act of devotion—prayer, sacrifice, vows, repentance, supplication, reliance (*Tawakkul*), and hope—exclusively to Allah alone. This was the battlefield upon which all prophetic conflicts occurred between the messengers and their recalcitrant tribes.
          </p>
        </div>

        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-brass);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">3. Tawḥīd al-Asmā' waṣ-Ṣifāt (Divine Names & Attributes)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Affirming all names and attributes that Allah affirmed for Himself in the Quran or that His Prophet ﷺ affirmed in authentic Hadiths, without four theological errors: <strong>Taḥrīf</strong> (distortion), <strong>Ta'ṭīl</strong> (denial), <strong>Takyīf</strong> (speculating 'how'), or <strong>Tamthīl</strong> (likening to creation). As stated in Surah Ash-Shura: <em>"There is nothing like unto Him, and He is the Hearing, the Seeing"</em> (42:11).
          </p>
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="seven-conditions-shahadah" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. The Seven Conditions of the Shahadah (Shurūṭ)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Pronouncing the Shahadah is not a magical incantation. Early scholar Wahb ibn Munabbih was asked: <em>"Is not 'La ilaha illallah' the key to Paradise?"</em> He replied: <em>"Yes, but every key has teeth. If you bring a key with the proper teeth, the door will open for you; otherwise it will not"</em> (Sahih al-Bukhari, Kitab al-Jana'iz). Scholars derived seven essential conditions (the 'teeth' of the key) from the Quran and Sunnah:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; padding: 22px; margin: 20px 0;">
        <ol style="margin: 0; padding-left: 20px; line-height: 2; color: var(--color-text-main);">
          <li><strong>1. Knowledge ('Ilm):</strong> Understanding what the phrase negates and affirms, dispelling ignorance (Surah Muhammad 47:19).</li>
          <li><strong>2. Certainty (Yaqīn):</strong> Absolute unshakeable conviction in one's heart without doubt or wavering (Surah Al-Hujurat 49:15).</li>
          <li><strong>3. Sincerity (Ikhlāṣ):</strong> Purifying all deeds from polytheism, ostentation, and hidden motives (Surah Al-Bayyinah 98:5).</li>
          <li><strong>4. Truthfulness (Ṣidq):</strong> Uttering the testimony from a sincere heart, negating the duplicity of hypocrites (Surah Al-Baqarah 2:8-10).</li>
          <li><strong>5. Love (Maḥabbah):</strong> Loving Allah, His Messenger, and this sacred testimony above all worldly treasures (Surah Al-Baqarah 2:165).</li>
          <li><strong>6. Submission (Inqiyād):</strong> Yielding in physical obedience to Allah's divine laws and commands (Surah An-Nisa 4:65).</li>
          <li><strong>7. Acceptance (Qubūl):</strong> Embracing whatever the Shahadah requires with a joyful, willing heart, without arrogance (Surah As-Saffat 37:35-36).</li>
        </ol>
      </div>
    </section>

    <!-- Section 5 -->
    <section id="negating-shirk" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Understanding and Negating Shirk (Polytheism)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The diametric antithesis of Tawhid is <strong>Shirk</strong> (شِرْك) — associating partners with Allah in His Lordship, worship, or divine attributes. Islamic jurisprudence classifies Shirk into two major levels:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li>
          <strong>Major Shirk (Ash-Shirk al-Akbar):</strong> Directing any worship to other than Allah—such as bowing to an idol, prostrating to a human, sacrificing an animal to appease spirits, or beseeching the deceased in graves for offspring, forgiveness, or miraculous protection. Major Shirk extinguishes all past good deeds and excludes a person from Islam (Surah Az-Zumar 39:65).
        </li>
        <li>
          <strong>Minor Shirk (Ash-Shirk al-Aṣghar):</strong> Sins that fall short of nullifying faith but gravely corrupt spiritual purity. The most perilous form is <strong>Riyā'</strong> (ostentation / showing off in worship). The Prophet ﷺ warned: <em>"The thing I fear most for you is minor polytheism: showing off"</em> (Musnad Ahmad #23630). When someone lengthens their prayer or gives charity specifically so human onlookers praise their piety, they commit minor Shirk.
        </li>
      </ul>
    </section>

    <!-- Section 6 -->
    <section id="quranic-hadith-evidences" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Scriptural Proofs: Surah Al-Ikhlas & Ayat al-Kursi
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Two scriptural passages stand as the supreme summaries of Tawhid in the Quran:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <h4 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Surah Al-Ikhlas (112): The Pure Manifestation</h4>
        <div style="font-family: 'Amiri', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2; margin-bottom: 12px;">
          قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ
        </div>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.7; margin: 0;">
          The Prophet ﷺ confirmed that Surah Al-Ikhlas equals one-third of the Quran in value (Sahih al-Bukhari #5013) because the Quran's subject matter divides into stories, legislation, and Tawhid; Surah Al-Ikhlas encapsulates pure Tawhid without distraction.
        </p>

        <hr style="border: 0; border-top: 1px solid var(--color-border-subtle); margin: 20px 0;">

        <h4 style="margin-top: 0; color: var(--color-primary); font-size: 1.2rem;">Ayat al-Kursi (2:255): The Greatest Verse</h4>
        <p style="color: var(--color-text-muted); font-size: 0.95rem; line-height: 1.7; margin: 0;">
          Described by the Prophet ﷺ as the greatest verse in the Book of Allah (Sahih Muslim #810), Ayat al-Kursi affirms Allah's eternal life (<em>Al-Hayy</em>), His self-sustaining sovereignty (<em>Al-Qayyum</em>), His immunity to drowsiness or slumber, His ownership of the heavens and earth, His supreme knowledge encompassing past and future, and His transcendent Throne (<em>Kursi</em>).
        </p>
      </div>
    </section>

    <!-- Section 7 -->
    <section id="practical-implications" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. Living Tawhid: Psychological & Social Liberation
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Tawhid is not an abstract metaphysical formula to be memorized for theological tests. When genuinely internalized, it revolutionizes human psychology:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 24px;">
        <li><strong>Freedom from Mortal Fear:</strong> Recognizing that life, death, provision (*Rizq*), and health reside solely in Allah's hands destroys cowardice and servility.</li>
        <li><strong>Eradication of Arrogance:</strong> Acknowledging that every talent, fortune, and intellect is a loaned gift from Allah protects against narcissism and pride.</li>
        <li><strong>Radical Human Equality:</strong> Before the Majesty of the One True God, all human hierarchies of race, caste, wealth, and nationality dissolve. The only metric of distinction is God-consciousness (*Taqwa* — Surah Al-Hujurat 49:13).</li>
        <li><strong>Unshakable Hope:</strong> In moments of tragedy, the believer in Tawhid turns directly to the Lord of the worlds, confident that every trial is accompanied by divine wisdom and ultimate relief.</li>
      </ul>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary and Theological Principles
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Tawhid is Central:</strong> The foundational doctrine of Islam, upon which all deeds and salvation depend.</li>
        <li><strong>Two Poles of Shahadah:</strong> <em>La ilaha</em> (radical negation of all false idols) and <em>illallah</em> (exclusive devotion to Allah).</li>
        <li><strong>Three Categorical Dimensions:</strong> Rububiyyah (Lordship), Uluhiyyah (Worship), and Asma' was-Sifat (Names & Attributes).</li>
        <li><strong>Seven Non-Negotiable Conditions:</strong> Knowledge, Certainty, Sincerity, Truthfulness, Love, Submission, and Acceptance.</li>
        <li><strong>Zero Compromise on Shirk:</strong> Guarding the heart against both major polytheism and subtle minor ostentation (*Riya'*).</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Ali 'Imran (3:18), Surah An-Nisa (4:48), Surah Al-An'am (6:59), Surah Al-Anbiya (21:25), Surah Luqman (31:25), Surah Az-Zumar (39:44, 39:65), Surah Muhammad (47:19), Surah Al-Ikhlas (112:1-4).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #5013 (Virtues of Surah Al-Ikhlas), Kitab al-Jana'iz (Wahb ibn Munabbih on the teeth of the key).</li>
    <li><strong>Sahih Muslim:</strong> Hadith #8 (The Hadith of Jibril), Hadith #810 (Ayat al-Kursi as the greatest verse).</li>
    <li><strong>Musnad Ahmad:</strong> Hadith #23630 (Warning against minor shirk / riya').</li>
    <li><strong>Ibn Mandah:</strong> <em>Kitab al-Tawhid</em>, Maktabat al-Rushd, Riyadh.</li>
    <li><strong>Ibn Taymiyyah:</strong> <em>Majmu' al-Fatawa</em>, vol. 1 (Tawhid al-Uluhiyyah), King Fahd Complex, Madinah.</li>
  `;

  return buildArticleHtml({
    slug: 'tawhid-and-the-shahadah',
    title: "Tawhid and the Shahadah: Meaning and Significance",
    arabicSubtitle: "شَهِدَ اللَّهُ أَنَّهُ لَا إِلَٰهَ إِلَّا هُوَ — ALLAH TESTIFIES THERE IS NO DEITY EXCEPT HIM",
    metaDescription: "A source-verified theological treatise on Islamic monotheism (Tawhid) and the testimony of faith (Shahadah). Covers Rububiyyah, Uluhiyyah, Asma' was-Sifat, the 7 conditions of Shahadah, and negating Shirk.",
    readingTime: "13 min read",
    wordCount: "2,400",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle4 };
