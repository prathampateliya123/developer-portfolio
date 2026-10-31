const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testNav() {
  const browser = await puppeteer.launch({ executablePath: CHROME_PATH, headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500));
  console.log('Initial URL:', page.url());

  const navPromise = page.waitForNavigation({ waitUntil: 'networkidle2' });
  await page.click('.site-header__nav a[href="/work"]');
  await navPromise;

  console.log('Navigated URL:', page.url());
  console.log('Work page title:', await page.title());

  await browser.close();
}

testNav().catch(console.error);
