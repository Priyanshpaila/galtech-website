"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AmberIntro() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs font-semibold tracking-widest text-[#6e6e73] uppercase mb-4 block">
            Engineered for Precision & Fluidity
          </span>

          {/* Huge Amber Gradient Display Typography */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1.05] tight-heading max-w-5xl mx-auto mb-8">
            <span className="text-amber-gradient">
              Powering the modern intelligent office with zero latency, zero compromise.
            </span>
          </h2>

          <p className="text-lg md:text-2xl text-[#6e6e73] font-normal max-w-3xl mx-auto leading-relaxed tracking-tight">
            From 4K multi-touch interactive panels and cloud-connected Toshiba copy engines to high-lumen InFocus laser projectors, we unify hardware, firmware, and enterprise services into one seamless ecosystem.
          </p>
        </motion.div>
      </div>

      {/* Spacious 120px+ white space transition into Snow Gray */}
      <div className="h-28" />
    </section>
  );
}
