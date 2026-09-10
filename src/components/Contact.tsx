import React, { useState } from 'react';
import { FAQ_DATA } from '../data/faq';
import { 
  MapPin, 
  Mail, 
  Instagram, 
  ExternalLink, 
  Send, 
  ChevronDown, 
  HelpCircle, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  PhoneCall
} from 'lucide-react';

interface ContactProps {
  onShowToast: (title: string, message: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onShowToast }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQ_DATA[0].id);
  const [enquiryData, setEnquiryData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [enquirySuccess, setEnquirySuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleFaq = (id: string) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!enquiryData.name || !enquiryData.email || !enquiryData.message) {
      onShowToast('Missing Details', 'Please enter your name, email, and query message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setEnquirySuccess(true);
      onShowToast('Message Transmitted', 'Our organizing committee will respond via email shortly.');
      setEnquiryData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setEnquirySuccess(false), 5000);
    }, 700);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <MessageSquare className="w-3.5 h-3.5 text-red-400" />
            <span>Connect & Clarity</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Campus HQ & <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Inquiries</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter">
            Have queries regarding event eligibility, team lodging, transit routes, or sponsorships? Reach out directly or explore our FAQs.
          </p>
        </div>

        {/* Contact Info & Enquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left Column: University Info & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-rajdhani font-bold text-red-400 uppercase tracking-widest">
                  Festival Headquarters
                </span>
                <h3 className="font-orbitron text-2xl font-bold text-white">
                  Usha Martin University
                </h3>
                <p className="text-slate-400 text-sm font-inter">
                  Room 204, Festival Organizing Secretariat, Academic Block B.
                </p>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800 text-sm font-inter">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-rajdhani font-bold text-slate-400 uppercase">
                      Physical Address
                    </h4>
                    <p className="text-white font-medium">
                      At Village - Narayansoso, Near Angara Block, Ranchi - Purulia Highway, Angara, Ranchi, Jharkhand 835103
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-rajdhani font-bold text-slate-400 uppercase">
                      Official Email
                    </h4>
                    <a
                      href="mailto:martinovation@umu.ac.in"
                      className="text-red-400 hover:text-red-300 transition-colors font-medium break-all"
                    >
                      martinovation@umu.ac.in
                    </a>
                  </div>
                </div>

                {/* Phone Helpdesk */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-rajdhani font-bold text-slate-400 uppercase">
                      Student Helpdesk
                    </h4>
                    <p className="text-slate-300">
                      +91 87896 XXXXX / +91 76319 XXXXX
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Google Maps & Instagram */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://maps.google.com/?q=Usha+Martin+University+Ranchi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 border border-red-500/30 font-orbitron text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://instagram.com/ushamartinuniv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-2.5 px-4 rounded-xl bg-rose-500/15 hover:bg-rose-500/25 text-rose-300 border border-rose-500/30 font-orbitron text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: General Enquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl backdrop-blur-md space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-rajdhani font-bold text-amber-400 uppercase tracking-widest">
                  Quick Message Dispatch
                </span>
                <h3 className="font-orbitron text-2xl font-bold text-white">
                  Send a General Enquiry
                </h3>
                <p className="text-slate-400 text-sm font-inter">
                  Direct your queries to our hospitality, academic, or transport coordination teams.
                </p>
              </div>

              {enquirySuccess ? (
                <div className="p-6 rounded-xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-300 space-y-2 text-center animate-fade-in">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-400" />
                  <h4 className="font-orbitron text-base font-bold text-white">
                    Enquiry Dispatched Successfully!
                  </h4>
                  <p className="text-xs font-inter text-emerald-200">
                    Your request has been routed to the student desk. We usually reply within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-name" className="text-xs font-rajdhani font-bold text-slate-300 uppercase">
                        Your Full Name *
                      </label>
                      <input
                        id="enquiry-name"
                        type="text"
                        value={enquiryData.name}
                        onChange={(e) => setEnquiryData({ ...enquiryData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="enquiry-email" className="text-xs font-rajdhani font-bold text-slate-300 uppercase">
                        Email Address *
                      </label>
                      <input
                        id="enquiry-email"
                        type="email"
                        value={enquiryData.email}
                        onChange={(e) => setEnquiryData({ ...enquiryData, email: e.target.value })}
                        placeholder="name@college.edu"
                        required
                        className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-subject" className="text-xs font-rajdhani font-bold text-slate-300 uppercase">
                      Topic / Subject
                    </label>
                    <input
                      id="enquiry-subject"
                      type="text"
                      value={enquiryData.subject}
                      onChange={(e) => setEnquiryData({ ...enquiryData, subject: e.target.value })}
                      placeholder="e.g. Outstation Hostel Lodging Query, Robotics Arena Specs"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="enquiry-message" className="text-xs font-rajdhani font-bold text-slate-300 uppercase">
                      Query Details *
                    </label>
                    <textarea
                      id="enquiry-message"
                      rows={4}
                      value={enquiryData.message}
                      onChange={(e) => setEnquiryData({ ...enquiryData, message: e.target.value })}
                      placeholder="Please write your questions here..."
                      required
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:brightness-110 text-white font-orbitron font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,23,68,0.3)] transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? 'Transmitting...' : 'Dispatch Message'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="text-center space-y-2 mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-rajdhani uppercase font-bold">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Got Questions?</span>
            </div>
            <h3 className="font-orbitron text-2xl sm:text-3xl font-black text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-400 font-inter">
              Everything you need to know about participating in Martinovation 2026.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-slate-900/90 border-red-500/50 shadow-[0_0_25px_rgba(255,23,68,0.15)]'
                      : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-red-500"
                    aria-expanded={isOpen}
                  >
                    <span className="font-orbitron text-base sm:text-lg font-bold text-white pr-2">
                      {faq.question}
                    </span>
                    <div
                      className={`p-1.5 rounded-lg bg-slate-800 text-red-400 transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180 bg-red-500/20' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-slate-300 text-sm leading-relaxed font-inter border-t border-slate-800/80 animate-fade-in">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
