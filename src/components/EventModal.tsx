import React, { useEffect } from 'react';
import { EventItem } from '../types';
import { 
  X, 
  Calendar, 
  MapPin, 
  Users, 
  User, 
  Tag, 
  Trophy, 
  ShieldAlert, 
  Mail, 
  Phone, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';

interface EventModalProps {
  event: EventItem | null;
  onClose: () => void;
  onRegister: (eventId: string) => void;
}

export const EventModal: React.FC<EventModalProps> = ({
  event,
  onClose,
  onRegister
}) => {
  // Close on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (event) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#080d1a] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Glowing Header Accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-yellow-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label="Close event details modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Header Info */}
          <div className="space-y-2 pr-8">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-rajdhani font-bold uppercase tracking-wider bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                {event.category}
              </span>
              {event.featured && (
                <span className="px-2.5 py-1 rounded-md text-[10px] font-orbitron font-bold uppercase bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
                  Flagship Event
                </span>
              )}
            </div>

            <h3 id="modal-event-title" className="font-orbitron text-2xl sm:text-3xl font-black text-white">
              {event.name}
            </h3>
            <p className="text-sm font-rajdhani font-semibold text-yellow-400 uppercase tracking-wider">
              {event.tagline}
            </p>
          </div>

          {/* Key Parameters Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-rajdhani">
            <div className="space-y-1">
              <span className="text-slate-400 uppercase">Team Size</span>
              <div className="flex items-center gap-1.5 text-white font-bold text-sm">
                {event.isTeam ? <Users className="w-4 h-4 text-cyan-400" /> : <User className="w-4 h-4 text-cyan-400" />}
                <span>{event.teamSize}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 uppercase">Entry Fee</span>
              <div className="flex items-center gap-1.5 font-bold text-sm">
                <Tag className="w-4 h-4 text-purple-400" />
                <span className={event.isFree ? 'text-emerald-400' : 'text-slate-200'}>
                  {event.entryFee}
                </span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 uppercase">Prize Pool</span>
              <div className="flex items-center gap-1.5 text-yellow-400 font-bold text-sm">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="truncate">{event.prizePool}</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-400 uppercase">Eligibility</span>
              <div className="text-white font-bold text-xs truncate">
                {event.eligibility.split(' ')[0]} + All Students
              </div>
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-2">
            <h4 className="font-orbitron text-xs tracking-widest text-cyan-400 font-bold uppercase flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              <span>Event Overview</span>
            </h4>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-inter">
              {event.description}
            </p>
          </div>

          {/* Schedule & Venue Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 text-sm">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 uppercase font-rajdhani">Scheduled Slot</span>
                <p className="text-slate-200 font-medium">{event.dateTime}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <span className="text-xs text-slate-400 uppercase font-rajdhani">Campus Arena Venue</span>
                <p className="text-slate-200 font-medium">{event.venue}</p>
              </div>
            </div>
          </div>

          {/* Rules & Guidelines */}
          <div className="space-y-2">
            <h4 className="font-orbitron text-xs tracking-widest text-yellow-400 font-bold uppercase flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-yellow-400" />
              <span>Rules & Regulations</span>
            </h4>
            <ul className="space-y-2">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 font-inter">
                  <span className="text-cyan-400 font-mono font-bold shrink-0">[{idx + 1}]</span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Student Coordinators */}
          <div className="space-y-2 pt-2 border-t border-slate-800">
            <h4 className="font-orbitron text-xs tracking-widest text-slate-400 font-bold uppercase">
              Event Coordinators
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {event.coordinators.map((coord, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 text-xs space-y-1">
                  <div className="font-semibold text-white">{coord.name}</div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Phone className="w-3 h-3 text-cyan-400" />
                    <span>{coord.phonePlaceholder}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Mail className="w-3 h-3 text-purple-400" />
                    <span className="truncate">{coord.email}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-6 bg-slate-950 border-t border-slate-800 flex items-center justify-between gap-4">
          <div className="text-xs text-slate-400 font-rajdhani hidden sm:block">
            Need special accommodations or team pairing? Contact student desk.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="py-2.5 px-4 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-orbitron text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRegister(event.id);
              }}
              className="flex-1 sm:flex-initial py-2.5 px-6 rounded-lg bg-gradient-to-r from-cyan-400 to-yellow-400 hover:from-cyan-300 hover:to-yellow-300 text-black font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all"
            >
              <Sparkles className="w-4 h-4" />
              <span>Register for this Event</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
