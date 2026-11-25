"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Send,
  Check,
  Building2,
  Headphones,
  Navigation,
} from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

// Centralized Data Import
import { COMPANY_INFO } from "@/data/company";

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#101010] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* 1. Hero Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-[#6e6e73]">
              Get In Touch • GALTech Corporate Support
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#101010] tracking-tight mt-3 mb-6">
              Connect With Our <span className="text-amber-gradient">Enterprise Team.</span>
            </h1>
            <p className="text-lg md:text-xl text-[#6e6e73] max-w-3xl leading-relaxed font-normal">
              Whether you need product pricing, corporate tenders, Annual Maintenance Contracts (AMC), or technical SLA support, our specialists are ready to assist you.
            </p>
          </motion.div>
        </div>

        {/* 2. Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Headquarters Address */}
          <div className="card-enterprise p-6 border border-black/5">
            <div className="w-10 h-10 rounded-xl bg-[#0088ff]/10 text-[#0088ff] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101010] mb-2">Corporate Headquarters</h3>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              {COMPANY_INFO.address}
            </p>
          </div>

          {/* Card 2: Phone Hotline */}
          <div className="card-enterprise p-6 border border-black/5">
            <div className="w-10 h-10 rounded-xl bg-[#feab30]/10 text-[#feab30] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101010] mb-2">Phone Hotline</h3>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-xs text-[#0088ff] font-semibold hover:underline block mb-1">
              {COMPANY_INFO.phone}
            </a>
            <p className="text-[11px] text-[#6e6e73]">Mon - Sat: 9:00 AM - 6:30 PM IST</p>
          </div>

          {/* Card 3: Email Contacts */}
          <div className="card-enterprise p-6 border border-black/5">
            <div className="w-10 h-10 rounded-xl bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mb-4">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101010] mb-2">Official Email</h3>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-xs text-[#0088ff] font-semibold hover:underline block">
              {COMPANY_INFO.email}
            </a>
            <a href={`mailto:${COMPANY_INFO.secondaryEmail}`} className="text-xs text-[#6e6e73] hover:underline block mt-1">
              {COMPANY_INFO.secondaryEmail}
            </a>
          </div>

          {/* Card 4: SLA Commitment */}
          <div className="card-enterprise p-6 border border-black/5">
            <div className="w-10 h-10 rounded-xl bg-[#cb30e0]/10 text-[#cb30e0] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#101010] mb-2">Rapid Response SLA</h3>
            <p className="text-xs text-[#6e6e73] leading-relaxed">
              Guaranteed 2-Hour SLA response time for enterprise support & AMC contracts.
            </p>
          </div>
        </div>

        {/* 3. Enterprise Contact Form */}
        <div className="card-enterprise p-8 md:p-12 max-w-4xl mx-auto border border-black/10 shadow-xl rounded-3xl mb-24">
          {formSubmitted ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#34c759]/10 text-[#34c759] flex items-center justify-center mx-auto mb-4">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-[#101010] mb-2">Message Sent Successfully</h3>
              <p className="text-xs text-[#6e6e73] max-w-sm mx-auto">
                Thank you for reaching out to GALTech Infosolutions. Our representative will respond to your inquiry within 2 business hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-[#101010] tracking-tight">Send Us A Message</h2>
                <p className="text-xs text-[#6e6e73] mt-1">
                  Fill out the form below and our team will provide customized pricing or technical SLA support.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98470 00000"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#101010] mb-1">Organization Name</label>
                  <input
                    type="text"
                    placeholder="Company / Institution"
                    className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101010] mb-1">Subject / Inquiry Type *</label>
                <select className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff]">
                  <option>Product Sales Inquiry (iPanel, Toshiba, InFocus)</option>
                  <option>Annual Maintenance Contract (AMC)</option>
                  <option>Peer Connexions Partner Program</option>
                  <option>Government / Corporate Tender</option>
                  <option>Technical Service & Repairs</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101010] mb-1">Your Message *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Provide details about your hardware requirements, quantity, or service request..."
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f5f7] text-xs text-[#101010] border border-black/5 focus:outline-none focus:border-[#0088ff] resize-none"
                />
              </div>

              <MagneticButton type="submit" variant="primary" className="w-full justify-center">
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </MagneticButton>
            </form>
          )}
        </div>

        {/* 4. Full-Width Google Maps Embed Section */}
        <div className="w-full space-y-6">
          <div className="bg-[#101010] text-white p-8 rounded-3xl border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#feab30] font-bold tracking-wider">
                CORPORATE HEADQUARTERS LOCATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                Bengaluru Office & Experience Center
              </h2>
              <p className="text-xs sm:text-sm text-white/70 mt-1 max-w-xl">
                {COMPANY_INFO.address}
              </p>
            </div>
            
            <a
              href="https://maps.google.com/?q=No.+50,+9th+A+Main+Rd,+Indiranagar,+Bengaluru,+Karnataka+560038"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0"
            >
              <button className="btn-pill-secondary !text-white !border-white/40 hover:!bg-white/10 !py-3 !px-6 !text-xs !font-semibold backdrop-blur-sm flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#0088ff]" />
                <span>Open in Google Maps App</span>
              </button>
            </a>
          </div>

          {/* 100% Full-Width Interactive Google Maps iframe */}
          <div className="w-full h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-black/10 relative bg-[#f5f5f7]">
            <iframe
              title="Galtech Infosolutions Pvt Ltd. Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.906900179385!2d77.6373017757814!3d12.977806187338166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a5a82dc3cb%3A0x661d5a72f7b9b427!2sGaltech%20Infosolutions%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1786952240643!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
