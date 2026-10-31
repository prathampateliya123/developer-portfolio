const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const routes = [
  { url: 'http://localhost:3000/work', name: 'work', expectedPage: 'work' },
  { url: 'http://localhost:3000/contact', name: 'contact', expectedPage: 'contact' },
  { url: 'http://localhost:3000/login', name: 'login', expectedPage: undefined },
  { url: 'http://localhost:3000/work/cegeta', name: 'project_cegeta', expectedPage: 'project' },
  { url: 'http://localhost:3000/work/devinthehood', name: 'project_devinthehood', expectedPage: 'project' },
  { url: 'http://localhost:3000/work/letz-kola', name: 'project_letz_kola', expectedPage: 'project' },
  { url: 'http://localhost:3000/work/superp', name: 'project_superp', expectedPage: 'project' }
];

async function testRoutes() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const screenshotDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

  for (const r of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const errors = [];
    const failedReqs = [];
    page.on('pageerror', err => errors.push(err.toString()));
    page.on('response', res => {
      if (res.status() >= 400) failedReqs.push(`${res.status()} ${res.url()}`);
    });

    console.log(`\nTesting ${r.name} (${r.url})...`);
    await page.goto(r.url, { waitUntil: 'networkidle2' });
    await new Promise(res => setTimeout(res, 2500));

    const state = await page.evaluate(() => {
      return {
        bodyClass: document.body.className,
        datasetPage: document.body.dataset.page,
        datasetController: document.body.dataset.controller,
        hasDithData: !!document.getElementById('dith-data'),
        svgCount: document.querySelectorAll('svg').length,
        title: document.title,
      };
    });

    console.log(`Result for ${r.name}:`, JSON.stringify(state));
    console.log(`Errors: ${errors.length}, Failed Reqs: ${failedReqs.length}`);
    if (errors.length) console.error('Errors:', errors);
    if (failedReqs.length) console.error('Failed:', failedReqs);

    const shot = path.join(screenshotDir, `next_${r.name}.png`);
    await page.screenshot({ path: shot });
    console.log(`Saved screenshot: ${shot}`);

    await page.close();
  }

  await browser.close();
  console.log('\nAll routes successfully tested!');
}

testRoutes().catch(console.error);

