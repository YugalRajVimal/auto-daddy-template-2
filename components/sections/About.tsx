import { Brain, Wrench, Zap, CloudDrizzle, Droplets } from "lucide-react";

const aiNotes = [
  {
    icon: Brain,
    title: "A.I. Revolutionizing Automotive Repairs",
    desc: (
      <>
        <p>“Everyone has eyes, but everyone has their own vision.”</p>
        <p>“Everyone has a mind, but only a few have a mission.”</p>
      </>
    ),
  },
];

const services = [
  {
    icon: Droplets,
    title: "Fuel System Repair",
    desc:
      "Safety-first fuel system fixes, using best practices to prevent fire hazard and ensure smooth performance.",
  },
  {
    icon: Zap,
    title: "Electrical Diagnostics",
    desc: (
      <>
        <div className="font-semibold">Thorough Inspections of:</div>
        <ul className="list-inside list-disc pl-3 mt-1 text-gray-600 grid gap-1">
          <li>Battery & Alternator</li>
          <li>Starter Motor</li>
          <li>Fuses & Relays</li>
          <li>Wiring & Grounds</li>
        </ul>
      </>
    ),
  },
  {
    icon: CloudDrizzle,
    title: "Exhaust System Repair",
    desc: (
      <>
        <div className="font-semibold">We check for:</div>
        <ul className="list-inside list-disc pl-3 mt-1 text-gray-600 grid gap-1">
          <li>Low performance</li>
          <li>Strange noises & vibrations</li>
          <li>High emissions</li>
          <li>Poor fuel efficiency</li>
        </ul>
      </>
    ),
  },
  {
    icon: Wrench,
    title: "Brake Repair & Replacement",
    desc:
      "Critical brake services for your safety—prompt repairs, precise part replacements, and trusted expertise.",
  },
];

export default function About() {
  // Split services for layout
  const mid = Math.ceil(services.length / 2);
  const col1 = services.slice(0, mid);
  const col2 = services.slice(mid);

  return (
    <section className="grid lg:grid-cols-2 items-center gap-12 bg-white py-16 lg:py-24">
      {/* Image Section */}
      <div className="relative flex items-center justify-center h-full rounded-3xl shadow-lg overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[560px] bg-gradient-to-br from-gray-100 via-gray-200 to-gray-50">
        <img
          src="/images/service1.webp"
          alt="Mechanic working"
          className="object-cover w-full h-full rounded-3xl"
          style={{ maxHeight: "560px" }}
          draggable={false}
        />
        <div className="absolute bottom-5 right-5 px-3 py-1 bg-orange text-white font-heading uppercase rounded shadow-lg text-xs tracking-wide">
          15+ Years Experience
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 md:px-10 py-10 md:py-0">
        {/* Title Section */}
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
          <span className="bg-yellow rounded-full w-6 h-6 flex items-center justify-center text-[12px] font-bold">A</span>
          bout Auto 27
        </span>
        <h2 className="mt-4 font-heading uppercase font-extrabold text-[2.4rem] sm:text-5xl leading-tight text-gray-900 drop-shadow">
          Reliable Automotive Repairs
        </h2>
        <p className="mt-3 text-orange font-heading uppercase text-lg font-semibold tracking-wide">
          Delivering Trust, Every Time
        </p>
        <p className="text-gray-600 mt-4 leading-relaxed max-w-xl">
          At Auto 27, we’re always ready for the unexpected. Our swift, expert response solves your car trouble fast so you gain safety and peace of mind—every time.
        </p>

        {/* AI Section */}
        <div className="mt-8 flex gap-4 flex-wrap items-center">
          {aiNotes.map(note => (
            <div
              key={note.title}
              className="flex items-start gap-4 bg-gray-50 p-4 rounded-xl shadow-inner border border-orange/10 max-w-md"
            >
              <div className="bg-orange w-14 h-14 flex items-center justify-center rounded-xl shadow-lg skew-btn">
                <note.icon className="text-white" size={28} />
              </div>
              <div>
                <h3 className="font-heading uppercase text-base font-bold mb-1 tracking-wide">{note.title}</h3>
                <div className="text-gray-700 text-sm font-medium">{note.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section: Two Columns */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7">
          {[col1, col2].map((col, i) => (
            <div key={i} className="flex flex-col gap-7">
              {col.map((service) => (
                <div
                  key={service.title}
                  className="flex gap-4 rounded-lg p-4 bg-gradient-to-br from-orange/5 to-yellow-50 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-orange w-12 h-12 flex items-center justify-center rounded-lg shadow-md skew-btn">
                    <service.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading uppercase text-base font-bold mb-1 tracking-wide">{service.title}</h3>
                    <div className="text-gray-700 text-sm max-w-xs">{service.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex items-center gap-6">
          <a
            href="tel:2497771313"
            className="bg-orange hover:bg-yellow transition-colors text-white font-heading uppercase tracking-widest px-8 py-4 rounded-xl shadow-lg text-sm flex items-center gap-3 skew-btn"
          >
            Emergency? Call 249&nbsp;777&nbsp;1313
          </a>
          <span className="text-gray-500 text-xs uppercase tracking-wide hidden md:inline">24/7 Roadside Assistance</span>
        </div>
      </div>
    </section>
  );
}
