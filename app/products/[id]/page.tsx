"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Download,
  ArrowLeft,
  FileText,
  Zap,
  Check,
  Send,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Centralized Data Import
import { getProductById, PRODUCTS } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const productId = (params.id as string) || "ipanel-75";

  const product = getProductById(productId) || PRODUCTS[0];

  const [activeTab, setActiveTab] = useState<"features" | "specs" | "downloads">("features");
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Back Link */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#6e6e73] hover:text-[#101010] mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Products Catalog</span>
        </button>

        {/* Hero Product Title & Gallery Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#f5f5f7] text-[#0088ff] inline-block mb-4">
              {product.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-[#101010] tight-heading tracking-tight mb-4">
              {product.title}
            </h1>
            <p className="text-lg text-[#feab30] font-medium mb-6">
              {product.subtitle}
            </p>
            <p className="text-base text-[#6e6e73] leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href="#enquiry">
                <MagneticButton variant="primary">
                  <span>Request Corporate Proposal</span>
                </MagneticButton>
              </a>
              <a href="#specs" onClick={() => setActiveTab("specs")}>
                <MagneticButton variant="secondary">
                  <span>View Specifications</span>
                </MagneticButton>
              </a>
            </div>
          </div>

          {/* Product Hardware Photo Display Card */}
          <div className="lg:col-span-6 bg-[#0b1220] rounded-[24px] p-6 text-white border border-white/10 shadow-2xl relative overflow-hidden min-h-[420px] flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 z-10">
              <span className="text-xs font-mono text-white/60">OFFICIAL HARDWARE PHOTO</span>
              <span className="text-[10px] bg-[#34c759] text-black font-bold px-2.5 py-0.5 rounded-full">
                AUTHENTIC PRODUCT
              </span>
            </div>

            {/* Product Image */}
            <div className="relative w-full h-64 my-4 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            <div className="flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
              <span>Direct GALTech SLA Included</span>
              <span className="text-[#0088ff] font-semibold">3-Year Warranty</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation Controls */}
        <div className="flex border-b border-black/10 mb-12 gap-8">
          <button
            onClick={() => setActiveTab("features")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "features"
                ? "text-[#101010]"
                : "text-[#6e6e73] hover:text-[#101010]"
            }`}
          >
            Key Features
            {activeTab === "features" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0088ff]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("specs")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "specs"
                ? "text-[#101010]"
                : "text-[#6e6e73] hover:text-[#101010]"
            }`}
          >
            Technical Specifications
            {activeTab === "specs" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0088ff]" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("downloads")}
            className={`pb-4 text-sm font-bold transition-all relative ${
              activeTab === "downloads"
                ? "text-[#101010]"
                : "text-[#6e6e73] hover:text-[#101010]"
            }`}
          >
            Downloads & Brochures
            {activeTab === "downloads" && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0088ff]" />
            )}
          </button>
        </div>

        {/* Tab Content 1: Key Features Grid */}
        {activeTab === "features" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {product.features.map((feat, idx) => (
              <div key={idx} className="card-enterprise p-6 border border-black/5">
                <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0088ff] mb-4">
                  <Zap className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-bold text-[#101010] mb-2">{feat.title}</h3>
                <p className="text-xs text-[#6e6e73] leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 2: Technical Specs Table */}
        {activeTab === "specs" && (
          <div className="card-enterprise p-8 mb-16 max-w-4xl">
            <h3 className="text-xl font-bold text-[#101010] mb-6">Complete Specification Sheet</h3>
            <div className="divide-y divide-black/5">
              {Object.entries(product.specs).map(([label, value], idx) => (
                <div key={idx} className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs">
                  <span className="sm:col-span-4 font-semibold text-[#6e6e73]">{label}</span>
                  <span className="sm:col-span-8 font-medium text-[#101010]">{value}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content 3: Downloads */}
        {activeTab === "downloads" && (
          <div className="space-y-4 mb-16 max-w-2xl">
            {product.downloads.map((doc, idx) => (
              <div key={idx} className="card-enterprise p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#0088ff]" />
                  <div>
                    <div className="text-xs font-bold text-[#101010]">{doc.name}</div>
                    <div className="text-[10px] text-[#6e6e73]">{doc.size} • Official Specification Sheet</div>
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading ${doc.name}...`)}
                  className="flex items-center gap-1 text-xs font-semibold text-[#0088ff] hover:underline"
                >
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Application Scenarios */}
        <div className="bg-[#f5f5f7] p-8 rounded-[24px] mb-16">
          <h3 className="text-xl font-bold text-[#101010] mb-4">Recommended Deployment Scenarios</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.applications.map((app, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl text-xs font-semibold text-[#101010]">
                <CheckCircle2 className="w-4 h-4 text-[#34c759] flex-shrink-0" />
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Dedicated Product Inquiry Form Section */}
        <div id="enquiry" className="card-enterprise p-8 md:p-12 max-w-3xl mx-auto">
          {inquirySubmitted ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#101010] mb-2">Quote Request Submitted</h3>
              <p className="text-xs text-[#6e6e73]">
                Our enterprise team will issue an official quote for {product.title} within 2 business hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setInquirySubmitted(true);
              }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-[#101010]">Inquire for {product.title}</h3>
              <p className="text-xs text-[#6e6e73] mb-4">
                Fill in your company details to receive an official proposal, SLA details, and bulk volume pricing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name *"
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                />
                <input
                  type="email"
                  required
                  placeholder="Work Email *"
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Organization / Company Name *"
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                />
                <input
                  type="tel"
                  placeholder="Contact Phone Number"
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                />
              </div>

              <textarea
                rows={3}
                placeholder="Required quantity, target installation date, or custom requests..."
                className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff] resize-none"
              />

              <MagneticButton type="submit" variant="primary" className="w-full">
                <span>Submit Quote Request for {product.title}</span>
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
