import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Info, FileText, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Inscription",
  description: "Formulaire de pré-inscription au club J'y Danse à Gilly.",
};

const courseOptions = {
  "Danses sportives": ["Débutant", "Perfectionnement"],
  "Line Dance": [
    "Country & Disco débutant",
    "Country & Disco perf.",
    "Country moyen",
    "Disco moyen",
    "Danses latines en solo",
  ],
  Autres: ["Mix Latino débutant", "Mix Latino / Salsa perf.", "Mix Swing débutant"],
};

export default function InscriptionPage() {
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
                Saison 2025–2026
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold italic text-foreground leading-[0.95]">
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
            <form className="rounded-[2rem] glass p-8 sm:p-10 lg:p-12 space-y-10">
              {/* Personal info */}
              <div>
                <h2 className="font-display text-xl font-semibold italic text-foreground mb-8">
                  Informations personnelles
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label htmlFor="fullname" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Nom et Prénom *
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      required
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="address" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Adresse complète
                    </label>
                    <input
                      type="text"
                      id="address"
                      placeholder="Rue, N°, CP, Localité"
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="insc-email" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="insc-email"
                      required
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="birthdate" className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-2">
                      Date et lieu de naissance
                    </label>
                    <input
                      type="text"
                      id="birthdate"
                      className="w-full rounded-xl border border-rose-100/60 bg-white/50 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-rose-300 focus:ring-2 focus:ring-rose-200/30 outline-none transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground/30 mb-3">
                      Sexe *
                    </label>
                    <div className="flex gap-6">
                      {["Homme", "Femme"].map((s) => (
                        <label key={s} className="flex items-center gap-2.5 text-sm text-foreground/55 cursor-pointer group">
                          <input type="radio" name="sex" value={s} className="w-4 h-4 accent-rose-500" />
                          <span className="group-hover:text-foreground/70 transition-colors">{s}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-rose-200/40 to-transparent" />

              {/* Course selection */}
              <div>
                <h2 className="font-display text-xl font-semibold italic text-foreground mb-8">
                  Choix des cours
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                  {Object.entries(courseOptions).map(([category, options]) => (
                    <div key={category}>
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-rose-500 mb-4">
                        {category}
                      </h3>
                      <div className="space-y-3">
                        {options.map((opt) => (
                          <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              name="courses"
                              value={opt}
                              className="w-4 h-4 rounded accent-rose-500"
                            />
                            <span className="text-sm text-foreground/45 group-hover:text-foreground/65 transition-colors">
                              {opt}
                            </span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Separator */}
              <div className="h-px bg-gradient-to-r from-transparent via-rose-200/40 to-transparent" />

              {/* RGPD */}
              <div className="rounded-xl bg-ciel-50/40 border border-ciel-100/40 p-5">
                <div className="flex items-start gap-3">
                  <Info size={15} className="text-ciel-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground/35 leading-relaxed">
                    Ces informations, destinées aux fichiers de la Ligue de la Danse,
                    seront traitées en conformité avec le RGPD.
                  </p>
                </div>
              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" required className="w-4 h-4 mt-0.5 rounded accent-rose-500" />
                <span className="text-sm text-foreground/40 leading-relaxed group-hover:text-foreground/55 transition-colors">
                  Je déclare avoir pris connaissance du ROI du club.
                  J&apos;atteste sur l&apos;honneur l&apos;absence de
                  contre-indications à la pratique de la danse.{" "}
                  <Link href="/roi" className="text-rose-500 hover:text-rose-600 underline underline-offset-2">
                    Voir les termes
                  </Link>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                className="btn-shine group w-full inline-flex items-center justify-center gap-2 px-10 py-4.5 text-sm font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500"
              >
                Envoyer ma pré-inscription
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </form>
          </AnimatedSection>

          {/* Tarifs reminder */}
          <AnimatedSection delay={200}>
            <div className="mt-8 rounded-2xl glass p-6">
              <div className="flex items-center gap-2 mb-3">
                <FileText size={16} className="text-rose-400" />
                <h3 className="text-sm font-semibold text-foreground/60">Rappel des tarifs</h3>
              </div>
              <div className="text-sm text-foreground/35 space-y-1">
                <p>1 cours : 180 €/an — 2 cours : 350 € — 3 cours : 510 €</p>
                <p>Assurance et entraînements compris.</p>
                <p>Enfants -15 ans : 6 € si parents inscrits, sinon 95 €.</p>
              </div>
              <Link
                href="/horaires"
                className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-rose-500 hover:text-rose-600 transition-colors"
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
