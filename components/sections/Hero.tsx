"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const slides = [
  {
    title: "Exclusive Car Repair Services",
    subTitle: "Professional Approach",
    description: (
      <>
        * That answers to your Emergent and Needful enquiries <br />
        * That Included Replacing worries with Solutions
      </>
    ),
    button: {
      text: "Learn More",
    },
  },
  {
    title: "Expert Automotive Solutions",
    subTitle: "A Legacy of trusted Automotive  Solutions",
    description: (
      <>
        From Rust to Replacements ... Auto 27 is your local expert in regular car maintenance
      </>
    ),
    button: {
      text: "Learn More",
    },
  },
];

// Helper for basic fade animation state manager
function useAnimatedSwitch(value: any, duration: number = 400) {
  const [displayed, setDisplayed] = useState(value);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    setFade(false); // start fade-out
    const timeout1 = setTimeout(() => {
      setDisplayed(value); // swap content at half fade duration
      setFade(true);      // start fade-in
    }, duration / 2);

    return () => clearTimeout(timeout1);
  }, [value, duration]);

  return [displayed, fade] as const;
}

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3400);
    return () => clearInterval(interval);
  }, []);

  // Animated hooks for swapping text content
  const [animatedIndex, fadeIn] = useAnimatedSwitch(current, 500);

  const { title, subTitle, description, button } = slides[animatedIndex];

  return (
    <section className="relative bg-dark noise-bg overflow-hidden min-h-[600px] sm:min-h-[750px] lg:min-h-[900px] flex items-center">
      {/* Decorative SVG BG */}
      <div className="absolute inset-0 opacity-10 pointer-events-none select-none hidden sm:flex items-center justify-end pr-6 md:pr-16 lg:pr-20">
        <svg width="300" height="300" viewBox="0 0 24 24" fill="none" className="text-white md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
          <path
            d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </svg>
      </div>

      {/* Main Flex Layout */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 px-4 sm:px-7 lg:px-16 pt-16 sm:pt-24 pb-16 sm:pb-32 lg:pt-32 lg:pb-12 w-full">
        {/* Animated Text Content */}
        <div
          className={`flex flex-col items-center md:items-start text-center md:text-left flex-shrink-0 md:max-w-xl transition-all duration-500 ${
            fadeIn ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h1 className="text-white font-heading uppercase font-bold leading-[0.97] text-3xl xs:text-4xl sm:text-5xl lg:text-6xl mb-3 transition-opacity duration-500">
            {title}
          </h1>
          {animatedIndex === 0 ? (
            <h3 className="text-yellow font-heading font-semibold uppercase tracking-wide text-lg sm:text-xl my-1 transition-opacity duration-500">
              {subTitle}
            </h3>
          ) : (
            <h4 className="text-yellow font-heading font-semibold uppercase tracking-wide text-lg sm:text-xl my-1 transition-opacity duration-500">
              {subTitle}
            </h4>
          )}
          <p className="text-gray-300 font-heading tracking-wide mt-3 text-base sm:text-lg whitespace-pre-line transition-opacity duration-500">
            {description}
          </p>
          <button className="mt-8 sm:mt-10 bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-6 sm:px-8 py-3 sm:py-4 flex items-center gap-2 skew-btn text-base sm:text-lg transition-opacity duration-500">
            {button.text} <ArrowUpRight size={20} />
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
