import type { Metadata } from "next";
import Image from "next/image";
import { Camera, Info } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBubbles from "@/components/HeroBubbles";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Photos et souvenirs du club J'y Danse à Gilly.",
};

export default function GaleriePage() {
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

      {/* Annonce */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center">
              <Camera size={48} className="text-ciel-300 mx-auto mb-6" />
              <p className="font-display text-2xl sm:text-3xl font-bold text-foreground/70">
                Un peu de patience, les photos arrivent bientôt&nbsp;!
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Privacy notice */}
      <section className="relative py-16">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="rounded-[2rem] bg-gradient-to-br from-ciel-500/65 via-ciel-400/65 to-rose-400/65 backdrop-blur-sm border border-white/20 p-8 sm:p-10">
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
                    — Anne-Dominique Boucq Campitelli, présidente
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
