import PageRunner from '@/components/PageRunner';
import { homeHtml } from '@/data/pages/home';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return <PageRunner page="home" className="is-loading" html={homeHtml} />;
}
