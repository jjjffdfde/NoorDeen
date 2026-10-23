/**
 * ISLAMIC KNOWLEDGE PORTAL — PROFESSIONAL QURAN READER & AUDIO CONTROLLER
 * High-fidelity Verse Recitation • Multi-Reciter Selection • Offline Cache API
 * Persistent Progress • Font Customization • Translation Controls
 */

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
    this.showUrdu = localStorage.getItem('islamic_portal_show_urdu') !== 'false';
    this.showEnglish = localStorage.getItem('islamic_portal_show_english') !== 'false';
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
