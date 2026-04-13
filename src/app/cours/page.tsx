import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Music, Zap, Star, Users, Sparkles, Trophy } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBubbles from "@/components/HeroBubbles";

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
    title: "Danses sportives / de salon",
    subtitle: "Standards & Latines",
    prof: "Eric Dehant",
    profTag: "Coach de danse aux États-Unis",
    profImage: "/eric-prof.webp",
    initial: "E",
    avatarGradient: "from-ciel-300 to-ciel-500",
    day: "Mercredi",
    period: "10/09/25 au 10/06/26",
    levels: [
      { name: "Débutant", time: "19h00 – 20h00" },
      { name: "Perfectionnement 1", time: "20h00 – 21h00" },
      { name: "Perfectionnement 2", time: "21h00 – 22h00" },
    ],
    dances: ["Valse lente", "Tango", "Quick-step", "Valse viennoise", "Slow-Fox", "Cha-cha", "Rumba", "Jive", "Samba", "Paso doble"],
    gradient: "from-ciel-500/65 to-ciel-400/65",
  },
  {
    id: "latino",
    icon: <Music size={22} />,
    number: "02",
    title: "Danses latino",
    subtitle: "Chaleur & Passion",
    prof: "Ivan Hidalgo O'Farrill",
    profTag: "Champion de cha-cha à Cuba",
    profImage: "/ivan.webp",
    initial: "I",
    avatarGradient: "from-ciel-300 to-ciel-500",
    day: "Jeudi",
    period: "11/09/25 au 25/06/26",
    levels: [
      { name: "Débutant", time: "20h00 – 21h00" },
      { name: "Moyen", time: "21h00 – 22h00" },
    ],
    dances: ["Salsa", "Bachata"],
    gradient: "from-ciel-500/65 to-rose-400/65",
  },
  {
    id: "rock",
    icon: <Zap size={22} />,
    number: "03",
    title: "Rock & Boogie",
    subtitle: "Énergie & Style",
    prof: "Didier & Cowine Paschal",
    profTag: "Diplômés UBPDM",
    profImage: null,
    initial: "D",
    avatarGradient: "from-ciel-400 to-rose-400",
    day: "Mardi",
    period: "09/09/25 au 09/06/26",
    levels: [{ name: "Tous niveaux", time: "20h30 – 21h30" }],
    dances: ["Rock 4T", "Soul", "Boogie"],
    gradient: "from-ciel-500/65 via-ciel-400/65 to-rose-400/65",
  },
  {
    id: "solo",
    icon: <Users size={22} />,
    number: "04",
    title: "Danses solo",
    subtitle: "Line dance & Latino solo",
    prof: "Didier & Cowine / Ivan",
    profTag: "",
    profImage: null,
    initial: "D",
    avatarGradient: "from-ciel-300 to-rose-400",
    day: "Mardi & Jeudi",
    period: "Sept. 2025 – Juin 2026",
    levels: [
      { name: "Line dance", time: "Mar. 19h00 – 20h30" },
      { name: "Latino solo", time: "Jeu. 19h00 – 20h00" },
    ],
    dances: ["Disco", "Salsa solo", "Bachata solo", "Reggae", "Merengue", "Cumbia"],
    gradient: "from-ciel-400/65 to-rose-400/65",
  },
];

const navItems = [
  { id: "salon", label: "Salon", icon: <Star size={16} /> },
  { id: "latino", label: "Latino", icon: <Music size={16} /> },
  { id: "rock", label: "Rock", icon: <Zap size={16} /> },
  { id: "solo", label: "Solo", icon: <Users size={16} /> },
];

