import React, { useState } from 'react';
import { 
  Trophy, 
  Sparkles, 
  Award, 
  Coins, 
  Rocket, 
  Briefcase, 
  Gift, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { sound } from '../utils/audio';

interface PrizeVaultProps {
  onOpenRegister: (eventId?: string) => void;
}

const PRIZE_CATEGORIES = [
  {
    id: 'cash',
    title: 'Direct Cash Purse',
    amount: '₹2,50,000+',
    icon: Coins,
    desc: 'Liquid cash rewards distributed across 1st, 2nd and 3rd place podium finishers in all technical arenas.',
    details: [
      '₹1,00,000 HackGenesis 36H Grand Pool',
      '₹75,000 RoboWars & Drone Prix Arena',
      '₹40,000 Algolympics & Web3 CTF',
      '₹35,000 Esports Warfare & Gaming League'
    ]
  },
  {
    id: 'incubation',
    title: 'Incubation & Seed Grants',
    amount: '₹10,00,000',
    icon: Rocket,
    desc: 'Access to seed capital, co-working space, and mentorship through Usha Martin Innovation & Incubation Centre (UMIIC).',
    details: [
      'Pre-seed prototype validation grant pipeline',
      'Free patent filing advisory & legal assistance',
      'Cloud compute credits (AWS, GCP, DigitalOcean)',
      'Direct pitch access to angel syndicates'
    ]
  },
  {
    id: 'careers',
    title: 'Internships & Hiring Fast-Track',
    amount: '15+ Offers',
    icon: Briefcase,
    desc: 'Top coders, roboticists, and security researchers receive direct interview waivers from our corporate tech sponsors.',
    details: [
      'Summer Software Engineering Internships',
      'Robotics R&D lab fellowship tracks',
      'Letter of recommendation from university council',
      '1-on-1 industry executive mentoring'
    ]
  },
  {
    id: 'swag',
    title: 'Hardware & Tech Goodies',
    amount: '₹1,50,000+',
    icon: Gift,
    desc: 'Cutting-edge dev boards, mechanical keyboards, gaming peripherals, and commemorative Martinovation 2026 kit.',
    details: [
      'Official Martinovation tactile delegate hoodies',
      'Custom fabricated titanium winner trophies',
      'Developer kits (Raspberry Pi & ESP32-S3 modules)',
      'Verified certificates with blockchain hash'
    ]
  }
];

export const PrizeVault: React.FC<PrizeVaultProps> = ({ onOpenRegister }) => {
  const [activePrize, setActivePrize] = useState(PRIZE_CATEGORIES[0].id);

  const selected = PRIZE_CATEGORIES.find((p) => p.id === activePrize) || PRIZE_CATEGORIES[0];
  const Icon = selected.icon;

  return (
    <section id="prizes" className="relative py-24 sm:py-32 overflow-hidden bg-[#060913] border-t border-slate-900">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-yellow-500/40 text-yellow-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span>The Innovation Bounty</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Grand <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-cyan-400">Prize Vault</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            More than just trophies — Martinovation 2026 accelerates your engineering career with direct financial capital, angel incubation pipelines, and corporate hiring tracks.
          </p>
        </div>

        {/* 4 Prize Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRIZE_CATEGORIES.map((cat) => {
            const CatIcon = cat.icon;
            const isCurrent = activePrize === cat.id;
            return (
              <div
                key={cat.id}
                onClick={() => {
                  sound.playClick();
                  setActivePrize(cat.id);
                }}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-slate-900 border-yellow-400/80 shadow-[0_0_25px_rgba(251,191,36,0.2)] -translate-y-1'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-xl ${isCurrent ? 'bg-yellow-400 text-black shadow-lg font-black' : 'bg-slate-900 text-yellow-400 border border-slate-800'}`}>
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-cyan-400">
                      {isCurrent ? 'ACTIVE_TIER' : 'VIEW'}
                    </span>
                  </div>

                  <div>
                    <div className="font-orbitron font-black text-2xl text-white">
                      {cat.amount}
                    </div>
                    <h3 className="font-orbitron font-bold text-sm text-yellow-400 mt-1">
                      {cat.title}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-300 font-inter leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800/80 text-[11px] text-slate-400 font-rajdhani flex items-center justify-between">
                  <span>{cat.details.length} Specialized Tracks</span>
                  <span className={`w-2 h-2 rounded-full ${isCurrent ? 'bg-yellow-400 animate-ping' : 'bg-slate-700'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Tier Expanded Breakdown */}
        <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-yellow-500/30 backdrop-blur-xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-3 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-yellow-400">
              <ShieldCheck className="w-4 h-4" />
              <span>SELECTED CATEGORY: {selected.title.toUpperCase()}</span>
            </div>
            <h4 className="font-orbitron font-bold text-xl text-white">
              Guaranteed Disbursements & Perks for {selected.amount}
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {selected.details.map((detail, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 font-inter">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              sound.playSuccess();
              onOpenRegister();
            }}
            className="w-full lg:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-300 to-cyan-400 hover:brightness-110 text-black font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(251,191,36,0.35)] shrink-0 transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4" />
            <span>Compete For This Vault</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
