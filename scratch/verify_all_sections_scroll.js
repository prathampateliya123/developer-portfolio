const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const sections = [
  { name: '01_hero_initial', scrollY: 0 },
  { name: '02_hero_split_pinned', scrollY: 1200 },
  { name: '03_street_start', scrollY: 2600 },
  { name: '04_street_middle_shops', scrollY: 3800 },
  { name: '05_factory_conveyor', scrollY: 5200 },
  { name: '06_player_card', scrollY: 6600 },
  { name: '07_missions_board', scrollY: 7600 },
  { name: '08_footer_finale', scrollY: 8400 }
];

async function captureSections(url, prefix) {
  console.log(`\n========================================`);
  console.log(`Capturing sections for [${prefix}]: ${url}`);
  console.log(`========================================`);

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto(url, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4500)); // wait for loader

  const shotDir = path.join(__dirname, 'screenshots', prefix);
  if (!fs.existsSync(shotDir)) fs.mkdirSync(shotDir, { recursive: true });

  const sectionMetrics = [];

  for (const s of sections) {
    console.log(`Scrolling to ${s.name} at Y=${s.scrollY}...`);
    await page.evaluate((y) => window.scrollTo(0, y), s.scrollY);
    // Wait for ScrollSmoother smooth interpolation to finish
    await new Promise(r => setTimeout(r, 1200));

    const metrics = await page.evaluate(() => {
      const splitStage = document.querySelector('.split__stage');
      const streetTrack = document.querySelector('.street__track');
      const factory = document.querySelector('#the-factory');
      const playerCard = document.querySelector('#player-card');
      const content = document.querySelector('#smooth-content');

      return {
        scrollY: window.scrollY,
        contentTransform: content?.style.transform,
        splitStageTransform: splitStage ? window.getComputedStyle(splitStage).transform : null,
        splitStagePosition: splitStage ? window.getComputedStyle(splitStage).position : null,
        streetTrackTransform: streetTrack ? window.getComputedStyle(streetTrack).transform : null,
        factoryVisible: factory ? factory.getBoundingClientRect().top < window.innerHeight && factory.getBoundingClientRect().bottom > 0 : false,
        playerCardVisible: playerCard ? playerCard.getBoundingClientRect().top < window.innerHeight && playerCard.getBoundingClientRect().bottom > 0 : false,
      };
    });

    const shotPath = path.join(shotDir, `${s.name}.png`);
    await page.screenshot({ path: shotPath });
    console.log(`  Metrics:`, metrics);
    console.log(`  Saved: ${shotPath}`);
    sectionMetrics.push({ ...s, metrics });
  }

  await browser.close();
  return sectionMetrics;
}

async function run() {
  const liveMetrics = await captureSections('https://devinthehood.com/', 'live_scroll');
  const localMetrics = await captureSections('http://localhost:3000/', 'local_scroll');

  console.log('\n========================================');
  console.log('COMPARISON SUMMARY:');
  console.log('========================================');
  for (let i = 0; i < sections.length; i++) {
    const s = sections[i];
    const live = liveMetrics[i].metrics;
    const local = localMetrics[i].metrics;
    console.log(`\nSection: ${s.name} (Y=${s.scrollY})`);
    console.log(`  Live Content Transform:  ${live.contentTransform}`);
    console.log(`  Local Content Transform: ${local.contentTransform}`);
    console.log(`  Split Stage Position (Live/Local):   ${live.splitStagePosition} / ${local.splitStagePosition}`);
    console.log(`  Street Track Transform (Live/Local): ${live.streetTrackTransform} / ${local.streetTrackTransform}`);
  }
}

run().catch(console.error);

