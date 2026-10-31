'use client';

import Image from 'next/image';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-bg text-ink border-t border-ink/10 py-16 relative">
      <div className="max-w-[1680px] mx-auto px-6 md:px-12">
        {/* Top Tier */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-16 border-b border-ink/10 items-start">
          {/* Logo Mark */}
          <div>
            <svg
              className="w-12 h-12 text-ink hover:text-red transition-colors"
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
            <p className="font-mono text-xs uppercase tracking-mono text-ink-3 mt-4">
              DEV IN THE HOOD · Luxembourg
            </p>
          </div>

          {/* Contact Direct */}
          <div>
            <p className="font-mono text-xs uppercase tracking-mono text-ink-3 mb-2">Get in touch</p>
            <p className="text-xl font-bold">
              <a
                href="mailto:admin@devinthehood.com"
                className="text-ink hover:text-red transition-colors"
              >
                admin@devinthehood.com
              </a>
            </p>
            <p className="font-mono text-xs text-ink-3 mt-2">
              <a href="tel:+32497189998" className="hover:text-ink">
                +32 497 18 99 98
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-2 font-mono text-xs uppercase tracking-mono">
            <p className="text-ink-3 mb-1">Network</p>
            <a
              href="https://github.com/jul6art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-red transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://www.linkedin.com/in/geoffrey-kratz-042b8380"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-red transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://stackexchange.com/users/9558682/jul6art"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-red transition-colors"
            >
              Stack Exchange ↗
            </a>
          </div>

          {/* Accolades */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs uppercase tracking-mono text-ink-3">Recognition</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.awwwards.com/sites/dev-in-the-hood"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <span className="font-mono text-[10px] uppercase tracking-mono px-3 py-1.5 bg-black text-[#5ABDB2] rounded border font-bold">
                  2× Awwwards Nominee
                </span>
              </a>
              <div className="relative w-20 h-7">
                <Image
                  src="/images/w3c-css-valid.png"
                  alt="Valid CSS"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-mono text-ink-3">
          <p>© 2026 dev in the hood · Jul6art</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 hover:text-red transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-6 h-6 rounded-full border border-ink/20 flex items-center justify-center group-hover:border-red group-hover:-translate-y-0.5 transition-all">
              <ArrowUp className="w-3 h-3" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}

