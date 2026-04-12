import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Users, Star, Music, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Notre équipe",
  description: "Les professeurs et le comité du club J'y Danse à Gilly.",
};

const professors = [
  {
    name: "Eric Dehant",
    role: "Danses sportives / de salon",
    icon: <Star size={22} />,
    desc: "Coach de danse aux États-Unis. Eric assure les cours de danses sportives — débutant, perfectionnement 1 et 2 — le mercredi soir.",
    specialties: ["Valse lente", "Tango", "Quick-step", "Valse viennoise", "Slow-Fox", "Cha-cha", "Rumba", "Jive", "Samba", "Paso doble"],
    day: "Mercredi",
    initial: "E",
    gradient: "from-rose-500/65 to-rose-400/65",
    avatarGradient: "from-rose-300 to-rose-400",
  },
  {
    name: "Ivan Hidalgo O'Farrill",
    role: "Danses latino",
    icon: <Music size={22} />,
    desc: "Champion de cha-cha à Cuba. Ivan assure les cours de latino — salsa, bachata — et latino solo le jeudi soir.",
    specialties: ["Salsa", "Bachata", "Reggae", "Merengue", "Cumbia"],
    day: "Jeudi",
    initial: "I",
    gradient: "from-ciel-500/65 to-ciel-400/65",
    avatarGradient: "from-ciel-300 to-ciel-500",
  },
  {
    name: "Didier & Cowine Paschal",
    role: "Line dance & Rock",
    icon: <Zap size={22} />,
    desc: "Diplômés de l'UBPDM (Union Belge des Professeurs de Danse et de Maintien). Ils assurent les cours de danses en ligne, rock et boogie le mardi soir.",
    specialties: ["Line dance", "Rock 4T", "Soul", "Boogie"],
    day: "Mardi",
    initial: "D",
    gradient: "from-rose-500/65 via-rose-400/65 to-ciel-400/65",
    avatarGradient: "from-rose-400 to-ciel-400",
  },
];

export default function EquipePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[380px] sm:h-[420px] overflow-hidden grain">
        <div className="absolute inset-0 gradient-mesh bg-gradient-to-br from-rose-50 via-blush/30 to-ciel-50" />
        <div className="absolute top-1/2 -translate-y-1/3 right-[6%] lg:right-[10%] w-[350px] h-[350px] bg-rose-200/20 rounded-full blur-sm" />
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
          className="lg:hidden absolute bottom-4 right-4 opacity-20 drop-shadow-lg"
        />

        <div className="relative h-full flex items-center mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-rose-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-rose-400">
                Des passionnés à votre service
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
              Notre équipe
            </h1>
            <p className="mt-6 text-lg text-foreground/40 leading-relaxed max-w-xl font-light">
              Un comité de bénévoles dévoués et des professeurs
              certifiés qui partagent la même passion pour la danse.
            </p>
          </div>
        </div>
      </section>

      {/* Comité */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="rounded-[2rem] bg-gradient-to-br from-rose-500/65 via-rose-400/65 to-ciel-400/65 border border-white/20 backdrop-blur-sm p-8 sm:p-12 overflow-hidden relative">
              <div className="absolute top-8 right-10 font-display text-[6rem] font-extrabold text-white/10 leading-none select-none hidden lg:block">
                ♥
              </div>
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-rose-300 to-ciel-300 flex items-center justify-center shadow-lg shadow-rose-200/20 shrink-0">
                  <Heart size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/60 mb-2">
                    Le comité
                  </p>
                  <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-4">
                    Le comité
                  </h2>
                  <ul className="text-white/80 leading-[2] mb-4 space-y-0.5">
                    <li><strong className="text-white">Présidente</strong> — Boucq Dominique</li>
                    <li><strong className="text-white">Vice-Présidente &amp; Trésorière</strong> — Cianci Concetta</li>
                    <li><strong className="text-white">Secrétaire</strong> — Renard Marianne</li>
                    <li><strong className="text-white">Membres effectifs</strong> — Eric Matagne, Laurence Riguelle</li>
                    <li><strong className="text-white">Présidente d&apos;honneur</strong> — Moro Thérèse</li>
                  </ul>
                  <p className="text-white/70 leading-[1.8] max-w-2xl">
                    Notre club est géré par un comité de membres bénévoles non rémunérés.
                    L&apos;équipe se dévoue au bon fonctionnement des activités et s&apos;attache
                    particulièrement à maintenir une ambiance conviviale et familiale.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Professeurs */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-16">
              <Award size={20} className="text-rose-500" />
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground">
                Nos professeurs
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-8">
            {professors.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 120}>
                <div
                  className={`rounded-[2rem] bg-gradient-to-br ${p.gradient} border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-rose-100/10`}
                >
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                      {/* Avatar */}
                      <div className="shrink-0">
                        <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${p.avatarGradient} flex items-center justify-center shadow-lg`}>
                          <span className="font-display text-3xl font-extrabold text-white/90">
                            {p.initial}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display text-2xl font-extrabold text-white">
                            {p.name}
                          </h3>
                        </div>
                        <p className="text-sm font-semibold text-white/80 mb-4">{p.role}</p>
                        <p className="text-white/70 leading-[1.8] mb-6 max-w-2xl">{p.desc}</p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {p.specialties.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 rounded-full bg-white/15 text-[0.7rem] font-medium text-white/80 border border-white/20"
                            >
                              {s}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-lg bg-white/20 flex items-center justify-center">
                            <Users size={10} className="text-white/60" />
                          </div>
                          <span className="text-xs text-white/60 font-medium">{p.day} soir</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
