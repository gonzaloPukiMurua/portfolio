'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ 
    behavior: 'smooth',
    block: 'start'
  });
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0A1428]/95 backdrop-blur-md z-50 border-b border-cyan-500/10">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-white">Gelum Digital</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => scrollTo('services')} className="hover:text-cyan-400 transition">Services</button>
          <button onClick={() => scrollTo('about')} className="hover:text-cyan-400 transition">About</button>
          <button onClick={() => scrollTo('projects')} className="hover:text-cyan-400 transition">Work</button>
          <button onClick={() => scrollTo('contact')} className="hover:text-cyan-400 transition">Contact</button>
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className="hidden md:block bg-cyan-400 hover:bg-cyan-300 text-[#0A1428] px-6 py-2.5 rounded-2xl font-semibold transition"
        >
          Get a Quote
        </button>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-3xl text-white z-50 relative"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Smoother Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }} // Premium easing
            className="md:hidden bg-[#0A1428] border-t border-cyan-500/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-10 gap-6 text-lg">
              <button onClick={() => handleLinkClick('services')} className="text-left py-3 hover:text-cyan-400 transition">Services</button>
              <button onClick={() => handleLinkClick('about')} className="text-left py-3 hover:text-cyan-400 transition">About</button>
              <button onClick={() => handleLinkClick('projects')} className="text-left py-3 hover:text-cyan-400 transition">Work</button>
              <button onClick={() => handleLinkClick('contact')} className="text-left py-3 hover:text-cyan-400 transition">Contact</button>
              
              <button 
                onClick={() => handleLinkClick('contact')}
                className="mt-6 bg-cyan-400 text-[#0A1428] py-4 rounded-2xl font-semibold"
              >
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}