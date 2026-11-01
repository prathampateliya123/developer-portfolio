export default function PageRunner({ page, className = 'is-loading', controller, html }) {
  const scriptContent = `
    document.body.className = ${JSON.stringify(className)};
    ${page ? `document.body.dataset.page = ${JSON.stringify(page)};` : `delete document.body.dataset.page;`}
    ${controller ? `document.body.dataset.controller = ${JSON.stringify(controller)};` : `delete document.body.dataset.controller;`}
  `;

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: scriptContent }} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
