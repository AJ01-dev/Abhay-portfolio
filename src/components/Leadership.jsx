import React from 'react';
import { Users, Sparkles, BookOpen, TrendingUp, Award, CheckCircle2 } from 'lucide-react';
import { leadership } from '../data/portfolioData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 relative bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-mono">
            <Users className="w-3.5 h-3.5 text-purple-400" />
            <span>Impact & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Leadership & Extracurriculars
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Organizing collegiate initiatives, conducting technical workshops, and mentoring future developers.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {leadership.map((item, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-[#0f172a]/70 border border-white/10 hover:border-purple-500/40 shadow-xl flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/80 text-purple-300 border border-purple-500/30 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                    {item.impact}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h3>
                
                <div className="text-sm font-semibold text-cyan-400 mt-1 mb-4">
                  {item.role}
                </div>

                <div className="space-y-3">
                  {item.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start text-xs sm:text-sm text-slate-300 leading-relaxed gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>IIIT Surat Community</span>
                <span className="text-purple-400">Collaborative Leadership</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
