'use client';

import { siteConfig } from '@/data/siteConfig';

export default function UnderTheHood() {
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
              Full Stack Web Engineering
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
                {siteConfig.name}
              </h3>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-mono text-amber">
                {siteConfig.role} · IT Professional
              </p>
            </div>

            {/* Authentic Description */}
            <p className="text-base sm:text-lg text-bg/90 font-light leading-relaxed mb-4">
              {siteConfig.about.intro}
            </p>
            <p className="text-sm text-dim leading-relaxed mb-4">
              {siteConfig.about.experience}
            </p>
            <p className="text-sm text-dim leading-relaxed mb-6">
              {siteConfig.about.journey}
            </p>

            {/* Key Attributes / Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-night-line font-mono">
              <div>
                <span className="text-xs uppercase tracking-mono text-dim block">Experience</span>
                <span className="text-lg font-bold text-bg">~6 Months</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-mono text-dim block">Focus</span>
                <span className="text-lg font-bold text-amber">Full Stack</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-mono text-dim block">Industry</span>
                <span className="text-lg font-bold text-bg">IT Sector</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-mono text-dim block">Education</span>
                <span className="text-lg font-bold text-red">Online MCA</span>
              </div>
            </div>

            {/* Technical Skills Stack in 3 Categories */}
            <div className="mt-6 flex flex-col gap-5 font-mono text-xs uppercase tracking-mono">
              <div>
                <span className="text-dim block mb-2 font-bold text-red">1. Frontend Development</span>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.frontend.map((skill) => (
                    <span key={skill} className="px-2.5 py-1 bg-night border border-night-line text-bg rounded font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-dim block mb-2 font-bold text-amber">2. Backend Development</span>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.backend.map((dev) => (
                    <span key={dev} className="px-2.5 py-1 bg-night border border-night-line text-amber rounded font-medium">
                      {dev}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-dim block mb-2 font-bold text-online">3. Database & Tools</span>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.databaseAndTools.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-night border border-night-line text-bg/90 rounded font-medium">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-dim block mb-2 font-bold text-dim">Additional Development Skills</span>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.additional.map((item) => (
                    <span key={item} className="px-2.5 py-1 bg-night/50 border border-night-line/50 text-dim rounded">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-dim text-[11px] normal-case">
                🎓 Pursuing Online MCA from {siteConfig.education.institution} ({siteConfig.education.specialization})
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
