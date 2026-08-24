"use client";

import Link from "next/link";
import { useState } from "react";
import { Phone, Mail, MapPin, Search, Menu, X, Wrench } from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="relative w-full bg-dark noise-bg">
      <div className="hidden lg:flex items-center justify-between px-10 py-2 text-xs text-gray-300 border-b border-white/10">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <span className="text-yellow">$</span> No hidden charges
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2">
            <Phone size={14} className="text-orange" /> +880 1234 5678 90
          </span>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <Mail size={14} className="text-orange" /> info@fixton.com
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span className="flex items-center gap-2">
            <MapPin size={14} className="text-orange" /> Find us on map
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between px-5 lg:px-10 py-4">
        <Link href="/" className="flex items-center gap-2 bg-dark-2 skew-card px-4 py-2">
          <span className="bg-orange rounded-full p-2 flex items-center justify-center">
            <Wrench size={18} className="text-white" />
          </span>
          <span className="text-white font-heading text-xl tracking-wide">FIXTON</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-heading text-sm tracking-wide uppercase transition-colors px-4 py-2 skew-btn ${
                  active ? "bg-yellow text-dark" : "text-white hover:text-orange"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <button aria-label="search" className="text-white hover:text-orange transition-colors">
            <Search size={20} />
          </button>
          <Link
            href="/contact"
            className="bg-orange hover:bg-orange-2 transition-colors text-white font-heading text-sm uppercase tracking-wide px-6 py-3 flex items-center gap-2 skew-btn"
          >
            Get Quote <span className="text-lg leading-none">↗</span>
          </Link>
        </div>

        <button
          className="lg:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-dark-2 px-5 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`font-heading text-sm uppercase tracking-wide ${
                pathname === link.href ? "text-yellow" : "text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="bg-orange text-white font-heading text-sm uppercase tracking-wide px-6 py-3 flex items-center justify-center gap-2 skew-btn w-fit"
          >
            Get Quote ↗
          </Link>
        </div>
      )}
    </header>
  );
}
