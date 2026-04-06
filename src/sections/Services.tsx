'use client';

import { motion } from 'framer-motion';

const tiers = [
  {
    name: "Starter",
    price: "4,500",
    features: [
      "3–5 page business site or landing",
      "Next.js or WordPress",
      "Basic CMS + forms",
      "Mobile responsive + SEO",
      "4–5 weeks delivery"
    ],
    buttonText: "Choose Starter",
    popular: false
  },
  {
    name: "Growth",
    price: "10,500",
    features: [
      "8–10 pages + blog",
      "Shopify or custom store",
      "Payment integrations",
      "3 revision rounds + training",
      "5–7 weeks delivery"
    ],
    buttonText: "Choose Growth",
    popular: true
  },
  {
    name: "Premium",
    price: "19,000",
    features: [
      "Full custom web app / SaaS MVP",
      "Nest.js backend + PostgreSQL",
      "Auth, Stripe, dashboards",
      "7–9 weeks delivery"
    ],
    buttonText: "Choose Premium",
    popular: false
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#111827]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-4">Service Tiers</h2>
          <p className="text-xl text-gray-400">Value-based pricing. Fast delivery. Real results.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-[#0A1428] border rounded-3xl p-10 transition-all card-hover ${
                tier.popular 
                  ? 'border-cyan-400 scale-105' 
                  : 'border-slate-700 hover:border-cyan-500/50'
              }`}
            >
              {tier.popular && (
                <div className="inline-block bg-cyan-400 text-[#0A1428] text-sm font-bold px-5 py-1 rounded-full mb-6">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-3xl font-semibold mb-2">{tier.name}</h3>
              <div className="text-6xl font-bold text-cyan-400 mb-8">${tier.price}</div>

              <ul className="space-y-4 mb-12 text-gray-300">
                {tier.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full py-4 rounded-2xl font-semibold transition ${
                  tier.popular 
                    ? 'bg-cyan-400 text-[#0A1428] hover:bg-cyan-300' 
                    : 'bg-slate-800 hover:bg-slate-700'
                }`}
              >
                {tier.buttonText}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}