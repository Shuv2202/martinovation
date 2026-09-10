import React, { useState } from 'react';
import { 
  Navigation, 
  Bus, 
  Plane, 
  Train, 
  MapPin, 
  Phone, 
  ExternalLink,
  Shield,
  Clock,
  CheckCircle2,
  Car
} from 'lucide-react';
import { sound } from '../utils/audio';

interface TransitRoute {
  id: string;
  name: string;
  icon: React.ElementType;
  distance: string;
  duration: string;
  recommended: string;
  shuttleInfo: string;
}

const TRANSIT_ROUTES: TransitRoute[] = [
  {
    id: 'rnc',
    name: 'Ranchi Railway Station (RNC)',
    icon: Train,
    distance: '24 KM',
    duration: '35 - 45 Mins',
    recommended: 'UMU Express Shuttle or Direct Auto / Ola / Uber',
    shuttleInfo: 'Shuttles depart from Platform 1 Outer Circle at 08:00 AM, 11:00 AM & 02:00 PM during festival days.'
  },
  {
    id: 'ixr',
    name: 'Birsa Munda Airport (IXR)',
    icon: Plane,
    distance: '32 KM',
    duration: '45 - 55 Mins',
    recommended: 'Pre-paid Airport Taxi via Ranchi Ring Road (smooth multi-lane route)',
    shuttleInfo: 'Dedicated hospitality volunteers stationed at Arrival Gate from Oct 04th evening.'
  },
  {
    id: 'bus',
    name: 'Kantatoli Central Bus Stand',
    icon: Bus,
    distance: '22 KM',
    duration: '30 - 40 Mins',
    recommended: 'Purulia Highway Bus towards Angara or Pre-booked Shuttle',
    shuttleInfo: 'Frequent local buses drop directly at Usha Martin University Angara Gate on Purulia Road.'
  },
  {
    id: 'road',
    name: 'Self-Drive / Inter-City Cab',
    icon: Car,
    distance: 'Direct Highway',
    duration: 'Varies',
    recommended: 'Via Ranchi-Purulia Road (NH-320) directly to Angara',
    shuttleInfo: 'Ample guarded parking space reserved inside campus for registered participants & team trailers.'
  }
];

const CAMPUS_ZONES = [
  {
    id: 'zone-a',
    title: 'Academic Block & Turing Lab',
    desc: 'Flagship 36-Hour HackGenesis arena, algorithmic coding marathons, high-speed gigabit Wi-Fi zones.',
    tag: 'Coding & AI'
  },
  {
    id: 'zone-b',
    title: 'Newton Open Arena & Combat Cage',
    desc: 'High-impact bulletproof polycarbonate cage for RoboWars, titanium drum spinners, and line-follower tracks.',
    tag: 'Robotics'
  },
  {
    id: 'zone-c',
    title: 'Dr. Sarvepalli Radhakrishnan Auditorium',
    desc: 'Keynote summits, celebrity speaker addresses, inauguration, product showcase, and valedictory awards.',
    tag: 'Symposium'
  },
  {
    id: 'zone-d',
    title: 'UMU Amphitheatre & Grounds',
    desc: 'Star Night music performances, battle of the bands, fashion showcase, and student art installations.',
    tag: 'Cultural'
  },
  {
    id: 'zone-e',
    title: 'Delegate Hostels & Guest House',
    desc: 'Separate secure accommodation for outstation teams, round-the-clock mess catering, and medical post.',
    tag: 'Hospitality'
  }
];

