import { Truck, Settings } from "lucide-react";

const points = [
  {
    icon: Truck,
    title: "Expert Mechanic",
    desc: "Because they note vehicles emotions diseu suspen netus benenats sem rilus neque.",
  },
  {
    icon: Settings,
    title: "On Time Delivery",
    desc: "Because they note vehicles emotions diseu suspen netus benenats sem rilus neque.",
  },
];

export default function About() {
  return (
    <section className="grid lg:grid-cols-2 items-center">
      <div className="aspect-[4/3] lg:aspect-auto lg:h-[560px] bg-gray-light flex items-center justify-center">
        {/* Added the mechanic image as instructed */}
        <img
          src="/images/service1.webp"
          alt="Mechanic working"
          className="object-cover w-full h-full"
          style={{ maxHeight: "560px" }}
          draggable={false}
        />
      </div>

      <div className="px-5 lg:px-16 py-16 lg:py-0">
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
          <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">A</span>
          bout Fixton
        </span>
        <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          Master Mechanics <br /> At Your Service
        </h2>
        <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
          Because they note vehicles emotions diseu suspendisse netus venenats sem rilus neque
          aliquet morbie green great over called
        </p>

        <div className="mt-10 flex flex-col gap-8">
          {points.map((p) => (
            <div key={p.title} className="flex gap-5">
              <div className="bg-orange w-16 h-16 shrink-0 flex items-center justify-center skew-btn">
                <p.icon className="text-white" size={26} />
              </div>
              <div>
                <h3 className="font-heading uppercase text-lg font-bold mb-1">{p.title}</h3>
                <p className="text-gray-600 text-sm max-w-md">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
