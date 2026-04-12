import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, Users, Award, Heart, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import Marquee from "@/components/Marquee";

const danceStyles = [
  "Valse lente", "Tango", "Quick-step", "Valse viennoise", "Slow-Fox",
  "Cha-cha", "Rumba", "Jive", "Samba", "Paso doble",
  "Salsa", "Bachata", "Rock", "Boogie", "Line Dance", "Merengue", "Cumbia",
];

const courses = [
  {
    number: "01",
    title: "Danses sportives / de salon",
    subtitle: "Standards & Latines",
    prof: "Eric Dehant",
    day: "Mercredi",
    dances: ["Valse lente", "Tango", "Quick-step", "Valse viennoise", "Slow-Fox", "Cha-cha", "Rumba", "Jive", "Samba", "Paso doble"],
    gradient: "from-rose-500/65 to-rose-400/65",
    accent: "bg-rose-400",
  },
  {
    number: "02",
    title: "Latino",
    subtitle: "Salsa & Bachata",
    prof: "Ivan Hidalgo O'Farrill",
    day: "Jeudi",
    dances: ["Salsa", "Bachata", "Reggae", "Merengue", "Cumbia"],
    gradient: "from-ciel-500/65 to-ciel-400/65",
    accent: "bg-ciel-400",
  },
  {
    number: "03",
    title: "Rock & Boogie",
    subtitle: "Énergie & Style",
    prof: "Didier & Cowine Paschal",
    day: "Mardi",
    dances: ["Rock 4T", "Soul", "Boogie"],
    gradient: "from-rose-500/65 via-rose-400/65 to-ciel-400/65",
    accent: "bg-gradient-to-r from-rose-400 to-ciel-400",
  },
];

const stats = [
  { num: 1992, suffix: "", label: "Année de fondation", icon: <Clock size={22} /> },
  { num: 3, suffix: "", label: "Soirées par semaine", icon: <Sparkles size={22} /> },
  { num: 28, suffix: "", label: "Leçons par saison", icon: <Award size={22} /> },
  { num: 180, suffix: "€", label: "Par an / personne", icon: <Heart size={22} /> },
];

