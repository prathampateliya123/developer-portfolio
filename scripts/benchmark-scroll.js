const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function benchmark() {
  console.log('⚡ Benchmarking ScrollSmoother Damping & Inertia ...\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500)); // wait for loader

  const initialStatus = await page.evaluate(() => {
    const wrapper = document.querySelector('#smooth-wrapper');
    const content = document.querySelector('#smooth-content');
    return {
      wrapperStyle: wrapper?.getAttribute('style'),
      scrollHeight: document.documentElement.scrollHeight,
    };
  });

  console.log('Total Scroll Height:', initialStatus.scrollHeight, 'px');

  console.log('Triggering scroll step to Y=800px...');
  await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'auto' }));

  const timeline = [];
  for (const ms of [50, 100, 200, 400, 800]) {
    await new Promise(r => setTimeout(r, ms));
    const sample = await page.evaluate(() => {
      const content = document.querySelector('#smooth-content');
      return {
        scrollY: window.scrollY,
        transform: content?.style.transform,
      };
    });
    timeline.push({ ms, ...sample });
  }

  console.log('\nMeasured Inertial Curve:');
  timeline.forEach(t => {
    console.log(`  +${t.ms}ms: ${t.transform}`);
  });

  await browser.close();
  console.log('\n✅ ScrollSmoother benchmark completed successfully!');
}

benchmark().catch(err => {
  console.error(err);
  process.exit(1);
});
