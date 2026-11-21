import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  FileText, 
  Sparkles, 
  Code, 
  Cpu, 
  Award, 
  CheckCircle2, 
  ExternalLink,
  MapPin,
  Flame
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const titles = [
    "Full Stack Web Engineer",
    "SWE-bench Benchmark Author @ Xelron",
    "B.Tech ECE @ IIIT Surat",
    "Competitive Programmer (550+ Solved)"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const fullText = titles[currentTitleIndex];
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        if (displayText.length + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 1800);
          setTypingSpeed(50);
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          setTypingSpeed(100);
        }
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section id="about" className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background ambient glow shapes */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/15 to-purple-600/15 rounded-full blur-[110px] pointer-events-none -z-10" />
      <div className="absolute top-2/3 right-10 w-[300px] h-[250px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bio & Call to Actions */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status pill */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Available for Software Engineering & AI Roles</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest flex items-center justify-center lg:justify-start gap-1.5">
                <Terminal className="w-4 h-4 inline" /> Welcome to my portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">Abhay Jaiswal</span>
              </h1>
              
              {/* Typewriter role */}
              <div className="h-10 flex items-center justify-center lg:justify-start">
                <span className="text-xl sm:text-2xl font-mono text-slate-300">
                  {displayText}
                  <span className="inline-block w-2.5 h-5 ml-1 bg-cyan-400 animate-pulse align-middle" />
                </span>
              </div>
            </div>

            {/* Bio paragraph */}
            <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Undergraduate at <span className="text-white font-semibold">IIIT Surat</span> specializing in Electronics & Communication. 
              Currently authoring <span className="text-cyan-300 font-medium">SWE-bench-style coding tasks</span> for AI agents with Harbor CLI at <span className="text-white font-medium">Xelron</span>, 
              and architecting full-stack systems like <span className="text-cyan-300 font-medium">LiveCodeHub</span> (collaborative IDE) and <span className="text-cyan-300 font-medium">Solvenut</span> (AI consultation marketplace).
            </p>

            {/* Quick badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1 text-xs font-mono text-slate-400">
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" /> Gorakhpur & Surat, India
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-purple-400" /> B.Tech ECE (CGPA 7.59)
              </span>
              <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> GATE 2026 Qualified
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-3">
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </a>
              
              <a
                href="#interactive-terminal"
                className="px-5 py-3 rounded-xl bg-slate-900 border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 text-sm font-medium flex items-center gap-2 hover:bg-cyan-950/30 transition-all"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Try Live Terminal</span>
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-sm font-medium flex items-center gap-2 transition-all"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>View Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Visual Card & Stats */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
            
            {/* Holographic profile summary card */}
            <div className="w-full max-w-md p-6 rounded-2xl bg-gradient-to-b from-[#111827]/90 to-[#0b101b]/90 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl group hover:border-cyan-500/40 transition-all duration-300">
              
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />
              
              <div className="flex items-center space-x-4 mb-5 pb-4 border-b border-white/10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-black font-extrabold text-xl shadow-lg shadow-cyan-500/20">
                  AJ
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
                    Abhay Jaiswal
                    <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">IIIT Surat · 2023 - Present</p>
                  <p className="text-xs text-cyan-400 font-medium">B.Tech Electronics & Comm.</p>
                </div>
              </div>

              {/* Current Role Spotlight */}
              <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 mb-4">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-cyan-400 font-mono font-medium flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" /> Current Experience
                  </span>
                  <span className="text-[11px] text-slate-400">Remote</span>
                </div>
                <div className="text-sm font-semibold text-white">Xelron | AfterQuery Silver</div>
                <div className="text-xs text-slate-300">SWE-bench Coding Tasks & Test Harness Author</div>
              </div>

              {/* Mini tech stack row */}
              <div className="space-y-2">
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">Core Arsenal</div>
                <div className="flex flex-wrap gap-1.5">
                  {["C++", "JavaScript", "Python", "React", "Node.js", "Docker", "Socket.IO", "SWE-bench", "MongoDB"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick 4-box stats grid */}
            <div className="w-full max-w-md grid grid-cols-2 gap-3">
              {personalInfo.stats.map((stat, idx) => (
                <div 
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#0d1322]/80 border border-white/5 hover:border-cyan-500/30 transition-all group"
                >
                  <div className="text-2xl font-bold font-mono text-cyan-400 group-hover:scale-105 transition-transform origin-left">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-slate-200 mt-0.5">{stat.label}</div>
                  <div className="text-[11px] text-slate-400 mt-0.5">{stat.sub}</div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
