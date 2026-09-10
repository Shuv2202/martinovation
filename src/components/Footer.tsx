import React from 'react';
import { MartinovationLogo } from './MartinovationLogo';
import { 
  ArrowUp, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Twitter, 
  Sparkles,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenRegister: (eventId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (href: string) => {
    const el = document.getElementById(href.replace('#', ''));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#040407] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Top Cyber Accent Strip */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Logo & University Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="cursor-pointer" onClick={scrollToTop}>
              <MartinovationLogo size="md" />
            </div>
            <p className="text-slate-400 text-sm font-inter leading-relaxed max-w-sm">
              The premier annual techno-cultural festival of <strong>Usha Martin University</strong>. Fostering bold engineering minds, creative visionaries, and impactful solutions — where innovation knows no boundaries.
            </p>
            <div className="flex items-center gap-2 text-xs font-rajdhani text-red-400 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Where Ideas Become Impact</span>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-widest text-red-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm font-inter">
              {['home', 'about', 'schedule', 'gallery', 'sponsors', 'team'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => handleNav(`#${id}`)}
                    className="text-slate-400 hover:text-red-400 capitalize transition-colors text-left"
                  >
                    {id}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Arenas (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-widest text-rose-400">
              Featured Arenas
            </h4>
            <ul className="space-y-2 text-sm font-inter">
              <li>
                <button
                  onClick={() => handleNav('#events')}
                  className="text-slate-400 hover:text-rose-300 transition-colors text-left"
                >
                  HackGenesis 36H Hackathon
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#events')}
                  className="text-slate-400 hover:text-rose-300 transition-colors text-left"
                >
                  RoboWars Cyber Clash
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#events')}
                  className="text-slate-400 hover:text-rose-300 transition-colors text-left"
                >
                  Algolympics Speed Marathon
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#events')}
                  className="text-slate-400 hover:text-rose-300 transition-colors text-left"
                >
                  Nexus Esports Championship
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('#events')}
                  className="text-slate-400 hover:text-rose-300 transition-colors text-left"
                >
                  National Innovation Expo
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Campus & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-orbitron text-xs font-bold uppercase tracking-widest text-amber-400">
              Campus Location
            </h4>
            <div className="space-y-2 text-xs font-inter text-slate-400 leading-relaxed">
              <p className="text-white font-medium">Usha Martin University</p>
              <p>Narayansoso, Angara, Ranchi, Jharkhand 835103</p>
              <p className="text-red-400">martinovation@umu.ac.in</p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              <a
                href="https://instagram.com/ushamartinuniv"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/school/usha-martin-university"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-red-400 hover:border-red-500/40 transition-colors"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-rajdhani text-slate-400">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Martinovation. All Rights Reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-slate-300 font-semibold">
              Designed by students of Usha Martin University
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenRegister()}
              className="text-red-400 hover:text-red-300 font-orbitron font-bold uppercase tracking-wider text-[11px]"
            >
              Register for Fest
            </button>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-red-400 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="font-semibold uppercase tracking-wider text-[10px]">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
