const fs = require('fs');
const path = require('path');

const fonts = [
  '/build/fonts/jetbrains-mono-latin-500-normal.bb50084b.woff2',
  '/build/fonts/archivo-latin-wdth-normal.bb1dad4d.woff2',
  '/build/fonts/jetbrains-mono-latin-400-normal.d04352f2.woff2',
  '/build/fonts/fa-solid-900.dcef2f69.woff2',
  '/build/fonts/jetbrains-mono-latin-500-normal.b6ddca26.woff',
  '/build/fonts/jetbrains-mono-latin-400-normal.1fef352a.woff'
];

async function run() {
  for (const f of fonts) {
    const url = 'https://devinthehood.com' + f;
    const dest = path.join(__dirname, '..', 'public', f.replace(/^\//, ''));
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    console.log(`Downloading font: ${url} -> ${dest}`);
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Status ${res.status} for ${url}`);
        continue;
      }
      const buf = Buffer.from(await res.arrayBuffer());
      fs.writeFileSync(dest, buf);
      console.log(`Saved ${dest} (${buf.length} bytes)`);
    } catch (e) {
      console.error(e.message);
    }
  }
}

run();

