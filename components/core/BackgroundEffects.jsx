'use client';

export default function BackgroundEffects() {
  return (
    <>
      {/* Paper Grain Overlay */}
      <div className="paper-grain" aria-hidden="true" />

      {/* Grid Lines Overlay */}
      <div className="grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </>
  );
}

