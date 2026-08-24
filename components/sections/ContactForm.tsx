import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28">
      <div className="grid lg:grid-cols-2 items-center gap-14">
        <div className="relative w-full max-w-md mx-auto lg:mx-0">
          <div className="absolute -bottom-4 -right-4 w-[85%] h-[70%] bg-yellow rounded-2xl -z-10 hidden sm:block" />
          <div className="aspect-[3/4] bg-gray-light rounded-2xl flex items-center justify-center overflow-hidden">
            {/* Added mechanic image */}
            <Image
              src="/images/worker.webp"
              alt="Mechanic"
              width={320}
              height={427}
              className="object-cover w-full h-full rounded-2xl"
              priority
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
            <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">G</span>
            et In Touch
          </span>
          <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
            Contact With Us
          </h2>

          <form className="mt-10 grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name*"
              className="border border-black/15 rounded-md px-5 py-4 outline-none focus:border-orange transition-colors text-sm"
            />
            <input
              type="text"
              placeholder="Phone*"
              className="border border-black/15 rounded-md px-5 py-4 outline-none focus:border-orange transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Email*"
              className="border border-black/15 rounded-md px-5 py-4 outline-none focus:border-orange transition-colors text-sm"
            />
            <input
              type="text"
              placeholder="Subject*"
              className="border border-black/15 rounded-md px-5 py-4 outline-none focus:border-orange transition-colors text-sm"
            />
            <textarea
              placeholder="Message*"
              rows={5}
              className="sm:col-span-2 border border-black/15 rounded-md px-5 py-4 outline-none focus:border-orange transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="sm:col-span-2 w-fit bg-orange hover:bg-orange-2 transition-colors text-white font-heading uppercase tracking-wide px-8 py-4 flex items-center gap-2 skew-btn"
            >
              Send Message <ArrowUpRight size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
