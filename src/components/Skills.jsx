import React, { useState } from 'react';
import { Cpu, Search, Sparkles, Code, Server, Terminal, Database, Wrench, Shield } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...skillCategories.map(c => c.name)];

  const filteredCategories = skillCategories.map(category => {
    if (selectedCategory !== 'All' && category.name !== selectedCategory) {
      return null;
    }
    const filteredSkills = category.skills.filter(s => 
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredSkills.length === 0) return null;
    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-20 relative bg-[#070b14]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/20 text-cyan-300 text-xs font-mono">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Domain Expertise
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Proficiencies cultivated through real-world software engineering, competitive algorithmic problem solving, and autonomous AI benchmarking.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-white/10 w-full sm:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-black font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills (e.g. Docker, RAG)..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 font-mono"
            />
          </div>
        </div>

        {/* Skills Categories Display */}
        <div className="space-y-8">
          {filteredCategories.map((category, idx) => (
            <div key={idx} className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <h3 className="text-base font-bold text-white tracking-tight">{category.name}</h3>
                <span className="text-xs font-mono text-slate-400">({category.skills.length})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-[#0f172a]/70 border border-white/10 hover:border-cyan-500/30 hover:bg-[#131d36]/80 transition-all group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                        skill.level === 'Specialist' 
                          ? 'bg-purple-950/80 text-purple-300 border border-purple-500/30'
                          : skill.level === 'Advanced'
                          ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/30'
                          : 'bg-blue-950/80 text-blue-300 border border-blue-500/30'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {skill.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-slate-400 text-sm">
              No matching skills found for "{searchQuery}".
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
