import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import BackgroundEffects from '@/components/BackgroundEffects';
import { projectsData, projectsList } from '@/data/projects';
import { ArrowRight, ExternalLink, ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return projectsList.map((p) => ({
    slug: p.slug,
  }));
}

export function generateMetadata({ params }) {
  const project = projectsData[params.slug];
  if (!project) return { title: 'Project Not Found' };
  return {
    title: `${project.name} — DEV IN THE HOOD`,
    description: project.overview?.slice(0, 160),
  };
}

export default function ProjectPage({ params }) {
  const project = projectsData[params.slug];
  if (!project) notFound();

  const nextProject = projectsData[project.nextSlug] || projectsList[0];

  return (
    <>
      <Cursor />
      <BackgroundEffects />
      <Header />

      <main id="main" className="pt-20">
        {/* Chapter 01: Hero Split Stage */}
        <header className="relative min-h-[85vh] w-full flex flex-col justify-center overflow-hidden border-b border-ink/10">
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
            {/* Front: Desktop Preview */}
            <div className="bg-bg flex flex-col justify-center p-8 md:p-14 border-b md:border-b-0 md:border-r border-ink/10">
              <div className="w-full max-w-xl mx-auto">
                <div className="border border-ink/20 rounded-xl overflow-hidden shadow-2xl bg-white mb-6">
                  <div className="bg-bg-2 px-3 py-2 border-b border-ink/10 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-online/60" />
                    <span className="font-mono text-[10px] uppercase tracking-mono text-ink-3 ml-2 truncate">
                      {project.website?.label || `${project.slug}.com`}
                    </span>
                  </div>
                  {project.desktopScreens?.[0] && (
                    <div className="relative h-64 sm:h-80 w-full bg-bg-3 overflow-hidden">
                      <Image
                        src={project.desktopScreens[0].src}
                        alt={project.name}
                        fill
                        priority
                        className="object-cover object-top"
                      />
                    </div>
                  )}
                </div>

                <h1 className="text-display text-5xl sm:text-7xl text-ink leading-[0.88]">
                  {project.name}
                </h1>
              </div>
            </div>

            {/* Back: Stack Terminal */}
            <div data-night="" className="bg-night text-bg flex flex-col justify-center p-8 md:p-14">
              <div className="w-full max-w-xl mx-auto">
                <div className="bg-night-2 border border-night-line rounded-xl overflow-hidden shadow-2xl p-5 font-mono text-xs mb-6">
                  <div className="flex gap-2 pb-3 mb-3 border-b border-night-line">
                    <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-online/60" />
                  </div>
                  <p className="text-dim mb-2">$ cat stack.txt</p>
                  <div className="flex flex-col gap-1 text-bg/90 mb-4 text-[12px]">
                    {project.stack?.map((item, i) => (
                      <span key={i} className="hover:text-amber transition-colors">
                        {item}
                      </span>
                    ))}
                  </div>

                  {project.stats?.length > 0 && (
                    <>
                      <p className="text-dim mb-2 border-t border-night-line pt-3">$ stats --short</p>
                      <div className="flex flex-col gap-1 text-amber text-[12px]">
                        {project.stats.slice(0, 3).map((st, i) => (
                          <span key={i}>
                            {st.val}  {st.label}
                          </span>
                        ))}
                      </div>
                    </>
                  )}
                </div>

                <h2 className="text-display text-4xl sm:text-6xl text-bg leading-[0.88]">
                  {project.subtitle}
                </h2>
              </div>
            </div>
          </div>

          {/* Center Hex Badge */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto pointer-events-none">
            <div className="bg-bg shadow-2xl border border-ink/20 rounded-full px-5 py-2 flex items-center gap-3 font-mono text-xs uppercase tracking-mono">
              <span className="text-ink font-bold">Front</span>
              <span className="bg-red text-white px-2 py-0.5 rounded-full font-bold">
                {project.number}
              </span>
              <span className="text-ink-2 font-bold">Back</span>
            </div>
          </div>
        </header>

        {/* Overview Section */}
        <section className="py-20 bg-bg border-b border-ink/10">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-8">
              <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-3">
                <b>—</b>
                <span>Overview</span>
              </p>
              <p className="text-xl sm:text-2xl font-light text-ink leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="lg:col-span-4 bg-bg-2 border border-ink/15 rounded-2xl p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-4 font-mono text-xs mb-6">
                <div>
                  <dt className="text-ink-3 uppercase tracking-mono text-[10px]">Client</dt>
                  <dd className="font-bold text-ink mt-0.5">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-ink-3 uppercase tracking-mono text-[10px]">Location</dt>
                  <dd className="font-bold text-ink mt-0.5">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-ink-3 uppercase tracking-mono text-[10px]">Year</dt>
                  <dd className="font-bold text-ink mt-0.5">{project.date}</dd>
                </div>
                {project.website && (
                  <div>
                    <dt className="text-ink-3 uppercase tracking-mono text-[10px]">Live Site</dt>
                    <dd className="font-bold text-red mt-0.5">
                      <a
                        href={project.website.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline"
                      >
                        {project.website.label} <ExternalLink className="w-3 h-3" />
                      </a>
                    </dd>
                  </div>
                )}
              </dl>

              <div className="flex flex-wrap gap-1.5 border-t border-ink/10 pt-4">
                {project.pills?.map((p, i) => (
                  <span
                    key={i}
                    className="font-mono text-[10px] uppercase tracking-mono bg-bg border border-ink/10 px-2.5 py-1 rounded-full text-ink-2"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: What People See (The Front) */}
        <section id="front" className="py-24 bg-bg border-b border-ink/10">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12">
            <div className="mb-14">
              <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-2">
                <b>02</b>
                <span>The front</span>
              </p>
              <h2 className="text-display text-4xl sm:text-6xl text-ink">
                What <span className="italic font-normal text-red">people see.</span>
              </h2>
            </div>

            {/* Desktop Mockup Galleries */}
            <div className="flex flex-col gap-16 mb-20">
              {project.desktopScreens?.map((sc, i) => (
                <div key={i} className="border border-ink/20 rounded-2xl overflow-hidden shadow-2xl bg-white">
                  <div className="bg-bg-2 px-4 py-2.5 border-b border-ink/10 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-online/60" />
                    <span className="font-mono text-[11px] uppercase tracking-mono text-ink-3 ml-2 truncate">
                      {sc.alt || project.name}
                    </span>
                  </div>
                  <div className="relative w-full h-[360px] sm:h-[540px] lg:h-[700px] bg-bg-3">
                    <Image
                      src={sc.src}
                      alt={sc.alt || project.name}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 1680px) 100vw, 1680px"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Quote if present */}
            {project.quote && (
              <blockquote className="my-20 p-8 md:p-14 bg-bg-2 border-l-4 border-red rounded-r-2xl max-w-4xl mx-auto shadow-sm">
                <p className="text-2xl sm:text-3xl font-light italic text-ink leading-relaxed">
                  "{project.quote}"
                </p>
              </blockquote>
            )}

            {/* Mobile Screens Horizontal Strip */}
            {project.mobileScreens?.length > 0 && (
              <div className="mt-16 pt-12 border-t border-ink/10">
                <div className="flex items-center justify-between mb-8 font-mono text-xs uppercase tracking-mono">
                  <span className="text-red font-bold">— Mobile Experience</span>
                  <span className="text-ink-3">Scroll sideways →</span>
                </div>

                <div className="flex gap-6 overflow-x-auto pb-8 scroll-smooth no-scrollbar">
                  {project.mobileScreens.map((ph, i) => (
                    <figure key={i} className="flex-shrink-0 w-64 sm:w-72 flex flex-col group">
                      <div className="relative h-[480px] w-full rounded-3xl border-4 border-ink/20 overflow-hidden shadow-2xl bg-black">
                        <Image
                          src={ph.src}
                          alt={ph.alt || ph.caption}
                          fill
                          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-mono text-center text-ink-3">
                        {ph.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Section 03: What Keeps It Standing (The Back) */}
        <section id="back" data-night="" className="py-24 bg-night text-bg border-b border-night-line">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12">
            <div className="mb-14">
              <p className="font-mono text-xs uppercase tracking-mono text-amber flex items-center gap-2 mb-2">
                <b>03</b>
                <span>The back</span>
              </p>
              <h2 className="text-display text-4xl sm:text-6xl text-bg">
                What <span className="italic font-normal text-amber">keeps it standing.</span>
              </h2>
            </div>

            {/* Stats Metrics Grid */}
            {project.stats?.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mb-16">
                {project.stats.map((st, i) => (
                  <div
                    key={i}
                    className="p-4 bg-night-2 border border-night-line rounded-xl flex flex-col justify-between"
                  >
                    <b className="text-2xl lg:text-3xl font-bold font-mono text-bg">{st.val}</b>
                    <span className="font-mono text-[10px] uppercase tracking-mono text-dim mt-2">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Feature Modules Breakdown */}
            {project.groups?.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {project.groups.map((grp) => (
                  <div
                    key={grp.num}
                    className="p-6 bg-night-2 border border-night-line rounded-xl flex flex-col justify-between hover:border-amber transition-colors"
                  >
                    <div>
                      <div className="flex items-center justify-between font-mono text-xs text-dim mb-2">
                        <b className="text-amber">{grp.num}</b>
                        <span>{grp.count}</span>
                      </div>
                      <h3 className="text-lg font-bold text-bg mb-3">
                        {grp.title}
                      </h3>
                      <div className="w-full h-1 bg-night-3 rounded-full overflow-hidden mb-4">
                        <div
                          className="h-full bg-amber"
                          style={{ width: `${grp.percent}%` }}
                        />
                      </div>
                      <ul className="flex flex-col gap-1.5 text-xs text-dim list-disc list-inside">
                        {grp.items?.map((it, idx) => (
                          <li key={idx} className="leading-relaxed">
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Section 04: Next Shop on the Street */}
        <section id="next" className="py-20 bg-bg relative">
          <div className="max-w-[1680px] mx-auto px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <p className="font-mono text-xs uppercase tracking-mono text-red flex items-center gap-2 mb-2">
                <b>04</b>
                <span>Next on the street</span>
              </p>
              <h2 className="text-display text-4xl sm:text-6xl text-ink">
                Next <span className="italic font-normal text-red">shop.</span>
              </h2>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 mt-4 font-mono text-xs uppercase tracking-mono text-ink-2 hover:text-red transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to the street</span>
              </Link>
            </div>

            {/* Next Shop Card */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="w-full md:w-96 group block transition-transform hover:-translate-y-1"
            >
              <div className="h-8 bg-red text-white rounded-t-lg flex items-center justify-between px-4 font-mono text-[11px] tracking-mono uppercase shadow-md">
                <span className="font-bold">{nextProject.number}</span>
                <span>{nextProject.name}</span>
              </div>
              <div className="relative h-48 w-full border-2 border-t-0 border-ink/20 rounded-b-lg overflow-hidden bg-white shadow-xl">
                {nextProject.desktopScreens?.[0] && (
                  <Image
                    src={nextProject.desktopScreens[0].src}
                    alt={nextProject.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                  <span className="px-5 py-2 rounded-full bg-white text-ink font-mono text-xs uppercase tracking-mono font-bold shadow-lg flex items-center gap-2">
                    Enter Shop <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

