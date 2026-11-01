import PageRunner from '@/components/PageRunner';
import { contactHtml } from '@/data/pages/contact';

export const metadata = {
  title: 'Contact — DEV IN THE HOOD',
  description: "Let's talk. Full-stack development, Symfony platforms and front-end work — from Luxembourg, on site or remote.",
};

export default function ContactPage() {
  return <PageRunner page="contact" className="is-loading" html={contactHtml} />;
}
