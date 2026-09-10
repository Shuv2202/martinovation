import React, { useState, useMemo } from 'react';
import { EventItem, EventCategory } from '../types';
import { EVENTS_DATA } from '../data/events';
import { EventFilters } from './EventFilters';
import { EventCard } from './EventCard';
import { EventModal } from './EventModal';
import { 
  Compass, 
  AlertCircle, 
  Bookmark, 
  ArrowRight, 
  Trophy, 
  Calendar, 
  MapPin, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { sound } from '../utils/audio';

interface EventsProps {
  onOpenRegister: (eventId?: string) => void;
  bookmarkedIds?: string[];
  onToggleBookmark?: (eventId: string) => void;
}

const CATEGORIES: EventCategory[] = [
  'All Events',
  'Coding',
  'Robotics',
  'Gaming',
  'Innovation',
  'Creative',
  'Cultural'
];

export const Events: React.FC<EventsProps> = ({ 
  onOpenRegister,
  bookmarkedIds = [],
  onToggleBookmark
}) => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('All Events');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  // Calculate counts per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      'All Events': EVENTS_DATA.length
    };
    CATEGORIES.forEach((cat) => {
      if (cat !== 'All Events') {
        counts[cat] = EVENTS_DATA.filter((e) => e.category === cat).length;
      }
    });
    return counts;
  }, []);

  // Filter events based on category & search
  const filteredEvents = useMemo(() => {
    return EVENTS_DATA.filter((event) => {
      const matchesCategory =
        activeCategory === 'All Events' || event.category === activeCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        event.name.toLowerCase().includes(query) ||
        event.description.toLowerCase().includes(query) ||
        event.tagline.toLowerCase().includes(query) ||
        event.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="events" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508]">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Compass className="w-3.5 h-3.5 text-red-400" />
            <span>20+ Proving Grounds</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-yellow-400">Arena</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Compete for the ₹2,50,000+ prize vault across high-intensity software hackathons, combat robotics, esports warfare, and cultural showcases.
          </p>
        </div>

        {/* Filter Toolbar & Search */}
        <EventFilters
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filteredEvents.length}
          viewMode={viewMode}
          onToggleViewMode={setViewMode}
          categoryCounts={categoryCounts}
        />

        {/* View Mode 1: Bento Card Grid */}
        {viewMode === 'grid' && filteredEvents.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isBookmarked={bookmarkedIds.includes(event.id)}
                onToggleBookmark={onToggleBookmark}
                onViewDetails={setSelectedEvent}
                onRegister={onOpenRegister}
              />
            ))}
          </div>
        )}

        {/* View Mode 2: Terminal Matrix Table */}
        {viewMode === 'table' && filteredEvents.length > 0 && (
          <div className="rounded-2xl bg-slate-950/90 border border-slate-800 overflow-hidden backdrop-blur-xl shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-inter">
                <thead className="bg-slate-950 border-b border-slate-800 text-[11px] font-orbitron font-bold text-slate-400 uppercase tracking-wider">
                  <tr>
                    <th className="py-3.5 px-4">Arena Challenge</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Venue</th>
                    <th className="py-3.5 px-4">Format</th>
                    <th className="py-3.5 px-4">Prize Pool</th>
                    <th className="py-3.5 px-4 text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {filteredEvents.map((event) => {
                    const isBookmarked = bookmarkedIds.includes(event.id);
                    return (
                      <tr key={event.id} className="hover:bg-slate-900/60 transition-colors group">
                        <td className="py-4 px-4">
                          <div className="font-orbitron font-bold text-sm text-white group-hover:text-red-300 flex items-center gap-2">
                            <span>{event.name}</span>
                            {event.featured && (
                              <span className="text-[9px] px-1.5 py-0.2 rounded font-mono bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                                Flagship
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 font-rajdhani mt-0.5">
                            {event.tagline}
                          </div>
                        </td>

                        <td className="py-4 px-4">
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900 text-red-300 border border-red-500/20">
                            {event.category}
                          </span>
                        </td>

                        <td className="py-4 px-4 text-slate-300 font-rajdhani text-xs">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-purple-400" />
                            <span className="truncate max-w-[150px]">{event.venue}</span>
                          </div>
                        </td>

                        <td className="py-4 px-4 text-slate-400 font-rajdhani text-xs">
                          <div>{event.teamSize}</div>
                          <div className="text-[10px] text-slate-500">{event.entryFee}</div>
                        </td>

                        <td className="py-4 px-4 font-bold text-yellow-400 font-rajdhani text-xs">
                          <div className="flex items-center gap-1">
                            <Trophy className="w-3.5 h-3.5" />
                            <span>{event.prizePool.split('+')[0]}</span>
                          </div>
                        </td>

                        <td className="py-4 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            {onToggleBookmark && (
                              <button
                                onClick={() => {
                                  sound.playClick();
                                  onToggleBookmark(event.id);
                                }}
                                className={`p-1.5 rounded-lg border transition-all ${
                                  isBookmarked
                                    ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
                                }`}
                                title={isBookmarked ? 'Pinned to deck' : 'Pin to deck'}
                              >
                                <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-cyan-400 text-cyan-400' : ''}`} />
                              </button>
                            )}

                            <button
                              onClick={() => {
                                sound.playClick();
                                setSelectedEvent(event);
                              }}
                              className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-orbitron text-[10px] uppercase font-bold transition-colors"
                            >
                              Details
                            </button>

                            <button
                              onClick={() => {
                                sound.playClick();
                                onOpenRegister(event.id);
                              }}
                              className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-cyan-400 to-yellow-400 text-black font-orbitron text-[10px] font-bold uppercase transition-all shadow-[0_0_10px_rgba(0,240,255,0.25)] hover:brightness-110"
                            >
                              Register
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Empty Search State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 flex items-center justify-center mx-auto">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-orbitron text-lg font-bold text-white">
                No Arenas Match Query
              </h3>
              <p className="text-xs text-slate-400 font-inter">
                No challenge matches your current filters. Clear search or switch category.
              </p>
            </div>
            <button
              onClick={() => {
                sound.playClick();
                setActiveCategory('All Events');
                setSearchQuery('');
              }}
              className="py-2 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 font-orbitron text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Event Details Modal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
        onRegister={onOpenRegister}
      />
    </section>
  );
};
