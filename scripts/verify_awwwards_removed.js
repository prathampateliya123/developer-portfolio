const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\01\\.gemini\\antigravity\\brain\\4e60a5fc-4ea4-440c-8f4b-8fe3c0229505';

const routes = [
  { url: 'http://localhost:3000/', name: 'Home' },
  { url: 'http://localhost:3000/work', name: 'Work' },
  { url: 'http://localhost:3000/contact', name: 'Contact' },
  { url: 'http://localhost:3000/login', name: 'Login' },
  { url: 'http://localhost:3000/work/cegeta', name: 'Project: Cegeta' }
];

async function check() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  console.log('Testing pages for absence of #awwwards ribbon...\n');
  let allClean = true;

  for (const r of routes) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });

    const errors = [];
    page.on('pageerror', err => errors.push(err.toString()));

    await page.goto(r.url, { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(res => setTimeout(res, 1500));

    const checkResult = await page.evaluate(() => {
      const el = document.getElementById('awwwards');
      return {
        hasAwwwards: !!el,
        elementInfo: el ? el.outerHTML.slice(0, 80) : null
      };
    });

    if (checkResult.hasAwwwards) {
      console.error(`❌ [${r.name}] Found #awwwards ribbon!`, checkResult.elementInfo);
      allClean = false;
    } else {
      console.log(`✅ [${r.name}] #awwwards is completely ABSENT from DOM.`);
    }

    if (errors.length > 0) {
      console.error(`   Console errors:`, errors);
      allClean = false;
    }

    // Capture screenshot on Home
    if (r.name === 'Home') {
      const screenshotPath = path.join(ARTIFACT_DIR, '01_hero_no_awwwards.png');
      await page.screenshot({ path: screenshotPath });
      console.log(`📸 Screenshot saved: ${screenshotPath}`);
    }

    await page.close();
  }

  await browser.close();

  if (allClean) {
    console.log('\n🎉 ALL CHECKS PASSED: The floating Awwwards ribbon has been 100% removed across the site!');
  } else {
    process.exit(1);
  }
}

check().catch(err => {
  console.error(err);
  process.exit(1);
});

