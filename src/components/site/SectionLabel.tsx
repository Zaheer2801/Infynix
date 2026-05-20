export function SectionLabel({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="h-px w-8 bg-primary" />
      <span className={`text-xs font-semibold tracking-[0.18em] uppercase text-primary`}>
        {children}
      </span>
    </div>
  );
}