'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import About from '@/sections/About';
import Portfolio from '@/sections/Portfolio';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1428] text-white">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
    </main>
  );
}