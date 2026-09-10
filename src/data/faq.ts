export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Who can participate in Martinovation 2026?',
    answer: 'Martinovation welcomes all bona fide students currently enrolled in any recognized University, College, Institute, or Polytechnic. This includes undergraduate, postgraduate, and diploma students across Engineering, Computer Applications, Management, Sciences, Arts, and Humanities.'
  },
  {
    id: 'faq-2',
    question: 'Can students from other colleges and universities register?',
    answer: 'Absolutely! Martinovation is an all-India national inter-university festival. Delegations from universities across Jharkhand, Bihar, West Bengal, Odisha, and nationwide are actively encouraged to compete. We also provide hostel/guest accommodation support for verified outstation teams on prior notice.'
  },
  {
    id: 'faq-3',
    question: 'Is there an entry fee for events?',
    answer: 'Most flagship technical competitions (including HackGenesis, Algolympics Coding Marathon, Web Design Sprint, and Quizzes) are completely FREE of entry fee to encourage broad student participation. Certain heavy-resource arena events (such as RoboWars combat cages and Esports tournaments) require a nominal fee to cover arena maintenance, dedicated bandwidth, and specialized referees.'
  },
  {
    id: 'faq-4',
    question: 'How do team registrations work?',
    answer: 'For team events (such as Hackathons, Robotics, and Gaming), the designated Team Leader completes the registration form with their primary details, selects the event, and adds the names and contact details of team members. Each team receives a unified Team Reference ID upon confirmation.'
  },
  {
    id: 'faq-5',
    question: 'Where will the events take place on campus?',
    answer: 'All events take place physically at the lush green Usha Martin University Campus located at Angara, Ranchi (Jharkhand). Dedicated zones include the Main Auditorium, Advanced Computing Labs, Open Air Steel Cage Arena, Sports Complex, and Seminar Theatres. Shuttle bus connectivity runs between Ranchi Railway Station/Kantatoli and the campus during fest days.'
  },
  {
    id: 'faq-6',
    question: 'How will participants receive schedule updates and round announcements?',
    answer: 'Upon registration, participants receive instant email confirmation containing their unique Martinovation Digital Delegate ID. Real-time announcements, slot confirmations, and round progression updates are broadcasted through official WhatsApp channels, the Martinovation Discord server, and live display boards across the campus.'
  }
];
