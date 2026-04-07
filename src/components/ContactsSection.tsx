import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'lidernao@mail.ru', color: 'hsl(245,80%,65%)', logo: null },
  { icon: 'Phone', label: 'Телефон', value: '+7 (81853) 4-22-43', color: 'hsl(42,90%,58%)', logo: null },
  { icon: 'MapPin', label: 'Адрес', value: '166000, НАО, г. Нарьян-Мар, ул. Выучейского, д. 30', color: 'hsl(320,70%,60%)', logo: null },
  { icon: 'Globe', label: 'Сайт', value: 'lidernao.ru', color: 'hsl(180,55%,45%)', logo: null },
  { icon: 'MessageCircle', label: 'Макс', value: 'Написать в Макс', color: 'hsl(210,80%,55%)', logo: 'https://cdn.poehali.dev/projects/2f270b74-1b79-47e9-b474-9f2982efeaab/bucket/3faadd79-00d9-4d23-bb30-df1aa3a3f376.svg' },
];

export default function ContactsSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--gold))]/30 bg-[hsl(var(--gold))]/10 text-xs font-medium text-gold mb-6">
            <Icon name="Send" size={12} />
            Связаться с нами
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, hsl(42,90%,58%), hsl(195,70%,42%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Контакты
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Есть вопросы? Напишите нам — ответим в течение 2 часов.
          </p>
        </div>

        <div className="rounded-2xl overflow-hidden border mb-10" style={{ height: '320px', borderColor: 'hsl(var(--border))' }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=53.089755%2C67.638250&z=16&pt=53.089755%2C67.638250%2Cpm2rdm&text=%D0%9D%D0%B0%D1%80%D1%8C%D1%8F%D0%BD-%D0%9C%D0%B0%D1%80%2C%20%D1%83%D0%BB.%20%D0%92%D1%8B%D1%83%D1%87%D0%B5%D0%B9%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%2C%2030"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen
            title="Карта"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            {contacts.map((c) => (
              <div
                key={c.label}
                className="flex items-start gap-4 p-4 rounded-xl border"
                style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${c.color}20` }}
                >
                  {c.logo ? (
                    <img src={c.logo} alt={c.label} className="w-6 h-6 object-contain" />
                  ) : (
                    <Icon name={c.icon} fallback="Info" size={18} style={{ color: c.color }} />
                  )}
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: 'hsl(var(--muted-foreground))' }}>{c.label}</p>
                  <p className="text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>{c.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl border p-6"
            style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
          >
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{ background: 'hsl(140,60%,45%)20' }}
                >
                  <Icon name="CheckCircle" size={28} style={{ color: 'hsl(140,60%,45%)' }} />
                </div>
                <p className="font-cormorant text-2xl font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
                  Сообщение отправлено!
                </p>
                <p className="text-sm text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  Мы свяжемся с вами в ближайшее время
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                  className="text-sm text-neon hover:underline"
                >
                  Отправить ещё
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-cormorant text-2xl font-semibold mb-1" style={{ color: 'hsl(var(--foreground))' }}>
                  Написать нам
                </h3>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  required
                  value={form.name}
                  onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
                  className="px-4 py-2.5 rounded-xl border text-sm bg-transparent outline-none focus:ring-1 focus:ring-[hsl(var(--ring))] placeholder:text-[hsl(var(--muted-foreground))]"
                  style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={form.email}
                  onChange={(e) => setForm(f => ({ ...f, email: e.target.value }))}
                  className="px-4 py-2.5 rounded-xl border text-sm bg-transparent outline-none focus:ring-1 focus:ring-[hsl(var(--ring))] placeholder:text-[hsl(var(--muted-foreground))]"
                  style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                />
                <textarea
                  placeholder="Ваш вопрос или сообщение..."
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm(f => ({ ...f, message: e.target.value }))}
                  className="px-4 py-2.5 rounded-xl border text-sm bg-transparent outline-none resize-none focus:ring-1 focus:ring-[hsl(var(--ring))] placeholder:text-[hsl(var(--muted-foreground))]"
                  style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                  style={{
                    background: 'hsl(var(--primary))',
                    color: 'hsl(var(--primary-foreground))',
                  }}
                >
                  <Icon name="Send" size={14} />
                  Отправить
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}