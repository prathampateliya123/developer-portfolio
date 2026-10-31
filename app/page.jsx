'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import HeroSplit from '@/components/HeroSplit';
import TheStreet from '@/components/TheStreet';
import TheFactory from '@/components/TheFactory';
import UnderTheHood from '@/components/UnderTheHood';
import Missions from '@/components/Missions';
import FinaleCTA from '@/components/FinaleCTA';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import Loader from '@/components/Loader';
import BackgroundEffects from '@/components/BackgroundEffects';

export default function Home() {
  const [loadingFinished, setLoadingFinished] = useState(false);

  return (
    <>
      {/* Intro Loader */}
      <Loader onComplete={() => setLoadingFinished(true)} />

      {/* Custom Follower Cursor */}
      <Cursor />

      {/* Global Background Paper Texture & Architecture Grid */}
      <BackgroundEffects />

      {/* Main Viewport Header */}
      <Header />

      <main id="main" className="relative z-10">
        {/* Chapter 01: Hero Front vs Back */}
        <HeroSplit />

        {/* Chapter 02: The Street Case Studies */}
        <TheStreet />

        {/* Chapter 03: The Factory Open Source Bundles */}
        <TheFactory />

        {/* Chapter 04: Under The Hood Player Profile */}
        <UnderTheHood />

        {/* Chapter 05: Missions Selector */}
        <Missions />

        {/* Chapter 06: Both Sides Finale Call-To-Action */}
        <FinaleCTA />
      </main>

      {/* Global Footer */}
      <Footer />
    </>
  );
}

