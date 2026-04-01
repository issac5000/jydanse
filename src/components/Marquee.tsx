export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden whitespace-nowrap py-5 border-y border-rose-100/40">
      <div className="animate-marquee inline-flex gap-8">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-8">
            <span className="text-base font-medium text-foreground/25 uppercase tracking-[0.2em]">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-300 to-ciel-300" />
          </span>
        ))}
      </div>
    </div>
  );
}
