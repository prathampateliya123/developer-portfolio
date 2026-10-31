'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import BackgroundEffects from '@/components/BackgroundEffects';
import { ArrowRight } from 'lucide-react';

const allShops = [
  {
    id: '01',
    slug: 'cegeta',
    name: 'Cegeta',
    category: 'SaaS platform',
    year: '2026',
    awning: 'bg-ink text-bg',
    image: '/media/cache/shop_window/assets/img/project/cegeta/cegeta-home.jpg',
  },
  {
    id: '02',
    slug: 'cereezer',
    name: 'Cereezer',
    category: 'SaaS platform',
    year: '2026',
    awning: 'bg-red text-white',
    image: '/media/cache/shop_window/assets/img/project/cereezer/cereezer-home.jpg',
  },
  {
    id: '03',
    slug: 'tradebot',
    name: 'Tradebot',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-ink-2 text-white',
    image: '/media/cache/shop_window/assets/img/project/tradebot/tradebot-home.jpg',
  },
  {
    id: '04',
    slug: 'tessera',
    name: 'Tessera',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-[#9e3a2f] text-white',
    image: '/media/cache/shop_window/assets/img/project/tessera/tessera-home.jpg',
  },
  {
    id: '05',
    slug: 'devingame',
    name: 'DEV IN GAME',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-ink text-bg',
    image: '/media/cache/shop_window/assets/img/project/devingame/devingame-home.jpg',
  },
  {
    id: '06',
    slug: 'dev-in-live',
    name: 'DEV IN LIVE',
    category: 'Full-stack',
    year: '2026',
    awning: 'bg-red text-white',
    image: '/media/cache/shop_window/assets/img/project/devinlive/devinlive-home.jpg',
  },
  {
    id: '07',
    slug: 'devinthehood',
    name: 'DEV IN THE HOOD',
    category: 'Design',
    year: '2019',
    awning: 'bg-ink-2 text-white',
    image: '/media/cache/shop_window/assets/img/project/devinthehood/devinthehood-cover.jpg',
    awwwards: true,
  },
  {
    id: '08',
    slug: 'superp',
    name: 'SupERP',
    category: 'SaaS platform',
    year: '2026',
    awning: 'bg-[#9e3a2f] text-white',
    image: '/media/cache/shop_window/assets/img/project/superp/superp-dashboard.jpg',
  },
  {
    id: '09',
    slug: 'letz-kola',
    name: "Lët'z Kola",
    category: 'Design',
    year: '2022',
    awning: 'bg-ink text-bg',
    image: '/media/cache/shop_window/assets/img/project/letz/letz-intro.jpg',
    awwwards: true,
  },
  {
    id: '10',
    slug: 'provencale-webshop',
    name: 'Webshop Provençale',
    category: 'Full-stack',
    year: '2021',
    awning: 'bg-red text-white',
    image: '/media/cache/shop_window/assets/img/project/webshop/webshop-home.jpg',
  },
  {
    id: '11',
    slug: 'enoprimes',
    name: 'Enoprimes simulator',
    category: 'Full-stack',
    year: '2020',
    awning: 'bg-ink-2 text-white',
    image: '/media/cache/shop_window/assets/img/project/enoprimes/enoprimes1.jpg',
  },
  {
    id: '12',
    slug: 'sms-group',
    name: 'SMS group',
    category: 'Front-end',
    year: '2019',
    awning: 'bg-[#9e3a2f] text-white',
    image: '/media/cache/shop_window/assets/img/project/sms/sms-home.jpg',
  },
  {
    id: '13',
    slug: 'iroom',
    name: 'iRoom',
    category: 'Front-end',
    year: '2017',
    awning: 'bg-ink text-bg',
    image: '/media/cache/shop_window/assets/img/project/iroom/iroom-home.jpg',
  },
];

const mosaicImgs = [
  '/media/cache/work_mosaic/assets/img/project/cegeta/cegeta-home.jpg',
  '/media/cache/work_mosaic/assets/img/project/cereezer/cereezer-home.jpg',
  '/media/cache/work_mosaic/assets/img/project/tradebot/tradebot-home.jpg',
  '/media/cache/work_mosaic/assets/img/project/tessera/tessera-home.jpg',
  '/media/cache/work_mosaic/assets/img/project/devingame/devingame-home.jpg',
  '/media/cache/work_mosaic/assets/img/project/devinlive/devinlive-home.jpg',
];

const categories = ['All', 'SaaS platform', 'Full-stack', 'Design', 'Front-end'];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredShops =
    activeFilter === 'All'
      ? allShops
      : allShops.filter((s) => s.category === activeFilter);

  return (
    <>
      <Cursor />
      <BackgroundEffects />
      <Header />

      <main id="main" className="pt-20">
        {/* Hero Split Header */}
        <section className="relative min-h-[85vh] w-full flex flex-col justify-center overflow-hidden border-b border-ink/10">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            {/* Front Half: Mosaic Browser */}
            <div className="bg-bg flex flex-col justify-center p-8 md:p-14 border-b md:border-b-0 md:border-r border-ink/10">
              <div className="w-full max-w-lg mx-auto">
                {/* Browser mockup */}
                <div className="border border-ink/20 rounded-xl overflow-hidden shadow-2xl bg-white mb-6">
                  <div className="bg-bg-2 px-3 py-2 border-b border-ink/10 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-online/60" />
                    <span className="font-mono text-[10px] uppercase tracking-mono text-ink-3 ml-2">
                      DEV IN THE HOOD / work
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-1 bg-ink/10 p-1">
                    {mosaicImgs.map((src, i) => (
                      <div key={i} className="relative h-20 bg-bg-3 overflow-hidden">
                        <Image
                          src={src}
                          alt="preview"
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <h1 className="text-display text-5xl sm:text-7xl text-ink leading-[0.88]">
                  Every shop
                </h1>
              </div>
            </div>

            {/* Back Half: Terminal */}
            <div data-night="" className="bg-night text-bg flex flex-col justify-center p-8 md:p-14">
              <div className="w-full max-w-lg mx-auto">
                <div className="bg-night-2 border border-night-line rounded-xl overflow-hidden shadow-2xl p-4 font-mono text-xs mb-6">
                  <div className="flex gap-2 pb-3 mb-3 border-b border-night-line">
                    <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-online/60" />
                  </div>
                  <p className="text-dim mb-2">$ ls /work</p>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-bg/90 mb-3 text-[11px]">
                    {allShops.map((s) => (
                      <span key={s.slug} className="hover:text-amber transition-colors">
                        {s.slug}
                      </span>
                    ))}
                  </div>
                  <p className="text-amber font-semibold border-t border-night-line pt-2 text-[11px]">
                    13 shops on the street
                  </p>
                </div>

                <h2 className="text-display text-5xl sm:text-7xl text-bg leading-[0.88]">
                  on the <span className="text-amber italic font-normal">street.</span>
                </h2>
              </div>
            </div>
          </div>

          {/* Center Hex Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
            <div className="bg-bg shadow-2xl border border-ink/20 rounded-full px-5 py-2 flex items-center gap-3 font-mono text-xs uppercase tracking-mono">
              <span className="text-ink font-bold">Front</span>
              <span className="bg-red text-white px-2 py-0.5 rounded-full font-bold">13</span>
              <span className="text-ink-2 font-bold">Back</span>
            </div>
          </div>
        </section>

        {/* Section 02: The Shops District */}
        <section id="shops" className="py-24 bg-bg relative">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12">
            {/* Header */}
            <div className="mb-10">
              <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-2">
                <b>02</b>
                <span>The shops</span>
              </p>
              <h2 className="text-display text-4xl sm:text-6xl text-ink">
                Walk into <span className="italic font-normal text-red">any of them.</span>
              </h2>
            </div>

            {/* Filter Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-12 border-b border-ink/10">
              <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-mono transition-all ${
                      activeFilter === cat
                        ? 'bg-ink text-white shadow-md'
                        : 'bg-bg-2 border border-ink/15 text-ink-2 hover:bg-bg-3'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <span className="font-mono text-xs uppercase tracking-mono text-ink-3">
                {filteredShops.length} shown
              </span>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredShops.map((shop) => (
                <div key={shop.id} className="group flex flex-col">
                  {/* Awning */}
                  <div
                    className={`h-8 ${shop.awning} rounded-t-lg flex items-center justify-between px-4 font-mono text-[11px] tracking-mono uppercase shadow-md`}
                  >
                    <span className="font-bold">{shop.id}</span>
                    <span>{shop.name}</span>
                  </div>

                  {/* Showcase Box */}
                  <Link
                    href={`/work/${shop.slug}`}
                    className="relative border-2 border-t-0 border-ink/20 rounded-b-lg overflow-hidden bg-white shadow-lg flex flex-col transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl"
                  >
                    <div className="relative h-60 w-full bg-bg-3 overflow-hidden">
                      <Image
                        src={shop.image}
                        alt={shop.name}
                        fill
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />

                      {shop.awwwards && (
                        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur rounded px-2 py-1 flex items-center gap-1.5 shadow-md">
                          <span className="w-2 h-2 rounded-full bg-[#5ABDB2]" />
                          <span className="font-mono text-[9px] uppercase tracking-mono text-white font-bold">
                            Awwwards Nominee
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Shop Plate */}
                    <div className="p-4 bg-bg border-t border-ink/10 flex items-center justify-between font-mono text-xs text-ink-2">
                      <span className="uppercase tracking-mono font-medium">
                        {shop.category} · {shop.year}
                      </span>
                      <span className="text-red flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </Link>

                  {/* Sidewalk line accent */}
                  <div className="h-1 bg-ink/10 mt-2 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: Seam CTA (Your shop next?) */}
        <section
          id="yours"
          className="relative min-h-[45vh] w-full flex flex-col justify-center items-center overflow-hidden border-t border-ink/10"
        >
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            <div className="bg-bg flex items-center justify-center p-8">
              <h2 className="text-display text-5xl sm:text-7xl text-ink">
                Your shop
              </h2>
            </div>
            <div data-night="" className="bg-night flex items-center justify-center p-8">
              <h2 className="text-display text-5xl sm:text-7xl text-bg">
                <span className="text-red italic font-normal">next?</span>
              </h2>
            </div>
          </div>

          <div className="relative z-10 my-auto">
            <Link
              href="/contact"
              className="px-8 py-4 bg-red hover:bg-red-ink text-white rounded-full font-mono text-xs uppercase tracking-mono font-bold shadow-2xl flex items-center gap-3 transition-transform hover:scale-105"
            >
              <span>Start a project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

