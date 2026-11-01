const fs = require('fs');
const path = require('path');

fs.readdirSync('scripts').forEach(f => {
  if (f.endsWith('.js')) {
    const code = fs.readFileSync(path.join('scripts', f), 'utf8');
    if (code.includes('awwwards') || code.includes('Awwwards')) {
      console.log('Script with awwwards:', f);
    }
  }
});

