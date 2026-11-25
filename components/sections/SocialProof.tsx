"use client";

import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { name: "TOSHIBA", subtitle: "Managed Print Systems" },
  { name: "INFOCUS", subtitle: "Laser Projection" },
  { name: "GALTECH", subtitle: "Interactive Displays" },
  { name: "CISCO", subtitle: "Network Infrastructure" },
  { name: "DELL TECH", subtitle: "Enterprise Workstations" },
  { name: "MICROSOFT", subtitle: "Smart Classroom Ecosystem" },
];

export default function SocialProof() {
  return (
    <section className="py-20 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#ababb0]">
          Trusted by Fortune 500 Enterprises & Premier Academic Institutions
        </span>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
        {PARTNERS.map((partner, idx) => (
          <motion.div
            key={partner.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.08, duration: 0.5 }}
            className="flex flex-col items-center justify-center p-4 rounded-xl hover:bg-[#f5f5f7] transition-all group cursor-pointer"
          >
            <span className="text-lg font-bold tracking-tighter text-[#ababb0] group-hover:text-[#101010] transition-colors">
              {partner.name}
            </span>
            <span className="text-[10px] text-[#ababb0] group-hover:text-[#0088ff] transition-colors text-center mt-1">
              {partner.subtitle}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
