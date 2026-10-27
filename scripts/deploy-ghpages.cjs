const { execSync } = require('child_process');

console.log('Resolving tree SHA for HEAD:public...');
const treeSha = execSync('git rev-parse HEAD:public', { encoding: 'utf8' }).trim();
console.log('Tree SHA of HEAD:public:', treeSha);

console.log('Fetching origin gh-pages parent SHA...');
const parentSha = execSync('git rev-parse origin/gh-pages', { encoding: 'utf8' }).trim();
console.log('Parent gh-pages SHA:', parentSha);

const commitMsg = 'deploy: Batch 5 law and employment articles; 60 pages, 33 articles, 1,663 passing tests';
const commitSha = execSync(`git commit-tree ${treeSha} -p ${parentSha} -m "${commitMsg}"`, { encoding: 'utf8' }).trim();
console.log('Created commit for gh-pages:', commitSha);

console.log('Pushing to origin/gh-pages...');
execSync(`git push origin ${commitSha}:refs/heads/gh-pages`, { stdio: 'inherit' });
console.log('Successfully deployed to gh-pages!');
