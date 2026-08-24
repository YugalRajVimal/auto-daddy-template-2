import Image from "next/image";
import { Cog, Disc, Droplet, Settings2, Fan, Gauge, ArrowRight } from "lucide-react";

const services = [
  { icon: Cog, title: "Check Engine Light", image: "/images/service1.webp" },
  { icon: Disc, title: "Break Repair Service", image: "/images/service2.webp" },
  { icon: Droplet, title: "Oil Filtering Service", image: "/images/service3.webp" },
  { icon: Settings2, title: "Emission Repair", image: "/images/service4.webp" },
  { icon: Fan, title: "Motor Mount Repair", image: "/images/service1.webp" },
  { icon: Gauge, title: "Full Car Inspection", image: "/images/service2.webp" },
];

const cardClip = {
  clipPath:
    "polygon(24px 0, 100% 0, calc(100% - 24px) 100%, 0 100%)",
};

const btnClip = {
  clipPath:
    "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
};

export default function ServiceList() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28">
      <div className="grid sm:grid-cols-2 gap-8">
        {services.map((s) => (
          <div key={s.title} className="flex items-stretch overflow-hidden" style={cardClip}>
            <div className="w-2/5 bg-gray-light aspect-[4/5] flex items-center justify-center shrink-0">
              <Image
                src={s.image}
                alt={s.title}
                width={160}
                height={200}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="bg-gray-light flex-1 flex flex-col justify-center px-6 sm:px-8 py-8 -ml-6 relative z-10">
              <div className="bg-orange w-16 h-16 flex items-center justify-center mb-6" style={btnClip}>
                <s.icon className="text-white" size={28} />
              </div>
              <h3 className="font-heading uppercase text-xl sm:text-2xl font-bold leading-tight">
                {s.title}
              </h3>
              <button
                aria-label="learn more"
                className="mt-6 border border-dark/30 hover:bg-dark hover:text-white transition-colors w-11 h-11 flex items-center justify-center rounded"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}