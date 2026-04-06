'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Gourmet Burger & Restaurant",
    category: "Food & Delivery",
    desc: "Online ordering platform with delivery and takeaway integration",
    image: "https://images.unsplash.com/photo-1565299623644-3a5a5e6c5d4b?w=800&h=600&fit=crop",
  },
  {
    title: "Senior 3D Illustrator",
    category: "Creative & 3D Design",
    desc: "Professional portfolio + Blender/ZBrush asset gallery",
    image: "https://images.unsplash.com/photo-1618005182384-a2c4c8f0f5f5?q=80&w=2070&auto=format&fit=crop", // 3D artist workspace
  },
  {
    title: "Electrical Retail Transformation",
    category: "E-commerce",
    desc: "Full digital channel for 30-year local retailer",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85ee64?w=800&h=600&fit=crop", // Modern retail store
  },
  {
    title: "Paddle Tennis Court Construction",
    category: "Construction & B2B",
    desc: "Lead generation site with project showcase",
    image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=800&h=600&fit=crop", // Modern sports court
  }
];

export default function Portfolio() {
  return (
    <section id="projects" className="py-24 bg-[#0A1428]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold tracking-tight mb-4">Featured Work</h2>
          <p className="text-xl text-gray-400">Custom solutions built for real business growth</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-[#111827] rounded-3xl overflow-hidden border border-cyan-500/10 hover:border-cyan-400 card-hover"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              </div>
              
              <div className="p-8">
                <p className="text-cyan-400 text-sm font-medium mb-2">{project.category}</p>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400">{project.desc}</p>
                <div className="mt-6 text-xs uppercase tracking-widest text-cyan-400/70">Launching Q2 2026 • Built with Next.js</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}