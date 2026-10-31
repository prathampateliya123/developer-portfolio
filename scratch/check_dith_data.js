const urls = [
  'https://devinthehood.com/',
  'https://devinthehood.com/work',
  'https://devinthehood.com/contact',
  'https://devinthehood.com/login',
  'https://devinthehood.com/work/cegeta'
];

async function check() {
  for (const u of urls) {
    try {
      const res = await fetch(u);
      const html = await res.text();
      const dith = html.match(/<script type="application\/json" id="dith-data">([\s\S]*?)<\/script>/i)?.[1];
      const bodyTag = html.match(/<body[^>]*>/i)?.[0];
      console.log(`URL: ${u}`);
      console.log(`  Body tag: ${bodyTag}`);
      console.log(`  dith-data: ${dith}`);
    } catch (e) {
      console.error(u, e.message);
    }
  }
}

check();
