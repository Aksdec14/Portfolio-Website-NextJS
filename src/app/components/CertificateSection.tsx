"use client";

import React from "react";

export default function CertificatesSection() {
  const certificates = [
    { title: "ChatGPT Complete Guide: Learn Generative AI", image: "/ChatGPT.png" },
    { title: "Web Full Stack Developer Internship – AICTE", image: "/AICTE.png" },
    { title: "Career Essentials in Generative AI – Microsoft & LinkedIn", image: "/GenAI.png" },
    { title: "Data Visualization – Empowering Business Insights (Forage)", image: "/Tata.png" },
    { title: "Problem Solving (Intermediate) – HackerRank", image: "/HackerRank.png" },
    { title: "Microsoft Power BI Desktop for Business Intelligence", image: "/PowerBI.png" },
  ];

  return (
    <section id="certificates" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-8">
      <h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-left"
        style={{ color: "#2D3748" }}
      >
        Certifications & Achievements
      </h2>

      <p
        className="text-base sm:text-lg text-left sm:mb-10"
        style={{ color: "#718096" }}
      >
        Recognized skills through verified industry certifications.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {certificates.map((cert, i) => (
          <div
            key={i}
            className="rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white cursor-pointer overflow-hidden border border-gray-200 hover:-translate-y-1"
          >
            <img
              src={cert.image}
              className="w-full h-44 sm:h-52 md:h-56 lg:h-64 object-cover"
              alt={cert.title}
            />

            <div className="p-4 sm:p-6">
              <h3
                className="text-sm sm:text-base md:text-lg font-semibold"
                style={{ color: "#2D3748" }}
              >
                {cert.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
