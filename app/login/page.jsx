import PageRunner from '@/components/PageRunner';
import { loginHtml } from '@/data/pages/login';

export const metadata = {
  title: 'Sign in · DEV IN THE HOOD',
  description: 'Dev in the hood Back Office login console.',
};

export default function LoginPage() {
  return (
    <>
      <link rel="stylesheet" href="/build/474.e533684e.css" />
      <link rel="stylesheet" href="/build/app.e7b0cd23.css" />
      <PageRunner
        className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased"
        controller="core--keyboard"
        html={loginHtml}
      />
    </>
  );
}
