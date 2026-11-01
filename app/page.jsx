import PageRunner from '@/components/PageRunner';
import { homeHtml } from '@/data/pages/home';

export const metadata = {
  title: 'DEV IN THE HOOD — Jul6art, full-stack developer',
  description: 'Full-stack developer in Luxembourg. Symfony platforms, API-first architectures, e-commerce and front-end motion work.',
};

export default function HomePage() {
  return <PageRunner page="home" className="is-loading" html={homeHtml} />;
}
