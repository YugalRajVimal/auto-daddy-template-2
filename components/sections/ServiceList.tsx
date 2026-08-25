import { Settings2, BatteryCharging, Disc, Droplets, Gauge, ArrowRight, CircleDashed } from "lucide-react";

const services = [
  {
    icon: CircleDashed,
    title: "DIAGNOSE",
    desc: "Dealing with car troubles can be stressful. A thorough, comprehensive diagnosis can simplify the process."
  },
  {
    icon: Settings2,
    title: "Engine or Transmission",
    desc: "The engine and transmission are designed to work together as a single system. Interplay is essential for longevity of both."
  },
  {
    icon: BatteryCharging,
    title: "Batteries",
    desc: 'Dead batteries are a top cause of breakdowns. A "crank but no start" condition may point to fuel or spark issues.'
  },
  {
    icon: Gauge,
    title: "Tires",
    desc: "Swapping the tires on existing rims can impact performance, safety, and aesthetics. Key considerations include proper fitment."
  },
  {
    icon: Droplets,
    title: "Oil and Filter",
    desc: "Engine oil lubricates the moving parts within the engine. Refilling with new, clean oil ensures proper lubrication and reduces engine wear."
  },
  {
    icon: Disc,
    title: "Brakes Repair",
    desc: "Squeaky brakes often signify worn pads, while uneven tire wear can indicate alignment or suspension issues."
  }
];

export default function ServiceList() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
          <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">S</span>
          ervices
        </span>
        <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          Our Preventive Standards
        </h2>
        <p className="mt-6 text-gray-600 max-w-xl mx-auto text-base sm:text-lg leading-relaxed">
          Out door - Indoor Car maintenance .........Services
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-gray-light rounded-2xl shadow-lg p-8 flex flex-col items-start justify-between h-full"
          >
            <div className="bg-orange w-14 h-14 flex items-center justify-center rounded mb-6">
              <s.icon className="text-white" size={28} />
            </div>
            <h3 className="font-heading uppercase text-xl sm:text-2xl font-bold leading-tight mb-3">
              {s.title}
            </h3>
            <p className="text-gray-600 text-base flex-1">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}