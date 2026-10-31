import { Archivo, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://devinthehood.com'),
  title: 'DEV IN THE HOOD — Jul6art, full-stack developer',
  description: 'Full-stack developer in Luxembourg. Symfony platforms, API-first architectures, e-commerce and front-end motion work.',
  icons: {
    icon: '/images/icon.svg',
    apple: '/images/apple-touch-icon.png',
  },
  openGraph: {
    title: 'DEV IN THE HOOD — Jul6art, full-stack developer',
    description: 'Full-stack developer in Luxembourg. Multi-tenant platforms, API-first, front-end motion.',
    images: ['/images/social-card.jpg'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${archivo.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-bg text-ink min-h-screen selection:bg-red selection:text-white relative font-sans">
        {children}
      </body>
    </html>
  );
}
