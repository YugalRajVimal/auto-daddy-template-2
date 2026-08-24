import { Gauge, ScanLine, Headset, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Honest Service",
    desc: "Because they note vehicles emotions diseu suspendisse netus venenatis sem rilus neque aliquet morbie",
  },
  {
    icon: ScanLine,
    title: "Digital Report",
    desc: "Because they note vehicles emotions diseu suspendisse netus venenatis sem rilus neque aliquet morbie",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    desc: "Because they note vehicles emotions diseu suspendisse netus venenatis sem rilus neque aliquet morbie",
  },
];

export default function CoreFeatures() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">C</span>
        ore Feature
      </span>
      <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        Quality &amp; Trusted <br /> Repair Service
      </h2>

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-gray-light skew-card px-8 py-12 text-left hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="bg-orange w-16 h-16 flex items-center justify-center skew-btn mb-6">
              <f.icon className="text-white" size={28} />
            </div>
            <h3 className="font-heading uppercase text-xl font-bold mb-3">{f.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{f.desc}</p>
            <button
              aria-label="learn more"
              className="mt-6 border border-dark/30 hover:bg-dark hover:text-white transition-colors w-11 h-11 flex items-center justify-center rounded"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
