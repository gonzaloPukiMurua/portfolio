'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#0A1428]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-5xl font-bold tracking-tight mb-8">Built by a Dedicated Two-Person Team</h2>
            <p className="text-lg text-gray-400 mb-6">
              I’m Gonzalo — full-stack developer specialized in MERN, Next.js 14 (App Router), Nest.js, PostgreSQL, Docker, and deployments on Vercel/AWS.
            </p>
            <p className="text-lg text-gray-400 mb-6">
              My partner brings professional UX/UI design expertise and experience selling UI Kits.
            </p>
            <p className="text-lg text-gray-400">
              We work remotely with strong async communication so US, Australia & New Zealand clients get reliable progress updates without daily meetings.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#111827] p-10 rounded-3xl border border-cyan-500/10"
          >
            <h3 className="font-semibold mb-6 text-cyan-400 text-xl">Our Stack</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Next.js 14 App Router</div>
              <div>Tailwind + Figma</div>
              <div>Nest.js & PostgreSQL</div>
              <div>Shopify Custom Stores</div>
              <div>Docker & Vercel/AWS</div>
              <div>Stripe Integrations</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}