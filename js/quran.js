/**
 * ISLAMIC KNOWLEDGE PORTAL — PROFESSIONAL QURAN READER & AUDIO CONTROLLER
 * High-fidelity Verse Recitation • Multi-Reciter Selection • Offline Cache API
 * Persistent Progress • Font Customization • Translation Controls
 */

const SURAH_THEMATIC_DATA = {
  1: {
    period: "Early Meccan (Pre-Hijrah)",
    themes: ["Praise & Glorification of Allah", "Divine Sovereignty & Day of Recompense", "Direct Supplication for Sincere Guidance", "The Straight Path (Sirat al-Mustaqeem)"],
    asbab: "Revealed at the onset of prophetic revelation in Makkah, ordained as the essential foundation of every unit (Rak'ah) of prayer.",
    virtues: "Proclaimed by Prophet Muhammad ﷺ as 'The Greatest Surah in the Quran' and the 'Seven Oft-Repeated Verses' (Sahih al-Bukhari #4474)."
  },
  2: {
    period: "Early Medinan (Post-Hijrah)",
    themes: ["Guidance for the God-Conscious (Muttaqeen)", "Covenant with Bani Isra'il & Adam's Creation", "Legislation of Salah, Zakat, Fasting & Hajj", "Prohibition of Riba (Usury) & Ayatul Kursi"],
    asbab: "Revealed gradually over several years in Madinah to establish the civil, economic, and moral framework of the newly established Islamic society.",
    virtues: "The Prophet ﷺ said: 'Do not turn your houses into graves; Satan flees from the house in which Surah Al-Baqarah is recited' (Sahih Muslim #780)."
  },
  36: {
    period: "Middle Meccan",
    themes: ["The Authenticity of Prophethood & Revelation", "The Reality of Physical Resurrection & Day of Judgment", "Signs of Divine Omnipotence in the Cosmos", "Fate of Previous Defiant Civilizations"],
    asbab: "Revealed during the peak of Quraysh denial in Makkah to confront the polytheists regarding the certainty of resurrection and accountability.",
    virtues: "Revered throughout Islamic history as the 'Heart of the Quran' for its poetic eloquence, vivid eschatological descriptions, and powerful theological arguments."
  },
  67: {
    period: "Meccan",
    themes: ["Absolute Dominion & Sovereignty of Allah", "Cosmic Order and the Seven Heavens", "The Purpose of Life and Death as a Moral Test", "Warnings of the Fire and the Regret of Disbelievers"],
    asbab: "Revealed to orient the human consciousness toward the grandeur of the Creator and the inevitability of the Hereafter.",
    virtues: "Prophet Muhammad ﷺ stated: 'A Surah of thirty verses interceded for a man until he was forgiven: Tabarakalladhi biyadihil-Mulk' (Sunan Abi Dawud #1400)."
  },
  97: {
    period: "Meccan",
    themes: ["Descent of the Holy Quran", "The Magnificence of the Night of Decree (Laylatul Qadr)", "Descent of Angel Jibril and the Angels with Divine Decrees", "Peace Until the Break of Dawn"],
    asbab: "Revealed to honor the night wherein the Quran was first sent down from the Preserved Tablet (Al-Lawh al-Mahfuz) to the lowest heaven.",
    virtues: "Worship during this single night is declared better than a thousand months of continuous devotion (over 83 years and 4 months)."
  },
  108: {
    period: "Meccan",
    themes: ["Divine Abundance Granted to the Prophet ﷺ", "Gratitude Expressed via Prayer and Sacrifice", "The Cutting Off and Humiliation of the Prophet's Enemies"],
    asbab: "Revealed to comfort Prophet Muhammad ﷺ when his son al-Qasim died in infancy and the polytheist al-As ibn Wa'il taunted that he was 'Abtar' (cut off from posterity).",
    virtues: "The Prophet ﷺ revealed that Al-Kawthar is a celestial river and basin in Paradise whose banks are of gold and drinking vessels as numerous as the stars."
  },
  112: {
    period: "Early Meccan",
    themes: ["Absolute Monotheism (Tawheed al-Khalis)", "The Self-Sufficiency of Allah (As-Samad)", "Negation of Offspring, Ancestry, and Partners", "Total Incomparability of the Divine Essence"],
    asbab: "Revealed when the polytheists of Makkah asked the Prophet ﷺ: 'Describe the lineage and ancestry of your Lord to us.'",
    virtues: "The Messenger of Allah ﷺ affirmed that reciting Surah Al-Ikhlas is equivalent to reciting one-third of the entire Quran (Sahih al-Bukhari #5013)."
  },
  113: {
    period: "Meccan / Medinan",
    themes: ["Seeking Refuge with the Lord of the Daybreak", "Protection Against the Evils of Darkness (Ghāsiq)", "Shield Against Sorcery and Occult Blowing on Knots", "Shield Against Malicious Envy and Jealousy (Ḥasad)"],
    asbab: "Revealed alongside Surah An-Nas as complete spiritual armor against psychic harm, black magic, evil eye, and environmental perils.",
    virtues: "The Prophet ﷺ consistently sought refuge with these two Surahs upon retiring to sleep and during sickness (Sahih al-Bukhari #5016)."
  },
  114: {
    period: "Meccan / Medinan",
    themes: ["Seeking Sanctuary with the King and God of Mankind", "Protection from the Retreating Whisperer (Al-Waswas Al-Khannas)", "Spiritual Warfare Against Diabolical Temptations from Jinn and Men"],
    asbab: "Revealed to safeguard the inner sanctuary of the human heart from doubts, whisperings, and psychic malice.",
    virtues: "One of the twin Mu'awwidhatayn which the Prophet ﷺ described: 'People have never sought refuge with anything like them' (Sunan an-Nasa'i #5433)."
  }
};