export default function CoursPage() {
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
                4 disciplines, tous niveaux
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
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

      {/* Quick nav */}
      <section className="relative mt-8 z-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-none">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-white/90 backdrop-blur-xl border border-white/60 shadow-lg shadow-foreground/5 text-sm font-semibold text-foreground/60 hover:text-white hover:bg-gradient-to-r hover:from-ciel-500 hover:to-rose-400 hover:border-transparent transition-all duration-300 whitespace-nowrap shrink-0"
              >
                <span className="opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</span>
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="relative pt-16 sm:pt-24 pb-20 sm:pb-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={c.id} delay={i * 120}>
                <div id={c.id} className="scroll-mt-24 h-full">
                  <div
                    className={`group rounded-[2rem] bg-gradient-to-br ${c.gradient} border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-ciel-100/10 h-full`}
                  >
                    <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                      {/* Avatar rond */}
                      <div className="mb-5">
                        {c.profImage ? (
                          <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 shadow-lg transition-all duration-500 group-hover:ring-white/40 group-hover:shadow-xl">
                            <Image
                              src={c.profImage}
                              alt={c.prof}
                              width={112}
                              height={112}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${c.avatarGradient} flex items-center justify-center ring-4 ring-white/20 shadow-lg`}>
                            <span className="font-display text-3xl font-extrabold text-white/90">
                              {c.initial}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Title */}
                      <h2 className="font-display text-xl font-extrabold text-white mb-1">
                        {c.title}
                      </h2>
                      <p className="text-xs font-semibold text-white/80 mb-3">{c.subtitle}</p>

                      {/* Professor */}
                      <p className="text-white/65 text-sm leading-relaxed mb-1">{c.prof}</p>
                      {c.profTag && (
                        <p className="text-[0.7rem] text-white/45 mb-5">{c.profTag}</p>
                      )}
                      {!c.profTag && <div className="mb-5" />}

                      {/* Dance tags */}
                      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
                        {c.dances.map((d) => (
                          <span
                            key={d}
                            className="px-2.5 py-0.5 rounded-full bg-white/15 text-[0.65rem] font-medium text-white/80 border border-white/10"
                          >
                            {d}
                          </span>
                        ))}
                      </div>

                      {/* Schedule */}
                      <div className="w-full mt-auto">
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Clock size={12} className="text-white/50" />
                          <span className="text-xs font-medium text-white/60 uppercase tracking-wider">{c.day}</span>
                        </div>
                        <div className="space-y-1.5">
                          {c.levels.map((l) => (
                            <div
                              key={l.name}
                              className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/15 border border-white/10"
                            >
                              <span className="text-sm font-medium text-white/80">{l.name}</span>
                              <span className="text-xs font-semibold text-white tabular-nums">{l.time}</span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-2.5 text-[0.65rem] text-white/35">{c.period}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Entraînements & Soirées — diagonal band */}
      <section className="relative py-32 sm:py-36 overflow-hidden">
        <div className="absolute -inset-x-1 -inset-y-0 bg-gradient-to-r from-ciel-500/65 via-ciel-400/65 to-rose-400/65" style={{ clipPath: "polygon(0 0, 100% 6%, 100% 94%, 0 100%)" }} />
        <div className="absolute -inset-x-1 -inset-y-0 grain" style={{ clipPath: "polygon(0 0, 100% 6%, 100% 94%, 0 100%)" }} />

        <div className="relative z-[4] mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-white/70 mb-3">
                Inclus dans votre inscription
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                Entraînements & soirées
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: <Sparkles size={22} />,
                title: "Entraînements libres",
                desc: "Gratuits et inclus dans l'inscription. Ambiance détendue, tenue libre — perfectionnez vos pas à votre rythme.",
              },
              {
                icon: <Trophy size={22} />,
                title: "Soirées & bals",
                desc: "Thés dansants, soupers dansants, soirées à thème (Halloween, Noël, Carnaval) et bal annuel du club.",
              },
              {
                icon: <Users size={22} />,
                title: "Vie de club",
                desc: "Compétitions amicales entre clubs, démonstrations et accès à tous les clubs de la Ligue avec votre carte.",
              },
            ].map((item, si) => (
              <AnimatedSection key={item.title} delay={si * 120}>
                <div className="rounded-[2rem] bg-white/15 backdrop-blur-sm border border-white/20 p-8 h-full transition-all duration-500 hover:-translate-y-1 hover:bg-white/20">
                  <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-extrabold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/65 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-frost/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-ciel-200/15 rounded-full blur-[160px]" />

        <div className="relative text-center mx-auto max-w-3xl px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ciel-500 mb-4">
              Prêt à vous lancer ?
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Rejoignez l&apos;aventure
            </h2>
            <p className="text-foreground/40 text-lg sm:text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
              28 leçons par saison, entraînements gratuits, assurance comprise.
              Portes ouvertes début septembre — venez essayer gratuitement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscription"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-10 py-4.5 text-base font-semibold text-white bg-gradient-to-r from-ciel-500 via-ciel-400 to-rose-400 rounded-full hover:shadow-xl hover:shadow-ciel-300/25 transition-all duration-500 hover:-translate-y-0.5"
              >
                S&apos;inscrire maintenant
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/horaires"
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 text-base font-medium text-foreground/50 rounded-full border border-ciel-200/50 hover:border-ciel-300 hover:bg-frost/50 transition-all duration-500"
              >
                Horaires & tarifs
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
