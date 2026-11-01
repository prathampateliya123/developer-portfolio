'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const missionData = [
  {
    id: 0,
    hex: '01',
    title: 'React & Web Applications',
    desc: 'Building responsive single-page web applications with React.js, clean component hierarchies, state handling, and reusable architecture.',
    loadout: ['React.js', 'JavaScript (ES6+)', 'Tailwind CSS', 'Next.js'],
    shops: [
      { name: 'SupERP', image: '/images/superp-dashboard_1.jpg' },
      { name: 'DEV IN LIVE', image: '/images/devinlive-home_1.jpg' },
      { name: 'Cegeta', image: '/images/cegeta-home_1.jpg' },
    ],
  },
  {
    id: 1,
    hex: '02',
    title: 'APIs & Dashboards',
    desc: 'Connecting RESTful endpoints, handling asynchronous data flows, filtering datasets, and building interactive dashboard views.',
    loadout: ['REST APIs', 'Async Data', 'Dashboards', 'State Architecture'],
    shops: [
      { name: 'SupERP', image: '/images/superp-dashboard_1.jpg' },
      { name: 'Cegeta', image: '/images/cegeta-home_1.jpg' },
      { name: 'Cereezer', image: '/images/cereezer-home_1.jpg' },
    ],
  },
  {
    id: 2,
    hex: '03',
    title: 'Responsive UI Design',
    desc: 'Translating visual concepts and design specifications into pixel-clean, accessible, mobile-first responsive interfaces.',
    loadout: ['HTML5', 'CSS3 / Tailwind', 'Responsive Design', 'Flexbox & Grid'],
    shops: [
      { name: 'Webshop Provençale', image: '/images/webshop-home_1.jpg' },
    ],
  },
  {
    id: 3,
    hex: '04',
    title: 'Interactivity & Motion',
    desc: 'Crafting subtle micro-interactions, smooth scroll handling, and interactive component transitions that feel crisp and intuitive.',
    loadout: ['Component States', 'GSAP', 'Accessibility', 'Modern UI/UX'],
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
            Key areas of frontend engineering focus. Select an area to inspect deliverables and capabilities.
          </p>
        </div>

        {/* Mission Select Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Mission List Buttons (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {missionData.map((mission) => {
              const isSelected = selectedMission === mission.id;
              return (
                <button
                  key={mission.id}
                  type="button"
                  onClick={() => setSelectedMission(mission.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? 'bg-ink text-bg border-ink shadow-xl translate-x-2'
                      : 'bg-bg hover:bg-ink/5 border-ink/15 text-ink'
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span
                      className={`font-mono text-xs font-bold px-2.5 py-1 rounded ${
                        isSelected ? 'bg-red text-white' : 'bg-ink/10 text-ink-2 group-hover:text-red'
                      }`}
                    >
                      {mission.hex}
                    </span>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                        {mission.title}
                      </h3>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-5 h-5 transition-transform duration-300 ${
                      isSelected ? 'text-red translate-x-1' : 'text-ink-3 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Mission Detail Display Card (Right) */}
          <div className="lg:col-span-7 bg-white dark:bg-night-2 rounded-2xl border border-ink/10 p-8 sm:p-12 shadow-xl flex flex-col justify-between min-h-[460px]">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-ink/10 mb-6">
                <span className="font-mono text-xs uppercase tracking-mono text-red font-bold">
                  Mission / {active.hex}
                </span>
                <span className="font-mono text-xs uppercase tracking-mono text-ink-3">
                  Frontend Discipline
                </span>
              </div>

              <h4 className="text-display text-3xl sm:text-4xl text-ink mb-4">
                {active.title}
              </h4>
              <p className="text-base sm:text-lg text-ink-2 font-light leading-relaxed mb-8">
                {active.desc}
              </p>

              {/* Technical Loadout Pills */}
              <div className="mb-10">
                <span className="font-mono text-xs uppercase tracking-mono text-ink-3 block mb-3">
                  Technical Loadout
                </span>
                <div className="flex flex-wrap gap-2">
                  {active.loadout.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full font-mono text-xs uppercase tracking-mono bg-ink/5 border border-ink/10 text-ink font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-6 border-t border-ink/10 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-mono text-ink-3">
                Ready to collaborate?
              </span>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-red font-bold hover:underline"
              >
                <span>Open contact console</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
