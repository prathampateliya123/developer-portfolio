'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, Lock, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [batsignalActive, setBatsignalActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign-up is closed: accounts are provisioned via console.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row font-sans selection:bg-red selection:text-white">
      {/* Left Front / Batsignal Stage */}
      <div
        className="md:w-1/2 bg-bg text-ink p-8 md:p-14 flex flex-col justify-between border-b md:border-b-0 md:border-r border-ink/10 relative overflow-hidden"
        onMouseEnter={() => setBatsignalActive(true)}
        onMouseLeave={() => setBatsignalActive(false)}
      >
        {/* Brand */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <svg viewBox="160 166 198 214" className="w-10 h-10" aria-hidden="true">
              <path fill="#ea1d0f" d="M252.08 340.03L195.98 299.09L195.98 233.9L252.08 202.81L252.08 174.77L167.18 220.25L167.18 321L252.08 371.87L252.08 340.03Z" />
              <path fill="#e97381" d="M266.18 339.03L322.27 298.09L322.27 232.9L266.18 201.81L266.18 173.77L351.08 219.25L351.08 320L266.18 370.87L266.18 339.03Z" />
            </svg>
            <div className="relative w-28 h-8">
              <Image src="/img/logo-day.png" alt="logo" fill className="object-contain" />
            </div>
          </Link>
          <span className="font-mono text-xs uppercase tracking-mono text-ink-3">
            01 / Welcome
          </span>
        </div>

        {/* Batsignal Illustration SVG */}
        <div className="my-8 flex justify-center">
          <svg
            className={`w-full max-w-md h-auto transition-all duration-700 ${
              batsignalActive ? 'scale-105 filter drop-shadow-xl' : ''
            }`}
            viewBox="0 0 720 262"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="dith-batsignal-beam" x1="84.8" y1="140" x2="150" y2="60" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#ffb547" stopOpacity="0.75" />
                <stop offset="1" stopColor="#ffb547" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <circle cx="470" cy="190" r="92" fill="#ea1d0f" />
            <rect x="40" y="64" width="150" height="16" rx="8" fill="#eae6dd" />
            <rect x="82" y="50" width="70" height="22" rx="11" fill="#eae6dd" />

            {/* Batsignal Tower */}
            <g className="cursor-pointer">
              <rect x="0" y="170" width="104" height="130" fill="#ded8cc" />
              <g fill="#eae6dd">
                <rect x="14" y="186" width="10" height="14" />
                <rect x="38" y="186" width="10" height="14" />
                <rect x="62" y="186" width="10" height="14" />
                <rect x="14" y="216" width="10" height="14" />
                <rect x="62" y="216" width="10" height="14" />
              </g>
              <rect x="38" y="216" width="10" height="14" fill="#ea1d0f" opacity="0.55" />
              <rect x="58" y="160" width="24" height="10" fill="#16130f" />
              <g transform="rotate(-51 75 152)">
                <rect x="60" y="144" width="30" height="16" rx="3" fill="#16130f" />
                <rect x="88" y="145" width="5" height="14" rx="1.5" fill="#ffb547" />
              </g>
            </g>

            {/* Signal Light Beam */}
            <g>
              <polygon points="79.8 135.9 103.5 22.1 196.5 97.9 89.8 144.1" fill="url(#dith-batsignal-beam)" />
              <ellipse cx="150" cy="60" rx="78" ry="40" fill="#ffb547" fillOpacity="0.28" />
              <ellipse cx="150" cy="60" rx="64" ry="32" fill="#ffb547" />
              <path
                transform="translate(150 61.5) scale(.98)"
                fill="#16130f"
                d="M0 -6 L3 -7 L5 -16 L7.5 -6 C16 -8 26 -12 34 -18 C42 -12 48 -6 50 3 Q44 0 40 5 Q35 2 30 9 Q23 5 17 11 Q10 8 6 13 Q3 14 0 19 Q-3 14 -6 13 Q-10 8 -17 11 Q-23 5 -30 9 Q-35 2 -40 5 Q-44 0 -50 3 C-48 -6 -42 -12 -34 -18 C-26 -12 -16 -8 -7.5 -6 L-5 -16 L-3 -7 Z"
              />
            </g>

            {/* Skyline Buildings */}
            <rect x="118" y="214" width="82" height="86" fill="#ded8cc" />
            <rect x="214" y="132" width="116" height="168" fill="#ded8cc" />
            <rect x="344" y="196" width="72" height="104" fill="#ded8cc" />
            <rect x="430" y="118" width="110" height="182" fill="#ded8cc" />
            <rect x="554" y="176" width="86" height="124" fill="#ded8cc" />
            <rect x="654" y="150" width="66" height="150" fill="#ded8cc" />
            <rect x="0" y="258" width="720" height="4" fill="#16130f" />
          </svg>
        </div>

        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-mono text-ink hover:text-red transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to the street</span>
        </Link>
      </div>

      {/* Right Back / Login Form */}
      <div className="md:w-1/2 bg-slate-900 p-8 md:p-14 flex flex-col justify-center items-center relative">
        <div className="w-full max-w-md">
          {/* Night logo */}
          <div className="flex justify-center mb-8">
            <div className="relative w-36 h-10">
              <Image src="/img/logo-night.png" alt="dev in the hood" fill className="object-contain" />
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-8 shadow-2xl backdrop-blur">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                <Lock className="w-5 h-5 text-red" />
                Sign in
              </h1>
              <p className="font-mono text-xs text-slate-400 mt-1">ssh devinthehood.com/admin</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-mono text-xs uppercase tracking-mono text-slate-300 mb-1.5" htmlFor="username">
                  Email
                </label>
                <input
                  id="username"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@devinthehood.com"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red font-sans"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-mono text-slate-300 mb-1.5" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-red font-sans pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 px-3 flex items-center text-slate-400 hover:text-white"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between font-mono text-xs">
                <label className="flex items-center gap-2 cursor-pointer text-slate-400 hover:text-slate-200">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded accent-red"
                  />
                  <span>Remember me</span>
                </label>
                <span className="text-red hover:underline cursor-pointer">
                  Forgot password?
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-red hover:bg-red-ink text-white font-mono text-xs uppercase tracking-mono font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.02]"
              >
                Sign in
              </button>
            </form>
          </div>

          {/* Closed notice */}
          <p className="font-mono text-xs text-center text-slate-500 uppercase tracking-mono mt-6">
            Sign-up is closed: accounts are made from the console.
          </p>
          <p className="font-mono text-[11px] text-center text-slate-600 uppercase tracking-mono mt-2">
            © 2026 Dev in the hood — Jul6art
          </p>
        </div>
      </div>
    </div>
  );
}

