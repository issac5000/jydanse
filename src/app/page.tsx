import Link from "next/link";
import { ArrowUpRight, Clock, Users, Award, Heart, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Marquee from "@/components/Marquee";

const danceStyles = [
  "Tango", "Valse", "Cha-cha", "Rumba", "Quickstep", "Samba", "Jive",
  "Salsa", "Bachata", "Rock", "Swing", "Line Dance", "Merengue", "Cumbia",
];

const courses = [
  {
    number: "01",
    title: "Danses de salon",
    subtitle: "Standards & Latines",
    prof: "Eric Dehant",
    day: "Mercredi",
    dances: ["Tango", "Quickstep", "Valse", "Cha-cha", "Rumba", "Samba", "Jive"],
    gradient: "from-rose-100/80 to-blush",
    accent: "bg-rose-400",
  },
  {
    number: "02",
    title: "Latino",
    subtitle: "Salsa & Bachata",
    prof: "Ivan Hidalgo O'Farrill",
    day: "Jeudi",
    dances: ["Salsa", "Bachata", "Reggae", "Merengue", "Cumbia"],
    gradient: "from-ciel-100/80 to-frost",
    accent: "bg-ciel-400",
  },
  {
    number: "03",
    title: "Rock & Swing",
    subtitle: "Énergie & Style",
    prof: "Didier & Carine Paschal",
    day: "Mardi",
    dances: ["Rock 4T", "Soul", "West Coast Swing"],
    gradient: "from-rose-50 to-ciel-50",
    accent: "bg-gradient-to-r from-rose-400 to-ciel-400",
  },
];

const stats = [
  { value: "1992", label: "Année de fondation", icon: <Clock size={18} /> },
  { value: "3", label: "Soirées par semaine", icon: <Sparkles size={18} /> },
  { value: "28", label: "Leçons par saison", icon: <Award size={18} /> },
  { value: "180€", label: "Par an / personne", icon: <Heart size={18} /> },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden grain">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 gradient-mesh bg-gradient-to-br from-rose-50 via-white via-40% to-ciel-50" />

        {/* Organic blobs */}
        <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-rose-200/20 blob animate-float-slow" />
        <div className="absolute bottom-[5%] left-[8%] w-[350px] h-[350px] bg-ciel-200/20 blob-alt animate-float-gentle" />
        <div className="absolute top-[40%] left-[50%] w-[200px] h-[200px] bg-rose-100/30 blob" />

        {/* Decorative lines */}
        <div className="absolute top-32 right-16 w-px h-40 bg-gradient-to-b from-transparent via-rose-200/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 left-20 w-32 h-px bg-gradient-to-r from-transparent via-ciel-200/40 to-transparent hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 w-full py-20">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="reveal-up inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-rose-300" />
              <span className="text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-rose-400">
                Club de danse sportive — Gilly
              </span>
            </div>

            {/* Main headline */}
            <h1 className="reveal-up delay-100">
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic text-foreground leading-[0.95] tracking-tight">
                L&apos;élégance
              </span>
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold italic leading-[0.95] tracking-tight mt-1">
                <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 bg-clip-text text-transparent">
                  en mouvement
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="reveal-up delay-300 mt-8 text-lg sm:text-xl text-foreground/45 leading-relaxed max-w-xl font-light">
              Bienvenue à tous — débutants ou confirmés.
              Découvrez la danse dans une ambiance conviviale et
              familiale, guidés par des professeurs passionnés.
            </p>

            {/* CTAs */}
            <div className="reveal-up delay-400 mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/inscription"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
              >
                Rejoindre le club
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/cours"
                className="group inline-flex items-center justify-center gap-2 px-9 py-4 text-sm font-medium text-foreground/60 rounded-full border border-rose-200/60 hover:border-rose-300 hover:bg-white/60 transition-all duration-500"
              >
                Découvrir nos cours
              </Link>
            </div>
          </div>

          {/* Floating stat card */}
          <div className="hidden lg:block absolute right-10 top-1/2 -translate-y-1/2 reveal-scale delay-600">
            <div className="glass rounded-3xl p-8 w-64 glow-rose animate-float-gentle">
              <div className="text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-4">
                Saison 2025–2026
              </div>
              <div className="space-y-4">
                {[
                  { day: "Mar", label: "Line dance & Rock", time: "19h" },
                  { day: "Mer", label: "Danses de salon", time: "19h" },
                  { day: "Jeu", label: "Latino & Salsa", time: "19h" },
                ].map((s) => (
                  <div key={s.day} className="flex items-center gap-3">
                    <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-100 to-ciel-100 flex items-center justify-center text-xs font-bold text-rose-500">
                      {s.day}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-foreground/70 leading-tight">{s.label}</p>
                      <p className="text-[0.65rem] text-foreground/35">{s.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <Marquee items={danceStyles} />

      {/* ═══════════════ COURSES ═══════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-50/50 rounded-full blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-20">
              <div>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                  3 soirées, tous niveaux
                </p>
                <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold italic text-foreground leading-tight">
                  Nos cours
                </h2>
              </div>
              <Link
                href="/cours"
                className="link-fancy text-sm font-medium text-foreground/45 hover:text-rose-500 transition-colors"
              >
                Tout découvrir
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={c.number} delay={i * 120}>
                <div
                  className={`group relative rounded-[2rem] bg-gradient-to-br ${c.gradient} p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-200/15`}
                >
                  {/* Course number */}
                  <span className="absolute top-6 right-8 font-display text-7xl font-bold italic text-foreground/[0.04] leading-none select-none">
                    {c.number}
                  </span>

                  <div className={`w-2 h-2 rounded-full ${c.accent} mb-6`} />

                  <h3 className="font-display text-2xl font-semibold italic text-foreground mb-1">
                    {c.title}
                  </h3>
                  <p className="text-sm text-foreground/40 mb-6">{c.subtitle}</p>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-rose-500 mb-1">{c.prof}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-lg bg-white/60 flex items-center justify-center">
                        <Clock size={10} className="text-foreground/40" />
                      </div>
                      <span className="text-xs text-foreground/40">{c.day} soir</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {c.dances.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1 rounded-full bg-white/50 text-[0.7rem] font-medium text-foreground/50 transition-colors group-hover:bg-white/70"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS BAND ═══════════════ */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400" />
        <div className="absolute inset-0 grain" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-2xl bg-white/15 text-white/80 mb-4">
                    {s.icon}
                  </div>
                  <div className="font-display text-3xl sm:text-4xl font-bold italic text-white mb-1">
                    {s.value}
                  </div>
                  <p className="text-xs text-white/60 font-medium uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ ABOUT / AMBIANCE ═══════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-ciel-100/30 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — image placeholder */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-blush to-ciel-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                        <Users size={32} className="text-rose-400" />
                      </div>
                      <p className="text-sm font-medium text-foreground/30">Photo à venir</p>
                    </div>
                  </div>
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-6 py-4 glow-ciel">
                  <p className="font-display text-2xl font-bold italic text-foreground">30+</p>
                  <p className="text-xs text-foreground/40">années d&apos;expérience</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — text */}
            <div>
              <AnimatedSection>
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                  Notre philosophie
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-semibold italic text-foreground leading-tight mb-8">
                  Bien plus qu&apos;un club de danse
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <p className="text-foreground/45 leading-[1.8] mb-6">
                  La danse est un sport où l&apos;homme et la femme ne s&apos;affrontent pas
                  mais se complètent, permettant à chacun de s&apos;exprimer et de
                  s&apos;épanouir ensemble.
                </p>
                <p className="text-foreground/45 leading-[1.8] mb-10">
                  Chez J&apos;y Danse, l&apos;ambiance est conviviale et familiale.
                  Nous proposons des entraînements, des thés dansants, des bals,
                  des compétitions et bien plus encore. Votre carte de membre vous
                  donne accès aux entraînements de tous les clubs de la Ligue de la Danse.
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Heart size={18} />, label: "Ambiance familiale" },
                    { icon: <Award size={18} />, label: "Profs certifiés" },
                    { icon: <Users size={18} />, label: "Tous niveaux" },
                    { icon: <Sparkles size={18} />, label: "Ligue de la Danse" },
                  ].map((f) => (
                    <div
                      key={f.label}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-rose-50/50 border border-rose-100/40"
                    >
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-rose-200/50 to-ciel-200/50 flex items-center justify-center text-rose-500">
                        {f.icon}
                      </div>
                      <span className="text-xs font-medium text-foreground/55">{f.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ EVENTS ═══════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-frost/30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ciel-500 mb-3">
                Saison 2025–2026
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-semibold italic text-foreground">
                Événements à venir
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { date: "2–4 sept.", title: "Portes ouvertes", desc: "Venez essayer gratuitement", color: "from-rose-200/40 to-rose-100/40" },
              { date: "16 oct.", title: "Soirée Halloween", desc: "Entraînement déguisé", color: "from-ciel-200/40 to-ciel-100/40" },
              { date: "18 déc.", title: "Soirée de Noël", desc: "Ambiance festive", color: "from-rose-100/40 to-ciel-100/40" },
              { date: "12 fév.", title: "Soirée Carnaval", desc: "Déguisement souhaité", color: "from-ciel-100/40 to-rose-100/40" },
            ].map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 100}>
                <div
                  className={`group relative rounded-[1.5rem] bg-gradient-to-br ${e.color} p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/20 border border-white/40`}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/60 text-[0.65rem] font-bold text-rose-500 uppercase tracking-wider mb-4">
                    {e.date}
                  </span>
                  <h3 className="font-display text-lg font-semibold italic text-foreground mb-1">
                    {e.title}
                  </h3>
                  <p className="text-xs text-foreground/40">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blush via-background to-frost" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-200/15 rounded-full blur-[160px]" />

        <div className="relative text-center mx-auto max-w-3xl px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-4">
              Première leçon ? C&apos;est par ici
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold italic text-foreground leading-tight mb-6">
              Envie d&apos;essayer ?
            </h2>
            <p className="text-foreground/40 text-lg leading-relaxed mb-12 max-w-xl mx-auto font-light">
              Portes ouvertes début septembre — venez découvrir l&apos;ambiance,
              rencontrer nos professeurs. Gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscription"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-10 py-4.5 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
              >
                Pré-inscription en ligne
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.5}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 text-sm font-medium text-foreground/50 rounded-full border border-rose-200/50 hover:border-rose-300 hover:bg-white/60 transition-all duration-500"
              >
                Nous contacter
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
