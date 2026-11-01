'use client';

import { GitFork, ExternalLink, Package, ShieldCheck } from 'lucide-react';

const bundles = [
  {
    name: 'core-bundle',
    version: 'v3.4.1',
    desc: 'The foundation: repositories, managers, soft delete, field encryption.',
    url: 'https://github.com/jul6art/core-bundle',
  },
  {
    name: 'auth-bundle',
    version: 'v2.2.3',
    desc: 'One User entity, its repository and manager, for every project.',
    url: 'https://github.com/jul6art/auth-bundle',
  },
  {
    name: 'acl-bundle',
    version: 'v1.1.1',
    desc: 'Permissions per role, overridable per person, with feature flags.',
    url: 'https://github.com/jul6art/acl-bundle',
  },
  {
    name: 'audit-bundle',
    version: 'v3.1.1',
    desc: 'Doctrine audit trail driven by attributes, impersonation-aware.',
    url: 'https://github.com/jul6art/audit-bundle',
  },
  {
    name: 'ui-bundle',
    version: 'v2.4.0',
    desc: 'The form layer: a theme, icon types, amount and quantity fields.',
    url: 'https://github.com/jul6art/ui-bundle',
  },
  {
    name: 'admin-bundle',
    version: 'v1.23.1',
    desc: 'The back-office shell: layout, theme, sign-in, navigation.',
    url: 'https://github.com/jul6art/admin-bundle',
  },
  {
    name: 'api-bundle',
    version: 'v2.0.0',
    desc: 'API Platform filters and state providers, from a working app.',
    url: 'https://github.com/jul6art/api-bundle',
  },
  {
    name: 'datatable-bundle',
    version: 'v2.8.0',
    desc: 'Server-driven datatables over API Platform, live over Mercure.',
    url: 'https://github.com/jul6art/datatable-bundle',
  },
  {
    name: 'dataflow-bundle',
    version: 'v1.15.3',
    desc: 'CSV, XLSX and JSON import, export and user-built reports.',
    url: 'https://github.com/jul6art/dataflow-bundle',
  },
  {
    name: 'push-bundle',
    version: 'v2.1.2',
    desc: 'Real-time notifications over Mercure, bursts coalesced.',
    url: 'https://github.com/jul6art/push-bundle',
  },
  {
    name: 'pdf-bundle',
    version: 'v1.1.0',
    desc: 'HTML to PDF rendering for Symfony.',
    url: 'https://github.com/jul6art/pdf-bundle',
  },
  {
    name: 'devtools',
    version: 'v3.1.1',
    desc: 'Workflow cartography and feedback loop for dev projects.',
    url: 'https://github.com/jul6art/devtools',
  },
  {
    name: 'symfony-skeleton-generator',
    version: 'Tool',
    desc: 'Symfony projects in five modes, QA green out of the box.',
    url: 'https://github.com/jul6art/symfony-skeleton-generator',
  },
];

export default function TheFactory() {
  return (
    <section id="the-factory" data-night="" className="py-24 bg-night text-bg relative overflow-hidden">
      {/* Section Head */}
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-mono text-amber flex items-center gap-2 mb-3">
            <b>03</b>
            <span>The Factory</span>
          </p>
          <h2 className="text-display text-4xl sm:text-6xl md:text-7xl text-bg">
            Behind the shops, <span className="italic font-normal text-amber">a factory.</span>
          </h2>
          <p className="mt-4 font-mono text-xs sm:text-sm uppercase tracking-mono text-dim max-w-xl">
            Open-source Symfony bundles, MIT, each with its own CI. Take one off the belt.
          </p>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center gap-3 bg-night-2 border border-night-line rounded-full px-5 py-2.5">
          <ShieldCheck className="w-4 h-4 text-online" />
          <span className="font-mono text-xs uppercase tracking-mono text-dim">
            <b className="text-amber font-bold">13</b> / 13 shipped · MIT
          </span>
        </div>
      </div>

      {/* Assembly Conveyor Belt */}
      <div className="relative w-full border-t border-b border-night-line py-8 bg-night-2/50 backdrop-blur">
        {/* Conveyor track wheels indicator */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber/30 to-transparent" />

        {/* Continuous Marquee Belt */}
        <div className="animate-belt flex gap-6 px-6">
          {/* Double list for continuous smooth looping */}
          {[...bundles, ...bundles].map((bundle, idx) => (
            <a
              key={`${bundle.name}-${idx}`}
              href={bundle.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-80 bg-night border border-night-line rounded-xl p-5 group hover:border-amber hover:shadow-2xl transition-all duration-300 relative flex flex-col justify-between"
            >
              {/* Crate Top Stamp */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-night-line">
                <span className="font-mono text-[10px] uppercase tracking-mono text-dim flex items-center gap-1.5">
                  <Package className="w-3.5 h-3.5 text-amber" />
                  jul6art /
                </span>
                <span className="font-mono text-[10px] uppercase tracking-mono bg-online/20 text-online px-2 py-0.5 rounded font-bold">
                  Shipped
                </span>
              </div>

              {/* Crate Content */}
              <div>
                <h3 className="text-xl font-bold font-mono tracking-tight text-bg group-hover:text-amber transition-colors mb-2">
                  {bundle.name}
                </h3>
                <p className="text-xs text-dim leading-relaxed mb-6">
                  {bundle.desc}
                </p>
              </div>

              {/* Crate Foot */}
              <div className="flex items-center justify-between font-mono text-[11px] text-dim border-t border-night-line pt-3">
                <span className="text-amber font-bold">{bundle.version}</span>
                <span className="flex items-center gap-1 text-bg group-hover:text-amber group-hover:translate-x-1 transition-all">
                  GitHub <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Factory Bottom Banner */}
      <div className="max-w-[1680px] mx-auto px-6 md:px-12 mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-mono text-dim">
        <div className="flex items-center gap-2">
          <GitFork className="w-4 h-4 text-amber" />
          <span>All packages tested & CI green on PHP 8.2+ / Symfony 7</span>
        </div>
        <a
          href="https://github.com/jul6art"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber hover:underline flex items-center gap-1"
        >
          View all 13 repositories on GitHub →
        </a>
      </div>
    </section>
  );
}

