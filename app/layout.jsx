import './globals.css';

export const viewport = {
  themeColor: '#f4f1ea',
};

export const metadata = {
  metadataBase: new URL('https://devinthehood.com'),
  title: 'DEV IN THE HOOD — Jul6art, full-stack developer',
  description: 'Full-stack developer in Luxembourg. Symfony platforms, API-first architectures, e-commerce and front-end motion work.',
  author: 'Jul6art',
  icons: {
    icon: [
      { url: '/assets/img/icon.ico', sizes: '32x32' },
      { url: '/assets/img/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/img/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: 'DEV IN THE HOOD',
    title: 'DEV IN THE HOOD — Jul6art, full-stack developer',
    description: 'Full-stack developer in Luxembourg. Symfony platforms, API-first architectures, e-commerce and front-end motion work.',
    url: 'https://devinthehood.com/',
    images: ['/assets/img/social-card.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link rel="stylesheet" href="/css/site.8cc5d90d.css" />
        <link rel="stylesheet" href="/build/site.8cc5d90d.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.replace('no-js', 'js');`,
          }}
        />
        <script src="/js/runtime.98187d6b.js" defer></script>
        <script src="/js/854.7ec0aa7a.js" defer></script>
        <script src="/js/site.0197b589.js" defer></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
