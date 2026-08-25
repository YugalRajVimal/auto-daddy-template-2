import { MapPin, Mail, Phone, Clock } from "lucide-react";

const contacts = [
  {
    icon: MapPin,
    title: "Workshop Location",
    lines: [
      "255 Rutherford Road South",
      "Unit : 109, Brampton, ON, L6w 4N7",
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["249 777 1313"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["autotwenty7@gmail.com"],
  },
  {
    icon: Clock,
    title: "Open Hours",
    lines: [
      "Mon – Sat : 8 am – 6 pm",
      "Sunday : CLOSED",
    ],
  }
];

export default function ContactInfoCards() {
  return (
    <section className="px-5 lg:px-16 py-16 lg:py-24 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark mb-4">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">C</span>
        ontact
      </span>
      <h2 className="font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight mb-3">
        We're Here to Help
      </h2>
      <p className="mb-12 text-gray-700 text-lg font-medium">
        AFFORDABLE AND SIMPLIFYING COST...AUTO 27 IS A TIERED PRICING CAR REPAIR SHOP <br />
        We are located for your convenience
      </p>

      <div className="grid sm:grid-cols-4 gap-8 mb-10">
        {contacts.map((item) => (
          <div
            key={item.title}
            className="bg-gray-light px-6 py-8 flex flex-col items-center rounded-2xl"
          >
            <div className="bg-orange w-14 h-14 flex items-center justify-center skew-btn mb-4 rounded-lg">
              <item.icon className="text-white" size={26} />
            </div>
            <h3 className="font-heading uppercase text-lg font-bold mb-2">{item.title}</h3>
            {item.lines.map((line) => (
              <p key={line} className="text-gray-600 text-sm leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        ))}
      </div>
    
    </section>
  );
}
