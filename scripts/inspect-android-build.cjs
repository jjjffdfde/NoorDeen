const fs = require('fs');
if (fs.existsSync('android/app/build.gradle')) {
  const bg = fs.readFileSync('android/app/build.gradle', 'utf8');
  console.log('applicationId:', bg.match(/applicationId\s+["']([^"']+)["']/));
  console.log('compileSdk:', bg.match(/compileSdk(?:Version)?\s+(\w+)/));
  console.log('targetSdk:', bg.match(/targetSdk(?:Version)?\s+(\w+)/));
  console.log('minSdk:', bg.match(/minSdk(?:Version)?\s+(\w+)/));
  console.log('versionCode:', bg.match(/versionCode\s+(\d+)/));
  console.log('versionName:', bg.match(/versionName\s+["']([^"']+)["']/));
} else {
  console.log('android/app/build.gradle not found');
}
