const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testMobileAndDesktop() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  // TEST DESKTOP
  console.log('--- Testing Desktop Viewport (1440x900) ---');
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500));

  const desktopNav = await page.evaluate(() => {
    const navLinks = Array.from(document.querySelectorAll('.site-header__nav a')).map(a => ({
      text: a.innerText.trim(),
      href: a.getAttribute('href')
    }));
    const clock = document.querySelector('[data-clock]')?.innerText;
    return { navLinks, clock };
  });
  console.log('Desktop Nav links:', desktopNav.navLinks);
  console.log('Live clock:', desktopNav.clock);

  // Scroll to street and factory
  await page.evaluate(() => {
    document.querySelector('#the-street')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1000));
  const streetData = await page.evaluate(() => {
    const shops = Array.from(document.querySelectorAll('.shop')).map(s => ({
      num: s.querySelector('.shop__number')?.innerText?.trim(),
      name: s.querySelector('.shop__name')?.innerText?.trim()
    }));
    return {
      totalShops: shops.length,
      sample: shops.slice(0, 5)
    };
  });
  console.log('Street shops count:', streetData.totalShops);
  console.log('First 5 shops:', streetData.sample);

  // TEST MOBILE
  console.log('\n--- Testing Mobile Viewport (390x844) ---');
  const mobilePage = await browser.newPage();
  await mobilePage.setViewport({ width: 390, height: 844 });
  await mobilePage.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500));

  const burgerClick = await mobilePage.evaluate(() => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('.site-menu');
    const burgerDisplay = window.getComputedStyle(burger).display;
    burger.click();
    return {
      burgerDisplay,
      expandedAfterClick: burger.getAttribute('aria-expanded'),
      menuOpen: menu.classList.contains('is-open')
    };
  });
  console.log('Mobile burger menu test:', burgerClick);

  // Test curtain transition when clicking a link
  console.log('\n--- Testing Veil / Curtain Page Transition ---');
  const veilTrigger = await page.evaluate(() => {
    const link = document.querySelector('.site-header__nav a[href="/work"]');
    if (link) {
      link.click();
      return true;
    }
    return false;
  });
  console.log('Clicked /work link via veil handler:', veilTrigger);
  await new Promise(r => setTimeout(r, 1500));
  const newUrl = page.url();
  console.log('Navigated to URL:', newUrl);

  await browser.close();
  console.log('\nAll desktop, mobile, and navigation checks complete!');
}

testMobileAndDesktop().catch(console.error);

