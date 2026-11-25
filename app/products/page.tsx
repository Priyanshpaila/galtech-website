"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Centralized Data Imports
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";

export default function ProductCatalogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            GALTech Product Catalog
          </span>
          <h1 className="text-5xl md:text-6xl font-bold text-[#101010] tight-heading tracking-tight mt-2 mb-4">
            Enterprise Hardware & <span className="text-amber-gradient">Systems.</span>
          </h1>
          <p className="text-lg text-[#6e6e73] max-w-2xl">
            Explore our line of optical zero-bonding interactive flat panels, Toshiba multi-function printers, and InFocus laser projectors.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12 bg-[#f5f5f7] p-4 rounded-2xl">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {PRODUCT_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-[#101010] text-white shadow-sm"
                    : "text-[#6e6e73] hover:text-[#101010] hover:bg-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-3 text-[#ababb0]" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-white border border-black/5 text-xs text-[#101010] focus:outline-none focus:border-[#0088ff]"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="card-enterprise p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Product Image Header */}
                <div className="relative w-full h-56 rounded-2xl bg-[#0b1220] overflow-hidden mb-6 flex items-center justify-center p-4">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10">
                    {product.badge}
                  </span>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0088ff]">
                    {product.category}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-[#101010] tracking-tight mb-2 group-hover:text-[#0088ff] transition-colors">
                  {product.title}
                </h2>

                <div className="text-xs font-medium text-[#feab30] mb-4">
                  {product.subtitle}
                </div>

                <p className="text-sm text-[#6e6e73] leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Key Spec Highlights */}
                <div className="space-y-2 border-t border-black/5 pt-4 mb-8">
                  {Object.entries(product.specs).slice(0, 5).map(([key, val]) => (
                    <div key={key} className="flex justify-between text-xs py-1">
                      <span className="text-[#6e6e73] capitalize">{key}:</span>
                      <span className="font-semibold text-[#101010]">{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-black/5">
                <Link href={`/products/${product.id}`}>
                  <MagneticButton variant="primary" className="!py-2.5 !px-5 !text-xs">
                    <span>Full Product Specifications</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </MagneticButton>
                </Link>

                <a
                  href={`/#contact`}
                  className="text-xs font-semibold text-[#6e6e73] hover:text-[#101010] transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
