import { Play } from "lucide-react";

export default function VideoBanner() {
  return (
    <section className="relative bg-dark h-[380px] sm:h-[460px] flex items-center px-5 lg:px-16 overflow-hidden">
      {/* Add the video banner image */}
      <img
        src="/images/vdoBanner.webp"
        alt="Video Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/70 to-dark/40" />
      <div className="relative z-10 flex items-center gap-6 sm:gap-10 flex-wrap">
        <h2 className="text-white font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          We Driving Confidence In Community
        </h2>
        {/* <div className="w-px h-24 bg-white/30 hidden sm:block" />
        <button className="flex items-center gap-4 group">
          <span className="bg-yellow w-20 h-20 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-transform">
            <Play size={28} className="text-dark fill-dark ml-1" />
          </span>
          <span className="text-white font-heading uppercase tracking-wide">Intro Video...</span>
        </button> */}
      </div>
    </section>
  );
}
