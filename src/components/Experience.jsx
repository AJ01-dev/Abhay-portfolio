import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronRight, CheckCircle2, Building, ShieldCheck, Terminal } from 'lucide-react';
import { experiences, education } from '../data/portfolioData';

export default function Experience() {
  const [tab, setTab] = useState('experience'); // 'experience' | 'education'

  return (
    <section id="experience" className="py-20 relative bg-[#070b14]">
      {/* Decorative ambient lines */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-950/40 border border-blue-500/20 text-cyan-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Path & Education</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Experience & Academic Background
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            From evaluating autonomous AI coding agents on real-world repositories to academic excellence at IIIT Surat.
          </p>

          {/* Tab Switcher */}
          <div className="flex justify-center pt-4">
            <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-white/10">
              <button
                onClick={() => setTab('experience')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  tab === 'experience'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Briefcase className="w-4 h-4" />
                <span>Work Experience</span>
              </button>
              <button
                onClick={() => setTab('education')}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                  tab === 'education'
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </button>
            </div>
          </div>
        </div>

        {/* Tab Content */}
        {tab === 'experience' ? (
          <div className="space-y-8 relative before:absolute before:inset-0 before:left-5 sm:before:left-1/2 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500/40 before:via-blue-500/20 before:to-transparent">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col sm:flex-row items-start ${
                  index % 2 === 0 ? 'sm:flex-row-reverse' : ''
                } gap-6 sm:gap-12 group`}
              >
                {/* Timeline node icon */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#0d1527] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/30 z-10 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                  <Briefcase className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="w-full sm:w-[calc(50%-2rem)] ml-12 sm:ml-0 p-6 rounded-2xl bg-[#0f172a]/80 border border-white/10 hover:border-cyan-500/40 shadow-xl backdrop-blur-sm transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
                      {exp.period}
                    </span>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-400" /> {exp.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>
                  
                  <div className="text-sm font-semibold text-cyan-400 mb-3 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5" />
                    <span>{exp.company}</span>
                  </div>

                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet points */}
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.map((item, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-300 leading-relaxed gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {exp.tech.map((t, idx) => (
                      <span 
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Empty spacer for alternating layout */}
                <div className="hidden sm:block sm:w-[calc(50%-2rem)]" />
              </div>
            ))}
          </div>
        ) : (
          /* Education list */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0f172a]/70 border border-white/10 hover:border-cyan-500/30 flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-400 border border-white/10">
                      {edu.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>

                  <div className="text-sm font-semibold text-slate-300 mt-1">
                    {edu.institution}
                  </div>

                  <div className="text-xs text-slate-400 flex items-center gap-1 mt-1 font-mono">
                    <MapPin className="w-3 h-3 text-cyan-400" />
                    <span>{edu.location}</span>
                  </div>

                  <div className="mt-4 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs">
                    <span className="text-slate-400">Score / Grade: </span>
                    <span className="text-cyan-300 font-bold font-mono text-sm">{edu.grade}</span>
                  </div>

                  <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                    {edu.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
