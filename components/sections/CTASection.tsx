"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, PhoneCall, Mail, MapPin, Send } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTASection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    interest: "Interactive Flat Panels",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Info Column */}
        <div className="lg:col-span-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
            Transform Your Enterprise
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#101010] tight-heading tracking-tight mt-2 mb-6">
            Ready to upgrade your <span className="text-amber-gradient">workspace?</span>
          </h2>

          <p className="text-lg text-[#6e6e73] leading-relaxed mb-8">
            Speak with a GALTech enterprise hardware specialist for on-site live demonstrations, custom AV room designs, or managed print fleet proposals.
          </p>

          <div className="space-y-4 mb-10">
            <div className="flex items-center gap-3 text-sm text-[#101010]">
              <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0088ff]">
                <PhoneCall className="w-4 h-4" />
              </div>
              <span className="font-semibold">+91 (0484) 280-GALTECH / +91 98470 12345</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#101010]">
              <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0088ff]">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-semibold">enterprise@galtechinfo.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-[#101010]">
              <div className="w-8 h-8 rounded-full bg-[#f5f5f7] flex items-center justify-center text-[#0088ff]">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="font-semibold">GALTech Tower, Tech Zone, South India</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-[#f5f5f7] border border-black/5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#101010] mb-2">
              Official Authorized Distributor
            </div>
            <p className="text-xs text-[#6e6e73]">
              Direct distributor and authorized service partner for Toshiba e-STUDIO, InFocus Projection, and GALTech iPanel Pro interactive hardware across India.
            </p>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lg:col-span-6 card-enterprise p-8 md:p-10">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-16 h-16 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#101010] mb-2">
                Inquiry Received
              </h3>
              <p className="text-sm text-[#6e6e73] max-w-md mx-auto mb-6">
                Thank you for contacting GALTech Infosolutions. A senior enterprise technology manager will reach out within 2 business hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="btn-pill-secondary text-xs"
              >
                Send Another Request
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-xl font-bold text-[#101010] mb-4">
                Request Live Demo / Quotation
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 text-sm text-[#101010] focus:outline-none focus:border-[#0088ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 text-sm text-[#101010] focus:outline-none focus:border-[#0088ff] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] mb-1">
                    Organization / Institution *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Enterprise / University Name"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 text-sm text-[#101010] focus:outline-none focus:border-[#0088ff] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#6e6e73] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 text-sm text-[#101010] focus:outline-none focus:border-[#0088ff] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#6e6e73] mb-1">
                  Product Category of Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 text-sm text-[#101010] focus:outline-none focus:border-[#0088ff] transition-colors"
                >
                  <option value="Interactive Flat Panels">GALTech iPanel Pro (4K Interactive Panels)</option>
                  <option value="Toshiba Managed Print">Toshiba e-STUDIO Multi-Function Printers</option>
                  <option value="InFocus Projection">InFocus Quantum Laser Projectors</option>
                  <option value="Smart Classroom Suite">Complete Smart Classroom / Boardroom Package</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#6e6e73] mb-1">
                  Project Details / Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify quantity, timeline, or special installation requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] border border-black/5 text-sm text-[#101010] focus:outline-none focus:border-[#0088ff] transition-colors resize-none"
                />
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full mt-2">
                <span>Submit Enterprise Inquiry</span>
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
