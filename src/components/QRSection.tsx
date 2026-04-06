import Icon from '@/components/ui/icon';

const socials = [
  {
    name: 'ВКонтакте',
    url: 'https://vk.com/naolider',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/VK_Compact_Logo_%282021-present%29.svg',
    color: 'hsl(214,80%,56%)',
    qr: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://vk.com/naolider&bgcolor=111827&color=60B8D4',
  },
  {
    name: 'Макс',
    url: 'https://max.ru/id8300005685_gos',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/MAX_messenger_logo.svg/512px-MAX_messenger_logo.svg.png',
    color: 'hsl(180,55%,45%)',
    qr: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://max.ru/id8300005685_gos&bgcolor=111827&color=60B8D4',
  },
];

export default function QRSection() {
  return (
    <section id="qr" className="py-28 px-6" style={{ background: 'hsl(var(--background))' }}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--neon))]/30 bg-[hsl(var(--neon))]/10 text-xs font-medium text-neon mb-6">
            <Icon name="QrCode" size={12} />
            Мы в социальных сетях
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            Подключайтесь{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, hsl(180,45%,60%), hsl(245,80%,65%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              к нам
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Наведите камеру на QR-код или нажмите кнопку для перехода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {socials.map((s) => (
            <div
              key={s.name}
              className="flex flex-col items-center gap-6 p-8 rounded-2xl border w-full max-w-sm"
              style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
            >
              <div className="flex flex-col items-center gap-2">
                <img src={s.logo} alt={s.name} className="w-14 h-14 object-contain rounded-xl" />
                <p className="font-semibold text-sm" style={{ color: 'hsl(var(--foreground))' }}>{s.name}</p>
              </div>

              <div
                className="rounded-xl overflow-hidden p-3"
                style={{ background: 'hsl(var(--secondary))' }}
              >
                <img src={s.qr} alt={`QR ${s.name}`} className="w-40 h-40 rounded" />
              </div>

              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{ background: s.color, color: '#fff' }}
              >
                Перейти в {s.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}