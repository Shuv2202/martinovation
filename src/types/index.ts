export type EventCategory = 
  | 'All Events'
  | 'Coding'
  | 'Robotics'
  | 'Gaming'
  | 'Innovation'
  | 'Creative'
  | 'Cultural';

export interface EventItem {
  id: string;
  name: string;
  category: EventCategory;
  tagline: string;
  description: string;
  iconName: string;
  isTeam: boolean;
  teamSize: string;
  entryFee: string;
  isFree: boolean;
  prizePool: string;
  dateTime: string;
  venue: string;
  eligibility: string;
  rules: string[];
  coordinators: {
    name: string;
    phonePlaceholder: string;
    email: string;
  }[];
  featured?: boolean;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  category: string;
  venue: string;
  description: string;
  tag?: string;
}

export interface DaySchedule {
  dayNumber: number;
  dateStr: string;
  title: string;
  theme: string;
  events: ScheduleEvent[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: string;
  avatarSeed: string;
  avatarUrl?: string;
  linkedin?: string;
  email?: string;
}

export interface TeamCategory {
  categoryName: string;
  members: TeamMember[];
}

export interface Sponsor {
  id: string;
  name: string;
  tier: 'Title Sponsor' | 'Technology Partner' | 'Knowledge Partner' | 'Community Partner';
  tagline: string;
  logoText: string;
  logoBg: string;
  accentColor: string;
}

export type GalleryCategory = 'All' | 'Campus Vibes' | 'Event Highlights' | 'Team Moments' | 'Previous Editions';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  caption: string;
  gradient: string;
  aspectRatio: 'square' | 'wide' | 'tall';
  badge: string;
  svgIcon: string;
}

export interface RegistrationFormData {
  isTeam: boolean;
  eventId: string;
  participantName: string;
  collegeName: string;
  email: string;
  phone: string;
  teamName?: string;
  teamMembers: string[];
  agreedToTerms: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'error' | 'info';
  title: string;
  message: string;
}
