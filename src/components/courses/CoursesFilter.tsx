import Icon from '@/components/ui/icon';
import { categories } from './courses-data';

interface CoursesFilterProps {
  search: string;
  activeCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export default function CoursesFilter({ search, activeCategory, onSearchChange, onCategoryChange }: CoursesFilterProps) {
  return (
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
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 bg-transparent text-sm outline-none placeholder:text-[hsl(var(--muted-foreground))]"
          style={{ color: 'hsl(var(--foreground))' }}
        />
      </div>
      <div className="flex items-center gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
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
  );
}
