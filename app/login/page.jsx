import PageRunner from '@/components/PageRunner';
import { loginHtml } from '@/data/pages/login';
import { siteConfig } from '@/data/siteConfig';

export const metadata = {
  title: `Sign in · ${siteConfig.name}`,
  description: `${siteConfig.name} Back Office console.`,
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
