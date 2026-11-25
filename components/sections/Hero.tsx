"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroVideoCanvas from "@/components/media/HeroVideoCanvas";

interface HeroProps {
  videoSrc?: string;
}

export default function Hero({ videoSrc = "/videos/hero-background.mp4" }: HeroProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end bg-black text-white overflow-hidden pb-14 px-6 md:px-12">
      {/* 100% Fullscreen Video Layer - Completely Overlay-Free */}
      {!hasVideoError ? (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          onError={() => setHasVideoError(true)}
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 transition-opacity duration-700"
        />
      ) : null}

      {/* Hero Content - Single Line Text Left Bottom & CTAs Right Bottom */}
      <div className="relative z-20 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        {/* Left Bottom Single Line Headline (Increased Size) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start max-w-3xl"
        >
          <div className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-widest uppercase text-white/90 mb-2 drop-shadow-md">
            <ShieldCheck className="w-4 h-4 text-[#0088ff]" />
            <span>GALTech Enterprise Hardware & 4K Interactive Panel</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-none drop-shadow-lg whitespace-normal md:whitespace-nowrap">
            Intelligent Workplace <span className="text-amber-gradient">Hardware.</span>
          </h1>
        </motion.div>

        {/* Right Bottom CTAs (Increased Size) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex items-center gap-4 flex-shrink-0"
        >
          <Link href="/products">
            <MagneticButton variant="primary" className="!py-3.5 !px-7 !text-sm !font-semibold shadow-lg">
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </Link>

          <Link href="/contact">
            <button className="btn-pill-secondary !text-white !border-white/50 hover:!bg-white/10 !py-3.5 !px-7 !text-sm !font-semibold backdrop-blur-md shadow-lg">
              <span>Schedule Consultation</span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
