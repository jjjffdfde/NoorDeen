/**
 * ISLAMIC KNOWLEDGE PORTAL — MAIN APPLICATION CONTROLLER
 */

class Application {
  constructor() {
    this.theme = localStorage.getItem('islamic_portal_theme') || 'light';
    this.init();
  }

  init() {
    this.applyTheme(this.theme);
    this.setupThemeToggle();
    this.setupLanguageModal();
    this.setupSearchModal();
    this.setupMobileDrawer();
    this.setupOfflineBanner();
    this.initServiceWorker();
    this.renderHijriDate();
    this.checkContinueReading();
    this.highlightActiveNav();
    this.initSpiritualCompanion();
    if (window.I18n) window.I18n.init();
  }

  // Dynamic Continue Reading Session Manager
  checkContinueReading() {
    const panel = document.getElementById('continue-reading-panel');
    if (!panel) return;

    try {
      const dataStr = localStorage.getItem('islamic_portal_last_read');
      if (!dataStr) {
        panel.classList.remove('active');
        return;
      }
      const data = JSON.parse(dataStr);
      if (!data || !data.surahNumber) {
        panel.classList.remove('active');
        return;
      }

      const titleEl = document.getElementById('continue-reading-title');
      const linkEl = document.getElementById('continue-reading-link');
      const timeEl = document.getElementById('continue-reading-time');

      if (titleEl) {
        titleEl.textContent = `${data.surahName} (Verse ${data.ayahNumber || 1})`;
      }
      if (linkEl) {
        linkEl.setAttribute('href', `quran.html?surah=${data.surahNumber}#ayah-${data.ayahNumber || 1}`);
      }
      if (timeEl && data.timestamp) {
        const diffMinutes = Math.round((Date.now() - data.timestamp) / 60000);
        let timeText = 'Recently';
        if (diffMinutes < 1) timeText = 'Just now';
        else if (diffMinutes < 60) timeText = `${diffMinutes}m ago`;
        else if (diffMinutes < 1440) timeText = `${Math.round(diffMinutes / 60)}h ago`;
        else timeText = `${Math.round(diffMinutes / 1440)}d ago`;
        timeEl.textContent = `Last read ${timeText} • Saved in device storage`;
      }

      panel.classList.add('active');
    } catch (e) {
      console.warn('Could not parse continue-reading progress:', e);
      panel.classList.remove('active');
    }
  }

