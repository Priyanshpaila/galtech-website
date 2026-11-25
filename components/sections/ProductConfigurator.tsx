"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ShieldCheck, Cpu, Sliders, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

const PANEL_MODELS = {
  '65': {
    size: '65"',
    resolution: "4K UHD (3840 x 2160)",
    glass: "4mm Anti-Glare Tempered Glass (7H Mohs)",
    touchPoints: "20 Points Infrared Touch",
    speakers: "2x 15W Front-Facing Stereo",
    os: "Android 13.0 + Optional Windows OPS Slot",
    idealFor: "Medium Huddle Rooms & Classrooms (10-20 people)",
    downloads: "Brochure_iPanel_65.pdf",
    image: "/images/galtech-ipanel.png",
  },
  '75': {
    size: '75"',
    resolution: "4K UHD (3840 x 2160)",
    glass: "4mm Optical Zero-Bonding Glass",
    touchPoints: "40 Points Ultra-Precise Touch",
    speakers: "2x 20W + Subwoofer Array",
    os: "Android 13.0 + Intel i7 Windows 11 Pro OPS",
    idealFor: "Executive Conference Rooms & Higher Ed (20-40 people)",
    downloads: "Brochure_iPanel_75.pdf",
    image: "/images/galtech-ipanel.png",
  },
  '86': {
    size: '86"',
    resolution: "4K UHD (3840 x 2160)",
    glass: "4mm Anti-Glare Zero-Bonding Toughened",
    touchPoints: "40 Points Ultra-Precise Touch",
    speakers: "4x 20W Studio Soundbar",
    os: "Android 13.0 + Intel i9 High-Perf OPS",
    idealFor: "Large Auditoriums & Command Centers (40+ people)",
    downloads: "Brochure_iPanel_86.pdf",
    image: "/images/galtech-ipanel.png",
  },
};

export default function ProductConfigurator() {
  const [activeSize, setActiveSize] = useState<'65' | '75' | '86'>('75');
  const currentModel = PANEL_MODELS[activeSize];

  return (
    <section className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            Hardware Configurator
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#101010] tight-heading tracking-tight mt-2 mb-4">
            Custom Tailored for Your <span className="text-amber-gradient">Space.</span>
          </h2>
          <p className="text-base text-[#6e6e73]">
            Select your venue scale to preview technical specifications and enterprise configuration options.
          </p>
        </div>

        {/* Size Selection Tabs */}
        <div className="flex items-center justify-center gap-3 mb-12">
          {(['65', '75', '86'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                activeSize === size
                  ? "bg-[#101010] text-white shadow-lg scale-105"
                  : "bg-[#f5f5f7] text-[#6e6e73] hover:text-[#101010] hover:bg-black/5"
              }`}
            >
              {size}" iPanel Pro
            </button>
          ))}
        </div>

        {/* Configurator Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#f5f5f7] p-8 md:p-12 rounded-[24px]">
          {/* Real Display Hardware Preview */}
          <div className="lg:col-span-6 bg-[#0b1220] rounded-2xl p-6 text-white border border-white/10 shadow-2xl relative overflow-hidden min-h-[380px] flex flex-col justify-between">
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff383c]" />
                <div className="w-3 h-3 rounded-full bg-[#feab30]" />
                <div className="w-3 h-3 rounded-full bg-[#34c759]" />
                <span className="text-xs font-mono ml-2 text-white/60">
                  GALTech iPanel Pro • {currentModel.size}
                </span>
              </div>
              <span className="text-[10px] bg-[#0088ff] px-2.5 py-0.5 rounded-full font-bold">
                Hardware Model
              </span>
            </div>

            {/* Display Image Preview */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSize}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-56 my-4 flex items-center justify-center"
              >
                <Image
                  src={currentModel.image}
                  alt={`GALTech ${currentModel.size} iPanel Pro`}
                  fill
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            {/* Footer Specs Info */}
            <div className="border-t border-white/10 pt-4 text-xs text-white/70 grid grid-cols-2 gap-4">
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Touch Engine</span>
                <span className="font-semibold text-white">{currentModel.touchPoints}</span>
              </div>
              <div>
                <span className="text-white/40 block text-[10px] uppercase">Glass Type</span>
                <span className="font-semibold text-[#feab30]">{currentModel.glass}</span>
              </div>
            </div>
          </div>

          {/* Detailed Spec List */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-bold text-[#101010] tracking-tight">
              Technical Specifications ({currentModel.size}")
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between py-2.5 border-b border-black/5">
                <span className="text-[#6e6e73]">Display Resolution</span>
                <span className="font-semibold text-[#101010]">{currentModel.resolution}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-black/5">
                <span className="text-[#6e6e73]">Glass Technology</span>
                <span className="font-semibold text-[#101010]">{currentModel.glass}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-black/5">
                <span className="text-[#6e6e73]">Touch Engine</span>
                <span className="font-semibold text-[#101010]">{currentModel.touchPoints}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-black/5">
                <span className="text-[#6e6e73]">Audio Output</span>
                <span className="font-semibold text-[#101010]">{currentModel.speakers}</span>
              </div>
              <div className="flex justify-between py-2.5 border-b border-black/5">
                <span className="text-[#6e6e73]">Operating System</span>
                <span className="font-semibold text-[#101010]">{currentModel.os}</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <a href="#contact">
                <MagneticButton variant="primary">
                  <span>Get Quotation for {currentModel.size}</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
