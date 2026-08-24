import Image from "next/image";

const socials = [
  {
    label: "Facebook",
    path: "M22 12a10 10 0 10-11.6 9.87v-6.98H7.9V12h2.5V9.8c0-2.47 1.47-3.84 3.72-3.84 1.08 0 2.2.19 2.2.19v2.42h-1.24c-1.22 0-1.6.76-1.6 1.54V12h2.72l-.44 2.89h-2.28v6.98A10 10 0 0022 12z",
  },
  {
    label: "Instagram",
    path: "M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.21.6 1.76 1.15.5.5.9 1.1 1.15 1.76.25.64.42 1.37.47 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 01-1.15 1.76 4.9 4.9 0 01-1.76 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 01-1.76-1.15 4.9 4.9 0 01-1.15-1.76c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.21 1.15-1.76A4.9 4.9 0 015.44 2.53c.64-.25 1.37-.42 2.43-.47C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.87.04-1.34.18-1.65.3-.42.16-.71.36-1.02.67-.31.31-.5.6-.67 1.02-.12.31-.26.78-.3 1.65-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.87.18 1.34.3 1.65.16.42.36.71.67 1.02.31.31.6.5 1.02.67.31.12.78.26 1.65.3 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.87-.04 1.34-.18 1.65-.3.42-.16.71-.36 1.02-.67.31-.31.5-.6.67-1.02.12-.31.26-.78.3-1.65.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.87-.18-1.34-.3-1.65a2.76 2.76 0 00-.67-1.02 2.76 2.76 0 00-1.02-.67c-.31-.12-.78-.26-1.65-.3-1.05-.05-1.37-.06-4.04-.06zm0 3.5a4.7 4.7 0 110 9.4 4.7 4.7 0 010-9.4zm0 1.8a2.9 2.9 0 100 5.8 2.9 2.9 0 000-5.8zm5.88-2a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0z",
  },
  {
    label: "X",
    path: "M18.9 2H22l-7.6 8.68L23 22h-6.9l-5.4-6.9L4.6 22H1.5l8.1-9.27L1 2h7.1l4.9 6.3L18.9 2zm-1.2 18.1h1.7L7.4 3.8H5.6l12.1 16.3z",
  },
  {
    label: "LinkedIn",
    path: "M6.94 5a1.94 1.94 0 11-3.88 0 1.94 1.94 0 013.88 0zM3.3 8.5h3.5V21H3.3V8.5zM10 8.5h3.35v1.71h.05c.47-.88 1.6-1.8 3.3-1.8 3.53 0 4.18 2.32 4.18 5.35V21H17.4v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H10V8.5z",
  },
];

const team = [
  { name: "Rose A. Thomas", role: "Engine mechanic", bg: "bg-gray-light", image: "/images/1.webp" },
  { name: "Brandy Adams", role: "CEO of Ford", bg: "bg-gray-light", image: "/images/2.webp" },
  { name: "Davide Miller", role: "Founder", bg: "bg-yellow", image: "/images/3.webp" },
];

export default function Team() {
  return (
    <section className="px-5 lg:px-16 py-20 lg:py-28 text-center">
      <span className="inline-flex items-center gap-2 font-heading uppercase text-sm tracking-widest text-dark">
        <span className="bg-yellow rounded-full w-5 h-5 inline-flex items-center justify-center text-[10px]">E</span>
        xpert Team
      </span>
      <h2 className="mt-4 font-heading uppercase font-bold text-4xl sm:text-5xl leading-tight">
        Expert Mechanics <br /> Right Here
      </h2>

      <div className="mt-16 grid sm:grid-cols-3 gap-10">
        {team.map((member, i) => (
          <div key={member.name} className="text-left">
            <div className={`${member.bg} aspect-[4/5] flex items-center justify-center skew-card overflow-hidden`}>
              <Image
                src={member.image}
                alt={member.name}
                width={240}
                height={300}
                className="object-cover w-full h-full"
                draggable={false}
              />
            </div>
            <h3 className="font-heading uppercase text-xl font-bold mt-6">{member.name}</h3>
            <p className="text-gray-500 text-sm mt-1">{member.role}</p>
            <div className="flex gap-3 mt-4 pt-4 border-t border-black/10">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="text-gray-500 hover:text-orange transition-colors"
                >
                  <svg viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