  // Service Worker Registration for Offline Capability
  initServiceWorker() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
      const btn = document.getElementById('pwa-install-btn');
      if (btn) btn.style.display = 'inline-flex';
    });

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
          .then(registration => {
            console.log('[PWA] Service Worker registered successfully with scope:', registration.scope);
          })
          .catch(error => {
            console.warn('[PWA] Service Worker registration failed:', error);
          });
      });
    }
  }

  promptPwaInstall() {
    if (this.deferredPrompt) {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choice) => {
        if (choice.outcome === 'accepted') {
          this.showToast('Thank you for installing Islamic Knowledge Portal!');
        }
        this.deferredPrompt = null;
      });
    } else {
      this.showToast('To install: Tap your browser menu (⋮ or Share) and select "Add to Home Screen" or "Install App"');
    }
  }

  // Offline / Online Connectivity Status Banner
  setupOfflineBanner() {
    let banner = document.getElementById('offline-banner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'offline-banner';
      banner.className = 'offline-status-banner';
      banner.setAttribute('role', 'status');
      banner.setAttribute('aria-live', 'polite');
      banner.innerHTML = '⚡ You are currently offline. Full offline reading (Quran, Hadith, Kalimas, Duas) is active.';
      document.body.prepend(banner);
    }

    const updateStatus = () => {
      if (!navigator.onLine) {
        banner.classList.add('active');
        this.showToast('Offline mode active. Cached content available.', 4000);
      } else {
        banner.classList.remove('active');
      }
    };

    window.addEventListener('online', () => {
      updateStatus();
      this.showToast('You are back online.', 3000);
    });
    window.addEventListener('offline', updateStatus);

    if (!navigator.onLine) {
      updateStatus();
    }
  }

  // Mobile Navigation Drawer
  setupMobileDrawer() {
    let overlay = document.getElementById('mobile-drawer-overlay');
    let drawer = document.getElementById('mobile-drawer');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'mobile-drawer-overlay';
      overlay.className = 'mobile-drawer-overlay';
      overlay.addEventListener('click', () => this.closeMobileDrawer());
      document.body.appendChild(overlay);
    }

    if (!drawer) {
      drawer = document.createElement('aside');
      drawer.id = 'mobile-drawer';
      drawer.className = 'mobile-drawer';
      drawer.setAttribute('aria-label', 'Mobile Navigation');
      drawer.innerHTML = `
        <div class="mobile-drawer-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="color: var(--color-gold); font-size: 1.4rem;">☪</span>
            <strong style="color: var(--color-primary); font-size: 1.05rem;">Islamic Portal</strong>
          </div>
          <button class="btn-icon" onclick="App.closeMobileDrawer()" aria-label="Close menu">✕</button>
        </div>
        <ul class="mobile-drawer-links">
          <li><a href="/" id="drawer-home"><span>🏠</span> <span data-i18n="nav.home">Home</span></a></li>
          <li><a href="/quran.html" id="drawer-quran"><span>📖</span> <span data-i18n="nav.quran">Quran</span></a></li>
          <li><a href="/hadith.html" id="drawer-hadith"><span>📜</span> <span data-i18n="nav.hadith">Hadith</span></a></li>
          <li><a href="/kalimas.html" id="drawer-kalimas"><span>⭐</span> <span data-i18n="nav.kalimas">Kalimas</span></a></li>
          <li><a href="/duas.html" id="drawer-duas"><span>🤲</span> <span data-i18n="nav.duas">Duas & Adhkar</span></a></li>
          <li><a href="/seerah.html" id="drawer-seerah"><span>🕌</span> <span data-i18n="nav.seerah">Seerah</span></a></li>
          <li><a href="/prophets.html" id="drawer-prophets"><span>✨</span> <span data-i18n="nav.prophets">Prophets</span></a></li>
          <li><a href="/sahaba.html" id="drawer-sahaba"><span>👥</span> <span data-i18n="nav.sahaba">Sahaba</span></a></li>
          <li><a href="/pillars.html" id="drawer-pillars"><span>🏛️</span> <span data-i18n="nav.pillars">Five Pillars</span></a></li>
          <li><a href="/salah-guide.html" id="drawer-salah"><span>🧎</span> <span data-i18n="nav.salah">Salah Guide</span></a></li>
          <li><a href="/janazah-guide.html" id="drawer-janazah"><span>⚰️</span> <span>Janazah Guide</span></a></li>
          <li><a href="/eid-guide.html" id="drawer-eid"><span>🌙</span> <span>Eid Prayer Guide</span></a></li>
          <li><a href="/download-app.html" id="drawer-download-app" style="color: var(--color-gold); font-weight: 700;"><span>📱</span> <span>Download Android App</span></a></li>
          <li><a href="/wudu-guide.html" id="drawer-wudu"><span>💧</span> <span data-i18n="nav.wudu">Wudu Guide</span></a></li>
          <li><a href="/prayer-times.html" id="drawer-prayer-times"><span>⏰</span> <span data-i18n="nav.prayerTimes">Prayer Times</span></a></li>
          <li><a href="/tasbih.html" id="drawer-tasbih"><span>📿</span> <span data-i18n="nav.tasbih">Tasbih</span></a></li>
          <li><a href="/zakat-calculator.html" id="drawer-zakat"><span>🪙</span> <span data-i18n="nav.zakat">Zakat</span></a></li>
          <li><a href="/calendar.html" id="drawer-calendar"><span>📅</span> <span data-i18n="nav.calendar">Calendar</span></a></li>
          <li><a href="/bookmarks.html" id="drawer-bookmarks"><span>🔖</span> <span data-i18n="nav.bookmarks">Bookmarks</span></a></li>
        </ul>
        <div style="padding: 16px; margin-top: auto; border-top: 1px solid var(--color-border); display: flex; flex-direction: column; gap: 10px;">
          <button class="btn btn-outline" style="width: 100%; justify-content: center;" onclick="App.closeMobileDrawer(); App.openLanguageModal();">
            🌐 <span id="drawer-lang-label">Language</span>
          </button>
          <button class="btn btn-outline" style="width: 100%; justify-content: center;" onclick="App.toggleTheme();">
            🌓 Toggle Dark/Light
          </button>
        </div>
      `;
      document.body.appendChild(drawer);
    }

    // Mark current active link
    const currentPath = window.location.pathname;
    const links = drawer.querySelectorAll('.mobile-drawer-links a');
    links.forEach(a => {
      const href = a.getAttribute('href');
      if (href === currentPath || (currentPath === '/' && href === '/') || (href !== '/' && currentPath.endsWith(href.replace('/', '')))) {
        a.classList.add('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') this.closeMobileDrawer();
    });
  }

  toggleMobileDrawer() {
    const drawer = document.getElementById('mobile-drawer');
    if (drawer && drawer.classList.contains('active')) {
      this.closeMobileDrawer();
    } else {
      this.openMobileDrawer();
    }
  }

  openMobileDrawer() {
    const overlay = document.getElementById('mobile-drawer-overlay');
    const drawer = document.getElementById('mobile-drawer');
    if (overlay) overlay.classList.add('active');
    if (drawer) drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  closeMobileDrawer() {
    const overlay = document.getElementById('mobile-drawer-overlay');
    const drawer = document.getElementById('mobile-drawer');
    if (overlay) overlay.classList.remove('active');
    if (drawer) drawer.classList.remove('active');
    document.body.style.overflow = '';
  }

  applyTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('islamic_portal_theme', theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
      toggleBtn.setAttribute('title', theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    }
  }

  toggleTheme() {
    const nextTheme = this.theme === 'dark' ? 'light' : 'dark';
    this.applyTheme(nextTheme);
  }

  setupThemeToggle() {
    const btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.addEventListener('click', () => this.toggleTheme());
    }
  }

  renderHijriDate() {
    const date = new Date();
    const hijriStr = window.IslamicTools ? window.IslamicTools.getHijriDate(date) : '1447 AH';
    
    const el = document.getElementById('current-hijri-date');
    if (el) el.textContent = hijriStr;

    const bentoEl = document.getElementById('bento-hijri-date');
    if (bentoEl) bentoEl.textContent = `${hijriStr} • Astronomical`;

    this.updateBentoPrayerTimes();
  }

  updateBentoPrayerTimes() {
    if (!window.IslamicTools || !window.IslamicTools.calculatePrayerTimes) return;
    try {
      const now = new Date();
      const times = window.IslamicTools.calculatePrayerTimes(21.4225, 39.8262, 3, now);
      if (!times) return;

      const fEl = document.getElementById('mini-fajr');
      const dEl = document.getElementById('mini-dhuhr');
      const aEl = document.getElementById('mini-asr');
      const mEl = document.getElementById('mini-maghrib');
      const iEl = document.getElementById('mini-isha');

      if (fEl) fEl.textContent = times.fajr;
      if (dEl) dEl.textContent = times.dhuhr;
      if (aEl) aEl.textContent = times.asr;
      if (mEl) mEl.textContent = times.maghrib;
      if (iEl) iEl.textContent = times.isha;

      const timeToMinutes = (str) => {
        const [h, m] = str.split(':').map(Number);
        return h * 60 + m;
      };

      const currentMins = now.getHours() * 60 + now.getMinutes();
      const schedule = [
        { name: 'Fajr', mins: timeToMinutes(times.fajr) },
        { name: 'Dhuhr', mins: timeToMinutes(times.dhuhr) },
        { name: 'Asr', mins: timeToMinutes(times.asr) },
        { name: 'Maghrib', mins: timeToMinutes(times.maghrib) },
        { name: 'Isha', mins: timeToMinutes(times.isha) }
      ];

      let next = schedule.find(p => p.mins > currentMins);
      if (!next) next = { name: 'Fajr (Tomorrow)', mins: schedule[0].mins + 1440 };

      const diff = next.mins - currentMins;
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;

      const nameEl = document.getElementById('next-prayer-name');
      const remainingEl = document.getElementById('next-prayer-time-remaining');
      if (nameEl) nameEl.textContent = next.name;
      if (remainingEl) remainingEl.textContent = `in ${hours > 0 ? `${hours}h ` : ''}${minutes}m`;
    } catch (e) {
      console.warn('Could not update Bento prayer times:', e);
    }
  }

  // Instant Ayah Audio Player (Verse of the Day)
  playDailyAyahAudio() {
    if (!this.dailyAudio) {
      this.dailyAudio = new Audio('https://everyayah.com/data/Alafasy_128kbps/002255.mp3');
      this.dailyAudio.addEventListener('ended', () => {
        const btn = document.getElementById('instant-ayah-audio-btn');
        if (btn) btn.innerHTML = '<span>▶</span> <span>Listen (Alafasy)</span>';
      });
    }

    const btn = document.getElementById('instant-ayah-audio-btn');
    if (this.dailyAudio.paused) {
      this.dailyAudio.play().then(() => {
        if (btn) btn.innerHTML = '<span>⏸</span> <span>Pause Recitation</span>';
      }).catch(err => {
        console.warn('Audio play prevented:', err);
        this.showToast('Please tap play again to allow audio.');
      });
    } else {
      this.dailyAudio.pause();
      if (btn) btn.innerHTML = '<span>▶</span> <span>Resume (Alafasy)</span>';
    }
  }

  // Search Modal
  setupSearchModal() {
    const searchInputs = document.querySelectorAll('.global-search-trigger');
    searchInputs.forEach(input => {
      input.addEventListener('focus', () => this.openSearchModal());
    });

    // Global keyboard shortcut: Ctrl+K or Cmd+K
    document.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        this.openSearchModal();
      }
    });
  }

  openSearchModal() {
    let modal = document.getElementById('search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'search-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content" style="max-width: 680px;">
          <div class="modal-header">
            <h3 style="font-size: 1.15rem; font-weight: 700;">Global Islamic Search (Phonetic & Multi-Region)</h3>
            <button class="btn-icon" onclick="App.closeSearchModal()">✕</button>
          </div>
          <div style="padding: 16px 24px 0;">
            <input type="text" id="modal-search-input" class="search-input" style="width: 100%; padding: 12px 16px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-size: 1rem;" placeholder="Search Surahs (e.g. Yaseen, Mulk, Waqiah, Rehman, Ayatul Kursi), Hadith, Duas...">
          </div>
          <!-- Popular Daily Surahs Quick Access Row -->
          <div class="search-modal-quick-pills" style="display: flex; flex-wrap: wrap; gap: 6px; padding: 12px 24px; border-bottom: 1px solid var(--color-border-subtle); align-items: center; background: var(--color-surface);">
            <span style="font-size: 0.78rem; font-weight: 700; color: var(--color-gold); margin-right: 4px;">Popular Daily Surahs:</span>
            <a href="quran.html?surah=36" class="popular-surah-pill" style="font-size: 0.78rem; padding: 4px 10px;">✨ Ya-Sin (36)</a>
            <a href="quran.html?surah=67" class="popular-surah-pill" style="font-size: 0.78rem; padding: 4px 10px;">👑 Al-Mulk (67)</a>
            <a href="quran.html?surah=55" class="popular-surah-pill" style="font-size: 0.78rem; padding: 4px 10px;">🕊️ Ar-Rahman (55)</a>
            <a href="quran.html?surah=56" class="popular-surah-pill" style="font-size: 0.78rem; padding: 4px 10px;">⚡ Al-Waqi'ah (56)</a>
            <a href="quran.html?surah=2&verse=255" class="popular-surah-pill" style="font-size: 0.78rem; padding: 4px 10px;">🛡️ Ayatul Kursi</a>
            <a href="quran.html?surah=18" class="popular-surah-pill" style="font-size: 0.78rem; padding: 4px 10px;">🌟 Al-Kahf (18)</a>
          </div>
          <div class="modal-body" id="modal-search-results" style="max-height: 480px; overflow-y: auto;">
            <p style="color: var(--color-text-muted); text-align: center; margin-top: 20px;">Type at least 2 characters to search across verified texts in English, Arabic, or Urdu.</p>
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const input = document.getElementById('modal-search-input');
      input.addEventListener('input', (e) => {
        const query = e.target.value;
        const results = window.UniversalSearch ? window.UniversalSearch.search(query) : [];
        const resBox = document.getElementById('modal-search-results');
        if (!query || query.trim().length < 2) {
          resBox.innerHTML = '<p style="color: var(--color-text-muted); text-align: center; margin-top: 20px;">Type at least 2 characters to search across verified texts.</p>';
          return;
        }
        if (results.length === 0) {
          resBox.innerHTML = '<p style="color: var(--color-text-muted); text-align: center; margin-top: 20px;">No verified matching records found.</p>';
          return;
        }
        resBox.innerHTML = results.map(r => `
          <a href="${r.url}" style="display: block; padding: 12px 14px; border-bottom: 1px solid var(--color-border-subtle); text-decoration: none; color: inherit; transition: background 0.15s ease;" onmouseover="this.style.background='var(--color-surface)'" onmouseout="this.style.background='transparent'">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-weight: 700; color: var(--color-primary); font-size: 1rem;">${r.title}</span>
              <span style="font-size: 0.75rem; padding: 2px 8px; border-radius: 99px; background-color: var(--color-surface); font-weight: 600;">${r.type}</span>
            </div>
            ${r.urduPreview ? `
              <div style="font-family: var(--font-urdu); direction: rtl; text-align: right; color: var(--color-gold-dark); font-size: 0.95rem; margin-bottom: 6px; line-height: 1.6;">
                ${r.urduPreview}
              </div>
            ` : ''}
            <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.4; margin: 0;">${r.snippet}</p>
          </a>
        `).join('');
      });
    }

    modal.style.display = 'flex';
    setTimeout(() => {
      const input = document.getElementById('modal-search-input');
      if (input) input.focus();
    }, 50);
  }

  closeSearchModal() {
    const modal = document.getElementById('search-modal');
    if (modal) modal.style.display = 'none';
  }

  // 40-Language Selector Modal
  setupLanguageModal() {
    const trigger = document.getElementById('language-selector-btn');
    if (trigger) {
      trigger.addEventListener('click', () => this.openLanguageModal());
    }
  }

  openLanguageModal() {
    let modal = document.getElementById('language-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'language-modal';
      modal.className = 'modal-overlay';

      const languages = window.I18n ? window.I18n.getUISelectableLanguages() : [];

      modal.innerHTML = `
        <div class="modal-content" style="max-width: 500px;">
          <div class="modal-header">
            <h3 style="font-size: 1.15rem; font-weight: 700;">Select Interface Language</h3>
            <button class="btn-icon" onclick="App.closeLanguageModal()">✕</button>
          </div>
          <div style="padding: 16px 24px 8px;">
            <!-- Instant Reset to Default English Button -->
            <button class="btn btn-primary" style="width: 100%; justify-content: center; gap: 8px; margin-bottom: 12px; font-weight: 700; padding: 12px; border-radius: var(--radius-sm); box-shadow: 0 4px 12px rgba(6, 95, 70, 0.2);" onclick="App.resetToDefaultLanguage()">
              🔄 Reset to Default (English)
            </button>
            <p style="font-size: 0.86rem; color: var(--color-text-muted); margin-bottom: 4px;">Or switch to fully verified authentic translations:</p>
          </div>
          <div class="modal-body" style="display: flex; flex-direction: column; gap: 10px; padding-top: 4px;" id="lang-modal-grid">
            ${languages.map(l => `
              <button class="btn btn-outline" style="justify-content: space-between; text-align: left; padding: 12px 18px; border-radius: var(--radius-sm);" onclick="App.selectLanguage('${l.code}')">
                <div>
                  <div style="font-weight: 700; font-size: 1rem;">${l.name}</div>
                  <div style="font-size: 0.85rem; color: var(--color-primary);">${l.nativeName}</div>
                </div>
                ${l.dir === 'rtl' ? '<span style="font-size: 0.72rem; padding: 2px 8px; background-color: var(--color-surface); border-radius: 4px; font-weight: 700;">RTL</span>' : '<span style="font-size: 0.72rem; padding: 2px 8px; background-color: var(--color-surface); border-radius: 4px; font-weight: 700;">LTR</span>'}
              </button>
            `).join('')}
          </div>
        </div>
      `;
      document.body.appendChild(modal);
    }
    modal.style.display = 'flex';
  }

  closeLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (modal) modal.style.display = 'none';
  }

  resetToDefaultLanguage() {
    if (window.I18n) {
      window.I18n.resetToDefault();
      const label = document.getElementById('current-language-label');
      if (label) label.textContent = 'English';
      this.showToast('Restored default English interface');
    }
    this.closeLanguageModal();
  }

  selectLanguage(code) {
    if (window.I18n) {
      window.I18n.setLanguage(code);
      const info = window.I18n.getLanguageInfo(code);
      const label = document.getElementById('current-language-label');
      if (label) label.textContent = info.nativeName;
      this.showToast(`Language set to ${info.name} (${info.nativeName})`);
    }
    this.closeLanguageModal();
  }

  // Active Nav Link Auto-Detection
  highlightActiveNav() {
    if (typeof window === 'undefined') return;
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const cleanCurrent = (currentPath === '' || currentPath === '/') ? 'index.html' : currentPath;
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-drawer-menu a, .nav-dropdown-item');
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;
      const cleanHref = href.split('/').pop().split('?')[0].split('#')[0];
      if (cleanHref === cleanCurrent) {
        link.classList.add('active');
        const parentItem = link.closest('.nav-item');
        if (parentItem) parentItem.classList.add('active');
      }
    });
  }

  // Daily Spiritual Companion (Rozana Kirdar & Wazaif Deck)
  initSpiritualCompanion() {
    const container = document.getElementById('daily-companion-section');
    if (!container) return;

    const todayStr = new Date().toISOString().slice(0, 10); // YYYY-MM-DD
    const storageKey = `islamic_portal_wazaif_${todayStr}`;
    let state = {};
    try {
      state = JSON.parse(localStorage.getItem(storageKey) || '{}');
    } catch (e) {
      state = {};
    }

    // Calculate streak
    let streak = parseInt(localStorage.getItem('islamic_portal_streak') || '1', 10);
    const lastActiveDate = localStorage.getItem('islamic_portal_last_active_date');
    if (lastActiveDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toISOString().slice(0, 10);
      if (lastActiveDate !== todayStr && lastActiveDate !== yesterdayStr) {
        streak = 1;
      }
    }
    localStorage.setItem('islamic_portal_last_active_date', todayStr);
    localStorage.setItem('islamic_portal_streak', String(streak));

    const updateUI = () => {
      const checkboxes = container.querySelectorAll('.wazifa-check');
      let completedCount = 0;
      checkboxes.forEach(cb => {
        const id = cb.dataset.wazifaId;
        if (state[id]) {
          cb.checked = true;
          completedCount++;
          const itemRow = cb.closest('.wazifa-item');
          if (itemRow) itemRow.classList.add('completed');
        } else {
          cb.checked = false;
          const itemRow = cb.closest('.wazifa-item');
          if (itemRow) itemRow.classList.remove('completed');
        }
      });

      const progressVal = document.getElementById('companion-progress-val');
      const ringCircle = document.getElementById('companion-ring-progress');
      if (progressVal) progressVal.textContent = `${completedCount}/5`;
      if (ringCircle) {
        const circumference = 175.9; // 2 * PI * 28
        const offset = circumference - (completedCount / 5) * circumference;
        ringCircle.style.strokeDashoffset = offset;
      }

      const streakBadge = document.getElementById('companion-streak-badge');
      if (streakBadge) {
        streakBadge.textContent = completedCount === 5 
          ? `🔥 ${streak} Day Streak (All Completed!)` 
          : `🔥 ${streak} Day Habit Streak`;
      }
    };

    container.addEventListener('change', (e) => {
      if (e.target.classList.contains('wazifa-check')) {
        const id = e.target.dataset.wazifaId;
        state[id] = e.target.checked;
        localStorage.setItem(storageKey, JSON.stringify(state));

        const allDone = ['fajr', 'morning', 'maghrib', 'sleep', 'friday'].every(k => state[k]);
        if (allDone && !state._streakBonusGiven) {
          state._streakBonusGiven = true;
          localStorage.setItem(storageKey, JSON.stringify(state));
          streak += 1;
          localStorage.setItem('islamic_portal_streak', String(streak));
          this.showToast('✨ MashaAllah! All 5 daily Sunnah wazaif completed today! May Allah accept it.');
        }
        updateUI();
      }
    });

    updateUI();
  }

  // Toast Notification
  showToast(message, duration = 3000) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'app-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.right = '24px';
      toast.style.backgroundColor = 'var(--color-primary)';
      toast.style.color = '#FFFFFF';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = 'var(--radius-sm)';
      toast.style.boxShadow = 'var(--shadow-lg)';
      toast.style.fontWeight = '600';
      toast.style.fontSize = '0.9rem';
      toast.style.zIndex = '9999';
      toast.style.transition = 'opacity 0.25s ease';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.opacity = '1';
    toast.style.display = 'block';

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => { toast.style.display = 'none'; }, 250);
    }, duration);
  }
}

window.App = new Application();
