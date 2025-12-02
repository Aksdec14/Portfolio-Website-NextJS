'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from 'lucide-react';

// Typing Animation Lines
const codeBlock = [
  `const developer = "Akshat";`,
  `const skills = ["React", "Next.js", "Tailwind", "Node.js"];`,
  `function build() {`,
  `   return "Crafting modern digital experiences 🌐";`,
  `}`,
  `console.log(build());`,
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20 - 10,
        y: (e.clientY / window.innerHeight) * 20 - 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [visibleCode, setVisibleCode] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const currentLine = codeBlock[lineIndex];

      if (charIndex < currentLine.length) {
        setVisibleCode((prev) => {
          const updated = [...prev];
          updated[lineIndex] = currentLine.slice(0, charIndex + 1);
          return updated;
        });
        setCharIndex((c) => c + 1);
      } else if (lineIndex < codeBlock.length - 1) {
        setLineIndex((l) => l + 1);
        setCharIndex(0);
      } else {
        setTimeout(() => {
          setVisibleCode([]);
          setLineIndex(0);
          setCharIndex(0);
        }, 2000);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, [charIndex, lineIndex]);

  const roles = [
    'Front-End Developer',
    'Web Experience Engineer',
    'Designer',
    'Full Stack Developer',
  ];

  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <style>{`
        @keyframes blinkCursor { 
          0%, 100% {opacity:1} 
          50% {opacity:0} 
        }
        .blink { 
          animation: blinkCursor .8s infinite; 
        }

        @keyframes waveMove { 
          0% { transform: translateY(0);} 
          100% { transform: translateY(35px);} 
        }
        .animate-wave { 
          animation: waveMove 4s ease-in-out infinite alternate; 
        }
      `}</style>

      {/* SVG WAVE BACKGROUND */}
      <div className="absolute w-full top-0 left-0 opacity-40 z-0 pointer-events-none animate-wave">
        <svg className="w-full h-auto" viewBox="0 0 3079 292" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 249C0 249 288 92 756 249C1224 406 1685 48 2068 195C2451 342 3079 51 3079 51" stroke="#96C2DB" strokeWidth="2"/>
          <path d="M0 230C0 230 288 73 756 230C1224 387 1685 29 2068 176C2451 323 3079 32 3079 32" stroke="#96C2DB" strokeWidth="2"/>
        </svg>
      </div>
      <div className="absolute w-full top-20 sm:top-40 left-0 opacity-40 z-0 pointer-events-none animate-wave">
        <svg className="w-full h-auto" viewBox="0 0 3079 292" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 249C0 249 288 92 756 249C1224 406 1685 48 2068 195C2451 342 3079 51 3079 51" stroke="#96C2DB" strokeWidth="2"/>
        </svg>
      </div>

      {/* MAIN HERO CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 min-h-screen flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full">

          {/* LEFT CONTENT */}
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full shadow-lg bg-[#E5EDF1]">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" style={{ color: '#96C2DB' }} />
              <span className="text-xs sm:text-sm font-medium text-[#4A5568]">
                Available for freelance & full-time roles
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#2D3748] leading-tight">
              Hi, I'm{' '}
              <span className="text-[#96C2DB] hover:scale-105 transition-transform inline-block">
                Akshat Shukla
              </span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#4A5568]">
              A <span style={{ color: '#96C2DB' }}>{roles[currentRole]}</span>
            </p>

            <p className="text-base sm:text-lg leading-relaxed max-w-lg text-[#718096]">
              Creative front-end developer skilled in React.js, Next.js, Tailwind, Node.js, and AI-powered apps.
              Passionate about building intelligent interfaces and seamless user experiences.
            </p>

            <div className="flex gap-3 sm:gap-4 flex-wrap">
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#96C2DB] text-white text-sm sm:text-base font-semibold shadow-lg hover:scale-105 transition flex items-center gap-2">
                View Projects 
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 text-[#96C2DB] border-[#96C2DB] text-sm sm:text-base font-semibold hover:scale-105 transition">
                Contact Me
              </button>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <a 
                href="https://github.com/Aksdec14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-[#E5EDF1] rounded-full hover:scale-110 transition"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-[#96C2DB]" />
              </a>
              <a 
                href="https://linkedin.com/in/akshatshukla14" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 sm:p-3 bg-[#E5EDF1] rounded-full hover:scale-110 transition"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-[#96C2DB]" />
              </a>
              <a 
                href="mailto:aksdec14@gmail.com" 
                className="p-2 sm:p-3 bg-[#E5EDF1] rounded-full hover:scale-110 transition"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-[#96C2DB]" />
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — TYPEWRITER CODE */}
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div
              className="relative w-full max-w-[340px] sm:max-w-[400px] md:max-w-[480px] bg-white/30 backdrop-blur-xl border border-[#96C2DB] rounded-2xl shadow-2xl p-4 sm:p-6 font-mono text-sm sm:text-base md:text-lg leading-6 sm:leading-7"
              style={{
                transform: `perspective(1000px) rotateY(${mousePosition.x * 0.4}deg) rotateX(${-mousePosition.y * 0.4}deg)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="flex gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400" />
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-400" />
              </div>

              <div className="overflow-x-auto">
                {codeBlock.map((_, index) => (
                  <p key={index} className="whitespace-pre-wrap text-[#2D3748] break-words mb-1">
                    {visibleCode[index] || ''}
                    {lineIndex === index && <span className="blink">|</span>}
                  </p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}