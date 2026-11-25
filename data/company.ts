export interface Certificate {
  id: string;
  title: string;
  code: string;
  description: string;
  downloadUrl?: string;
}

export interface PartnerBrand {
  name: string;
  subtitle: string;
}

export const COMPANY_INFO = {
  name: "GALTech Infosolutions",
  legalName: "GALTech Infosolutions Pvt Ltd",
  tagline: "Where Technology Meets Excellence",
  description:
    "Leading national distributor of trusted technology brands across India. Authorized distributor of Toshiba copiers, national distributor for InFocus laser projectors, and manufacturer of 4K UHD interactive panels.",
  phone: "+91 80 4852 9245",
  mobile: "+91 98470 12345",
  email: "marketing@galtechinfo.com",
  secondaryEmail: "enterprise@galtechinfo.com",
  address: "No.50, 9th A Main Rd, Indira Nagar 1st Stage, Stage 1, Indiranagar, Bengaluru, Karnataka 560038",
  city: "Bengaluru, Karnataka",
  country: "India",
  sla: "3-Year On-Site Comprehensive AMC & SLA Support",
  stats: {
    clients: "500+",
    displaysDeployed: "1,200+",
    supportResponse: "2 Hours",
    serviceCenters: "25+ Pan-India",
  },
  pillars: [
    {
      title: "GalTech Manufacturing",
      desc: "Cutting-edge manufacturing processes and strict quality standards delivering high-performance technology hardware across India.",
      icon: "Factory",
    },
    {
      title: "Pan-India Distribution",
      desc: "Trusted distribution network ensuring nationwide delivery of Toshiba copiers, InFocus projectors, and interactive displays with zero downtime.",
      icon: "Truck",
    },
    {
      title: "Office Equipment AMC Services",
      desc: "Comprehensive Annual Maintenance Contracts (AMC) with preventive maintenance and nationwide service coverage.",
      icon: "ShieldCheck",
    },
    {
      title: "Uninterrupted Operations",
      desc: "Widespread service centers providing 24/7 on-site technical support and rapid hardware replacement.",
      icon: "Zap",
    },
  ],
};

export const PARTNERS: PartnerBrand[] = [
  { name: "TOSHIBA", subtitle: "Authorized Multi-Function Copiers" },
  { name: "INFOCUS", subtitle: "National Laser Projection Partner" },
  { name: "GALTECH", subtitle: "4K UHD Interactive Panels" },
  { name: "CISCO", subtitle: "Network Infrastructure" },
  { name: "DELL TECH", subtitle: "Enterprise Workstations" },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "ipa-certificate",
    title: "IPA Certificate",
    code: "ISO 9001:2015 Certified",
    description: "Official Indian Procurement Authority & Standards Quality Certification for Enterprise AV Hardware.",
    downloadUrl: "/downloads/IPA_Certificate_GALTech.pdf",
  },
  {
    id: "ifpd-certificate",
    title: "IFPD Certificate",
    code: "BIS & RoHS 4K IFPD Compliance",
    description: "Interactive Flat Panel Display Safety & Optical Zero-Bonding Technical Compliance.",
    downloadUrl: "/downloads/IFPD_Certificate_GALTech.pdf",
  },
  {
    id: "ewaste-compliance",
    title: "E-Waste Compliance",
    code: "CPCB Environmental SLA",
    description: "Central Pollution Control Board E-Waste Management & Environmental Disposal Compliance.",
    downloadUrl: "/downloads/E_Waste_Compliance_GALTech.pdf",
  },
];
