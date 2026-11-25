"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#101010] text-white pt-20 pb-12 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          {/* Official GALTech Logo Image */}
          <div className="mb-4">
            <Image
              src="/images/galtech-logo.png"
              alt="GALTech Infosolutions"
              width={200}
              height={50}
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
            />
          </div>
          <p className="text-xs text-white/60 leading-relaxed max-w-sm">
            Enabling enterprises, educational institutions, and modern workplaces with intelligent technology hardware and managed services.
          </p>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
            Products
          </div>
          <ul className="space-y-2.5 text-xs text-white/70">
            <li><Link href="/products/ipanel-75" className="hover:text-white transition-colors">iPanel Pro 4K</Link></li>
            <li><Link href="/products/toshiba-5518a" className="hover:text-white transition-colors">Toshiba e-STUDIO</Link></li>
            <li><Link href="/products/infocus-laser" className="hover:text-white transition-colors">InFocus Quantum</Link></li>
            <li><Link href="/products/smart-suite" className="hover:text-white transition-colors">Smart Classroom</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
            Solutions
          </div>
          <ul className="space-y-2.5 text-xs text-white/70">
            <li><Link href="/solutions" className="hover:text-white transition-colors">Corporate Boardrooms</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Smart Classrooms</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Managed Print Services</Link></li>
            <li><Link href="/solutions" className="hover:text-white transition-colors">Command Centers</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white/40 mb-4">
              Navigation
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-white/70">
              <Link href="/about" className="hover:text-[#0088ff] transition-colors font-medium">
                About Us →
              </Link>
              <Link href="/partners" className="hover:text-[#0088ff] transition-colors font-medium">
                Partners →
              </Link>
              <Link href="/products" className="hover:text-[#0088ff] transition-colors font-medium">
                Product Catalog →
              </Link>
              <Link href="/solutions" className="hover:text-[#0088ff] transition-colors font-medium">
                Enterprise Solutions →
              </Link>
              <Link href="/contact" className="hover:text-[#0088ff] transition-colors font-medium">
                Contact Us →
              </Link>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="self-start mt-6 flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
        <div>
          © {new Date().getFullYear()} GALTech Infosolutions Pvt Ltd. All rights reserved.
        </div>
        <div className="flex gap-6">
          <span className="hover:text-white/60 cursor-pointer">Privacy Policy</span>
          <span className="hover:text-white/60 cursor-pointer">Terms of Service</span>
          <span className="hover:text-white/60 cursor-pointer">Security & Compliance</span>
        </div>
      </div>
    </footer>
  );
}
