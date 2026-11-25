"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Monitor, Layers, Printer, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const SOLUTIONS = [
  {
    title: "Corporate Executive Boardrooms",
    tagline: "Ultra-HD Interactive Displays & Wireless Touch Collaboration",
    description: "Equip your executive C-suite with zero-latency 4K interactive flat panels, AI auto-framing video conferencing, and automated room control touch panels.",
    benefits: ["Zero Parallax Touch Whiteboarding", "Single Cable 65W Type-C Casting", "Seamless Zoom & Teams Integration"],
    icon: Monitor,
  },
  {
    title: "Smart Classrooms & STEM Labs",
    tagline: "Engaging Educational Tech for K-12 & Universities",
    description: "Transform traditional lecture halls into dynamic interactive learning environments with 40-point multi-touch panels and high-lumen InFocus laser projection.",
    benefits: ["Multi-Student Touch Whiteboard", "Cloud Content Storage & Sharing", "Anti-Glare Shatterproof Glass"],
    icon: Layers,
  },
  {
    title: "Toshiba Managed Print Services",
    tagline: "Automated Enterprise Printing Fleet Management",
    description: "Reduce document production costs by up to 30% with Toshiba e-STUDIO multi-function copiers, encrypted security hard drives, and automated toner replenishment.",
    benefits: ["Cost-Per-Page Fleet Optimization", "Dual-Scan 240 IPM Document Speed", "AES 256-Bit Data Encryption"],
    icon: Printer,
  },
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            GALTech Integration Architecture
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#101010] tight-heading tracking-tight mt-2 mb-4">
            Enterprise Workplace <span className="text-amber-gradient">Solutions.</span>
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-2xl">
            Turnkey technology solutions unifying interactive flat panels, managed printing, and laser projection hardware.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="space-y-12 mb-20">
          {SOLUTIONS.map((sol, idx) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card-enterprise p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0088ff]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#0088ff]">
                      Integration Suite {idx + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-[#101010] tight-heading tracking-tight mb-2">
                    {sol.title}
                  </h2>
                  <p className="text-sm font-semibold text-[#feab30] mb-4">{sol.tagline}</p>
                  <p className="text-base text-[#6e6e73] leading-relaxed mb-6">{sol.description}</p>

                  <div className="space-y-2 mb-8">
                    {sol.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs font-medium text-[#101010]">
                        <CheckCircle2 className="w-4 h-4 text-[#34c759]" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/#contact">
                    <MagneticButton variant="primary">
                      <span>Schedule Solution Assessment</span>
                      <ArrowRight className="w-4 h-4" />
                    </MagneticButton>
                  </Link>
                </div>

                {/* Right Visual Card */}
                <div className="lg:col-span-5 bg-[#0b1220] rounded-2xl p-6 text-white border border-white/10 shadow-xl min-h-[300px] flex flex-col justify-between">
                  <div className="flex justify-between items-center text-xs text-white/50 border-b border-white/10 pb-3">
                    <span>SOLUTION ARCHITECTURE</span>
                    <span className="text-[#00c2a8] font-bold">ACTIVE DEPLOYMENT</span>
                  </div>
                  <div className="my-6">
                    <div className="text-2xl font-bold mb-2">{sol.title}</div>
                    <div className="text-xs text-white/70">Complete hardware, software, SLA, and maintenance coverage.</div>
                  </div>
                  <div className="flex justify-between items-center text-xs text-white/60 border-t border-white/10 pt-3">
                    <span>On-Site SLA Included</span>
                    <span className="text-[#0088ff] font-semibold">GALTech Enterprise</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
