"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Handshake,
  ShieldCheck,
  Award,
  ArrowRight,
  CheckCircle2,
  Send,
  Building,
  CreditCard,
  Percent,
  Wrench,
  ShoppingBag,
  Check,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Centralized Data Imports
import { PARTNERS, COMPANY_INFO } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function PartnersPage() {
  const [partnerFormSubmitted, setPartnerFormSubmitted] = useState(false);

  const peerConnexionsPillars = [
    {
      num: "01",
      title: "Direct Product Procurement",
      desc: "Direct B2B access to GALTech 4K iPanels, Toshiba e-STUDIO copy engines, and InFocus laser projectors at Tier-1 distributor pricing.",
      icon: ShoppingBag,
    },
    {
      num: "02",
      title: "Bargain Basement & Demo Units",
      desc: "Exclusive access to refurbished inventory, demo room models, and bulk enterprise liquidation pricing with full warranty coverage.",
      icon: Percent,
    },
    {
      num: "03",
      title: "Special Price Offers & Tenders",
      desc: "Special project pricing for high-volume corporate tenders, government procurements, and educational institution deployments.",
      icon: CreditCard,
    },
    {
      num: "04",
      title: "Service Connexions & AMC Support",
      desc: "Nationwide technical assistance, SLA warranty fulfillment, genuine replacement parts dispatch, and partner technician training.",
      icon: Wrench,
    },
    {
      num: "05",
      title: "Registration & Credit Application",
      desc: "Fast-track onboarding, extended credit terms, and flexible working capital options for certified system integrators.",
      icon: Building,
    },
    {
      num: "06",
      title: "Promotions & Marketing Co-op",
      desc: "Joint co-op marketing funds, demo room support, branded promotional collaterals, and priority lead distribution.",
      icon: Award,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#101010] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* 1. Hero Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
              Technology Partner Model & Peer Connexions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101010] tracking-tight mt-3 mb-6">
              Strategic Brand <span className="text-amber-gradient">Alliances.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6e6e73] max-w-3xl leading-relaxed font-normal">
              Empowering enterprise dealers, system integrators, and corporate procurement teams across India with direct manufacturer pricing, nationwide SLA support, and flexible credit terms.
            </p>
          </motion.div>
        </div>

        {/* 2. Key Partner Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#f5f5f7] mb-20 border border-black/5">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#101010]">150+</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Authorized Resellers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#0088ff]">Tier-1</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">OEM Distributor Status</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#feab30]">Pan-India</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Logistics Coverage</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#34c759]">100%</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Genuine OEM Warranty</div>
          </div>
        </div>

        {/* 3. Peer Connexions Framework (6 Pillar Grid) */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
              B2B Partner Ecosystem
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] tracking-tight mt-2">
              The Peer Connexions <span className="text-amber-gradient">Partner Model.</span>
            </h2>
            <p className="text-sm text-[#6e6e73] mt-2 max-w-xl">
              Designed to maximize margins, streamline hardware procurement, and deliver nationwide technical support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {peerConnexionsPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="card-enterprise p-8 flex flex-col justify-between border border-black/5 hover:border-[#0088ff]/30 hover:shadow-xl transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-[#101010] text-white flex items-center justify-center font-bold text-sm">
                        <IconComp className="w-6 h-6 text-[#feab30]" />
                      </div>
                      <span className="text-2xl font-bold text-[#6e6e73]/30 font-mono group-hover:text-[#0088ff] transition-colors">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#101010] mb-3 group-hover:text-[#0088ff] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-[#6e6e73] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4. Strategic OEM Brands Showcase */}
        <div className="mb-24 bg-[#101010] text-white p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0088ff] uppercase">
              Principal OEM Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">
              Backed by Global Technology Pioneers.
            </h2>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">
              We maintain direct strategic distribution contracts with world-renowned technology manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PARTNERS.map((brand, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xl font-bold tracking-tight text-white">{brand.name}</span>
                    <Handshake className="w-5 h-5 text-[#0088ff]" />
                  </div>
                  <div className="text-xs font-medium text-[#feab30] mb-3">{brand.subtitle}</div>
                  <p className="text-xs text-white/60 leading-relaxed">
                    Official distribution agreement covering sales, technical warranty, genuine spare parts, and SLA maintenance.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/40 font-mono">
                  <span>Authorized Tier-1</span>
                  <span className="text-[#34c759]">Active Contract</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Partner Application Form */}
        <div id="apply" className="card-enterprise p-8 md:p-12 max-w-4xl mx-auto border border-black/10 shadow-2xl rounded-3xl">
          {partnerFormSubmitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#101010] mb-2">Partner Application Submitted</h3>
              <p className="text-sm text-[#6e6e73] max-w-md mx-auto">
                Thank you for applying to the GALTech Peer Connexions Partner Program. Our channel team will contact you within 24 business hours to complete verification.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPartnerFormSubmitted(true);
              }}
              className="space-y-6"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
                  Join Peer Connexions
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#101010] tracking-tight mt-1">
                  Apply For Authorized Reseller & Partner Status
                </h3>
                <p className="text-xs text-[#6e6e73] mt-1">
                  Gain access to wholesale OEM pricing, extended credit terms, demo equipment, and dedicated technical SLA support.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Company / Firm Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Systems Integrators Pvt Ltd"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">GSTIN / Business Tax ID *</label>
                  <input
                    type="text"
                    required
                    placeholder="29AAAAA0000A1Z5"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Business Type *</label>
                  <select className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]">
                    <option>System Integrator (SI)</option>
                    <option>AV Equipment Dealer</option>
                    <option>IT Managed Service Provider</option>
                    <option>Corporate Procurement</option>
                    <option>Government / Educational Contractor</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Contact Person Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">City / Region *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bengaluru, Mumbai, Delhi"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="partner@yourcompany.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98470 00000"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101010] mb-1">Core Hardware Interest</label>
                <textarea
                  rows={2}
                  placeholder="Primary hardware focus (e.g., Toshiba MFPs, 4K iPanels, InFocus Laser Projectors, tenders)..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff] resize-none"
                />
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full justify-center">
                <span>Submit Peer Connexions Partner Application</span>
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
