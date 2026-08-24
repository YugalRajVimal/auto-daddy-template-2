import { MapPin, Mail, Phone } from "lucide-react";

const cards = [
  {
    icon: MapPin,
    title: "Location",
    lines: ["27 Division St, New York,", "NY 10002, USA"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["support@fixton.com", "help@fixton.com"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+880 1234 5678 90", "+880 1234 5678 90"],
  },
];

export default function ContactInfoCards() {
  return (
    <section className="px-5 lg:px-16 py-16 lg:py-24 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark mb-4">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">C</span>
        ontact Info
      </span>
      <h2 className="font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight mb-14">
        Clients Support
      </h2>

      <div className="grid sm:grid-cols-3 gap-8">
        {cards.map((c) => (
          <div key={c.title} className="bg-gray-light px-8 py-10 flex flex-col items-center">
            <div className="bg-orange w-16 h-16 flex items-center justify-center skew-btn mb-6">
              <c.icon className="text-white" size={28} />
            </div>
            <h3 className="font-heading uppercase text-xl font-bold mb-3">{c.title}</h3>
            {c.lines.map((l) => (
              <p key={l} className="text-gray-600 text-sm">
                {l}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
