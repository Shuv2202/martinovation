import React from 'react';
import { EventItem } from '../types';
import { 
  Code2, 
  Cpu, 
  Terminal, 
  Lightbulb, 
  Gamepad2, 
  Layout, 
  HelpCircle, 
  Camera, 
  MessageSquare, 
  Music, 
  Zap, 
  Users, 
  User, 
  Tag, 
  Trophy, 
  ArrowRight,
  Info,
  Bookmark,
  Calendar
} from 'lucide-react';
import { sound } from '../utils/audio';

interface EventCardProps {
  event: EventItem;
  isBookmarked?: boolean;
  onToggleBookmark?: (eventId: string) => void;
  onViewDetails: (event: EventItem) => void;
  onRegister: (eventId: string) => void;
}

// Map string icon names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Code2,
  Cpu,
  Terminal,
  Lightbulb,
  Gamepad2,
  Layout,
  HelpCircle,
  Camera,
  MessageSquare,
  Music,
  Zap,
};

export const EventCard: React.FC<EventCardProps> = ({
  event,
  isBookmarked = false,
  onToggleBookmark,
  onViewDetails,
  onRegister
}) => {
  const IconComponent = iconMap[event.iconName] || Code2;

  const getCategoryTheme = (cat: string) => {
    switch (cat) {
      case 'Coding':
        return {
          border: 'hover:border-red-500',
          badge: 'bg-red-500/15 text-red-300 border-red-500/30',
          iconBg: 'bg-red-500/10 text-red-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(255,23,68,0.2)]'
        };
      case 'Robotics':
        return {
          border: 'hover:border-amber-500',
          badge: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          iconBg: 'bg-amber-500/10 text-amber-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(245,158,11,0.2)]'
        };
      case 'Gaming':
        return {
          border: 'hover:border-emerald-500',
          badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          iconBg: 'bg-emerald-500/10 text-emerald-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(16,240,144,0.2)]'
        };
      case 'Innovation':
        return {
          border: 'hover:border-rose-500',
          badge: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
          iconBg: 'bg-rose-500/10 text-rose-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(244,63,94,0.2)]'
        };
      case 'Creative':
        return {
          border: 'hover:border-red-400',
          badge: 'bg-red-500/15 text-red-300 border-red-500/30',
          iconBg: 'bg-red-500/10 text-red-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(255,23,68,0.2)]'
        };
      case 'Cultural':
        return {
          border: 'hover:border-rose-600',
          badge: 'bg-rose-600/15 text-rose-300 border-rose-600/30',
          iconBg: 'bg-rose-600/10 text-rose-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(225,29,72,0.2)]'
        };
      default:
        return {
          border: 'hover:border-red-500',
          badge: 'bg-red-500/15 text-red-300 border-red-500/30',
          iconBg: 'bg-red-500/10 text-red-400',
          glow: 'group-hover:shadow-[0_0_25px_rgba(255,23,68,0.2)]'
        };
    }
  };

  const theme = getCategoryTheme(event.category);

  return (
    <div
      className={`group relative rounded-2xl bg-slate-950/80 border border-slate-800 ${theme.border} ${theme.glow} transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden backdrop-blur-md`}
    >
      {/* Top subtle glow line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-red-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Top Controls: Flagship badge + Bookmark Button */}
      <div className="p-5 pb-0 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-2">
          <span className={`px-2.5 py-0.5 rounded-md text-[11px] font-rajdhani font-bold uppercase tracking-wider border ${theme.badge}`}>
            {event.category}
          </span>
          {event.featured && (
            <span className="px-2 py-0.5 rounded text-[9px] font-orbitron font-bold uppercase tracking-wider bg-yellow-400/20 text-yellow-300 border border-yellow-400/40">
              Flagship
            </span>
          )}
        </div>

        {/* Bookmark Star Button */}
        {onToggleBookmark && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              sound.playClick();
              onToggleBookmark(event.id);
            }}
            className={`p-1.5 rounded-lg border transition-all ${
              isBookmarked
                ? 'bg-red-500/20 border-red-500 text-red-300 shadow-[0_0_10px_rgba(255,23,68,0.4)]'
                : 'bg-slate-950/60 border-slate-800 text-slate-500 hover:text-slate-300 hover:border-slate-700'
            }`}
            title={isBookmarked ? 'Remove from My Deck' : 'Save to My Deck'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-red-500 text-red-500' : ''}`} />
          </button>
        )}
      </div>

      {/* Card Body */}
      <div className="p-5 space-y-3.5">
        <div className="flex items-start gap-3">
          <div className={`p-2.5 rounded-xl border border-white/5 ${theme.iconBg} shadow-inner shrink-0 mt-0.5`}>
            <IconComponent className="w-5 h-5" />
          </div>

          <div className="space-y-0.5">
            <h3 className="font-orbitron text-lg font-bold text-white group-hover:text-red-300 transition-colors">
              {event.name}
            </h3>
            <p className="text-[11px] font-rajdhani font-semibold text-yellow-400/90 uppercase tracking-wide">
              {event.tagline}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-inter line-clamp-2">
          {event.description}
        </p>

        {/* Meta badges: Venue & Date */}
        <div className="p-2.5 rounded-xl bg-slate-950/90 border border-slate-800/80 space-y-1.5 text-[11px] font-rajdhani">
          <div className="flex items-center justify-between text-slate-300">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-red-400" />
              <span>{event.dateTime.split(',')[0]}</span>
            </div>
            <div className="flex items-center gap-1.5 font-semibold">
              <Tag className="w-3.5 h-3.5 text-rose-400" />
              <span className={event.isFree ? 'text-emerald-400' : 'text-slate-300'}>
                {event.entryFee}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between text-slate-400 pt-1 border-t border-slate-900">
            <div className="flex items-center gap-1.5">
              {event.isTeam ? <Users className="w-3.5 h-3.5 text-slate-400" /> : <User className="w-3.5 h-3.5 text-slate-400" />}
              <span>{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-400 font-bold">
              <Trophy className="w-3.5 h-3.5" />
              <span className="truncate max-w-[140px]">{event.prizePool.split('+')[0]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Actions */}
      <div className="p-3.5 bg-slate-950/90 border-t border-slate-800/80 flex items-center gap-2">
        <button
          onClick={() => {
            sound.playClick();
            onViewDetails(event);
          }}
          className="flex-1 py-2 px-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white font-orbitron text-[11px] font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-slate-800"
        >
          <Info className="w-3.5 h-3.5 text-red-400" />
          <span>Rules & Brief</span>
        </button>

        <button
          onClick={() => {
            sound.playClick();
            onRegister(event.id);
          }}
          className="flex-1 py-2 px-3 rounded-lg bg-gradient-to-r from-red-600/30 to-rose-500/10 hover:from-red-600/50 hover:to-rose-500/20 text-red-300 hover:text-white font-orbitron text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all border border-red-500/40 hover:border-red-400 shadow-[0_0_12px_rgba(255,23,68,0.2)]"
        >
          <span>Register</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
