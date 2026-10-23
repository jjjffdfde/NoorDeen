/**
 * ISLAMIC KNOWLEDGE PORTAL — INTERACTIVE TOOLS
 * Astronomical Prayer Times • Digital Tasbih • Zakat Calculator • Hijri Date
 */

const IslamicTools = {
  // 1. ASTRONOMICAL PRAYER TIMES ENGINE
  calculatePrayerTimes(date = new Date(), latitude = 21.4225, longitude = 39.8262, timezoneOffset = 3) {
    // Astronomical solar declination & equation of time
    const d = (date.getTime() / 86400000.0) - 10957.5;
    const g = 357.529 + 0.98560028 * d;
    const q = 280.459 + 0.98564736 * d;
    const L = q + 1.915 * Math.sin(g * Math.PI / 180) + 0.020 * Math.sin(2 * g * Math.PI / 180);
    const e = 23.439 - 0.00000036 * d;
    const RA = Math.atan2(Math.cos(e * Math.PI / 180) * Math.sin(L * Math.PI / 180), Math.cos(L * Math.PI / 180)) * 180 / Math.PI;
    const EqT = (q / 15 - (RA < 0 ? RA + 360 : RA) / 15) * 60;
    const decl = Math.asin(Math.sin(e * Math.PI / 180) * Math.sin(L * Math.PI / 180)) * 180 / Math.PI;

    // Dhuhr is noon adjusted for equation of time and longitude
    const noon = 12 + timezoneOffset - longitude / 15 - EqT / 60;

    const hourAngle = (angle) => {
      const cosHA = (Math.sin(angle * Math.PI / 180) - Math.sin(latitude * Math.PI / 180) * Math.sin(decl * Math.PI / 180)) /
                    (Math.cos(latitude * Math.PI / 180) * Math.cos(decl * Math.PI / 180));
      if (cosHA < -1 || cosHA > 1) return 0;
      return Math.acos(cosHA) * 180 / Math.PI / 15;
    };

    // Standard angles: Fajr 18°, Sunrise -0.833°, Asr (Shafi/Standard: shadow = 1 + tan(lat - decl)), Maghrib -0.833°, Isha 17°
    const fajrHA = hourAngle(-18.0);
    const sunHA = hourAngle(-0.833);
    const asrAngle = -Math.atan(1 + Math.tan(Math.abs(latitude - decl) * Math.PI / 180)) * 180 / Math.PI;
    const asrHA = hourAngle(asrAngle);
    const ishaHA = hourAngle(-17.0);

    const toTimeStr = (decimalHours) => {
      let h = Math.floor(decimalHours);
      let m = Math.floor((decimalHours - h) * 60);
      if (h < 0) h += 24;
      if (h >= 24) h -= 24;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const h12 = h % 12 || 12;
      return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
    };

    return {
      fajr: toTimeStr(noon - fajrHA),
      sunrise: toTimeStr(noon - sunHA),
      dhuhr: toTimeStr(noon),
      asr: toTimeStr(noon + asrHA),
      maghrib: toTimeStr(noon + sunHA),
      isha: toTimeStr(noon + ishaHA)
    };
  },

  // 2. DIGITAL TASBIH AUDIO SYNTHESIZER (ZERO EXTERNAL ASSET DEPENDENCY)
  playTasbihSound() {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(400, audioCtx.currentTime + 0.05);
      gain.gain.setValueAtTime(0.15, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.05);
    } catch {
      // AudioContext not allowed or not supported; silent fallback
    }
  },

  // 3. ZAKAT CALCULATOR
  // Nisab based on international standard weights:
  // Gold Nisab = 87.48 grams (approx. 7.5 tola)
  // Silver Nisab = 612.36 grams (approx. 52.5 tola)
  calculateZakat({
    goldValue = 0,
    silverValue = 0,
    cashInHand = 0,
    bankBalance = 0,
    investments = 0,
    businessGoods = 0,
    moneyOwedToYou = 0,
    immediateDebts = 0,
    dueExpenses = 0,
    silverPricePerGram = 0.95 // Default USD/gram reference
  }) {
    const totalAssets = (
      Number(goldValue) +
      Number(silverValue) +
      Number(cashInHand) +
      Number(bankBalance) +
      Number(investments) +
      Number(businessGoods) +
      Number(moneyOwedToYou)
    );

    const totalLiabilities = Number(immediateDebts) + Number(dueExpenses);
    const netZakatableWealth = Math.max(0, totalAssets - totalLiabilities);
    const nisabThreshold = 612.36 * Number(silverPricePerGram);
    const isEligible = netZakatableWealth >= nisabThreshold;
    const zakatDue = isEligible ? netZakatableWealth * 0.025 : 0;

    return {
      totalAssets,
      totalLiabilities,
      netZakatableWealth,
      nisabThreshold,
      isEligible,
      zakatDue
    };
  },

  // 4. HIJRI CALENDAR CONVERTER
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

window.IslamicTools = IslamicTools;
