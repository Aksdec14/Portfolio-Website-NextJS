import React from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Front-End Developer (Freelance)",
      company: "Fusion Edge",
      duration: "May 2025 – Present",
      description:
        "Designed and developed the official company website with a modern UI and animations. Built component-based architecture using React and deployed on Plesk with optimized responsive performance.",
      link: "https://fusionedge.io/",
    },
    {
      role: "Website Designer & Developer",
      company: "JONOJUG Communications",
      duration: "Jan 2025 – Apr 2025",
      description:
        "Designed and built the brand website for JONOJUG Communications, integrating modern responsive design, interactive UI elements, animations, and real-time contact form connectivity for lead generation.",
      link: "https://jono-jug.vercel.app/",
    },
    {
      role: "Management Trainee Intern",
      company: "Happy Employees, Noida",
      duration: "Feb 2025 – Apr 2025",
      description:
        "Worked on vendor management, logistics support, and event coordination. Increased sales by 1% and reduced resource cost by 15% through operational optimization.",
      link: null,
    },
  ];

  return (
    <section
      id="experience"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 space-y-8 sm:space-y-10 lg:space-y-12"
    >
      {/* Header Section */}
      <div className="text-left space-y-2 sm:space-y-3">
        <h2 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" 
          style={{ color: '#2D3748' }}
        >
          Work Experience
        </h2>
        <p 
          className="text-base sm:text-lg md:text-xl" 
          style={{ color: '#718096' }}
        >
          A journey of building real products and solving real problems.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="space-y-4 sm:space-y-5 lg:space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-4 sm:p-5 md:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 bg-white hover:border-[#96C2DB] group"
          >
            {/* Header with Icon */}
            <div className="flex items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3">
              <h3 
                className="text-lg sm:text-xl md:text-2xl font-bold leading-tight flex-1" 
                style={{ color: '#2D3748' }}
              >
                {exp.role}
              </h3>
              <div className="flex-shrink-0">
                <Briefcase 
                  className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform group-hover:scale-110" 
                  style={{ color: '#96C2DB' }} 
                />
              </div>
            </div>

            {/* Company Name */}
            <p 
              className="font-semibold text-base sm:text-lg md:text-xl mb-1 sm:mb-2" 
              style={{ color: '#96C2DB' }}
            >
              {exp.company}
            </p>

            {/* Duration */}
            <p 
              className="text-xs sm:text-sm md:text-base mb-3 sm:mb-4" 
              style={{ color: '#4A5568' }}
            >
              {exp.duration}
            </p>

            {/* Description */}
            <p 
              className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4" 
              style={{ color: '#718096' }}
            >
              {exp.description}
            </p>

            {/* Project Link */}
            {exp.link && (
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 font-semibold hover:underline text-sm sm:text-base md:text-lg transition-all group-hover:gap-3"
                style={{ color: '#96C2DB' }}
              >
                Visit Project 
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}