export default function Home() {
  return (
    <>
      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden grain">
        {/* Hero background image */}
        <Image
          src="/herojydanse.webp"
          alt="Danseurs du club J'y Danse"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />

        {/* Decorative lines */}
        <div className="absolute top-32 right-16 w-px h-40 bg-gradient-to-b from-transparent via-rose-200/40 to-transparent hidden lg:block" />
        <div className="absolute bottom-32 left-20 w-32 h-px bg-gradient-to-r from-transparent via-ciel-200/40 to-transparent hidden lg:block" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 w-full py-20">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Eyebrow */}
            <div className="reveal-up inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-rose-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">
                Club de danse sportive — Gilly
              </span>
              <div className="w-8 h-px bg-rose-300" />
            </div>

            {/* Main headline */}
            <h1 className="reveal-up delay-100">
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-foreground leading-[0.95] tracking-tight">
                Venez danser
              </span>
              <span className="block font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight mt-1">
                <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 bg-clip-text text-transparent">
                  avec nous !
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="reveal-up delay-300 mt-8 text-base sm:text-lg text-foreground/45 leading-relaxed max-w-xl font-light">
              Bienvenue à tous — débutants ou confirmés.
              Découvrez la danse dans une ambiance conviviale et
              familiale, guidés par des professeurs passionnés.
            </p>

            {/* CTAs */}
            <div className="reveal-up delay-400 mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/inscription"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
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
                className="group inline-flex items-center justify-center gap-2 px-9 py-4 text-base font-medium text-foreground/60 rounded-full border border-rose-200/60 hover:border-rose-300 hover:bg-blush/50 transition-all duration-500"
              >
                Découvrir nos cours
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* ═══════════════ ABOUT / AMBIANCE ═══════════════ */}
      <section className="relative pt-6 sm:pt-8 pb-28 sm:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-ciel-100/30 rounded-full blur-[140px] translate-x-1/3 -translate-y-1/2" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="flex justify-center mb-16">
              <video
                src="/0412-opt.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-56 sm:w-64"
              />
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left — image placeholder */}
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-[2.5rem] bg-gradient-to-br from-rose-100 via-blush to-ciel-100 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 rounded-full bg-rose-50/50 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                        <Users size={32} className="text-rose-400" />
                      </div>
                      <p className="text-base font-medium text-foreground/30">Photo à venir</p>
                    </div>
                  </div>
                </div>
                {/* Floating accent card */}
                <div className="absolute -bottom-6 -right-6 glass rounded-2xl px-6 py-4 glow-ciel">
                  <p className="font-display text-2xl font-extrabold text-foreground">30+</p>
                  <p className="text-sm text-foreground/40">années d&apos;expérience</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Right — text */}
            <div>
              <AnimatedSection>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                  Notre philosophie
                </p>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground leading-tight mb-8">
                  Bien plus qu&apos;un club de danse
                </h2>
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <p className="text-lg text-foreground/45 leading-[1.8] mb-6">
                  La danse est un sport où l&apos;homme et la femme ne s&apos;affrontent pas
                  mais se complètent, permettant à chacun de s&apos;exprimer et de
                  s&apos;épanouir ensemble.
                </p>
                <p className="text-lg text-foreground/45 leading-[1.8] mb-10">
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
                      className="flex items-center gap-3 p-4 rounded-2xl bg-gradient-to-br from-rose-500/65 to-ciel-400/65 backdrop-blur-sm border border-white/20"
                    >
                      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white">
                        {f.icon}
                      </div>
                      <span className="text-sm font-medium text-white">{f.label}</span>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ MARQUEE ═══════════════ */}
      <Marquee items={danceStyles} />

      {/* ═══════════════ COURSES ═══════════════ */}
      <section className="relative py-28 sm:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-50/50 rounded-full blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="flex flex-col items-center text-center mb-20">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                3 soirées, tous niveaux
              </p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight">
                Nos cours
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((c, i) => (
              <AnimatedSection key={c.number} delay={i * 120}>
                <div
                  className={`group relative rounded-[2rem] bg-gradient-to-br ${c.gradient} backdrop-blur-sm border border-white/20 p-8 sm:p-10 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-rose-200/15 h-full flex flex-col`}
                >
                  {/* Course number */}
                  <span className="absolute -top-4 -right-2 font-display text-[10rem] font-extrabold text-white/10 leading-none select-none">
                    {c.number}
                  </span>

                  <div className={`w-2 h-2 rounded-full bg-white/40 mb-6`} />

                  <h3 className="font-display text-2xl font-extrabold text-white mb-1">
                    {c.title}
                  </h3>
                  <p className="text-base text-white/70 mb-6">{c.subtitle}</p>

                  <div className="mb-6">
                    <p className="text-sm font-semibold text-white mb-1">{c.prof}</p>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center">
                        <Clock size={12} className="text-white/70" />
                      </div>
                      <span className="text-sm text-white/70">{c.day} soir</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {c.dances.map((d) => (
                      <span
                        key={d}
                        className="px-3 py-1 rounded-full bg-white/15 text-xs font-medium text-white/80 transition-colors group-hover:bg-white/25"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="flex justify-center mt-12">
              <Link
                href="/cours"
                className="btn-shine inline-flex items-center gap-2 px-10 py-4 text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-lg hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
              >
                Tout découvrir
                <ArrowUpRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ═══════════════ STATS BAND ═══════════════ */}
      <section className="relative py-24 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-500/65 via-rose-400/65 to-ciel-400/65" />
        <div className="absolute inset-0 grain" />

        <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={i * 100}>
                <div className="relative text-center p-8 rounded-[2rem] bg-white/15 border border-white/20 backdrop-blur-sm hover:-translate-y-1 hover:bg-white/25 transition-all duration-500 h-full flex flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 text-white mb-5">
                    {s.icon}
                  </div>
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-white mb-2">
                    <AnimatedCounter value={s.num} suffix={s.suffix} />
                  </div>
                  <p className="text-sm text-white/70 font-medium uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ EVENTS ═══════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-frost/30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ciel-500 mb-3">
                Saison 2025–2026
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">
                Événements à venir
              </h2>
            </div>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-[22px] sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-rose-300/50 to-transparent" />

            <div className="space-y-10">
            {[
              { date: "2–4 sept.", title: "Portes ouvertes", desc: "Venez essayer gratuitement", color: "from-rose-500/65 to-rose-400/65", float: "animate-float-gentle" },
              { date: "16 oct.", title: "Soirée Halloween", desc: "Entraînement déguisé", color: "from-ciel-500/65 to-ciel-400/65", float: "animate-float-slow" },
              { date: "18 déc.", title: "Soirée de Noël", desc: "Ambiance festive", color: "from-rose-500/65 to-ciel-400/65", float: "animate-float-gentle" },
              { date: "12 fév.", title: "Soirée Carnaval", desc: "Déguisement souhaité", color: "from-ciel-400/65 to-rose-400/65", float: "animate-float-slow" },
            ].map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 120}>
                <div className={`relative sm:flex sm:items-center ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot on the line */}
                  <div className="absolute left-[22px] sm:left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-rose-400 to-ciel-400 ring-4 ring-white z-10" />

                  {/* Card */}
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${i % 2 === 0 ? "sm:mr-auto sm:pr-8" : "sm:ml-auto sm:pl-8"}`}>
                    <div
                      className={`group relative rounded-[1.5rem] bg-gradient-to-br ${e.color} backdrop-blur-sm p-7 overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/20 border border-white/20 ${e.float}`}
                      style={{ animationDelay: `${i * 2}s` }}
                    >
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/20 text-xs font-bold text-white uppercase tracking-wider mb-4">
                        {e.date}
                      </span>
                      <h3 className="font-display text-xl font-extrabold text-white mb-1">
                        {e.title}
                      </h3>
                      <p className="text-sm text-white/70">{e.desc}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ FINAL CTA ═══════════════ */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blush via-background to-frost" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-rose-200/15 rounded-full blur-[160px]" />

        <div className="relative text-center mx-auto max-w-3xl px-5 sm:px-8">
          <AnimatedSection>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400 mb-4">
              Première leçon ? C&apos;est par ici
            </p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Envie d&apos;essayer ?
            </h2>
            <p className="text-foreground/40 text-xl leading-relaxed mb-12 max-w-xl mx-auto font-light">
              Portes ouvertes début septembre — venez découvrir l&apos;ambiance,
              rencontrer nos professeurs. Gratuit et sans engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscription"
                className="btn-shine group inline-flex items-center justify-center gap-2 px-10 py-4.5 text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
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
                className="inline-flex items-center justify-center gap-2 px-10 py-4.5 text-base font-medium text-foreground/50 rounded-full border border-rose-200/50 hover:border-rose-300 hover:bg-blush/50 transition-all duration-500"
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
