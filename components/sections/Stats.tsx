const stats = [
  { value: "20K", label: "Vehicle Repaired" },
  { value: "35K", label: "Happy Customer" },
  { value: "250", label: "Expert Mechanics" },
  { value: "25+", label: "Awards Winning" },
];

export default function Stats() {
  return (
    <section className="bg-orange noise-bg py-16 lg:py-20 px-5 lg:px-16">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-4">
            <span className="bg-yellow text-dark font-heading font-bold text-3xl sm:text-4xl px-6 py-3 skew-card">
              {s.value}
            </span>
            <span className="text-white font-heading uppercase text-sm tracking-wide">{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
