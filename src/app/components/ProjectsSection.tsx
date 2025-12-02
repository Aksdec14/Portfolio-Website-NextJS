"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";

type Project = {
  id: number;
  title: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  Link: string;
  liveLink: string;
};

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: "GlowCare – AI-Powered Health & Wellness Platform",
      image: "/GlowCare.png",
      shortDesc:
        "AI-integrated wellness platform with guided care, personalized suggestions, and a modern responsive UI.",
      fullDesc:
        "GlowCare is an intelligent health and wellness platform designed to offer users personalized mental and physical well-being support. The platform combines modern UI design with AI-driven user interaction to deliver a seamless and meaningful digital experience. It features emotion-based wellness tips, guided care modules, tracking dashboards, and user-specific recommendations.\n\nKey responsibilities included designing the entire frontend architecture using React and Tailwind, setting up backend APIs with Node and Express, and implementing data persistence with MongoDB. The project emphasizes speed, accessibility, and visual polish, incorporating animations, smooth page transitions, and mobile-first responsiveness.\n\nFuture plans include integrating real-time chat using WebSockets and connecting wearable device APIs for live health tracking.",
      tech: ["React.js", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Framer Motion"],
      Link: "https://github.com/Aksdec14/GlowCare",
      liveLink: "https://glow-care-six.vercel.app/",
    },
    {
      id: 2,
      title: "Career Guidance – Job Search & Career Support Platform",
      image: "/CareerProject.png",
      shortDesc:
        "A job search and career development platform with filters, resume uploads, user accounts, and job comparison tools.",
      fullDesc:
        "Career Guidance is a full-stack job search and professional growth platform built to help students and job seekers find opportunities with ease. The system includes job card UI, advanced filtering, job comparison, pagination, and category-based search. Users can register, log in securely with JWT authentication, apply for roles, save opportunities, and track applications from a personalized dashboard.\n\nThe project also integrates real-time notifications, responsive UI components, and role-based routing for secure access. It emphasizes accessibility, modern interface animations, and a user-first experience. Created using scalable and reusable code structure with focus on maintainability.\n\nThis project demonstrates skills in backend authentication flow, database schema design, secure API routing, performance optimization, and UI/UX consistency across screen sizes.",
      tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS"],
      Link: "https://github.com/Aksdec14/Career_Guidance",
      liveLink: "https://career-guidance-2.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6 py-16 sm:py-20 md:py-24 space-y-10"
    >
      <div className="text-left space-y-3">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold" style={{ color: "#2D3748" }}>
          Featured Projects
        </h2>
        <p className="text-base sm:text-lg" style={{ color: "#718096" }}>
          Real world projects built with modern web technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-200 overflow-hidden"
          >
            <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 md:h-64 object-cover" />

            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold" style={{ color: "#2D3748" }}>
                {project.title}
              </h3>

              <p className="text-sm sm:text-md" style={{ color: "#718096" }}>
                {project.shortDesc}
              </p>

              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setActiveProject(project)}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 hover:scale-105"
                  style={{ backgroundColor: "#96C2DB", color: "#FFFFFF" }}
                >
                  View More
                </button>

                <a
                  href={project.Link}
                  target="_blank"
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 border-2"
                  style={{ color: "#96C2DB", borderColor: "#96C2DB" }}
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5 inline-block mr-2" />
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="fixed top-0 right-0 w-full sm:w-[420px] md:w-[480px] h-full bg-white shadow-2xl p-5 sm:p-8 overflow-y-auto z-[9999]"
          >
            <div className="flex justify-between items-center sticky top-0 bg-white py-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ color: "#2D3748" }}>
                {activeProject.title}
              </h3>
              <button onClick={() => setActiveProject(null)}>
                <X className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: "#96C2DB" }} />
              </button>
            </div>

            <p className="text-sm sm:text-md mb-4 sm:mb-6 leading-relaxed" style={{ color: "#4A5568" }}>
              {activeProject.fullDesc}
            </p>

            <h4 className="text-base sm:text-lg font-semibold mb-2" style={{ color: "#2D3748" }}>
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {activeProject.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm font-semibold"
                  style={{ backgroundColor: "#E5EDF1", color: "#96C2DB" }}
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={activeProject.liveLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-base sm:text-lg font-semibold hover:underline"
              style={{ color: "#96C2DB" }}
            >
              Go Live <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
