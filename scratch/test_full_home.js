const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const http = require('http');
const fs = require('fs');
const path = require('path');

const { homeHtml } = require('../data/pagesHtml');

const fullHomeDoc = `<!DOCTYPE html>
<html lang="en" class="js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&amp;family=JetBrains+Mono:wght@400;500&amp;display=swap">
  <link rel="stylesheet" href="/build/site.8cc5d90d.css">
  <script>document.documentElement.classList.replace('no-js', 'js');</script>
  <script src="/build/runtime.98187d6b.js" defer></script>
  <script src="/build/854.7ec0aa7a.js" defer></script>
  <script src="/build/site.0197b589.js" defer></script>
</head>
<body>
  <script>
    document.body.className = "is-loading";
    document.body.dataset.page = "home";
  </script>
  ${homeHtml}
</body>
</html>`;

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(fullHomeDoc);
    return;
  }
  let filePath = path.join(__dirname, '..', 'public', reqPath.replace(/^\//, ''));
  if (fs.existsSync(filePath)) {
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3997, async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3997/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 4000));

  const result = await page.evaluate(() => {
    return {
      bodyClass: document.body.className,
      loaderText: document.querySelector('.loader')?.innerText?.trim(),
      svgCount: document.querySelectorAll('svg').length,
      scenesTotal: document.querySelectorAll('[data-scene]').length,
      scenesFilled: document.querySelectorAll('[data-scene] > svg').length,
      hoodieInjected: !!document.querySelector('[data-scene="hoodie:hoodie-two-sides"] svg'),
    };
  });

  console.log('Result with full homeHtml and inline script:');
  console.log(JSON.stringify(result, null, 2));

  await page.screenshot({ path: path.join(__dirname, 'screenshots', 'test_home_complete.png') });
  console.log('Screenshot saved to test_home_complete.png');

  await browser.close();
  server.close();
});

