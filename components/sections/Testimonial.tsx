"use client";

import Image from "next/image";
import { useState } from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "John Doe",
    role: "Sony CEO",
    image: "https://auto27.ca/wp-content/uploads/2024/10/testimonial-1.jpg",
    rating: 4.5,
    text: "Solved the never ending problem of chamber leaking oil in no time. Highly recommended. Ripudaman is very honest and skilled. He explained every thing before start of job.",
  },
  {
    name: "Tom Jones",
    role: "Tesla CMO",
    image: "https://auto27.ca/wp-content/uploads/2024/10/testimonial-4.jpg",
    rating: 5,
    text: "This guy is very skilled and expertise in car repairing profession. My car repairing is up and running the same day. Cost friendly bill payment.",
  },
  {
    name: "Mark Wilson",
    role: "Apple Manager",
    image: "https://auto27.ca/wp-content/uploads/2024/10/testimonial-2.jpg",
    rating: 4,
    text: "At auto 27, their comprehensive inspection helps identify every car issues before they escalate into expensive repairs. It making maintenance easier to fit into a busy schedule.",
  },
  {
    name: "Bob Smith",
    role: "Doctor",
    image: "https://auto27.ca/wp-content/uploads/2024/10/testimonial-3.jpg",
    rating: 3.5,
    text: "Had a leaky oil from my car transmission continuously, Auto 27 technician skill was outstanding to fix it. They left no mess behind. If you need a trustworthy repair servive for your car in Toronto, look no further.",
  },
  {
    name: "Natasha Miles",
    role: "Doctor",
    image: "https://auto27.ca/wp-content/uploads/2024/10/testimonial-5.jpg",
    rating: 3.5,
    text: "Outstanding repair of car services.I am fully satisfied with their work and work culture. The use of A.I. in storage of data and find the way of apple of discord has appreciable. Strongly recommended.",
  },
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section className="bg-gray-light px-5 lg:px-16 py-20 lg:py-28">
      <div className="grid lg:grid-cols-1 items-center gap-14 lg:mx-60">
        {/* <div className="relative w-full max-w-md mx-auto lg:mx-0">
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
        </div> */}

        <div className="">
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
