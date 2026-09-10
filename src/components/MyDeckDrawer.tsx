import React from 'react';
import { 
  X, 
  Bookmark, 
  Trash2, 
  Calendar, 
  MapPin, 
  Trophy, 
  ArrowRight, 
  Sparkles,
  Share2,
  Printer
} from 'lucide-react';
import { EventItem } from '../types';
import { sound } from '../utils/audio';

interface MyDeckDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  bookmarkedEvents: EventItem[];
  onRemoveBookmark: (eventId: string) => void;
  onClearAll: () => void;
  onRegister: (eventId?: string) => void;
}

export const MyDeckDrawer: React.FC<MyDeckDrawerProps> = ({
  isOpen,
  onClose,
  bookmarkedEvents,
  onRemoveBookmark,
  onClearAll,
  onRegister
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#060408] border-l border-red-500/30 p-6 flex flex-col justify-between shadow-2xl z-10 overflow-y-auto">
        {/* Drawer Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-400/40 text-red-400 flex items-center justify-center">
                <Bookmark className="w-4 h-4 fill-red-400 text-red-400" />
              </div>
              <div>
                <h3 className="font-orbitron font-bold text-base text-white">
                  My Festival Deck
                </h3>
                <span className="text-[11px] font-rajdhani text-slate-400 uppercase tracking-wider">
                  {bookmarkedEvents.length} Saved {bookmarkedEvents.length === 1 ? 'Arena' : 'Arenas'}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="p-2 rounded-lg bg-slate-900 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* List of Bookmarked Items */}
          {bookmarkedEvents.length > 0 ? (
            <div className="space-y-3 max-h-[58vh] overflow-y-auto pr-1">
              {bookmarkedEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 space-y-2 relative group hover:border-red-500/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/10 text-red-300 border border-red-500/30">
                        {event.category}
                      </span>
                      <h4 className="font-orbitron font-bold text-sm text-white mt-1">
                        {event.name}
                      </h4>
                    </div>
                    <button
                      onClick={() => {
                        sound.playClick();
                        onRemoveBookmark(event.id);
                      }}
                      className="text-slate-500 hover:text-rose-400 p-1 transition-colors"
                      title="Remove from my deck"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-400 font-inter pt-1">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-red-400" />
                      {event.dateTime.split(',')[0]}
                    </span>
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Trophy className="w-3 h-3" />
                      {event.prizePool.split('+')[0]}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      sound.playClick();
                      onClose();
                      onRegister(event.id);
                    }}
                    className="w-full mt-2 py-1.5 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/40 text-red-300 font-orbitron text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
                  >
                    <span>Register For This</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 rounded-xl bg-slate-900/40 border border-slate-800/60 space-y-3">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 flex items-center justify-center mx-auto">
                <Bookmark className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-orbitron font-bold text-white text-sm">Your Deck Is Empty</h4>
                <p className="text-xs text-slate-400 font-inter max-w-xs mx-auto">
                  Click the star or bookmark icon on any challenge card in the Arenas section to build your personalized festival timetable!
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer Actions */}
        {bookmarkedEvents.length > 0 && (
          <div className="border-t border-slate-800 pt-4 space-y-2 mt-4">
            <button
              onClick={() => {
                sound.playSuccess();
                onClose();
                onRegister();
              }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,23,68,0.4)] hover:brightness-110 active:scale-95 transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register All Shortlisted</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex-1 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 text-xs font-rajdhani font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5 text-red-400" />
                <span>Print Schedule</span>
              </button>
              <button
                onClick={() => {
                  sound.playClick();
                  onClearAll();
                }}
                className="py-2 px-3 rounded-lg bg-slate-900 hover:bg-rose-950/40 text-slate-400 hover:text-rose-400 border border-slate-800 text-xs font-rajdhani font-semibold transition-colors"
              >
                Clear All
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
