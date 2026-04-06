import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = ['Все', 'Спортивные', 'Единоборства', 'Физическая культура', 'Кванториум'];

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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
    title: 'Кванториум',
    category: 'Кванториум',
    desc: 'Современные технологии, робототехника, программирование и инженерное мышление для детей.',
    age: '8–18 лет',
    duration: 'Весь год',
    icon: 'Cpu',
    color: 'hsl(180,60%,50%)',
    tag: 'Новое',
  },
  {
    id: 8,
    title: 'Борьба',
    category: 'Единоборства',
    desc: 'Развитие силы, выносливости и техники борьбы. Участие в соревнованиях различных уровней.',
    age: '7–18 лет',
    duration: 'Весь год',
    icon: 'Shield',
    color: 'hsl(15,80%,55%)',
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
            17 программ для детей и молодёжи от 5 до 18 лет
          </p>
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