class QuranReader {
  constructor() {
    this.currentSurah = 1;
    this.currentAyah = 1;
    this.audioElement = new Audio();
    this.isPlaying = false;
    this.reciter = localStorage.getItem('islamic_portal_reciter') || 'Alafasy_128kbps';
    this.repeatMode = 'none'; // 'none' | 'ayah' | 'surah'
    this.playbackRate = 1.0;
    this.fontSize = parseInt(localStorage.getItem('islamic_portal_font_size') || '30', 10);
    this.translationMode = localStorage.getItem('islamic_portal_translation_mode') || 'both';
    this.showUrdu = this.translationMode === 'both' || this.translationMode === 'urdu';
    this.showEnglish = this.translationMode === 'both' || this.translationMode === 'english';
    this.showTranslit = localStorage.getItem('islamic_portal_show_translit') === 'true';
    this.surahData = null;
    this.isDownloadingAudio = false;

    this.initAudioListeners();
  }

  initAudioListeners() {
    // When ayah audio finishes playing
    this.audioElement.addEventListener('ended', () => {
      if (this.repeatMode === 'ayah') {
        this.playAyah(this.currentSurah, this.currentAyah);
      } else if (this.surahData && this.currentAyah < this.surahData.numberOfAyahs) {
        this.playAyah(this.currentSurah, this.currentAyah + 1);
      } else if (this.repeatMode === 'surah') {
        this.playAyah(this.currentSurah, 1);
      } else {
        this.isPlaying = false;
        this.updateAudioBarUI();
      }
    });

    // Time update for seek bar and elapsed readout
    this.audioElement.addEventListener('timeupdate', () => {
      const cur = this.audioElement.currentTime;
      const dur = this.audioElement.duration || 0;
      const slider = document.getElementById('audio-seek-slider');
      const curLabel = document.getElementById('audio-time-current');
      const totLabel = document.getElementById('audio-time-total');

      if (slider && dur > 0) {
        slider.value = (cur / dur) * 100;
      }
      if (curLabel) curLabel.textContent = this.formatTime(cur);
      if (totLabel && dur > 0) totLabel.textContent = this.formatTime(dur);
    });

    // Handle audio error gracefully
    this.audioElement.addEventListener('error', (e) => {
      console.warn('Recitation audio network error:', e);
      this.isPlaying = false;
      this.updateAudioBarUI();
      if (window.App) {
        window.App.showToast('Audio track unavailable or connection interrupted. Check internet or cached audio.', 4000);
      }
    });
  }

