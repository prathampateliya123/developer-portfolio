import PageRunner from '@/components/PageRunner';
import { contactHtml } from '@/data/pages/contact';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: `Contact — ${siteConfig.name}`,
  description: `Get in touch with ${siteConfig.name}, ${siteConfig.role}. Available for frontend development roles, React projects, and collaborations.`,
};

export default function ContactPage() {
  return <PageRunner page="contact" className="is-loading" html={contactHtml} />;
}
