const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const http = require('http');

const htmlWithInlineScript = `<!DOCTYPE html>
<html lang="en" class="js">
<head>
  <link rel="stylesheet" href="/build/site.8cc5d90d.css">
  <script src="/build/runtime.98187d6b.js" defer></script>
  <script src="/build/854.7ec0aa7a.js" defer></script>
  <script src="/build/site.0197b589.js" defer></script>
</head>
<body>
  <script>
    document.body.className = "is-loading";
    document.body.dataset.page = "home";
  </script>
  <div id="test">Hello World</div>
  <script type="application/json" id="dith-data">{"components/shop":{"total":13},"pages/home":{"skip":{"label":"Skip the story","href":"/work"}},"chrome/signature":{"email":"admin@devinthehood.com"}}</script>
</body>
</html>`;

const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(htmlWithInlineScript);
    return;
  }
  const fs = require('fs');
  const path = require('path');
  let filePath = path.join(__dirname, '..', 'public', reqPath.replace(/^\//, ''));
  if (fs.existsSync(filePath)) {
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(3998, async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  let executedPage = null;

  page.on('console', msg => {
    // console.log(msg.text());
  });

  await page.goto('http://localhost:3998/', { waitUntil: 'load' });
  await new Promise(r => setTimeout(r, 1000));

  const result = await page.evaluate(() => {
    return {
      bodyClass: document.body.className,
      datasetPage: document.body.dataset.page,
      hasDith: !!document.getElementById('dith-data')
    };
  });

  console.log('Result with inline script at top of body:', result);
  await browser.close();
  server.close();
});

