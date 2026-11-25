"use client";

import React, { useEffect, useRef, useState } from "react";

export default function HeroVideoCanvas() {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || 800);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Create dynamic fluid mesh animation simulating native OS desktop dynamic wallpaper
    let time = 0;
    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // Deep sleek dark gradient background
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, "#080c14");
      bgGrad.addColorStop(0.5, "#0b1220");
      bgGrad.addColorStop(1, "#111827");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Draw glowing fluid mesh waves matching GALTech brand tones (Cyan, Amber, Signal Blue)
      const numLines = 6;
      for (let i = 0; i < numLines; i++) {
        ctx.beginPath();
        const yOffset = height * (0.3 + i * 0.1);
        ctx.moveTo(0, yOffset);

        for (let x = 0; x <= width; x += 15) {
          const wave1 = Math.sin(x * 0.003 + time + i * 0.8) * 45;
          const wave2 = Math.cos(x * 0.005 - time * 0.7 + i) * 30;
          ctx.lineTo(x, yOffset + wave1 + wave2);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();

        const grad = ctx.createLinearGradient(0, yOffset - 50, width, height);
        if (i % 3 === 0) {
          grad.addColorStop(0, "rgba(0, 136, 255, 0.25)"); // Signal Blue
          grad.addColorStop(1, "rgba(10, 132, 255, 0.02)");
        } else if (i % 3 === 1) {
          grad.addColorStop(0, "rgba(240, 100, 19, 0.2)"); // Amber Flame
          grad.addColorStop(1, "rgba(254, 171, 48, 0.01)");
        } else {
          grad.addColorStop(0, "rgba(0, 194, 168, 0.22)"); // Teal/Cyan Accent
          grad.addColorStop(1, "rgba(0, 87, 255, 0.02)");
        }

        ctx.fillStyle = grad;
        ctx.fill();
      }

      // Draw subtle glowing tech grid dots
      const gridSpacing = 40;
      ctx.fillStyle = "rgba(255, 255, 255, 0.04)";
      for (let x = 20; x < width; x += gridSpacing) {
        for (let y = 20; y < height; y += gridSpacing) {
          const dist = Math.sin(x * 0.01 + y * 0.01 + time) * 0.8;
          const radius = Math.max(0.1, 1 + dist);
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] rounded-[24px] overflow-hidden shadow-2xl border border-white/10 group">
      <canvas ref={canvasRef} className="w-full h-full object-cover block" />
      


     

    </div>
  );
}
