import { notFound } from 'next/navigation';
import PageRunner from '@/components/PageRunner';
import { projectsHtml } from '@/data/pages/projects';
import { siteConfig } from '@/data/siteConfig';

const projectTitles = {
  cegeta: 'Cegeta',
  cereezer: 'Cereezer',
  tradebot: 'Tradebot',
  tessera: 'Tessera',
  devingame: 'DEV IN GAME',
  'dev-in-live': 'DEV IN LIVE',
  devinthehood: 'DEV IN THE HOOD',
  superp: 'SupERP',
  'letz-kola': "Lët'z Kola",
  'provencale-webshop': 'Webshop Provençale',
  enoprimes: 'Enoprimes simulator',
  'sms-group': 'SMS group',
  iroom: 'iRoom',
};

export function generateStaticParams() {
  return Object.keys(projectsHtml).map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }) {
  const name = projectTitles[params.slug] || params.slug;
  return {
    title: `${name} — Case Study | ${siteConfig.name}`,
    description: `Case study: ${name} — Featured project in ${siteConfig.name}'s portfolio (${siteConfig.role}).`,
  };
}

export default function ProjectCasePage({ params }) {
  const html = projectsHtml[params.slug];
  if (!html) notFound();

  return <PageRunner page="project" className="is-loading" html={html} />;
}
