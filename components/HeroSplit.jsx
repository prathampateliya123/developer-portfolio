'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';

export default function HeroSplit() {
  const [activeSide, setActiveSide] = useState('both'); // 'front' | 'back' | 'both'

  return (
    <section
      id="two-sides"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden pt-20"
    >
      {/* Background Split */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        {/* Left Side: Front (Day) */}
        <div
          className={`relative bg-bg transition-all duration-700 flex flex-col justify-center p-8 md:p-16 lg:p-24 border-b md:border-b-0 md:border-r border-ink/10 ${
            activeSide === 'back' ? 'opacity-40 filter grayscale' : 'opacity-100'
          }`}
          onMouseEnter={() => setActiveSide('front')}
          onMouseLeave={() => setActiveSide('both')}
        >
          <div className="max-w-xl mx-auto md:mr-0 md:ml-auto w-full">
            <span className="font-mono text-xs tracking-mono uppercase text-ink-3 block mb-4">
              01 / The Surface
            </span>
            <h1 className="text-display text-5xl sm:text-7xl lg:text-8xl text-ink leading-[0.88] mb-6">
              Every <br />
              <span className="text-red italic font-normal">product</span> <br />
              He builds
            </h1>
            <p className="font-mono text-xs md:text-sm uppercase tracking-mono text-ink-2 max-w-sm">
              Design systems, responsive interfaces, micro-animations & pixel-level craft.
            </p>
          </div>
        </div>

        {/* Right Side: Back (Night) */}
        <div
          data-night=""
          className={`relative bg-night text-bg transition-all duration-700 flex flex-col justify-center p-8 md:p-16 lg:p-24 ${
            activeSide === 'front' ? 'opacity-40 filter grayscale' : 'opacity-100'
          }`}
          onMouseEnter={() => setActiveSide('back')}
          onMouseLeave={() => setActiveSide('both')}
        >
          <div className="max-w-xl mx-auto md:ml-0 md:mr-auto w-full">
            <span className="font-mono text-xs tracking-mono uppercase text-amber block mb-4">
              02 / The Engine
            </span>
            <h2 className="text-display text-5xl sm:text-7xl lg:text-8xl text-bg leading-[0.88] mb-6">
              has two <br />
              <span className="text-amber italic font-normal">sides…</span> <br />
              <span className="text-red">both</span> sides.
            </h2>
            <p className="font-mono text-xs md:text-sm uppercase tracking-mono text-dim max-w-sm">
              API-first architectures, modular Symfony bundles, high-scale SaaS & secure backends.
            </p>
          </div>
        </div>
      </div>

      {/* Center Hex Badge & Interactivity */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center my-auto px-4">
        <div className="pointer-events-auto flex items-center bg-bg shadow-2xl border border-ink/15 rounded-full p-1.5 mb-6 backdrop-blur">
          <button
            type="button"
            onClick={() => setActiveSide('front')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-mono transition-all ${
              activeSide === 'front' ? 'bg-red text-white shadow' : 'text-ink-2 hover:text-ink'
            }`}
          >
            Front
          </button>
          <span className="px-2 font-mono text-xs text-ink-3 font-bold">vs</span>
          <button
            type="button"
            onClick={() => setActiveSide('back')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-mono transition-all ${
              activeSide === 'back' ? 'bg-night text-amber shadow' : 'text-ink-2 hover:text-ink'
            }`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => setActiveSide('both')}
            className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-mono transition-all ml-1 ${
              activeSide === 'both' ? 'bg-ink text-bg font-semibold' : 'text-ink-3 hover:text-ink'
            }`}
          >
            Both
          </button>
        </div>

        {/* Central Meta Statement */}
        <div className="text-center bg-bg/85 backdrop-blur-md px-6 py-3 rounded-xl border border-ink/10 shadow-sm max-w-md">
          <p className="font-mono text-xs md:text-sm uppercase tracking-mono text-ink">
            Most developers <span className="italic text-red font-bold">pick a side</span>.
          </p>
          <p className="font-mono text-xs uppercase tracking-mono text-ink-3 mt-1">
            Jul6art · Lead Developer · Luxembourg · Since 2015
          </p>
        </div>
      </div>

      {/* Scroll Down Prompt */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[11px] uppercase tracking-mono text-ink-3">
          Scroll down
        </span>
        <div className="w-8 h-8 rounded-full border border-ink/20 flex items-center justify-center animate-bounce text-red">
          <ArrowDown className="w-4 h-4" />
        </div>
      </div>
    </section>
  );
}

