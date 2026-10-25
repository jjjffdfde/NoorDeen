/**
 * Article 9: Daily Adhkar and Supplications: A Source-Based Guide
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle9() {
  const tocItems = [
    { id: "reality-of-dhikr", title: "The Spiritual Reality of Dhikr: The Soul's Lifeline" },
    { id: "dhikr-vs-dua", title: "Distinguishing Dhikr (Remembrance) from Du'a (Supplication)" },
    { id: "etiquette-of-dua", title: "Etiquette & Secret Conditions for Answered Duas" },
    { id: "morning-adhkar", title: "Part 1: Morning Adhkar (Adhkar al-Sabah)" },
    { id: "evening-adhkar", title: "Part 2: Evening Adhkar (Adhkar al-Masa')" },
    { id: "post-prayer-adhkar", title: "Part 3: Supplications Following Prescribed Salah" },
    { id: "bedtime-adhkar", title: "Part 4: Bedtime Adhkar & Night Protection" },
    { id: "guarding-authenticity", title: "Guarding Against Fabricated Duas & Unverified Rewards" },
    { id: "key-takeaways", title: "Summary & Daily Remembrance Schedule" }
  ];

  const relatedTools = [
    { icon: "🤲", title: "Verified Masnoon Duas (102 Duas)", url: "../duas.html" },
    { icon: "📿", title: "Digital Tasbih Counter", url: "../tasbih.html" },
    { icon: "🕌", title: "Step-by-Step Salah Guide", url: "../salah-guide.html" },
    { icon: "⭐", title: "Six Kalimas of Islam", url: "../kalimas.html" }
  ];

  const faqItems = [
    {
      question: "What is the best time window for Morning and Evening Adhkar?",
      answer: "The optimal window for <strong>Morning Adhkar</strong> (Adhkar al-Sabah) begins after the Fajr prayer and extends until sunrise, though one may recite them until solar noon (Dhuhr) if delayed. The optimal window for <strong>Evening Adhkar</strong> (Adhkar al-Masa') begins after the Asr prayer until sunset (Maghrib), though reciting them into early nightfall remains meritorious according to the majority of scholars."
    },
    {
      question: "Do I have to recite the Adhkar aloud or silently in my mind?",
      answer: "Classical jurists (such as Imam al-Nawawi in <em>Al-Adhkar</em>) state that for verbal remembrance (Dhikr bi-al-lisan) to be valid and rewarded, one must move the tongue and lips so that one can hear oneself, without shouting or disturbing others. Merely passing the thoughts through the mind without vocal articulation is contemplation (Tafakkur), which is praiseworthy, but does not fulfill the specific Sunnah of oral Adhkar."
    },
    {
      question: "Can I use prayer beads (Tasbih / Misbaha) or a digital counter?",
      answer: "Yes. While counting on the fingers of the right hand is the superior Sunnah practiced by Prophet Muhammad ﷺ (Sunan Abi Dawud #1502), utilizing prayer beads (Misbaha) or digital click counters to keep accurate track of high repetitions (such as 100 times Istighfar or Subhanallah) is permissible according to the overwhelming majority of classical and contemporary scholars, with established precedents among early Companions."
    },
    {
      question: "Why does it seem like my supplications (Duas) are not being answered?",
      answer: "The Prophet Muhammad ﷺ explained that every sincere Muslim's supplication is answered in one of three ways: (1) Allah grants the exact request immediately; (2) Allah diverts an equivalent evil or calamity away from them in this world; or (3) Allah stores the reward as treasure for them on the Day of Judgment, when they will wish none of their worldly prayers had been answered directly (Musnad Ahmad #11133). Persist without impatience or despair."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        In a chaotic modern world filled with sensory overload, stress, and spiritual isolation, the human soul craves anchor. Islam provides this anchor through <strong>Dhikr</strong> (sacred remembrance of Allah) and <strong>Du'ā</strong> (intimate supplication). Far from arbitrary mechanical rituals, daily prophetic Adhkar constitute a divine fortress (<em>Hisn</em>) that shields the believer's consciousness, dissolves psychological anxiety, and maintains an unbroken lifeline to the Divine.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="reality-of-dhikr" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Spiritual Reality of Dhikr: The Soul's Lifeline
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Quran establishes that the remembrance of Allah is the singular medicine for the existential unease of the human condition:
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.5rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُم بِذِكْرِ اللَّهِ ۗ أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Those who have believed and whose hearts are assured by the remembrance of Allah. Unquestionably, by the remembrance of Allah hearts are assured."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Ar-Ra'd (13:28)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        Prophet Muhammad ﷺ drew a stark analogy concerning spiritual vitality: <em>"The parable of the one who remembers his Lord and the one who does not remember his Lord is that of the living and the dead"</em> (Sahih al-Bukhari #6407). Without Dhikr, the human spirit suffocates, even if the biological body enjoys wealth and physical health.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="dhikr-vs-dua" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. Distinguishing Dhikr (Remembrance) from Du'a (Supplication)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        While closely related, Islamic theology distinguishes between two sacred operations:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; margin: 24px 0;">
        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-primary);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">Al-Dhikr (الذِّكْر — Remembrance & Praise)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Exalting Allah through His Divine Attributes, Names, and glories without making a specific personal request. Examples include: <strong>Tasbīḥ</strong> (<em>Subḥānallāh</em> — Glory be to Allah), <strong>Taḥmīd</strong> (<em>Alḥamdulillāh</em> — Praise be to Allah), <strong>Tahlīl</strong> (<em>Lā ilāha illallāh</em>), and <strong>Takbīr</strong> (<em>Allāhu Akbar</em>).
          </p>
        </div>

        <div class="card" style="padding: 22px; border-left: 4px solid var(--color-gold);">
          <h3 style="margin-top: 0; color: var(--color-primary); font-size: 1.15rem;">Al-Du'ā (الدُّعَاء — Petitionary Prayer)</h3>
          <p style="font-size: 0.92rem; color: var(--color-text-muted); line-height: 1.7; margin: 0;">
            Humbly beseeching Allah for specific spiritual or worldly needs (forgiveness, guidance, health, protection, righteous spouse, Paradise). The Prophet ﷺ termed Dua the core of worship: <em>"Du'a is worship itself"</em> (Sunan Abi Dawud #1479).
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section id="etiquette-of-dua" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. Etiquette & Secret Conditions for Answered Duas
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        To maximize the acceptance of your supplications, classical scholars derived several indispensable etiquettes from the Sunnah:
      </p>

      <ol style="line-height: 1.9; color: var(--color-text-main); margin-bottom: 24px;">
        <li><strong>Ensure Halal Sustenance:</strong> The Prophet ﷺ spoke of a traveler raising hands to heaven crying "O Lord! O Lord!" yet his food was haram, his drink haram, and his clothing haram: <em>"How then could his prayer be answered?"</em> (Sahih Muslim #1015). Ethical earnings are the foundational prerequisite.</li>
        <li><strong>Begin with Divine Praise & Salawat:</strong> Begin by praising Allah, followed by sending peace and blessings upon Prophet Muhammad ﷺ. Prayers that omit Salawat remain suspended between heaven and earth (Jami' at-Tirmidhi #486).</li>
        <li><strong>Face the Qiblah and Raise Hands:</strong> Raising clean hands toward the heavens is an authentic sign of humility; Allah is too Generous to return raised hands empty (Sunan Abi Dawud #1488).</li>
        <li><strong>Firm Certainty (Yaqīn):</strong> Never say "O Allah forgive me if You will." Supplicate with absolute resolve, confident that Allah answers.</li>
        <li><strong>Seek Virtuous Times:</strong> The last third of the night, while in prostration (Sujud), between the Adhan and Iqamah, during heavy rainfall, and the final hour of Friday before sunset.</li>
      </ol>
    </section>

    <!-- Section 4 -->
    <section id="morning-adhkar" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. Part 1: Morning Adhkar (Adhkār al-Ṣabāḥ)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Recited after Fajr prayer until sunrise to fortify the soul for the day's encounters:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <h4 style="color: var(--color-primary); margin-top: 0; font-size: 1.15rem;">1. Sayyid al-Istighfār (The Master Supplication for Forgiveness)</h4>
        <div style="font-family: 'Amiri', serif; font-size: 1.35rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2; margin-bottom: 8px;">
          اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَٰهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَىٰ عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ
        </div>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
          <em>"O Allah, You are my Lord; there is no deity except You. You created me and I am Your servant, and I abide by Your covenant and promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your blessing upon me, and I acknowledge my sin, so forgive me, for none forgives sins except You."</em> (Sahih al-Bukhari #6306). <strong>Virtue:</strong> Whoever recites this with certainty in the morning and dies before evening is of the people of Paradise.
        </p>

        <hr style="border: 0; border-top: 1px solid var(--color-border-subtle); margin: 18px 0;">

        <h4 style="color: var(--color-primary); font-size: 1.15rem;">2. Shield Against Harm (Recite $3\times$)</h4>
        <div style="font-family: 'Amiri', serif; font-size: 1.35rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2; margin-bottom: 8px;">
          بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ
        </div>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
          <em>"In the name of Allah, with whose name nothing on earth or in heaven can cause harm, and He is the All-Hearing, All-Knowing."</em> (Jami' at-Tirmidhi #3388). <strong>Virtue:</strong> Nothing will harm the reciter on that day.
        </p>

        <hr style="border: 0; border-top: 1px solid var(--color-border-subtle); margin: 18px 0;">

        <h4 style="color: var(--color-primary); font-size: 1.15rem;">3. The Three Quls (Surahs 112, 113, 114 — Recite $3\times$ Each)</h4>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
          Recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas three times each. The Prophet ﷺ said: <em>"Reciting them morning and evening will suffice you against everything"</em> (Sunan Abi Dawud #5082).
        </p>
      </div>
    </section>

    <!-- Section 5 -->
    <section id="evening-adhkar" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Part 2: Evening Adhkar (Adhkār al-Masā')
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Recited between Asr and Maghrib/Isha as night approaches:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <h4 style="color: var(--color-primary); margin-top: 0; font-size: 1.15rem;">1. Protection from Nocturnal Poison & Harm ($3\times$)</h4>
        <div style="font-family: 'Amiri', serif; font-size: 1.35rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2; margin-bottom: 8px;">
          أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ
        </div>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
          <em>"I seek refuge in the perfect words of Allah from the evil of what He has created."</em> (Sahih Muslim #2709). <strong>Virtue:</strong> Protection from stings, bites, and unexpected harms during the night.
        </p>

        <hr style="border: 0; border-top: 1px solid var(--color-border-subtle); margin: 18px 0;">

        <h4 style="color: var(--color-primary); font-size: 1.15rem;">2. Welcoming the Evening</h4>
        <div style="font-family: 'Amiri', serif; font-size: 1.35rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2; margin-bottom: 8px;">
          أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لَا إِلَٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ
        </div>
        <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6; margin: 0;">
          <em>"We have reached the evening and the kingdom belongs to Allah; all praise is due to Allah. There is no deity except Allah alone, without partner."</em> (Sahih Muslim #2723).
        </p>
      </div>
    </section>

    <!-- Section 6 -->
    <section id="post-prayer-adhkar" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Part 3: Supplications Following Prescribed Salah
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Immediately following the concluding Tasleem of obligatory prayer, the Prophet ﷺ engaged in a specific sequence of Adhkar before standing:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <ol style="margin: 0; padding-left: 20px; line-height: 2; color: var(--color-text-main);">
          <li>
            <strong>Istighfār $3\times$:</strong> Say <em>Astaghfirullāh</em> (أَسْتَغْفِرُ اللَّهَ — "I ask Allah for forgiveness").
          </li>
          <li>
            <strong>Dua for Peace:</strong> <em>Allāhumma antas-Salāmu wa minkas-salām, tabārakta yā dhal-jalāli wal-ikrām</em> ("O Allah, You are Peace and from You comes peace; blessed are You, O Possessor of Majesty and Honor" — Sahih Muslim #591).
          </li>
          <li>
            <strong>Ayat al-Kursi (2:255):</strong> The Prophet ﷺ declared: <em>"Whoever recites Ayat al-Kursi after every obligatory prayer, nothing prevents him from entering Paradise except death"</em> (Sunan an-Nasa'i, Al-Sunan al-Kubra #9848).
          </li>
          <li>
            <strong>The 33-33-33 Tasbīḥ Formula:</strong>
            <ul style="line-height: 1.7; margin-top: 6px;">
              <li><em>Subḥānallāh</em> $33\times$ (Glory be to Allah)</li>
              <li><em>Alḥamdulillāh</em> $33\times$ (Praise be to Allah)</li>
              <li><em>Allāhu Akbar</em> $33\times$ (Allah is Greatest)</li>
              <li>Seal the hundredth with: <em>Lā ilāha illallāhu waḥdahu lā sharīka lah, lahul-mulku wa lahul-ḥamdu wa huwa 'alā kulli shay'in qadīr</em>. (Sahih Muslim #597: sins forgiven even if as vast as the foam of the sea).</li>
            </ul>
          </li>
        </ol>
      </div>
    </section>

    <!-- Section 7 -->
    <section id="bedtime-adhkar" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. Part 4: Bedtime Adhkar & Night Protection
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Sleep is the minor death (<em>Al-Wafat al-Sughra</em>). The Prophet ﷺ prepared for rest with supreme spiritual consciousness:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li><strong>Dusting the Bed:</strong> Dust the bedding three times with the edge of a garment while saying Bismillah (Sahih al-Bukhari #6320).</li>
        <li><strong>Cupping Hands and Reciting Mu'awwidhat:</strong> Cup palms together, blow gently into them, recite Surah Al-Ikhlas, Al-Falaq, and An-Nas, and wipe palms over the entire body from head to feet three times (Sahih al-Bukhari #5017).</li>
        <li><strong>Reciting Ayat al-Kursi:</strong> The authentic Hadith of Abu Hurayrah (Bukhari #2311) confirms that reciting Ayat al-Kursi at bedtime assigns an angel to guard you throughout the night.</li>
        <li><strong>The Tasbīḥ Fāṭimī:</strong> Subhanallah $33\times$, Alhamdulillah $33\times$, and Allahu Akbar $34\times$ before sleeping. When the Prophet's daughter Fatimah requested a servant to help with household labor, he taught her this remembrance, noting it provides more spiritual and physical energy than a servant (Sahih al-Bukhari #3705).</li>
      </ul>
    </section>

    <!-- Section 8 -->
    <section id="guarding-authenticity" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        8. Guarding Against Fabricated Duas & Unverified Rewards
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Social media and unvetted pamphlets frequently circulate supplications with sensational promised rewards: <em>"Recite this once and 70,000 angels will write rewards for 1,000 days"</em> or <em>"Dua Ganjul Arsh."</em> In authentic scholarship, making up promised rewards or attributing unverified Arabic formulations to the Prophet ﷺ is strictly prohibited.
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Stick firmly to classical source-verified compilations, such as Imam al-Nawawi's <em>Al-Adhkar</em>, Ibn al-Qayyim's <em>Al-Wabil al-Sayyib</em>, and Sheikh Sa'id al-Qahtani's <em>Hisnul Muslim</em> (Fortress of the Muslim). Our verified collection of <a href="../duas.html" style="color: var(--color-primary); font-weight: 700;">102 Masnoon Duas & Adhkar</a> provides canonical primary citations for every entry.
      </p>
    </section>

    <!-- Section 9 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        9. Summary & Daily Remembrance Schedule
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Spiritual Respiration:</strong> Dhikr is to the human soul what oxygen is to the physical lungs.</li>
        <li><strong>Fortress of Protection:</strong> Morning and evening Adhkar shield the mind from anxiety, evil eye (*Hasad*), and despondency.</li>
        <li><strong>Dua is Worship:</strong> Direct every need to Allah; understand that every answered prayer arrives in its divine wisdom.</li>
        <li><strong>Anchor in Authentic Texts:</strong> Prioritize supplications transmitted in the Quran and Kutub al-Sittah over unvetted popular texts.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Ar-Ra'd (13:28), Surah Al-Baqarah (2:255), Surah Al-Ikhlas (112), Surah Al-Falaq (113), Surah An-Nas (114).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #2311 (Ayat al-Kursi bedtime protection), Hadith #3705 (Tasbih Fatimi), Hadith #5017 (Cupping hands with Mu'awwidhat), Hadith #6306 (Sayyid al-Istighfar), Hadith #6407 (Parable of the living and the dead).</li>
    <li><strong>Sahih Muslim:</strong> Hadith #591 (Post-prayer peace dua), Hadith #597 (The 33-33-33 Tasbih), Hadith #1015 (Conditions of answered prayer / Halal sustenance), Hadith #2709 (A'udhu bi-kalimatillahi-tammati), Hadith #2723 (Evening remembrance).</li>
    <li><strong>Sunan Abi Dawud:</strong> Hadith #1479 ("Dua is worship"), Hadith #1488 (Raising hands), Hadith #5082 (Virtues of Three Quls).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #486 (Sending Salawat before dua), Hadith #3388 (Bismillahilladhi la yadurru).</li>
    <li><strong>Imam al-Nawawi:</strong> <em>Kitab al-Adhkar</em>, Dar al-Minhaj, Jeddah.</li>
    <li><strong>Ibn al-Qayyim:</strong> <em>Al-Wabil al-Sayyib min al-Kalim al-Tayyib</em>, Dar 'Alam al-Fawa'id, Makkah.</li>
  `;

  return buildArticleHtml({
    slug: 'daily-adhkar-and-supplications',
    title: "Daily Adhkar and Supplications: A Source-Based Guide",
    arabicSubtitle: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ — IN REMEMBRANCE HEARTS FIND REST",
    metaDescription: "A verified, source-based guide to daily Islamic remembrance (Dhikr) and supplication (Dua). Features authentic morning, evening, post-prayer, and bedtime Adhkar with vocalized Arabic, transliteration, and references.",
    readingTime: "13 min read",
    wordCount: "2,420",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle9 };
