import React, { useState, useEffect } from 'react';
import { ToastMessage } from './types';
import { EVENTS_DATA } from './data/events';
import { ParticleBackground } from './components/ParticleBackground';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Events } from './components/Events';
import { PrizeVault } from './components/PrizeVault';
import { Schedule } from './components/Schedule';
import { CampusRadar } from './components/CampusRadar';
import { Gallery } from './components/Gallery';
import { Sponsors } from './components/Sponsors';
import { Team } from './components/Team';
import { RegistrationForm } from './components/RegistrationForm';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LoadingScreen } from './components/LoadingScreen';
import { Toast } from './components/Toast';
import { FloatingRegisterButton } from './components/FloatingRegisterButton';
import { MyDeckDrawer } from './components/MyDeckDrawer';
import { NotFound } from './pages/NotFound';
import { sound } from './utils/audio';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [preselectedEventId, setPreselectedEventId] = useState<string | undefined>(undefined);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);
  const [is404, setIs404] = useState(false);

  // Bookmarked / Shortlisted Challenges Deck
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('martinovation_deck');
        return saved ? JSON.parse(saved) : ['hackathon-genesis', 'robowars-arena'];
      } catch {
        return ['hackathon-genesis', 'robowars-arena'];
      }
    }
    return ['hackathon-genesis', 'robowars-arena'];
  });

  const [isDeckOpen, setIsDeckOpen] = useState(false);

  // Check URL path for 404 simulation if user navigates to an unrecognized path
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && !path.includes('index.html')) {
      setIs404(true);
    }
  }, []);

  const addToast = (title: string, message: string, type: 'success' | 'error' | 'info' = 'success') => {
    const newToast: ToastMessage = {
      id: `${Date.now()}-${Math.random()}`,
      title,
      message,
      type
    };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after 4 seconds
    setTimeout(() => {
      dismissToast(newToast.id);
    }, 4500);
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleToggleBookmark = (eventId: string) => {
    setBookmarkedIds((prev) => {
      let updated: string[];
      if (prev.includes(eventId)) {
        updated = prev.filter((id) => id !== eventId);
        addToast('Removed from Deck', 'Challenge unpinned from your festival itinerary.', 'info');
      } else {
        updated = [...prev, eventId];
        sound.playSuccess();
        addToast('Pinned to Deck', 'Challenge saved to your festival itinerary.', 'success');
      }
      try {
        localStorage.setItem('martinovation_deck', JSON.stringify(updated));
      } catch {
        // LocalStorage fallback
      }
      return updated;
    });
  };

  const handleRemoveBookmark = (eventId: string) => {
    setBookmarkedIds((prev) => {
      const updated = prev.filter((id) => id !== eventId);
      try {
        localStorage.setItem('martinovation_deck', JSON.stringify(updated));
      } catch {
        // Fallback
      }
      return updated;
    });
  };

  const handleClearAllBookmarks = () => {
    setBookmarkedIds([]);
    try {
      localStorage.setItem('martinovation_deck', JSON.stringify([]));
    } catch {
      // Fallback
    }
    addToast('Deck Cleared', 'All saved challenges removed.', 'info');
  };

  const handleOpenRegister = (eventId?: string) => {
    if (eventId) {
      setPreselectedEventId(eventId);
    }
    const registerEl = document.getElementById('register');
    if (registerEl) {
      registerEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (is404) {
    return (
      <NotFound
        onReturnHome={() => {
          window.history.pushState({}, '', '/');
          setIs404(false);
        }}
      />
    );
  }

  const bookmarkedEvents = EVENTS_DATA.filter((e) => bookmarkedIds.includes(e.id));

  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 font-inter antialiased overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onFinish={() => setIsLoading(false)} />
      )}

      {/* Desktop Futuristic Cursor */}
      <CustomCursor />

      {/* Interactive Particle and Cyber Background */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar 
        onOpenRegister={() => handleOpenRegister()} 
        onOpenDeck={() => setIsDeckOpen(true)}
        deckCount={bookmarkedIds.length}
      />

      {/* Main Sections */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        {/* Futuristic Hero with Interactive Holo-Pass Studio & Chrono Reactor */}
        <Hero onOpenRegister={() => handleOpenRegister()} />

        {/* About: Interactive Innovation Matrix & University R&D Ecosystem */}
        <About />

        {/* 20+ Challenge Arenas (Dual-Mode: Bento Grid & Terminal Matrix) */}
        <Events 
          onOpenRegister={(id) => handleOpenRegister(id)} 
          bookmarkedIds={bookmarkedIds}
          onToggleBookmark={handleToggleBookmark}
        />

        {/* Grand Prize Vault & Incubation Grants */}
        <PrizeVault onOpenRegister={() => handleOpenRegister()} />

        {/* 5-Day Interactive Odyssey Schedule with Google Calendar Sync */}
        <Schedule />

        {/* Campus Radar & Transit Logistics (Angara, Ranchi Guide) */}
        <CampusRadar />

        {/* Festival Chronicles Photo & Media Gallery */}
        <Gallery />

        {/* Sponsors & Partners in Innovation */}
        <Sponsors onShowToast={addToast} />

        {/* Organizing Crew & Faculty */}
        <Team onShowToast={addToast} />

        {/* Registration Terminal & Interactive Squad Builder */}
        <RegistrationForm
          preselectedEventId={preselectedEventId}
          onClearPreselectedEvent={() => setPreselectedEventId(undefined)}
          onShowToast={addToast}
        />

        {/* Campus HQ, Enquiry Form & FAQ Accordion */}
        <Contact onShowToast={addToast} />
      </main>

      {/* Footer */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Floating Action Button for Mobile */}
      <FloatingRegisterButton onOpenRegister={() => handleOpenRegister()} />

      {/* Interactive My Festival Deck / Itinerary Drawer */}
      <MyDeckDrawer
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        bookmarkedEvents={bookmarkedEvents}
        onRemoveBookmark={handleRemoveBookmark}
        onClearAll={handleClearAllBookmarks}
        onRegister={handleOpenRegister}
      />

      {/* Toast Notification Container */}
      <Toast toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}
