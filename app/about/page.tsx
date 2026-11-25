"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Factory,
  Truck,
  CheckCircle2,
  Download,
  Building2,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Centralized Data Imports
import { COMPANY_INFO, PARTNERS, CERTIFICATES } from "@/data/company";
import { PRODUCTS } from "@/data/products";

export default function AboutUsPage() {
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
              Step Into The World Of GALTech
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101010] tracking-tight mt-3 mb-6">
              Where Technology Meets <span className="text-amber-gradient">Excellence.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6e6e73] max-w-3xl leading-relaxed font-normal">
              {COMPANY_INFO.description}
            </p>
          </motion.div>
        </div>

        {/* 2. Key Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-[#f5f5f7] mb-20 border border-black/5">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#101010]">{COMPANY_INFO.stats.clients}</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Enterprise Clients</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#0088ff]">{COMPANY_INFO.stats.displaysDeployed}</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Hardware Deployed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#feab30]">{COMPANY_INFO.stats.serviceCenters}</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Service Centers</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-[#34c759]">{COMPANY_INFO.stats.supportResponse}</div>
            <div className="text-xs font-semibold text-[#6e6e73] uppercase tracking-wider mt-1">Max SLA Response</div>
          </div>
        </div>

        {/* 3. Core Pillars Grid */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
              Core Capabilities & Value
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] tracking-tight mt-2">
              Why GALTech Stands Above <span className="text-amber-gradient">the Rest.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPANY_INFO.pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="card-enterprise p-8 flex flex-col justify-between border border-black/5 hover:border-[#0088ff]/20 transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#0088ff]/10 text-[#0088ff] flex items-center justify-center mb-6">
                    {idx === 0 && <Factory className="w-6 h-6" />}
                    {idx === 1 && <Truck className="w-6 h-6" />}
                    {idx === 2 && <ShieldCheck className="w-6 h-6" />}
                    {idx === 3 && <Award className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#101010] mb-3">{pillar.title}</h3>
                  <p className="text-sm text-[#6e6e73] leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 4. Official Hardware Product Portfolio Showcase (Lazy Loaded Images) */}
        <div className="mb-24 bg-[#101010] text-white p-8 md:p-14 rounded-3xl border border-white/10 shadow-2xl">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono font-bold tracking-widest text-[#0088ff] uppercase">
              Authorized Distribution Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mt-2">
              Leading National Distributor of Trusted Brands.
            </h2>
            <p className="text-sm text-white/70 mt-3 leading-relaxed">
              Authorized distributor of Toshiba multi-function copiers, national distributor for InFocus Quantum Laser projectors, and 4K Interactive Flat Panels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map((prod) => (
              <div key={prod.id} className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between group">
                <div>
                  <div className="relative w-full h-48 rounded-xl bg-black/40 overflow-hidden mb-6 flex items-center justify-center p-4">
                    <Image
                      src={prod.image}
                      alt={prod.title}
                      fill
                      loading="lazy"
                      className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[#feab30] uppercase font-bold">{prod.category}</span>
                  <h3 className="text-lg font-bold text-white mt-1 mb-2 group-hover:text-[#0088ff] transition-colors">{prod.title}</h3>
                  <p className="text-xs text-white/70 line-clamp-2 leading-relaxed">{prod.description}</p>
                </div>

                <Link
                  href={`/products/${prod.id}`}
                  className="mt-6 pt-4 border-t border-white/10 text-xs font-semibold text-[#0088ff] hover:text-white flex items-center gap-1 transition-colors"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Official Certificates Section */}
        <div className="mb-24">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
              Regulatory & Environmental Standards
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#101010] tracking-tight mt-2">
              Official Enterprise <span className="text-amber-gradient">Certifications.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATES.map((cert) => (
              <div key={cert.id} className="card-enterprise p-8 flex flex-col justify-between border border-black/5">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#0088ff]/10 text-[#0088ff]">
                      {cert.code}
                    </span>
                    <CheckCircle2 className="w-5 h-5 text-[#34c759]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#101010] mb-2">{cert.title}</h3>
                  <p className="text-xs text-[#6e6e73] leading-relaxed mb-6">{cert.description}</p>
                </div>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#0088ff] hover:underline"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Certificate Documentation</span>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Headquarters & Corporate Contact */}
        <div className="card-enterprise p-8 md:p-14 bg-[#f5f5f7] border border-black/5 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
                Corporate Headquarters
              </span>
              <h2 className="text-3xl font-bold text-[#101010] tracking-tight mt-2 mb-6">
                Connect With Our Enterprise Team.
              </h2>

              <div className="space-y-4 text-sm text-[#101010] mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#0088ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold">Bengaluru Corporate Headquarters:</span>
                    <p className="text-xs text-[#6e6e73] mt-0.5">{COMPANY_INFO.address}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#0088ff] flex-shrink-0" />
                  <div>
                    <span className="font-bold">Phone Inquiry: </span>
                    <a href={`tel:${COMPANY_INFO.phone}`} className="text-xs text-[#6e6e73] hover:text-[#0088ff]">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#0088ff] flex-shrink-0" />
                  <div>
                    <span className="font-bold">Official Email: </span>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-[#6e6e73] hover:text-[#0088ff]">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              <Link href="/#contact">
                <MagneticButton variant="primary">
                  <span>Contact Sales Team</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>

            <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
              <Building2 className="w-10 h-10 text-[#feab30] mb-4" />
              <h3 className="text-lg font-bold text-[#101010] mb-2">Nationwide Support & SLA</h3>
              <p className="text-xs text-[#6e6e73] leading-relaxed mb-4">
                Our nationwide support network provides 3-year comprehensive AMC warranties and guaranteed 2-hour SLA response times across India.
              </p>
              <div className="text-xs font-semibold text-[#0088ff]">GALTech Enterprise Service Commitment</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
