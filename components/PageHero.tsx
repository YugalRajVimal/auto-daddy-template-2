import Link from "next/link";

export default function PageHero({ title, crumb }: { title: string; crumb: string }) {
  return (
    <section className="relative bg-dark noise-bg h-[280px] sm:h-[340px] flex flex-col items-center justify-center text-center px-5 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-2 via-dark to-dark opacity-90" />
      <div className="relative z-10">
        <span className="inline-block bg-yellow text-dark font-heading uppercase text-xs sm:text-sm tracking-wide px-5 py-2 skew-btn mb-5">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          · {crumb}
        </span>
        <h1 className="text-white font-heading uppercase font-bold text-5xl sm:text-6xl">{title}</h1>
      </div>
    </section>
  );
}
