import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'Mail', label: 'Email', value: 'lidernao@mail.ru', color: 'hsl(245,80%,65%)' },
  { icon: 'Phone', label: 'Телефон', value: '+7 (81853) 4-39-05', color: 'hsl(42,90%,58%)' },
  { icon: 'MapPin', label: 'Адрес', value: '166000, НАО, г. Нарьян-Мар, ул. Выучейского, д. 30', color: 'hsl(320,70%,60%)' },
  { icon: 'Globe', label: 'Сайт', value: 'lidernao.ru', color: 'hsl(180,55%,45%)' },
];

export default function ContactsSection() {
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
                <Icon name={c.icon} fallback="Info" size={18} style={{ color: c.color }} />
              </div>
              <div>
                <p className="text-xs mb-0.5" style={{ color: 'hsl(var(--muted-foreground))' }}>{c.label}</p>
                <p className="text-sm font-medium" style={{ color: 'hsl(var(--foreground))' }}>{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
