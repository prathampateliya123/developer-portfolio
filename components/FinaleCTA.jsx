'use client';

import { ArrowRight, Mail } from 'lucide-react';

export default function FinaleCTA() {
  return (
    <section id="both-sides" className="py-28 bg-night text-bg border-t border-night-line relative overflow-hidden text-center">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Banner Pill */}
        <div className="inline-flex items-center gap-2 bg-night-2 border border-night-line rounded-full px-5 py-2 font-mono text-xs uppercase tracking-mono mb-8 shadow">
          <span className="text-bg">Front</span>
          <span className="text-red font-bold text-sm">+</span>
          <span className="text-amber">Back</span>
        </div>

        {/* Heading */}
        <h2 className="text-display text-5xl sm:text-7xl md:text-8xl text-bg leading-[0.88] mb-8">
          Let's build <br />
          <span className="text-red italic font-normal">the whole thing.</span>
        </h2>

        <p className="font-mono text-xs sm:text-sm uppercase tracking-mono text-dim max-w-lg mb-10 leading-relaxed">
          From first architectural diagram and database schema to high-performance responsive interface and micro-motion.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="mailto:admin@devinthehood.com?subject=New%20Project%20Inquiry"
            className="flex items-center gap-3 px-8 py-4 bg-red hover:bg-red-ink text-white rounded-full font-mono text-xs uppercase tracking-mono font-bold shadow-2xl hover:scale-105 transition-all"
          >
            <span>Start a project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="mailto:admin@devinthehood.com"
            className="flex items-center gap-2 px-6 py-4 border border-night-line hover:border-bg/40 text-bg rounded-full font-mono text-xs uppercase tracking-mono transition-colors"
          >
            <Mail className="w-4 h-4 text-dim" />
            <span>admin@devinthehood.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}

