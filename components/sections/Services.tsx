import Image from "next/image";
import { Cog, Disc, Droplet, Settings2, ArrowRight } from "lucide-react";

const services = [
  { icon: Cog, title: "Check Engine" },
  { icon: Disc, title: "Break Repair" },
  { icon: Droplet, title: "Oil Filtering" },
  { icon: Settings2, title: "Emission Repair" },
];

export default function Services() {
  return (
    <section className="bg-dark noise-bg py-20 lg:py-28 px-5 lg:px-16 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-yellow">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px] text-dark">O</span>
        ur Services
      </span>
      <h2 className="mt-4 text-white font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        Stylish Repairs For <br /> Stylish Rides
      </h2>

      <div className="mt-16 grid lg:grid-cols-2 gap-6 text-left">
        <div className="aspect-[4/3] lg:aspect-auto bg-dark-2 flex items-center justify-center skew-card relative">
          <Image
            src="/images/worker.webp"
            alt="Mechanic at work"
            width={440}
            height={330}
            className="object-cover w-full h-full rounded"
            priority
          />
          {/* Added Gallery Image */}
          <div className="absolute bottom-4 right-4 w-32 h-24 rounded overflow-hidden shadow-lg border-4 border-white/20">
            <Image
              src="/images/gallery4.webp"
              alt="Workshop gallery"
              width={128}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-dark-2 border border-white/5 hover:border-orange/50 transition-colors px-8 py-10">
              <div className="bg-orange w-16 h-16 flex items-center justify-center skew-btn mb-6">
                <s.icon className="text-white" size={28} />
              </div>
              <h3 className="text-white font-heading uppercase text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aliquet morbi euismod bed acide velen imperd ligula nase posuere
              </p>
              <button
                aria-label="learn more"
                className="mt-6 bg-dark border border-white/10 hover:bg-orange transition-colors w-11 h-11 flex items-center justify-center rounded"
              >
                <ArrowRight size={18} className="text-white" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
