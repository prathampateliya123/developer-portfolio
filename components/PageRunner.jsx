'use client';

import { useEffect } from 'react';

export default function PageRunner({ page, className = 'is-loading', html }) {
  useEffect(() => {
    document.body.className = className;
    document.body.dataset.page = page;

    // Dispatch DOMContentLoaded or load if scripts are already present
    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }, [page, className]);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
