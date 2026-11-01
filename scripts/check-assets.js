const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const pagesDir = path.join(__dirname, '..', 'data', 'pages');

function scanFile(filePath, assetSet) {
  const content = fs.readFileSync(filePath, 'utf8');
  const regex = /(?:\/assets|\/images|\/img|\/media|\/build|\/css|\/js)\/[a-zA-Z0-9_\-\./]+/g;
  const matches = content.match(regex) || [];
  matches.forEach(m => {
    assetSet.add(m.replace(/[\\";'()<>].*$/, ''));
  });
}

function scanDir(dir, assetSet) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      scanDir(fullPath, assetSet);
    } else if (item.name.endsWith('.js') || item.name.endsWith('.jsx')) {
      scanFile(fullPath, assetSet);
    }
  }
}

console.log('🔍 Auditing Asset Integrity across all pages and modules ...\n');
const assetSet = new Set();
scanDir(pagesDir, assetSet);

console.log(`Found ${assetSet.size} unique asset references in page modules.`);

const missing = [];
for (const asset of assetSet) {
  const localPath = path.join(publicDir, asset.replace(/^\//, ''));
  if (!fs.existsSync(localPath)) {
    missing.push(asset);
  }
}

if (missing.length === 0) {
  console.log(`✅ All ${assetSet.size} assets verified locally in public/ ! Missing: 0\n`);
} else {
  console.error(`❌ Found ${missing.length} missing assets:`, missing);
  process.exit(1);
}
