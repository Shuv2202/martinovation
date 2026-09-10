import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  Bookmark,
  Radio
} from 'lucide-react';
import { MartinovationLogo } from './MartinovationLogo';
import { sound } from '../utils/audio';

interface NavbarProps {
  onOpenRegister: (eventId?: string) => void;
  onOpenDeck?: () => void;
  deckCount?: number;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Arenas', href: '#events' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Radar', href: '#radar' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC<NavbarProps> = ({ 
  onOpenRegister,
  onOpenDeck,
  deckCount = 0
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track scroll state and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    sound.playClick();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#050508]/90 backdrop-blur-xl border-b border-red-500/20 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.9)]'
            : 'bg-gradient-to-b from-[#050508]/95 via-[#050508]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded-lg p-1"
            >
              <MartinovationLogo size="sm" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-slate-800/90 backdrop-blur-md shadow-inner">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative px-3.5 py-1.5 rounded-full text-xs font-orbitron font-medium tracking-wide transition-all ${
                      isActive
                        ? 'text-red-400 font-bold bg-red-500/10 shadow-[0_0_12px_rgba(255,23,68,0.2)]'
                        : 'text-slate-300 hover:text-red-300 hover:bg-slate-900/60'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-[2px] bg-red-500 rounded-full shadow-[0_0_8px_#ff1744]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action CTAs: Deck Shortlist & Register */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* My Festival Deck Shortlist Button */}
              {onOpenDeck && (
                <button
                  onClick={() => {
                    sound.playClick();
                    onOpenDeck();
                  }}
                  className={`relative px-3 py-2 rounded-lg border text-xs font-rajdhani font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    deckCount > 0
                      ? 'bg-red-500/20 border-red-500 text-red-300 shadow-[0_0_12px_rgba(255,23,68,0.3)]'
                      : 'bg-slate-950/80 border-slate-800 text-slate-300 hover:border-slate-700'
                  }`}
                  title="View Shortlisted Challenges"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${deckCount > 0 ? 'fill-red-500 text-red-500' : ''}`} />
                  <span className="hidden sm:inline">Deck</span>
                  {deckCount > 0 && (
                    <span className="w-4 h-4 rounded-full bg-red-500 text-black font-mono text-[10px] font-black flex items-center justify-center">
                      {deckCount}
                    </span>
                  )}
                </button>
              )}

            {/* Primary Register CTA */}
            <button
              onClick={() => {
                sound.playClick();
                onOpenRegister();
              }}
              className="relative hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-orbitron text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 transition-all duration-200 shadow-[0_0_15px_rgba(255,23,68,0.45)] hover:shadow-[0_0_22px_rgba(255,23,68,0.65)] hover:scale-[1.02] active:scale-[0.98]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Register</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-lg bg-slate-950/90 border border-red-500/30 text-red-400 hover:text-white hover:bg-red-500/10 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/85 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Drawer Content */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-[#070b16] border-l border-cyan-500/30 p-6 pt-20 flex flex-col justify-between shadow-2xl transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-2">
            <div className="pb-3 mb-2 border-b border-slate-800 flex items-center justify-between">
              <span className="font-orbitron text-xs tracking-widest text-cyan-400 uppercase">
                Fest Navigation
              </span>
              <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE
              </span>
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg font-orbitron text-xs tracking-wide transition-all ${
                    isActive
                      ? 'bg-red-500/20 border border-red-500/40 text-red-300 font-bold'
                      : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff1744]" />}
                </a>
              );
            })}
          </div>

          {/* Bottom Actions */}
          <div className="pt-5 border-t border-slate-800/80 space-y-3">
            {onOpenDeck && deckCount > 0 && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDeck();
                }}
                className="w-full py-2.5 px-3 rounded-lg bg-slate-950 border border-red-500/40 text-red-300 font-rajdhani font-bold text-xs uppercase flex items-center justify-center gap-2"
              >
                <Bookmark className="w-4 h-4 fill-red-500 text-red-500" />
                <span>View My Shortlisted Deck ({deckCount})</span>
              </button>
            )}

            <button
              onClick={() => {
                sound.playSuccess();
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white font-orbitron font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,23,68,0.45)]"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register Now</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="text-center text-[11px] text-slate-500 font-rajdhani">
              Usha Martin University • Angara, Ranchi
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
