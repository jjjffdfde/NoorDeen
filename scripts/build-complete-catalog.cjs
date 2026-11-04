const fs = require('fs');
const path = require('path');

const mp4s = require('C:/Users/Admin/.gemini/antigravity/brain/deda93fc-b402-4b61-8b86-18cdc9a117e4/scratch/bayan-mp4s.json');
const ytVideos = require('C:/Users/Admin/.gemini/antigravity/brain/deda93fc-b402-4b61-8b86-18cdc9a117e4/scratch/verified-yt-videos.json');
const oldCatalog = require('E:/islamic websiye/public/data/dr-israr/catalog.json');
const oldStatus = require('C:/Users/Admin/.gemini/antigravity/brain/deda93fc-b402-4b61-8b86-18cdc9a117e4/scratch/old-catalog-status.json');

// Build clean list of 107 Direct MP4 videos
const directRecords = [];
mp4s.forEach((f, idx) => {
  const epNum = idx + 1;
  const epPad = String(epNum).padStart(3, '0');
  
  // Clean up title from filename: e.g. "006=Al-Baqarah_001-To_029.mp4" -> "Al-Baqarah (Verses 1 to 29)"
  let title = f.name.replace(/^\d+=/, '').replace(/\.mp4$/, '').replace(/_/g, ' ');
  title = title.replace(/-To-/i, ' to ').replace(/-To_/i, ' to ').replace(/_To_/i, ' to ');
  
  const directUrl = 'https://archive.org/download/DrIsrar_BuQ_HD-Format/' + encodeURIComponent(f.name);
  
  directRecords.push({
    id: `BUQ-MP4-${epPad}`,
    title: `Bayan-ul-Quran: ${title}`,
    fullTitle: `Bayan-ul-Quran Episode ${epNum}: ${title} - Dr. Israr Ahmed`,
    speaker: "Dr. Israr Ahmed",
    series: "Bayan-ul-Quran (Complete 107-Part HD Video Archive)",
    seriesCode: "BUQ-MP4",
    category: "Tafseer & Quran",
    episode: epNum,
    language: "Urdu",
    playbackType: "direct",
    playbackStatus: "VERIFIED_PLAYABLE",
    sourcePlatform: "Internet Archive",
    sourceUrl: "https://archive.org/details/DrIsrar_BuQ_HD-Format",
    mediaUrl: directUrl,
    fileSizeMB: parseFloat((f.size / (1024 * 1024)).toFixed(1)),
    mimeType: "video/mp4",
    thumbnailUrl: "icons/icon-512.svg"
  });
});

// Build list of 144 verified YouTube videos
const ytRecords = [];
ytVideos.forEach((v, idx) => {
  const epPad = String(idx + 1).padStart(3, '0');
  
  // Categorize series based on author and title
  let series = "Selected Lectures & Spiritual Reminders";
  let seriesCode = "LECTURES-YT";
  let category = "General Lectures";
  
  if (v.title.includes("Bayan-ul-Quran") || v.author.includes("Bayan Ul Quran")) {
    series = "Bayan-ul-Quran (Official YouTube Streams)";
    seriesCode = "BUQ-YT";
    category = "Tafseer & Quran";
  } else if (v.author.includes("Khaaksaar")) {
    series = "Seerat, Character & Reform (Khaaksaar)";
    seriesCode = "KHAAKSAAR-YT";
    category = "Seerah & Akhlaq";
  } else if (v.author.includes("Insights")) {
    series = "Spiritual Insights & Tazkiyah (Insights)";
    seriesCode = "INSIGHTS-YT";
    category = "Tazkiyah & Faith";
  } else if (v.author.includes("Zamana Gawah Hai") || v.title.includes("Zamana Gawah")) {
    series = "Zamana Gawah Hai & Islamic Renaissance";
    seriesCode = "ZAMANA-YT";
    category = "History & Renaissance";
  } else if (v.author.includes("تنظیم اسلامی") || v.author.includes("strugle")) {
    series = "Tanzeem-e-Islami Institutional Lectures";
    seriesCode = "TANZEEM-YT";
    category = "Khilafat & Movement";
  }

  // Extract episode if available
  let episode = null;
  const epMatch = v.title.match(/\|\s*(\d+)\/108/) || v.title.match(/part\s*(\d+)/i) || v.title.match(/dars\s*(\d+)/i);
  if (epMatch) {
    episode = parseInt(epMatch[1], 10);
  }

  ytRecords.push({
    id: `YT-${seriesCode}-${epPad}`,
    title: v.title,
    fullTitle: `${v.title} - ${v.author}`,
    speaker: "Dr. Israr Ahmed",
    series: series,
    seriesCode: seriesCode,
    category: category,
    episode: episode,
    language: "Urdu",
    playbackType: "youtube",
    playbackStatus: "VERIFIED_PLAYABLE",
    sourcePlatform: "YouTube",
    sourceUrl: `https://www.youtube.com/watch?v=${v.youtubeId}`,
    youtubeId: v.youtubeId,
    author: v.author,
    authorUrl: v.authorUrl,
    thumbnailUrl: v.thumbnailUrl || `https://i.ytimg.com/vi/${v.youtubeId}/mqdefault.jpg`
  });
});

