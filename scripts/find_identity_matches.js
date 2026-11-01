const fs = require('fs');

const files = ['data/pages/home.js', 'data/pages/work.js', 'data/pages/contact.js', 'data/pages/login.js'];

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  console.log(`\n=== Matches in ${f} ===`);
  const matches = content.match(/.{0,40}(React Developer|React Frontend Developer|Frontend Developer).{0,40}/gi) || [];
  matches.slice(0, 10).forEach(m => console.log(' - ' + m.trim().replace(/\s+/g, ' ')));
  console.log(`Total matches: ${matches.length}`);
});
