import Icon from '@/components/ui/icon';

export default function CoursesPricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
      <div
        className="flex items-start gap-4 p-5 rounded-2xl border"
        style={{ borderColor: 'hsl(140,60%,40%)', background: 'hsl(140,40%,15%,0.3)' }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: 'hsl(140,60%,40%,0.2)' }}
        >
          <Icon name="GraduationCap" size={20} style={{ color: 'hsl(140,60%,50%)' }} />
        </div>
        <div>
          <p className="font-semibold mb-1.5" style={{ color: 'hsl(140,60%,50%)' }}>До 18 лет — бесплатно</p>
          <p className="text-sm leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Все образовательные программы ДЮЦ «Лидер» для детей и подростков <strong style={{ color: 'hsl(var(--foreground))' }}>до 18 лет</strong> финансируются из бюджета Ненецкого Автономного Округа и предоставляются <strong style={{ color: 'hsl(var(--foreground))' }}>полностью бесплатно</strong>.
          </p>
        </div>
      </div>

      <div
        className="flex items-start gap-4 p-5 rounded-2xl border"
        style={{ borderColor: 'hsl(42,90%,50%)', background: 'hsl(42,70%,15%,0.3)' }}
      >
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
          style={{ background: 'hsl(42,90%,50%,0.2)' }}
        >
          <Icon name="BadgeDollarSign" size={20} style={{ color: 'hsl(42,90%,58%)' }} />
        </div>
        <div>
          <p className="font-semibold mb-1.5" style={{ color: 'hsl(42,90%,58%)' }}>Старше 18 лет — по прейскуранту</p>
          <p className="text-sm leading-relaxed mb-2" style={{ color: 'hsl(var(--muted-foreground))' }}>
            Для лиц <strong style={{ color: 'hsl(var(--foreground))' }}>старше 18 лет</strong> стоимость занятий определяется индивидуально согласно действующему прейскуранту. Уточняйте актуальные цены у администрации центра.
          </p>
          <a
            href="https://lidernao.ru"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm inline-flex items-center gap-1 hover:underline"
            style={{ color: 'hsl(42,90%,58%)' }}
          >
            Прейскурант на сайте lidernao.ru
            <Icon name="ExternalLink" size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