  formatTime(seconds) {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  // Load a complete Surah (from offline bundled cache or online verified cloud)
  async loadSurah(surahNumber = 1) {
    this.currentSurah = Number(surahNumber);
    const container = document.getElementById('quran-ayahs-container');
    const headerTitle = document.getElementById('surah-title-header');
    const headerMeta = document.getElementById('surah-meta-header');

    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px;">
          <div style="font-size: 2rem; color: var(--color-primary); margin-bottom: 12px;">📖</div>
          <p style="color: var(--color-text-muted); font-size: 1.05rem;">Loading verified Quranic scripture...</p>
        </div>
      `;
    }

    // 1. Check offline bundled database
    if (ISLAMIC_DATA.offlineSurahs && ISLAMIC_DATA.offlineSurahs[this.currentSurah]) {
      this.surahData = ISLAMIC_DATA.offlineSurahs[this.currentSurah];
      this.renderSurah();
      this.saveLastReadPosition(this.currentSurah, 1);
      return;
    }

    // 2. Fetch from Al-Quran Cloud API if connected
    try {
      const res = await fetch(`https://api.alquran.cloud/v1/surah/${this.currentSurah}/editions/quran-uthmani,en.sahih,ur.jalandhry`);
      if (res.ok) {
        const json = await res.json();
        if (json.code === 200 && json.data.length >= 3) {
          const ar = json.data[0];
          const en = json.data[1];
          const ur = json.data[2];

          this.surahData = {
            number: ar.number,
            name: ar.name,
            englishName: ar.englishName,
            englishNameTranslation: ar.englishNameTranslation,
            numberOfAyahs: ar.numberOfAyahs,
            bismillahPre: ar.number !== 1 && ar.number !== 9,
            ayahs: ar.ayahs.map((a, idx) => ({
              num: a.numberInSurah,
              ar: a.text,
              en: en.ayahs[idx]?.text || '',
              ur: ur.ayahs[idx]?.text || '',
              tr: '',
              audio: `${String(ar.number).padStart(3, '0')}${String(a.numberInSurah).padStart(3, '0')}.mp3`
            }))
          };
          this.renderSurah();
          this.saveLastReadPosition(this.currentSurah, 1);
          return;
        }
      }
    } catch (err) {
      console.warn('Network API fetch failed, displaying offline fallback notice:', err);
    }

    // 3. Fallback when Surah is not bundled offline and device is disconnected
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === this.currentSurah);
    if (container && meta) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 48px 24px; max-width: 680px; margin: 40px auto; border-top: 3px solid var(--color-gold);">
          <div style="font-size: 2.2rem; margin-bottom: 12px;">⚡</div>
          <h3 style="color: var(--color-primary); font-size: 1.35rem; margin-bottom: 8px;">Surah ${meta.englishName} (${meta.name})</h3>
          <p style="color: var(--color-text-muted); line-height: 1.6; margin-bottom: 24px;">
            This Surah contains ${meta.numberOfAyahs} verses. Complete offline reading is currently active for Surahs 1 (Al-Fatihah), 36 (Ya-Sin), 67 (Al-Mulk), 97 (Al-Qadr), 108 (Al-Kawthar), 109 (Al-Kafirun), 110 (An-Nasr), 112 (Al-Ikhlas), 113 (Al-Falaq), 114 (An-Nas), and Ayatul Kursi.
          </p>
          <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
            <a href="quran.html?surah=1" class="btn btn-primary">Read Surah Al-Fatihah (Offline)</a>
            <a href="quran.html?surah=36" class="btn btn-outline">Read Surah Ya-Sin (Offline)</a>
            <a href="quran.html?surah=67" class="btn btn-outline">Read Surah Al-Mulk (Offline)</a>
          </div>
        </div>
      `;
    }
  }

  saveLastReadPosition(surahNum, ayahNum) {
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === surahNum);
    const lastRead = {
      surahNumber: surahNum,
      ayahNumber: ayahNum,
      surahName: meta ? meta.englishName : `Surah ${surahNum}`,
      surahArabic: meta ? meta.name : '',
      timestamp: Date.now()
    };
    try {
      localStorage.setItem('islamic_portal_last_read', JSON.stringify(lastRead));
    } catch (e) {
      console.warn('Could not persist last read state:', e);
    }
  }

  getSurahOverviewHTML(surahNum, meta) {
    const custom = SURAH_THEMATIC_DATA[surahNum];
    const period = custom ? custom.period : (meta.revelationType === 'Meccan' ? 'Meccan (Focus on Monotheism, Creeds & Hereafter)' : 'Medinan (Focus on Law, Community & Worship)');
    const themes = custom ? custom.themes : [
      `Divine Oneness & Creeds of Faith`,
      `Cosmic Signs & Divine Guidance`,
      `Moral Responsibility & Righteous Deeds`,
      `Accountability on the Day of Judgment`
    ];
    const asbab = custom ? custom.asbab : `Preserved according to the canonical order established by Prophet Muhammad ﷺ under divine guidance.`;
    const virtues = custom ? custom.virtues : `Part of the living, immutable Word of Allah recited daily by millions in prayer.`;

    return `
      <details class="surah-overview-card" open>
        <summary style="cursor: pointer; list-style: none; display: flex; justify-content: space-between; align-items: center; user-select: none;">
          <span class="surah-overview-title">📖 Surah Overview & Thematic Context</span>
          <span class="surah-overview-badge">${period}</span>
        </summary>
        <div style="margin-top: 16px; font-size: 0.92rem; line-height: 1.7; color: var(--color-text-main);">
          <div style="margin-bottom: 10px;">
            <strong>Core Divine Themes:</strong><br>
            <div style="margin-top: 6px;">
              ${themes.map(t => `<span class="surah-theme-pill">${t}</span>`).join('')}
            </div>
          </div>
          <div style="margin-bottom: 8px;">
            <strong>Historical Context & Asbab al-Nuzul:</strong>
            <p style="margin: 4px 0 0 0; color: var(--color-text-muted); font-size: 0.88rem;">${asbab}</p>
          </div>
          <div>
            <strong>Authentic Virtues (Fada'il):</strong>
            <p style="margin: 4px 0 0 0; color: var(--color-text-muted); font-size: 0.88rem;">${virtues}</p>
          </div>
        </div>
      </details>
    `;
  }

  renderSurah() {
    if (!this.surahData) return;
    const container = document.getElementById('quran-ayahs-container');
    const headerTitle = document.getElementById('surah-title-header');
    const headerMeta = document.getElementById('surah-meta-header');

    if (headerTitle) {
      headerTitle.textContent = `${this.surahData.number}. ${this.surahData.englishName} (${this.surahData.name})`;
    }
    if (headerMeta) {
      const type = this.surahData.number < 2 ? 'Meccan' : (ISLAMIC_DATA.surahs.find(s => s.number === this.surahData.number)?.revelationType || 'Meccan');
      headerMeta.textContent = `${this.surahData.englishNameTranslation} • ${this.surahData.numberOfAyahs} Verses • Revelation: ${type}`;
    }

    if (!container) return;
    container.innerHTML = '';

    // Render Surah Overview & Thematic Context Card
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === this.surahData.number) || {};
    const overviewBox = document.createElement('div');
    overviewBox.innerHTML = this.getSurahOverviewHTML(this.surahData.number, meta);
    container.appendChild(overviewBox.firstElementChild);

    // Render Bismillah Header if applicable (All Surahs except At-Tawbah & Al-Fatihah which has it as verse 1)
    if (this.surahData.bismillahPre) {
      const bismBox = document.createElement('div');
      bismBox.className = 'card';
      bismBox.style.textAlign = 'center';
      bismBox.style.marginBottom = '24px';
      bismBox.style.backgroundColor = 'var(--color-surface)';
      bismBox.style.border = '1px solid var(--color-border)';
      bismBox.innerHTML = `
        <p class="font-quran" style="font-size: 1.85rem; color: var(--color-primary); line-height: 2.2;">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 6px;">In the name of Allah, the Entirely Merciful, the Especially Merciful.</p>
      `;
      container.appendChild(bismBox);
    }

    // Render Verse Cards
    this.surahData.ayahs.forEach(ayah => {
      const box = document.createElement('article');
      box.className = 'ayah-box';
      box.id = `ayah-${ayah.num}`;

      box.innerHTML = `
        <div class="ayah-header">
          <span class="ayah-badge">Ayah ${this.surahData.number}:${ayah.num}</span>
          <div class="ayah-actions">
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.playAyah(${this.surahData.number}, ${ayah.num})" aria-label="Listen to Ayah ${this.surahData.number}:${ayah.num}">
              ▶ Listen
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.copyAyah(${ayah.num})" aria-label="Copy Ayah ${ayah.num}">
              Copy
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.bookmarkAyah(${this.surahData.number}, ${ayah.num})" aria-label="Bookmark Ayah ${ayah.num}">
              Bookmark
            </button>
          </div>
        </div>
        <div class="ayah-arabic" style="font-size: ${this.fontSize}px;">
          ${ayah.ar} <span style="font-size: 0.8em; color: var(--color-gold); font-family: sans-serif;">۝${ayah.num}</span>
        </div>
        ${this.showTranslit && ayah.tr ? `<div style="font-style: italic; color: var(--color-gold-dark); margin-bottom: 10px; font-size: 0.95rem;">${ayah.tr}</div>` : ''}
        ${this.showEnglish && ayah.en ? `<div class="ayah-translation">${ayah.en}</div>` : ''}
        ${this.showUrdu && ayah.ur ? `<div class="ayah-urdu">${ayah.ur}</div>` : ''}
      `;
      container.appendChild(box);
    });
  }

  playAyah(surahNum, ayahNum) {
    this.currentSurah = surahNum;
    this.currentAyah = ayahNum;
    const s = String(surahNum).padStart(3, '0');
    const a = String(ayahNum).padStart(3, '0');
    const url = `https://everyayah.com/data/${this.reciter}/${s}${a}.mp3`;

    this.audioElement.src = url;
    this.audioElement.playbackRate = this.playbackRate;

    this.audioElement.play().then(() => {
      this.isPlaying = true;
      this.updateAudioBarUI();
      this.highlightAyah(ayahNum);
      this.saveLastReadPosition(surahNum, ayahNum);
    }).catch(err => {
      console.warn('Playback play failed (device policy or offline):', err);
      this.isPlaying = false;
      this.updateAudioBarUI();
    });
  }

