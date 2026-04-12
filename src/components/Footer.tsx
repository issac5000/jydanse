import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const footerLinks = [
  { href: "/cours", label: "Nos cours" },
  { href: "/horaires", label: "Horaires & Tarifs" },
  { href: "/equipe", label: "L'équipe" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
  { href: "/inscription", label: "Inscription" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Organic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-ciel-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* CTA band */}
        <div className="py-16 sm:py-20 border-b border-white/10">
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                Prêt à danser ?
              </p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
                Rejoignez le club
              </h2>
            </div>
            <Link
              href="/inscription"
              className="btn-shine group inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5 shrink-0"
            >
              S&apos;inscrire
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 group mb-5">
              <img
                src="/logojydanse.png"
                alt="Logo J'y Danse"
                width={40}
                height={57}
                className="shrink-0"
              />
              <span className="font-display text-lg font-extrabold text-white">
                J&apos;y Danse
              </span>
            </Link>
            <p className="text-base text-white/40 leading-relaxed max-w-xs">
              Club de danse sportive affilié à la Ligue de la Danse. Une passion partagée depuis 1992.
            </p>
            <a
              href="https://www.facebook.com/asbljydanse/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-base font-medium text-rose-500 hover:text-rose-600 transition-colors"
            >
              <FacebookIcon size={16} />
              <span>Facebook</span>
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-white/50 hover:text-rose-400 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-base text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="mt-0.5 text-rose-400 shrink-0" />
                <span className="leading-relaxed">
                  Salle &quot;Le Foyer&quot;<br />
                  Rue Hanoteau 23<br />
                  6060 Gilly
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-rose-400 shrink-0" />
                <a href="tel:+3271412966" className="hover:text-rose-400 transition-colors">
                  071/41 29 66
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-rose-400 shrink-0" />
                <a href="mailto:info.jydanse@gmail.com" className="hover:text-rose-400 transition-colors">
                  info.jydanse@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Cours */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-white/30 mb-5">
              Nos cours
            </h3>
            <div className="space-y-3">
              {[
                { day: "Mardi", type: "Line dance & Rock" },
                { day: "Mercredi", type: "Danses de salon" },
                { day: "Jeudi", type: "Latino & Salsa" },
              ].map((c) => (
                <div key={c.day} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-rose-400 to-ciel-400 shrink-0" />
                  <span className="text-base text-white/50">
                    <span className="font-medium text-white/65">{c.day}</span>
                    {" — "}
                    {c.type}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/25">
            &copy; {new Date().getFullYear()} J&apos;y Danse ASBL — Tous droits réservés
          </p>
          <p className="text-sm text-white/20">
            Siège social : Rue des Trieux 71, 6060 Gilly — BCE 0448.577.884
          </p>
        </div>
      </div>
    </footer>
  );
}
