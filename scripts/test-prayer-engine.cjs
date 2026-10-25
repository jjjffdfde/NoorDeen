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

const METHODS = {
  karachi: { name: 'University of Islamic Sciences, Karachi', fajr: 18, isha: 18 },
  mwl: { name: 'Muslim World League', fajr: 18, isha: 17 },
  isna: { name: 'Islamic Society of North America', fajr: 15, isha: 15 },
  makkah: { name: 'Umm Al-Qura University, Makkah', fajr: 18.5, isha: 90, ishaIsMinutes: true },
  egypt: { name: 'Egyptian General Authority of Survey', fajr: 19.5, isha: 17.5 },
  tehran: { name: 'Institute of Geophysics, University of Tehran', fajr: 17.7, isha: 14 }
};

function calculatePrayerTimes(arg1, arg2, arg3, arg4, arg5 = {}) {
  let date, latitude, longitude, timezoneOffset, options = {};

  if (typeof arg1 === 'number') {
    latitude = arg1;
    longitude = arg2;
    timezoneOffset = typeof arg3 === 'number' ? arg3 : 0;
    date = arg4 instanceof Date ? arg4 : new Date();
    options = arg5 || {};
  } else {
    date = arg1 instanceof Date ? arg1 : (arg1 ? new Date(arg1) : new Date());
    latitude = typeof arg2 === 'number' ? arg2 : 21.4225;
    longitude = typeof arg3 === 'number' ? arg3 : 39.8262;
    timezoneOffset = typeof arg4 === 'number' ? arg4 : (typeof arg5 === 'number' ? arg5 : -date.getTimezoneOffset() / 60);
    options = (typeof arg5 === 'object' && arg5 !== null) ? arg5 : {};
  }

  const methodKey = options.method || 'karachi';
  const method = METHODS[methodKey] || METHODS.karachi;
  const asrMethod = options.asrMethod || 'standard'; // 'standard' (1) or 'hanafi' (2)
  const asrFactor = asrMethod === 'hanafi' ? 2 : 1;
  const highLatMethod = options.highLatMethod || 'nightMiddle';

  // Julian Date for 0h UT
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

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

  const noon = fixHour(12 + timezoneOffset - longitude / 15 - EqT / 60);

  const hourAngle = (altitudeDeg) => {
    const cosHA = (Math.sin(altitudeDeg * rad) - Math.sin(latitude * rad) * Math.sin(decl * rad)) /
                  (Math.cos(latitude * rad) * Math.cos(decl * rad));
    if (cosHA < -1) return 12; // Sun is never that high (polar day/night)
    if (cosHA > 1) return 0;   // Sun never reaches that altitude
    return Math.acos(cosHA) * deg / 15; // in hours
  };

  // Sunrise and Sunset: altitude = -0.833°
  const sunHA = hourAngle(-0.833);
  const sunrise = fixHour(noon - sunHA);
  const sunset = fixHour(noon + sunHA);

  // Fajr: altitude = -method.fajr
  let fajrHA = hourAngle(-method.fajr);
  let fajr = fixHour(noon - fajrHA);

  // Asr: altitude = arccot(factor + tan|lat - decl|)
  const asrAlt = Math.atan(1.0 / (asrFactor + Math.tan(Math.abs(latitude - decl) * rad))) * deg;
  const asrHA = hourAngle(asrAlt);
  const asr = fixHour(noon + asrHA);

  // Maghrib: same as sunset
  const maghrib = sunset;

  // Isha:
  let isha;
  if (method.ishaIsMinutes) {
    isha = fixHour(maghrib + method.isha / 60.0);
  } else {
    const ishaHA = hourAngle(-method.isha);
    isha = fixHour(noon + ishaHA);
  }

  // High latitude adjustments (if twilight doesn't occur or is abnormal)
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
    dhuhr: toTimeStr(noon, is24),
    asr: toTimeStr(asr, is24),
    maghrib: toTimeStr(maghrib, is24),
    isha: toTimeStr(isha, is24),
    raw: { fajr, sunrise, dhuhr: noon, asr, maghrib, isha },
    method: method.name,
    asrJuristic: asrMethod === 'hanafi' ? 'Hanafi (Shadow factor 2)' : 'Standard / Shafi\'i (Shadow factor 1)'
  };
}

// Test for Karachi on Oct 24, 2026: lat 24.8607, lng 67.0011, tz = 5
const karachiTest = calculatePrayerTimes(new Date(2026, 9, 24), 24.8607, 67.0011, 5, { method: 'karachi', asrMethod: 'hanafi' });
console.log('=== KARACHI PRAYER TIMES (Karachi Method, Hanafi Asr) ===');
console.log(karachiTest);

// Test for Makkah: lat 21.4225, lng 39.8262, tz = 3
const makkahTest = calculatePrayerTimes(new Date(2026, 9, 24), 21.4225, 39.8262, 3, { method: 'makkah', asrMethod: 'standard' });
console.log('\n=== MAKKAH PRAYER TIMES (Umm Al-Qura, Standard Asr) ===');
console.log(makkahTest);

// Test calling with inverted arguments (lat, lng, tz, date) as was in app.js
const invertedTest = calculatePrayerTimes(24.8607, 67.0011, 5, new Date(2026, 9, 24), { method: 'karachi' });
console.log('\n=== INVERTED ARGUMENTS (Calling with lat first) ===');
console.log(invertedTest.fajr, invertedTest.dhuhr, invertedTest.maghrib);
