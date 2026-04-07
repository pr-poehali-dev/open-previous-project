import Icon from '@/components/ui/icon';

export default function FooterSection() {
  return (
    <footer className="border-t py-10 px-6" style={{ borderColor: 'hsl(var(--border))' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.poehali.dev/projects/2f270b74-1b79-47e9-b474-9f2982efeaab/bucket/3faadd79-00d9-4d23-bb30-df1aa3a3f376.svg"
            alt="ДЮЦ Лидер"
            className="h-16 w-auto"
          />
          <span className="font-cormorant text-lg font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
            ДЮЦ <span className="text-neon">ЛИДЕР</span>
          </span>
        </div>
        <p className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
          © 2025 ДЮЦ ЛИДЕР. Все права защищены.
        </p>
        <div className="flex items-center gap-5 text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
          <button className="hover:text-[hsl(var(--foreground))] transition-colors">Политика конфиденциальности</button>
          <button className="hover:text-[hsl(var(--foreground))] transition-colors">Условия использования</button>
        </div>
      </div>
    </footer>
  );
}