const fs = require('fs');
const path = require('path');

const dir = 'data/pages';
function search(d) {
  const items = fs.readdirSync(d, { withFileTypes: true });
  for (const item of items) {
    const full = path.join(d, item.name);
    if (item.isDirectory()) search(full);
    else if (item.name.endsWith('.js')) {
      const content = fs.readFileSync(full, 'utf8');
      if (content.includes('id=\\"awwwards\\"') || content.includes('id="awwwards"')) {
        console.log('Found awwwards in:', full);
      }
    }
  }
}
search(dir);

