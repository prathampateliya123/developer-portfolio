const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const routes = [
  { url: 'http://localhost:3000/', name: 'Home', expectedPage: 'home', minSvgs: 50 },
  { url: 'http://localhost:3000/work', name: 'Work', expectedPage: 'work', minSvgs: 8 },
  { url: 'http://localhost:3000/contact', name: 'Contact', expectedPage: 'contact', minSvgs: 10 },
  { url: 'http://localhost:3000/login', name: 'Login', expectedPage: undefined, minSvgs: 4 },
  { url: 'http://localhost:3000/work/cegeta', name: 'Project: Cegeta', expectedPage: 'project', minSvgs: 6 },
  { url: 'http://localhost:3000/work/devinthehood', name: 'Project: Dev In The Hood', expectedPage: 'project', minSvgs: 6 },
  { url: 'http://localhost:3000/work/letz-kola', name: 'Project: Letz Kola', expectedPage: 'project', minSvgs: 6 },
  { url: 'http://localhost:3000/work/superp', name: 'Project: SupERP', expectedPage: 'project', minSvgs: 6 }
];

async function runAudit() {
  console.log('🚀 Running Complete Automated Browser Audit on http://localhost:3000 ...\n');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  let totalErrors = 0;
  let totalFailedReqs = 0;

  for (const r of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const errors = [];
    const failedReqs = [];
    page.on('pageerror', err => errors.push(err.toString()));
    page.on('response', res => {
      if (res.status() >= 400) failedReqs.push(`${res.status()} ${res.url()}`);
    });

    try {
      await page.goto(r.url, { waitUntil: 'networkidle2', timeout: 15000 });
      await new Promise(res => setTimeout(res, 2000));

      const state = await page.evaluate(() => {
        return {
          bodyClass: document.body.className,
          datasetPage: document.body.dataset.page,
          svgCount: document.querySelectorAll('svg').length,
          title: document.title,
          loaderText: document.querySelector('.loader')?.innerText?.trim() || 'N/A'
        };
      });

      const passed = errors.length === 0 && failedReqs.length === 0 && state.svgCount >= r.minSvgs;
      console.log(`${passed ? '✅' : '❌'} [${r.name}]`);
      console.log(`   URL: ${r.url}`);
      console.log(`   Title: "${state.title}"`);
      console.log(`   SVGs: ${state.svgCount} (Min: ${r.minSvgs}) | Loader: ${state.loaderText}`);
      console.log(`   Body Class: "${state.bodyClass}" | Data Page: "${state.datasetPage}"`);

      if (errors.length) {
        console.error(`   Errors:`, errors);
        totalErrors += errors.length;
      }
      if (failedReqs.length) {
        console.error(`   Failed Requests:`, failedReqs);
        totalFailedReqs += failedReqs.length;
      }
    } catch (e) {
      console.error(`❌ Failed testing ${r.name}:`, e.message);
      totalErrors++;
    } finally {
      await page.close();
    }
    console.log('');
  }

  await browser.close();

  console.log('========================================');
  console.log(`Audit Summary: ${totalErrors} Errors, ${totalFailedReqs} Failed Requests`);
  console.log('========================================\n');

  if (totalErrors > 0 || totalFailedReqs > 0) {
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error(err);
  process.exit(1);
});

