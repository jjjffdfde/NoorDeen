const fs = require('fs');

console.log('=== android/app/build.gradle ===');
if (fs.existsSync('android/app/build.gradle')) {
  console.log(fs.readFileSync('android/app/build.gradle', 'utf8').substring(0, 800));
}

console.log('\n=== android/app/src/main/AndroidManifest.xml ===');
if (fs.existsSync('android/app/src/main/AndroidManifest.xml')) {
  console.log(fs.readFileSync('android/app/src/main/AndroidManifest.xml', 'utf8'));
}
