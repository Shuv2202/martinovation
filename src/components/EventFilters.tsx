import React from 'react';
import { EventCategory } from '../types';
import { Search, X, LayoutGrid, List } from 'lucide-react';
import { sound } from '../utils/audio';

interface EventFiltersProps {
  categories: EventCategory[];
  activeCategory: EventCategory;
  onSelectCategory: (category: EventCategory) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalResults: number;
  viewMode: 'grid' | 'table';
  onToggleViewMode: (mode: 'grid' | 'table') => void;
  categoryCounts: Record<string, number>;
}

export const EventFilters: React.FC<EventFiltersProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  totalResults,
  viewMode,
  onToggleViewMode,
  categoryCounts
}) => {
  return (
    <div className="space-y-6 mb-10">
      {/* Search Input, View Mode Switcher, and Result Counter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto">
        {/* Search Bar */}
        <div className="relative w-full sm:w-80">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4 text-red-500" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search events, AI, robotics, esports..."
            className="w-full pl-10 pr-10 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-white placeholder-slate-400 text-xs focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500 transition-all backdrop-blur-md"
            aria-label="Search events"
          />
          {searchQuery && (
            <button
              onClick={() => {
                sound.playClick();
                onSearchChange('');
              }}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-white"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* View Mode Switcher & Results badge */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <div className="text-xs font-rajdhani font-semibold text-slate-400 flex items-center gap-2">
            <span>Arenas:</span>
            <span className="px-2 py-0.5 rounded bg-red-500/10 border border-red-500/30 text-red-400 font-mono">
              {totalResults}
            </span>
          </div>

          {/* View Switcher Buttons */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-lg p-1">
            <button
              onClick={() => {
                sound.playClick();
                onToggleViewMode('grid');
              }}
              className={`p-1.5 rounded-md text-xs font-rajdhani flex items-center gap-1 transition-all ${
                viewMode === 'grid'
                  ? 'bg-red-600 text-white font-bold shadow-[0_0_10px_rgba(255,23,68,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Grid View"
            >
              <LayoutGrid className="w-4 h-4" />
              <span className="hidden md:inline">Bento</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onToggleViewMode('table');
              }}
              className={`p-1.5 rounded-md text-xs font-rajdhani flex items-center gap-1 transition-all ${
                viewMode === 'table'
                  ? 'bg-red-600 text-white font-bold shadow-[0_0_10px_rgba(255,23,68,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
              title="Terminal Matrix View"
            >
              <List className="w-4 h-4" />
              <span className="hidden md:inline">Terminal</span>
            </button>
          </div>
        </div>
      </div>

      {/* Category Filter Pills with count */}
      <div className="flex items-center justify-center flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          const count = categoryCounts[category] ?? 0;
          return (
            <button
              key={category}
              onClick={() => {
                sound.playClick();
                onSelectCategory(category);
              }}
              className={`px-3.5 py-1.5 rounded-full font-orbitron text-[11px] font-semibold tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white shadow-[0_0_15px_rgba(255,23,68,0.4)] scale-105'
                  : 'bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              }`}
            >
              <span>{category}</span>
              <span className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono ${
                isActive ? 'bg-black/40 text-white font-black' : 'bg-slate-800 text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
