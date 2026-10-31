const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');
const http = require('http');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

// Let's create a minimal test server that serves our public assets and a test HTML
const server = http.createServer((req, res) => {
  let reqPath = req.url.split('?')[0];
  if (reqPath === '/') {
    // Read the live HTML we saved, but point scripts/styles to our local public folder
    let html = fs.readFileSync(path.join(__dirname, 'live_home.html'), 'utf8');
    // Ensure scripts point to /build/
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
    return;
  }

  // Serve static files from public/
  let filePath = path.join(__dirname, '..', 'public', reqPath.replace(/^\//, ''));
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath);
    const mimeTypes = {
      '.js': 'application/javascript',
      '.css': 'text/css',
      '.svg': 'image/svg+xml',
      '.png': 'image/png',
      '.jpg': 'image/jpeg',
      '.ico': 'image/x-icon',
      '.woff2': 'font/woff2',
      '.json': 'application/json'
    };
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found: ' + reqPath);
  }
});

server.listen(3999, async () => {
  console.log('Test server running at http://localhost:3999');

  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const msgs = [];
  page.on('console', m => msgs.push(`[${m.type()}] ${m.text()}`));
  page.on('pageerror', e => console.error('PAGE ERROR:', e.message));
  page.on('requestfailed', r => console.log('REQ FAILED:', r.url()));

  await page.goto('http://localhost:3999/', { waitUntil: 'networkidle2' });

  // Wait 4 seconds for loader and animations
  await new Promise(r => setTimeout(r, 4000));

  const state = await page.evaluate(() => {
    return {
      bodyClass: document.body.className,
      loaderText: document.querySelector('.loader')?.innerText?.trim(),
      svgCount: document.querySelectorAll('svg').length,
      scenesTotal: document.querySelectorAll('[data-scene]').length,
      scenesFilled: document.querySelectorAll('[data-scene] > svg').length,
      hoodieInjected: !!document.querySelector('[data-scene="hoodie:hoodie-two-sides"] svg'),
    };
  });

  console.log('Result from live HTML + local assets:');
  console.log(JSON.stringify(state, null, 2));

  await page.screenshot({ path: path.join(__dirname, 'screenshots', 'test_local_server.png') });
  console.log('Screenshot saved to test_local_server.png');

  await browser.close();
  server.close();
});