  highlightAyah(ayahNum) {
    document.querySelectorAll('.ayah-box').forEach(el => {
      el.style.borderColor = 'var(--color-border)';
      el.style.boxShadow = 'var(--shadow-sm)';
    });
    const target = document.getElementById(`ayah-${ayahNum}`);
    if (target) {
      target.style.borderColor = 'var(--color-gold)';
      target.style.boxShadow = '0 0 0 3px rgba(181, 139, 80, 0.2)';
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
    } else {
      if (this.audioElement.src) {
        this.audioElement.play().then(() => {
          this.isPlaying = true;
        }).catch(err => {
          console.warn('Playback failed:', err);
        });
      } else {
        this.playAyah(this.currentSurah, this.currentAyah || 1);
      }
    }
    this.updateAudioBarUI();
  }

  playPreviousAyah() {
    if (this.currentAyah > 1) {
      this.playAyah(this.currentSurah, this.currentAyah - 1);
    } else if (this.currentSurah > 1) {
      const prevSurahMeta = ISLAMIC_DATA.surahs.find(s => s.number === this.currentSurah - 1);
      const prevAyah = prevSurahMeta ? prevSurahMeta.numberOfAyahs : 1;
      this.loadSurah(this.currentSurah - 1).then(() => {
        this.playAyah(this.currentSurah, prevAyah);
      });
    }
  }

