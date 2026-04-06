import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { useSettings } from '@/hooks/useSettings';

interface NavBarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const links = [
  { id: 'home', label: 'Главная' },
  { id: 'courses', label: 'О занятиях' },
  { id: 'qr', label: 'Мы в сети' },
  { id: 'contacts', label: 'Контакты' },
];

export default function NavBar({ activeSection, onNavigate }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { settings, update } = useSettings();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-xl border-b' : 'bg-transparent'
      }`}
      style={scrolled ? {
        background: 'hsl(var(--background)/0.9)',
        borderColor: 'hsl(var(--border))',
      } : undefined}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button onClick={() => onNavigate('home')} className="flex items-center gap-2 group">
          <img
            src="https://lidernao.ru/wp-content/uploads/2023/08/logo_vec.svg"
            alt="ДЮЦ Лидер"
            className="h-9 w-auto"
          />
          <span className="font-cormorant text-xl font-semibold tracking-wide" style={{ color: 'hsl(var(--foreground))' }}>
            ДЮЦ <span className="text-neon">ЛИДЕР</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onNavigate(link.id)}
              className={`text-sm font-medium transition-colors duration-200 ${
                activeSection === link.id
                  ? 'text-neon'
                  : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => update({ theme: settings.theme === 'dark' ? 'light' : 'dark' })}
            className="w-9 h-9 rounded-full border flex items-center justify-center transition-colors hover:bg-[hsl(var(--secondary))]"
            style={{ borderColor: 'hsl(var(--border))' }}
            aria-label="Переключить тему"
          >
            <Icon name={settings.theme === 'dark' ? 'Sun' : 'Moon'} size={15} />
          </button>
        </div>

        <button
          className="md:hidden w-9 h-9 flex items-center justify-center"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Меню"
        >
          <Icon name={menuOpen ? 'X' : 'Menu'} size={20} />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden border-t px-6 py-4 flex flex-col gap-4 animate-slide-down"
          style={{ background: 'hsl(var(--background))', borderColor: 'hsl(var(--border))' }}
        >
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => { onNavigate(link.id); setMenuOpen(false); }}
              className={`text-left text-sm font-medium py-1 transition-colors ${
                activeSection === link.id ? 'text-neon' : 'text-[hsl(var(--muted-foreground))]'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => update({ theme: settings.theme === 'dark' ? 'light' : 'dark' })}
            className="text-left text-sm text-[hsl(var(--muted-foreground))] flex items-center gap-2"
          >
            <Icon name={settings.theme === 'dark' ? 'Sun' : 'Moon'} size={14} />
            {settings.theme === 'dark' ? 'Светлая тема' : 'Тёмная тема'}
          </button>
        </div>
      )}
    </nav>
  );
}
