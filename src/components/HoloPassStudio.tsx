import React, { useState, useRef } from 'react';
import { 
  Sparkles, 
  Download, 
  Share2, 
  Check, 
  QrCode, 
  ShieldCheck, 
  Cpu, 
  Zap,
  RefreshCw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { sound } from '../utils/audio';
import { MartinovationLogo } from './MartinovationLogo';

const TRACKS = [
  { id: 'ai-hack', name: 'Hackathon & AI', color: 'from-red-500 to-rose-600', code: 'ARENA_01' },
  { id: 'robotics', name: 'Combat Robotics', color: 'from-amber-500 to-red-600', code: 'ARENA_02' },
  { id: 'cyber', name: 'Cyber Defense', color: 'from-rose-600 to-red-700', code: 'ARENA_03' },
  { id: 'esports', name: 'Esports League', color: 'from-red-600 to-amber-500', code: 'ARENA_04' },
  { id: 'creator', name: 'Design & Culture', color: 'from-amber-400 to-rose-500', code: 'ARENA_05' },
];

export const HoloPassStudio: React.FC = () => {
  const [delegateName, setDelegateName] = useState('Alex Rivera');
  const [institution, setInstitution] = useState('Usha Martin University');
  const [selectedTrack, setSelectedTrack] = useState(TRACKS[0]);
  const [badgeId, setBadgeId] = useState('UMU-MAR26-8942');
  const [copied, setCopied] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // 3D tilt effect state
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = (centerY - y) / 12;
    const tiltY = (x - centerX) / 12;

    setTilt({ x: tiltX, y: tiltY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.6
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const handleGenerateNewId = () => {
    sound.playClick();
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setBadgeId(`UMU-MAR26-${randomNum}`);
  };

  const handleSavePass = () => {
    sound.playSuccess();
    setIsSaved(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff1744', '#ef4444', '#fbbf24']
    });
    setTimeout(() => setIsSaved(false), 3500);
  };

  const handleShare = () => {
    sound.playClick();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(
        `I just generated my official Martinovation 2026 Delegate Pass! [ID: ${badgeId}]. Join me at Usha Martin University, Ranchi! https://martinovation.umu.ac.in`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Outer Glow frame */}
      <div className="absolute -inset-1 bg-gradient-to-r from-red-600/30 via-rose-500/20 to-amber-500/20 rounded-3xl blur-xl -z-10 opacity-75" />

      {/* Holographic ID Badge Container */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: 'transform 0.15s ease-out',
        }}
        className="relative rounded-2xl bg-[#09060b] border border-red-500/40 p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden cursor-pointer select-none backdrop-blur-xl group"
      >
        {/* Holographic Prismatic Sheen Overlay */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 23, 68, ${glare.opacity * 0.45}), rgba(220, 38, 38, ${glare.opacity * 0.35}), transparent 65%)`,
          }}
        />

        {/* Diagonal Shimmer Laser */}
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-red-500/15 to-transparent rotate-45 pointer-events-none group-hover:translate-x-full transition-transform duration-1000" />

        {/* Pass Header */}
        <div className="flex items-start justify-between border-b border-slate-800/80 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <MartinovationLogo size="sm" showText={false} />
            <div>
              <div className="font-orbitron font-extrabold text-sm tracking-wider text-white flex items-center gap-1.5">
                <span>MARTINOVATION</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 font-mono">2026</span>
              </div>
              <div className="text-[10px] text-slate-400 font-rajdhani uppercase tracking-widest">
                Usha Martin University • Official Pass
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-[10px] font-mono">
              <ShieldCheck className="w-3 h-3" />
              VERIFIED
            </div>
            <div className="text-[10px] text-slate-500 font-mono mt-1">
              RANCHI_ZONE
            </div>
          </div>
        </div>

        {/* Pass Body */}
        <div className="py-5 relative z-10 grid grid-cols-3 gap-4 items-center">
          {/* Delegate Avatar & Holo Chip */}
          <div className="col-span-1 flex flex-col items-center">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-slate-950 border-2 border-red-500/60 p-1 flex items-center justify-center overflow-hidden shadow-[0_0_20px_rgba(255,23,68,0.3)]">
              {/* Internal Avatar Simulation */}
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-slate-900 to-slate-950 flex flex-col items-center justify-center text-red-300 relative">
                <Cpu className="w-8 h-8 text-red-500 animate-pulse" />
                <span className="text-[9px] font-mono tracking-widest text-slate-400 mt-1">CHIP_NFC</span>
              </div>

              {/* Holographic Corner Watermark */}
              <div className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff1744]" />
            </div>

            <span className="mt-2 text-[10px] font-mono text-red-400/80 uppercase tracking-wider">
              {selectedTrack.code}
            </span>
          </div>

          {/* Delegate Details */}
          <div className="col-span-2 space-y-2 text-left pl-1">
            <div>
              <div className="text-[10px] font-rajdhani uppercase tracking-widest text-slate-400">
                Delegate Name
              </div>
              <div className="font-orbitron font-black text-lg sm:text-xl text-white truncate drop-shadow">
                {delegateName || 'Delegate Guest'}
              </div>
            </div>

            <div>
              <div className="text-[10px] font-rajdhani uppercase tracking-widest text-slate-400">
                Affiliation / Campus
              </div>
              <div className="text-xs sm:text-sm text-rose-200/90 font-medium truncate font-inter">
                {institution || 'University Representative'}
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <span className="text-[10px] font-rajdhani uppercase text-slate-400">Track:</span>
              <span className={`px-2 py-0.5 rounded text-[10px] font-bold font-rajdhani uppercase text-white bg-gradient-to-r ${selectedTrack.color}`}>
                {selectedTrack.name}
              </span>
            </div>
          </div>
        </div>

        {/* Pass Footer Barcode & QR */}
        <div className="border-t border-slate-800/80 pt-4 flex items-center justify-between relative z-10">
          <div className="space-y-1">
            <div className="text-[9px] font-mono text-slate-400 tracking-wider">
              PASS_AUTH_HASH
            </div>
            <div className="font-mono text-xs font-bold text-amber-400 tracking-wider">
              {badgeId}
            </div>
            {/* Fake Barcode Lines */}
            <div className="flex gap-[2px] h-4 items-end opacity-70">
              {[4, 8, 2, 7, 5, 9, 3, 6, 8, 3, 5, 9, 2, 7, 4, 8, 3, 6, 9, 4, 2].map((h, i) => (
                <div key={i} className="w-[3px] bg-slate-300" style={{ height: `${h * 2 + 4}px` }} />
              ))}
            </div>
          </div>

          {/* Interactive QR Simulation */}
          <div className="p-2 rounded-lg bg-white/95 text-slate-950 flex flex-col items-center justify-center shadow-lg">
            <QrCode className="w-10 h-10 text-black" />
            <span className="text-[7px] font-mono font-bold tracking-tighter text-slate-700 uppercase mt-0.5">
              GATE_ACCESS
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Customizer Controls */}
      <div className="mt-5 p-4 rounded-xl bg-slate-950/90 border border-slate-800 backdrop-blur-md space-y-3.5">
        <div className="flex items-center justify-between text-xs font-rajdhani font-bold text-red-400 uppercase tracking-wider">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            Personalize Your Delegate Pass
          </span>
          <button
            onClick={handleGenerateNewId}
            className="flex items-center gap-1 text-slate-400 hover:text-red-300 transition-colors"
            title="Generate Random Pass ID"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Random ID</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">Your Full Name</label>
            <input
              type="text"
              value={delegateName}
              onChange={(e) => setDelegateName(e.target.value)}
              maxLength={24}
              placeholder="e.g. Rahul Sen"
              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
          <div>
            <label className="block text-[11px] font-medium text-slate-400 mb-1">College / University</label>
            <input
              type="text"
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
              maxLength={30}
              placeholder="e.g. BIT Mesra / UMU"
              className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs focus:outline-none focus:border-red-500 transition-colors"
            />
          </div>
        </div>

        {/* Track Selector Buttons */}
        <div>
          <label className="block text-[11px] font-medium text-slate-400 mb-1.5">Primary Interest Arena</label>
          <div className="flex flex-wrap gap-1.5">
            {TRACKS.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  sound.playClick();
                  setSelectedTrack(track);
                }}
                className={`px-2.5 py-1 rounded-md text-[11px] font-rajdhani font-semibold transition-all ${
                  selectedTrack.id === track.id
                    ? 'bg-red-600 text-white font-bold shadow-[0_0_10px_rgba(255,23,68,0.5)]'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white'
                }`}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleSavePass}
            className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(255,23,68,0.4)] hover:brightness-110 active:scale-95 transition-all"
          >
            {isSaved ? (
              <>
                <Check className="w-4 h-4 text-white" />
                <span>Pass Saved!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Save Digital Pass</span>
              </>
            )}
          </button>

          <button
            onClick={handleShare}
            className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-rajdhani font-semibold flex items-center gap-1.5 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Copied Link!</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5 text-red-400" />
                <span>Share</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
