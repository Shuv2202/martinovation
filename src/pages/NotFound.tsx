import React from 'react';
import { MartinovationLogo } from '../components/MartinovationLogo';
import { Home, ArrowLeft, ShieldAlert } from 'lucide-react';

interface NotFoundProps {
  onReturnHome: () => void;
}

export const NotFound: React.FC<NotFoundProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#050811] text-white flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

      {/* Glowing Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-md space-y-6">
        <MartinovationLogo size="md" showText={false} className="mx-auto" />

        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/30 text-red-400 font-mono text-xs uppercase tracking-widest">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>404 // Arena Not Found</span>
          </div>

          <h1 className="font-orbitron text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-yellow-400">
            404
          </h1>

          <h2 className="font-orbitron text-xl sm:text-2xl font-bold text-white">
            Lost in Cyber Orbit
          </h2>

          <p className="text-slate-400 text-sm font-inter leading-relaxed">
            The coordinates or event matrix you are trying to reach do not exist within the Martinovation 2026 grid.
          </p>
        </div>

        <button
          onClick={onReturnHome}
          className="py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-300 hover:to-cyan-400 text-black font-orbitron font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Fest HQ</span>
        </button>

        <div className="text-xs text-slate-400 font-rajdhani">
          Usha Martin University • Where Innovation Knows No Boundaries
        </div>
      </div>
    </div>
  );
};
