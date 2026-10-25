/**
 * ISLAMIC KNOWLEDGE PORTAL — INTERACTIVE TOOLS ENGINE
 * 1. Astronomical Prayer Times (Multi-Method, Hanafi/Shafi'i Asr, High-Latitude)
 * 2. Multi-Currency International Zakat Calculator (Gold & Silver Nisab, Karat Purity)
 * 3. Digital Tasbih Synthesizer & State Persistence (Undo, Vibration, Presets)
 * 4. Um al-Qura Hijri Calendar Converter
 */

const IslamicTools = (() => {
  const rad = Math.PI / 180;
  const deg = 180 / Math.PI;

  function fixAngle(a) {
    a = a - 360.0 * Math.floor(a / 360.0);
    return a < 0 ? a + 360.0 : a;
  }

  function fixHour(h) {
    h = h - 24.0 * Math.floor(h / 24.0);
    return h < 0 ? h + 24.0 : h;
  }

  // Recognized Calculation Methods
  const PRAYER_METHODS = {
    karachi: { name: 'University of Islamic Sciences, Karachi', fajr: 18, isha: 18 },
    mwl: { name: 'Muslim World League', fajr: 18, isha: 17 },
    isna: { name: 'Islamic Society of North America (ISNA)', fajr: 15, isha: 15 },
    makkah: { name: 'Umm Al-Qura University, Makkah', fajr: 18.5, isha: 90, ishaIsMinutes: true },
    egypt: { name: 'Egyptian General Authority of Survey', fajr: 19.5, isha: 17.5 },
    tehran: { name: 'Institute of Geophysics, University of Tehran', fajr: 17.7, isha: 14 }
  };

  // Verified Coordinates and IANA Timezones Database
  const CITIES = {
    islamabad: { name: 'Islamabad', country: 'Pakistan', lat: 33.6844, lng: 73.0479, tz: 5, timezone: 'Asia/Karachi' },
    lahore: { name: 'Lahore', country: 'Pakistan', lat: 31.5204, lng: 74.3587, tz: 5, timezone: 'Asia/Karachi' },
    karachi: { name: 'Karachi', country: 'Pakistan', lat: 24.8607, lng: 67.0011, tz: 5, timezone: 'Asia/Karachi' },
    gujranwala: { name: 'Gujranwala', country: 'Pakistan', lat: 32.1877, lng: 74.1945, tz: 5, timezone: 'Asia/Karachi' },
    peshawar: { name: 'Peshawar', country: 'Pakistan', lat: 34.0151, lng: 71.5249, tz: 5, timezone: 'Asia/Karachi' },
    quetta: { name: 'Quetta', country: 'Pakistan', lat: 30.1798, lng: 66.9750, tz: 5, timezone: 'Asia/Karachi' },
    multan: { name: 'Multan', country: 'Pakistan', lat: 30.1575, lng: 71.4524, tz: 5, timezone: 'Asia/Karachi' },
    makkah: { name: 'Makkah al-Mukarramah', country: 'Saudi Arabia', lat: 21.4225, lng: 39.8262, tz: 3, timezone: 'Asia/Riyadh' },
    madinah: { name: 'Madinah al-Munawwarah', country: 'Saudi Arabia', lat: 24.4686, lng: 39.6142, tz: 3, timezone: 'Asia/Riyadh' },
    jerusalem: { name: 'Al-Quds / Jerusalem', country: 'Palestine', lat: 31.7683, lng: 35.2137, tz: 3, timezone: 'Asia/Jerusalem' },
    cairo: { name: 'Cairo', country: 'Egypt', lat: 30.0444, lng: 31.2357, tz: 2, timezone: 'Africa/Cairo' },
    dhaka: { name: 'Dhaka', country: 'Bangladesh', lat: 23.8103, lng: 90.4125, tz: 6, timezone: 'Asia/Dhaka' },
    jakarta: { name: 'Jakarta', country: 'Indonesia', lat: -6.2088, lng: 106.8456, tz: 7, timezone: 'Asia/Jakarta' },
    kualalumpur: { name: 'Kuala Lumpur', country: 'Malaysia', lat: 3.1390, lng: 101.6869, tz: 8, timezone: 'Asia/Kuala_Lumpur' },
    istanbul: { name: 'Istanbul', country: 'Turkey', lat: 41.0082, lng: 28.9784, tz: 3, timezone: 'Europe/Istanbul' },
    dubai: { name: 'Dubai', country: 'UAE', lat: 25.2048, lng: 55.2708, tz: 4, timezone: 'Asia/Dubai' },
    doha: { name: 'Doha', country: 'Qatar', lat: 25.2854, lng: 51.5310, tz: 3, timezone: 'Asia/Qatar' },
    riyadh: { name: 'Riyadh', country: 'Saudi Arabia', lat: 24.7136, lng: 46.6753, tz: 3, timezone: 'Asia/Riyadh' },
    london: { name: 'London', country: 'UK', lat: 51.5074, lng: -0.1278, tz: 0, timezone: 'Europe/London' },
    paris: { name: 'Paris', country: 'France', lat: 48.8566, lng: 2.3522, tz: 1, timezone: 'Europe/Paris' },
    toronto: { name: 'Toronto', country: 'Canada', lat: 43.6532, lng: -79.3832, tz: -5, timezone: 'America/Toronto' },
    newyork: { name: 'New York', country: 'USA', lat: 40.7128, lng: -74.0060, tz: -5, timezone: 'America/New_York' },
    sydney: { name: 'Sydney', country: 'Australia', lat: -33.8688, lng: 151.2093, tz: 10, timezone: 'Australia/Sydney' },
    tokyo: { name: 'Tokyo', country: 'Japan', lat: 35.6762, lng: 139.6503, tz: 9, timezone: 'Asia/Tokyo' }
  };

  // Benchmark Currency Exchange & Metal Rates (Relative to USD Base)
  const CURRENCY_RATES = {
    USD: { symbol: '$', name: 'US Dollar', ratePerUSD: 1.0, goldPerGram: 85.50, silverPerGram: 1.05 },
    EUR: { symbol: '€', name: 'Euro', ratePerUSD: 0.92, goldPerGram: 78.66, silverPerGram: 0.97 },
    GBP: { symbol: '£', name: 'British Pound', ratePerUSD: 0.79, goldPerGram: 67.55, silverPerGram: 0.83 },
    PKR: { symbol: '₨', name: 'Pakistani Rupee', ratePerUSD: 278.50, goldPerGram: 23811.75, silverPerGram: 292.43 },
    INR: { symbol: '₹', name: 'Indian Rupee', ratePerUSD: 83.50, goldPerGram: 7139.25, silverPerGram: 87.68 },
    BDT: { symbol: '৳', name: 'Bangladeshi Taka', ratePerUSD: 117.20, goldPerGram: 10020.60, silverPerGram: 123.06 },
    SAR: { symbol: '﷼', name: 'Saudi Riyal', ratePerUSD: 3.75, goldPerGram: 320.63, silverPerGram: 3.94 },
    AED: { symbol: 'د.إ', name: 'UAE Dirham', ratePerUSD: 3.67, goldPerGram: 313.79, silverPerGram: 3.85 },
    CAD: { symbol: 'CA$', name: 'Canadian Dollar', ratePerUSD: 1.36, goldPerGram: 116.28, silverPerGram: 1.43 },
    AUD: { symbol: 'AU$', name: 'Australian Dollar', ratePerUSD: 1.51, goldPerGram: 129.11, silverPerGram: 1.59 },
    TRY: { symbol: '₺', name: 'Turkish Lira', ratePerUSD: 32.50, goldPerGram: 2778.75, silverPerGram: 34.13 },
    IDR: { symbol: 'Rp', name: 'Indonesian Rupiah', ratePerUSD: 16250.0, goldPerGram: 1389375.0, silverPerGram: 17062.5 },
    MYR: { symbol: 'RM', name: 'Malaysian Ringgit', ratePerUSD: 4.71, goldPerGram: 402.71, silverPerGram: 4.95 }
  };

  return {
    PRAYER_METHODS,
    CURRENCY_RATES,
    CITIES,

    // =========================================================================
    // 1. ASTRONOMICAL PRAYER TIMES ENGINE
    // =========================================================================
    calculatePrayerTimes(arg1, arg2, arg3, arg4, arg5 = {}) {
      let date, latitude, longitude, timezoneOffset, options = {};
      const isDate = (d) => d instanceof Date || (d && typeof d.getTime === 'function');

      if (typeof arg1 === 'number') {
        latitude = arg1;
        longitude = typeof arg2 === 'number' ? arg2 : 39.8262;
        timezoneOffset = typeof arg3 === 'number' ? arg3 : 0;
        date = (typeof arg4 === 'string' || isDate(arg4)) ? arg4 : new Date();
        options = (typeof arg5 === 'object' && arg5 !== null) ? arg5 : {};
      } else {
        date = (typeof arg1 === 'string' || isDate(arg1)) ? arg1 : new Date();
        latitude = typeof arg2 === 'number' ? arg2 : 21.4225;
        longitude = typeof arg3 === 'number' ? arg3 : 39.8262;
        timezoneOffset = typeof arg4 === 'number' ? arg4 : (typeof arg5 === 'number' ? arg5 : (isDate(date) ? -date.getTimezoneOffset() / 60 : 0));
        options = (typeof arg5 === 'object' && arg5 !== null) ? arg5 : {};
      }

      const methodKey = (options.method || 'karachi').toLowerCase();
      const method = PRAYER_METHODS[methodKey] || PRAYER_METHODS.karachi;
      const asrMethod = (options.asrMethod || 'standard').toLowerCase();
      const asrFactor = asrMethod === 'hanafi' ? 2 : 1;
      const highLatMethod = options.highLatMethod || 'nightMiddle';

      // Parse calendar year, month, and day without local timezone skew
      let year, month, day;
      if (typeof date === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(date)) {
        const parts = date.split('-').map(Number);
        year = parts[0];
        month = parts[1];
        day = parts[2];
        date = new Date(year, month - 1, day);
      } else if (isDate(date)) {
        year = date.getFullYear();
        month = date.getMonth() + 1;
        day = date.getDate();
      } else {
        const d = new Date();
        year = d.getFullYear();
        month = d.getMonth() + 1;
        day = d.getDate();
        date = d;
      }

      let Y = year, M = month;
      if (M <= 2) { Y -= 1; M += 12; }
      const A = Math.floor(Y / 100);
      const B = 2 - A + Math.floor(A / 4);
      const JD = Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + day + B - 1524.5;

      const D = JD - 2451545.0;
      const g = fixAngle(357.529 + 0.98560028 * D);
      const q = fixAngle(280.459 + 0.98564736 * D);
      const L = fixAngle(q + 1.915 * Math.sin(g * rad) + 0.020 * Math.sin(2 * g * rad));
      const e = 23.439 - 0.00000036 * D;

      let RA = Math.atan2(Math.cos(e * rad) * Math.sin(L * rad), Math.cos(L * rad)) * deg;
      RA = fixAngle(RA);

      let dRA = q - RA;
      if (dRA > 180) dRA -= 360;
      if (dRA < -180) dRA += 360;
      const EqT = (dRA / 15) * 60; // Equation of time in minutes
      const decl = Math.asin(Math.sin(e * rad) * Math.sin(L * rad)) * deg; // Solar declination in degrees

      // Solar noon (Dhuhr)
      const noon = fixHour(12 + timezoneOffset - longitude / 15 - EqT / 60);

      const hourAngle = (altitudeDeg) => {
        const cosHA = (Math.sin(altitudeDeg * rad) - Math.sin(latitude * rad) * Math.sin(decl * rad)) /
                      (Math.cos(latitude * rad) * Math.cos(decl * rad));
        if (cosHA < -1) return 12;
        if (cosHA > 1) return 0;
        return Math.acos(cosHA) * deg / 15;
      };

      // Sunrise & Sunset at -0.833°
      const sunHA = hourAngle(-0.833);
      const sunrise = fixHour(noon - sunHA);
      const sunset = fixHour(noon + sunHA);

      // Fajr
      const fajrHA = hourAngle(-method.fajr);
      let fajr = fixHour(noon - fajrHA);

      // Asr
      const asrAlt = Math.atan(1.0 / (asrFactor + Math.tan(Math.abs(latitude - decl) * rad))) * deg;
      const asrHA = hourAngle(asrAlt);
      const asr = fixHour(noon + asrHA);

      // Maghrib
      const maghrib = sunset;

      // Isha
      let isha;
      if (method.ishaIsMinutes) {
        isha = fixHour(maghrib + method.isha / 60.0);
      } else {
        const ishaHA = hourAngle(-method.isha);
        isha = fixHour(noon + ishaHA);
      }

      // High Latitude Estimations (Taqdeer)
      const nightDuration = fixHour(24 - (sunset - sunrise));
      if (fajrHA === 0 || fajrHA === 12 || Math.abs(fajr - sunrise) > nightDuration / 2) {
        if (highLatMethod === 'nightMiddle') {
          fajr = fixHour(sunrise - nightDuration / 2);
          if (!method.ishaIsMinutes) isha = fixHour(sunset + nightDuration / 2);
        } else if (highLatMethod === 'oneSeventh') {
          fajr = fixHour(sunrise - nightDuration / 7);
          if (!method.ishaIsMinutes) isha = fixHour(sunset + nightDuration / 7);
        } else {
          const portion = (method.fajr / 60.0) * nightDuration;
          fajr = fixHour(sunrise - portion);
          if (!method.ishaIsMinutes) isha = fixHour(sunset + (method.isha / 60.0) * nightDuration);
        }
      }

      const toTimeStr = (decimalHours, is24h = false) => {
        decimalHours = fixHour(decimalHours);
        let h = Math.floor(decimalHours);
        let m = Math.round((decimalHours - h) * 60);
        if (m === 60) { h = (h + 1) % 24; m = 0; }
        if (is24h) {
          return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        }
        const ampm = h >= 12 ? 'PM' : 'AM';
        const h12 = h % 12 || 12;
        return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
      };

      const is24 = options.is24Hour || false;

      return {
        fajr: toTimeStr(fajr, is24),
        sunrise: toTimeStr(sunrise, is24),
        ishraq: toTimeStr(sunrise + 15 / 60, is24),
        zawalStart: toTimeStr(noon - 10 / 60, is24),
        dhuhr: toTimeStr(noon, is24),
        asr: toTimeStr(asr, is24),
        maghrib: toTimeStr(maghrib, is24),
        isha: toTimeStr(isha, is24),
        raw: {
          fajr,
          sunrise,
          ishraq: sunrise + 15 / 60,
          zawalStart: noon - 10 / 60,
          dhuhr: noon,
          asr,
          maghrib,
          isha
        },
        method: method.name,
        asrJuristic: asrMethod === 'hanafi' ? 'Hanafi (Shadow factor 2)' : 'Standard / Shafi\'i (Shadow factor 1)'
      };
    },

    // =========================================================================
    // 2. INTERNATIONAL MULTI-CURRENCY ZAKAT ENGINE
    // =========================================================================
    calculateZakat({
      currency = 'USD',
      goldValue = 0,
      goldGrams = 0,
      goldKarat = 24,
      silverValue = 0,
      silverGrams = 0,
      cashInHand = 0,
      bankBalance = 0,
      investments = 0,
      businessGoods = 0,
      moneyOwedToYou = 0,
      immediateDebts = 0,
      dueExpenses = 0,
      customGoldPrice = null,
      customSilverPrice = null,
      nisabStandard = 'silver' // 'silver' (recommended for liquid wealth) or 'gold'
    }) {
      const curr = CURRENCY_RATES[currency] || CURRENCY_RATES.USD;
      const goldPricePerGram = Number(customGoldPrice) > 0 ? Number(customGoldPrice) : curr.goldPerGram;
      const silverPricePerGram = Number(customSilverPrice) > 0 ? Number(customSilverPrice) : curr.silverPerGram;

      // Adjust gold for Karat purity: 24K = 1.0, 22K = 22/24, 21K = 21/24, 18K = 18/24
      const karatFactor = Math.min(1.0, Math.max(0.5, Number(goldKarat) / 24.0));
      const computedGoldValue = Number(goldGrams) > 0
        ? Number(goldGrams) * goldPricePerGram * karatFactor
        : Number(goldValue);

      const computedSilverValue = Number(silverGrams) > 0
        ? Number(silverGrams) * silverPricePerGram
        : Number(silverValue);

      const totalAssets = (
        computedGoldValue +
        computedSilverValue +
        Number(cashInHand) +
        Number(bankBalance) +
        Number(investments) +
        Number(businessGoods) +
        Number(moneyOwedToYou)
      );

      const totalLiabilities = Number(immediateDebts) + Number(dueExpenses);
      const netZakatableWealth = Math.max(0, totalAssets - totalLiabilities);

      // Classical Nisab Standards:
      // Silver Nisab = 612.36g (approx. 52.5 tolas)
      // Gold Nisab = 87.48g (approx. 7.5 tolas)
      const silverNisabGrams = 612.36;
      const goldNisabGrams = 87.48;

      const silverNisabThreshold = silverNisabGrams * silverPricePerGram;
      const goldNisabThreshold = goldNisabGrams * goldPricePerGram;

      const activeNisabThreshold = nisabStandard === 'gold' ? goldNisabThreshold : silverNisabThreshold;
      const isEligible = netZakatableWealth >= activeNisabThreshold;
      const zakatDue = isEligible ? netZakatableWealth * 0.025 : 0;

      return {
        currency,
        currencySymbol: curr.symbol,
        totalAssets,
        totalLiabilities,
        netZakatableWealth,
        goldPricePerGram,
        silverPricePerGram,
        silverNisabThreshold,
        goldNisabThreshold,
        activeNisabThreshold,
        nisabStandard,
        isEligible,
        zakatDue
      };
    },

    // =========================================================================
    // 3. DIGITAL TASBIH SOUND SYNTHESIZER & PERSISTENCE
    // =========================================================================
    playTasbihSound(pitch = 800) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        const ctx = new AudioContext();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(pitch, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(pitch / 2, ctx.currentTime + 0.05);
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.05);
      } catch {
        // Fallback for silent / blocked autoplay environments
      }
    },

    vibrateTasbih(pattern = 35) {
      try {
        if (typeof navigator !== 'undefined' && navigator.vibrate) {
          navigator.vibrate(pattern);
        }
      } catch {
        // Silent fallback
      }
    },

    // Tasbih Persistence Storage
    getTasbihState() {
      try {
        const saved = localStorage.getItem('ikp_tasbih_state');
        if (saved) return JSON.parse(saved);
      } catch {
        // Fallback
      }
      return { count: 0, target: 33, cycles: 0, preset: 'subhanallah', soundEnabled: true, vibrateEnabled: true };
    },

    saveTasbihState(state) {
      try {
        localStorage.setItem('ikp_tasbih_state', JSON.stringify(state));
      } catch {
        // Silent
      }
    },

    // =========================================================================
    // 4. HIJRI CALENDAR CONVERTER
    // =========================================================================
    getHijriDate(date = new Date()) {
      try {
        const formatter = new Intl.DateTimeFormat('en-u-ca-islamic-umalqura', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        });
        return formatter.format(date);
      } catch {
        return '1447 AH';
      }
    }
  };
})();

if (typeof window !== 'undefined') {
  window.IslamicTools = IslamicTools;
}
if (typeof globalThis !== 'undefined') {
  globalThis.IslamicTools = IslamicTools;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = IslamicTools;
}
