/**
 * Article 6: Salah: A Complete Beginner's Learning Guide
 */
const { buildArticleHtml } = require('./template.cjs');

function getArticle6() {
  const tocItems = [
    { id: "spiritual-reality", title: "The Spiritual Reality of Salah: The Heavenly Ascension (Mi'raj)" },
    { id: "prerequisites-shurut", title: "Prerequisites Before Praying (Shurut al-Salah)" },
    { id: "five-daily-prayers", title: "The Five Daily Prayers & Rakat Composition" },
    { id: "step-by-step-rakat", title: "The Anatomy of a Rakat: Movements & Recitations" },
    { id: "madhhab-differences", title: "Scholarly Differences Across the Four Sunni Madhhabs" },
    { id: "remedying-mistakes", title: "Remedying Mistakes: Prostration of Forgetfulness (Sujud al-Sahw)" },
    { id: "common-challenges", title: "Overcoming Beginner Challenges & Achieving Khushu'" },
    { id: "key-takeaways", title: "Summary & Quick-Reference Checklist" }
  ];

  const relatedTools = [
    { icon: "🕌", title: "Interactive Salah Guide", url: "../salah-guide.html" },
    { icon: "💧", title: "Wudu Purification Guide", url: "../wudu-guide.html" },
    { icon: "⏱️", title: "Solar Prayer Times", url: "../prayer-times.html" },
    { icon: "📿", title: "Post-Prayer Tasbih", url: "../tasbih.html" }
  ];

  const faqItems = [
    {
      question: "What should I do if I cannot yet recite Surah Al-Fatihah in Arabic?",
      answer: "In classical Fiqh (such as reported by Imam Abu Hanifah, Imam al-Shafi'i, and in Sunan Abi Dawud #832), a newcomer who has not yet memorized Surah Al-Fatihah may recite basic words of remembrance during the standing position: <em>Subhanallah, Alhamdulillah, La ilaha illallah, Allahu Akbar</em> (سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَٰهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ). You can also hold a written note or phone in front of you while learning, with the goal of memorizing Al-Fatihah as rapidly as possible."
    },
    {
      question: "What if I lose count of how many Rak'ahs I have prayed?",
      answer: "The Prophet Muhammad ﷺ established a clear rule: base your count on certainty (which is the smaller number) and cast aside doubt (Sahih Muslim #571). For example, if you are unsure whether you are in your third or fourth Rak'ah of Dhuhr, assume it is your third, complete the fourth Rak'ah, and perform two prostrations of forgetfulness (<em>Sujud al-Sahw</em>) before or after the final Tasleem."
    },
    {
      question: "Can I pray while wearing shoes or socks?",
      answer: "Praying in clean shoes or clean socks is permissible according to the authentic Sunnah (Sahih al-Bukhari #386). However, because modern mosques feature clean carpets, shoes are removed at the entrance to maintain cleanliness for worshippers prostrating with their faces on the carpet."
    },
    {
      question: "Is prayer valid if my mind wanders during recitation?",
      answer: "Yes, the prayer remains legally valid and does not need to be repeated, provided you completed the essential pillars and conditions. However, the spiritual reward of the prayer is proportional to your presence of heart (Khushu'). The Prophet ﷺ mentioned that a person may leave prayer having recorded only a tenth, ninth, eighth, or half of its reward (Sunan Abi Dawud #796). Whenever you notice your mind drifting, gently redirect your attention to Allah's majesty and the meaning of the words."
    }
  ];

  const contentHtml = `
    <!-- Introduction -->
    <div style="background: var(--color-surface); padding: 24px; border-radius: 12px; margin-bottom: 36px; border-left: 4px solid var(--color-primary);">
      <p style="font-size: 1.1rem; line-height: 1.7; margin: 0; color: var(--color-text-main);">
        For more than two billion Muslims around the globe, five times each day, all secular pursuits halt. Commerce, entertainment, and work are set aside as the believer turns toward the sacred Ka'bah in Makkah to stand before the Creator of the universe. This is <strong>Al-Ṣalāh</strong> (الصَّلَاة) — the second pillar of Islam, the spiritual lifeline of the believer, and the ultimate meeting ground between heaven and earth.
      </p>
    </div>

    <!-- Section 1 -->
    <section id="spiritual-reality" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        1. The Spiritual Reality of Salah: The Heavenly Ascension (Mi'rāj)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Unlike all other Islamic obligations—which were revealed through the Archangel Jibril on earth—the obligation of Salah was commanded directly by Allah to Prophet Muhammad ﷺ beyond the seventh heaven during the miraculous Night Journey and Ascension (<em>Al-Isrā' wal-Mi'rāj</em>). This unique origin signifies its supreme status: Salah is described by classical scholars as <em>Mi'rāj al-Mu'min</em> (the believer's personal heavenly ascension).
      </p>

      <blockquote style="background: var(--color-card); border-left: 4px solid var(--color-gold); padding: 18px 24px; margin: 20px 0; border-radius: 0 8px 8px 0;">
        <div style="font-family: 'Amiri', 'Traditional Arabic', serif; font-size: 1.45rem; direction: rtl; text-align: right; color: var(--color-primary); line-height: 2;">
          اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ وَأَقِمِ الصَّلَاةَ ۖ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ ۗ وَلَذِكْرُ اللَّهِ أَكْبَرُ
        </div>
        <div style="margin-top: 10px; font-style: italic; color: var(--color-text-muted); font-size: 0.95rem;">
          "Recite what has been revealed to you of the Book and establish prayer. Indeed, prayer prevents immorality and wrongdoing, and the remembrance of Allah is greater."
        </div>
        <div style="margin-top: 4px; font-size: 0.85rem; color: var(--color-gold); font-weight: 600;">
          — Surah Al-Ankabut (29:45)
        </div>
      </blockquote>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        The Prophet ﷺ emphasized: <em>"The first matter that the slave will be brought to account for on the Day of Judgment is the prayer. If it is sound, then the rest of his deeds will be sound. And if it is corrupted, then the rest of his deeds will be corrupted"</em> (Jami' at-Tirmidhi #413).
      </p>
    </section>

    <!-- Section 2 -->
    <section id="prerequisites-shurut" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        2. Prerequisites Before Praying (Shurūṭ al-Ṣalāh)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Before initiating the prayer, five strict legal conditions (<em>Shurūṭ</em>) must be fulfilled. If any condition is missing without a valid legal excuse, the prayer is void:
      </p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 16px; margin: 24px 0;">
        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">1. Ritual Cleanliness (Tahārah)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Being free from minor ritual impurity (via Wudu) and major ritual impurity (via Ghusl). The clothes, body, and exact surface upon which one prostrates must be free from physical filth (*Najasah*).
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">2. Covering the 'Awrah</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            For men: minimally covering from the navel to the knees with loose, opaque clothing. For women: covering the entire body except the face and hands according to the majority of jurists.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">3. Facing the Qiblah</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Directing oneself toward the Ka'bah in the Sacred Mosque of Makkah (Surah Al-Baqarah 2:144). If traveling or unable to locate the direction, one exercises best judgment (*Ijtihad*).
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">4. Entry of Prayer Time</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Praying within the prescribed solar astronomical window. Praying prior to the entry of time is invalid. Check verified local times using our <a href="../prayer-times.html" style="color: var(--color-primary);">Solar Prayer Times Tool</a>.
          </p>
        </div>

        <div class="card" style="padding: 18px; border-top: 3px solid var(--color-primary);">
          <h4 style="margin: 0 0 6px 0; color: var(--color-primary); font-size: 1.05rem;">5. Sincere Intention (Niyyah)</h4>
          <p style="margin: 0; font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.6;">
            Conscious awareness in the heart of which specific prayer one is about to perform (e.g. today's Fard prayer of Dhuhr) purely for Allah's sake. Verbal articulation is not required by Sunnah.
          </p>
        </div>
      </div>
    </section>

    <!-- Section 3 -->
    <section id="five-daily-prayers" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        3. The Five Daily Prayers & Rak'at Composition
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Every prayer consists of a specific number of cycles called <strong>Rak'āt</strong> (singular: <em>Rak'ah</em>). The obligatory (<em>Farḍ</em>) cycles and strongly emphasized voluntary prayers (<em>Sunnah Mu'akkadah</em>) are distributed across the day:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 10px; overflow: hidden; margin: 24px 0;">
        <table style="width: 100%; border-collapse: collapse; font-size: 0.92rem; text-align: left;">
          <thead>
            <tr style="background: var(--color-surface); border-bottom: 2px solid var(--color-border);">
              <th style="padding: 12px 16px; color: var(--color-primary);">Prayer Name</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Solar Astronomical Time Window</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Pre-Sunnah</th>
              <th style="padding: 12px 16px; color: var(--color-primary); font-weight: 800;">Obligatory (Farḍ)</th>
              <th style="padding: 12px 16px; color: var(--color-primary);">Post-Sunnah / Witr</th>
            </tr>
          </thead>
          <tbody>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">1. Fajr (الفَجْر)</td>
              <td style="padding: 12px 16px;">True dawn until just before sunrise</td>
              <td style="padding: 12px 16px;">2 Rak'ats</td>
              <td style="padding: 12px 16px; font-weight: 800; color: var(--color-primary);">2 Rak'ats (Recited Aloud)</td>
              <td style="padding: 12px 16px;">—</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">2. Dhuhr (الظُّهْر)</td>
              <td style="padding: 12px 16px;">Just past solar zenith (Zawal) until Asr</td>
              <td style="padding: 12px 16px;">4 Rak'ats</td>
              <td style="padding: 12px 16px; font-weight: 800; color: var(--color-primary);">4 Rak'ats (Silent)</td>
              <td style="padding: 12px 16px;">2 Rak'ats</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">3. 'Asr (العَصْر)</td>
              <td style="padding: 12px 16px;">Mid-afternoon until just before sunset</td>
              <td style="padding: 12px 16px;">—</td>
              <td style="padding: 12px 16px; font-weight: 800; color: var(--color-primary);">4 Rak'ats (Silent)</td>
              <td style="padding: 12px 16px;">—</td>
            </tr>
            <tr style="border-bottom: 1px solid var(--color-border-subtle);">
              <td style="padding: 12px 16px; font-weight: 700;">4. Maghrib (المَغْرِب)</td>
              <td style="padding: 12px 16px;">Immediately after sunset until red twilight fades</td>
              <td style="padding: 12px 16px;">—</td>
              <td style="padding: 12px 16px; font-weight: 800; color: var(--color-primary);">3 Rak'ats (First 2 Aloud)</td>
              <td style="padding: 12px 16px;">2 Rak'ats</td>
            </tr>
            <tr>
              <td style="padding: 12px 16px; font-weight: 700;">5. 'Isha (العِشَاء)</td>
              <td style="padding: 12px 16px;">Disappearance of evening twilight until midnight/dawn</td>
              <td style="padding: 12px 16px;">—</td>
              <td style="padding: 12px 16px; font-weight: 800; color: var(--color-primary);">4 Rak'ats (First 2 Aloud)</td>
              <td style="padding: 12px 16px;">2 Sunnah + 3 Witr</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="step-by-step-rakat" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        4. The Anatomy of a Rak'ah: Movements & Recitations
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        A single Rak'ah is a synchronized sequence of physical postures accompanied by sacred vocalizations:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 24px; margin: 20px 0;">
        <h4 style="color: var(--color-primary); margin-top: 0; font-size: 1.15rem;">1. Takbīrat al-Iḥrām (The Opening Takbir)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
          Stand erect facing the Qiblah. Raise both hands to the earlobes or shoulders and pronounce: <strong>Allāhu Akbar</strong> (اللَّهُ أَكْبَرُ — "Allah is the Greatest"). This takbir is called <em>Ihram</em> because it renders all secular actions (talking, eating, laughing) sacredly forbidden.
        </p>

        <h4 style="color: var(--color-primary); font-size: 1.15rem; margin-top: 18px;">2. Al-Qiyām (Standing & Recitation)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
          Fold the hands over the chest or navel (right hand grasping or resting upon left). Recite the opening supplication (<em>Du'ā al-Istiftāḥ</em>): <em>Subḥānakallāhumma wa biḥamdika wa tabārakasmuka wa ta'ālā jadduka wa lā ilāha ghayruk</em>. Then recite <strong>Surah Al-Fātihah</strong> (the opening chapter) with its complete Tashkeel, followed by an additional short Surah (such as Surah Al-Ikhlas or Al-Kawthar) in the first two Rak'ahs.
        </p>

        <h4 style="color: var(--color-primary); font-size: 1.15rem; margin-top: 18px;">3. Al-Rukū' (The Bowing)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
          Say <em>Allahu Akbar</em> and bow horizontally with a straight back, resting hands firmly upon the knees with spread fingers. While bowing in stillness (<em>Ṭuma'nīnah</em>), recite three times:
        </p>
        <div style="font-family: 'Amiri', serif; font-size: 1.3rem; text-align: center; color: var(--color-primary); margin: 8px 0;">
          سُبْحَانَ رَبِّيَ الْعَظِيمِ (Subḥāna Rabbiyal-'Aẓīm)
        </div>
        <div style="text-align: center; font-size: 0.85rem; color: var(--color-gold); font-style: italic;">
          "Glory be to my Lord, the Magnificent."
        </div>

        <h4 style="color: var(--color-primary); font-size: 1.15rem; margin-top: 18px;">4. Al-Qawmah (Rising from Bowing)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
          Rise back to a completely upright standing position while saying: <em>Sami'allāhu liman ḥamidah</em> (سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ — "Allah hears whoever praises Him"). Once standing straight, respond: <em>Rabbanā wa lakal-ḥamd</em> (رَبَّنَا وَلَكَ الْحَمْدُ — "Our Lord, and to You belongs all praise").
        </p>

        <h4 style="color: var(--color-primary); font-size: 1.15rem; margin-top: 18px;">5. Al-Sujūd (The Prostration)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
          Say <em>Allahu Akbar</em> and descend into prostration. The Prophet ﷺ commanded prostrating upon seven bodily contact points: the forehead including the nose, the two palms, the two knees, and the tips of both feet with toes facing the Qiblah (Sahih al-Bukhari #812). In this supreme state of humility, recite three times:
        </p>
        <div style="font-family: 'Amiri', serif; font-size: 1.3rem; text-align: center; color: var(--color-primary); margin: 8px 0;">
          سُبْحَانَ رَبِّيَ الْأَعْلَى (Subḥāna Rabbiyal-A'lā)
        </div>
        <div style="text-align: center; font-size: 0.85rem; color: var(--color-gold); font-style: italic;">
          "Glory be to my Lord, the Most High."
        </div>

        <h4 style="color: var(--color-primary); font-size: 1.15rem; margin-top: 18px;">6. Al-Jalsah (Sitting Between Two Prostrations)</h4>
        <p style="color: var(--color-text-muted); font-size: 0.92rem; line-height: 1.6;">
          Say <em>Allahu Akbar</em> and sit upright in stillness upon the left foot with the right foot upright. Supplicate: <em>Rabbigh-fir lī, Rabbigh-fir lī</em> (رَبِّ اغْفِرْ لِي — "My Lord, forgive me"). Then say <em>Allahu Akbar</em> and complete the second identical prostration.
        </p>
      </div>
    </section>

    <!-- Section 5 -->
    <section id="madhhab-differences" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        5. Scholarly Differences Across the Four Sunni Madhhabs
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        A source of unnecessary anxiety for beginners is observing other Muslims praying with slight physical variations. Classical Islamic jurisprudence across the four canonical Sunni schools (Hanafi, Maliki, Shafi'i, and Hanbali) accommodates legitimate differences based on authentic Hadiths:
      </p>

      <ul style="line-height: 1.8; color: var(--color-text-main); margin-bottom: 20px;">
        <li>
          <strong>Hand Placement During Qiyam:</strong> The Shafi'is and Hanbalis place hands above the navel below the chest. The Hanafis place hands below the navel for men and on the chest for women. The Malikis either fold hands on the chest or hold them loosely at the sides (<em>Sadl</em>), drawing from the continuous historical practice of the people of Madinah ('Amal Ahl al-Madinah). All four positions are valid.
        </li>
        <li>
          <strong>Raising Hands (Raf' al-Yadayn):</strong> The Shafi'i and Hanbali schools raise hands prior to bowing (Ruku') and upon rising from bowing. The Hanafi and dominant Maliki schools raise hands only during the opening Takbir. Both positions trace back to authentic Companions (such as Ibn Umar and Ibn Mas'ud).
        </li>
        <li>
          <strong>Movement of the Finger in Tashahhud:</strong> The Shafi'is raise the right index finger when saying <em>illa-llah</em> without moving it. The Hanafis raise it on negation (<em>La ilaha</em>) and lower it on affirmation. The Malikis gently sway it horizontally right and left throughout. All signify the singular unity of God.
        </li>
      </ul>

      <p style="line-height: 1.8; color: var(--color-text-main);">
        These variations represent the beauty and breadth (<em>Tawassu'</em>) of the Sunnah, not sectarian schisms. A beginner should learn the method taught by their trusted local mainstream teacher without disputing others.
      </p>
    </section>

    <!-- Section 6 -->
    <section id="remedying-mistakes" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        6. Remedying Mistakes: Prostration of Forgetfulness (Sujūd al-Sahw)
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Islam is merciful and recognizes human fallibility. If a worshipper inadvertently adds an extra Rak'ah, omits an obligatory Sunnah act (such as the first Tashahhud), or experiences doubt regarding the count, the prayer is not ruined. Instead, one performs <strong>Sujūd al-Sahw</strong> (سُجُود السَّهْو) — two additional prostrations followed by Tasleem.
      </p>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        Even Prophet Muhammad ﷺ experienced forgetfulness in prayer on occasion to establish the divine jurisprudence for his community (Sahih al-Bukhari #401).
      </p>
    </section>

    <!-- Section 7 -->
    <section id="common-challenges" style="margin-bottom: 40px;">
      <h2 style="font-size: 1.75rem; color: var(--color-primary); border-bottom: 2px solid var(--color-border-subtle); padding-bottom: 8px;">
        7. Overcoming Beginner Challenges & Achieving Khushū'
      </h2>
      <p style="line-height: 1.8; color: var(--color-text-main);">
        The greatest inner struggle in prayer is cultivating <strong>Khushū'</strong> (profound humility, stillness, and presence of heart). Modern life bombards us with notifications, deadlines, and anxiety. To cultivate stillness:
      </p>

      <div style="background: var(--color-card); border: 1px solid var(--color-border); border-radius: 12px; padding: 22px; margin: 20px 0;">
        <ul style="line-height: 1.9; color: var(--color-text-main); margin: 0; padding-left: 20px;">
          <li><strong>Slow Down Movements (Ṭuma'nīnah):</strong> Never rush from bowing to prostration like a pecking bird. Hold every position until each bone settles in its place (Sahih al-Bukhari #757).</li>
          <li><strong>Reflect on Word Meanings:</strong> Memorize the English meanings of Surah Al-Fatihah and Tashahhud so your mind actively tracks what your tongue utters.</li>
          <li><strong>Arrive a Few Minutes Early:</strong> Sit quietly on your prayer rug, recite Istighfar (seeking forgiveness), and disconnect from your smartphone before uttering the opening Takbir.</li>
          <li><strong>Pray As If It Were Your Last:</strong> The Prophet ﷺ counselled: <em>"When you stand for prayer, pray as if it were your farewell prayer"</em> (Sunan Ibn Majah #4171).</li>
        </ul>
      </div>
    </section>

    <!-- Section 8 -->
    <section id="key-takeaways" style="margin-bottom: 40px; background: var(--color-surface); padding: 24px; border-radius: 12px; border: 1px solid var(--color-border);">
      <h2 style="font-size: 1.5rem; color: var(--color-primary); margin-top: 0; margin-bottom: 12px;">
        8. Summary & Quick-Reference Checklist
      </h2>
      <ul style="line-height: 1.8; color: var(--color-text-main); margin: 0; padding-left: 20px;">
        <li><strong>Supreme Priority:</strong> Salah is the second pillar of Islam and the first deed evaluated on Judgment Day.</li>
        <li><strong>Five Pillars in Miniature:</strong> Prayer includes the Shahadah (in Tashahhud), fasting (abstaining from food/drink), charity (sacrificing time), and facing the Ka'bah (Hajj).</li>
        <li><strong>Valid Excuses Accommodated:</strong> Islam provides concessions: praying seated if injured, shortening prayers while traveling (*Qasr*), and using dry ablution (*Tayammum*) if water is absent.</li>
        <li><strong>Progressive Learning:</strong> Do not let fear of mispronunciation prevent you from praying. Strive forward incrementally; Allah evaluates sincere hearts.</li>
      </ul>
    </section>
  `;

  const sourcesHtml = `
    <li><strong>Al-Qur'an al-Kareem:</strong> Surah Al-Baqarah (2:144), Surah Al-Ankabut (29:45).</li>
    <li><strong>Sahih al-Bukhari:</strong> Hadith #386 (Praying in footwear), Hadith #401 (Sujud al-Sahw), Hadith #528 (Parable of five prayers), Hadith #757 (The man who prayed improperly / Tuma'ninah), Hadith #812 (Prostrating on seven bones).</li>
    <li><strong>Sahih Muslim:</strong> Hadith #571 (Building on certainty during doubt in prayer).</li>
    <li><strong>Jami' at-Tirmidhi:</strong> Hadith #413 ("The first deed evaluated is prayer...").</li>
    <li><strong>Sunan Abi Dawud:</strong> Hadith #796 (Reward of prayer proportional to mindfulness), Hadith #832 (Concession for the beginner learning Fatihah).</li>
    <li><strong>Sunan Ibn Majah:</strong> Hadith #4171 ("Pray as if it were your farewell prayer").</li>
    <li><strong>Imam al-Nawawi:</strong> <em>Al-Majmu' Sharh al-Muhadhdhab</em>, Dar al-Fikr, Beirut.</li>
  `;

  return buildArticleHtml({
    slug: 'salah-complete-beginners-guide',
    title: "Salah: A Complete Beginner's Learning Guide",
    arabicSubtitle: "وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ — ESTABLISH PRAYER",
    metaDescription: "Learn how to perform the five daily Islamic prayers (Salah) step-by-step. Includes Arabic recitations with Tashkeel, English meanings, physical postures, prerequisites, school differences, and common FAQs.",
    readingTime: "14 min read",
    wordCount: "2,450",
    tocItems,
    relatedTools,
    faqItems,
    contentHtml,
    sourcesHtml
  });
}

module.exports = { getArticle6 };
