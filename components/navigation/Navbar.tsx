"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Menu, X, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Centralized Data Imports
import { PRODUCTS } from "@/data/products";
import { CERTIFICATES } from "@/data/company";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<"products" | "certificates" | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<"products" | "certificates" | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isTransparent = !scrolled && pathname === "/";

  return (
    <header
      ref={dropdownRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent text-white border-b border-white/10 py-5"
          : "bg-white/95 backdrop-blur-md text-[#101010] border-b border-black/5 shadow-sm py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Official GALTech Brand Logo Image */}
        <Link href="/" className="flex items-center group">
          <Image
            src="/images/galtech-logo.png"
            alt="GALTech Infosolutions"
            width={180}
            height={45}
            className={`h-9 w-auto object-contain transition-all group-hover:opacity-90 ${
              isTransparent ? "brightness-0 invert" : ""
            }`}
            priority
          />
        </Link>

        {/* Center Nav Items */}
        <nav className="hidden lg:flex items-center gap-2">
          {/* Home Link */}
          <Link
            href="/"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              pathname === "/"
                ? isTransparent
                  ? "bg-white/20 text-white font-semibold"
                  : "bg-[#f8f6f0] text-[#0057ff] font-semibold"
                : isTransparent
                ? "text-white/80 hover:text-white"
                : "text-[#101010] hover:bg-black/5"
            }`}
          >
            Home
          </Link>

          {/* About Us Link */}
          <Link
            href="/about"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              pathname === "/about"
                ? isTransparent
                  ? "bg-white/20 text-white font-semibold"
                  : "bg-[#f8f6f0] text-[#0057ff] font-semibold"
                : isTransparent
                ? "text-white/80 hover:text-white"
                : "text-[#101010] hover:bg-black/5"
            }`}
          >
            About Us
          </Link>

          {/* Our Products Dropdown */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
                activeDropdown === "products" || pathname.startsWith("/products")
                  ? isTransparent
                    ? "bg-white/20 text-white font-semibold"
                    : "bg-[#f8f6f0] text-[#0057ff] font-semibold"
                  : isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-[#101010] hover:bg-black/5"
              }`}
            >
              <span>Our Products</span>
              {activeDropdown === "products" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {/* Products Dropdown Card */}
            <AnimatePresence>
              {activeDropdown === "products" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-72 bg-white text-[#101010] rounded-2xl p-4 shadow-2xl border border-black/10 z-50 max-h-[70vh] overflow-y-auto"
                >
                  <Link
                    href="/products"
                    onClick={() => setActiveDropdown(null)}
                    className="block font-bold text-sm text-[#0057ff] hover:underline pb-2.5 border-b border-black/10"
                  >
                    View all Our Products
                  </Link>

                  <div className="pt-2 space-y-1">
                    {PRODUCTS.map((prod) => (
                      <Link
                        key={prod.id}
                        href={`/products/${prod.id}`}
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2 rounded-xl text-sm font-medium text-[#101010] hover:bg-[#f5f5f7] hover:text-[#0057ff] transition-all"
                      >
                        {prod.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Certificate Dropdown */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === "certificates" ? null : "certificates")}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center gap-1.5 transition-all ${
                activeDropdown === "certificates"
                  ? isTransparent
                    ? "bg-white/20 text-white font-semibold"
                    : "bg-[#f8f6f0] text-[#0057ff] font-semibold"
                  : isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-[#101010] hover:bg-black/5"
              }`}
            >
              <span>Certificate</span>
              {activeDropdown === "certificates" ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {/* Certificate Dropdown Card */}
            <AnimatePresence>
              {activeDropdown === "certificates" && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-3 w-64 bg-white text-[#101010] rounded-2xl p-4 shadow-2xl border border-black/10 z-50"
                >
                  <Link
                    href="/solutions"
                    onClick={() => setActiveDropdown(null)}
                    className="block font-bold text-sm text-[#0057ff] hover:underline pb-2.5 border-b border-black/10"
                  >
                    View all Certificate
                  </Link>

                  <div className="pt-2 space-y-1">
                    {CERTIFICATES.map((cert) => (
                      <Link
                        key={cert.id}
                        href="/solutions"
                        onClick={() => setActiveDropdown(null)}
                        className="block px-3 py-2 rounded-xl text-sm font-medium text-[#101010] hover:bg-[#f5f5f7] hover:text-[#0057ff] transition-all"
                      >
                        {cert.title}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Partners Link */}
          <Link
            href="/partners"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              pathname === "/partners"
                ? isTransparent
                  ? "bg-white/20 text-white font-semibold"
                  : "bg-[#f8f6f0] text-[#0057ff] font-semibold"
                : isTransparent
                ? "text-white/80 hover:text-white"
                : "text-[#101010] hover:bg-black/5"
            }`}
          >
            Partners
          </Link>

          {/* Contact Us Link */}
          <Link
            href="/contact"
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              pathname === "/contact"
                ? isTransparent
                  ? "bg-white/20 text-white font-semibold"
                  : "bg-[#f8f6f0] text-[#0057ff] font-semibold"
                : isTransparent
                ? "text-white/80 hover:text-white"
                : "text-[#101010] hover:bg-black/5"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Right Action CTA Button */}
        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden sm:block">
            <MagneticButton className="!py-2.5 !px-5 !text-xs !font-semibold">
              <span>Book Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-current"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#101010] text-white border-t border-white/10 px-6 py-6 space-y-4 max-h-[85vh] overflow-y-auto"
          >
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-2 border-b border-white/10"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-2 border-b border-white/10"
            >
              About Us
            </Link>

            {/* Mobile Accordion: Our Products */}
            <div className="border-b border-white/10 py-2">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "products" ? null : "products")}
                className="w-full flex items-center justify-between text-base font-semibold text-white"
              >
                <span>Our Products</span>
                {mobileDropdown === "products" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {mobileDropdown === "products" && (
                <div className="pl-4 pt-3 space-y-2 text-sm text-white/80">
                  <Link href="/products" onClick={() => setMobileMenuOpen(false)} className="block text-[#0088ff] font-bold">
                    View all Our Products →
                  </Link>
                  {PRODUCTS.map((prod) => (
                    <Link
                      key={prod.id}
                      href={`/products/${prod.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      {prod.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Accordion: Certificate */}
            <div className="border-b border-white/10 py-2">
              <button
                onClick={() => setMobileDropdown(mobileDropdown === "certificates" ? null : "certificates")}
                className="w-full flex items-center justify-between text-base font-semibold text-white"
              >
                <span>Certificate</span>
                {mobileDropdown === "certificates" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {mobileDropdown === "certificates" && (
                <div className="pl-4 pt-3 space-y-2 text-sm text-white/80">
                  <Link href="/solutions" onClick={() => setMobileMenuOpen(false)} className="block text-[#0088ff] font-bold">
                    View all Certificate →
                  </Link>
                  {CERTIFICATES.map((cert) => (
                    <Link
                      key={cert.id}
                      href="/solutions"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      {cert.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/partners"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-2 border-b border-white/10"
            >
              Partners
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold py-2 border-b border-white/10"
            >
              Contact Us
            </Link>

            <div className="pt-4">
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                <MagneticButton className="w-full justify-center">
                  <span>Book Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </MagneticButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
