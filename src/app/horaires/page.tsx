import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Horaires & Tarifs",
  description: "Horaires des cours et tarifs saison 2025-2026 du club J'y Danse à Gilly.",
};

const schedule = [
  {
    day: "Mardi",
    accent: "from-rose-400 to-rose-500",
    dotColor: "bg-rose-400",
    courses: [
      { time: "19h00 – 20h30", title: "Danses en ligne", prof: "Didier & Carine Paschal", level: "Tous niveaux" },
      { time: "20h30 – 21h30", title: "Rock 4T, Soul & WCS", prof: "Didier & Carine Paschal", level: "Tous niveaux" },
    ],
  },
  {
    day: "Mercredi",
    accent: "from-ciel-400 to-ciel-500",
    dotColor: "bg-ciel-400",
    courses: [
      { time: "19h00 – 20h00", title: "Danses de salon", prof: "Eric Dehant", level: "Débutant" },
      { time: "20h00 – 21h00", title: "Danses de salon", prof: "Eric Dehant", level: "Perf. 1" },
      { time: "21h00 – 22h00", title: "Danses de salon", prof: "Eric Dehant", level: "Perf. 2" },
    ],
  },
  {
    day: "Jeudi",
    accent: "from-rose-400 to-ciel-400",
    dotColor: "bg-gradient-to-r from-rose-400 to-ciel-400",
    courses: [
      { time: "19h00 – 20h00", title: "Latino solo", prof: "Ivan Hidalgo O'Farrill", level: "Tous niveaux" },
      { time: "20h00 – 21h00", title: "Salsa & Bachata", prof: "Ivan Hidalgo O'Farrill", level: "Débutant" },
      { time: "21h00 – 22h00", title: "Salsa & Bachata", prof: "Ivan Hidalgo O'Farrill", level: "Moyen" },
    ],
  },
];

const pricing = [
  { courses: "1 cours", price: "180", detail: "par an / personne", popular: false },
  { courses: "2 cours", price: "350", detail: "180 € + 170 €", popular: true },
  { courses: "3 cours", price: "510", detail: "180 € + 170 € + 160 €", popular: false },
];

const events = [
  { date: "2–4 sept. 2025", title: "Semaine portes ouvertes", desc: "Aux heures de cours — gratuit" },
  { date: "16 oct. 2025", title: "Entraînement Halloween", desc: "19h30 — Déguisement souhaité" },
  { date: "18 déc. 2025", title: "Entraînement Noël", desc: "19h30 — Ambiance festive" },
  { date: "12 fév. 2026", title: "Entraînement Carnaval", desc: "19h30 — Déguisement souhaité" },
];

export default function HorairesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-12 pb-20 sm:pb-28 overflow-hidden grain">
        <div className="absolute inset-0 gradient-mesh bg-gradient-to-br from-ciel-50 via-white to-rose-50" />
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-ciel-200/15 blob animate-float-slow" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-ciel-300" />
            <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-ciel-500">
              Saison 2025–2026
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold italic text-foreground leading-[0.95]">
            Horaires & tarifs
          </h1>
          <p className="mt-6 text-foreground/40 text-lg font-light max-w-xl">
            28 leçons par saison + entraînements gratuits. Assurance comprise.
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
              Planning hebdomadaire
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold italic text-foreground mb-12">
              3 soirées de cours
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {schedule.map((s, si) => (
              <AnimatedSection key={s.day} delay={si * 120}>
                <div className="rounded-[2rem] overflow-hidden border border-white/40 bg-white/30 backdrop-blur-sm h-full">
                  <div className={`bg-gradient-to-r ${s.accent} px-8 py-5`}>
                    <h3 className="text-lg font-bold text-white tracking-wide">{s.day}</h3>
                  </div>
                  <div className="p-6 space-y-1">
                    {s.courses.map((c, ci) => (
                      <div
                        key={ci}
                        className="group p-4 rounded-xl hover:bg-rose-50/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold tabular-nums text-rose-500">
                            {c.time}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-ciel-50 text-[0.65rem] font-semibold text-ciel-600">
                            {c.level}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground/70">{c.title}</p>
                        <p className="text-xs text-foreground/35 mt-0.5">{c.prof}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                Tarifs saison 2025–2026
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold italic text-foreground">
                Des prix accessibles
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <AnimatedSection key={p.courses} delay={i * 120}>
                <div
                  className={`relative rounded-[2rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 ${
                    p.popular
                      ? "bg-gradient-to-br from-rose-500 via-rose-400 to-ciel-400 text-white shadow-2xl shadow-rose-300/25 scale-[1.03]"
                      : "glass hover:shadow-xl hover:shadow-rose-100/15"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[0.65rem] font-bold text-rose-500 uppercase tracking-wider shadow-lg">
                      Populaire
                    </span>
                  )}
                  <p className={`text-sm font-medium mb-4 ${p.popular ? "text-white/70" : "text-foreground/40"}`}>
                    {p.courses}
                  </p>
                  <div className={`font-display text-5xl font-bold italic mb-2 ${p.popular ? "text-white" : "text-foreground"}`}>
                    {p.price}<span className="text-2xl">€</span>
                  </div>
                  <p className={`text-xs mb-6 ${p.popular ? "text-white/55" : "text-foreground/30"}`}>
                    {p.detail}
                  </p>
                  <Link
                    href="/inscription"
                    className={`inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      p.popular
                        ? "bg-white text-rose-500 hover:shadow-lg"
                        : "bg-gradient-to-r from-rose-500 to-ciel-400 text-white hover:shadow-lg hover:shadow-rose-300/20"
                    }`}
                  >
                    S&apos;inscrire
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-10 rounded-2xl glass p-6 max-w-2xl mx-auto text-sm text-foreground/40 space-y-2">
              <p><strong className="text-foreground/60">Enfants -15 ans :</strong> 6 € (assurance seule) si parents inscrits, sinon 95 €.</p>
              <p>Les cours non suivis ne sont ni déduits, ni remboursés.</p>
              <p><strong className="text-foreground/60">Compte bancaire :</strong> BE50 125-0107500-18</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-frost/30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-12">
              <Calendar size={20} className="text-ciel-500" />
              <h2 className="font-display text-3xl font-semibold italic text-foreground">
                Événements saison 2025–2026
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {events.map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 100}>
                <div className="rounded-[1.5rem] glass p-7 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/15">
                  <span className="inline-flex px-3 py-1 rounded-full bg-gradient-to-r from-rose-100 to-ciel-100 text-[0.65rem] font-bold text-rose-500 uppercase tracking-wider mb-4">
                    {e.date}
                  </span>
                  <h3 className="font-display text-lg font-semibold italic text-foreground mb-1">{e.title}</h3>
                  <p className="text-xs text-foreground/35">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400" />
        <div className="absolute inset-0 grain" />
        <div className="relative text-center mx-auto max-w-2xl px-5">
          <AnimatedSection>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold italic text-white mb-4">
              Prêt à vous lancer ?
            </h2>
            <p className="text-white/60 mb-8">28 leçons, entraînements gratuits, assurance comprise.</p>
            <Link
              href="/inscription"
              className="inline-flex items-center gap-2 px-9 py-4 text-sm font-semibold text-rose-500 bg-white rounded-full hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5"
            >
              S&apos;inscrire maintenant
              <ArrowUpRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
