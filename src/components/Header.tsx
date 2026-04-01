"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { href: "/cours", label: "Cours" },
  { href: "/horaires", label: "Horaires & Tarifs" },
  { href: "/equipe", label: "Équipe" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-2xl bg-white/80 ${
          scrolled
            ? "py-3 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "py-5"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group relative z-10">
              <Image
                src="/logojydanse.png"
                alt="Logo J'y Danse"
                width={32}
                height={46}
                className="transition-all duration-500"
              />
              <div className="hidden sm:flex flex-col">
                <span className="font-display text-[1.15rem] font-semibold tracking-tight text-foreground italic leading-tight">
                  J&apos;y Danse
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.25em] text-rose-400 leading-none mt-0.5">
                  depuis 1992
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-fancy px-4 py-2 text-sm font-medium text-foreground/65 hover:text-foreground transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/inscription"
                className="btn-shine ml-4 inline-flex items-center gap-1.5 px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-lg hover:shadow-rose-300/30 transition-all duration-500 hover:-translate-y-0.5"
              >
                S&apos;inscrire
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </nav>

            {/* Mobile toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-rose-50 transition-colors"
              aria-label="Menu"
            >
              {open ? (
                <X size={20} className="text-foreground" />
              ) : (
                <Menu size={20} className="text-foreground" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-50/98 via-white/98 to-ciel-50/98 backdrop-blur-2xl" />
        <nav className="relative flex flex-col items-center justify-center h-full gap-2 px-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="font-display text-5xl italic font-semibold text-foreground mb-10 reveal-up"
          >
            J&apos;y Danse
          </Link>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`text-xl font-light text-foreground/60 hover:text-rose-500 transition-all duration-300 py-2 reveal-up`}
              style={{ animationDelay: `${(i + 1) * 80}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/inscription"
            onClick={() => setOpen(false)}
            className="mt-8 btn-shine inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-ciel-400 rounded-full reveal-up delay-500"
          >
            S&apos;inscrire
            <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-20" />
    </>
  );
}
