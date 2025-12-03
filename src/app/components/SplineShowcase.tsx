"use client";

import React, { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function SplineShowcase() {
  const [interactive, setInteractive] = useState(true); // default true for mobile

  return (
    <section
      id="spline"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-10 py-16 max-w-7xl mx-auto"
    >
      {/* LEFT SIDE INFO */}
      <div className="space-y-6 w-full lg:w-1/2">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight"
          style={{ color: "#2D3748" }}
        >
          Immersive 3D Experience with Spline 🚀
        </h2>

        <p className="text-lg leading-relaxed" style={{ color: "#718096" }}>
          This interactive 3D scene is built using{" "}
          <span className="font-semibold" style={{ color: "#96C2DB" }}>
            Spline
          </span>
          , a powerful 3D design tool for real-time WebGL experiences.
        </p>

        <ul className="space-y-3 text-base" style={{ color: "#4A5568" }}>
          <li className="flex items-start gap-2">
            <span className="text-[#96C2DB] font-bold mt-1">•</span>
            Full 3D interactive camera movement
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#96C2DB] font-bold mt-1">•</span>
            Optimized performant WebGL scene
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#96C2DB] font-bold mt-1">•</span>
            Integrated via @splinetool/react-spline
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#96C2DB] font-bold mt-1">•</span>
            Scroll-friendly & fully responsive
          </li>
        </ul>
      </div>

      {/* SPLINE */}
      <div
        className="w-full lg:w-1/2 h-[350px] sm:h-[450px] md:h-[550px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl border border-[#96C2DB] bg-[#E5EDF1]"
        onMouseEnter={() => setInteractive(true)}
        onMouseLeave={() => setInteractive(false)}
        onTouchStart={() => setInteractive(true)}
      >
        <div className={`${interactive ? "" : "pointer-events-none"} w-full h-full`}>
          <Spline scene="https://prod.spline.design/ieQyiK6aZWNVkrrD/scene.splinecode" />
        </div>
      </div>
    </section>
  );
}