  playNextAyah() {
    if (this.surahData && this.currentAyah < this.surahData.numberOfAyahs) {
      this.playAyah(this.currentSurah, this.currentAyah + 1);
    } else if (this.currentSurah < 114) {
      this.loadSurah(this.currentSurah + 1).then(() => {
        this.playAyah(this.currentSurah, 1);
      });
    }
  }

  seekAudio(percentage) {
    if (this.audioElement.duration) {
      this.audioElement.currentTime = (percentage / 100) * this.audioElement.duration;
    }
  }

  setReciter(reciterId) {
    this.reciter = reciterId;
    localStorage.setItem('islamic_portal_reciter', reciterId);
    if (this.isPlaying) {
      this.playAyah(this.currentSurah, this.currentAyah);
    } else {
      this.updateAudioBarUI();
    }
    if (window.App) window.App.showToast(`Reciter set to ${this.getReciterName(reciterId)}`);
  }

  getReciterName(id) {
    const names = {
      'Alafasy_128kbps': 'Sheikh Mishary Rashid Alafasy',
      'Abdul_Basit_Murattal_192kbps': 'Sheikh Abdul Basit (Murattal)',
      'Husary_128kbps': 'Sheikh Mahmoud Khalil Al-Husary',
      'Minshawy_Murattal_128kbps': 'Sheikh Mohamed Siddiq Al-Minshawi',
      'Abu_Bakr_Ash-Shaatree_128kbps': 'Sheikh Abu Bakr Al-Shatri'
    };
    return names[id] || id;
  }

