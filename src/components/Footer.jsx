import React from 'react';
import { Heart, Code2, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#050810] py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Logo & Tagline */}
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Code2 className="w-4 h-4" />
              </div>
              <span className="font-bold text-white text-base tracking-tight">
                Abhay Jaiswal
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              IIIT Surat · Full Stack Engineer & SWE-bench Evaluator
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-amber-400 transition-colors"
            >
              LeetCode
            </a>
            <span className="text-slate-700">•</span>
            <a
              href={personalInfo.codeforces}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-blue-400 transition-colors"
            >
              Codeforces
            </a>
          </div>

          {/* Scroll to Top */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-400 hover:text-white transition-all group"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} Abhay Jaiswal. Engineered with React, Vite & Tailwind CSS.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with precision for software engineering & AI excellence.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
