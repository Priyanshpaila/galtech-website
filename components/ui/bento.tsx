"use client";

import React from "react";
import Image from "next/image";
import { clsx } from "clsx";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function FUIBentoGridDark() {
  return (
    <div className="py-24 container mx-auto px-6 md:px-12 flex flex-col bg-white">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            Hardware Portfolio • Bento Showcase
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#101010] mt-2">
            Enterprise Technology <span className="text-amber-gradient">Hardware.</span>
          </h2>
        </div>
        <p className="max-w-md text-sm md:text-base text-[#6e6e73] font-normal leading-relaxed">
          Engineered for high-impact operations. Explore our flagship 4K UHD interactive panels, Toshiba copy engines, and InFocus laser projectors.
        </p>
      </div>

      {/* Static Curated Bento Grid (5 Cards Fixed Architecture) */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-6 lg:grid-rows-2">
        {/* Card 1: GALTech iPanel Pro 86" */}
        <BentoCard
          eyebrow="FLAGSHIP DISPLAY"
          title={'GALTech iPanel Pro 86" 4K UHD'}
          description="Optical zero-bonding glass with 40-point touch, dual OS (Android 13 + Windows 11 Pro), anti-glare Mohs 7H toughened surface, and front soundbar array."
          graphic={
            <div className="absolute inset-0 bg-[#0b1220] flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/galtech-ipanel.png"
                  alt="GALTech iPanel Pro 86 inch"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          }
          productId="ipanel-75"
          className="max-lg:rounded-t-3xl lg:col-span-3 lg:rounded-tl-3xl border border-black/5"
        />

        {/* Card 2: Toshiba e-STUDIO 5518A */}
        <BentoCard
          eyebrow="MANAGED PRINTING"
          title="Toshiba e-STUDIO 5518A Copier"
          description="Heavy-duty enterprise multi-function printing system featuring 55 PPM high-speed printing, dual-scan document feeding, and 256-bit HDD security encryption."
          graphic={
            <div className="absolute inset-0 bg-[#080c14] flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/toshiba-copier.jpg"
                  alt="Toshiba e-STUDIO Copier"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          }
          productId="toshiba-5518a"
          className="lg:col-span-3 lg:rounded-tr-3xl border border-black/5"
        />

        {/* Card 3: InFocus Quantum Laser Projector */}
        <BentoCard
          eyebrow="LASER PROJECTION"
          title="InFocus Quantum Laser 6500"
          description="30,000 hours maintenance-free solid-state laser projection delivering 6,500 ANSI lumens for large auditoriums."
          graphic={
            <div className="absolute inset-0 bg-[#090e17] flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/infocus-projector.jpg"
                  alt="InFocus Quantum Laser Projector"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          }
          productId="infocus-laser"
          className="lg:col-span-2 lg:rounded-bl-3xl border border-black/5"
        />

        {/* Card 4: Smart Classroom Suite */}
        <BentoCard
          eyebrow="INTELLIGENT SUITE"
          title="Turnkey Smart Classroom"
          description="Wireless 4K multi-device casting, AI voice tracking camera, interactive whiteboard software, and cloud device control."
          graphic={
            <div className="absolute inset-0 bg-[#0a101d] flex items-center justify-center p-6">
              <div className="relative w-full h-full">
                <Image
                  src="/images/galtech-ipanel.png"
                  alt="Smart Classroom Ecosystem"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          }
          productId="smart-suite"
          className="lg:col-span-2 border border-black/5"
        />

        {/* Card 5: Pan-India Managed SLA */}
        <BentoCard
          eyebrow="ENTERPRISE SLA"
          title="Pan-India Service & Support"
          description="On-site 3-year comprehensive warranty, rapid replacement dispatch, and 24/7 dedicated enterprise technical assistance."
          graphic={
            <div className="absolute inset-0 bg-[#05080e] flex items-center justify-center p-6">
              <div className="relative w-full h-full opacity-90">
                <Image
                  src="/images/toshiba-copier.jpg"
                  alt="GALTech Enterprise SLA"
                  fill
                  className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          }
          productId="toshiba-5518a"
          className="max-lg:rounded-b-3xl lg:col-span-2 lg:rounded-br-3xl border border-black/5"
        />
      </div>
    </div>
  );
}

export function BentoCard({
  dark = true,
  className = "",
  eyebrow,
  title,
  description,
  graphic,
  productId = "ipanel-75",
}: {
  dark?: boolean;
  className?: string;
  eyebrow: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  graphic?: React.ReactNode;
  productId?: string;
}) {
  return (
    <motion.div
      initial="idle"
      whileHover="active"
      variants={{ idle: {}, active: {} }}
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-[#101010] text-white shadow-xl transform-gpu border border-white/10"
      )}
    >
      <div className="relative h-[22rem] shrink-0 overflow-hidden">
        {graphic}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent opacity-90 pointer-events-none" />
      </div>

      <div className="relative p-6 sm:p-8 z-20 isolate mt-[-70px] bg-[#101010]/95 backdrop-blur-xl text-white flex flex-col justify-between flex-1">
        <div>
          <span className="text-[11px] font-mono font-bold tracking-wider text-[#0088ff] uppercase">
            {eyebrow}
          </span>
          <h3 className="mt-1 text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#feab30] transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-white/70 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
          <Link
            href={`/products/${productId}`}
            className="text-xs font-semibold text-[#0088ff] hover:text-white flex items-center gap-1 transition-colors"
          >
            <span>View Specifications</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-[10px] text-white/40 font-mono">GALTech Certified</span>
        </div>
      </div>
    </motion.div>
  );
}
