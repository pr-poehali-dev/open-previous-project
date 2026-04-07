import Icon from '@/components/ui/icon';
import { Course } from './courses-data';

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div
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
  );
}
