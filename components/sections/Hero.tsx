import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-dark noise-bg overflow-hidden min-h-[600px] sm:min-h-[750px] lg:min-h-[900px] flex items-center">
      {/* Decorative SVG BG (hidden on small screens for usability) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none hidden sm:flex items-center justify-end pr-6 md:pr-16 lg:pr-20">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" className="text-white md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <path
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      {/* Responsive flex layout: column on mobile, row on md+ */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4 sm:px-7 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-32 lg:pt-32 lg:pb-12 w-full">
        {/* Text Content */}
        <div className="animate-fade-up flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 md:max-w-xl">
          <h1 className="text-white font-heading uppercase font-bold leading-[0.97] text-4xl xs:text-5xl sm:text-6xl lg:text-7xl">
            Best Car <br /> Engineering <br /> Company
          </h1>
          <p className="text-gray-300 font-heading uppercase tracking-wide mt-6 text-base sm:text-lg">
            Because they are not vehicles they are a emotions
          </p>
          <button className="mt-8 sm:mt-10 bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 skew-btn text-base sm:text-lg">
            Learn More <ArrowUpRight size={20} />
          </button>
        </div>

        {/* Image (Card) Content */}
        <div className="relative flex justify-end w-full md:w-auto flex-1">
          <div className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl aspect-[16/10] rounded-2xl flex items-center justify-end skew-card min-h-[200px] xs:min-h-[250px] sm:min-h-[300px] md:min-h-[340px] lg:min-h-[420px] mx-0 ml-auto">
            <img
              src="/images/car.webp"
              alt="Car"
              className="w-full h-full object-contain object-right"
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
