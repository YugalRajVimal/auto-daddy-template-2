"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const accordion = [
  {
    title: "Comprehensive Vehicle Diagnostics",
    desc: "The comprehensive inspection helps identify minor issues before they escalate into expensive repairs.",
  },
  {
    title: "Routine Maintenance and Oil Changes",
    desc: "Regular maintenance with clean oil and a new filter reduces friction, prevents sludge buildup, and extends the life of the engine.",
  },
  {
    title: "Belts and Hoses",
    desc: "All belts and hoses are inspected for any signs of wear or damage.",
  },
  {
    title: "Fluid Checks and Top-Offs",
    desc: "Checked for leaks and general condition of necessary fluids; chassis components may be lubricated if applicable to the vehicle type.",
  },
  {
    title: "Battery",
    desc: "Its condition and charging system are often tested.",
  },
];

export default function ServiceBenefit() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="grid lg:grid-cols-2 items-center">
      <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-gray-light flex items-center justify-center overflow-hidden">
        <img
          src="/images/gallery5.webp"
          alt="Mechanic at work"
          className="object-cover w-full h-full"
          style={{ maxHeight: "600px", borderRadius: "1rem" }}
          draggable={false}
        />
      </div>

      <div className="px-5 lg:px-16 py-16 lg:py-0">
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
          <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">W</span>
          hat we do
        </span>
        <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          Complete Auto Skills <br /> ...You can trust
        </h2>
        <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
          Speedy solutions that exceed expectations
        </p>

        <div className="mt-8 divide-y divide-black/10 border-t border-black/10">
          {accordion.map((item, i) => (
            <div key={item.title} className="py-5">
              <button
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="font-heading uppercase text-lg sm:text-xl font-bold">{item.title}</span>
                <span
                  className={`w-8 h-8 flex items-center justify-center shrink-0 ${
                    openIndex === i ? "bg-orange text-white" : "bg-gray-light text-dark"
                  }`}
                >
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-gray-600 text-sm leading-relaxed mt-4 max-w-lg">{item.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
