import React, { useState } from 'react';
import { 
  Sparkles, 
  Cpu, 
  BrainCircuit, 
  Leaf, 
  Gamepad2, 
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Users,
  Award
} from 'lucide-react';
import { sound } from '../utils/audio';

const PILLARS = [
  {
    id: 'ai-compute',
    title: 'Cognitive Computing & Cyber Defense',
    subtitle: 'Next-Gen Software & Intelligent Systems',
    icon: BrainCircuit,
    color: 'from-red-600 to-rose-600',
    borderColor: 'border-red-500/50',
    textColor: 'text-red-400',
    description: 'High-performance computing cluster hosting HackGenesis 36H, algorithmic optimization duels, zero-day vulnerability discovery, and enterprise cloud architecture challenges.',
    highlights: [
      '36-Hour uninterrupted gigabit connectivity',
      'AI model inference rigs with GPU acceleration',
      'Mentorship from senior software architects',
      'Direct interview fast-tracks for top finishers'
    ],
    stats: '₹1,00,000+ Category Grants'
  },
  {
    id: 'robotics',
    title: 'Autonomous Robotics & Combat Arenas',
    subtitle: 'High-Impact Hardware Proving Grounds',
    icon: Cpu,
    color: 'from-amber-500 to-red-600',
    borderColor: 'border-amber-500/50',
    textColor: 'text-amber-400',
    description: 'Heavyweight enclosed polycarbonate arenas where combat robotics clash with pneumatic flippers, spinning flywheels, and line-following autonomous rovers navigating dynamic obstacle matrices.',
    highlights: [
      'Reinforced bulletproof test cage & RF testing stations',
      'On-site fabrication, soldering & battery charging bays',
      'Weight classes: 15kg Featherweight & 30kg Middleweight',
      'Precision optical lap telemetry tracking'
    ],
    stats: '₹75,000+ Hardware Purse'
  },
  {
    id: 'sustainable',
    title: 'Sustainable Innovation & Clean Energy',
    subtitle: 'Green Tech & Regional Impact',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-600',
    borderColor: 'border-emerald-500/50',
    textColor: 'text-emerald-400',
    description: 'Empowering engineering solutions addressing mineral wealth sustainability, smart agriculture, rural solar microgrids, and IoT water management for Jharkhand and beyond.',
    highlights: [
      'Prototype grant incubation via UMU Innovation Cell',
      'Evaluation by government & industrial clean-tech heads',
      'Patent filing advisory & IP protection assistance',
      'Direct access to angel investment network'
    ],
    stats: '₹50,000+ Prototype Grants'
  },
  {
    id: 'culture-esports',
    title: 'Digital Arts, Esports & Star Showcases',
    subtitle: 'Creative Expression & Mainstage Odyssey',
    icon: Gamepad2,
    color: 'from-rose-600 to-red-700',
    borderColor: 'border-rose-500/50',
    textColor: 'text-rose-400',
    description: '5v5 LAN warfare in Valorant & BGMI arenas, accompanied by high-energy rock band battles, street-play dramatics, electronic dance showcases, and the signature Celebrity Star Night.',
    highlights: [
      'Ultra low-latency tournament server infrastructure',
      'Pro-grade audio acoustics at UMU Amphitheatre',
      'National celebrity performer grand finale',
      'Live Twitch / YouTube broadcast desk'
    ],
    stats: '₹50,000+ LAN & Arts Pool'
  }
];

export const About: React.FC = () => {
  const [activePillarId, setActivePillarId] = useState(PILLARS[0].id);

  const activePillar = PILLARS.find((p) => p.id === activePillarId) || PILLARS[0];
  const IconComponent = activePillar.icon;

  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508]">
      {/* Decorative background grid and lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4/5 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-rose-600/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>The Genesis Blueprint</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Engineering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Next Horizon</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Martinovation is not just a campus fest — it is Usha Martin University’s national proving ground. A 5-day crucible where theoretical knowledge transforms into working hardware, production code, and cultural memory.
          </p>
        </div>

        {/* Interactive Ecosystem Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Pillar Selector Tabs (Left Col 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-3">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activePillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => {
                    sound.playClick();
                    setActivePillarId(pillar.id);
                  }}
                  className={`text-left p-4 sm:p-5 rounded-2xl border transition-all duration-200 flex items-start gap-4 ${
                    isActive
                      ? 'bg-slate-950 border-red-500/80 shadow-[0_0_25px_rgba(255,23,68,0.25)] translate-x-1 sm:translate-x-2'
                      : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/50 hover:border-slate-700'
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                      isActive
                        ? `bg-gradient-to-br ${pillar.color} text-white font-bold shadow-lg`
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
                        {pillar.stats}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ff1744]" />
                      )}
                    </div>
                    <h3 className={`font-orbitron font-bold text-sm sm:text-base mt-0.5 ${isActive ? 'text-white' : 'text-slate-300'}`}>
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-400 font-inter mt-1 truncate">
                      {pillar.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Inspector Deck (Right Col 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="flex-1 p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-red-500/30 backdrop-blur-xl shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Background watermark */}
              <div className="absolute top-4 right-4 text-slate-800/30 font-orbitron font-black text-8xl pointer-events-none select-none">
                0{PILLARS.findIndex((p) => p.id === activePillarId) + 1}
              </div>

              <div className="space-y-6 relative z-10">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${activePillar.color} text-white font-black shadow-lg`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-widest text-red-400">
                      CORE CAPABILITY ARCHITECTURE
                    </div>
                    <h3 className="font-orbitron font-black text-xl sm:text-2xl text-white">
                      {activePillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm sm:text-base font-inter leading-relaxed">
                  {activePillar.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-rajdhani font-bold uppercase tracking-wider text-slate-400">
                    Proving Ground Specifications:
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activePillar.highlights.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-2.5 text-xs text-slate-200 font-inter"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Approved by Faculty Technical Committee</span>
                </div>

                <a
                  href="#events"
                  onClick={(e) => {
                    e.preventDefault();
                    sound.playClick();
                    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-orbitron font-bold uppercase tracking-wider text-red-400 hover:text-red-300 transition-colors"
                >
                  <span>View Related Arenas</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* University Credibility & Campus Credentials */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950/90 via-[#12070c]/90 to-slate-950/90 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 shrink-0">
              <Building2 className="w-8 h-8" />
            </div>
            <div>
              <h4 className="font-orbitron text-base sm:text-lg font-bold text-white">
                Usha Martin University Campus • Angara, Ranchi
              </h4>
              <p className="text-slate-400 text-xs sm:text-sm font-inter mt-0.5">
                Recognized by UGC and Government of Jharkhand. Spanning high-tech computer laboratories, advanced robotics research cells, and green campus spaces.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs font-rajdhani tracking-wider text-red-300 uppercase shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800">
              <Award className="w-4 h-4 text-yellow-400" />
              <span>₹2.5L+ Cash Vault</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-2 rounded-lg border border-slate-800">
              <Users className="w-4 h-4 text-rose-400" />
              <span>Pan-India Delegates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
