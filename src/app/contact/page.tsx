import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBubbles from "@/components/HeroBubbles";
import ContactForm from "@/components/ContactForm";

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
        <div className="absolute inset-0 gradient-mesh bg-gradient-to-br from-ciel-50 via-frost/30 to-rose-50" />
        <HeroBubbles />
        <div className="absolute top-1/2 -translate-y-1/3 right-[6%] lg:right-[10%] w-[350px] h-[350px] bg-ciel-200/20 rounded-full blur-sm" />
        <Image
          src="/logojydanse.png"
          alt="Logo J'y Danse"
          width={180}
          height={258}
          className="hidden lg:block absolute top-1/2 -translate-y-1/3 right-[8%] lg:right-[12%] drop-shadow-lg opacity-25"
        />
        <Image
          src="/logojydanse.png"
          alt=""
          width={80}
          height={115}
          className="lg:hidden absolute bottom-4 right-4 opacity-20 drop-shadow-lg z-10"
        />

        <div className="relative h-full flex items-center mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-ciel-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ciel-500">
                Une question ?
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
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
                    <div className="rounded-[1.5rem] bg-gradient-to-br from-ciel-500/65 to-rose-400/65 backdrop-blur-sm border border-white/20 p-6 h-full transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-ciel-100/10">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white mb-4">
                        {c.icon}
                      </div>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-white/60 mb-2">
                        {c.label}
                      </h3>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="text-sm text-white/80 hover:text-white transition-colors whitespace-pre-line leading-relaxed"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white/80 whitespace-pre-line leading-relaxed">{c.value}</p>
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
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-br from-ciel-500/65 to-rose-400/65 backdrop-blur-sm border border-white/20 text-sm font-medium text-white/80 hover:text-white transition-all duration-300 mb-8"
                >
                  <FacebookIcon size={16} />
                  Suivez-nous sur Facebook
                </a>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="rounded-[1.5rem] overflow-hidden border border-frost/40 shadow-lg shadow-ciel-100/10 aspect-[4/3]">
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
                <h2 className="font-display text-2xl font-extrabold text-foreground mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-sm text-foreground/35 mb-8">
                  Nous vous répondrons dans les meilleurs délais.
                </p>
                <ContactForm />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
