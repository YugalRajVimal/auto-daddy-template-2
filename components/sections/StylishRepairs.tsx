import { ClipboardList, FileText, Wrench, ShieldCheck, ArrowRight, ArrowUpRight } from "lucide-react";

const keyAreas = [
  {
    icon: ClipboardList,
    title: "Customer & Vehicle Data",
    desc: "Transparency of vehicle and customer information enhances collaboration, ensuring accurate service and clear communication at every step."
  },
  {
    icon: FileText,
    title: "Repair Documentation",
    desc: "Complete and accessible records of repairs improve trust, enable warranty validation, and clarify work performed for both technicians and customers."
  },
  {
    icon: Wrench,
    title: "Diagnostic & Repair Information",
    desc: "Comprehensive diagnostics and repair details are shared to foster understanding, support informed decisions, and maintain transparency."
  },
  {
    icon: ShieldCheck,
    title: "Shop Operations & Safety",
    desc: "Safe shop procedures and operational standards are vital for both customer confidence and workshop efficiency."
  }
];

const technicalServices = [
  "Brake Inspection and Replacement",
  "A/C System Service and Repair",
  "Tire Service and Replacement Solutions",
  "Routine Vehicle Maintenance",
  "Certified Emission Repair Center",
  "Performance Tune-Up Services",
  "Commercial Electrical Solutions",
  "Complete Brake Service and Adjustment",
  "Radiator Flush and Engine Cooling Repairs",
  "Suspension and Steering System Maintenance"
];

export default function TechnicalSpecification() {
  return (
    <section className="bg-gray-light px-5 lg:px-16 py-20 lg:py-28 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">T</span>
        echnical Specification
      </span>
      <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        For Smooth Compliance of Technical Specification,<br />
        Transparency is Essential
      </h2>
      <p className="mt-6 text-gray-700 max-w-2xl mx-auto text-lg font-semibold">
        For smooth compliance of technical specification, transparency between technicians and customers is essential.
      </p>

      <div className="mt-16 grid md:grid-cols-2 gap-10 text-left max-w-4xl mx-auto">
        {keyAreas.map((area) => (
          <div key={area.title} className="bg-white px-8 py-10 border border-black/10 rounded-2xl h-full flex flex-col">
            <div className="bg-orange w-14 h-14 flex items-center justify-center rounded mb-5">
              <area.icon className="text-white" size={28} />
            </div>
            <h3 className="font-heading uppercase text-lg font-bold mb-2">{area.title}</h3>
            <p className="text-gray-600 text-base leading-relaxed flex-1">{area.desc}</p>
          </div>
        ))}
      </div>

      <h3 className="mt-16 font-heading uppercase text-2xl font-bold text-dark mb-4">
        Key Technical Areas Based On:
      </h3>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-3 max-w-3xl mx-auto text-left text-base text-gray-700 leading-7">
        {technicalServices.map(service => (
          <li key={service} className="relative pl-5">
            <span className="absolute left-0 top-1 text-orange">&#8226;</span>
            {service}
          </li>
        ))}
      </ul>

      <p className="mt-14 font-heading uppercase tracking-wide text-dark">
        Explore our comprehensive technical solutions and ensure your vehicle’s optimum performance.
      </p>
      <button className="mt-6 bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-8 py-4 inline-flex items-center gap-2 skew-btn">
        All Technical Services <ArrowUpRight size={20} />
      </button>
    </section>
  );
}