// Retain historical archive records marked clearly as REMOVED_AT_SOURCE
const historicalRecords = [];
oldCatalog.videos.forEach(v => {
  historicalRecords.push({
    id: `ARCHIVE-${v.id}`,
    title: v.title,
    fullTitle: v.fullTitle || v.title,
    speaker: "Dr. Israr Ahmed",
    series: `Archive: ${v.series}`,
    seriesCode: "ARCHIVE-HISTORICAL",
    category: "Historical Archive",
    episode: v.episode,
    language: v.language,
    playbackType: "youtube",
    playbackStatus: "REMOVED_AT_SOURCE",
    sourcePlatform: "Tanzeem.org Archive",
    sourceUrl: v.sourceUrl,
    youtubeId: v.youtubeId,
    isDuplicate: v.isDuplicate || false,
    duplicateOf: v.duplicateOf || null,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.youtubeId}/mqdefault.jpg`,
    note: "Original YouTube upload was removed when the legacy channel was terminated in 2022. Linked to tanzeem.org archive record for historical attribution."
  });
});

// Compile series registry
const allVideos = [...directRecords, ...ytRecords, ...historicalRecords];
const seriesMap = {};
allVideos.forEach(v => {
  if (!seriesMap[v.seriesCode]) {
    seriesMap[v.seriesCode] = {
      code: v.seriesCode,
      name: v.series,
      category: v.category,
      language: v.language,
      playbackType: v.playbackType,
      count: 0
    };
  }
  seriesMap[v.seriesCode].count++;
});

const seriesList = Object.values(seriesMap);

const completeCatalog = {
  schemaVersion: 2,
  generatedAt: new Date().toISOString(),
  speaker: {
    name: "Dr. Israr Ahmed",
    nameUrdu: "ڈاکٹر اسرار احمد",
    lifespan: "1932–2010",
    role: "Islamic Scholar, Founder of Tanzeem-e-Islami and Quran Academy",
    verified: true
  },
  summary: {
    totalVideos: allVideos.length,
    directMp4Count: directRecords.length,
    verifiedYouTubeCount: ytRecords.length,
    historicalArchiveCount: historicalRecords.length,
    seriesCount: seriesList.length
  },
  sources: [
    {
      name: "Internet Archive (Bayan-ul-Quran HD Complete Collection)",
      identifier: "DrIsrar_BuQ_HD-Format",
      url: "https://archive.org/details/DrIsrar_BuQ_HD-Format",
      playbackType: "direct",
      features: "Native MP4, HTTP 206 Byte-Range Seeking, 100% Offline Capable"
    },
    {
      name: "Tanzeem-e-Islami Official Social Media Registry",
      url: "https://www.tanzeem.org/social-media/",
      playbackType: "youtube",
      channels: [
        "@Dr.IsrarAhmedBayanUlQuran",
        "@Khaaksaar",
        "@InsightsofDrIsrarAhmed",
        "@ZamanaGawahHai",
        "@struglefordeen"
      ]
    },
    {
      name: "Tanzeem-e-Islami Speaker Archive",
      url: "https://www.tanzeem.org/video_speakers/dr-israr-ahmed/",
      playbackType: "archival_provenance"
    }
  ],
  series: seriesList,
  videos: allVideos
};

// Write out catalog.json
const catalogPath = path.join(__dirname, '../public/data/dr-israr/catalog.json');
fs.writeFileSync(catalogPath, JSON.stringify(completeCatalog, null, 2), 'utf8');
console.log('Successfully wrote', catalogPath);
console.log('Total videos:', completeCatalog.videos.length);
console.log('  Direct MP4:', directRecords.length);
console.log('  Verified YouTube:', ytRecords.length);
console.log('  Historical Archive:', historicalRecords.length);
console.log('Series count:', seriesList.length);
