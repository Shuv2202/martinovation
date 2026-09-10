import React, { useEffect, useState } from 'react';
import { MartinovationLogo } from './MartinovationLogo';

interface LoadingScreenProps {
  onFinish: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Genesis Protocol...');

  useEffect(() => {
    const statuses = [
      'Initializing Genesis Protocol...',
      'Connecting to UMU Cyber Core...',
      'Calibrating Robotics & Code Arenas...',
      'Synchronizing Event Matrices...',
      'Genesis of Tomorrow Ready.'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 18 + 12);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 400);
          return 100;
        }

        const idx = Math.min(
          Math.floor((next / 100) * statuses.length),
          statuses.length - 1
        );
        setStatusText(statuses[idx]);
        return next;
      });
    }, 120);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#050811] flex flex-col items-center justify-center p-6 select-none transition-opacity duration-500"
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Loading Martinovation 2026"
    >
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-cyber-grid opacity-25 pointer-events-none" />

      {/* Central Emblem */}
      <div className="relative z-10 flex flex-col items-center space-y-8 max-w-sm w-full text-center">
        <MartinovationLogo size="hero" showText={false} className="scale-75 sm:scale-90" />

        <div className="space-y-2">
          <h2 className="font-orbitron text-2xl font-black tracking-widest text-white">
            MARTIN<span className="text-cyan-400">OVATION</span>
          </h2>
          <p className="text-xs font-orbitron font-bold tracking-[0.25em] text-yellow-400 uppercase">
            GENESIS OF TOMORROW
          </p>
          <p className="text-[11px] font-rajdhani text-slate-400 uppercase tracking-wider">
            Usha Martin University • Ranchi
          </p>
        </div>

        {/* Progress Bar Container */}
        <div className="w-full space-y-2">
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-cyan-500/30 p-0.5">
            <div
              className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400 rounded-full transition-all duration-150 shadow-[0_0_12px_#00f0ff]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-xs font-mono text-cyan-300 px-1">
            <span className="truncate max-w-[240px] text-slate-400 font-rajdhani text-xs">
              {statusText}
            </span>
            <span className="font-bold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};
