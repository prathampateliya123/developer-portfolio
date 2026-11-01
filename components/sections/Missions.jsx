'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight, ArrowRight } from 'lucide-react';

const missionData = [
  {
    id: 0,
    hex: '01',
    title: 'Web platforms',
    desc: 'Multi-tenant SaaS, ERP / CRM backoffices, roles and permissions, subscription-driven feature flags.',
    loadout: ['Symfony', 'PHP', 'Doctrine', 'Multi-tenant'],
    shops: [
      { name: 'SupERP', image: '/images/superp-dashboard_1.jpg' },
      { name: 'DEV IN LIVE', image: '/images/devinlive-home_1.jpg' },
      { name: 'Cegeta', image: '/images/cegeta-home_1.jpg' },
    ],
  },
  {
    id: 1,
    hex: '02',
    title: 'APIs & integrations',
    desc: 'API-first design, JWT-secured endpoints, webservices and third-party integrations.',
    loadout: ['API Platform', 'REST', 'JWT', 'Mercure'],
    shops: [
      { name: 'SupERP', image: '/images/superp-dashboard_1.jpg' },
      { name: 'Cegeta', image: '/images/cegeta-home_1.jpg' },
      { name: 'Cereezer', image: '/images/cereezer-home_1.jpg' },
    ],
  },
  {
    id: 2,
    hex: '03',
    title: 'E-commerce',
    desc: 'Webshops, catalogues, order flows and the backoffice tooling that keeps them running.',
    loadout: ['E-commerce', 'Backoffice', 'Payments', 'Order Flow'],
    shops: [
      { name: 'Webshop Provençale', image: '/images/webshop-home_1.jpg' },
    ],
  },
  {
    id: 3,
    hex: '04',
    title: 'Front-end & motion',
    desc: 'Design integration, responsive systems and animation work — from micro-interactions to award-nominated sites.',
    loadout: ['GSAP', 'SCSS', 'Accessibility', 'SEO', 'Tailwind'],
    shops: [
      { name: 'DEV IN THE HOOD', image: '/images/devinthehood-cover_1.jpg' },
      { name: "Lët'z Kola", image: '/images/letz-intro_1.jpg' },
      { name: 'iRoom', image: '/images/iroom-home_1.jpg' },
    ],
  },
];

export default function Missions() {
  const [selectedMission, setSelectedMission] = useState(0);
  const active = missionData[selectedMission];

  return (
    <section id="missions" className="py-24 bg-bg border-t border-ink/10 relative overflow-hidden">
      <div className="max-w-[1680px] mx-auto px-6 md:px-12">
        {/* Section Head */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-3">
            <b>05</b>
            <span>Missions</span>
          </p>
          <h2 className="text-display text-4xl sm:text-6xl md:text-7xl text-ink">
            Choose your <span className="italic font-normal text-red">mission.</span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-mono text-ink-2 max-w-xl">
            Four kinds of jobs. Pick one: the contact message opens ready with your requirements.
          </p>
        </div>

        {/* Mission Select Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mission List Buttons (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {missionData.map((m) => {
              const isPicked = selectedMission === m.id;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setSelectedMission(m.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    isPicked
                      ? 'bg-ink text-bg border-ink shadow-lg translate-x-2'
                      : 'bg-bg-2 text-ink border-ink/15 hover:border-ink hover:bg-bg-3'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded font-bold ${
                        isPicked ? 'bg-red text-white' : 'bg-ink/10 text-ink'
                      }`}
                    >
                      {m.hex}
                    </span>
                    <span className="text-lg font-bold uppercase tracking-tight">
                      {m.title}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      isPicked ? 'text-red translate-x-1' : 'text-ink-3'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mission Detail Screen (Right) */}
          <div
            data-night=""
            className="lg:col-span-7 bg-night text-bg border border-night-line rounded-2xl p-8 sm:p-10 shadow-2xl relative"
          >
            <div className="flex items-center justify-between pb-4 border-b border-night-line mb-6 font-mono text-xs uppercase tracking-mono">
              <span className="text-amber flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber" />
                Mission {active.hex} Selected
              </span>
              <span className="text-dim">Spec Ready</span>
            </div>

            <h3 className="text-display text-3xl sm:text-4xl text-bg mb-4">
              {active.title}
            </h3>
            <p className="text-sm sm:text-base text-dim leading-relaxed mb-8">
              {active.desc}
            </p>

            {/* Loadout Tech Pills */}
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-mono text-amber mb-3">
                Loadout Architecture
              </p>
              <div className="flex flex-wrap gap-2">
                {active.loadout.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs uppercase tracking-mono bg-night-2 border border-night-line text-bg px-3.5 py-1.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Shipped with it */}
            <div className="mb-8">
              <p className="font-mono text-xs uppercase tracking-mono text-dim mb-3">
                Selected Work built with it
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {active.shops.map((s) => (
                  <div
                    key={s.name}
                    className="relative rounded-lg overflow-hidden border border-night-line group bg-night-2"
                  >
                    <div className="relative h-24 w-full">
                      <Image
                        src={s.image}
                        alt={s.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 50vw, 20vw"
                      />
                    </div>
                    <p className="p-2 font-mono text-[11px] text-center uppercase tracking-mono text-dim group-hover:text-amber">
                      {s.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={`/contact?mission=${encodeURIComponent(active.title)}`}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-red hover:bg-red-ink text-white rounded-full font-mono text-xs uppercase tracking-mono font-bold transition-colors shadow-lg"
            >
              <span>Choose this mission</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

