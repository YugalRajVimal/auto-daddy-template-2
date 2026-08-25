const stats = [
  { label: "Custom Services", value: 80 },
  { label: "High Quality Services", value: 70 },
  { label: "Valuable Cost", value: 90 },
  { label: "Support Quality", value: 50 },
];

export default function Stats() {
  return (
    <section className="bg-orange noise-bg py-16 lg:py-20 px-5 lg:px-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight text-dark">
          Skilled Technicians at Your Service
        </h2>
        <p className="text-gray-900 mt-6 leading-relaxed max-w-2xl mx-auto font-medium">
          It is a group of licensed professionals, who not only have top-notch technical skills but also excel in customer service. All of our technicians are part of safety standards.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-4">
            <div className="relative flex flex-col items-center">
              <span
                className="bg-yellow text-dark font-heading font-bold text-3xl sm:text-4xl px-7 py-5 min-w-[104px] flex items-center justify-center"
                style={{
                  transform: "skew(-20deg)",
                  display: "inline-block",
                  borderRadius: "20px",
                  boxShadow: "0 4px 18px 0 rgba(0,0,0,0.08)",
                }}
              >
                <span style={{ transform: "skew(20deg)" }}>
                  {s.value}
                  <span className="text-lg font-bold align-super text-dark ml-1">%</span>
                </span>
              </span>
            </div>
            <span className="text-white font-heading uppercase text-sm tracking-wide">{s.label}</span>
          </div>
        ))}
   
      </div>
    </section>
  );
}
