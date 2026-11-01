'use client';

import { useState } from 'react';

export default function UnderTheHood() {
  const [balance, setBalance] = useState(50);

  return (
    <section id="under-the-hood" data-night="" className="py-24 bg-night text-bg border-t border-night-line relative">
      <div className="max-w-[1680px] mx-auto px-6 md:px-12">
        {/* Section Title */}
        <div className="mb-14">
          <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-3">
            <b>04</b>
            <span>Under the hood</span>
          </p>
          <h2 className="text-display text-4xl sm:text-6xl md:text-7xl text-bg">
            Who is <span className="italic font-normal text-red">under the hood?</span>
          </h2>
        </div>

        {/* Player Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Stage Visual */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-8 bg-night-2 rounded-2xl border border-night-line shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-b from-red/10 via-transparent to-transparent pointer-events-none" />
            
            <svg
              className="w-48 h-48 md:w-64 md:h-64 text-red transition-transform duration-750 group-hover:scale-105"
              viewBox="160 166 198 214"
              aria-hidden="true"
            >
              <path
                fill="#ea1d0f"
                d="M252.08 340.03L195.98 299.09L195.98 233.9L252.08 202.81L252.08 174.77L167.18 220.25L167.18 321L252.08 371.87L252.08 340.03Z"
              />
              <path
                fill="#3a120c"
                d="M266.18 339.03L322.27 298.09L322.27 232.9L266.18 201.81L266.18 173.77L351.08 219.25L351.08 320L266.18 370.87L266.18 339.03Z"
              />
            </svg>

            <span className="font-mono text-xs uppercase tracking-mono text-dim mt-4">
              Dual-Discipline Engineering
            </span>
          </div>

          {/* Player Bio Card */}
          <article className="lg:col-span-7 bg-night-2 border border-night-line rounded-2xl p-8 sm:p-12 shadow-2xl">
            {/* Header / Top */}
            <header className="flex items-center justify-between pb-6 border-b border-night-line font-mono text-xs uppercase tracking-mono">
              <span className="text-dim">Player 1</span>
              <span className="flex items-center gap-2 text-online">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-online opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-online"></span>
                </span>
                Available for work
              </span>
            </header>

            {/* Name & Title */}
            <div className="py-6">
              <h3 className="text-display text-4xl sm:text-5xl text-bg mb-1">
                Jul6art
              </h3>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-mono text-amber">
                Lead developer · Luxembourg
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg text-bg/90 font-light leading-relaxed mb-6">
              Developer in Luxembourg, working from design to deployment: multi-tenant SaaS platforms, e-commerce, backoffices and API layers — plus the front-end craft that makes them worth using.
            </p>
            <p className="text-sm text-dim leading-relaxed mb-8">
              I work full-stack on Symfony and PHP, with API-first architectures, a strong bias for modular code and interfaces built to last. Some of it ships for clients through agencies, some of it is built in-house from the first line to production.
            </p>

            {/* Stats Grid */}
            <dl className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-night rounded-xl border border-night-line mb-8 font-mono">
              <div>
                <dt className="text-[10px] uppercase tracking-mono text-dim mb-1">Projects</dt>
                <dd className="text-2xl font-bold text-bg">13</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-mono text-dim mb-1">Shipping Since</dt>
                <dd className="text-2xl font-bold text-bg">2015</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-mono text-dim mb-1">Awwwards</dt>
                <dd className="text-2xl font-bold text-amber">2</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-mono text-dim mb-1">Location</dt>
                <dd className="text-2xl font-bold text-red">LU</dd>
              </div>
            </dl>

            {/* Front vs Back Interactive Balance Meter */}
            <div className="p-4 bg-night rounded-xl border border-night-line">
              <div className="flex justify-between items-center font-mono text-xs uppercase tracking-mono mb-2">
                <span className={balance < 50 ? 'text-red font-bold' : 'text-dim'}>
                  Front: {100 - balance}%
                </span>
                <span className="text-[10px] text-dim">Skill Balance</span>
                <span className={balance > 50 ? 'text-amber font-bold' : 'text-dim'}>
                  Back: {balance}%
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={balance}
                onChange={(e) => setBalance(Number(e.target.value))}
                className="w-full accent-red cursor-pointer h-2 bg-night-3 rounded-lg appearance-none"
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

