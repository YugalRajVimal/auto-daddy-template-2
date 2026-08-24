"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Brandy Adams",
    role: "CEO of Ford",
    text: "Deep abundantly herb inner best land beside dominion void divide seas bed pen living moved man moved mise was forth herb o make an yielding bad behold created whose morning wons the dominion heaven nibhada arcu maecenas",
    image: "/images/user.webp",
  },
  {
    name: "James Miller",
    role: "COO of Volvo",
    text: "Great and thorough service every single time. The team explains every repair clearly and always delivers on schedule with quality workmanship that keeps our fleet running smoothly.",
    image: "/images/user.webp",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-gray-light px-5 lg:px-16 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 items-center gap-14">
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="absolute -top-4 -left-4 w-full h-full bg-orange rounded-2xl" />
          <div className="relative aspect-[4/5] bg-dark-2 rounded-2xl flex items-center justify-center overflow-hidden">
            <Image
              src={current.image}
              alt={current.name}
              width={240}
              height={300}
              className="object-cover w-36 h-36 rounded-full border-4 border-white/20 shadow-lg"
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-6">
            <span className="border border-orange rounded-full w-14 h-14 flex items-center justify-center text-orange">
              <Quote size={22} />
            </span>
            <div>
              <p className="font-heading uppercase font-bold text-lg">{current.name}</p>
              <p className="text-gray-500 text-sm">{current.role}</p>
            </div>
          </div>
          <p className="font-heading uppercase font-bold text-xl sm:text-2xl leading-relaxed">
            {current.text}
          </p>
          <div className="flex gap-3 mt-8">
            <button
              onClick={prev}
              aria-label="previous testimonial"
              className="bg-dark hover:bg-orange transition-colors w-11 h-11 flex items-center justify-center rounded"
            >
              <ArrowLeft size={18} className="text-white" />
            </button>
            <button
              onClick={next}
              aria-label="next testimonial"
              className="bg-dark hover:bg-orange transition-colors w-11 h-11 flex items-center justify-center rounded"
            >
              <ArrowRight size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
