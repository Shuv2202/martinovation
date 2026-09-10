import React, { useState } from 'react';
import { TEAM_DATA } from '../data/team';
import { TeamMember } from '../types';
import { Users, Mail, Linkedin, Sparkles, UserCheck } from 'lucide-react';

interface TeamProps {
  onShowToast: (title: string, message: string) => void;
}

export const Team: React.FC<TeamProps> = ({ onShowToast }) => {
  const [activeCategory, setActiveCategory] = useState<string>(TEAM_DATA[0].categoryName);

  const currentCategoryData = TEAM_DATA.find((c) => c.categoryName === activeCategory) || TEAM_DATA[0];

  const handleContactClick = (member: TeamMember) => {
    if (member.email) {
      navigator.clipboard.writeText(member.email);
      onShowToast(
        'Contact Email Copied',
        `${member.name}'s email (${member.email}) was copied to your clipboard.`
      );
    }
  };

  return (
    <section id="team" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Users className="w-3.5 h-3.5 text-red-400" />
            <span>The Minds Behind The Fest</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Organizing <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Crew</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Meet the faculty mentors, student visionaries, technical architects, and management squads bringing Martinovation 2026 to life.
          </p>
        </div>

        {/* Team Category Navigation Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {TEAM_DATA.map((cat) => {
            const isActive = activeCategory === cat.categoryName;
            return (
              <button
                key={cat.categoryName}
                onClick={() => setActiveCategory(cat.categoryName)}
                className={`px-4 py-2 rounded-xl font-orbitron text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                  isActive
                    ? 'bg-red-500/20 text-red-300 border border-red-500 shadow-[0_0_15px_rgba(255,23,68,0.3)]'
                    : 'bg-slate-900/70 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat.categoryName}
              </button>
            );
          })}
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentCategoryData.members.map((member) => (
            <div
              key={member.id}
              className="group relative p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,23,68,0.15)] flex flex-col justify-between backdrop-blur-md"
            >
              <div className="flex items-start gap-4">
                {/* Stylized Futuristic Avatar Placeholder */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-red-950/40 via-rose-900/30 to-slate-950 border border-red-500/30 flex items-center justify-center shrink-0 overflow-hidden shadow-inner group-hover:scale-105 transition-transform">
                  {/* Cyber monogram initials */}
                  <span className="font-orbitron font-extrabold text-red-300 text-lg tracking-wider">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join('')}
                  </span>
                  {/* Subtle corner light */}
                  <span className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                </div>

                {/* Info */}
                <div className="space-y-1 flex-1 min-w-0">
                  <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-red-400 transition-colors truncate">
                    {member.name}
                  </h3>
                  <div className="text-xs font-rajdhani font-bold text-amber-400 uppercase tracking-wide">
                    {member.role}
                  </div>
                  <p className="text-xs text-slate-400 font-inter truncate">
                    {member.department}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[11px] font-rajdhani text-slate-400 flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-red-400" />
                  <span>UMU Representative</span>
                </span>

                <div className="flex items-center gap-2">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                      aria-label={`${member.name}'s LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}

                  <button
                    onClick={() => handleContactClick(member)}
                    className="py-1.5 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-300 border border-red-500/30 hover:border-red-400 text-xs font-orbitron font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-1 focus:ring-red-500"
                    aria-label={`Contact ${member.name}`}
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Contact</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
