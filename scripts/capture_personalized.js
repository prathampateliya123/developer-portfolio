const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function capture() {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const shotDir = path.join(__dirname, '..', 'scratch', 'screenshots', 'personalized');
  if (!fs.existsSync(shotDir)) fs.mkdirSync(shotDir, { recursive: true });

  console.log('Capturing personalized Home page...');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500));

  // Hero Initial
  await page.screenshot({ path: path.join(shotDir, '01_pratham_hero.png') });
  console.log('Saved 01_pratham_hero.png');

  // Player Card (#under-the-hood)
  console.log('Scrolling to #under-the-hood...');
  await page.evaluate(() => {
    document.querySelector('#under-the-hood')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(shotDir, '02_pratham_player_card.png') });
  console.log('Saved 02_pratham_player_card.png');

  // Missions (#missions)
  console.log('Scrolling to #missions...');
  await page.evaluate(() => {
    document.querySelector('#missions')?.scrollIntoView();
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(shotDir, '03_pratham_missions.png') });
  console.log('Saved 03_pratham_missions.png');

  // Contact Page
  console.log('Capturing personalized Contact page...');
  await page.goto('http://localhost:3000/contact', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: path.join(shotDir, '04_pratham_contact.png') });
  console.log('Saved 04_pratham_contact.png');

  await browser.close();
  console.log('All personalized screenshots captured!');
}

capture().catch(console.error);

