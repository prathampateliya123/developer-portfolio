'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import BackgroundEffects from '@/components/BackgroundEffects';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const missions = [
  {
    id: 1,
    hex: '01',
    name: 'Web platforms',
    desc: 'Multi-tenant SaaS, ERP / CRM backoffices, roles and permissions, subscription-driven feature flags.',
    tags: ['Symfony', 'PHP', 'Doctrine', 'Multi-tenant'],
  },
  {
    id: 2,
    hex: '02',
    name: 'APIs & integrations',
    desc: 'API-first design, JWT-secured endpoints, webservices and third-party integrations.',
    tags: ['API Platform', 'REST', 'JWT', 'Mercure'],
  },
  {
    id: 3,
    hex: '03',
    name: 'E-commerce',
    desc: 'Webshops, catalogues, order flows and the backoffice tooling that keeps them running.',
    tags: ['E-commerce', 'Backoffice', 'Payments'],
  },
  {
    id: 4,
    hex: '04',
    name: 'Front-end & motion',
    desc: 'Design integration, responsive systems and animation work — from micro-interactions to award-nominated sites.',
    tags: ['GSAP', 'SCSS', 'Accessibility', 'SEO'],
  },
];

function ContactContent() {
  const searchParams = useSearchParams();
  const [selectedMission, setSelectedMission] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const missionParam = searchParams.get('mission');
    if (missionParam) {
      setSelectedMission(missionParam);
      setFormData((prev) => ({
        ...prev,
        message: `Mission: ${missionParam}\n\n${prev.message}`,
      }));
    }
  }, [searchParams]);

  const handleMissionSelect = (missionName) => {
    if (selectedMission === missionName) {
      setSelectedMission('');
    } else {
      setSelectedMission(missionName);
      if (!formData.message.includes(`Mission: ${missionName}`)) {
        setFormData((prev) => ({
          ...prev,
          message: `Mission: ${missionName}\n\n${prev.message.replace(/^Mission:[^\n]*\n\n/, '')}`,
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main id="main" className="pt-20">
      {/* Split Hero Stage */}
      <header className="relative min-h-[75vh] w-full flex flex-col justify-center overflow-hidden border-b border-ink/10">
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          {/* Front */}
          <div className="bg-bg flex flex-col justify-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-ink/10">
            <div className="max-w-md mx-auto md:mr-0 md:ml-auto w-full">
              <span className="font-mono text-xs tracking-mono uppercase text-red block mb-4">
                01 / Dispatch
              </span>
              <h1 className="text-display text-5xl sm:text-7xl lg:text-8xl text-ink leading-[0.88]">
                Let's build
              </h1>
            </div>
          </div>

          {/* Back */}
          <div data-night="" className="bg-night text-bg flex flex-col justify-center p-8 md:p-16">
            <div className="max-w-md mx-auto md:ml-0 md:mr-auto w-full">
              <div className="bg-night-2 border border-night-line rounded-xl p-5 font-mono text-xs shadow-2xl mb-6">
                <div className="flex gap-2 pb-3 mb-3 border-b border-night-line">
                  <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                  <span className="w-2.5 h-2.5 rounded-full bg-online/60" />
                </div>
                <p className="text-dim">$ whoami</p>
                <p className="text-bg mb-2">Jul6art — Lead developer</p>
                <p className="text-dim">$ cat status</p>
                <p className="text-online mb-2">Available for work</p>
                <p className="text-dim">$ cat base</p>
                <p className="text-amber">Luxembourg</p>
              </div>

              <h2 className="text-display text-5xl sm:text-7xl lg:text-8xl text-bg leading-[0.88]">
                the <span className="text-amber italic font-normal">whole</span> thing.
              </h2>
            </div>
          </div>
        </div>

        {/* Banner */}
        <div className="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
          <div className="bg-bg shadow-2xl border border-ink/20 rounded-full px-5 py-2 flex items-center gap-2 font-mono text-xs uppercase tracking-mono">
            <span className="text-ink font-bold">Front</span>
            <span className="text-red font-bold text-sm">+</span>
            <span className="text-ink-2 font-bold">Back</span>
          </div>
        </div>
      </header>

      {/* Section 02: Choose Your Mission */}
      <section id="mission" data-night="" className="py-24 bg-night text-bg border-b border-night-line">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12">
          <div className="mb-12">
            <p className="font-mono text-xs uppercase tracking-mono text-amber flex items-center gap-2 mb-2">
              <b>02</b>
              <span>Mission</span>
            </p>
            <h2 className="text-display text-4xl sm:text-6xl text-bg mb-3">
              Choose your <span className="italic font-normal text-amber">mission.</span>
            </h2>
            <p className="font-mono text-xs uppercase tracking-mono text-dim">
              Pick the closest mission: it writes the first line of your message.
            </p>
          </div>

          {/* Missions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {missions.map((m) => {
              const isSelected = selectedMission === m.name;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => handleMissionSelect(m.name)}
                  className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                    isSelected
                      ? 'bg-night-3 border-amber shadow-2xl -translate-y-2'
                      : 'bg-night-2 border-night-line hover:border-dim/50'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs px-2.5 py-1 bg-night border border-night-line rounded text-amber font-bold">
                        {m.hex}
                      </span>
                      <span className="font-mono text-[10px] uppercase tracking-mono text-dim">
                        {isSelected ? '✓ Picked' : 'Select'}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold uppercase text-bg mb-2">
                      {m.name}
                    </h3>
                    <p className="text-xs text-dim leading-relaxed mb-6">
                      {m.desc}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-mono text-dim block mb-2">
                      Loadout
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {m.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-[10px] uppercase tracking-mono bg-night border border-night-line px-2 py-0.5 rounded text-bg"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 03: Message Console */}
      <section id="message" className="py-24 bg-bg border-b border-ink/10">
        <div className="max-w-[1680px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-2">
              <b>03</b>
              <span>Message</span>
            </p>
            <h2 className="text-display text-4xl sm:text-6xl text-ink mb-6">
              Tell me what <span className="italic font-normal text-red">you are building.</span>
            </h2>

            {selectedMission && (
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red text-white rounded-full font-mono text-xs uppercase tracking-mono mb-6">
                <span>Mission: {selectedMission}</span>
                <button
                  type="button"
                  onClick={() => setSelectedMission('')}
                  className="hover:opacity-75 font-bold"
                >
                  ×
                </button>
              </div>
            )}

            {submitted ? (
              <div className="p-8 bg-online/10 border border-online rounded-2xl flex items-center gap-4 text-ink">
                <CheckCircle2 className="w-8 h-8 text-online flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold">Message sent successfully!</h3>
                  <p className="text-sm text-ink-2 mt-1">
                    Thanks for getting in touch. I will review your requirements and get back to you soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="font-mono text-xs uppercase tracking-mono text-ink-3">
                    Why don't we start with your name?
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Type your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-ink/20 rounded-xl px-5 py-3.5 text-ink focus:outline-none focus:border-red focus:ring-1 focus:ring-red font-sans"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-mono text-xs uppercase tracking-mono text-ink-3">
                    Then, your email address?
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Type your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-ink/20 rounded-xl px-5 py-3.5 text-ink focus:outline-none focus:border-red focus:ring-1 focus:ring-red font-sans"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-mono text-xs uppercase tracking-mono text-ink-3">
                    And finally, your message.
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    required
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-ink/20 rounded-xl px-5 py-3.5 text-ink focus:outline-none focus:border-red focus:ring-1 focus:ring-red font-sans resize-none"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="submit"
                    className="px-8 py-4 bg-red hover:bg-red-ink text-white rounded-full font-mono text-xs uppercase tracking-mono font-bold shadow-xl flex items-center gap-3 transition-transform hover:scale-105"
                  >
                    <span>Send message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <span className="font-mono text-[10px] uppercase tracking-mono text-ink-3">
                    Only used to answer you — kept for 24 months.
                  </span>
                </div>
              </form>
            )}
          </div>

          {/* Info / Spec Side */}
          <div data-night="" className="lg:col-span-5 bg-night text-bg border border-night-line rounded-2xl p-8 shadow-2xl">
            <div className="bg-night-2 border border-night-line rounded-xl p-5 font-mono text-xs mb-8">
              <p className="text-dim mb-1"># Project briefing guidance:</p>
              <p className="text-bg/80">1. Tell me about your company or startup.</p>
              <p className="text-bg/80">2. In which role do you see me?</p>
              <p className="text-bg/80">3. Do you require on-site presence or remote?</p>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-mono text-xs">
              <div>
                <dt className="text-dim uppercase tracking-mono text-[10px] mb-1">Direct Mail</dt>
                <dd>
                  <a href="mailto:admin@devinthehood.com" className="text-bg hover:text-amber font-bold">
                    admin@devinthehood.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-dim uppercase tracking-mono text-[10px] mb-1">Number</dt>
                <dd>
                  <a href="tel:+32497189998" className="text-bg hover:text-amber">
                    +32 497 18 99 98
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-dim uppercase tracking-mono text-[10px] mb-1">Location</dt>
                <dd className="text-bg">somewhere in the hood, LU</dd>
              </div>
              <div>
                <dt className="text-dim uppercase tracking-mono text-[10px] mb-1">Elsewhere</dt>
                <dd className="flex gap-3">
                  <a href="https://github.com/jul6art" target="_blank" rel="noopener noreferrer" className="hover:text-amber">
                    GitHub
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber">
                    LinkedIn
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  return (
    <>
      <Cursor />
      <BackgroundEffects />
      <Header />
      <Suspense fallback={<div className="min-h-screen bg-bg" />}>
        <ContactContent />
      </Suspense>
      <Footer />
    </>
  );
}
