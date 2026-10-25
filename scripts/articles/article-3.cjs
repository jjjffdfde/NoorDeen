/**
 * Article 3: Quran Translation vs Tafsir: Understanding the Difference
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle3() {
  const tocItems = [
    { id: "nature-of-arabic", title: "The Unique Nature of Quranic Arabic: Divine Inimitability (I'jaz)" },
    { id: "what-is-translation", title: "What is Translation? (Tarjamah Ma'ani al-Quran)" },
    { id: "translation-limitations", title: "Inherent Limitations of English and Urdu Translations" },
    { id: "transliteration-pitfalls", title: "Transliteration: Utility, Limits, and Severe Pitfalls" },
    { id: "what-is-tafsir", title: "What is Tafsir? The Disciplines of Scholarly Exegesis" },
    { id: "classical-tafsir-works", title: "Major Classical Tafsir Traditions and Authors" },
    { id: "practical-guidance", title: "How Everyday Readers Should Navigate Translations" },
    { id: "key-takeaways", title: "Summary and Essential Reader Principles" }
  ];

  const relatedTools = [
    { icon: "📖", title: "Read the Quran", url: "../quran.html" },
    { icon: "🔍", title: "How to Read the Quran", url: "how-to-read-and-understand-quran.html" },
    { icon: "⚖️", title: "Hadith Sciences & Grading", url: "hadith-and-sunnah-authenticity.html" },
    { icon: "📜", title: "Sources and Scholarly Citations", url: "../sources.html" }
  ];

  const faqItems = [
    {
      question: "Is reading an English translation considered 'reading the Quran' in Islamic law?",
      answer: "In strict Islamic jurisprudence, the Quran is defined exclusively as the verbatim Arabic revelation revealed to Prophet Muhammad ﷺ. An English or Urdu translation is technically a 'human commentary on the meanings of the Quran' (Tarjamah Ma'ani). Therefore, while reading an English translation is highly rewarded as an act of learning, it cannot be recited inside the ritual prayer (Salah) to fulfill the obligation of Surah Al-Fatihah."
    },
    {
      question: "Which English translation of the Quran is the most reliable for beginners?",
      answer: "Several reputable English translations are widely endorsed by classical scholars for different strengths: (1) <em>Saheeh International</em> — known for clear, contemporary English closely adhering to classical Sunni orthodoxy; (2) <em>The Clear Quran</em> by Dr. Mustafa Khattab — renowned for thematic paragraph headings and flow; (3) <em>M.A.S. Abdel Haleem</em> (Oxford World's Classics) — celebrated for smooth literary modern English; and (4) <em>Pickthall</em> or <em>Yusuf Ali</em> — classical pioneer translations, though featuring archaic Elizabethan phrasing."
    },
    {
      question: "Can someone interpret the Quran on their own without referring to Tafsir?",
      answer: "No. The Prophet Muhammad ﷺ warned sternly: 'Whoever speaks about the Quran without knowledge, let him take his seat in the Fire' (Jami' at-Tirmidhi #2950). While personal spiritual reflection (Tadabbur) is encouraged, deriving theological doctrines, legal rulings (Ahkam), or historical facts requires scholarly mastery of Arabic linguistics, Hadith authenticity, Abrogation (Naskh), and the consensus of the Sahaba."
    },
    {
      question: "Why do different English translations phrase the same verse differently?",
      answer: "Arabic is a root-based language where single words possess layered semantic nuances, rhetorical idioms, and grammatical structures that have no one-to-one equivalent in Indo-European languages. One translator may prioritize literal fidelity to the Arabic syntax, while another prioritizes readability in modern English idiom. Both represent human interpretations of the divine text."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        When non-Arabic speakers pick up a copy of the Quran in English, French, Urdu, or Turkish, they frequently assume they are holding the exact word of God. Yet across Islamic history, universal scholarly consensus has affirmed an unbending theological truth: <em>no translation is the Quran</em>. A translation is merely a human attempt to convey a shadow of the divine meanings into another tongue. Understanding the gulf between translation, transliteration, and scholarly Tafsir (exegesis) is the single most vital intellectual safeguard for any reader of scripture.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="nature-of-arabic" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Unique Nature of Quranic Arabic: Divine Inimitability (I'jāz)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Quran repeatedly emphasizes its Arabic medium: <em>"Indeed, We have sent it down as an Arabic Quran that you might understand"</em> (Surah Yusuf 12:2). This was not an arbitrary geographic coincidence. Classical Arabic represents an extraordinary linguistic instrument characterized by root-based morphology, conciseness (<em>Ījāz</em>), phonetic resonance, and unparalleled semantic density.
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          وَإِنَّهُ لَتَنزِيلُ رَبِّ الْعَالَمِينَ ۝ نَزَلَ بِهِ الرُّوحُ الْأَمِينُ ۝ عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ ۝ بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "And indeed, it is the revelation of the Lord of the worlds. The Trustworthy Spirit has brought it down upon your heart that you may be of the warners — in a clear Arabic tongue."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Ash-Shu'ara (26:192-195)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        The doctrine of <strong>I'jāz al-Qur'ān</strong> (the miraculous inimitability of the Quran) asserts that no human being—not even the master poets of pre-Islamic Arabia—could produce three verses matching its sublime eloquence, musicality, and precision (Surah Al-Isra 17:88). When the divine Arabic words are swapped for English or Urdu words, that inimitability is inevitably lost; what remains is human prose attempting to describe divine speech.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="what-is-translation" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. What is Translation? (Tarjamah Ma'ānī al-Qur'ān)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islamic legal scholars, such as Imam al-Shatibi in <em>Al-Muwafaqat</em>, divided translation into two theoretical categories:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li>
          <strong>Literal Translation (Tarjamah Harfiyyah):</strong> Swapping each Arabic word for an exact foreign equivalent word while preserving identical word order. <em>Scholarly Consensus:</em> This is strictly impossible with the Quran. Any attempt produces gibberish, severe semantic distortion, or outright heresy.
        </li>
        <li>
          <strong>Translation of Meanings (Tarjamah Ma'nawiyyah / Tafsiriyyah):</strong> A human scholar's attempt to articulate what they understand the Arabic verses to mean in another language. <em>Scholarly Consensus:</em> Permissible, necessary, and obligatory for conveying the message of Islam to non-Arabic speaking humanity.
        </li>
      </ul>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        For this reason, authentic Islamic publishing houses title their works: <em>The Meaning of the Holy Quran</em>, <em>The Quran: An English Translation</em>, or <em>Tarjamah Ma'ani al-Quran</em>, strictly avoiding labelling the English volume simply "The Holy Quran" without the Arabic original alongside it.
      </p>
    </section>

    <!-- Section 3 -->
    <section id="translation-limitations" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. Inherent Limitations of English and Urdu Translations
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Why does every translation fall short? Consider these foundational linguistic realities:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <h4 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">Case 1: Multidimensional Root Meanings</h4>
        <p style="color: var(--color-text-muted); font-size: 0.93rem; line-height: 1.7; margin-bottom: 16px;">
          Consider the Arabic term <strong>Taqwā</strong> (تَقْوَى). English translations frequently render it as "fear of God", "piety", or "righteousness". In Arabic, the root <em>W-Q-Y</em> signifies creating a protective barrier or shield against harm. <em>Taqwa</em> is thus an active, vigilant mindfulness—protecting oneself from God's displeasure through obedience to His commands. Translating it simply as "fear" reduces a dynamic, loving consciousness into mere terror.
        </p>

        <h4 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">Case 2: The Name 'Rabb' (رَبّ)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.93rem; line-height: 1.7; margin-bottom: 16px;">
          English translations almost universally translate <em>Rabb</em> as "Lord". However, in English, "Lord" carries feudal or aristocratic connotations. In Arabic, <em>Al-Rabb</em> encompasses Creation (*Al-Khaliq*), Ownership (*Al-Malik*), Sovereignty (*Al-Sayyid*), and <em>Tarbiyyah</em> (nurturing and developing a creation gradually from stage to stage until it reaches maturity). "Lord" misses more than half of the term's profound emotional resonance.
        </p>

        <h4 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">Case 3: Grammatical Shifts (Iltifāt)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.93rem; line-height: 1.7; margin: 0;">
          The Quran frequently employs <em>Iltifāt</em>—a sophisticated rhetorical technique where the speaker switches grammatical person from third person to first person, or from past tense to future tense, to evoke sudden awe or urgency. In English grammar, shifting from third person to second person mid-sentence is regarded as a grammatical error. Translators are forced either to smooth out the transition (destroying the rhetorical brilliance) or maintain it literally (making the English read awkwardly).
        </p>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="transliteration-pitfalls" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. Transliteration: Utility, Limits, and Severe Pitfalls
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        <strong>Transliteration</strong> is the representation of Arabic letters using Latin/English characters (e.g. <em>Bismillah ir-Rahman ir-Rahim</em>). While helpful as a temporary crutch during a beginner's very first days of learning the prayer, relying on transliteration long-term poses severe spiritual and linguistic hazards:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; overflow: hidden; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Transliterated Form</th>
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Arabic Word 1 & Meaning</th>
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Arabic Word 2 & Meaning</th>
              <th style="padding: 12px 16px; text-align: left; color: var(--color-primary);">Consequence of Mispronunciation</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">Qalb vs Kalb</td>
              <td style="padding: 12px 16px;"><strong>قَلْب</strong> (Heart / Spiritual Core)</td>
              <td style="padding: 12px 16px;"><strong>كَلْب</strong> (Dog)</td>
              <td style="padding: 12px 16px; color: #B91C1C;">Distorts a prayer for spiritual heart into an animal insult.</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">'Alim vs Alim</td>
              <td style="padding: 12px 16px;"><strong>عَلِيم</strong> (All-Knowing / Divine Attribute)</td>
              <td style="padding: 12px 16px;"><strong>أَلِيم</strong> (Painful / Agonizing Punishment)</td>
              <td style="padding: 12px 16px; color: #B91C1C;">Conflates divine omniscience with torturous pain.</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 700;">Halal vs Hallal</td>
              <td style="padding: 12px 16px;"><strong>حَلَال</strong> (Lawful / Pure)</td>
              <td style="padding: 12px 16px;"><strong>هَلَّال</strong> (Crescent observer)</td>
              <td style="padding: 12px 16px; color: #B91C1C;">Erases legal distinction of permissibility.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Latin alphabet simply lacks letters for distinct Arabic throat and pharyngeal consonants: <em>'Ayn (ع)</em>, <em>Ḥā (ح)</em>, <em>Ḍād (ض)</em>, <em>Ṭā (ط)</em>, and <em>Ẓā (ظ)</em>. Every Muslim must make it an urgent goal to learn the Arabic alphabet to pronounce prayer accurately.
      </p>
    </section>

    <!-- Section 5 -->
    <section id="what-is-tafsir" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. What is Tafsīr? The Disciplines of Scholarly Exegesis
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Arabic word <strong>Tafsīr</strong> (تَفْسِير) comes from the root <em>F-S-R</em>, meaning to uncover, unveil, and clarify that which is concealed. In Islamic scholarship, Tafsir is the rigorous scientific discipline of explaining the meanings of the Quran, deriving its legal rulings, detailing its historical context, and expounding its wisdom.
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Classical methodology dictates a strict hierarchy of sources for authentic Tafsir:
      </p>

      <ol style="line-height: 1.9; color: var(--color-text-main); margin-bottom: 24px;">
        <li>
          <strong>1. Tafsir al-Qur'an bil-Qur'an (The Quran Explaining the Quran):</strong> What is mentioned concisely in one Surah is frequently expounded in detail in another. For example, the <em>"those upon whom You have bestowed favor"</em> mentioned in Surah Al-Fatihah (1:7) is explicitly defined in Surah An-Nisa (4:69) as the prophets, the truthful, the martyrs, and the righteous.
        </li>
        <li>
          <strong>2. Tafsir al-Qur'an bis-Sunnah (The Prophetic Clarification):</strong> Prophet Muhammad ﷺ was divinely charged with explaining the text: <em>"And We revealed to you the message that you may make clear to the people what was sent down to them"</em> (Surah An-Nahl 16:44).
        </li>
        <li>
          <strong>3. Tafsir by the Statements of the Sahaba (Companions):</strong> Specifically figures like Abdullah ibn Abbas (the Prophet's cousin, dubbed <em>Turjuman al-Quran</em> — the Interpreter of the Quran), Ibn Mas'ud, and Ali ibn Abi Talib, who witnessed the revelations as they descended.
        </li>
        <li>
          <strong>4. Tafsir by the Tabi'un (Successors):</strong> Scholars who studied directly under the Companions in Makkah, Madinah, and Kufa (such as Mujahid, Sa'id ibn Jubayr, Qatadah, and Al-Hasan al-Basri).
        </li>
        <li>
          <strong>5. Pure Arabic Linguistics & Rhetoric (Lughat al-Arab):</strong> Analyzing verses through pre-Islamic classical Arabic poetry and grammatical syntax.
        </li>
      </ol>
    </section>

    <!-- Section 6 -->
    <section id="classical-tafsir-works" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Major Classical Tafsir Traditions and Authors
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Over fourteen centuries, major masterworks of Tafsir were compiled, each with distinct scholarly methodologies:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 24px 0;">
        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Tafsir al-Tabari (d. 310 AH)</h4>
          <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 700; margin-bottom: 6px;">Jami' al-Bayan 'an Ta'wil Ay al-Qur'an</div>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            The undisputed mother of all traditional Tafsirs. Records complete chains of narration (Isnad) back to the Prophet ﷺ and Sahaba for every single verse, alongside comprehensive linguistic analysis.
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Tafsir Ibn Kathir (d. 774 AH)</h4>
          <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 700; margin-bottom: 6px;">Tafsir al-Qur'an al-'Azim</div>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            The most widely read and trusted Tafsir across the Muslim world today. Renowned for explaining Quran with Quran and authentic Hadiths, with careful filtering of unverified historical tales (Isra'iliyyat).
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Tafsir al-Qurtubi (d. 671 AH)</h4>
          <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 700; margin-bottom: 6px;">Al-Jami' li-Ahkam al-Qur'an</div>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            A monumental 20-volume legal exegesis focusing on Fiqh rulings, moral lessons, and linguistic debate, balancing the viewpoints of the four major Sunni schools of law.
          </p>
        </div>

        <div class="card" style="padding: 20px; border-left: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.1rem;">Tafsir al-Sa'di (d. 1376 AH)</h4>
          <div style="font-size: 0.8rem; color: var(--color-gold); font-weight: 700; margin-bottom: 6px;">Taysir al-Karim al-Rahman</div>
          <p style="margin: 0; font-size: 0.9rem; color: var(--color-text-muted); line-height: 1.6;">
            A modern classical commentary written in clear, accessible, spiritually moving prose, avoiding technical grammatical debates to emphasize practical moral lessons for everyday believers.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 7 -->
    <section id="practical-guidance" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. How Everyday Readers Should Navigate Translations
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To benefit safely from English or Urdu translations without falling into interpretive errors, follow these three golden principles:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <ol style="margin: 0; padding-left: 20px; line-height: 1.9; color: var(--color-text-main);">
          <li>
            <strong>Cross-Reference Multiple Translations:</strong> When studying an important passage, compare <em>Saheeh International</em> with <em>Dr. Mustafa Khattab</em> and <em>M.A.S. Abdel Haleem</em>. Where translations differ, it reveals a multifaceted Arabic root that requires consulting a Tafsir.
          </li>
          <li>
            <strong>Never Formulate Legal Rulings from Translation Alone:</strong> If you read a verse that seems to command or forbid an action, do not immediately assume universal applicability. The verse may have been abrogated (<em>Mansukh</em>), restricted to a specific historical battle, or conditional upon specific legal criteria.
          </li>
          <li>
            <strong>Distinguish Translator Footnotes from Divine Speech:</strong> Footnotes, parenthetical insertions, and brackets represent the human translator's opinion. They are helpful explanatory aids, but they do not possess divine infallibility.
          </li>
        </ol>
      </div>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary and Essential Reader Principles
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>The Infallible Quran is Arabic:</strong> Only the original Arabic text revealed to Muhammad ﷺ is the verbatim Word of Allah.</li>
        <li><strong>Translations Are Approximations:</strong> Every translation is an interpretive human effort with inherent semantic limitations.</li>
        <li><strong>Transliteration is Temporary:</strong> Use transliteration only as a stepping stone; transition rapidly to reading the Arabic alphabet.</li>
        <li><strong>Tafsir is the Authoritative Key:</strong> The Quran must be understood through the methodology of classical Tafsir: Quran explaining Quran, Sunnah, and Sahaba consensus.</li>
        <li><strong>Humility in Study:</strong> Approach translations with humility, seeking spiritual guidance while deferring complex legal and theological determinations to qualified scholars.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Yusuf (12:2), Surah An-Nahl (16:44), Surah Al-Isra (17:88), Surah Ash-Shu'ara (26:192-195), Surah Al-Fatihah (1:7), Surah An-Nisa (4:69).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #2950 (Severe warning against speaking about the Quran without knowledge).</li>
    <li><strong>Imam al-Shatibi:</strong> <em>Al-Muwafaqat fi Usul al-Shari'ah</em>, Dar Ibn 'Affan, Al-Khobar.</li>
    <li><strong>Imam al-Tabari:</strong> <em>Jami' al-Bayan 'an Ta'wil Ay al-Qur'an</em>, Dar Hijr, Cairo.</li>
    <li><strong>Ibn Kathir:</strong> <em>Tafsir al-Qur'an al-'Azim</em>, Dar Taybah, Riyadh.</li>
    <li><strong>Imam al-Qurtubi:</strong> <em>Al-Jami' li-Ahkam al-Qur'an</em>, Dar al-Kutub al-Misriyyah, Cairo.</li>
  `;

  return buildArticleHtml({
    slug: 'quran-translation-vs-tafsir',
    title: "Quran Translation vs Tafsir: Understanding the Critical Difference",
    arabicSubtitle: "إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ — AN ARABIC QURAN THAT YOU MAY REASON",
    metaDescription: "Explore why an English translation is not the Quran. Examines the limits of translating divine Arabic, the role of scholarly Tafsir (exegesis), transliteration pitfalls, and classical commentaries.",
    readingTime: "12 min read",
    wordCount: "2,350",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle3 };
