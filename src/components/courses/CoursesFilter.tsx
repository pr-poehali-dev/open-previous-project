import { categories } from './courses-data';

interface CoursesFilterProps {
  activeCategory: string;
  onCategoryChange: (value: string) => void;
}

export default function CoursesFilter({ activeCategory, onCategoryChange }: CoursesFilterProps) {
  return (
    <div className="flex items-center gap-2 flex-wrap mb-10">
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
  );
}
