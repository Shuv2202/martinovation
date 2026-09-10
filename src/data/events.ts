import { EventItem } from '../types';

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'hackathon-genesis',
    name: 'HackGenesis 36H',
    category: 'Coding',
    tagline: '36-Hour National Flagship Hackathon',
    description: 'Build bold, disruptive hardware and software solutions addressing next-generation sustainability, AI, healthcare, and smart cities. Mentorship and round-the-clock fuel provided.',
    iconName: 'Code2',
    isTeam: true,
    teamSize: '2 - 4 Members',
    entryFee: 'Free Entry',
    isFree: true,
    prizePool: '₹1,00,000 + Incubation Support',
    dateTime: 'Day 1 (10:00 AM) to Day 2 (10:00 PM)',
    venue: 'Advanced Computing Lab & Innovation Hub',
    eligibility: 'Open to all undergraduate and postgraduate engineering and tech students',
    rules: [
      'Original code created solely during the 36-hour timeframe.',
      'Open-source libraries and public frameworks are permitted with declaration.',
      'Final submissions must include live demo, repository link, and pitch deck.',
      'Plagiarism or pre-built projects lead to immediate disqualification.'
    ],
    coordinators: [
      { name: 'Aarav Sharma', phonePlaceholder: '+91 98765 XXXXX', email: 'hackathon@martinovation.umu.ac.in' },
      { name: 'Priya Mukherjee', phonePlaceholder: '+91 91234 XXXXX', email: 'techlead@martinovation.umu.ac.in' }
    ],
    featured: true
  },
  {
    id: 'robowars-arena',
    name: 'RoboWars: Cyber Clash',
    category: 'Robotics',
    tagline: 'Combat Robotics in the Steel Arena',
    description: 'Armored combat robotics battle. Unleash pneumatic flippers, titanium spinning drums, and brutal wedges in an enclosed high-impact polycarbonate cage.',
    iconName: 'Cpu',
    isTeam: true,
    teamSize: '2 - 5 Members',
    entryFee: '₹500 / Team',
    isFree: false,
    prizePool: '₹75,000 Pool',
    dateTime: 'Day 3, 11:00 AM - 05:00 PM',
    venue: 'Main Campus Outdoor Open Arena',
    eligibility: 'College student teams with custom fabricated bots',
    rules: [
      'Weight category limit: Max 15kg / 30kg class.',
      'Wireless RF / 2.4GHz failsafe mandatory.',
      'No hazardous chemicals, entangling nets, or incendiaries.',
      'Matches last 3 rounds of 3 minutes each.'
    ],
    coordinators: [
      { name: 'Rohan Verma', phonePlaceholder: '+91 98321 XXXXX', email: 'robotics@martinovation.umu.ac.in' },
      { name: 'Kavita Kumari', phonePlaceholder: '+91 97456 XXXXX', email: 'robowars@martinovation.umu.ac.in' }
    ],
    featured: true
  },
  {
    id: 'coding-marathon',
    name: 'Algolympics Marathon',
    category: 'Coding',
    tagline: 'High-Speed Algorithmic Problem Solving',
    description: 'Speed, efficiency, and sharp analytical thinking. Tackle intense competitive programming problems ranging from dynamic programming to graph traversals.',
    iconName: 'Terminal',
    isTeam: false,
    teamSize: 'Individual',
    entryFee: 'Free Entry',
    isFree: true,
    prizePool: '₹35,000 + Tech Vouchers',
    dateTime: 'Day 2, 02:00 PM - 05:00 PM',
    venue: 'Turing Computer Center',
    eligibility: 'All students passionate about algorithmic programming',
    rules: [
      'Allowed languages: C++, Java, Python3, Rust, Go.',
      'ICPC scoring rules apply with penalty time for wrong submissions.',
      'Internet access strictly restricted to contest portal.'
    ],
    coordinators: [
      { name: 'Devendra Mahato', phonePlaceholder: '+91 99341 XXXXX', email: 'coding@martinovation.umu.ac.in' }
    ],
    featured: false
  },
  {
    id: 'project-exhibition',
    name: 'Genesis Innovation Expo',
    category: 'Innovation',
    tagline: 'National Prototype & Research Showcase',
    description: 'Display working prototypes, green-tech models, IoT hardware, and patent-pending inventions in front of leading industry leaders, investors, and research scientists.',
    iconName: 'Lightbulb',
    isTeam: true,
    teamSize: '1 - 4 Members',
    entryFee: '₹300 / Project',
    isFree: false,
    prizePool: '₹60,000 + Angel Investor Pitches',
    dateTime: 'Day 3, 10:00 AM - 04:00 PM',
    venue: 'UMU Central Exhibition Hall & Foyer',
    eligibility: 'Diploma, B.Tech, BCA, MCA, M.Tech, and Research Scholars',
    rules: [
      'Working functional prototype or verifiable simulation required.',
      'Project poster (A1 size) detailing problem statement, novelty, and architecture.',
      '5-minute pitch followed by 3-minute jury Q&A.'
    ],
    coordinators: [
      { name: 'Dr. S. K. Singh', phonePlaceholder: '+91 94311 XXXXX', email: 'expo@martinovation.umu.ac.in' },
      { name: 'Ankita Roy', phonePlaceholder: '+91 96081 XXXXX', email: 'innovation@martinovation.umu.ac.in' }
    ],
    featured: true
  },
  {
    id: 'gaming-league-esports',
    name: 'Nexus Esports Championship',
    category: 'Gaming',
    tagline: 'BGMI & Valorant Inter-University Showdown',
    description: 'High-adrenaline esports warfare. Form squads, deploy tactics, and dominate the battleground with live shoutcasting on university big screens.',
    iconName: 'Gamepad2',
    isTeam: true,
    teamSize: '4 - 5 Members (Squad)',
    entryFee: '₹400 / Squad',
    isFree: false,
    prizePool: '₹50,000 Cash Pool + Custom Gaming Gear',
    dateTime: 'Day 4, 10:30 AM - 06:30 PM',
    venue: 'Auditorium Arena Stage 2',
    eligibility: 'Verified college students across Eastern India',
    rules: [
      'BYOD (Bring Your Own Device) for mobile games; standard PC rigs provided for finals.',
      'Zero tolerance for emulator scripts, wall-hacks, or unsportsmanlike behavior.',
      'Double elimination bracket structure.'
    ],
    coordinators: [
      { name: 'Vikramaditya Kashyap', phonePlaceholder: '+91 87654 XXXXX', email: 'gaming@martinovation.umu.ac.in' }
    ],
    featured: true
  },
  {
    id: 'web-design-challenge',
    name: 'CyberUI Sprint',
    category: 'Creative',
    tagline: 'Futuristic Web & UI/UX Design Sprint',
    description: 'Reimagine digital interaction. Build high-fidelity interactive user interfaces and micro-interactions for next-generation holographic or AI-first web applications.',
    iconName: 'Layout',
    isTeam: false,
    teamSize: 'Individual or Duo',
    entryFee: 'Free Entry',
    isFree: true,
    prizePool: '₹25,000 + Design Licenses',
    dateTime: 'Day 2, 10:00 AM - 01:00 PM',
    venue: 'Multimedia Design Studio',
    eligibility: 'Creative coders, UI/UX designers, frontend developers',
    rules: [
      'Themes announced at the spot (e.g. Quantum OS, Cyberpunk Travel, AI Assistant UI).',
      'Designs must be responsive and submitted with interactive Figma or code preview.',
      'Evaluation on accessibility, aesthetic polish, micro-interactions, and originality.'
    ],
    coordinators: [
      { name: 'Sneha Soren', phonePlaceholder: '+91 93041 XXXXX', email: 'design@martinovation.umu.ac.in' }
    ],
    featured: false
  },
  {
    id: 'tech-quiz-brainiac',
    name: 'ChronoQuiz: The Tech Trivia',
    category: 'Coding',
    tagline: 'Fastest Fingers First Tech Knowledge Battle',
    description: 'From Silicon Valley secrets to quantum computing trivia, test your grasp over digital history, upcoming tech breakthroughs, and sci-fi pop culture.',
    iconName: 'HelpCircle',
    isTeam: true,
    teamSize: '2 Members',
    entryFee: 'Free Entry',
    isFree: true,
    prizePool: '₹20,000 Prize Pool',
    dateTime: 'Day 2, 03:00 PM - 05:30 PM',
    venue: 'Seminar Hall B',
    eligibility: 'Open to all registered university delegates',
    rules: [
      'Written preliminary round followed by top 6 teams advancing to buzzer stage.',
      'Negative marking for wild guesses in buzzer round.',
      'Quizmaster decision is final and binding.'
    ],
    coordinators: [
      { name: 'Manish Pandey', phonePlaceholder: '+91 88771 XXXXX', email: 'quiz@martinovation.umu.ac.in' }
    ],
    featured: false
  },
  {
    id: 'photography-expanse',
    name: 'LensCraft: Future Vision',
    category: 'Creative',
    tagline: 'Campus & Cyber Photography Competition',
    description: 'Capture the spirit of Martinovation through your lens. Emphasize neon geometry, human emotion, cyber aesthetics, and vibrant university campus life.',
    iconName: 'Camera',
    isTeam: false,
    teamSize: 'Individual',
    entryFee: 'Free Entry',
    isFree: true,
    prizePool: '₹20,000 + Exhibition Showcase',
    dateTime: 'Day 4, Full Day Submission',
    venue: 'Campus-wide / Online Portal Submission',
    eligibility: 'Student photographers (DSLR / Mirrorless / Smartphone)',
    rules: [
      'Photos must be captured within Usha Martin University premises during fest days.',
      'Basic color grading allowed; AI generation or heavy manipulation not permitted.',
      'EXIF data must remain intact.'
    ],
    coordinators: [
      { name: 'Rahul Tirkey', phonePlaceholder: '+91 97711 XXXXX', email: 'photography@martinovation.umu.ac.in' }
    ],
    featured: false
  },
  {
    id: 'debate-oxford',
    name: 'The Tech Verdict Debate',
    category: 'Innovation',
    tagline: 'Parliamentary Debate on AI & Ethics',
    description: 'Clash over the existential dilemmas of our decade. Deliberate on Artificial General Intelligence, deepfake sovereignty, algorithmic bias, and techno-feudalism.',
    iconName: 'MessageSquare',
    isTeam: true,
    teamSize: '2 Members',
    entryFee: 'Free Entry',
    isFree: true,
    prizePool: '₹20,000 Cash Pool',
    dateTime: 'Day 4, 02:00 PM - 05:00 PM',
    venue: 'Conference Hall A',
    eligibility: 'All college students',
    rules: [
      'Modified Parliamentary debate format.',
      'Motions released 20 minutes prior to match.',
      'Constructive speeches (4 mins), Rebuttals (2 mins).'
    ],
    coordinators: [
      { name: 'Ritika Srivastava', phonePlaceholder: '+91 91551 XXXXX', email: 'debate@martinovation.umu.ac.in' }
    ],
    featured: false
  },
  {
    id: 'cultural-night-genesis',
    name: 'Genesis Star Night & Beats',
    category: 'Cultural',
    tagline: 'Band War, Cyber Choreography & Pro-Night',
    description: 'When the sun sets behind the hills of Angara, the campus ignites with electric rock fusion, laser projection choreography, and the grand celebrity DJ night.',
    iconName: 'Music',
    isTeam: true,
    teamSize: 'Solo / Group (Up to 12)',
    entryFee: 'Free for All Pass Holders',
    isFree: true,
    prizePool: '₹60,000 + Headliner Stage Spotlight',
    dateTime: 'Day 5, 05:30 PM - 10:30 PM',
    venue: 'UMU Main Grand Amphitheatre',
    eligibility: 'Open to all enrolled students with valid Festival ID Card',
    rules: [
      'Stage time strictly monitored: 12 minutes for bands, 8 minutes for dance crews.',
      'All musical equipment and audio inputs must be registered with sound engineers.',
      'Audience behavior must strictly comply with university code of conduct.'
    ],
    coordinators: [
      { name: 'Amit Kumar Hansda', phonePlaceholder: '+91 94711 XXXXX', email: 'cultural@martinovation.umu.ac.in' },
      { name: 'Neha Gupta', phonePlaceholder: '+91 93861 XXXXX', email: 'events@martinovation.umu.ac.in' }
    ],
    featured: true
  },
  {
    id: 'drone-racing',
    name: 'SkyVelocity: FPV Drone Challenge',
    category: 'Robotics',
    tagline: 'High-Velocity Obstacle Course Navigation',
    description: 'Navigate custom First-Person-View (FPV) micro-drones through glowing neon rings, slalom gates, and sharp vertical drops across the indoor sports complex.',
    iconName: 'Zap',
    isTeam: true,
    teamSize: '1 - 2 Members (Pilot & Spotter)',
    entryFee: '₹350 / Pilot',
    isFree: false,
    prizePool: '₹40,000 Cash Pool',
    dateTime: 'Day 3, 02:00 PM - 05:00 PM',
    venue: 'Indoor Sports Complex Hall 1',
    eligibility: 'Certified amateur and student drone pilots',
    rules: [
      'Standard 250mm or micro whoop class.',
      'Analog 5.8GHz or approved digital HD systems.',
      'Safety spotter mandatory during flight.'
    ],
    coordinators: [
      { name: 'Sumit Paul', phonePlaceholder: '+91 99551 XXXXX', email: 'drones@martinovation.umu.ac.in' }
    ],
    featured: false
  },
  {
    id: 'roborace-track',
    name: 'RoboTrack GP: All-Terrain Sprint',
    category: 'Robotics',
    tagline: 'Autonomous & Wired Obstacle Dash',
    description: 'Race custom bot machines over rocky gravel, oil slicks, bridge inclines, and water traps in a race against the stopwatch.',
    iconName: 'Cpu',
    isTeam: true,
    teamSize: '2 - 4 Members',
    entryFee: '₹300 / Team',
    isFree: false,
    prizePool: '₹30,000 Cash Pool',
    dateTime: 'Day 3, 09:30 AM - 01:00 PM',
    venue: 'Robotics Track, Block C Lawn',
    eligibility: 'Engineering & Polytechnic students',
    rules: [
      'Chassis dimensions max: 30cm x 30cm x 30cm.',
      'Time penalties for track derailment or touching obstacles.',
      'Maximum battery voltage 24V.'
    ],
    coordinators: [
      { name: 'Tanya Sinha', phonePlaceholder: '+91 94301 XXXXX', email: 'robotrack@martinovation.umu.ac.in' }
    ],
    featured: false
  }
];
