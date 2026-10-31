const fs = require('fs');
const path = require('path');

async function download(url, dest) {
  const dir = path.dirname(dest);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  console.log(`Downloading: ${url} -> ${dest}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed ${res.status} for ${url}`);
    return;
  }
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(dest, buffer);
  console.log(`Saved ${dest} (${buffer.length} bytes)`);
}

async function run() {
  const html = await fetch('https://devinthehood.com/login').then(r => r.text());
  fs.writeFileSync('scratch/live_login.html', html);

  const assetUrls = [
    '/build/474.bb37e29f.js',
    '/build/app.aa87921b.js',
    '/build/app.2c4da04d.css'
  ];

  // Also parse any other assets in live_login.html
  const regex = /(?:src|href)=["']([^"']+)["']/g;
  let match;
  while ((match = regex.exec(html)) !== null) {
    const u = match[1];
    if (u.startsWith('/build/') || u.startsWith('/assets/')) {
      if (!assetUrls.includes(u)) assetUrls.push(u);
    }
  }

  console.log('Target assets to download:', assetUrls);
  for (const rel of assetUrls) {
    const fullUrl = 'https://devinthehood.com' + rel;
    const destPath = path.join(__dirname, '..', 'public', rel.replace(/^\//, ''));
    if (!fs.existsSync(destPath)) {
      await download(fullUrl, destPath);
    } else {
      console.log(`Already exists: ${destPath}`);
    }
  }
  console.log('All login assets processed!');
}

run().catch(console.error);
