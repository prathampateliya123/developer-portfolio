import PageRunner from '@/components/PageRunner';
import { loginHtml } from '@/data/pagesHtml';

export const metadata = {
  title: 'Sign in · DEV IN THE HOOD',
  description: 'Dev in the hood Back Office login console.',
};

export default function LoginPage() {
  return (
    <PageRunner
      page="login"
      className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased"
      html={loginHtml}
    />
  );
}
