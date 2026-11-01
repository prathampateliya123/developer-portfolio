const fs = require('fs');
const path = require('path');

function checkApp(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const f of files) {
    const full = path.join(dir, f.name);
    if (f.isDirectory()) checkApp(full);
    else if (f.name.endsWith('.js') || f.name.endsWith('.jsx')) {
      const code = fs.readFileSync(full, 'utf8');
      if (code.includes('Footer')) {
        console.log('Imports/uses Footer:', full);
      }
    }
  }
}
checkApp('app');

