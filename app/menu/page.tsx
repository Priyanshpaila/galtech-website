"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Sparkles, Monitor, Printer, Tv, Layers, PhoneCall } from "lucide-react";

const MENU_ITEMS = [
  {
    title: "Landing Page",
    path: "/",
    tagline: "High-Performance Native OS Canvas",
    icon: Sparkles,
    preview: {
      category: "HOMEPAGE",
      title: "Intelligent Hardware & Native OS",
      desc: "Continuous canvas blending minimalist native OS utility aesthetic with amber gradient highlights.",
      bg: "from-blue-600/20 via-indigo-900/30 to-black",
      stats: "500+ Enterprises Deployed",
      image: "/images/galtech-ipanel.png",
    },
  },
  {
    title: "Product Catalog",
    path: "/products",
    tagline: "4K Interactive Flat Panels, Copiers & Laser Projection",
    icon: Monitor,
    preview: {
      category: "HARDWARE PORTFOLIO",
      title: "GALTech iPanel Pro & Toshiba MFP",
      desc: "Enterprise grade hardware specifications, downloadable specs sheets, and authentic hardware imagery.",
      bg: "from-amber-600/20 via-slate-900 to-black",
      stats: "Optical Zero-Bonding 4K",
      image: "/images/galtech-ipanel.png",
    },
  },
  {
    title: "Toshiba Printing",
    path: "/products#toshiba-5518a",
    tagline: "Heavy-Duty Multi-Function Printing Systems",
    icon: Printer,
    preview: {
      category: "MANAGED PRINT SERVICES",
      title: "Toshiba e-STUDIO Multi-Function Copiers",
      desc: "55 PPM high-speed printing, dual-scan document feeders, and enterprise data encryption.",
      bg: "from-amber-700/30 via-[#101010] to-black",
      stats: "55 PPM Print Speed",
      image: "/images/toshiba-copier.jpg",
    },
  },
  {
    title: "InFocus Projection",
    path: "/products#infocus-laser",
    tagline: "High-Lumen Quantum Laser Projectors",
    icon: Tv,
    preview: {
      category: "LASER PROJECTION",
      title: "InFocus Quantum Laser Systems",
      desc: "30,000 hour maintenance-free laser light source, 6500 ANSI lumens for large venues.",
      bg: "from-purple-600/20 via-[#101010] to-black",
      stats: "30,000 Hours Lifespan",
      image: "/images/infocus-projector.jpg",
    },
  },
  {
    title: "Enterprise Solutions",
    path: "/solutions",
    tagline: "Boardrooms, Classrooms & Managed Printing",
    icon: Layers,
    preview: {
      category: "INTEGRATION SUITES",
      title: "Turnkey Audiovisual Architecture",
      desc: "Tailored smart room installations, AI voice tracking audio, wireless casting, and cloud printing management.",
      bg: "from-teal-600/20 via-slate-900 to-black",
      stats: "Zero-Latency Wireless Casting",
      image: "/images/galtech-ipanel.png",
    },
  },
  {
    title: "Book Live Demo",
    path: "/#contact",
    tagline: "Schedule On-Site Demonstration or Quote",
    icon: PhoneCall,
    preview: {
      category: "CONSULTATION",
      title: "Experience Hardware On-Site",
      desc: "Get a live demo unit dispatched to your facility or speak with an enterprise specialist.",
      bg: "from-blue-600/30 via-[#101010] to-black",
      stats: "2-Hour Response Time",
      image: "/images/galtech-ipanel.png",
    },
  },
];

export default function DedicatedMenuPage() {
  const router = useRouter();
  const [activeHoverIndex, setActiveHoverIndex] = useState<number | null>(null);

  const activeItem = activeHoverIndex !== null ? MENU_ITEMS[activeHoverIndex] : MENU_ITEMS[0];

  return (
    <div className="fixed inset-0 z-[999] bg-white text-[#101010] overflow-y-auto flex flex-col justify-between p-6 md:p-12">
      {/* Top Header Controls */}
      <div className="flex items-center justify-between max-w-7xl mx-auto w-full mb-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#101010] text-white font-bold flex items-center justify-center text-sm">
            GT
          </div>
          <span className="font-bold text-lg tracking-tight">GALTECH Navigation</span>
        </Link>

        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-[#f5f5f7] hover:bg-black/10 px-5 py-2.5 rounded-full text-xs font-bold text-[#101010] tracking-wider transition-all"
        >
          <span>CLOSE</span>
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto py-8">
        {/* Left Column - Massive Staggered Typography Links */}
        <div className="lg:col-span-7 space-y-2">
          {MENU_ITEMS.map((item, idx) => {
            const isHovered = activeHoverIndex === idx;
            const isAnyHovered = activeHoverIndex !== null;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: isAnyHovered && !isHovered ? 0.25 : 1, x: 0 }}
                transition={{ delay: idx * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onMouseEnter={() => setActiveHoverIndex(idx)}
                onMouseLeave={() => setActiveHoverIndex(null)}
              >
                <Link
                  href={item.path}
                  className="group block py-2 flex items-baseline justify-between transition-all"
                >
                  <div>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-bold tracking-tighter tight-heading-xl text-[#101010] group-hover:text-[#0088ff] transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs md:text-sm text-[#6e6e73] font-medium tracking-tight mt-1">
                      {item.tagline}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-black/10 group-hover:border-[#0088ff] group-hover:bg-[#0088ff] group-hover:text-white flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Right Column - Dynamic Visual Hover Preview Panel with Real Product Photo */}
        <div className="lg:col-span-5 hidden lg:block">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
              className={`p-8 rounded-[24px] bg-gradient-to-br ${activeItem.preview.bg} text-white border border-white/10 shadow-2xl min-h-[460px] flex flex-col justify-between relative overflow-hidden`}
            >
              <div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider text-white/80 uppercase mb-4">
                  <activeItem.icon className="w-3.5 h-3.5 text-[#0088ff]" />
                  <span>{activeItem.preview.category}</span>
                </div>

                <div className="relative w-full h-44 rounded-xl overflow-hidden my-3 bg-black/40 border border-white/10 flex items-center justify-center p-2">
                  <Image
                    src={activeItem.preview.image}
                    alt={activeItem.preview.title}
                    fill
                    className="object-contain p-2"
                  />
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-2">
                  {activeItem.preview.title}
                </h3>

                <p className="text-xs text-white/70 leading-relaxed mb-4">
                  {activeItem.preview.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-white/50 uppercase tracking-widest block">
                    Feature Highlight
                  </span>
                  <span className="text-sm font-semibold text-[#feab30]">
                    {activeItem.preview.stats}
                  </span>
                </div>

                <Link href={activeItem.path}>
                  <button className="bg-white text-[#101010] hover:bg-[#0088ff] hover:text-white px-4 py-2 rounded-full text-xs font-semibold transition-all">
                    Navigate →
                  </button>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between text-xs text-[#6e6e73] border-t border-black/5 pt-6 gap-4">
        <div>GALTech Infosolutions • Enterprise Hardware & Native OS Spec</div>
        <div className="flex gap-6">
          <Link href="/products" className="hover:text-[#101010]">Products</Link>
          <Link href="/solutions" className="hover:text-[#101010]">Solutions</Link>
          <Link href="/#contact" className="hover:text-[#101010]">Contact</Link>
        </div>
      </div>
    </div>
  );
}
