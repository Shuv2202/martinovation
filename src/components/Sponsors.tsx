import React, { useState } from 'react';
import { SPONSORS_DATA } from '../data/sponsors';
import { Sponsor } from '../types';
import { Award, Mail, ExternalLink, Sparkles, CheckCircle2, Copy } from 'lucide-react';

interface SponsorsProps {
  onShowToast: (title: string, message: string) => void;
}

export const Sponsors: React.FC<SponsorsProps> = ({ onShowToast }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const tiers: Sponsor['tier'][] = [
    'Title Sponsor',
    'Technology Partner',
    'Knowledge Partner',
    'Community Partner'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('sponsorship@martinovation.umu.ac.in');
    setCopiedEmail(true);
    onShowToast('Email Copied!', 'sponsorship@martinovation.umu.ac.in copied to your clipboard.');
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Industrial Alliances</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Partners in <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Innovation</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Collaborating with forward-thinking tech enterprises, venture mentors, and developer ecosystems where innovation knows no boundaries.
          </p>
        </div>

        {/* Sponsor Tier Groups */}
        <div className="space-y-12">
          {tiers.map((tier) => {
            const sponsorsInTier = SPONSORS_DATA.filter((s) => s.tier === tier);
            if (sponsorsInTier.length === 0) return null;

            return (
              <div key={tier} className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="h-px flex-1 bg-gradient-to-r from-transparent to-slate-800" />
                  <h3 className="font-orbitron text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-red-400 px-4 py-1 rounded-full bg-slate-900/90 border border-slate-800">
                    {tier}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-l from-transparent to-slate-800" />
                </div>

                <div
                  className={`grid gap-4 sm:gap-6 ${
                    tier === 'Title Sponsor'
                      ? 'grid-cols-1 max-w-xl mx-auto'
                      : tier === 'Technology Partner'
                      ? 'grid-cols-1 md:grid-cols-3'
                      : 'grid-cols-1 sm:grid-cols-2'
                  }`}
                >
                  {sponsorsInTier.map((sponsor) => (
                    <div
                      key={sponsor.id}
                      className="group relative p-6 sm:p-8 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-red-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,23,68,0.15)] flex flex-col items-center text-center justify-between backdrop-blur-md"
                    >
                      {/* Logo Display Box */}
                      <div className={`w-full py-6 px-4 rounded-xl bg-gradient-to-br ${sponsor.logoBg} border border-white/5 flex items-center justify-center mb-4 transition-transform group-hover:scale-105 duration-300`}>
                        <span
                          className="font-orbitron text-lg sm:text-xl font-black tracking-wider"
                          style={{ color: sponsor.accentColor }}
                        >
                          {sponsor.logoText}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="font-orbitron text-base sm:text-lg font-bold text-white group-hover:text-red-400 transition-colors">
                          {sponsor.name}
                        </h4>
                        <p className="text-xs text-slate-400 font-inter max-w-xs">
                          {sponsor.tagline}
                        </p>
                      </div>

                      <div className="mt-4 pt-4 border-t border-slate-800/80 w-full flex items-center justify-center gap-1.5 text-xs font-rajdhani text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Official Partner</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* "Become a Sponsor" Call to Action Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a0812] to-slate-900 border border-red-500/40 shadow-[0_0_40px_rgba(255,23,68,0.15)] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-rajdhani font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Elevate Your Brand</span>
            </div>
            <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white">
              Become a Sponsor of Martinovation 2026
            </h3>
            <p className="text-slate-300 text-sm sm:text-base font-inter leading-relaxed">
              Showcase your organization, technologies, and career opportunities to 3,000+ enthusiastic engineering, IT, and design graduates across Eastern India. Customized tier packages with stall booths, keynote slots, and challenge branding are available.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
            <a
              href="mailto:sponsorship@martinovation.umu.ac.in?subject=Martinovation%202026%20Sponsorship%20Enquiry"
              className="w-full sm:w-auto py-3.5 px-6 rounded-lg bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,23,68,0.4)] transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Sponsorship Enquiry</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto py-3.5 px-5 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 font-orbitron text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              aria-label="Copy sponsorship email to clipboard"
            >
              {copiedEmail ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300">Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
