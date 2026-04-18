import { useState, useEffect } from 'react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import CoursesSection from '@/components/CoursesSection';
import QRSection from '@/components/QRSection';
import ContactsSection from '@/components/ContactsSection';
import FooterSection from '@/components/FooterSection';
import AccessibilityPanel from '@/components/AccessibilityPanel';

const sectionIds = ['home', 'courses', 'qr', 'contacts'];
const IDLE_TIMEOUT = 5 * 60 * 1000;
const FULLSCREEN_DELAY = 60 * 1000;

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const fsTimer = setTimeout(() => {
      const el = document.documentElement;
      if (el.requestFullscreen && !document.fullscreenElement) {
        el.requestFullscreen().catch(() => {});
      }
    }, FULLSCREEN_DELAY);
    return () => clearTimeout(fsTimer);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const el = document.getElementById('home');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, IDLE_TIMEOUT);
    };

    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'];
    events.forEach((e) => window.addEventListener(e, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((e) => window.removeEventListener(e, resetTimer));
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.35 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavigate = (section: string) => {
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen" style={{ background: 'hsl(var(--background))' }}>
      <NavBar activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection onNavigate={handleNavigate} />
      <CoursesSection />
      <QRSection />
      <ContactsSection />
      <FooterSection />
      <AccessibilityPanel />
    </div>
  );
}