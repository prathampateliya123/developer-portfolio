const fs = require('fs');
const html = fs.readFileSync('scratch/live_home.html', 'utf8');
const body = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || '';
const lines = body.split('\n');
console.log('First 40 lines of live body:');
lines.slice(0, 40).forEach((l, i) => {
  if (l.trim()) console.log(`${i}: ${l.trim().slice(0, 100)}`);
});

