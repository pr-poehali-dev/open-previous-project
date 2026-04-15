import Icon from '@/components/ui/icon';
import { useSettings } from '@/hooks/useSettings';

const socials = [
  {
    name: 'ВКонтакте',
    handle: '@naolider',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f3/VK_Compact_Logo_%282021-present%29.svg',
    data: 'https://vk.com/naolider',
    url: 'https://vk.com/naolider',
    accent: '0077FF',
    accentLight: '0060cc',
  },
  {
    name: 'Макс',
    handle: '@lider_nao',
    logo: 'https://cdn.poehali.dev/projects/2f270b74-1b79-47e9-b474-9f2982efeaab/bucket/3faadd79-00d9-4d23-bb30-df1aa3a3f376.svg',
    data: 'https://max.ru/id8300005685_gos',
    url: 'https://max.ru/id8300005685_gos',
    accent: '6C3CE2',
    accentLight: '5429c4',
  },
];

function getQrUrl(data: string, isDark: boolean, accentHex: string, accentLight: string) {
  const bg = isDark ? '111a1a' : 'ffffff';
  const fg = isDark ? accentHex : accentLight;
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(data)}&bgcolor=${bg}&color=${fg}&margin=10&qzone=1`;
}

export default function QRSection() {
  const { settings } = useSettings();
  const isDark = settings.theme !== 'light';

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
            Наведите камеру на QR-код для перехода
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {socials.map((s) => {
            const qrUrl = getQrUrl(s.data, isDark, s.accent, s.accentLight);
            return (
              <div
                key={s.name}
                className="flex flex-col items-center w-full max-w-sm rounded-3xl border overflow-hidden"
                style={{
                  borderColor: `#${s.accent}44`,
                  background: isDark
                    ? `linear-gradient(160deg, #${s.accent}18 0%, hsl(var(--card)) 50%)`
                    : `linear-gradient(160deg, #${s.accent}0f 0%, hsl(var(--card)) 50%)`,
                }}
              >
                {/* Header */}
                <div
                  className="w-full flex items-center gap-3 px-6 py-4"
                  style={{ borderBottom: `1px solid #${s.accent}22` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `#${s.accent}22` }}
                  >
                    <img src={s.logo} alt={s.name} className="w-6 h-6 object-contain" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm" style={{ color: 'hsl(var(--foreground))' }}>{s.name}</span>
                    <span className="text-xs" style={{ color: `#${s.accent}` }}>{s.handle}</span>
                  </div>
                  <Icon name="ExternalLink" size={14} className="ml-auto opacity-40 group-hover:opacity-80 transition-opacity" style={{ color: 'hsl(var(--foreground))' }} />
                </div>

                {/* QR */}
                <div className="flex flex-col items-center gap-4 px-6 py-8">
                  <div
                    className="rounded-2xl overflow-hidden p-2"
                    style={{
                      background: isDark ? '#111a1a' : '#ffffff',
                      boxShadow: `0 4px 24px #${s.accent}33`,
                    }}
                  >
                    <img
                      key={`${isDark}-${qrUrl}`}
                      src={qrUrl}
                      alt={`QR ${s.name}`}
                      className="w-44 h-44 block"
                    />
                  </div>
                  <p className="text-xs text-center" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    Наведите камеру телефона
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}