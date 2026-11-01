const fs = require('fs');
const path = require('path');

const files = [
  'data/pages/home.js',
  'data/pages/work.js',
  'data/pages/contact.js',
  'data/pages/login.js'
];

const projDir = 'data/pages/projects';
fs.readdirSync(projDir).forEach(f => {
  if (f.endsWith('.js') && f !== 'index.js') {
    files.push(path.join(projDir, f));
  }
});

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf('<div id=\\"awwwards\\"');
  if (start === -1) {
    console.log(`[SKIP] No awwwards in ${file}`);
    return;
  }
  const end = content.indexOf('</div>', start);
  if (end === -1) {
    console.log(`[ERROR] No closing </div> in ${file}`);
    return;
  }
  let fullEnd = end + 6;
  if (content.startsWith('\\n', fullEnd)) {
    fullEnd += 2;
  } else if (content.startsWith('\n', fullEnd)) {
    fullEnd += 1;
  }

  const removedBlock = content.slice(start, fullEnd);
  console.log(`[OK] ${file}: removing block of length ${removedBlock.length}, starts with: ${removedBlock.slice(0, 30)}... ends with: ...${removedBlock.slice(-15)}`);
});

