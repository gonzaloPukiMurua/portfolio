/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: "Gourmet Burger & Restaurant",
    category: "Food & Delivery",
    description: "High-converting online ordering platform with delivery and takeaway integration.",
    image: "/portfolio/burger.jpg", // replace with real image
    metrics: "98 PageSpeed • +340% Orders",
    tags: ["Next.js", "Tailwind", "Stripe"]
  },
  {
    id: 2,
    title: "Senior 3D Illustrator Portfolio",
    category: "Creative & 3D Design",
    description: "Professional showcase with Blender/ZBrush asset gallery and optimisation tools.",
    image: "/portfolio/3d-artist.jpg",
    metrics: "100 PageSpeed • Lead form +42%",
    tags: ["Framer Motion", "3D Optimised"]
  },
  {
    id: 3,
    title: "Electrical Retail Transformation",
    category: "E-commerce",
    description: "Full digital channel for 30-year local retailer with inventory sync.",
    image: "/portfolio/electrical.jpg",
    metrics: "96 PageSpeed • Revenue +180%",
    tags: ["Next.js", "PostgreSQL"]
  },
  {
    id: 4,
    title: "Premium Paddle Tennis Courts",
    category: "Construction & B2B",
    description: "Lead generation site with project gallery and China-sourced material showcase.",
    image: "/portfolio/padel.jpg",
    metrics: "97 PageSpeed • +270% Leads",
    tags: ["Custom CMS", "SEO"]
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <section className="py-24 bg-[#0A1428] text-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight mb-4">Recent Work</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Custom solutions that outperform AI builders and deliver measurable business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-[#111827] rounded-3xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-all duration-300 border border-cyan-500/10 hover:border-cyan-500/30"
            >
              <div className="relative h-80">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-cyan-400 text-sm font-medium mb-1">{project.category}</p>
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 line-clamp-2 mb-4">{project.description}</p>
                  <div className="text-sm text-emerald-400 font-medium">{project.metrics}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}