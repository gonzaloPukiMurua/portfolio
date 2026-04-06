'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const response = await fetch('https://formspree.io/f/xeepveea', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus('success');
      setFormData({ name: '', email: '', service: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#111827]">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold tracking-tight mb-6">Ready to Launch Your Project?</h2>
          <p className="text-xl text-gray-400 mb-12">
            Tell us about your needs. We reply within 4 business hours.
          </p>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-[#0A1428] border border-cyan-500/20 rounded-2xl px-6 py-4 focus:border-cyan-400 outline-none"
            />
            <input
              type="email"
              placeholder="Business Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-[#0A1428] border border-cyan-500/20 rounded-2xl px-6 py-4 focus:border-cyan-400 outline-none"
            />
          </div>

          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full bg-[#0A1428] border border-cyan-500/20 rounded-2xl px-6 py-4 focus:border-cyan-400 outline-none"
            required
          >
            <option value="">Select Service Interest</option>
            <option value="Starter">Starter ($4,500)</option>
            <option value="Growth">Growth ($10,500)</option>
            <option value="Premium">Premium ($19,000)</option>
            <option value="Other">Other / Custom</option>
          </select>

          <textarea
            placeholder="Tell us about your project..."
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="w-full bg-[#0A1428] border border-cyan-500/20 rounded-3xl px-6 py-4 focus:border-cyan-400 outline-none resize-y"
          />

          <button
            type="submit"
            disabled={status === 'loading'}
            className="glow-cyan w-full bg-cyan-400 hover:bg-cyan-300 text-[#0A1428] py-5 rounded-2xl font-semibold text-lg transition disabled:opacity-70"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message & Book Call'}
          </button>
        </form>

        {status === 'success' && <p className="text-emerald-400 mt-6">Thank you! We’ll contact you shortly.</p>}
        {status === 'error' && <p className="text-red-400 mt-6">Something went wrong. Please try again.</p>}
      </div>
    </section>
  );
}