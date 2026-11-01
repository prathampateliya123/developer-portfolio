import PageRunner from '@/components/PageRunner';
import { workHtml } from '@/data/pages/work';

export const metadata = {
  title: 'Selected work — DEV IN THE HOOD',
  description: 'Selected projects: SaaS platforms, e-commerce, simulators and award-nominated front-ends, built from Luxembourg.',
};

export default function WorkPage() {
  return <PageRunner page="work" className="is-loading" html={workHtml} />;
}
