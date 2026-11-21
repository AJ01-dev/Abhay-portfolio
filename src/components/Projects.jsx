import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Layers, 
  Cpu, 
  Sparkles, 
  CheckCircle2, 
  Database, 
  Terminal, 
  Zap,
  Lock,
  MessageSquare
} from 'lucide-react';
import { Github } from './Icons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Software Engineering Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Systems & Platforms
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Engineered with a focus on real-time concurrency, sandboxed remote code execution, payment integrations, and AI decision assistance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="rounded-2xl bg-[#0d1424]/90 border border-white/10 hover:border-cyan-500/40 shadow-xl overflow-hidden flex flex-col justify-between backdrop-blur-md transition-all duration-300 group"
            >
              {/* Card Header & Preview Mockup */}
              <div>
                <div className="p-6 pb-4 border-b border-white/5 bg-gradient-to-r from-slate-900 to-[#11192e]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-cyan-400" />
                      {proj.category}
                    </span>
                    <span className="text-xs font-mono text-slate-400">
                      {proj.period}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                        {proj.subtitle}
                      </p>
                    </div>

                    {/* Quick Link Buttons */}
                    <div className="flex items-center space-x-2">
                      <a
                        href={proj.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      <a
                        href={proj.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-cyan-200 transition-colors"
                        title="Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Key Points & Architecture Highlights */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2.5">
                    {proj.points.map((point, idx) => (
                      <div key={idx} className="flex items-start text-xs text-slate-300 leading-relaxed gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>

                  {/* Architecture breakdown snippet */}
                  <div className="mt-4 p-3.5 rounded-xl bg-[#080d1a] border border-white/5 space-y-2">
                    <div className="text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                      <Layers className="w-3.5 h-3.5" /> Architecture Overview
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-400">
                      <div>
                        <span className="text-slate-200 font-medium">Frontend:</span> {proj.architecture.frontend}
                      </div>
                      <div>
                        <span className="text-slate-200 font-medium">Backend:</span> {proj.architecture.backend}
                      </div>
                      <div>
                        <span className="text-slate-200 font-medium">Core Engine:</span> {proj.architecture.execution || proj.architecture.ai}
                      </div>
                      <div>
                        <span className="text-slate-200 font-medium">Persistence:</span> {proj.architecture.database || proj.architecture.payments}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technologies Footer */}
              <div className="p-6 pt-0">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {proj.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5 group-hover:border-cyan-500/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
