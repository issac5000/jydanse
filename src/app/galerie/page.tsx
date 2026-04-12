import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Info } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Photos et souvenirs du club J'y Danse à Gilly.",
};

const placeholders = [
  { span: "col-span-2 row-span-2", aspect: "aspect-square" },
  { span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { span: "col-span-1 row-span-2", aspect: "aspect-[3/4]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-square" },
  { span: "col-span-2 row-span-1", aspect: "aspect-[2/1]" },
  { span: "col-span-1 row-span-1", aspect: "aspect-square" },
];

export default function GaleriePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[380px] sm:h-[420px] overflow-hidden grain">
        <div className="absolute inset-0 gradient-mesh bg-gradient-to-br from-ciel-50 via-frost/30 to-rose-50" />
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
                Nos plus beaux moments
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
              Galerie
            </h1>
            <p className="mt-6 text-lg text-foreground/40 font-light max-w-xl">
              Retrouvez les moments forts du club : soirées, entraînements, bals et événements.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[200px] gap-4">
            {placeholders.map((p, i) => (
              <AnimatedSection key={i} delay={i * 60} className={p.span}>
                <div
                  className={`${p.aspect} w-full h-full rounded-2xl bg-gradient-to-br from-rose-500/65 via-rose-400/65 to-ciel-400/65 border border-white/20 backdrop-blur-sm flex items-center justify-center overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-rose-100/15 hover:-translate-y-0.5 group`}
                >
                  <div className="text-center transition-transform duration-500 group-hover:scale-110">
                    <Camera size={28} className="text-white/40 mx-auto mb-2" />
                    <p className="text-[0.65rem] text-white/50 font-medium">Bientôt</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={500}>
            <p className="text-center text-foreground/30 text-sm mt-12 font-light">
              Les photos seront bientôt disponibles.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy notice */}
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="rounded-[2rem] bg-gradient-to-br from-rose-500/65 via-rose-400/65 to-ciel-400/65 backdrop-blur-sm border border-white/20 p-8 sm:p-10">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <Info size={18} className="text-white" />
                </div>
                <div className="text-sm text-white/70 leading-[1.8]">
                  <p>
                    Dans le respect de la vie privée, toute personne qui souhaite
                    que sa photo n&apos;apparaisse pas sur le site peut le signaler.
                  </p>
                  <p className="mt-2">
                    Si vous souhaitez qu&apos;une photo vous concernant soit
                    retirée, faites-le savoir et elle sera supprimée sans délai.
                  </p>
                  <p className="mt-3 text-white/50 font-display font-medium">
                    — Boucq Dominique, présidente
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
