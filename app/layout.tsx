import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/providers/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";

export const metadata: Metadata = {
  title: "GALTech Infosolutions | Enterprise Technology Hardware & Native OS",
  description:
    "Transforming enterprises, classrooms, and offices with 4K UHD GALTech interactive flat panels, Toshiba e-STUDIO multi-function copiers, and InFocus quantum laser projectors.",
  keywords: [
    "GALTech Infosolutions",
    "Interactive Flat Panel 4K",
    "Toshiba e-STUDIO MFP",
    "InFocus Laser Projector",
    "Smart Classroom Solutions",
    "Managed Print Services India",
  ],
  authors: [{ name: "GALTech Infosolutions" }],
  openGraph: {
    title: "GALTech Infosolutions | Enterprise Hardware",
    description:
      "Next-generation 4K UHD interactive panels, Toshiba MFP copiers, and quantum laser projectors.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-white text-[#101010] selection:bg-[#0088ff] selection:text-white" suppressHydrationWarning>
        <SmoothScroll>
          {/* <CustomCursor /> */}
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
