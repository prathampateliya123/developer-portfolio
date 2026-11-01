import './globals.css';
import { siteConfig } from '@/data/siteConfig';

export const viewport = {
  themeColor: '#f4f1ea',
};

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} — ${siteConfig.author}, full-stack developer`,
  description: siteConfig.description,
  author: siteConfig.author,
  icons: {
    icon: [
      { url: '/assets/img/icon.ico', sizes: '32x32' },
      { url: '/assets/img/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/assets/img/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.author}, full-stack developer`,
    description: siteConfig.description,
    url: `${siteConfig.url}/`,
    images: ['/assets/img/social-card.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="js" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={`${siteConfig.url}/`} />
        <link rel="author" href="/humans.txt" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=JetBrains+Mono:wght@400;500&display=swap"
        />
        <link rel="stylesheet" href="/build/site.8cc5d90d.css" />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.replace('no-js', 'js');`,
          }}
        />
        <script src="/build/runtime.98187d6b.js" defer></script>
        <script src="/build/854.7ec0aa7a.js" defer></script>
        <script src="/build/site.0197b589.js" defer></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: siteConfig.author,
              jobTitle: siteConfig.jobTitle,
              url: `${siteConfig.url}/`,
              email: `mailto:${siteConfig.email}`,
              address: { '@type': 'PostalAddress', addressCountry: 'LU' },
              knowsAbout: siteConfig.skills,
              sameAs: [
                siteConfig.socials.github,
                siteConfig.socials.linkedin,
                siteConfig.socials.stackExchange,
              ],
            }),
          }}
        />
      </head>
      <body className="is-loading" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
