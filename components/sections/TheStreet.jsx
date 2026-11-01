'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: '01',
    slug: 'cegeta',
    name: 'Cegeta',
    category: 'SaaS platform',
    year: '2026',
    awning: 'bg-ink text-bg',
    image: '/images/cegeta-home.jpg',
  },
  {
    id: '02',
    slug: 'cereezer',
    name: 'Cereezer',
    category: 'SaaS platform',
    year: '2026',
    awning: 'bg-red text-white',
    image: '/images/cereezer-home.jpg',
  },
  {
    id: '03',
    slug: 'tradebot',
    name: 'Tradebot',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-ink-2 text-white',
    image: '/images/tradebot-home.jpg',
  },
  {
    id: '04',
    slug: 'tessera',
    name: 'Tessera',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-[#9e3a2f] text-white',
    image: '/images/tessera-home.jpg',
  },
  {
    id: '05',
    slug: 'devingame',
    name: 'DEV IN GAME',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-ink text-bg',
    image: '/images/devingame-home.jpg',
  },
  {
    id: '06',
    slug: 'dev-in-live',
    name: 'DEV IN LIVE',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-red text-white',
    image: '/images/devinlive-home.jpg',
  },
  {
    id: '07',
    slug: 'devinthehood',
    name: 'DEV IN THE HOOD',
    category: 'Design',
    year: '2019',
    awning: 'bg-ink-2 text-white',
    image: '/images/devinthehood-cover.jpg',
    awwwards: true,
  },
  {
    id: '08',
    slug: 'superp',
    name: 'SupERP',
    category: 'SaaS platform',
    year: '2026',
    awning: 'bg-[#9e3a2f] text-white',
    image: '/images/superp-dashboard.jpg',
  },
  {
    id: '09',
    slug: 'letz-kola',
    name: "Lët'z Kola",
    category: 'Design',
    year: '2022',
    awning: 'bg-ink text-bg',
    image: '/images/letz-intro.jpg',
    awwwards: true,
  },
  {
    id: '10',
    slug: 'provencale-webshop',
    name: 'Webshop Provençale',
    category: 'Full-stack',
    year: '2021',
    awning: 'bg-red text-white',
    image: '/images/webshop-home.jpg',
  },
  {
    id: '11',
    slug: 'enoprimes',
    name: 'Enoprimes simulator',
    category: 'Full-stack',
    year: '2020',
    awning: 'bg-ink-2 text-white',
    image: '/images/enoprimes1.jpg',
  },
  {
    id: '12',
    slug: 'sms-group',
    name: 'SMS group',
    category: 'Front-end',
    year: '2019',
    awning: 'bg-[#9e3a2f] text-white',
    image: '/images/sms-home.jpg',
  },
  {
    id: '13',
    slug: 'iroom',
    name: 'iRoom',
    category: 'Front-end',
    year: '2017',
    awning: 'bg-ink text-bg',
    image: '/images/iroom-home.jpg',
  },
];

export default function TheStreet() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="the-street" className="py-24 bg-bg border-t border-b border-ink/10 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-3">
            <b>02</b>
            <span>The Street</span>
          </p>
          <h2 className="text-display text-4xl sm:text-6xl md:text-7xl text-ink">
            The front is what <span className="italic font-normal text-red">people see.</span>
          </h2>
        </div>

        {/* Scroll Controls */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs uppercase tracking-mono text-ink-3 hidden sm:inline">
            Scroll sideways
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scroll('left')}
              className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-white transition-all shadow-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => scroll('right')}
              className="w-11 h-11 rounded-full border border-ink/20 flex items-center justify-center hover:bg-ink hover:text-white transition-all shadow-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Store Track */}
      <div
        ref={trackRef}
        className="flex gap-8 overflow-x-auto px-6 md:px-12 pb-8 scroll-smooth no-scrollbar"
      >
        {projects.map((p) => (
          <div
            key={p.id}
            data-shop=""
            className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] group flex flex-col transition-transform duration-300 hover:-translate-y-2"
          >
            {/* Store Awning */}
            <div className={`h-8 ${p.awning} rounded-t-lg flex items-center justify-between px-4 font-mono text-[11px] tracking-mono uppercase shadow-md`}>
              <span className="font-bold">{p.id}</span>
              <span>{p.name}</span>
            </div>

            {/* Store Showcase Box */}
            <Link
              href={`/work/${p.slug}`}
              className="relative border-2 border-t-0 border-ink/20 rounded-b-lg overflow-hidden bg-white shadow-xl flex flex-col"
            >
              <div className="relative h-56 sm:h-64 w-full bg-bg-3 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 400px"
                />

                {/* Awwwards badge overlay */}
                {p.awwwards && (
                  <div className="absolute top-2 right-2 bg-black/80 backdrop-blur rounded px-2 py-1 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-[#5ABDB2]" />
                    <span className="font-mono text-[9px] uppercase tracking-mono text-white font-bold">
                      Awwwards Nominee
                    </span>
                  </div>
                )}
              </div>

              {/* Store Plate Footer */}
              <div className="p-4 bg-bg border-t border-ink/10 flex items-center justify-between font-mono text-xs text-ink-2">
                <span className="uppercase tracking-mono">{p.category} · {p.year}</span>
                <span className="text-red flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                  Explore <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </div>
        ))}

        {/* End Card */}
        <div className="flex-shrink-0 w-64 flex flex-col justify-center items-center p-8 bg-bg-2 border-2 border-dashed border-ink/20 rounded-lg text-center">
          <span className="font-mono text-xs uppercase tracking-mono text-ink-3 mb-2">13 Case Studies</span>
          <h3 className="text-xl font-bold uppercase text-ink mb-4">Crafted & Shipped</h3>
          <Link
            href="/work"
            className="px-5 py-2.5 bg-ink text-white rounded-full font-mono text-xs uppercase tracking-mono hover:bg-red transition-colors"
          >
            All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
