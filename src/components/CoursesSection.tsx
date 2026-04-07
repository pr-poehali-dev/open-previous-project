import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { courses } from './courses/courses-data';
import CourseCard from './courses/CourseCard';
import CoursesPricing from './courses/CoursesPricing';
import CoursesFilter from './courses/CoursesFilter';

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

        <CoursesPricing />

        <CoursesFilter
          search={search}
          activeCategory={activeCategory}
          onSearchChange={setSearch}
          onCategoryChange={setActiveCategory}
        />

        {filtered.length === 0 ? (
          <div className="text-center py-20" style={{ color: 'hsl(var(--muted-foreground))' }}>
            <Icon name="SearchX" size={40} className="mx-auto mb-4 opacity-40" />
            <p>Ничего не найдено</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