  toggleRepeatMode() {
    const modes = ['none', 'ayah', 'surah'];
    const nextIdx = (modes.indexOf(this.repeatMode) + 1) % modes.length;
    this.repeatMode = modes[nextIdx];

    const btn = document.getElementById('audio-repeat-btn');
    if (btn) {
      if (this.repeatMode === 'none') {
        btn.textContent = '🔁 Off';
        btn.style.color = 'var(--color-text-muted)';
      } else if (this.repeatMode === 'ayah') {
        btn.textContent = '🔂 Ayah';
        btn.style.color = 'var(--color-primary)';
      } else {
        btn.textContent = '🔁 Surah';
        btn.style.color = 'var(--color-gold)';
      }
    }
    if (window.App) window.App.showToast(`Repeat mode: ${this.repeatMode.toUpperCase()}`);
  }

  setPlaybackSpeed(speed) {
    this.playbackRate = parseFloat(speed);
    this.audioElement.playbackRate = this.playbackRate;
    const btn = document.getElementById('audio-speed-btn');
    if (btn) btn.textContent = `${this.playbackRate}x`;
    if (window.App) window.App.showToast(`Playback speed: ${this.playbackRate}x`);
  }

  updateAudioBarUI() {
    const bar = document.getElementById('audio-player-bar');
    const playBtn = document.getElementById('audio-play-toggle-btn');
    const title = document.getElementById('audio-track-title');
    const reciterLabel = document.getElementById('audio-track-reciter');

    if (bar) bar.style.display = 'block';
    if (playBtn) {
      playBtn.textContent = this.isPlaying ? '❚❚' : '▶';
      playBtn.setAttribute('aria-label', this.isPlaying ? 'Pause audio' : 'Play audio');
    }
    if (title && this.surahData) {
      title.textContent = `Surah ${this.surahData.englishName} — Ayah ${this.currentAyah}`;
    }
    if (reciterLabel) {
      reciterLabel.textContent = `Reciter: ${this.getReciterName(this.reciter)}`;
    }
  }

