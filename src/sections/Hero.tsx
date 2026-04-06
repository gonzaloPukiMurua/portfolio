'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="pt-24 pb-20 min-h-screen flex items-center hero-bg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/5 border border-cyan-400/30 rounded-full px-4 py-1.5 mb-8 text-sm text-cyan-400"
        >
          Custom Code Architects • US • AU • NZ
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter mb-6"
        >
          Custom Code That<br />Outperforms AI Builders
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12"
        >
          High-conversion websites and web applications for ambitious SMBs.<br />
          Full ownership. Blazing performance. Delivered in weeks.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={() => scrollTo('contact')}
            className="glow-cyan bg-white text-[#0A1428] px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-gray-100 transition"
          >
            Start Your Project
          </button>
          <button 
            onClick={() => scrollTo('services')}
            className="border border-cyan-400 px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-white/5 transition"
          >
            View Service Tiers
          </button>
        </motion.div>

        {/* Trust line */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-sm text-gray-500 mt-10"
        >
          Argentina-based • Remote for US, Australia & New Zealand clients
        </motion.p>
      </div>
    </section>
  );
}