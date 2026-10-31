const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500));

  const linkBox = await page.evaluate(() => {
    const link = document.querySelector('.site-header__nav a[href="/work"]');
    if (!link) return 'link not found';
    const rect = link.getBoundingClientRect();
    const elemFromPoint = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
    return {
      rect: { left: rect.left, top: rect.top, width: rect.width, height: rect.height },
      elemFromPoint: elemFromPoint ? elemFromPoint.tagName + '.' + elemFromPoint.className : null
    };
  });
  console.log('Link box and top element:', linkBox);
  await browser.close();
}

run().catch(console.error);

