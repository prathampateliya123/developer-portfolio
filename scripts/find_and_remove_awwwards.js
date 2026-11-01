const fs = require('fs');
const path = require('path');

function searchDir(dir, results = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const fullPath = path.join(dir, f.name);
    if (f.isDirectory() && f.name !== 'node_modules' && f.name !== '.next' && f.name !== '.git') {
      searchDir(fullPath, results);
    } else if (f.isFile() && (f.name.endsWith('.js') || f.name.endsWith('.jsx') || f.name.endsWith('.html') || f.name.endsWith('.json') || f.name.endsWith('.ts') || f.name.endsWith('.tsx'))) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('id="awwwards"') || content.includes('awwwards.com') || content.includes("id=\\\"awwwards\\\"")) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

const found = searchDir('.');
console.log('Found awwwards in:');
found.forEach(f => console.log(' - ' + f));

