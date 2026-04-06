import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { useSettings } from '@/hooks/useSettings';

export default function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const { settings, update } = useSettings();

  return (
    <>
      <button
        onClick={() => setOpen(v => !v)}
        aria-label="Настройки доступности"
        className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-all hover:scale-110"
        style={{
          background: 'hsl(var(--primary))',
          color: 'hsl(var(--primary-foreground))',
          boxShadow: '0 0 20px hsl(var(--neon)/0.5)',
        }}
      >
        <Icon name="Accessibility" size={20} />
      </button>

      {open && (
        <div
          className="fixed bottom-22 right-6 z-50 w-72 rounded-2xl border shadow-2xl overflow-hidden"
          style={{
            background: 'hsl(var(--card))',
            borderColor: 'hsl(var(--border))',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            bottom: '5rem',
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 border-b" style={{ borderColor: 'hsl(var(--border))' }}>
            <div className="flex items-center gap-2">
              <Icon name="Accessibility" size={16} style={{ color: 'hsl(var(--primary))' }} />
              <span className="font-semibold text-sm" style={{ color: 'hsl(var(--foreground))' }}>
                Доступность
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition-colors"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              <Icon name="X" size={16} />
            </button>
          </div>

          <div className="p-5 flex flex-col gap-5">
            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Оформление
              </p>
              <div className="flex gap-2">
                {(['dark', 'light'] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => update({ theme: t })}
                    className={`flex-1 py-2 rounded-xl text-xs font-medium border transition-all ${
                      settings.theme === t ? 'border-[hsl(var(--primary))]' : ''
                    }`}
                    style={{
                      background: settings.theme === t ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                      color: settings.theme === t ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                      borderColor: settings.theme === t ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    }}
                  >
                    {t === 'dark' ? '🌙 Тёмная' : '☀️ Светлая'}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest mb-3" style={{ color: 'hsl(var(--muted-foreground))' }}>
                Специальные режимы
              </p>
              <div className="flex flex-col gap-2">
                {([
                  { id: 'none', label: 'Обычный' },
                  { id: 'vision', label: 'Слабовидящие' },
                  { id: 'contrast', label: 'Высокий контраст' },
                ] as const).map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => update({ a11y: mode.id })}
                    className="text-left px-3 py-2 rounded-xl text-xs font-medium border transition-all"
                    style={{
                      background: settings.a11y === mode.id ? 'hsl(var(--primary))' : 'hsl(var(--secondary))',
                      color: settings.a11y === mode.id ? 'hsl(var(--primary-foreground))' : 'hsl(var(--foreground))',
                      borderColor: settings.a11y === mode.id ? 'hsl(var(--primary))' : 'hsl(var(--border))',
                    }}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: 'hsl(var(--foreground))' }}>Крупный текст</span>
              <button
                onClick={() => update({ largeText: !settings.largeText })}
                className="relative w-10 h-5 rounded-full transition-all duration-300"
                style={{ background: settings.largeText ? 'hsl(var(--primary))' : 'hsl(var(--secondary))' }}
              >
                <span
                  className="absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all duration-300"
                  style={{ left: settings.largeText ? '1.25rem' : '0.125rem' }}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
