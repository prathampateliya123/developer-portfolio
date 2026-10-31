import { notFound } from 'next/navigation';
import PageRunner from '@/components/PageRunner';
import { projectsHtml } from '@/data/pagesHtml';

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
    title: `${name} — DEV IN THE HOOD`,
    description: `Project case study: ${name} — DEV IN THE HOOD, Jul6art, full-stack developer in Luxembourg.`,
  };
}

export default function ProjectCasePage({ params }) {
  const html = projectsHtml[params.slug];
  if (!html) notFound();

  return <PageRunner page="project" className="is-loading" html={html} />;
}
