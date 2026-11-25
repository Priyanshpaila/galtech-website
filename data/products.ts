export interface ProductSpec {
  [key: string]: string;
}

export interface ProductFeature {
  title: string;
  desc: string;
}

export interface ProductDownload {
  name: string;
  size: string;
  url?: string;
}

export interface Product {
  id: string;
  title: string;
  category: "Interactive Displays" | "Enterprise Printing" | "Laser Projection" | "Smart Solutions";
  subtitle: string;
  description: string;
  image: string;
  badge: string;
  accent: string;
  specs: ProductSpec;
  features: ProductFeature[];
  applications: string[];
  downloads: ProductDownload[];
}

export const PRODUCT_CATEGORIES = [
  "All",
  "Interactive Displays",
  "Enterprise Printing",
  "Laser Projection",
  "Smart Solutions",
] as const;

export const PRODUCTS: Product[] = [
  {
    id: "ipanel-75",
    category: "Interactive Displays",
    title: 'GALTech iPanel Pro 75" 4K UHD',
    subtitle: "Optical Zero-Bonding 40-Touch Point Interactive Display",
    description:
      "Designed for premium executive conference rooms and modern university lecture halls with zero latency touch casting.",
    image: "/images/galtech-ipanel.png",
    badge: "Flagship Display",
    accent: "#0088ff",
    specs: {
      "Display Size": '75 Inches Diagonal (16:9 Aspect Ratio)',
      "Resolution": "3840 x 2160 (4K UHD @ 60Hz)",
      "Glass Technology": "4mm Optical Zero-Bonding Glass (Mohs 7H)",
      "Touch Engine": "40-Point Infrared Precision Touch",
      "Response Time": "< 4ms Touch Latency",
      "Operating System": "Android 13.0 (8GB RAM + 128GB Storage) + Windows 11 OPS",
      "Connectivity": "3x HDMI 2.0, 1x Type-C (65W), 4x USB 3.0, Wi-Fi 6, Bluetooth 5.2",
    },
    features: [
      { title: "Optical Zero-Bonding", desc: "Zero parallax touch accuracy with write-on-air natural pen sensation." },
      { title: "40-Point Touch", desc: "Simultaneous multi-user touch, gesture control, and palm rejection." },
      { title: "Dual OS Architecture", desc: "Android 13.0 built-in + Intel i7 Windows 11 Pro OPS modular PC slot." },
      { title: "Type-C 65W Casting", desc: "Single-cable 4K video, audio, touch feedback, and 65W laptop charging." },
    ],
    applications: [
      "Corporate Executive Boardrooms & Strategy Rooms",
      "University & STEM High-Tech Smart Classrooms",
      "Command & Control Surveillance Centers",
    ],
    downloads: [
      { name: "GALTech_iPanel_Pro_75_Datasheet.pdf", size: "2.4 MB" },
      { name: "GALTech_Interactive_Software_UserManual.pdf", size: "4.1 MB" },
    ],
  },
  {
    id: "toshiba-5518a",
    category: "Enterprise Printing",
    title: "Toshiba e-STUDIO 5518A",
    subtitle: "Heavy-Duty Monochrome & Color Multi-Function Copier",
    description:
      "Industrial grade document processing with 55 PPM print speed, automated dual-scan feeding, and cloud security protocols.",
    image: "/images/toshiba-copier.jpg",
    badge: "Managed Print",
    accent: "#f06413",
    specs: {
      "Print Speed": "55 Pages Per Minute (A4/A3)",
      "Document Feeder": "Dual-Scan Document Feeder (240 IPM)",
      "User Interface": "10.1\" Color Tablet Touchscreen",
      "Print Resolution": "3600 x 1200 DPI Equivalent",
      "HDD Security": "Sedyna 320GB Encrypted Drive (256-bit AES)",
    },
    features: [
      { title: "55 PPM High Speed", desc: "Fast first-copy output with high volume duty cycle capability." },
      { title: "Dual-Scan Document Feeder", desc: "Scan up to 240 images per minute in a single pass." },
      { title: "Self-Encrypting HDD", desc: "Toshiba Wipe Technology with 256-bit AES encryption standard." },
    ],
    applications: [
      "Large Corporate Office Printing Fleets",
      "Legal & Financial Document Scanning",
      "Managed Print Service Contracts (MPS)",
    ],
    downloads: [
      { name: "Toshiba_eSTUDIO_5518A_Brochure.pdf", size: "3.1 MB" },
    ],
  },
  {
    id: "infocus-laser",
    category: "Laser Projection",
    title: "InFocus Quantum Laser 6500",
    subtitle: "Ultra Short Throw 6,500 ANSI Lumens Laser Projector",
    description:
      "Maintenance-free solid state laser projection capable of producing 300-inch crisp visuals in high ambient light environments.",
    image: "/images/infocus-projector.jpg",
    badge: "Quantum Laser",
    accent: "#00c2a8",
    specs: {
      "Brightness": "6,500 ANSI Lumens",
      "Light Engine": "Quantum Solid-State Laser Engine",
      "Expected Life": "30,000 Hours Continuous Laser Operation",
      "Dynamic Contrast": "3,000,000:1 Dynamic Contrast",
      "Throw Ratio": "0.25 Ultra Short Throw",
    },
    features: [
      { title: "6,500 ANSI Lumens", desc: "Vibrant high-brightness visual projection even under daylight." },
      { title: "30,000 Hours Lifespan", desc: "Solid-state laser diode engine with zero lamp replacement costs." },
    ],
    applications: [
      "University Auditoriums & Multi-Purpose Halls",
      "Corporate Event Venues & Ballrooms",
    ],
    downloads: [
      { name: "InFocus_Quantum_Laser_SpecSheet.pdf", size: "1.9 MB" },
    ],
  },

];

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return PRODUCTS;
  return PRODUCTS.filter((p) => p.category === category);
}
