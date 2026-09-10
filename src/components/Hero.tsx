import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  MapPin, 
  ArrowRight, 
  Sparkles, 
  ChevronDown, 
  Compass, 
  ShieldCheck, 
  Zap, 
  Navigation,
  Flame,
  Award
} from 'lucide-react';
import { HoloPassStudio } from './HoloPassStudio';
import { sound } from '../utils/audio';

interface HeroProps {
  onOpenRegister: (eventId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  // Target festival date: October 05, 2026
  const targetDate = new Date('2026-10-05T09:00:00');

  const [timeLeft, setTimeLeft] = useState({
    days: 36,
    hours: 14,
    minutes: 42,
    seconds: 18,
    progress: 65
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ 
        days, 
        hours, 
        minutes, 
        seconds,
        progress: (seconds / 60) * 100
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    sound.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-32 pb-12 overflow-hidden"
    >
      {/* Dynamic Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Grid: Left Command Specs & Right Interactive Holographic Pass */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 my-auto z-10 w-full">
        {/* Left Column: Mission Briefing & Chrono Reactor */}
        <div className="flex-1 text-center lg:text-left space-y-6 max-w-2xl">
          {/* Status Telemetry Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.2)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>USHA MARTIN UNIVERSITY PRESENTS</span>
            <span className="text-slate-500">•</span>
            <span className="text-yellow-400 font-mono">EDITION 2026</span>
          </div>

          {/* Main Title & Theme */}
          <div className="space-y-3">
            <h1 className="font-orbitron text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white uppercase leading-none">
              MARTIN<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">OVATION</span>
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-3">
              <span className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-yellow-400 hidden sm:inline-block" />
              <p className="font-orbitron font-extrabold text-xs sm:text-base tracking-[0.2em] text-yellow-400 uppercase drop-shadow">
                WHERE INNOVATION KNOWS NO BOUNDARIES
              </p>
              <span className="h-[2px] w-6 sm:w-10 bg-gradient-to-r from-yellow-400 to-transparent hidden sm:inline-block" />
            </div>
          </div>

          {/* Value Proposition */}
          <div>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter max-w-xl">
              Where visionary student engineers, ethical hackers, combat robot builders, and artists converge at Usha Martin University, Ranchi.
            </p>
          </div>

          {/* Geo-Location Tag & Live Countdown Dial */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs font-rajdhani font-semibold text-slate-300">
            <div className="flex items-center gap-1.5 bg-slate-950/90 px-3.5 py-2 rounded-lg border border-slate-800">
              <Calendar className="w-4 h-4 text-red-500" />
              <span>Oct 05 - 09, 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950/90 px-3.5 py-2 rounded-lg border border-slate-800">
              <MapPin className="w-4 h-4 text-rose-400" />
              <span>Angara, Ranchi, Jharkhand</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950/90 px-3.5 py-2 rounded-lg border border-slate-800 text-yellow-400">
              <Award className="w-4 h-4" />
              <span>₹2,50,000+ Prize Pool</span>
            </div>
          </div>

          {/* Interactive Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
            <button
              onClick={() => {
                sound.playSuccess();
                onOpenRegister();
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-orbitron font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,23,68,0.45)] hover:shadow-[0_0_35px_rgba(255,23,68,0.7)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Register Online</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <button
              onClick={() => scrollToSection('events')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-950/90 hover:bg-slate-900 text-slate-100 font-orbitron font-semibold text-xs sm:text-sm uppercase tracking-wider border border-red-500/40 hover:border-red-400 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <Compass className="w-4 h-4 text-red-400" />
              <span>Explore Arenas</span>
            </button>

            <button
              onClick={() => scrollToSection('campus')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-950/60 hover:bg-slate-900/80 text-slate-300 font-rajdhani font-semibold text-sm tracking-wider border border-slate-800 transition-all flex items-center justify-center gap-2"
            >
              <Navigation className="w-4 h-4 text-rose-400" />
              <span>Campus Radar</span>
            </button>
          </div>

          {/* Chrono Reactor Countdown Bar */}
          <div className="pt-2">
            <div className="p-4 rounded-xl bg-slate-950/90 border border-red-500/30 backdrop-blur-md max-w-lg shadow-xl">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80 text-xs font-rajdhani text-slate-400 uppercase tracking-widest">
                <span className="flex items-center gap-1.5 text-red-400">
                  <Zap className="w-3.5 h-3.5 text-red-500" />
                  Live Chrono Synchronization
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  IST (UTC+5:30)
                </span>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-orbitron font-extrabold text-xl sm:text-2xl text-red-400">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-rajdhani">Days</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-orbitron font-extrabold text-xl sm:text-2xl text-red-400">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-rajdhani">Hours</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-orbitron font-extrabold text-xl sm:text-2xl text-red-400">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-rajdhani">Minutes</div>
                </div>
                <div className="bg-slate-900/90 p-2.5 rounded-lg border border-slate-800">
                  <div className="font-orbitron font-extrabold text-xl sm:text-2xl text-yellow-400 font-mono">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-400 uppercase font-rajdhani">Seconds</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Holographic Pass Studio */}
        <div className="flex-1 w-full flex items-center justify-center py-4 lg:py-0">
          <HoloPassStudio />
        </div>
      </div>

      {/* Festival Statistics Ribbon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-10 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-slate-950/90 border border-red-500/20 backdrop-blur-xl shadow-2xl">
          <div className="text-center p-3 border-r border-slate-800 last:border-r-0 md:last:border-r-0">
            <div className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-rose-300">
              5 Days
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase font-rajdhani mt-1">
              National Odyssey
            </div>
          </div>

          <div className="text-center p-3 border-r-0 md:border-r border-slate-800">
            <div className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-300">
              20+ Arenas
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase font-rajdhani mt-1">
              Tech, Combat & Cult
            </div>
          </div>

          <div className="text-center p-3 border-r border-slate-800">
            <div className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-200">
              ₹2.5L+
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase font-rajdhani mt-1">
              Grand Cash Vault
            </div>
          </div>

          <div className="text-center p-3">
            <div className="font-orbitron text-2xl sm:text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-300">
              3,000+
            </div>
            <div className="text-xs sm:text-sm font-semibold tracking-wider text-slate-400 uppercase font-rajdhani mt-1">
              Delegates & Builders
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-red-400 transition-colors group focus:outline-none"
            aria-label="Scroll down to About section"
          >
            <span className="text-[11px] font-rajdhani tracking-widest uppercase">Explore Odyssey</span>
            <ChevronDown className="w-5 h-5 animate-bounce text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
};
