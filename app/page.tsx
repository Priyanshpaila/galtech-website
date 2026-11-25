import React from "react";
import Hero from "@/components/sections/Hero";
import SocialProof from "@/components/sections/SocialProof";
import AmberIntro from "@/components/sections/AmberIntro";
import FUIBentoGridDark from "@/components/ui/bento";
import ProductConfigurator from "@/components/sections/ProductConfigurator";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white">
      {/* 1. Hero Section - Full Viewport Side Video Canvas Layout */}
      <Hero />

      {/* 2. Social Proof - Muted Press & Partner Logos */}
      <SocialProof />

      {/* 3. Amber Feature Intro - Large Amber Text Gradient Headline */}
      <AmberIntro />

      {/* 4. Bento Grid Showcase Section */}
      <FUIBentoGridDark />

      {/* 5. Product Configurator - Interactive Hardware Spec Preview */}
      <ProductConfigurator />

      {/* 6. CTA & Consultation Block - Conversion Focused Form */}
      <CTASection />
    </main>
  );
}
