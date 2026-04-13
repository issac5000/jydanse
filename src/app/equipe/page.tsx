import type { Metadata } from "next";
import Image from "next/image";
import { Award, Heart, Users, Star, Music, Zap } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBubbles from "@/components/HeroBubbles";

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
    photo: "/eric-prof.webp",
    initial: "E",
    gradient: "from-ciel-500/65 to-ciel-400/65",
    avatarGradient: "from-ciel-300 to-ciel-500",
  },
  {
    name: "Ivan Hidalgo O'Farrill",
    role: "Danses latino",
    icon: <Music size={22} />,
    desc: "Champion de cha-cha à Cuba. Ivan assure les cours de latino — salsa, bachata — et latino solo le jeudi soir.",
    specialties: ["Salsa", "Bachata", "Reggae", "Merengue", "Cumbia"],
    day: "Jeudi",
    photo: "/ivan.webp",
    initial: "I",
    gradient: "from-ciel-500/65 to-rose-400/65",
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
    gradient: "from-ciel-500/65 via-ciel-400/65 to-rose-400/65",
    avatarGradient: "from-ciel-400 to-rose-400",
  },
];

const comiteMembers = [
  {
    name: "Anne-Dominique Boucq Campitelli",
    role: "Présidente",
    photo: "/dominique.webp",
    initial: "A",
  },
  {
    name: "Concetta Cianci",
    role: "Vice-Présidente & Trésorière",
    photo: "/conceta.webp",
    initial: "C",
  },
  {
    name: "Marianne Renard",
    role: "Secrétaire",
    photo: "/mariane.webp",
    initial: "M",
  },
  {
    name: "Eric Matagne",
    role: "Membre effectif",
    photo: "/eric.webp",
    initial: "E",
  },
  {
    name: "Laurence Riguelle",
    role: "Membre effectif",
    photo: "/laurence.webp",
    initial: "L",
  },
  {
    name: "Thérèse Moro",
    role: "Présidente d'honneur",
    photo: "/therese.webp",
    initial: "T",
  },
];

export default function EquipePage() {
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
      <section className="relative py-10 sm:py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-ciel-300" />
                <Heart size={16} className="text-ciel-500" />
                <div className="w-8 h-px bg-ciel-300" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                Le comité
              </h2>
              <p className="text-foreground/40 leading-[1.8] max-w-xl mx-auto">
                Un comité de bénévoles non rémunérés, dévoués au bon
                fonctionnement du club et à son ambiance familiale.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10">
            {comiteMembers.map((m, i) => (
              <AnimatedSection key={m.name} delay={i * 80}>
                <div className="group flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-ciel-100 shadow-lg shadow-ciel-100/20 transition-all duration-500 group-hover:ring-ciel-300 group-hover:shadow-xl group-hover:shadow-ciel-200/30">
                      {m.photo ? (
                        <Image
                          src={m.photo}
                          alt={m.name}
                          width={128}
                          height={128}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-ciel-300 to-rose-300 flex items-center justify-center">
                          <span className="font-display text-3xl font-extrabold text-white/70">
                            {m.initial}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-extrabold text-foreground leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-xs font-medium text-ciel-500 mt-1">
                    {m.role}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Professeurs */}
      <section className="relative py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-ciel-300" />
                <Award size={16} className="text-ciel-500" />
                <div className="w-8 h-px bg-ciel-300" />
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
                Nos professeurs
              </h2>
              <p className="text-foreground/40 leading-[1.8] max-w-xl mx-auto">
                Des professeurs certifiés et passionnés qui partagent
                leur savoir-faire avec bienveillance.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {professors.map((p, i) => (
              <AnimatedSection key={p.name} delay={i * 120}>
                <div
                  className={`group rounded-[2rem] bg-gradient-to-br ${p.gradient} border border-white/20 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-ciel-100/10 h-full`}
                >
                  <div className="p-6 sm:p-8 flex flex-col items-center text-center h-full">
                    {/* Avatar rond */}
                    <div className="mb-5">
                      {p.photo ? (
                        <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-white/20 shadow-lg transition-all duration-500 group-hover:ring-white/40 group-hover:shadow-xl">
                          <Image
                            src={p.photo}
                            alt={p.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${p.avatarGradient} flex items-center justify-center ring-4 ring-white/20 shadow-lg`}>
                          <span className="font-display text-3xl font-extrabold text-white/90">
                            {p.initial}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <h3 className="font-display text-xl font-extrabold text-white mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs font-semibold text-white/80 mb-3">{p.role}</p>
                    <p className="text-white/65 text-sm leading-relaxed mb-5">{p.desc}</p>

                    <div className="flex flex-wrap justify-center gap-1.5 mb-5 mt-auto">
                      {p.specialties.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-0.5 rounded-full bg-white/15 text-xs font-medium text-white/80 border border-white/10"
                        >
                          {s}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <Users size={10} className="text-white/60" />
                      </div>
                      <span className="text-xs text-white/60 font-medium">{p.day} soir</span>
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
