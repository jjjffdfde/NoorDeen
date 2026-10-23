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
    if (window.I18n) window.I18n.init();
  }

  // Service Worker Registration for Offline Capability
  initServiceWorker() {
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
    const el = document.getElementById('current-hijri-date');
    if (el && window.IslamicTools) {
      el.textContent = window.IslamicTools.getHijriDate(new Date());
    }
  }

  // Search Modal
  setupSearchModal() {
    const searchInputs = document.querySelectorAll('.global-search-trigger');
    searchInputs.forEach(input => {
      input.addEventListener('focus', () => this.openSearchModal());
    });
  }

  openSearchModal() {
    let modal = document.getElementById('search-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.id = 'search-modal';
      modal.className = 'modal-overlay';
      modal.innerHTML = `
        <div class="modal-content">
          <div class="modal-header">
            <h3 style="font-size: 1.15rem; font-weight: 700;">Global Islamic Search</h3>
            <button class="btn-icon" onclick="App.closeSearchModal()">✕</button>
          </div>
          <div style="padding: 16px 24px 0;">
            <input type="text" id="modal-search-input" class="search-input" style="width: 100%; padding: 12px 16px; border: 1px solid var(--color-border); border-radius: var(--radius-sm); font-size: 1rem;" placeholder="Search Surahs, Ayahs, Hadith, Duas...">
          </div>
          <div class="modal-body" id="modal-search-results">
            <p style="color: var(--color-text-muted); text-align: center; margin-top: 20px;">Type at least 2 characters to search across verified texts.</p>
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
          <a href="${r.url}" style="display: block; padding: 12px 0; border-bottom: 1px solid var(--color-border-subtle); text-decoration: none; color: inherit;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-weight: 700; color: var(--color-primary);">${r.title}</span>
              <span style="font-size: 0.75rem; padding: 2px 8px; border-radius: 99px; background-color: var(--color-surface); font-weight: 600;">${r.type}</span>
            </div>
            <p style="font-size: 0.88rem; color: var(--color-text-muted); line-height: 1.4;">${r.snippet}</p>
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

      const languages = window.I18n ? window.I18n.getAllLanguages() : [];

      modal.innerHTML = `
        <div class="modal-content" style="max-width: 650px;">
          <div class="modal-header">
            <h3 style="font-size: 1.15rem; font-weight: 700;">Select Interface Language (40 Supported)</h3>
            <button class="btn-icon" onclick="App.closeLanguageModal()">✕</button>
          </div>
          <div style="padding: 16px 24px 0;">
            <input type="text" id="lang-filter-input" class="search-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--color-border); border-radius: var(--radius-sm);" placeholder="Search language name (English, Urdu, العربية)...">
          </div>
          <div class="modal-body" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 10px; padding-top: 14px;" id="lang-modal-grid">
            ${languages.map(l => `
              <button class="btn btn-outline" style="justify-content: space-between; text-align: left; padding: 10px 14px; border-radius: var(--radius-sm);" onclick="App.selectLanguage('${l.code}')">
                <div>
                  <div style="font-weight: 700; font-size: 0.95rem;">${l.name}</div>
                  <div style="font-size: 0.8rem; color: var(--color-primary);">${l.nativeName}</div>
                </div>
                ${l.dir === 'rtl' ? '<span style="font-size: 0.7rem; padding: 2px 6px; background-color: var(--color-surface); border-radius: 4px;">RTL</span>' : ''}
              </button>
            `).join('')}
          </div>
        </div>
      `;
      document.body.appendChild(modal);

      const filterInput = document.getElementById('lang-filter-input');
      filterInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const grid = document.getElementById('lang-modal-grid');
        const filtered = languages.filter(l =>
          l.name.toLowerCase().includes(query) ||
          l.nativeName.toLowerCase().includes(query) ||
          l.code.toLowerCase().includes(query)
        );
        grid.innerHTML = filtered.map(l => `
          <button class="btn btn-outline" style="justify-content: space-between; text-align: left; padding: 10px 14px; border-radius: var(--radius-sm);" onclick="App.selectLanguage('${l.code}')">
            <div>
              <div style="font-weight: 700; font-size: 0.95rem;">${l.name}</div>
              <div style="font-size: 0.8rem; color: var(--color-primary);">${l.nativeName}</div>
            </div>
            ${l.dir === 'rtl' ? '<span style="font-size: 0.7rem; padding: 2px 6px; background-color: var(--color-surface); border-radius: 4px;">RTL</span>' : ''}
          </button>
        `).join('');
      });
    }

    modal.style.display = 'flex';
  }

  closeLanguageModal() {
    const modal = document.getElementById('language-modal');
    if (modal) modal.style.display = 'none';
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