  setTranslationMode(mode) {
    this.translationMode = mode;
    if (mode === 'both') {
      this.showUrdu = true;
      this.showEnglish = true;
    } else if (mode === 'urdu') {
      this.showUrdu = true;
      this.showEnglish = false;
    } else if (mode === 'english') {
      this.showUrdu = false;
      this.showEnglish = true;
    } else if (mode === 'arabic') {
      this.showUrdu = false;
      this.showEnglish = false;
    }
    localStorage.setItem('islamic_portal_translation_mode', mode);
    this.renderAyahs();
  }

  setFontSize(size) {
    this.fontSize = Number(size);
    localStorage.setItem('islamic_portal_font_size', String(this.fontSize));
    document.querySelectorAll('.ayah-arabic').forEach(el => {
      el.style.fontSize = `${this.fontSize}px`;
    });
  }

  copyAyah(ayahNum) {
    const ayah = this.surahData?.ayahs.find(a => a.num === ayahNum);
    if (!ayah) return;
    const text = `${ayah.ar}\n\n"${ayah.en}"\n\n[Surah ${this.surahData.englishName} ${this.surahData.number}:${ayah.num}]`;
    navigator.clipboard.writeText(text).then(() => {
      if (window.App) window.App.showToast('Ayah copied to clipboard!');
    });
  }

  bookmarkAyah(surahNum, ayahNum) {
    const key = 'islamic_portal_bookmarks';
    const bookmarks = JSON.parse(localStorage.getItem(key) || '[]');
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === surahNum);
    const item = {
      type: 'ayah',
      surahNumber: surahNum,
      ayahNumber: ayahNum,
      surahName: meta ? meta.englishName : `Surah ${surahNum}`,
      timestamp: Date.now()
    };
    if (!bookmarks.some(b => b.surahNumber === surahNum && b.ayahNumber === ayahNum)) {
      bookmarks.push(item);
      localStorage.setItem(key, JSON.stringify(bookmarks));
      if (window.App) window.App.showToast(`Bookmarked Surah ${item.surahName}:${ayahNum}`);
    } else {
      if (window.App) window.App.showToast(`Already saved in bookmarks!`);
    }
  }

  // Audio Cache & Offline Download Manager
  async downloadSurahAudio(surahNum) {
    if (!('caches' in window)) {
      if (window.App) window.App.showToast('Offline audio caching is not supported in this browser.');
      return;
    }
    const surah = this.surahData && this.surahData.number === surahNum ? this.surahData : ISLAMIC_DATA.offlineSurahs[surahNum];
    if (!surah) {
      if (window.App) window.App.showToast('Please open this Surah before downloading recitation.');
      return;
    }

    if (this.isDownloadingAudio) {
      if (window.App) window.App.showToast('Download already running in background...');
      return;
    }

    this.isDownloadingAudio = true;
    if (window.App) window.App.showToast(`Downloading Surah ${surah.englishName} audio for offline listening...`);

    try {
      const cache = await caches.open('islamic-portal-audio-v1');
      let downloaded = 0;
      const s = String(surahNum).padStart(3, '0');

      for (const ayah of surah.ayahs) {
        const a = String(ayah.num).padStart(3, '0');
        const url = `https://everyayah.com/data/${this.reciter}/${s}${a}.mp3`;
        const match = await cache.match(url);
        if (!match) {
          try {
            const resp = await fetch(url, { mode: 'no-cors' });
            if (resp) await cache.put(url, resp);
          } catch (e) {
            console.warn(`Could not cache audio for ${s}:${a}:`, e);
          }
        }
        downloaded++;
      }
      this.isDownloadingAudio = false;
      if (window.App) window.App.showToast(`✓ Surah ${surah.englishName} is now fully available offline! (${downloaded} verses)`);
    } catch (err) {
      this.isDownloadingAudio = false;
      console.error('Audio cache error:', err);
      if (window.App) window.App.showToast('Audio download failed. Please check internet connection.');
    }
  }
}

window.QuranReader = QuranReader;
