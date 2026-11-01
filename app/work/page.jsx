import PageRunner from '@/components/PageRunner';
import { workHtml } from '@/data/pages/work';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: `Selected Work — ${siteConfig.name}`,
  description: `Selected web applications, platforms, and frontend projects by ${siteConfig.name}, ${siteConfig.role}.`,
};

export default function WorkPage() {
  return <PageRunner page="work" className="is-loading" html={workHtml} />;
}
