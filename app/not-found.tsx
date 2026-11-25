import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
      <span className="text-xs font-mono bg-[#f5f5f7] px-3.5 py-1.5 rounded-full text-[#6e6e73] mb-4">
        404 • PAGE NOT FOUND
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold text-[#101010] tight-heading tracking-tight mb-4">
        Workspace Endpoint <span className="text-amber-gradient">Unreachable.</span>
      </h1>
      <p className="text-sm text-[#6e6e73] max-w-md mb-8">
        The requested hardware endpoint or page could not be located in the GALTech directory.
      </p>
      <Link href="/" className="btn-pill-primary">
        <ArrowLeft className="w-4 h-4" />
        <span>Return to Homepage</span>
      </Link>
    </div>
  );
}
