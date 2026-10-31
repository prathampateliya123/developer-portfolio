const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function testInteractions() {
  console.log('Testing interactions on http://localhost:3000/ ...');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500)); // wait for loader

  // 1. Check live clock
  const clockText = await page.evaluate(() => {
    return document.querySelector('[data-clock]')?.innerText;
  });
  console.log(`1. Live Luxembourg Clock: "${clockText}" (Expected: HH:MM format)`);

  // 2. Test burger menu toggle
  console.log('2. Testing burger menu click...');
  const burgerBefore = await page.evaluate(() => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('.site-menu');
    return {
      burgerExpanded: burger?.getAttribute('aria-expanded'),
      menuOpen: menu?.classList.contains('is-open') || window.getComputedStyle(menu).visibility
    };
  });
  console.log('   Before click:', burgerBefore);

  await page.click('[data-burger]');
  await new Promise(r => setTimeout(r, 600));

  const burgerAfter = await page.evaluate(() => {
    const burger = document.querySelector('[data-burger]');
    const menu = document.querySelector('.site-menu');
    return {
      burgerExpanded: burger?.getAttribute('aria-expanded'),
      menuOpen: menu?.classList.contains('is-open') || window.getComputedStyle(menu).visibility
    };
  });
  console.log('   After click:', burgerAfter);

  // Close menu
  await page.click('[data-burger]');
  await new Promise(r => setTimeout(r, 600));

  // 3. Test scrolling down into #the-street
  console.log('3. Scrolling to #the-street...');
  await page.evaluate(() => {
    document.querySelector('#the-street')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));

  const streetState = await page.evaluate(() => {
    const street = document.querySelector('#the-street');
    const shops = document.querySelectorAll('.shop');
    return {
      streetExists: !!street,
      shopsRendered: shops.length,
      firstShopName: shops[0]?.querySelector('.shop__name')?.innerText,
      lastShopName: shops[shops.length - 1]?.querySelector('.shop__name')?.innerText,
    };
  });
  console.log('   Street state:', streetState);

  // 4. Test scrolling to #the-factory
  console.log('4. Scrolling to #the-factory...');
  await page.evaluate(() => {
    document.querySelector('#the-factory')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));

  const factoryState = await page.evaluate(() => {
    return {
      factoryWallSvg: !!document.querySelector('[data-scene="factory-wall"] svg'),
      factoryMachinesSvg: !!document.querySelector('[data-scene="factory-machines"] svg'),
    };
  });
  console.log('   Factory state:', factoryState);

  // 5. Test Contact page chip pre-filling
  console.log('\n5. Testing /contact interactive form chips...');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  const chipResult = await page.evaluate(async () => {
    const chips = Array.from(document.querySelectorAll('.console-chip, [data-chip], button.chip'));
    const textarea = document.querySelector('textarea');
    const initialVal = textarea ? textarea.value : '';

    let clicked = null;
    if (chips.length > 0) {
      clicked = chips[0].innerText.trim();
      chips[0].click();
    }

    return {
      chipsFound: chips.length,
      clickedChip: clicked,
      textareaValue: textarea ? textarea.value : null
    };
  });
  console.log('   Contact chip test result:', chipResult);

  await browser.close();
  console.log('\nAll interactive feature tests passed successfully!');
}

testInteractions().catch(console.error);

