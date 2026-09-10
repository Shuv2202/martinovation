import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero' | 'xl';
  showText?: boolean;
  className?: string;
}

export const MartinovationLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = ''
}) => {
  const sizeMap = {
    sm: { icon: 38, text: 'text-base', sub: 'text-[9px]' },
    md: { icon: 48, text: 'text-lg sm:text-xl', sub: 'text-[10px]' },
    lg: { icon: 72, text: 'text-2xl', sub: 'text-xs' },
    xl: { icon: 110, text: 'text-3xl', sub: 'text-sm' },
    hero: { icon: 260, text: 'text-4xl', sub: 'text-sm' }
  };

  const current = sizeMap[size];

  // The official Martinovation emblem vector graphic matching the user's uploaded insignia
  const renderEmblem = (width: number | string, height: number | string) => (
    <svg
      viewBox="0 0 500 500"
      width={width}
      height={height}
      className="drop-shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-transform duration-300 group-hover:scale-105"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Martinovation Official Insignia"
    >
      <defs>
        {/* Red to Dark Crimson Linear Gradient for Chevron Blades */}
        <linearGradient id="logoCyanBlueGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff1744" />
          <stop offset="30%" stopColor="#ef4444" />
          <stop offset="65%" stopColor="#dc2626" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>

        {/* Dark Metallic Chrome Gradient for Chassis & Traces */}
        <linearGradient id="logoMetallicDark" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="25%" stopColor="#1e293b" />
          <stop offset="60%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Chrome Edge Highlight Gradient */}
        <linearGradient id="logoChromeHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#94a3b8" />
          <stop offset="50%" stopColor="#475569" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* Industrial Gear Metallic Gradient */}
        <linearGradient id="logoGearGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="20%" stopColor="#1e293b" />
          <stop offset="75%" stopColor="#090d16" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Glowing Torus Orange to Crimson Gradient */}
        <linearGradient id="logoTorusGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="30%" stopColor="#ef4444" />
          <stop offset="70%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#fde047" />
        </linearGradient>

        {/* Radial Glow for Torus Core */}
        <radialGradient id="logoTorusInnerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fef08a" stopOpacity="1" />
          <stop offset="40%" stopColor="#f59e0b" stopOpacity="0.9" />
          <stop offset="80%" stopColor="#dc2626" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#7f1d1d" stopOpacity="0" />
        </radialGradient>

        {/* Terminal Sphere 3D Gradient */}
        <radialGradient id="logoSphereGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stopColor="#cbd5e1" />
          <stop offset="25%" stopColor="#64748b" />
          <stop offset="70%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#020617" />
        </radialGradient>

        {/* Bevel Lighting Filter */}
        <filter id="logoCoreGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g id="martinovation-official-emblem">
        {/* ==================== CIRCUIT BOARD TRACES (LEFT & RIGHT) ==================== */}
        {/* Left Circuit 1 (Outer) */}
        <path
          d="M 60,305 L 50,305 L 50,185 L 75,160 L 75,52"
          fill="none"
          stroke="#0f172a"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 60,305 L 50,305 L 50,185 L 75,160 L 75,52"
          fill="none"
          stroke="url(#logoChromeHighlight)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="75" cy="45" r="11" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="72" cy="42" r="3" fill="#ffffff" opacity="0.75" />

        {/* Left Circuit 2 (Middle) */}
        <path
          d="M 88,300 L 88,205 L 110,183 L 110,118"
          fill="none"
          stroke="#0f172a"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 88,300 L 88,205 L 110,183 L 110,118"
          fill="none"
          stroke="url(#logoChromeHighlight)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="110" cy="112" r="9.5" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="108" cy="109" r="2.5" fill="#ffffff" opacity="0.75" />

        {/* Left Circuit 3 (Inner) */}
        <path
          d="M 124,285 L 124,235 L 140,219 L 140,172"
          fill="none"
          stroke="#0f172a"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 124,285 L 124,235 L 140,219 L 140,172"
          fill="none"
          stroke="url(#logoChromeHighlight)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="140" cy="168" r="8" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="138" cy="165" r="2" fill="#ffffff" opacity="0.75" />

        {/* Right Circuit 1 (Outer) */}
        <path
          d="M 440,305 L 450,305 L 450,185 L 425,160 L 425,52"
          fill="none"
          stroke="#0f172a"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 440,305 L 450,305 L 450,185 L 425,160 L 425,52"
          fill="none"
          stroke="url(#logoChromeHighlight)"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="425" cy="45" r="11" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="422" cy="42" r="3" fill="#ffffff" opacity="0.75" />

        {/* Right Circuit 2 (Middle) */}
        <path
          d="M 412,300 L 412,205 L 390,183 L 390,118"
          fill="none"
          stroke="#0f172a"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 412,300 L 412,205 L 390,183 L 390,118"
          fill="none"
          stroke="url(#logoChromeHighlight)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="390" cy="112" r="9.5" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="388" cy="109" r="2.5" fill="#ffffff" opacity="0.75" />

        {/* Right Circuit 3 (Inner) */}
        <path
          d="M 376,285 L 376,235 L 360,219 L 360,172"
          fill="none"
          stroke="#0f172a"
          strokeWidth="9"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 376,285 L 376,235 L 360,219 L 360,172"
          fill="none"
          stroke="url(#logoChromeHighlight)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="360" cy="168" r="8" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="358" cy="165" r="2" fill="#ffffff" opacity="0.75" />

        {/* ==================== INDUSTRIAL GEAR (BOTTOM) ==================== */}
        <path
          d="
            M 125,365
            L 138,365 L 146,395 L 170,392 L 170,366
            L 182,374 L 185,410 L 208,416 L 214,388
            L 226,394 L 226,432 L 250,435 L 256,435 L 256,432 L 274,394
            L 286,388 L 292,416 L 315,410 L 318,374
            L 330,366 L 330,392 L 354,395 L 362,365
            L 375,365
            L 375,340
            L 335,340
            A 115 115 0 0 1 165,340
            L 125,340
            Z
          "
          fill="url(#logoGearGrad)"
          stroke="#64748b"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        {/* Beveled Rim Highlights */}
        <g stroke="#94a3b8" strokeWidth="1.5" fill="none">
          <path d="M 146,395 L 170,392" />
          <path d="M 185,410 L 208,416" />
          <path d="M 226,432 L 274,432" />
          <path d="M 292,416 L 315,410" />
          <path d="M 330,392 L 354,395" />
        </g>

        {/* Gear Hub Interior Seat */}
        <circle cx="250" cy="355" r="78" fill="#0b111e" stroke="#1e293b" strokeWidth="4" />
        <circle cx="250" cy="355" r="72" fill="none" stroke="#334155" strokeWidth="1.5" strokeDasharray="8,5" />

        {/* ==================== CENTRAL POWER CORE (TORUS / RING) ==================== */}
        {/* Glow halo */}
        <circle cx="250" cy="355" r="54" fill="url(#logoTorusInnerGlow)" opacity="0.7" filter="url(#logoCoreGlow)" />

        {/* Outer Torus Ring */}
        <circle
          cx="250"
          cy="355"
          r="44"
          fill="url(#logoTorusGrad)"
          stroke="#ea580c"
          strokeWidth="3"
          filter="url(#logoCoreGlow)"
        />
        {/* Specular Highlight */}
        <ellipse cx="250" cy="346" rx="34" ry="12" fill="#fef08a" opacity="0.6" />

        {/* Inner Void */}
        <circle cx="250" cy="355" r="23" fill="#090d16" stroke="#c2410c" strokeWidth="3.5" />
        <circle cx="250" cy="355" r="16" fill="#030712" />

        {/* Torus Vertical Antenna / Sensor Probe */}
        <rect x="247" y="278" width="6" height="34" fill="url(#logoMetallicDark)" stroke="#475569" strokeWidth="1" />
        <line x1="250" y1="278" x2="250" y2="312" stroke="#94a3b8" strokeWidth="1.5" />
        <circle cx="250" cy="274" r="7" fill="url(#logoSphereGrad)" stroke="#475569" strokeWidth="1.5" />
        <circle cx="248.5" cy="272.5" r="2" fill="#ffffff" opacity="0.8" />

        {/* ==================== THE FUTURISTIC "M" (CHEVRON & WINGS) ==================== */}
        {/* Left Wing Outer Bracket */}
        <polygon
          points="172,175 140,188 140,320 188,320 200,280 172,275"
          fill="url(#logoMetallicDark)"
          stroke="#334155"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Left Wing Glowing Blade */}
        <polygon
          points="167,185 148,195 148,310 182,310 193,278 167,273"
          fill="url(#logoCyanBlueGrad)"
          stroke="#ff1744"
          strokeWidth="2"
          strokeLinejoin="round"
          filter="url(#logoCoreGlow)"
        />

        {/* Right Wing Outer Bracket */}
        <polygon
          points="328,175 360,188 360,320 312,320 300,280 328,275"
          fill="url(#logoMetallicDark)"
          stroke="#334155"
          strokeWidth="3"
          strokeLinejoin="round"
        />
        {/* Right Wing Glowing Blade */}
        <polygon
          points="333,185 352,195 352,310 318,310 307,278 333,273"
          fill="url(#logoCyanBlueGrad)"
          stroke="#ff1744"
          strokeWidth="2"
          strokeLinejoin="round"
          filter="url(#logoCoreGlow)"
        />

        {/* ==================== CENTRAL V-CHEVRON (MAIN M APEX) ==================== */}
        {/* Outer Heavy Metallic Bevel of Chevron */}
        <polygon
          points="
            135,62
            170,62
            250,182
            330,62
            365,62
            365,160
            322,175
            250,245
            178,175
            135,160
          "
          fill="url(#logoMetallicDark)"
          stroke="#64748b"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />

        {/* Inner Glowing Chevron (V-Ribbon) */}
        <polygon
          points="
            146,75
            168,75
            250,195
            332,75
            354,75
            354,148
            316,164
            250,230
            184,164
            146,148
          "
          fill="url(#logoCyanBlueGrad)"
          stroke="#ff1744"
          strokeWidth="2.5"
          strokeLinejoin="round"
          filter="url(#logoCoreGlow)"
        />

        {/* Chevron Center Cut-out / Negative Relief (creating the double blade M shape) */}
        <polygon
          points="
            178,88
            250,192
            322,88
            338,98
            250,218
            162,98
          "
          fill="url(#logoMetallicDark)"
          stroke="#0f172a"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Specular Blade Edge Highlights */}
        <polyline
          points="135,62 170,62 250,182 330,62 365,62"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2.5"
          opacity="0.8"
        />
        <polyline
          points="178,175 250,245 322,175"
          fill="none"
          stroke="#ff4d4d"
          strokeWidth="2"
          opacity="0.9"
        />

        {/* Central Energy Spark Node */}
        <circle cx="250" cy="245" r="4" fill="#ffffff" />
      </g>
    </svg>
  );

  if (size === 'hero') {
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        {/* Outer Pulsing Glow */}
        <div className="absolute inset-0 rounded-full bg-red-500/15 blur-3xl animate-pulse-glow pointer-events-none" />

        {/* HUD Ring 1 - Outermost dashed */}
        <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full border border-red-500/25 border-dashed animate-spin-slow pointer-events-none" />

        {/* HUD Ring 2 - Counter-rotating with tick marks */}
        <div className="absolute w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] rounded-full border border-rose-500/30 border-t-red-500 border-b-yellow-400 animate-spin-reverse-slow pointer-events-none">
          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_#ff1744]" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_#fbbf24]" />
        </div>

        {/* Central Core Container */}
        <div className="relative w-[230px] h-[230px] sm:w-[270px] sm:h-[270px] rounded-full bg-slate-950/90 border border-red-500/40 p-5 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_40px_rgba(255,23,68,0.35)] group hover:shadow-[0_0_60px_rgba(255,23,68,0.55)] transition-all duration-500">
          {/* Emblem Graphic */}
          <div className="w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center">
            {renderEmblem('100%', '100%')}
          </div>

          {/* Monogram / Sub-label */}
          <span className="mt-2 font-orbitron font-extrabold tracking-[0.25em] text-red-400 text-xs sm:text-sm">
            MARTINOVATION
          </span>
          <span className="text-[10px] text-yellow-400/90 tracking-wider uppercase font-rajdhani font-semibold">
            Usha Martin University
          </span>
        </div>
      </div>
    );
  }

  // Standard inline badge/logo (sm, md, lg, xl)
  return (
    <div className={`flex items-center gap-3 select-none group ${className}`}>
      <div
        className="relative flex items-center justify-center rounded-xl bg-slate-950/90 border border-red-500/40 p-1 shadow-[0_0_15px_rgba(255,23,68,0.25)] transition-all duration-300 group-hover:border-red-400 group-hover:shadow-[0_0_25px_rgba(255,23,68,0.45)]"
        style={{ width: current.icon, height: current.icon }}
      >
        {renderEmblem('100%', '100%')}
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5">
            <span className={`font-orbitron font-extrabold tracking-wider text-white ${current.text}`}>
              MARTIN<span className="text-red-500">OVATION</span>
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          </div>
          <span className={`font-rajdhani font-semibold tracking-widest text-slate-400 uppercase ${current.sub}`}>
            Usha Martin University
          </span>
        </div>
      )}
    </div>
  );
};
