import { ArrowUpRight } from "lucide-react";

export default function Offer() {
  return (
    <section className="bg-dark noise-bg px-5 lg:px-16 py-16 lg:py-20">
      <div className="grid lg:grid-cols-2 items-center gap-10">
        <div className="flex items-start gap-6 sm:gap-10">
          <div className="text-left shrink-0">
            <p className="text-yellow font-heading font-bold text-5xl sm:text-6xl leading-none">30%</p>
            <p className="text-yellow font-heading font-bold text-5xl sm:text-6xl leading-none">OFF</p>
          </div>
          <div className="w-px bg-white/20 self-stretch hidden sm:block" />
          <div>
            <h2 className="text-white font-heading uppercase font-bold text-3xl sm:text-4xl leading-tight">
              Exclusive Offers <br /> For This Week
            </h2>
            <button className="mt-8 bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-8 py-4 flex items-center gap-2 skew-btn">
              Get Discount <ArrowUpRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -top-4 left-0 lg:left-10 z-10 bg-orange text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-center font-heading">
            <span className="font-bold text-2xl leading-none">25K</span>
            <span className="text-[10px] uppercase tracking-wide mt-1">Satisfied<br />Clients</span>
          </div>
          <div className="w-full aspect-[16/9] bg-gradient-to-br from-yellow via-orange to-orange-2 rounded-2xl flex items-center justify-center">
            <span className="text-dark/40 font-heading text-xl uppercase tracking-widest">[ Car Image ]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
