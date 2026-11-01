const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

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

let totalRemoved = 0;

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const start = content.indexOf('<div id=\\"awwwards\\"');
  if (start === -1) {
    console.log(`[SKIP] No awwwards tag found in ${file}`);
    return;
  }
  const end = content.indexOf('</div>', start);
  if (end === -1) {
    throw new Error(`[ERROR] No closing </div> in ${file}`);
  }
  let fullEnd = end + 6;
  if (content.startsWith('\\n', fullEnd)) {
    fullEnd += 2;
  } else if (content.startsWith('\n', fullEnd)) {
    fullEnd += 1;
  }

  const newContent = content.slice(0, start) + content.slice(fullEnd);
  fs.writeFileSync(file, newContent, 'utf8');
  totalRemoved++;
  console.log(`[UPDATED] Removed awwwards tag from ${file}`);

  // Syntax check
  try {
    execSync(`node -c "${file}"`);
  } catch (err) {
    console.error(`Syntax error in ${file}!`, err);
    process.exit(1);
  }
});

console.log(`\nSuccessfully removed awwwards ribbon from ${totalRemoved} files!`);

