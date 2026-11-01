const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function checkSmoother(url, label) {
  console.log(`\nChecking smoother on [${label}]: ${url}`);
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(url, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500));

  const initialStatus = await page.evaluate(() => {
    const wrapper = document.querySelector('#smooth-wrapper');
    const content = document.querySelector('#smooth-content');
    return {
      wrapperExists: !!wrapper,
      wrapperStyle: wrapper?.getAttribute('style'),
      contentExists: !!content,
      contentStyle: content?.getAttribute('style'),
      bodyHeight: document.body.style.height || document.body.offsetHeight,
      scrollHeight: document.documentElement.scrollHeight,
    };
  });
  console.log('Initial Status:', initialStatus);

  // Scroll by 800px and measure smooth interpolation
  console.log('Scrolling window to 800px...');
  await page.evaluate(() => window.scrollTo({ top: 800, behavior: 'auto' }));
  
  // Measure at 50ms, 150ms, 300ms, 600ms, 1000ms
  const timeline = [];
  for (const ms of [50, 100, 200, 400, 800]) {
    await new Promise(r => setTimeout(r, ms));
    const sample = await page.evaluate(() => {
      const content = document.querySelector('#smooth-content');
      return {
        scrollY: window.scrollY,
        contentTransform: content?.style.transform,
      };
    });
    timeline.push({ ms, ...sample });
  }
  console.log('Scroll interpolation timeline:');
  timeline.forEach(t => console.log(`  +${t.ms}ms: scrollY=${t.scrollY}, contentTransform="${t.contentTransform}"`));

  await browser.close();
}

async function run() {
  await checkSmoother('https://devinthehood.com/', 'LIVE');
  await checkSmoother('http://localhost:3000/', 'LOCAL');
}

run().catch(console.error);

