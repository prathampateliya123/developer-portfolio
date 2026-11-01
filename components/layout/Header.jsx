'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/data/siteConfig';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState('--:--');
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateTime = () => {
      try {
        const d = new Date();
        setTime(`${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`);
      } catch (err) {
        setTime('--:--');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = siteConfig.nav || [
    { label: 'Index', href: '/', id: '01' },
    { label: 'Work', href: '/work', id: '02' },
    { label: 'Contact', href: '/contact', id: '03' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-bg/90 backdrop-blur-md border-b border-ink/10 py-3.5 shadow-sm'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3.5 group cursor-pointer"
            aria-label={`${siteConfig.name} — home`}
          >
            <svg
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-105"
              viewBox="160 166 198 214"
              aria-hidden="true"
            >
              <path
                fill="#ea1d0f"
                d="M252.08 340.03L195.98 299.09L195.98 233.9L252.08 202.81L252.08 174.77L167.18 220.25L167.18 321L252.08 371.87L252.08 340.03Z"
              />
              <path
                fill="#16130f"
                d="M266.18 339.03L322.27 298.09L322.27 232.9L266.18 201.81L266.18 173.77L351.08 219.25L351.08 320L266.18 370.87L266.18 339.03Z"
              />
            </svg>
            <div className="relative w-36 h-6 hidden sm:block">
              <Image
                src="/images/logo_wordmark.png"
                alt={`${siteConfig.name} — ${siteConfig.role}`}
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-mono">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`transition-colors duration-200 py-1 border-b-2 ${
                    isActive
                      ? 'text-red border-red font-bold'
                      : 'text-ink-2 hover:text-red border-transparent hover:border-red'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Meta Time & Status */}
          <div className="hidden lg:flex items-center gap-3 font-mono text-xs uppercase tracking-mono text-ink-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-online opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-online"></span>
            </span>
            <span>Available for work</span>
            <span className="text-ink font-semibold">{time}</span>
          </div>

          {/* Mobile Hamburger Burger */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 focus:outline-none z-50"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink transition-opacity duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-ink transition-transform duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex flex-col justify-between p-8 md:p-16 transition-all duration-500 ease-in-out md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none -translate-y-full'
        }`}
      >
        <div className="pt-20">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 text-3xl font-black uppercase tracking-tight text-ink hover:text-red transition-colors"
                >
                  <span className="font-mono text-sm text-ink-3 font-normal">{item.id}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-ink/10 pt-6 flex flex-col gap-3 font-mono text-xs uppercase tracking-mono text-ink-3">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-red font-medium hover:underline"
          >
            {siteConfig.email}
          </a>
          <div className="flex gap-4">
            <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              GitHub ↗
            </a>
            <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">
              LinkedIn ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
