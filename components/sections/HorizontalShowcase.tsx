"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Monitor, Printer, Tv, Cpu, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const SHOWCASE_CARDS = [
  {
    id: "ipanel",
    category: "INTERACTIVE FLAT PANELS",
    title: "GALTech iPanel Pro 86\"",
    specs: ["4K UHD Optical Zero-Bonding", "20-Point Multi-Touch Surface", "Dual OS (Android 13 + Windows 11 Pro)", "Anti-Glare Anti-Fingerprint Glass"],
    description: "The ultimate interactive centerpiece for executive boardrooms and modern classrooms.",
    accent: "#0088ff",
    icon: Monitor,
    badge: "Flagship",
    image: "/images/galtech-ipanel.png",
    imageBg: "from-blue-900/20 to-indigo-950/40",
  },
  {
    id: "toshiba",
    category: "ENTERPRISE PRINTING",
    title: "Toshiba e-STUDIO 5518A",
    specs: ["55 PPM High-Speed Printing", "10.1\" Tablet-Style Touchscreen", "Dual-Scan Document Feeder", "Advanced Enterprise Encryption"],
    description: "Heavy-duty multi-function printing system with automated document workflow and cloud integration.",
    accent: "#f06413",
    icon: Printer,
    badge: "Managed Print",
    image: "/images/toshiba-copier.jpg",
    imageBg: "from-amber-950/20 to-slate-900/40",
  },
  {
    id: "infocus",
    category: "LASER PROJECTION",
    title: "InFocus Quantum Laser",
    specs: ["30,000 Hours Maintenance-Free", "6,500 ANSI Lumens Brightness", "Ultra Short Throw Ratio", "Dust-Proof IP5X Certified"],
    description: "High-contrast laser projection designed for large auditoriums and lecture halls.",
    accent: "#00c2a8",
    icon: Tv,
    badge: "Quantum Laser",
    image: "/images/infocus-projector.jpg",
    imageBg: "from-teal-950/20 to-slate-900/40",
  },
  {
    id: "smartroom",
    category: "INTELLIGENT SUITE",
    title: "Smart Classroom Ecosystem",
    specs: ["Wireless Multi-Device Screen Casting", "AI Voice Tracking Camera", "Interactive Soundbar Array", "Centralized Cloud Management"],
    description: "Fully unified audiovisual and collaborative hardware architecture for enterprise spaces.",
    accent: "#cb30e0",
    icon: Cpu,
    badge: "Turnkey Suite",
    image: "/images/galtech-ipanel.png",
    imageBg: "from-purple-950/20 to-slate-900/40",
  },
];

export default function HorizontalShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const scrollWidth = track.scrollWidth - window.innerWidth + 120;

    const ctx = gsap.context(() => {
      gsap.to(track, {
        x: -scrollWidth,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${scrollWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#f5f5f7] py-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Header Info */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
              Product Showcase
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#101010] tight-heading tracking-tight mt-2">
              Enterprise Technology <span className="text-amber-gradient">Hardware.</span>
            </h2>
          </div>
          <p className="text-sm text-[#6e6e73] max-w-sm">
            Scroll down to explore our flagship hardware systems engineered for high-performance operations.
          </p>
        </div>
      </div>

      {/* GSAP Pinned Horizontal Track */}
      <div className="w-full overflow-hidden">
        <div ref={trackRef} className="flex gap-8 px-6 md:px-12 w-max">
          {SHOWCASE_CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="w-[340px] sm:w-[420px] md:w-[500px] flex-shrink-0 card-enterprise p-8 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
              >
                {/* Product Image Banner */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-[#0b1220] flex items-center justify-center p-3">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white font-mono">
                    {card.badge}
                  </div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73] flex items-center gap-2">
                      <Icon className="w-4 h-4" style={{ color: card.accent }} />
                      {card.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-[#101010] tracking-tight mb-2 group-hover:text-[#0088ff] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6e6e73] leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2 mb-8 border-t border-black/5 pt-4">
                    {card.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-xs text-[#101010] font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: card.accent }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-4 flex items-center justify-between border-t border-black/5">
                  <Link href={`/products#${card.id}`} className="text-xs font-semibold text-[#101010] group-hover:text-[#0088ff] flex items-center gap-1 transition-colors">
                    <span>View Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${card.accent}15` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: card.accent }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
