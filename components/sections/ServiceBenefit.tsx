"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const accordion = [
  {
    title: "Eco-Friendly Practices",
    desc: "We use environmentally responsible products and processes across every repair we perform.",
  },
  {
    title: "Quality Workmanship",
    desc: "Emphasize your commitment to providing best top-quality workmanship ensuring that all repairs are done to the highest standards to guarantee customer satisfaction and safety.",
  },
  {
    title: "Satisfaction Guarantee",
    desc: "Every repair is backed by our guarantee, so you can drive away with total peace of mind.",
  },
];

export default function ServiceBenefit() {
  const [openIndex, setOpenIndex] = useState(1);

  return (
    <section className="grid lg:grid-cols-2 items-center">
      <div className="aspect-[4/3] lg:aspect-auto lg:h-[600px] bg-gray-light flex items-center justify-center overflow-hidden">
        <img
          src="/images/worker.webp"
          alt="Mechanic at work"
          className="object-cover w-full h-full"
          style={{ maxHeight: "600px", borderRadius: "1rem" }}
          draggable={false}
        />
      </div>

      <div className="px-5 lg:px-16 py-16 lg:py-0">
        <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
          <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">S</span>
          ervice Benefit
        </span>
        <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
          Service Dedication <br /> Miles Of Trust
        </h2>
        <p className="text-gray-600 mt-6 leading-relaxed max-w-lg">
          Because they note vehicles emotions diseu suspendisse netus venenats sem rilus neque
          aliquet morbie green great over called
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
