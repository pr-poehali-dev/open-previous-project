import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Спортивные', 'Единоборства', 'Физическая культура', 'Кванториум', 'Образовательные'];

const courses = [
  {
    id: 1,
    title: 'Футбол',
    category: 'Спортивные',
    desc: 'Командная игра, развитие скоростно-силовых качеств, тактическое мышление и работа в коллективе.',
    age: '6–18 лет',
    duration: 'Весь год',
    icon: 'Goal',
    color: 'hsl(140,60%,45%)',
    tag: 'Популярное',
  },
  {
    id: 2,
    title: 'Волейбол',
    category: 'Спортивные',
    desc: 'Командные тренировки, развитие координации, прыгучести и командного взаимодействия.',
    age: '8–18 лет',
    duration: 'Весь год',
    icon: 'CircleDot',
    color: 'hsl(35,90%,55%)',
    tag: null,
  },
  {
    id: 3,
    title: 'Пулевая стрельба',
    category: 'Спортивные',
    desc: 'Развитие концентрации, точности и выдержки. Тренировки на профессиональном оборудовании.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Target',
    color: 'hsl(200,80%,55%)',
    tag: 'Особое',
  },
  {
    id: 4,
    title: 'Настольный теннис',
    category: 'Спортивные',
    desc: 'Развитие реакции, координации и скорости. Участие в соревнованиях районного и городского уровня.',
    age: '6–18 лет',
    duration: 'Весь год',
    icon: 'Zap',
    color: 'hsl(42,90%,58%)',
    tag: null,
  },
  {
    id: 5,
    title: 'Лыжные гонки',
    category: 'Спортивные',
    desc: 'Зимний вид спорта, развивающий выносливость и силу. Участие в соревнованиях окружного уровня.',
    age: '7–18 лет',
    duration: 'Зима',
    icon: 'Mountain',
    color: 'hsl(200,70%,60%)',
    tag: null,
  },
  {
    id: 6,
    title: 'Тхэквандо',
    category: 'Единоборства',
    desc: 'Корейское боевое искусство. Воспитание дисциплины, гибкости, силы духа и самозащиты.',
    age: '5–18 лет',
    duration: 'Весь год',
    icon: 'Footprints',
    color: 'hsl(245,80%,65%)',
    tag: null,
  },
  {
    id: 7,
    title: 'Каратэ',
    category: 'Единоборства',
    desc: 'Японское боевое искусство. Развитие силы, скорости, координации и уверенности в себе.',
    age: '5–18 лет',
    duration: 'Весь год',
    icon: 'Shield',
    color: 'hsl(15,80%,55%)',
    tag: null,
  },
  {
    id: 8,
    title: 'Бокс',
    category: 'Единоборства',
    desc: 'Классический бокс: техника ударов, защита, ринг-мышление и спортивная дисциплина.',
    age: '8–18 лет',
    duration: 'Весь год',
    icon: 'Swords',
    color: 'hsl(0,75%,55%)',
    tag: null,
  },
  {
    id: 9,
    title: 'Борьба',
    category: 'Единоборства',
    desc: 'Развитие силы, выносливости и техники борьбы. Участие в соревнованиях различных уровней.',
    age: '7–18 лет',
    duration: 'Весь год',
    icon: 'Users',
    color: 'hsl(25,80%,50%)',
    tag: null,
  },
  {
    id: 10,
    title: 'Аэробика',
    category: 'Физическая культура',
    desc: 'Спортивная и оздоровительная аэробика. Развитие координации, гибкости и выносливости под музыку.',
    age: '6–18 лет',
    duration: 'Весь год',
    icon: 'HeartPulse',
    color: 'hsl(320,70%,60%)',
    tag: null,
  },
  {
    id: 11,
    title: 'Пауэрлифтинг',
    category: 'Физическая культура',
    desc: 'Силовой спорт: жим лёжа, приседания со штангой, становая тяга. Тренировки под руководством тренера.',
    age: '12–18 лет',
    duration: 'Весь год',
    icon: 'Dumbbell',
    color: 'hsl(30,85%,55%)',
    tag: null,
  },
  {
    id: 12,
    title: 'Бодибилдинг',
    category: 'Физическая культура',
    desc: 'Атлетическая гимнастика, развитие мышц и физических данных. Индивидуальный подход к тренировкам.',
    age: '14–18 лет',
    duration: 'Весь год',
    icon: 'Activity',
    color: 'hsl(280,60%,60%)',
    tag: null,
  },
  {
    id: 13,
    title: 'ИТ-квантум',
    category: 'Кванториум',
    desc: 'Программирование, разработка приложений и сайтов, алгоритмы и искусственный интеллект.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Code',
    color: 'hsl(180,60%,50%)',
    tag: 'Новое',
  },
  {
    id: 14,
    title: 'Робоквантум',
    category: 'Кванториум',
    desc: 'Проектирование и сборка роботов, программирование микроконтроллеров, участие в соревнованиях.',
    age: '8–18 лет',
    duration: 'Весь год',
    icon: 'Bot',
    color: 'hsl(160,55%,45%)',
    tag: null,
  },
  {
    id: 15,
    title: 'Аэроквантум',
    category: 'Кванториум',
    desc: 'Проектирование и пилотирование дронов, основы авиамоделирования и аэродинамики.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Plane',
    color: 'hsl(210,75%,55%)',
    tag: null,
  },
  {
    id: 16,
    title: 'VR/AR-квантум',
    category: 'Кванториум',
    desc: 'Создание виртуальной и дополненной реальности на Unity. 3D-моделирование, анимация, разработка игр и приложений.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Glasses',
    color: 'hsl(270,70%,60%)',
    tag: null,
  },
  {
    id: 17,
    title: 'Квантошахматы',
    category: 'Кванториум',
    desc: 'Шахматы как инструмент развития мышления, тактики и стратегии. Участие в соревнованиях, изучение партий мастеров.',
    age: '7–18 лет',
    duration: 'Весь год',
    icon: 'Crown',
    color: 'hsl(42,85%,52%)',
    tag: null,
  },
  {
    id: 18,
    title: 'ПромДизайнквантум',
    category: 'Кванториум',
    desc: 'Промышленный дизайн, прототипирование и 3D-моделирование изделий. Создание реальных продуктов от идеи до макета.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'PenTool',
    color: 'hsl(25,80%,55%)',
    tag: null,
  },
  {
    id: 19,
    title: 'Хайтек',
    category: 'Кванториум',
    desc: 'Высокие технологии: лазерная резка, 3D-печать, электроника и современное производство. Работа на профессиональном оборудовании.',
    age: '10–18 лет',
    duration: 'Весь год',
    icon: 'Cpu',
    color: 'hsl(155,60%,45%)',
    tag: null,
  },
  {
    id: 20,
    title: 'Эстрадно-вокальная студия «Лидер»',
    category: 'Образовательные',
    desc: 'Сольное и ансамблевое пение, развитие дыхания, артикуляции и звукообразования. Выступления на концертах и участие в конкурсах. Пение помогает при речевых нарушениях, снимает напряжение и раскрепощает.',
    age: 'Все возрасты',
    duration: 'Весь год',
    icon: 'Mic',
    color: 'hsl(180,55%,45%)',
    tag: null,
  },
  {
    id: 21,
    title: 'Хореографическая студия «Грация»',
    category: 'Образовательные',
    desc: 'Классический танец, партерная гимнастика, ритмика и танец-импровизация. Концертная деятельность. Педагог высшей категории со стажем 29 лет.',
    age: 'Дети',
    duration: 'Весь год',
    icon: 'Music',
    color: 'hsl(320,65%,58%)',
    tag: null,
  },
  {
    id: 22,
    title: '«Школа гармонии»',
    category: 'Образовательные',
    desc: 'Два направления: лепка из солёного теста — объёмные фигуры и панно, и живопись — карандаш, акварель, гуашь, пастель. Развивает моторику, воображение и эстетическое восприятие.',
    age: '4–7 лет',
    duration: 'Весь год',
    icon: 'Heart',
    color: 'hsl(340,70%,58%)',
    tag: null,
  },
  {
    id: 23,
    title: '«Юнармеец»',
    category: 'Образовательные',
    desc: 'Военно-патриотическое воспитание, краеведение, туризм, строевая и медицинская подготовка. Ориентирование, основы военного дела и поведение в экстремальных ситуациях.',
    age: 'Подростки',
    duration: 'Весь год',
    icon: 'Star',
    color: 'hsl(0,70%,50%)',
    tag: null,
  },
  {
    id: 24,
    title: 'Творческая мастерская «Лаборатория чудес»',
    category: 'Образовательные',
    desc: 'Наука и творчество: опыты с физическими явлениями, химией и материалами, бумагопластика, лепка, нетрадиционное рисование. Педагог — художник росписи по дереву со стажем 25 лет.',
    age: 'Младшие школьники',
    duration: 'Весь год',
    icon: 'Wand2',
    color: 'hsl(42,90%,55%)',
    tag: null,
  },
  {
    id: 25,
    title: 'Объединение «Фантазия»',
    category: 'Образовательные',
    desc: 'Комплексная программа: английский язык, рисование в разных техниках (пуантилизм, батик), лепка, квиллинг, плетение, тестопластика. Для дошкольников и младших школьников.',
    age: 'от 3 лет',
    duration: 'Весь год',
    icon: 'Sparkles',
    color: 'hsl(270,65%,60%)',
    tag: null,
  },
  {
    id: 26,
    title: 'Объединение «Модница»',
    category: 'Образовательные',
    desc: 'Вязание крючком: от базовых петель и игрушек «Амигуруми» до вязания по выкройке и одежды для кукол. 3 года обучения. Развивает моторику, усидчивость и творческие способности.',
    age: 'Дети',
    duration: 'Весь год',
    icon: 'Scissors',
    color: 'hsl(310,60%,58%)',
    tag: null,
  },
  {
    id: 27,
    title: '«Юнармейская доблесть»',
    category: 'Образовательные',
    desc: 'Военно-тактическая игра лазертаг, ОФП, строевая и медицинская подготовка, история ВС РФ, сборка автомата Калашникова, ориентирование и походы. Формирует лидерские качества.',
    age: 'Дети и подростки',
    duration: 'Весь год',
    icon: 'Shield',
    color: 'hsl(10,65%,50%)',
    tag: null,
  },
  {
    id: 28,
    title: 'Объединение «Юные инспекторы движения»',
    category: 'Образовательные',
    desc: 'Изучение правил дорожного движения в доступной форме, пропаганда безопасности на дорогах, участие в конкурсах ЮИД и работа с младшими школьниками.',
    age: '8–16 лет',
    duration: 'Весь год',
    icon: 'AlertTriangle',
    color: 'hsl(200,75%,50%)',
    tag: null,
  },
  {
    id: 29,
    title: 'Изобразительное искусство',
    category: 'Образовательные',
    desc: 'Разнообразная художественная деятельность: рисунок, живопись, декоративное рисование, нетрадиционные техники. Развитие творческих способностей и эстетического восприятия.',
    age: 'Дети',
    duration: 'Весь год',
    icon: 'Palette',
    color: 'hsl(25,80%,55%)',
    tag: null,
  },
  {
    id: 30,
    title: 'Английский язык',
    category: 'Образовательные',
    desc: 'Развитие коммуникативной компетенции: говорение, чтение, письмо и аудирование на английском языке. Программа совершенствует навыки и расширяет словарный запас.',
    age: 'Дети и подростки',
    duration: 'Весь год',
    icon: 'BookOpen',
    color: 'hsl(215,70%,55%)',
    tag: null,
  },
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [search, setSearch] = useState('');

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === 'Все' || c.category === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section id="courses" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[hsl(var(--neon))]/30 bg-[hsl(var(--neon))]/10 text-xs font-medium text-neon mb-6"
          >
            <Icon name="BookOpen" size={12} />
            Наши программы
          </div>
          <h2 className="font-cormorant text-5xl md:text-6xl font-semibold mb-4" style={{ color: 'hsl(var(--foreground))' }}>
            Занятия и{' '}
            <span
              className="italic"
              style={{
                background: 'linear-gradient(135deg, hsl(180,45%,60%), hsl(245,80%,65%))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              секции
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: 'hsl(var(--muted-foreground))' }}>
            32 программы для детей и молодёжи от 5 до 18 лет
          </p>
        </div>

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

        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border flex-1"
            style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
          >
            <Icon name="Search" size={16} style={{ color: 'hsl(var(--muted-foreground))' }} />
            <input
              type="text"
              placeholder="Поиск по занятиям..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))]"
              style={{ color: 'hsl(var(--foreground))' }}
            />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 border ${
                  activeCategory === cat
                    ? 'text-[hsl(var(--primary-foreground))]'
                    : 'text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))]'
                }`}
                style={
                  activeCategory === cat
                    ? { background: 'hsl(var(--primary))', borderColor: 'hsl(var(--primary))' }
                    : { background: 'transparent', borderColor: 'hsl(var(--border))' }
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: 'hsl(var(--muted-foreground))' }}>
            <Icon name="SearchX" size={40} className="mx-auto mb-4 opacity-40" />
            <p>Ничего не найдено</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <div
                key={course.id}
                className="group relative rounded-2xl border p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{ borderColor: 'hsl(var(--border))', background: 'hsl(var(--card))' }}
              >
                {course.tag && (
                  <div
                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: `${course.color}20`, color: course.color }}
                  >
                    {course.tag}
                  </div>
                )}

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${course.color}20` }}
                >
                  <Icon name={course.icon} fallback="BookOpen" size={22} style={{ color: course.color }} />
                </div>

                <h3 className="font-cormorant text-xl font-semibold mb-2" style={{ color: 'hsl(var(--foreground))' }}>
                  {course.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  {course.desc}
                </p>

                <div className="flex items-center gap-4 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Users" size={12} />
                    {course.age}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Calendar" size={12} />
                    {course.duration}
                  </div>
                </div>

                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${course.color}, transparent)` }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}