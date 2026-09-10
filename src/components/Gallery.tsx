import React, { useState, useEffect } from 'react';
import { GalleryItem, GalleryCategory } from '../types';
import { GALLERY_DATA } from '../data/gallery';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Image as ImageIcon, 
  Sparkles,
  Zap,
  Cpu,
  Compass,
  Code2,
  Users,
  Radio,
  Sun,
  Trophy,
  Gamepad2,
  Sliders,
  Layers,
  Music
} from 'lucide-react';

const CATEGORIES: GalleryCategory[] = [
  'All',
  'Campus Vibes',
  'Event Highlights',
  'Team Moments',
  'Previous Editions'
];

// Map SVG icon identifiers
const iconMap: Record<string, React.ElementType> = {
  Zap,
  Cpu,
  Compass,
  Code2,
  Users,
  Radio,
  Sun,
  Trophy,
  Gamepad2,
  Sliders,
  Layers,
  Music
};

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) =>
    activeCategory === 'All' ? true : item.category === activeCategory
  );

  const currentItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      if (e.key === 'Escape') {
        setLightboxIndex(null);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null ? (prev + 1) % filteredItems.length : null));
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null));
      }
    };

    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, filteredItems.length]);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <ImageIcon className="w-3.5 h-3.5 text-purple-400" />
            <span>Visual Archives</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Festival <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Chronicles</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Relive electric stage performances, intense lab combat, student organizing teamwork, and campus horizons across Martinovation.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setLightboxIndex(null);
                }}
                className={`px-4 py-2 rounded-full font-orbitron text-xs font-semibold tracking-wider transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                  isActive
                    ? 'bg-gradient-to-r from-purple-500 to-cyan-400 text-black font-bold shadow-[0_0_15px_rgba(139,92,246,0.4)] scale-105'
                    : 'bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const Icon = iconMap[item.svgIcon] || Sparkles;
            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(index)}
                className="group relative h-72 rounded-2xl overflow-hidden cursor-pointer border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.25)] hover:-translate-y-1"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setLightboxIndex(index);
                  }
                }}
                aria-label={`View full details of ${item.title}`}
              >
                {/* Cyber Card Background Artwork */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105 flex items-center justify-center p-6`}>
                  {/* Cyber Pattern Grid */}
                  <div className="absolute inset-0 bg-cyber-grid opacity-30 pointer-events-none" />

                  {/* Central Symbolic Cyber Icon */}
                  <div className="relative flex flex-col items-center justify-center space-y-3 p-6 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-sm group-hover:border-cyan-400/50 group-hover:bg-black/20 transition-all">
                    <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-transform duration-300 shadow-[0_0_20px_rgba(0,240,255,0.3)]">
                      <Icon className="w-10 h-10" />
                    </div>
                    <span className="font-orbitron font-bold text-xs tracking-widest text-slate-300 text-center uppercase">
                      {item.badge}
                    </span>
                  </div>
                </div>

                {/* Badge top right */}
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] font-orbitron font-bold uppercase tracking-wider bg-slate-950/80 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b16] via-[#070b16]/70 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.title}
                      </h3>
                      <div className="p-2 rounded-lg bg-cyan-500/20 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>
                    <p className="text-xs text-slate-300 font-inter line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {currentItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Controls Bar */}
          <div
            className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between z-20"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-cyan-400 font-mono text-xs sm:text-sm">
                {lightboxIndex + 1} / {filteredItems.length}
              </span>
              <span className="hidden sm:inline-block text-xs font-rajdhani text-slate-400">
                Use [←] and [→] keys to navigate • [ESC] to exit
              </span>
            </div>

            <button
              onClick={() => setLightboxIndex(null)}
              className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-slate-300 hover:text-white hover:border-cyan-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white hover:text-cyan-400 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white hover:text-cyan-400 transition-all z-20 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Display Card */}
          <div
            className="relative max-w-4xl w-full max-h-[85vh] rounded-2xl overflow-hidden bg-slate-950 border border-cyan-500/40 shadow-[0_0_60px_rgba(0,240,255,0.3)] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Display Canvas Art */}
            <div className={`w-full h-80 sm:h-96 md:h-[440px] bg-gradient-to-br ${currentItem.gradient} relative flex items-center justify-center p-8`}>
              <div className="absolute inset-0 bg-cyber-grid opacity-25" />
              
              <div className="relative flex flex-col items-center justify-center space-y-4 text-center">
                <div className="p-6 rounded-2xl bg-black/50 border border-cyan-400/40 text-cyan-300 shadow-[0_0_35px_rgba(0,240,255,0.4)]">
                  {React.createElement(iconMap[currentItem.svgIcon] || Sparkles, { className: 'w-16 h-16 sm:w-20 sm:h-20' })}
                </div>
                <span className="font-orbitron text-sm sm:text-base font-bold tracking-widest text-cyan-300 uppercase">
                  {currentItem.badge}
                </span>
              </div>
            </div>

            {/* Metadata Footer */}
            <div className="p-6 bg-slate-900 border-t border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-orbitron text-xl font-bold text-white">
                  {currentItem.title}
                </h4>
                <span className="px-3 py-1 rounded-md text-xs font-rajdhani font-bold uppercase bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {currentItem.category}
                </span>
              </div>
              <p className="text-sm text-slate-300 font-inter leading-relaxed">
                {currentItem.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
