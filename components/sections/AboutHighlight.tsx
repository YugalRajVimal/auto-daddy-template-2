import { ArrowUpRight, Wrench } from "lucide-react";

export default function AboutHighlight() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 items-center gap-14">
        <div className="relative w-full max-w-lg mx-auto lg:mx-0">
          <div className="absolute -top-4 -right-4 w-[92%] h-full bg-yellow rounded-2xl -z-10 hidden sm:block" />
          <div className="aspect-[4/5] bg-gray-light rounded-2xl flex items-center justify-center overflow-hidden">
            <img
              src="/images/worker.webp"
              alt="Mechanic at work"
              className="object-cover w-full h-full"
              draggable={false}
              style={{ borderRadius: "1rem" }}
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
            <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">S</span>
            ervice Benefit
          </span>
          <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
            Best Car Repair <br /> Company
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
            Because they are not vehicles they emotions fusce diseu suspendisse netus venenatis
            sem acid ridiculus sed neque aliquet morbi euismod sem quam senectus quam adipiscing
            dis viverra morbi sed faucibus suspendisse cursus odio senectus dolor sceen favorite
            interdum.
          </p>

          <div className="relative bg-gray-light rounded-xl px-8 py-8 mt-8 overflow-hidden">
            <Wrench size={80} className="absolute -right-2 -bottom-2 text-dark/5" />
            <p className="font-heading uppercase font-bold text-lg sm:text-xl leading-relaxed relative z-10">
              &ldquo; Maecenas ultrices tempor in sociis ipsum metus sollicitudin orci pellen &rdquo;
            </p>
          </div>

          <div className="flex items-center justify-between flex-wrap gap-6 mt-8">
            <div>
              <p className="font-heading uppercase font-bold text-lg">Davide Miller</p>
              <p className="text-gray-500 text-sm">Founder</p>
            </div>
            <button className="bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-8 py-4 flex items-center gap-2 skew-btn">
              Learn More <ArrowUpRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
