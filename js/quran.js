/**
 * ISLAMIC KNOWLEDGE PORTAL — QURAN READER CONTROLLER
 */

class QuranReader {
  constructor() {
    this.currentSurah = 1;
    this.currentAyah = 1;
    this.audioElement = new Audio();
    this.isPlaying = false;
    this.reciter = 'Alafasy_128kbps';
    this.fontSize = 28;
    this.showUrdu = true;
    this.showEnglish = true;
    this.showTranslit = false;
    this.surahData = null;
    this.isDownloadingAudio = false;
    this.initAudioListener();
  }

  // Audio Cache & Offline Download Manager
  async downloadSurahAudio(surahNum) {
    if (!('caches' in window)) {
      if (window.App) window.App.showToast('Offline audio caching is not supported in this browser.');
      return;
    }
    const surah = this.surahData && this.surahData.number === surahNum ? this.surahData : ISLAMIC_DATA.offlineSurahs[surahNum];
    if (!surah) {
      if (window.App) window.App.showToast('Load this surah before downloading audio.');
      return;
    }

    if (this.isDownloadingAudio) {
      if (window.App) window.App.showToast('Audio download already in progress...');
      return;
    }

    this.isDownloadingAudio = true;
    if (window.App) window.App.showToast(`Starting offline audio download for Surah ${surah.englishName} (${surah.ayahs.length} ayahs)...`);

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
            console.warn(`Failed to cache audio for ${s}:${a}:`, e);
          }
        }
        downloaded++;
      }
      this.isDownloadingAudio = false;
      if (window.App) window.App.showToast(`Surah ${surah.englishName} audio is now available offline! (${downloaded} ayahs)`);
    } catch (err) {
      this.isDownloadingAudio = false;
      console.error('Audio download error:', err);
      if (window.App) window.App.showToast('Audio download failed. Please check your connection.');
    }
  }

  initAudioListener() {
    this.audioElement.addEventListener('ended', () => {
      if (this.surahData && this.currentAyah < this.surahData.numberOfAyahs) {
        this.playAyah(this.currentSurah, this.currentAyah + 1);
      } else {
        this.isPlaying = false;
        this.updateAudioBarUI();
      }
    });

    this.audioElement.addEventListener('error', (e) => {
      console.warn('Audio playback error, attempting next ayah:', e);
      this.isPlaying = false;
      this.updateAudioBarUI();
    });
  }

  async loadSurah(surahNumber = 1) {
    this.currentSurah = Number(surahNumber);
    const container = document.getElementById('quran-ayahs-container');
    const headerTitle = document.getElementById('surah-title-header');
    const headerMeta = document.getElementById('surah-meta-header');

    if (container) {
      container.innerHTML = '<div style="text-align:center; padding: 40px;"><p>Loading Quranic Ayahs...</p></div>';
    }

    // Check offline database first
    if (ISLAMIC_DATA.offlineSurahs[this.currentSurah]) {
      this.surahData = ISLAMIC_DATA.offlineSurahs[this.currentSurah];
      this.renderSurah();
      return;
    }

    // Try fetching from Al-Quran Cloud API
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
          return;
        }
      }
    } catch (err) {
      console.warn('Network API fetch failed, rendering offline info:', err);
    }

    // Fallback if surah is not in offline list
    const meta = ISLAMIC_DATA.surahs.find(s => s.number === this.currentSurah);
    if (container && meta) {
      container.innerHTML = `
        <div class="card" style="text-align: center; padding: 40px;">
          <h3 style="color: var(--color-primary); margin-bottom: 12px;">Surah ${meta.englishName} (${meta.name})</h3>
          <p style="color: var(--color-text-muted); margin-bottom: 20px;">
            This Surah has ${meta.numberOfAyahs} verses. Full offline texts are currently bundled for Surah Al-Fatihah, Ya-Sin, Al-Mulk, Al-Ikhlas, Al-Falaq, An-Nas, and Ayatul Kursi.
          </p>
          <a href="quran.html?surah=1" class="btn btn-primary">Read Surah Al-Fatihah</a>
        </div>
      `;
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
      headerMeta.textContent = `${this.surahData.englishNameTranslation} • ${this.surahData.numberOfAyahs} Verses`;
    }

    if (!container) return;
    container.innerHTML = '';

    // Render Bismillah if applicable
    if (this.surahData.bismillahPre) {
      const bismBox = document.createElement('div');
      bismBox.className = 'card';
      bismBox.style.textAlign = 'center';
      bismBox.style.marginBottom = '24px';
      bismBox.style.backgroundColor = 'var(--color-surface)';
      bismBox.innerHTML = `
        <p class="font-quran" style="font-size: 1.8rem; color: var(--color-primary);">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        <p style="font-size: 0.9rem; color: var(--color-text-muted); margin-top: 6px;">In the name of Allah, the Entirely Merciful, the Especially Merciful.</p>
      `;
      container.appendChild(bismBox);
    }

    // Render Ayahs
    this.surahData.ayahs.forEach(ayah => {
      const box = document.createElement('div');
      box.className = 'ayah-box';
      box.id = `ayah-${ayah.num}`;

      box.innerHTML = `
        <div class="ayah-header">
          <span class="ayah-badge">Ayah ${this.surahData.number}:${ayah.num}</span>
          <div class="ayah-actions">
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.playAyah(${this.surahData.number}, ${ayah.num})">
              ▶ Listen
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.copyAyah(${ayah.num})">
              Copy
            </button>
            <button class="btn btn-outline" style="padding: 4px 10px; font-size: 0.8rem;" onclick="quranApp.bookmarkAyah(${this.surahData.number}, ${ayah.num})">
              Bookmark
            </button>
          </div>
        </div>
        <div class="ayah-arabic" style="font-size: ${this.fontSize}px;">
          ${ayah.ar} <span style="font-size: 0.8em; color: var(--color-gold);">۝${ayah.num}</span>
        </div>
        ${ayah.tr ? `<div style="font-style: italic; color: var(--color-gold-dark); margin-bottom: 8px;">${ayah.tr}</div>` : ''}
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
    this.audioElement.play().then(() => {
      this.isPlaying = true;
      this.updateAudioBarUI();
      this.highlightAyah(ayahNum);
    }).catch(err => {
      console.warn('Playback play failed:', err);
      this.isPlaying = false;
      this.updateAudioBarUI();
    });
  }

  highlightAyah(ayahNum) {
    document.querySelectorAll('.ayah-box').forEach(el => {
      el.style.borderColor = 'var(--color-border)';
    });
    const target = document.getElementById(`ayah-${ayahNum}`);
    if (target) {
      target.style.borderColor = 'var(--color-gold)';
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  togglePlayPause() {
    if (this.isPlaying) {
      this.audioElement.pause();
      this.isPlaying = false;
    } else {
      if (this.audioElement.src) {
        this.audioElement.play();
        this.isPlaying = true;
      } else {
        this.playAyah(this.currentSurah, 1);
      }
    }
    this.updateAudioBarUI();
  }

  updateAudioBarUI() {
    const bar = document.getElementById('audio-player-bar');
    const playBtn = document.getElementById('audio-play-toggle-btn');
    const title = document.getElementById('audio-track-title');

    if (bar) bar.style.display = 'block';
    if (playBtn) {
      playBtn.textContent = this.isPlaying ? '❚❚ Pause' : '▶ Play';
    }
    if (title && this.surahData) {
      title.textContent = `${this.surahData.englishName} — Ayah ${this.currentAyah}`;
    }
  }

  setFontSize(size) {
    this.fontSize = Number(size);
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
      if (window.App) window.App.showToast(`Already bookmarked!`);
    }
  }
}

window.QuranReader = QuranReader;
