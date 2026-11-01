'use client';

import { useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

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
              01 / The Frontend Experience
            </span>
            <h1 className="text-display text-5xl sm:text-7xl lg:text-8xl text-ink leading-[0.88] mb-6">
              Full Stack <br />
              <span className="text-red italic font-normal">Developer</span>
            </h1>
            <p className="font-mono text-xs md:text-sm uppercase tracking-mono text-ink-2 max-w-sm">
              Turning ideas into powerful digital experiences with React.js, modern JavaScript, and responsive design.
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
              02 / The Backend Architecture
            </span>
            <h2 className="text-display text-5xl sm:text-7xl lg:text-8xl text-bg leading-[0.88] mb-6">
              Robust <br />
              <span className="text-amber italic font-normal">APIs &</span> <br />
              <span className="text-red">Databases</span>
            </h2>
            <p className="font-mono text-xs md:text-sm uppercase tracking-mono text-dim max-w-sm">
              Node.js, Express.js, RESTful API architecture, authentication, and structured database management.
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
            Frontend
          </button>
          <span className="px-2 font-mono text-xs text-ink-3 font-bold">+</span>
          <button
            type="button"
            onClick={() => setActiveSide('back')}
            className={`px-4 py-1.5 rounded-full font-mono text-xs uppercase tracking-mono transition-all ${
              activeSide === 'back' ? 'bg-night text-amber shadow' : 'text-ink-2 hover:text-ink'
            }`}
          >
            Backend
          </button>
          <button
            type="button"
            onClick={() => setActiveSide('both')}
            className={`px-3 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-mono transition-all ml-1 ${
              activeSide === 'both' ? 'bg-ink text-bg font-semibold' : 'text-ink-3 hover:text-ink'
            }`}
          >
            Full Stack
          </button>
        </div>

        {/* Central Meta Statement */}
        <div className="text-center bg-bg/90 backdrop-blur-md px-6 py-4 rounded-xl border border-ink/10 shadow-sm max-w-lg">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-mono text-ink font-bold mb-1">
            {siteConfig.supportingHeadline}
          </p>
          <p className="font-mono text-[11px] text-ink-3 max-w-md">
            {siteConfig.description}
          </p>
        </div>
      </div>

      {/* Scroll Down Hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none">
        <span className="font-mono text-[11px] uppercase tracking-mono text-ink-3">Scroll down</span>
        <ArrowDown className="w-4 h-4 text-red animate-bounce" />
      </div>
    </section>
  );
}
