import { Check, ArrowUpRight } from "lucide-react";

const list = ["On A Mission To Fix", "Driving Quality Repairs Home", "Engineered To Perfection"];

export default function Reliable() {
  return (
    <section className="grid lg:grid-cols-2 items-center">
      <div className="px-5 lg:px-16 py-16 lg:py-24 order-2 lg:order-1">
        <h2 className="font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          Reliable <br /> Remarkable <br /> Results
        </h2>
        <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
          Because they note vehicles emotions diseu suspendisse netus venenats sem rilus neque
          aliquet morbie green great over called
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {list.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="bg-orange rounded-full p-1">
                <Check size={14} className="text-white" />
              </span>
              <span className="font-heading uppercase text-sm tracking-wide">{item}</span>
            </div>
          ))}
        </div>

        <button className="mt-10 bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-8 py-4 flex items-center gap-2 skew-btn">
          About More <ArrowUpRight size={20} />
        </button>
      </div>

      <div className="aspect-[4/3] lg:aspect-auto lg:h-[560px] bg-gray-light flex items-center justify-center order-1 lg:order-2">
        <img
          src="/images/service2.webp"
          alt="Mechanic at work"
          className="object-cover w-full h-full"
          style={{ maxHeight: "560px" }}
          draggable={false}
        />
      </div>
    </section>
  );
}
