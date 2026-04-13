import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FileText, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import HeroBubbles from "@/components/HeroBubbles";
import InscriptionForm from "@/components/InscriptionForm";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Formulaire de pré-inscription au club J'y Danse à Gilly.",
};

export default function InscriptionPage() {
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
                Saison 2025–2026
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
              Inscription
            </h1>
            <p className="mt-6 text-lg text-foreground/40 font-light max-w-xl">
              Remplissez le formulaire ci-dessous pour votre pré-inscription.
              Nous vous recontacterons pour finaliser.
            </p>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="rounded-[2rem] glass p-8 sm:p-10 lg:p-12">
                <InscriptionForm />
              </div>
          </AnimatedSection>

          {/* Tarifs reminder */}
          <AnimatedSection delay={200}>
            <div className="mt-8 rounded-2xl glass p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText size={16} className="text-ciel-500" />
                <h3 className="text-sm font-semibold text-foreground/60">Rappel des tarifs</h3>
              </div>
              <div className="text-sm text-foreground/35 space-y-1">
                <p>1 cours : 180 €/an — 2 cours : 350 € — 3 cours : 510 €</p>
                <p>Assurance et entraînements compris.</p>
                <p>Enfants -15 ans : 6 € si parents inscrits, sinon 95 €.</p>
              </div>
              <Link
                href="/horaires"
                className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-ciel-500 hover:text-ciel-600 transition-colors"
              >
                Tous les détails <ArrowUpRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
