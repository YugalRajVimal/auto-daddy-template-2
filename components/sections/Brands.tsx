const brands = ["ISEKI", "Fe", "rico", "Futaba", "boxo", "Zenith", "Vortex"];

export default function Brands() {
  return (
    <div className="py-14 overflow-hidden border-b border-black/5">
      <div className="flex gap-20 animate-marquee whitespace-nowrap w-max">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="font-heading uppercase text-3xl sm:text-4xl font-bold text-gray-400/70 select-none"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
}
