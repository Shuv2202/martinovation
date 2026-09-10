import { DaySchedule } from '../types';

export const SCHEDULE_DATA: DaySchedule[] = [
  {
    dayNumber: 1,
    dateStr: 'Day 01',
    title: 'Genesis Awakening',
    theme: 'Opening Ceremony & Flagship Challenges',
    events: [
      {
        time: '09:00 AM - 10:30 AM',
        title: 'Inauguration & Lighting of the Cyber Lamp',
        category: 'Ceremony',
        venue: 'Main Auditorium',
        description: 'Keynote addresses by dignitaries, Vice Chancellor address, and unveiling of the Martinovation 2026 trophy.',
        tag: 'Flagship'
      },
      {
        time: '10:45 AM - 11:30 AM',
        title: 'Keynote: Quantum Frontiers & AI Ethics',
        category: 'Keynote',
        venue: 'Main Auditorium',
        description: 'Distinguished guest lecture on the dawn of generative computing and sustainable engineering.',
        tag: 'Special Guest'
      },
      {
        time: '11:45 AM - Kickoff',
        title: 'HackGenesis 36-Hour Hackathon Commences',
        category: 'Coding',
        venue: 'Innovation Hub (Floor 3)',
        description: 'Teams gather, review problem statements, set up developer stations, and begin continuous 36-hour sprint.',
        tag: '36H Sprint'
      },
      {
        time: '02:00 PM - 05:00 PM',
        title: 'Tech Paper Presentations (Track 1: AI & IoT)',
        category: 'Innovation',
        venue: 'Seminar Hall A',
        description: 'Undergraduate student research papers scrutinized by academic peers and journal referees.',
        tag: 'Research'
      },
      {
        time: '05:30 PM - 07:30 PM',
        title: 'Campus Glow Mixer & Acoustic Prelude',
        category: 'Social',
        venue: 'Amphitheatre Courtyard',
        description: 'Icebreaker musical performances, networking, and illuminated tech installations across the garden.',
        tag: 'Networking'
      }
    ]
  },
  {
    dayNumber: 2,
    dateStr: 'Day 02',
    title: 'Code & Cognition',
    theme: 'Coding, Design and Knowledge Events',
    events: [
      {
        time: '09:30 AM - 12:30 PM',
        title: 'CyberUI Sprint: Next-Gen Web Design',
        category: 'Creative',
        venue: 'Multimedia Design Studio',
        description: 'Real-time UI/UX sprint crafting holographic interfaces and accessible web design frameworks.',
        tag: 'Design'
      },
      {
        time: '01:00 PM - 02:00 PM',
        title: 'Midway HackGenesis Evaluation & Mentor Check-in',
        category: 'Coding',
        venue: 'Innovation Hub',
        description: 'Mentors critique architecture, API integrations, and prototype progress.',
        tag: 'Mentorship'
      },
      {
        time: '02:00 PM - 05:00 PM',
        title: 'Algolympics Speed Coding Marathon',
        category: 'Coding',
        venue: 'Turing Computer Center',
        description: 'Competitive algorithmic sprint featuring algorithmic challenges in C++, Java, and Python.',
        tag: 'Contest'
      },
      {
        time: '03:00 PM - 05:30 PM',
        title: 'ChronoQuiz: The Inter-College Tech Trivia',
        category: 'Knowledge',
        venue: 'Seminar Hall B',
        description: 'Buzzer round testing history, computing milestones, cyber warfare, and AI revolutions.',
        tag: 'Quiz'
      },
      {
        time: '06:00 PM - 08:00 PM',
        title: 'Open Source Fireside Chat with Alumni',
        category: 'Career',
        venue: 'Virtual Hall & Seminar Hall A',
        description: 'Insights into global remote careers, contributing to Linux kernel, and tech startup journeys.',
        tag: 'Interactive'
      }
    ]
  },
  {
    dayNumber: 3,
    dateStr: 'Day 03',
    title: 'Cyber & Steel',
    theme: 'Robotics and Project Exhibition',
    events: [
      {
        time: '09:30 AM - 01:00 PM',
        title: 'RoboTrack GP: All-Terrain Autonomous Sprint',
        category: 'Robotics',
        venue: 'Block C Open Track',
        description: 'Wheeled bots speed across sandpits, oil slicks, inclined ramps, and infrared gates.',
        tag: 'High Energy'
      },
      {
        time: '10:00 AM - 04:00 PM',
        title: 'Genesis National Innovation Expo',
        category: 'Innovation',
        venue: 'Central Exhibition Hall',
        description: 'Over 50 hardware prototypes, green energy setups, drone prototypes, and agri-tech solutions on display.',
        tag: 'Exhibition'
      },
      {
        time: '11:00 AM - 05:00 PM',
        title: 'RoboWars: Cyber Clash Steel Cage Battles',
        category: 'Robotics',
        venue: 'Main Campus Outdoor Arena',
        description: 'Combat bots battle in high-speed destructive rounds inside reinforced bulletproof poly-carbonate cages.',
        tag: 'Main Event'
      },
      {
        time: '02:00 PM - 05:00 PM',
        title: 'SkyVelocity: FPV Drone Racing Tournament',
        category: 'Robotics',
        venue: 'Indoor Sports Complex',
        description: 'Agile micro-drones threading through glowing illuminated ring courses at speeds up to 80 km/h.',
        tag: 'FPV'
      },
      {
        time: '05:30 PM - 07:00 PM',
        title: 'HackGenesis Final Pitches & Project Demos',
        category: 'Coding',
        venue: 'Main Auditorium',
        description: 'Top 10 hackathon finalists pitch before angel investors, startup founders, and faculty judges.',
        tag: 'Showcase'
      }
    ]
  },
  {
    dayNumber: 4,
    dateStr: 'Day 04',
    title: 'Digital Arena & Expression',
    theme: 'Gaming and Creative Showcases',
    events: [
      {
        time: '10:00 AM - 06:00 PM',
        title: 'Nexus Esports Championship (Valorant & BGMI)',
        category: 'Gaming',
        venue: 'Auditorium Stage 2',
        description: 'Live esports broadcast with casters, bracket eliminations, clutch defuses, and chicken dinners.',
        tag: 'Esports'
      },
      {
        time: '10:30 AM - 01:30 PM',
        title: 'Retro Gaming Arcade Free-Play & Speedruns',
        category: 'Gaming',
        venue: 'Recreation Lounge',
        description: 'Street Fighter, Tekken, retro Mario kart time-trials open to all festival attendees.',
        tag: 'Casual'
      },
      {
        time: '02:00 PM - 05:00 PM',
        title: 'The Tech Verdict: Parliamentary Debate',
        category: 'Debate',
        venue: 'Conference Hall A',
        description: 'Orators debate algorithmic governance, techno-monopolies, privacy, and the future of human work.',
        tag: 'Oratory'
      },
      {
        time: '11:00 AM - 05:00 PM',
        title: 'LensCraft: Cyber Photography Submissions & Display',
        category: 'Creative',
        venue: 'Art Gallery Corridor',
        description: 'Live photo entries judged on artistic framing, light trails, and storytelling.',
        tag: 'Visual'
      },
      {
        time: '06:30 PM - 08:30 PM',
        title: 'Street Play (Nukkad Natak) on Cyber Safety',
        category: 'Cultural',
        venue: 'Campus Roundabout Amphitheatre',
        description: 'High-impact theatrical performances spreading awareness on online scam vigilance and mental wellness.',
        tag: 'Theatre'
      }
    ]
  },
  {
    dayNumber: 5,
    dateStr: 'Day 05',
    title: 'Genesis Culmination',
    theme: 'Finals, Awards and Closing Celebration',
    events: [
      {
        time: '10:00 AM - 01:00 PM',
        title: 'Grand Finals of Flagship Tournaments',
        category: 'Finals',
        venue: 'Main Auditorium & Stage 2',
        description: 'Championship deciders for RoboWars, Nexus Esports, and Innovation Expo winners.',
        tag: 'Finals'
      },
      {
        time: '02:30 PM - 04:30 PM',
        title: 'Grand Valedictory Ceremony & Prize Distribution',
        category: 'Awards',
        venue: 'Main Auditorium',
        description: 'Conferring trophies, cash rewards, certificates of excellence, and honors for winning universities.',
        tag: 'Trophy Ceremony'
      },
      {
        time: '05:30 PM - 07:30 PM',
        title: 'Battle of the Bands: University Rock Fusion',
        category: 'Music',
        venue: 'Grand Open-Air Stadium Stage',
        description: 'College indie rock, fusion metal, and eastern folk bands compete for the Golden Guitar title.',
        tag: 'Live Band'
      },
      {
        time: '08:00 PM - 10:30 PM',
        title: 'Genesis Pro-Night & Laser EDM Spectacle',
        category: 'Pro-Night',
        venue: 'Grand Open-Air Stadium Stage',
        description: 'Celebrity guest headliner, dazzling pyrotechnics, intelligent laser choreography, and celebration.',
        tag: 'Grand Finale'
      }
    ]
  }
];
