const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, '..', 'data', 'pages');
const files = ['home.js', 'contact.js', 'work.js', 'login.js'];

files.forEach(f => {
  const filePath = path.join(pagesDir, f);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace all admin@devinthehood.com
  content = content.replace(/admin@devinthehood\.com/g, 'contact@prathampateliya.dev');
  // Replace all 0032497189998 or +32497189998
  content = content.replace(/0032497189998/g, 'Available for work');
  content = content.replace(/\+32497189998/g, 'Available for work');
  // Replace any leftover jul6art or Geoffrey
  content = content.replace(/Jul6art/g, 'Pratham Pateliya');
  content = content.replace(/jul6art/g, 'prathampateliya123');
  content = content.replace(/Geoffrey Kratz/gi, 'Pratham Pateliya');
  content = content.replace(/geoffrey-kratz-042b8380/gi, 'prathampateliya');

  fs.writeFileSync(filePath, content);
  console.log(`Cleaned remaining patterns in ${f}`);
});

