const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testPage(url, label) {
  console.log(`\n========================================`);
  console.log(`Testing [${label}]: ${url}`);
  console.log(`========================================`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const errors = [];
  const consoleMsgs = [];
  const failedRequests = [];

  page.on('console', msg => {
    consoleMsgs.push(`[${msg.type()}] ${msg.text()}`);
  });

  page.on('pageerror', err => {
    errors.push(err.toString());
  });

  page.on('requestfailed', req => {
    failedRequests.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`);
  });

  page.on('response', res => {
    if (res.status() >= 400) {
      failedRequests.push(`${res.status()} ${res.url()}`);
    }
  });

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (err) {
    console.log(`Navigation error:`, err.message);
  }

  // Wait a few seconds for animations / scripts
  await new Promise(r => setTimeout(r, 4000));

  const title = await page.title();
  const bodyClass = await page.evaluate(() => document.body.className);
  const bodyDataset = await page.evaluate(() => JSON.stringify(document.body.dataset));
  const htmlLang = await page.evaluate(() => document.documentElement.lang);
  
  // Check if loader is still present / opacity / state
  const loaderState = await page.evaluate(() => {
    const loader = document.querySelector('.loader') || document.querySelector('[data-loader]');
    if (!loader) return 'none';
    const style = window.getComputedStyle(loader);
    return {
      display: style.display,
      visibility: style.visibility,
      opacity: style.opacity,
      text: loader.innerText?.slice(0, 50)
    };
  });

  // Check SVG scene containers
  const svgElements = await page.evaluate(() => {
    return {
      svgCount: document.querySelectorAll('svg').length,
      useCount: document.querySelectorAll('svg use').length,
      hoodiePresent: !!document.querySelector('.hero-hoodie, [data-hero-hoodie], svg use[*|href*="hoodie"]'),
      curtainPresent: !!document.querySelector('.curtain, [data-veil]'),
      shopsCount: document.querySelectorAll('.street__shop, [data-shop]').length,
    };
  });

  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  const shotPath = path.join(screenshotDir, `${label}.png`);
  await page.screenshot({ path: shotPath, fullPage: false });

  console.log(`Title: ${title}`);
  console.log(`Body class: "${bodyClass}"`);
  console.log(`Body dataset: ${bodyDataset}`);
  console.log(`Loader state:`, JSON.stringify(loaderState));
  console.log(`SVG info:`, JSON.stringify(svgElements));
  console.log(`Console messages (${consoleMsgs.length}):`, consoleMsgs.slice(0, 10));
  if (errors.length) console.log(`PAGE ERRORS (${errors.length}):`, errors);
  if (failedRequests.length) console.log(`FAILED REQUESTS (${failedRequests.length}):`, failedRequests);
  console.log(`Screenshot saved to: ${shotPath}`);

  await browser.close();
}

async function run() {
  await testPage('http://localhost:3000/', 'localhost_home');
  // Also check online devinthehood.com if accessible
  try {
    await testPage('https://devinthehood.com/', 'live_home');
  } catch (e) {
    console.log('Error testing live site:', e.message);
  }
}

run().catch(console.error);
