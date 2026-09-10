import React, { useState, useEffect } from 'react';
import { EVENTS_DATA } from '../data/events';
import { RegistrationFormData } from '../types';
import confetti from 'canvas-confetti';
import { 
  Sparkles, 
  Send, 
  Users, 
  User, 
  CheckCircle2, 
  AlertCircle, 
  Download, 
  RefreshCw,
  Clock,
  ShieldCheck,
  Plus,
  Trash2
} from 'lucide-react';

interface RegistrationFormProps {
  preselectedEventId?: string;
  onClearPreselectedEvent?: () => void;
  onShowToast: (title: string, message: string) => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  preselectedEventId,
  onClearPreselectedEvent,
  onShowToast
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    isTeam: false,
    eventId: preselectedEventId || EVENTS_DATA[0].id,
    participantName: '',
    collegeName: '',
    email: '',
    phone: '',
    teamName: '',
    teamMembers: [''],
    agreedToTerms: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [registrationRef, setRegistrationRef] = useState<string>('');

  // Update event if preselected from another section
  useEffect(() => {
    if (preselectedEventId) {
      setFormData((prev) => {
        const matchingEvent = EVENTS_DATA.find((e) => e.id === preselectedEventId);
        return {
          ...prev,
          eventId: preselectedEventId,
          isTeam: matchingEvent?.isTeam ?? prev.isTeam
        };
      });
    }
  }, [preselectedEventId]);

