import { Cog, Disc, Droplet, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Cog,
    title: "Full-Service Auto Solutions",
    desc: (
      <>
        Our full-service solutions include:
        <ul className="list-disc text-left ml-4 mt-2 text-gray-400 text-sm leading-relaxed">
          <li>A comprehensive multi-point inspection</li>
          <li>Core oil and filter replacement</li>
          <li>Assessment of the vehicle&apos;s overall performance</li>
        </ul>
        <p className="mt-2">
          We proactively address issues before they escalate, helping you stay safe and avoid costly repairs down the line.
        </p>
      </>
    ),
  },
  {
    icon: Disc,
    title: "Professional Car Repairs",
    desc: (
      <>
        Our repair services guarantee:
        <ul className="list-disc text-left ml-4 mt-2 text-gray-400 text-sm leading-relaxed ">
          <li>High-quality parts replacement</li>
          <li>Skilled diagnostic and troubleshooting</li>
          <li>Reliable repair of key systems and components</li>
        </ul>
        <p className="mt-2">
          We focus on early detection and timely maintenance to save you money and keep your car running smoothly.
        </p>
      </>
    ),
  },
  {
    icon: Droplet,
    title: "Engine to Wheel Services",
    desc: (
      <>
        Our offerings cover everything from:
        <ul className="list-disc text-left ml-4 mt-2 text-gray-400 text-sm leading-relaxed">
          <li>Engine diagnostics and tune-ups</li>
          <li>Suspension, brakes, and tire care</li>
          <li>Fluid checks and precision alignments</li>
        </ul>
        <p className="mt-2">
          We deliver complete car care to ensure every part performs at its best, from the engine block to the very last bolt.
        </p>
      </>
    ),
  },
];

export default function Services() {
  return (
    <section className="bg-dark noise-bg py-20 lg:py-28 px-5 lg:px-16 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-yellow">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px] text-dark">O</span>
        ur Services
      </span>
      <h2 className="mt-4 text-white font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        We Do Right in every part tight
      </h2>
      <p className="text-gray-400 mt-6 mb-6 max-w-2xl mx-auto leading-relaxed">
        It is not a one-time achievement. It requires continuous effort to maintain and improve, often through innovation and adapting to changing market conditions. We take pride in getting the job done right the first time.
      </p>

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left justify-center">
        {services.map(
          (s, idx) =>
            s.title && (
              <div
                key={s.title + idx}
                className="bg-dark-2 border border-white/5 hover:border-orange/50 transition-colors px-8 py-10 flex flex-col items-center"
              >
                <div className="bg-orange w-16 h-16 flex items-center justify-center skew-btn mb-6">
                  <s.icon className="text-white" size={28} />
                </div>
                <h3 className="text-white font-heading uppercase text-xl font-bold mb-3 text-center">
                  {s.title}
                </h3>
                {s.desc && (
                  <div className="text-gray-400 text-sm text-left lea gap-3 ding-relaxed text-center">
                    {s.desc}
                  </div>
                )}
                <button
                  aria-label="learn more"
                  className="mt-6 bg-dark border border-white/10 hover:bg-orange transition-colors w-11 h-11 flex items-center justify-center rounded"
                >
                  <ArrowRight size={18} className="text-white" />
                </button>
              </div>
            )
        )}
      </div>
    </section>
  );
}
