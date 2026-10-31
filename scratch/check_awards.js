const projects = ['cegeta', 'cereezer', 'tradebot', 'tessera', 'devingame', 'dev-in-live', 'devinthehood', 'superp', 'letz-kola', 'provencale-webshop', 'enoprimes', 'sms-group', 'iroom'];
async function run() {
  for (const p of projects) {
    const res = await fetch('https://devinthehood.com/work/' + p);
    const html = await res.text();
    const dith = html.match(/<script type="application\/json" id="dith-data">([\s\S]*?)<\/script>/i)?.[1];
    if (dith && dith.includes('award') && !dith.includes('"award":null')) {
      console.log(p, 'has award:', dith);
    }
  }
  console.log('Checked all projects for awards');
}
run();
