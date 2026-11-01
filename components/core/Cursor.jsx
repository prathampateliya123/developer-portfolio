'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [label, setLabel] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isNight, setIsNight] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor on non-touch screens
    if (window.matchMedia('(hover: none)').matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;

      const nightSection = target.closest('[data-night]');
      setIsNight(!!nightSection);

      const shop = target.closest('[data-shop]');
      const clickable = target.closest('a, button, input, textarea, [data-hover]');

      if (shop) {
        setLabel('View');
        setIsHovered(true);
      } else if (clickable) {
        setLabel('');
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest('a, button, [data-shop], input, textarea')) {
        setIsHovered(false);
        setLabel('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
      style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
    >
      {/* Outer Ring */}
      <div
        className={`flex items-center justify-center rounded-full border transition-all duration-300 ${
          isHovered
            ? 'w-16 h-16 bg-red border-red scale-110 shadow-lg'
            : isNight
            ? 'w-9 h-9 border-bg/40 bg-transparent'
            : 'w-9 h-9 border-ink/30 bg-transparent'
        }`}
      >
        {label && (
          <span className="text-[10px] font-mono tracking-widest text-white uppercase font-bold animate-pulse">
            {label}
          </span>
        )}
      </div>

      {/* Inner Dot */}
      {!isHovered && (
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full ${
            isNight ? 'bg-bg' : 'bg-ink'
          }`}
        />
      )}
    </div>
  );
}

