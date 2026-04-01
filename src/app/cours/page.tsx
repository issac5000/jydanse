import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, CheckCircle2, Music, Zap, Star, Users } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Nos cours",
  description:
    "Cours de danses de salon, latino, line dance, rock & swing à Gilly. Tous niveaux, ambiance conviviale.",
};

const courses = [
  {
    id: "salon",
    icon: <Star size={22} />,
    number: "01",
    title: "Danses de salon",
    subtitle: "Standards & Latines",
    prof: "Eric Dehant",
    profTag: "Coach de danse aux États-Unis",
    day: "Mercredi",
    period: "10/09/25 au 10/06/26",
    levels: [
      { name: "Débutant", time: "19h00 – 20h00" },
      { name: "Perfectionnement 1", time: "20h00 – 21h00" },
      { name: "Perfectionnement 2", time: "21h00 – 22h00" },
    ],
    dances: ["Tango", "Quickstep", "Valse lente", "Valse viennoise", "Cha-cha", "Rumba", "Samba", "Jive"],
    gradient: "from-rose-100/70 to-blush/60",
    accentColor: "text-rose-500",
    dotColor: "bg-rose-400",
  },
  {
    id: "latino",
    icon: <Music size={22} />,
    number: "02",
    title: "Danses latino",
    subtitle: "Chaleur & Passion",
    prof: "Ivan Hidalgo O'Farrill",
    profTag: "Champion de cha-cha à Cuba",
    day: "Jeudi",
    period: "11/09/25 au 25/06/26",
    levels: [
      { name: "Débutant", time: "20h00 – 21h00" },
      { name: "Moyen", time: "21h00 – 22h00" },
    ],
    dances: ["Salsa", "Bachata"],
    gradient: "from-ciel-100/70 to-frost/60",
    accentColor: "text-ciel-500",
    dotColor: "bg-ciel-400",
  },
  {
    id: "rock",
    icon: <Zap size={22} />,
    number: "03",
    title: "Rock & Swing",
    subtitle: "Énergie & Style",
    prof: "Didier & Carine Paschal",
    profTag: "Diplômés UBPDM",
    day: "Mardi",
    period: "09/09/25 au 09/06/26",
    levels: [{ name: "Tous niveaux", time: "20h30 – 21h30" }],
    dances: ["Rock 4T", "Soul", "West Coast Swing"],
    gradient: "from-rose-50/70 to-ciel-50/60",
    accentColor: "text-rose-500",
    dotColor: "bg-gradient-to-r from-rose-400 to-ciel-400",
  },
  {
    id: "solo",
    icon: <Users size={22} />,
    number: "04",
    title: "Danses solo",
    subtitle: "Line dance & Latino solo",
    prof: "Didier & Carine / Ivan",
    profTag: "",
    day: "Mardi & Jeudi",
    period: "Sept. 2025 – Juin 2026",
    levels: [
      { name: "Line dance", time: "Mar. 19h00 – 20h30" },
      { name: "Latino solo", time: "Jeu. 19h00 – 20h00" },
    ],
    dances: ["Country", "Disco", "Salsa solo", "Bachata solo", "Reggae", "Merengue", "Cumbia"],
    gradient: "from-ciel-50/70 to-rose-50/60",
    accentColor: "text-ciel-500",
    dotColor: "bg-ciel-400",
  },
];

export default function CoursPage() {
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
                4 disciplines, tous niveaux
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold italic text-foreground leading-[0.95]">
              Nos cours
            </h1>
            <p className="mt-6 text-lg text-foreground/40 leading-relaxed max-w-xl font-light">
              On y apprend des pas, des figures et le sens du rythme.
              Cavalier et dame découvrent chaque pas séparément avant
              de l&apos;exécuter en couple, guidés par le professeur.
            </p>
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 space-y-8">
          {courses.map((c, i) => (
            <AnimatedSection key={c.id} delay={i * 80}>
              <div
                className={`relative rounded-[2rem] bg-gradient-to-br ${c.gradient} border border-white/50 overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-rose-100/15`}
              >
                {/* Large number watermark */}
                <span className="absolute top-6 right-10 font-display text-[8rem] font-bold italic text-foreground/[0.025] leading-none select-none hidden lg:block">
                  {c.number}
                </span>

                <div className="p-8 sm:p-10 lg:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-8 lg:gap-16">
                    {/* Left */}
                    <div>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-11 h-11 rounded-2xl bg-white/50 flex items-center justify-center ${c.accentColor}`}>
                          {c.icon}
                        </div>
                        <div>
                          <h2 className="font-display text-2xl sm:text-3xl font-semibold italic text-foreground">
                            {c.title}
                          </h2>
                          <p className="text-sm text-foreground/35">{c.subtitle}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-6">
                        <div className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 rounded-full ${c.dotColor}`} />
                          <span className={`text-sm font-semibold ${c.accentColor}`}>{c.prof}</span>
                        </div>
                        {c.profTag && (
                          <span className="text-xs text-foreground/30 italic">{c.profTag}</span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-1.5">
                        {c.dances.map((d) => (
                          <span
                            key={d}
                            className="px-3.5 py-1.5 rounded-full bg-white/50 text-[0.72rem] font-medium text-foreground/50 border border-white/30"
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right — schedule */}
                    <div className="lg:min-w-[260px]">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock size={14} className="text-foreground/30" />
                        <span className="text-xs font-medium text-foreground/35 uppercase tracking-wider">{c.day}</span>
                      </div>
                      <div className="space-y-2">
                        {c.levels.map((l) => (
                          <div
                            key={l.name}
                            className="flex items-center justify-between px-4 py-3 rounded-xl bg-white/40 border border-white/40"
                          >
                            <span className="text-sm font-medium text-foreground/60">{l.name}</span>
                            <span className="text-xs font-semibold text-rose-400 tabular-nums">{l.time}</span>
                          </div>
                        ))}
                      </div>
                      <p className="mt-3 text-[0.65rem] text-foreground/25">{c.period}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Entraînements & Soirées */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ciel-500 mb-3">
                Inclus dans votre inscription
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold italic text-foreground">
                Entraînements & soirées
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Entraînements",
                items: [
                  "Gratuits et inclus dans l'inscription",
                  "Ambiance détendue, tenue libre",
                  "Rencontrez les autres membres du club",
                  "Bonne musique et bonne piste de danse",
                  "Accès à tous les clubs de la Ligue avec votre carte",
                ],
              },
              {
                title: "Soirées & événements",
                items: [
                  "Thés dansants et soupers dansants",
                  "Bal annuel du club",
                  "Soirées à thème (Halloween, Noël, Carnaval…)",
                  "Compétitions amicales entre clubs",
                  "Démonstrations de danseurs de haut niveau",
                ],
              },
            ].map((section, si) => (
              <AnimatedSection key={section.title} delay={si * 150}>
                <div className="rounded-[2rem] glass p-8 sm:p-10 h-full">
                  <h3 className="font-display text-xl font-semibold italic text-foreground mb-6">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 size={16} className="text-rose-400 shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/50 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-16 text-center">
              <Link
                href="/horaires"
                className="btn-shine group inline-flex items-center gap-2 px-9 py-4 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
              >
                Voir horaires & tarifs
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
