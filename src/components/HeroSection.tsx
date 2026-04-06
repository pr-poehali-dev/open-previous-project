import { useEffect, useRef } from 'react';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const stats = [
  { value: '17+', label: 'Программ' },
  { value: '30 лет', label: 'Работаем' },
];

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 30;
      orbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden mesh-bg">
      <div className="absolute inset-0 pointer-events-none">
        <div
          ref={orbRef}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl transition-transform duration-500 ease-out"
          style={{ background: 'radial-gradient(circle, hsl(245,80%,65%), transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-64 h-64 rounded-full opacity-10 blur-3xl animate-float"
          style={{ background: 'radial-gradient(circle, hsl(42,90%,58%), transparent 70%)' }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(hsl(220,15%,20%) 1px, transparent 1px), linear-gradient(90deg, hsl(220,15%,20%) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(245,80%,65%)]/30 bg-[hsl(245,80%,65%)]/10 text-xs font-medium mb-8"
          style={{ color: 'hsl(245,80%,75%)' }}
        >
          <Icon name="Sparkles" size={12} />
          Детско-юношеский центр г. Нарьян-Мар
        </div>

        <h1 className="font-cormorant text-6xl md:text-8xl font-semibold leading-none mb-6" style={{ color: 'hsl(var(--foreground))' }}>
          ДЮЦ{' '}
          <span
            className="italic"
            style={{
              background: 'linear-gradient(135deg, hsl(180,45%,60%), hsl(245,80%,65%))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            ЛИДЕР
          </span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
          Спортивные секции, единоборства, кванториум и физическая культура для детей и молодёжи НАО
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            onClick={() => onNavigate('courses')}
            className="px-7 py-3.5 rounded-xl font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'hsl(var(--primary))',
              color: 'hsl(var(--primary-foreground))',
              boxShadow: '0 0 30px hsl(var(--neon)/0.3)',
            }}
          >
            Смотреть занятия
          </button>
          <button
            onClick={() => onNavigate('contacts')}
            className="px-7 py-3.5 rounded-xl font-medium text-sm border transition-all duration-300 hover:scale-105"
            style={{
              borderColor: 'hsl(var(--border))',
              color: 'hsl(var(--foreground))',
            }}
          >
            Связаться с нами
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 max-w-xs mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border p-5 text-center"
              style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
            >
              <div className="font-cormorant text-3xl font-semibold mb-1 text-neon">{stat.value}</div>
              <div className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={20} style={{ color: 'hsl(var(--muted-foreground))' }} />
      </div>
    </section>
  );
}