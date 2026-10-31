const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function verify() {
  console.log('Launching Chrome to test http://localhost:3000/...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const consoleMsgs = [];
  const errors = [];
  const failedReqs = [];

  page.on('console', msg => consoleMsgs.push(`[${msg.type()}] ${msg.text()}`));
  page.on('pageerror', err => errors.push(err.toString()));
  page.on('requestfailed', req => failedReqs.push(`${req.method()} ${req.url()} - ${req.failure()?.errorText}`));
  page.on('response', res => {
    if (res.status() >= 400) failedReqs.push(`${res.status()} ${res.url()}`);
  });

  console.log('Navigating to http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

  // Wait 4 seconds for GSAP loader and scene generation
  await new Promise(r => setTimeout(r, 4500));

  const state = await page.evaluate(() => {
    return {
      bodyClass: document.body.className,
      datasetPage: document.body.dataset.page,
      loaderText: document.querySelector('.loader')?.innerText?.trim(),
      svgCount: document.querySelectorAll('svg').length,
      scenesTotal: document.querySelectorAll('[data-scene]').length,
      scenesFilled: document.querySelectorAll('[data-scene] > svg').length,
      hoodieInjected: !!document.querySelector('[data-scene="hoodie:hoodie-two-sides"] svg'),
      hasAwwwards: !!document.getElementById('awwwards'),
      hasPaperGrain: !!document.querySelector('.paper-grain'),
      hasCurtain: !!document.querySelector('.page-veil'),
      shopsCount: document.querySelectorAll('.street__shop, [data-shop]').length,
      hasDithData: !!document.getElementById('dith-data'),
    };
  });

  console.log('\n========================================');
  console.log('NEXT.JS LOCALHOST VERIFICATION RESULTS:');
  console.log('========================================');
  console.log(JSON.stringify(state, null, 2));

  const screenshotPath = path.join(__dirname, 'screenshots', 'next_localhost_verified.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });
  console.log(`Screenshot saved to: ${screenshotPath}`);

  if (errors.length) {
    console.error('Browser Errors:', errors);
  } else {
    console.log('Browser Errors: 0');
  }

  if (failedReqs.length) {
    console.error('Failed Requests:', failedReqs);
  } else {
    console.log('Failed Requests: 0');
  }

  console.log(`Console messages count: ${consoleMsgs.length}`);

  // Test scrolling down to verify ScrollTrigger animations
  console.log('\nTesting scrolling down 1500px...');
  await page.evaluate(() => window.scrollTo(0, 1500));
  await new Promise(r => setTimeout(r, 1000));
  const scrollShot = path.join(__dirname, 'screenshots', 'next_scrolled_1500.png');
  await page.screenshot({ path: scrollShot });
  console.log(`Scrolled screenshot saved to: ${scrollShot}`);

  await browser.close();
}

verify().catch(console.error);
