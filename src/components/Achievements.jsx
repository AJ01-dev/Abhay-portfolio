import React from 'react';
import { Award, Trophy, Code, Target, ExternalLink, CheckCircle2, Star, Zap } from 'lucide-react';
import { achievements, personalInfo } from '../data/portfolioData';

export default function Achievements() {
  const platforms = [
    { name: "Codeforces", role: "Pupil (Max 1207)", link: personalInfo.codeforces, color: "text-blue-400 border-blue-500/30 bg-blue-950/40" },
    { name: "LeetCode", role: "550+ Solved", link: personalInfo.leetcode, color: "text-amber-400 border-amber-500/30 bg-amber-950/40" },
    { name: "CodeChef", role: "2-Star Rating", link: personalInfo.codechef, color: "text-orange-400 border-orange-500/30 bg-orange-950/40" },
  ];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/20 text-amber-300 text-xs font-mono">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Excellence & Algorithmic Rigor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Honors, Ratings & Achievements
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Demonstrated mastery in national engineering examinations, competitive coding divisions, and core mathematics.
          </p>
        </div>

        {/* Competitive Coding Platform Quick Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {platforms.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className={`p-4 rounded-xl border ${p.color} flex items-center justify-between hover:scale-[1.02] transition-transform`}
            >
              <div>
                <span className="text-xs uppercase font-mono text-slate-300">{p.name}</span>
                <div className="text-lg font-bold text-white font-mono mt-0.5">{p.role}</div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400" />
            </a>
          ))}
        </div>

        {/* Main Achievements Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0f172a]/70 border border-white/10 hover:border-amber-500/40 shadow-lg flex flex-col justify-between transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                    {item.category}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-gradient-to-r ${item.color} text-white shadow-sm`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-xs font-medium text-cyan-400 mt-1 mb-3">
                  {item.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Verified Metric</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
