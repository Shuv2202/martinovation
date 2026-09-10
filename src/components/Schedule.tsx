import React, { useState, useMemo } from 'react';
import { SCHEDULE_DATA } from '../data/schedule';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Info, 
  Sparkles, 
  ChevronRight,
  ShieldCheck,
  CalendarPlus,
  Filter
} from 'lucide-react';
import { sound } from '../utils/audio';

const VENUES = [
  'All Venues',
  'Main Auditorium',
  'Advanced Computing Lab',
  'Campus Outdoor Open Arena',
  'Seminar Hall A',
  'University Amphitheatre'
];

export const Schedule: React.FC = () => {
  const [activeDayNumber, setActiveDayNumber] = useState(1);
  const [selectedVenue, setSelectedVenue] = useState('All Venues');

  const currentDay = SCHEDULE_DATA.find((d) => d.dayNumber === activeDayNumber) || SCHEDULE_DATA[0];

  const filteredEvents = useMemo(() => {
    if (selectedVenue === 'All Venues') return currentDay.events;
    return currentDay.events.filter((e) => e.venue.toLowerCase().includes(selectedVenue.toLowerCase().split(' ')[0]));
  }, [currentDay, selectedVenue]);

  // Create Google Calendar event link helper
  const getGoogleCalendarUrl = (title: string, desc: string, venue: string, dayNum: number, timeStr: string) => {
    // Festival dates: Oct 05-09, 2026
    const day = 4 + dayNum; // 05 to 09
    const dayFormatted = day < 10 ? `0${day}` : `${day}`;
    const startTime = `202610${dayFormatted}T090000Z`;
    const endTime = `202610${dayFormatted}T170000Z`;
    const details = encodeURIComponent(`${desc}\n\nVenue: ${venue}, Usha Martin University, Angara, Ranchi.\nWebsite: https://martinovation.umu.ac.in`);
    const loc = encodeURIComponent(`Usha Martin University, Angara, Ranchi, Jharkhand`);
    const name = encodeURIComponent(`Martinovation 2026: ${title}`);

    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${name}&dates=${startTime}/${endTime}&details=${details}&location=${loc}`;
  };

  return (
    <section id="schedule" className="relative py-24 sm:py-32 overflow-hidden bg-[#070b16] border-t border-slate-900">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-cyber-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive 5-Day Odyssey Matrix</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Five Days. <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-400">One Campus.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Explore the hour-by-hour journey across national hackathons, robotic cages, gaming tournaments, and celebrity cultural night.
          </p>
        </div>

        {/* Day Selector Tabs (Days 1 to 5) */}
        <div className="flex items-center justify-center gap-2 sm:gap-3.5 flex-wrap mb-8">
          {SCHEDULE_DATA.map((day) => {
            const isActive = activeDayNumber === day.dayNumber;
            return (
              <button
                key={day.dayNumber}
                onClick={() => {
                  sound.playClick();
                  setActiveDayNumber(day.dayNumber);
                }}
                className={`relative px-4 sm:px-6 py-3 rounded-2xl font-orbitron text-xs sm:text-sm font-bold tracking-wider transition-all duration-200 flex flex-col items-center gap-1 focus:outline-none ${
                  isActive
                    ? 'bg-gradient-to-b from-cyan-500/25 via-slate-900 to-slate-950 border border-cyan-400 text-white shadow-[0_0_25px_rgba(0,240,255,0.3)] scale-105'
                    : 'bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <span className={`text-[10px] uppercase font-rajdhani font-bold ${isActive ? 'text-yellow-400' : 'text-slate-500'}`}>
                  DAY 0{day.dayNumber}
                </span>
                <span className="text-white font-extrabold text-sm sm:text-base">
                  {day.dateStr}
                </span>
                <span className={`text-[10px] font-rajdhani max-w-[120px] truncate ${isActive ? 'text-cyan-300 font-semibold' : 'text-slate-500'}`}>
                  {day.theme}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Day Banner & Venue Filter Toolbar */}
        <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 backdrop-blur-xl">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                DAY 0{currentDay.dayNumber} OF 05
              </span>
              <span className="text-xs text-slate-400 font-rajdhani">
                • {currentDay.dateStr}, 2026
              </span>
            </div>
            <h3 className="font-orbitron text-xl sm:text-2xl font-black text-white">
              {currentDay.title}
            </h3>
            <p className="text-xs sm:text-sm text-yellow-400 font-rajdhani font-semibold uppercase tracking-wider">
              {currentDay.theme}
            </p>
          </div>

          {/* Venue Filter Dropdown */}
          <div className="flex items-center gap-2 self-stretch md:self-auto">
            <Filter className="w-4 h-4 text-cyan-400 shrink-0" />
            <select
              value={selectedVenue}
              onChange={(e) => {
                sound.playClick();
                setSelectedVenue(e.target.value);
              }}
              className="w-full md:w-auto px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200 font-rajdhani font-semibold focus:outline-none focus:border-cyan-400 transition-colors"
            >
              {VENUES.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Timeline Event Cards */}
        <div className="relative border-l-2 border-slate-800/80 ml-4 sm:ml-8 space-y-6 sm:space-y-8 pl-6 sm:pl-8">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((item, idx) => (
              <div
                key={idx}
                className="relative group p-5 sm:p-6 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_4px_25px_rgba(0,0,0,0.5)] backdrop-blur-md"
              >
                {/* Timeline node marker */}
                <div className="absolute -left-[33px] sm:-left-[41px] top-6 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:shadow-[0_0_12px_#00f0ff] transition-all" />

                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  {/* Event Details */}
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {item.category}
                      </span>
                      {item.tag && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-orbitron font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40">
                          {item.tag}
                        </span>
                      )}
                    </div>

                    <h4 className="font-orbitron font-bold text-lg sm:text-xl text-white group-hover:text-cyan-300 transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-inter">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-rajdhani text-slate-400 pt-1">
                      <span className="flex items-center gap-1.5 text-cyan-300 font-semibold">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        {item.time}
                      </span>
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="w-4 h-4 text-purple-400" />
                        {item.venue}
                      </span>
                    </div>
                  </div>

                  {/* Add to Google Calendar Action */}
                  <div className="shrink-0 flex items-center">
                    <a
                      href={getGoogleCalendarUrl(
                        item.title,
                        item.description,
                        item.venue,
                        currentDay.dayNumber,
                        item.time
                      )}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => sound.playClick()}
                      className="px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-400/80 hover:bg-slate-900 text-slate-300 hover:text-cyan-300 text-xs font-rajdhani font-bold tracking-wider uppercase flex items-center gap-2 transition-all shadow-sm group-hover:border-cyan-500/40"
                    >
                      <CalendarPlus className="w-4 h-4 text-cyan-400" />
                      <span>Sync Calendar</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 text-center space-y-2">
              <p className="text-slate-300 text-sm font-inter">No sessions scheduled in this specific venue for Day 0{currentDay.dayNumber}.</p>
              <button
                onClick={() => setSelectedVenue('All Venues')}
                className="text-xs font-orbitron text-cyan-400 hover:underline"
              >
                Reset to All Venues
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
