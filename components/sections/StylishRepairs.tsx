import { Cog, Disc, Settings2, ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  { icon: Cog, title: "Check Engine", active: false },
  { icon: Disc, title: "Break Repair", active: false },
  { icon: Settings2, title: "Emission Repair", active: true },
];

export default function StylishRepairs() {
  return (
    <section className="bg-gray-light px-5 lg:px-16 py-20 lg:py-28 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">O</span>
        ur Services
      </span>
      <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        Stylish Repairs For <br /> Stylish Rides
      </h2>

      <div className="mt-16 grid sm:grid-cols-3 gap-8">
        {services.map((s) => (
          <div
            key={s.title}
            className={`bg-white px-8 py-12 text-left border ${
              s.active ? "border-orange" : "border-black/10"
            }`}
          >
            <div className="bg-orange w-16 h-16 flex items-center justify-center skew-btn mb-6">
              <s.icon className="text-white" size={28} />
            </div>
            <h3 className="font-heading uppercase text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Aliquet morbi euismod bed acide velen imperd ligula nase posuere
            </p>
            <button
              aria-label="learn more"
              className="mt-6 border border-dark/30 hover:bg-dark hover:text-white transition-colors w-11 h-11 flex items-center justify-center rounded"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>

      <p className="mt-14 font-heading uppercase tracking-wide text-dark">
        If you interested visit to our all service
      </p>
      <button className="mt-6 bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-8 py-4 inline-flex items-center gap-2 skew-btn">
        All Service <ArrowUpRight size={20} />
      </button>
    </section>
  );
}