  const selectedEvent = EVENTS_DATA.find((e) => e.id === formData.eventId);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleEventChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEventId = e.target.value;
    const evt = EVENTS_DATA.find((item) => item.id === newEventId);
    setFormData((prev) => ({
      ...prev,
      eventId: newEventId,
      isTeam: evt?.isTeam ?? prev.isTeam
    }));
  };

  const handleAddTeamMember = () => {
    if (formData.teamMembers.length >= 5) {
      onShowToast('Limit Reached', 'Maximum 5 members allowed per team.');
      return;
    }
    setFormData((prev) => ({
      ...prev,
      teamMembers: [...prev.teamMembers, '']
    }));
  };

  const handleRemoveTeamMember = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      teamMembers: prev.teamMembers.filter((_, i) => i !== index)
    }));
  };

  const handleTeamMemberChange = (index: number, val: string) => {
    setFormData((prev) => {
      const updated = [...prev.teamMembers];
      updated[index] = val;
      return { ...prev, teamMembers: updated };
    });
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.participantName.trim()) {
      newErrors.participantName = 'Participant full name is required.';
    }

    if (!formData.collegeName.trim()) {
      newErrors.collegeName = 'University or college name is required.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    const phoneClean = formData.phone.replace(/[^0-9]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = '10-digit mobile number is required.';
    } else if (phoneClean.length < 10) {
      newErrors.phone = 'Please provide a valid 10-digit contact number.';
    }

    if (formData.isTeam) {
      if (!formData.teamName?.trim()) {
        newErrors.teamName = 'Team name is required for team arena registrations.';
      }
    }

    if (!formData.agreedToTerms) {
      newErrors.agreedToTerms = 'You must agree to the festival code of conduct and rules.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      onShowToast('Check Required Fields', 'Please complete all highlighted fields accurately.');
      return;
    }

    setIsSubmitting(true);

    /**
     * =========================================================================
     * DEVELOPER INTEGRATION POINT:
     * To connect this registration form to an active backend database or external
     * endpoint (e.g. Google Sheets API, Google Form webhook, Supabase, or custom REST API):
     *
     * Example:
     * await fetch('https://api.martinovation.umu.ac.in/v1/register', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData)
     * });
     * =========================================================================
     */

    // Simulated network latency for high-fidelity interactive frontend demo
    setTimeout(() => {
      const generatedId = `UMU-MNV-${Math.floor(100000 + Math.random() * 900000)}`;
      setRegistrationRef(generatedId);
      setIsSubmitting(false);
      setIsSuccess(true);

      // Trigger celebratory cyber confetti
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#ff1744', '#dc2626', '#ef4444', '#f59e0b', '#ffffff']
        });
      } catch {
        // Fallback gracefully if canvas-confetti is unsupported
      }

      onShowToast('Registration Confirmed!', `Your entry code is ${generatedId}`);
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      isTeam: false,
      eventId: EVENTS_DATA[0].id,
      participantName: '',
      collegeName: '',
      email: '',
      phone: '',
      teamName: '',
      teamMembers: [''],
      agreedToTerms: false
    });
    setErrors({});
    if (onClearPreselectedEvent) onClearPreselectedEvent();
  };

  const handlePrintSlip = () => {
    window.print();
  };

  return (
    <section id="register" className="relative py-24 sm:py-32 overflow-hidden bg-[#050508]">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm font-semibold tracking-wider font-rajdhani uppercase">
            <Sparkles className="w-3.5 h-3.5 text-red-400" />
            <span>Portal Open</span>
          </div>

          <h2 className="font-orbitron text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Ready to Turn Your Idea <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-400 to-amber-400">Into Impact?</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-inter max-w-2xl mx-auto">
            Secure your spot in national hackathons, robotic steel clashes, design sprints, or the esports championship at Usha Martin University.
          </p>

          {/* Registration Status & Deadline Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-rajdhani font-semibold">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/40 text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Registration Status: Active (Early Bird Slots)
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Deadline: 48 Hours Before Festival Inauguration
            </span>
          </div>
        </div>

        {/* Success Confirmation Card */}
        {isSuccess ? (
          <div className="p-8 sm:p-10 rounded-2xl bg-slate-900/90 border border-red-500/50 shadow-[0_0_50px_rgba(255,23,68,0.25)] text-center space-y-6 backdrop-blur-xl animate-fade-in">
            <div className="w-16 h-16 rounded-2xl bg-red-500/20 border border-red-400 text-red-300 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,23,68,0.4)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-orbitron font-bold text-amber-400 uppercase tracking-widest">
                Registration Confirmed
              </span>
              <h3 className="font-orbitron text-xl sm:text-2xl font-black text-white">
                Where Innovation Knows No Boundaries!
              </h3>
              <p className="text-slate-300 text-sm font-inter max-w-md mx-auto">
                Thank you, <strong className="text-white">{formData.participantName}</strong>. Your entry for <strong className="text-red-300">{selectedEvent?.name}</strong> has been logged.
              </p>
            </div>

            {/* Reference Slip Box */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 max-w-md mx-auto space-y-2 font-mono text-left text-xs">
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">REFERENCE ID:</span>
                <span className="text-red-400 font-bold">{registrationRef}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">INSTITUTION:</span>
                <span className="text-slate-200">{formData.collegeName}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800/80 pb-2">
                <span className="text-slate-400">DELEGATE TYPE:</span>
                <span className="text-slate-200">{formData.isTeam ? `Team (${formData.teamName})` : 'Individual'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">VENUE CAMPUS:</span>
                <span className="text-slate-200">Usha Martin University, Ranchi</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-inter italic max-w-md mx-auto">
              * Frontend demonstration note: In production, confirmation tickets with QR badges are sent automatically to {formData.email}.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={handlePrintSlip}
                className="w-full sm:w-auto py-3 px-6 rounded-lg bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/50 font-orbitron text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Print / Save Slip</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto py-3 px-6 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-orbitron text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Register Another Event</span>
              </button>
            </div>
          </div>
        ) : (
          /* Main Interactive Form */
          <form
            onSubmit={handleSubmit}
            noValidate
            className="p-6 sm:p-10 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl space-y-8"
          >
            {/* Step 1: Type Selection (Individual vs Team) */}
            <div className="space-y-3">
              <label className="block text-xs font-orbitron font-bold text-red-400 uppercase tracking-wider">
                Registration Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, isTeam: false }))}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 font-orbitron text-xs sm:text-sm font-semibold tracking-wider transition-all ${
                    !formData.isTeam
                      ? 'bg-red-500/20 border-red-500 text-red-300 shadow-[0_0_15px_rgba(255,23,68,0.3)]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <User className="w-4 h-4" />
                  <span>Individual</span>
                </button>

                <button
                  type="button"
                  onClick={() => setFormData((p) => ({ ...p, isTeam: true }))}
                  className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 font-orbitron text-xs sm:text-sm font-semibold tracking-wider transition-all ${
                    formData.isTeam
                      ? 'bg-rose-500/20 border-rose-500 text-rose-300 shadow-[0_0_15px_rgba(225,29,72,0.3)]'
                      : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Users className="w-4 h-4" />
                  <span>Team / Squad</span>
                </button>
              </div>
            </div>

            {/* Step 2: Event Dropdown */}
            <div className="space-y-2">
              <label htmlFor="eventId" className="block text-xs font-orbitron font-bold text-red-400 uppercase tracking-wider">
                Select Arena Event *
              </label>
              <select
                id="eventId"
                name="eventId"
                value={formData.eventId}
                onChange={handleEventChange}
                className="w-full py-3 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm font-inter focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors"
              >
                {EVENTS_DATA.map((evt) => (
                  <option key={evt.id} value={evt.id} className="bg-slate-900 text-white">
                    {evt.name} [{evt.category}] - {evt.isTeam ? 'Team' : 'Individual'} ({evt.entryFee})
                  </option>
                ))}
              </select>

              {selectedEvent && (
                <div className="p-3 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs font-rajdhani text-slate-300 flex items-center justify-between">
                  <span>
                    Venue: <strong>{selectedEvent.venue}</strong> | Prize: <strong className="text-amber-400">{selectedEvent.prizePool}</strong>
                  </span>
                  <span className="text-red-400 uppercase font-semibold">{selectedEvent.teamSize}</span>
                </div>
              )}
            </div>

            {/* Step 3: Team Name (if Team selected) */}
            {formData.isTeam && (
              <div className="space-y-2 animate-fade-in">
                <label htmlFor="teamName" className="block text-xs font-orbitron font-bold text-rose-400 uppercase tracking-wider">
                  Team / Squad Name *
                </label>
                <input
                  type="text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName || ''}
                  onChange={handleInputChange}
                  placeholder="e.g. CyberKnights UMU, QuantumBots"
                  className={`w-full py-3 px-4 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 transition-colors ${
                    errors.teamName ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.teamName && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.teamName}</span>
                  </p>
                )}
              </div>
            )}

            {/* Step 4: Participant Info (Grid 2 cols) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="participantName" className="block text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider">
                  {formData.isTeam ? 'Team Leader Full Name *' : 'Participant Full Name *'}
                </label>
                <input
                  type="text"
                  id="participantName"
                  name="participantName"
                  value={formData.participantName}
                  onChange={handleInputChange}
                  placeholder="e.g. Amit Kumar Singh"
                  className={`w-full py-3 px-4 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                    errors.participantName ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.participantName && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.participantName}</span>
                  </p>
                )}
              </div>

              {/* University/College */}
              <div className="space-y-2">
                <label htmlFor="collegeName" className="block text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider">
                  University / College *
                </label>
                <input
                  type="text"
                  id="collegeName"
                  name="collegeName"
                  value={formData.collegeName}
                  onChange={handleInputChange}
                  placeholder="e.g. Usha Martin University"
                  className={`w-full py-3 px-4 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                    errors.collegeName ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.collegeName && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.collegeName}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider">
                  Official / Student Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. student@umu.ac.in"
                  className={`w-full py-3 px-4 rounded-xl bg-slate-950 border text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-xs font-orbitron font-bold text-slate-300 uppercase tracking-wider">
                  WhatsApp Contact Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="10-digit mobile number"
                  maxLength={14}
                  className={`w-full py-3 px-4 rounded-xl bg-slate-950 border text-[#fff] text-sm focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors ${
                    errors.phone ? 'border-red-500' : 'border-slate-800'
                  }`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-400 flex items-center gap-1 font-inter">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Step 5: Dynamic Team Members if Team selected */}
            {formData.isTeam && (
              <div className="space-y-3 pt-2 border-t border-slate-800 animate-fade-in">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-orbitron font-bold text-red-400 uppercase tracking-wider">
                    Additional Team Members
                  </label>
                  <button
                    type="button"
                    onClick={handleAddTeamMember}
                    className="text-xs text-red-400 hover:text-red-300 flex items-center gap-1 font-rajdhani font-semibold focus:outline-none"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Member</span>
                  </button>
                </div>

                <div className="space-y-2">
                  {formData.teamMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={member}
                        onChange={(e) => handleTeamMemberChange(index, e.target.value)}
                        placeholder={`Member ${index + 2} Name & Email/Phone (Optional)`}
                        className="flex-1 py-2.5 px-4 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-1 focus:ring-red-500"
                      />
                      {formData.teamMembers.length > 1 && (
                        <button
                          type="button"
                          onClick={() => handleRemoveTeamMember(index)}
                          className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-red-400 transition-colors"
                          aria-label="Remove team member"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Terms and Conditions */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-950 text-red-500 focus:ring-red-500 focus:ring-offset-slate-950"
                />
                <span className="text-xs text-slate-300 font-inter leading-relaxed">
                  I agree to adhere to the official Martinovation 2026 rules, academic integrity guidelines, and the Usha Martin University campus code of conduct.
                </span>
              </label>
              {errors.agreedToTerms && (
                <p className="text-xs text-red-400 flex items-center gap-1 font-inter pl-7">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.agreedToTerms}</span>
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-red-600 via-rose-500 to-amber-500 hover:from-red-500 hover:to-amber-400 disabled:opacity-50 text-white font-orbitron font-extrabold text-sm uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(255,23,68,0.4)] hover:shadow-[0_0_35px_rgba(255,23,68,0.6)] transition-all"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-5 h-5 animate-spin" />
                    <span>Processing Registration...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Official Registration</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-xs font-rajdhani text-slate-400 text-center mt-3">
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>Instant Confirmation Reference • No Payment Required for Free Events</span>
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