export const CampusRadar: React.FC = () => {
  const [activeRoute, setActiveRoute] = useState<string>('rnc');
  const [selectedZone, setSelectedZone] = useState<string>('zone-a');

  const currentRoute = TRANSIT_ROUTES.find((r) => r.id === activeRoute) || TRANSIT_ROUTES[0];

  return (
    <section id="campus" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508] border-t border-slate-900">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Navigation className="w-3.5 h-3.5 text-red-400" />
            <span>Campus Radar & Transit HQ</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            How to Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Angara, Ranchi</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Situated along the picturesque Ranchi-Purulia Highway, Usha Martin University’s green eco-campus provides smooth transit connectivity and round-the-clock fest shuttle support.
          </p>
        </div>

        {/* 2-Column Grid: Transit Router (Left) & Campus Interactive Zones (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Transit Selector & Schedule */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <h3 className="font-orbitron font-bold text-lg text-white flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-red-400" />
                    <span>Outstation Transit Hubs</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-inter">
                    Select your arrival point to view distance, route and complimentary university shuttles.
                  </p>
                </div>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-red-500/10 text-red-300 text-xs font-mono border border-red-500/20">
                  NH-320 CONNECT
                </span>
              </div>

              {/* Transit Hub Selector Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TRANSIT_ROUTES.map((route) => {
                  const Icon = route.icon;
                  const isActive = activeRoute === route.id;
                  return (
                    <button
                      key={route.id}
                      onClick={() => {
                        sound.playClick();
                        setActiveRoute(route.id);
                      }}
                      className={`p-3 rounded-xl border flex flex-col items-center text-center gap-2 transition-all ${
                        isActive
                          ? 'bg-red-500/20 border-red-500 text-white shadow-[0_0_15px_rgba(255,23,68,0.25)]'
                          : 'bg-slate-950/70 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? 'text-red-400' : 'text-slate-400'}`} />
                      <span className="font-rajdhani text-xs font-bold leading-tight">
                        {route.name.split(' (')[0]}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Detailed Active Route Card */}
              <div className="p-5 rounded-xl bg-slate-950/90 border border-slate-800/90 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-mono text-red-400 uppercase tracking-widest">
                      TRANSIT CORRIDOR
                    </span>
                    <h4 className="font-orbitron font-bold text-white text-base sm:text-lg">
                      {currentRoute.name}
                    </h4>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Distance</div>
                      <div className="font-orbitron font-bold text-red-300 text-sm">{currentRoute.distance}</div>
                    </div>
                    <div className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-right">
                      <div className="text-[10px] text-slate-400 uppercase font-mono">Travel Time</div>
                      <div className="font-orbitron font-bold text-amber-400 text-sm">{currentRoute.duration}</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-slate-300 font-inter pt-2 border-t border-slate-900">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Recommended Mode:</strong> {currentRoute.recommended}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bus className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                    <span><strong className="text-white">Fest Express Shuttle:</strong> {currentRoute.shuttleInfo}</span>
                  </div>
                </div>

                {/* Google Maps External Direction */}
                <div className="pt-2 flex items-center justify-between">
                  <a
                    href="https://maps.google.com/?q=Usha+Martin+University+Ranchi"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-rajdhani font-semibold text-red-400 hover:text-red-300 transition-colors"
                  >
                    <span>Open in Google Maps Navigation</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <span className="text-[11px] text-slate-500 font-mono">
                    23.3441° N, 85.3096° E
                  </span>
                </div>
              </div>

              {/* Hospitality Helpline */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-slate-950 border border-rose-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-orbitron font-bold text-white">Travel & Lodging Desk</div>
                    <div className="text-[11px] text-slate-400 font-inter">Available 24x7 for arriving participant squads</div>
                  </div>
                </div>
                <a
                  href="tel:+919876543210"
                  className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-rajdhani font-bold text-xs uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)]"
                >
                  Contact Desk
                </a>
              </div>
            </div>
          </div>

          {/* Right: Campus Interactive Sector Map */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-xl shadow-xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="space-y-0.5">
                  <h3 className="font-orbitron font-bold text-base text-white flex items-center gap-2">
                    <Shield className="w-4 h-4 text-red-400" />
                    <span>Campus Key Venues</span>
                  </h3>
                  <p className="text-xs text-slate-400 font-inter">Explore the primary event arenas at UMU.</p>
                </div>
                <span className="text-xs font-mono text-red-400">5 ZONES</span>
              </div>

              {/* Zone List */}
              <div className="space-y-2.5">
                {CAMPUS_ZONES.map((zone) => {
                  const isSelected = selectedZone === zone.id;
                  return (
                    <div
                      key={zone.id}
                      onClick={() => {
                        sound.playClick();
                        setSelectedZone(zone.id);
                      }}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-slate-950 border-red-500/80 shadow-[0_0_15px_rgba(255,23,68,0.15)]'
                          : 'bg-slate-950/50 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <div className="font-orbitron font-bold text-xs text-white">
                          {zone.title}
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-red-500/10 text-red-300 border border-red-500/30">
                          {zone.tag}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 font-inter leading-relaxed">
                        {zone.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Free Food & Accommodation Note */}
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-300/90 font-inter">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Outstation Delegate Policy:</strong> Subsidized hostel accommodation & festival meal passes are provided for confirmed participants upon online check-in.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
