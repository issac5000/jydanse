export default function Marquee({ items }: { items: string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-ciel-500/65 via-ciel-400/65 to-rose-400/65">
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-ciel-500 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-rose-400 to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee inline-flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-10 mx-5">
            <span className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase tracking-[0.15em]">
              {item}
            </span>
            <span className="text-white/40 text-2xl select-none">&bull;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
