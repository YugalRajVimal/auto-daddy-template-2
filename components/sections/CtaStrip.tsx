import { ArrowUpRight, Cog } from "lucide-react";

export default function CtaStrip() {
  return (
    <section className="bg-orange noise-bg px-5 lg:px-16 py-10 sm:py-14">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
          <h2 className="text-white font-heading uppercase font-bold text-3xl sm:text-4xl">
            Get Auto Service
          </h2>
          <p className="text-white/80 font-heading uppercase tracking-wide mt-2">
            Fixing Cars, Finding Solutions
          </p>
        </div>

        <div className="flex items-center gap-6">
          <Cog size={48} className="text-white/20 hidden sm:block" />
          <Cog size={64} className="text-white/20 hidden sm:block -ml-8" />
          <div className="text-center sm:text-right">
            <span className="inline-flex items-center gap-2 bg-dark text-white font-heading uppercase text-sm tracking-wide px-6 py-3 skew-btn">
              Get Estimate <ArrowUpRight size={16} />
            </span>
            <p className="text-white font-heading text-xl mt-3">+02 (520) 3658</p>
          </div>
        </div>
      </div>
    </section>
  );
}
