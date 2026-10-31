const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function debugLocalhost() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: false, // or true
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  page.on('console', msg => console.log(`[BROWSER CONSOLE ${msg.type()}]`, msg.text()));
  page.on('pageerror', err => console.log(`[BROWSER PAGEERROR]`, err.message));

  console.log('Navigating to http://localhost:3000/...');
  await page.goto('http://localhost:3000/', { waitUntil: 'load' });

  for (let s = 1; s <= 6; s++) {
    await new Promise(r => setTimeout(r, 1000));
    const state = await page.evaluate(() => {
      return {
        bodyClass: document.body.className,
        dataPage: document.body.dataset.page,
        hasDithData: !!document.getElementById('dith-data'),
        loaderText: document.querySelector('.loader')?.innerText?.trim(),
        loaderStyle: document.querySelector('.loader')?.getAttribute('style'),
        hoodieSvg: !!document.querySelector('.hero-hoodie svg, svg.hero-hoodie, [data-scene="hoodie:hoodie-two-sides"] svg'),
        scenesTotal: document.querySelectorAll('[data-scene]').length,
        scenesFilled: document.querySelectorAll('[data-scene] > svg').length
      };
    });
    console.log(`[After ${s}s]:`, JSON.stringify(state));
  }

  await browser.close();
}

debugLocalhost().catch(console.error);

