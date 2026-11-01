'use client';

import { useState, useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

export default function Loader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [isClosing, setIsClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const duration = 1200; // 1.2s
    const startTime = Date.now();

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      // ease-out curve
      const eased = Math.round(progress * 100);
      setCount(eased);

      if (progress >= 1) {
        clearInterval(timer);
        setTimeout(() => {
          setIsClosing(true);
          setTimeout(() => {
            setHidden(true);
            if (onComplete) onComplete();
          }, 600);
        }, 150);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col justify-between p-8 md:p-12 bg-bg text-ink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isClosing ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div />

      {/* Center animated logo mark */}
      <div className="flex flex-col items-center justify-center">
        <svg
          className="w-24 h-24 md:w-32 md:h-32 text-red transition-all duration-500"
          viewBox="160 166 198 214"
          aria-hidden="true"
        >
          <path
            fill="none"
            stroke="#ea1d0f"
            strokeWidth="8"
            strokeDasharray="400"
            strokeDashoffset={400 - (count / 100) * 400}
            className="transition-all duration-75 ease-out"
            d="M252.08 340.03L195.98 299.09L195.98 233.9L252.08 202.81L252.08 174.77L167.18 220.25L167.18 321L252.08 371.87L252.08 340.03Z"
          />
          <path
            fill="none"
            stroke="#e97381"
            strokeWidth="8"
            strokeDasharray="400"
            strokeDashoffset={400 - (count / 100) * 400}
            className="transition-all duration-75 ease-out"
            d="M266.18 339.03L322.27 298.09L322.27 232.9L266.18 201.81L266.18 173.77L351.08 219.25L351.08 320L266.18 370.87L266.18 339.03Z"
          />
        </svg>
      </div>

      {/* Footer count & info */}
      <div className="flex items-end justify-between font-mono">
        <p className="text-xs uppercase tracking-widest text-ink-3">
          {siteConfig.name.toUpperCase()} — {siteConfig.role}
        </p>
        <div className="text-4xl md:text-6xl font-black tracking-tight text-ink">
          <span>{count}</span>
          <sup className="text-red text-base md:text-xl ml-1 font-bold">%</sup>
        </div>
      </div>
    </div>
  );
}
