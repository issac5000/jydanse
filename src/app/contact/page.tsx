import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

const contactInfo = [
  {
    icon: <MapPin size={18} />,
    label: "Salle des cours",
    value: 'Salle "Le Foyer"\nRue Hanoteau 23\n6060 Gilly',
  },
  {
    icon: <Phone size={18} />,
    label: "Téléphone",
    value: "071/41 29 66",
    href: "tel:+3271412966",
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    value: "info.jydanse@gmail.com",
    href: "mailto:info.jydanse@gmail.com",
  },
  {
    icon: <Clock size={18} />,
    label: "Horaires",
    value: "Mar · Mer · Jeu\nde 19h à 22h",
  },
];

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez le club J'y Danse à Gilly.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[380px] sm:h-[420px] overflow-hidden grain">
        <div className="absolute inset-0 gradient-mesh bg-gradient-to-br from-rose-50 via-white to-ciel-50" />
        <div className="absolute top-1/2 -translate-y-1/3 right-[6%] lg:right-[10%] w-[350px] h-[350px] bg-rose-200/20 rounded-full blur-sm" />
        <Image
          src="/logojydanse.png"
          alt="Logo J'y Danse"
          width={180}
          height={258}
          className="hidden lg:block absolute top-1/2 -translate-y-1/3 right-[8%] lg:right-[12%] drop-shadow-lg opacity-25"
        />

        <div className="relative h-full flex items-center mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-rose-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">
                Une question ?
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold italic text-foreground leading-[0.95]">
              Contactez-nous
            </h1>
            <p className="mt-6 text-lg text-foreground/40 font-light max-w-xl">
              Pour tous renseignements concernant les cours, entraînements ou activités.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left — info + map */}
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((c, i) => (
                  <AnimatedSection key={c.label} delay={i * 80}>
                    <div className="rounded-2xl glass p-6 h-full transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-rose-100/10">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-200/40 to-ciel-200/40 flex items-center justify-center text-rose-500 mb-4">
                        {c.icon}
                      </div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                        {c.label}
                      </h3>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm text-foreground/55 hover:text-rose-500 transition-colors whitespace-pre-line leading-relaxed"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-foreground/55 whitespace-pre-line leading-relaxed">{c.value}</p>
                      )}
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <AnimatedSection delay={350}>
                <a
                  href="https://www.facebook.com/asbljydanse/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass text-sm font-medium text-foreground/50 hover:text-rose-500 transition-all duration-300 mb-8"
                >
                  <FacebookIcon size={16} />
                  Suivez-nous sur Facebook
                </a>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="rounded-[1.5rem] overflow-hidden border border-white/40 shadow-lg shadow-rose-100/10 aspect-[4/3]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.5!2d4.4833!3d50.4167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2260c27e5c8fb%3A0x0!2sRue+Hanoteau+23%2C+6060+Gilly!5e0!3m2!1sfr!2sbe!4v1"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation J'y Danse"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right — form */}
            <AnimatedSection delay={200}>
              <div className="rounded-[2rem] glass p-8 sm:p-10 h-fit sticky top-28">
                <h2 className="font-display text-2xl font-semibold italic text-foreground mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-sm text-foreground/35 mb-8">
                  Nous vous répondrons dans les meilleurs délais.
                </p>
                <form className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                      placeholder="Sujet de votre message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all resize-none"
                      placeholder="Votre message…"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-shine group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500"
                  >
                    <Send size={14} />
                    Envoyer le message
                  </button>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
