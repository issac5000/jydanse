"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { Info, ArrowUpRight, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const courseOptions: Record<string, string[]> = {
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

export default function InscriptionForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      fullname: formData.get("fullname") as string,
      address: formData.get("address") as string,
      phone: formData.get("phone") as string,
      email: formData.get("email") as string,
      birthdate: formData.get("birthdate") as string,
      sex: formData.get("sex") as string,
      courses: formData.getAll("courses") as string[],
    };

    try {
      const res = await fetch("/api/inscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-emerald-500" />
        </div>
        <h3 className="font-display text-xl font-extrabold text-foreground mb-2">
          Pré-inscription envoyée !
        </h3>
        <p className="text-sm text-foreground/40 mb-6 max-w-sm">
          Nous avons bien reçu votre demande. Nous vous recontacterons
          pour finaliser votre inscription.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-ciel-500 hover:text-ciel-600 transition-colors"
        >
          Envoyer une autre inscription
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      {/* Personal info */}
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground mb-8">
          Informations personnelles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="sm:col-span-2">
            <label htmlFor="fullname" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Nom et Prénom *
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              required
              className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="address" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Adresse complète
            </label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Rue, N°, CP, Localité"
              className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="insc-email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Email *
            </label>
            <input
              type="email"
              id="insc-email"
              name="email"
              required
              className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
            />
          </div>
          <div>
            <label htmlFor="birthdate" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
              Date et lieu de naissance
            </label>
            <input
              type="text"
              id="birthdate"
              name="birthdate"
              className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Sexe *
            </label>
            <div className="flex gap-6">
              {["Homme", "Femme"].map((s) => (
                <label key={s} className="flex items-center gap-2.5 text-sm text-foreground/55 cursor-pointer group">
                  <input type="radio" name="sex" value={s} required className="w-4 h-4 accent-ciel-500" />
                  <span className="group-hover:text-foreground/70 transition-colors">{s}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-ciel-200/40 to-transparent" />

      {/* Course selection */}
      <div>
        <h2 className="font-display text-xl font-extrabold text-foreground mb-8">
          Choix des cours
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {Object.entries(courseOptions).map(([category, options]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-ciel-500 mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {options.map((opt) => (
                  <label key={opt} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="courses"
                      value={opt}
                      className="w-4 h-4 rounded accent-ciel-500"
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
      <div className="h-px bg-gradient-to-r from-transparent via-ciel-200/40 to-transparent" />

      {/* RGPD */}
      <div className="rounded-xl bg-ciel-100/40 border border-ciel-200/40 p-5">
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
        <input type="checkbox" required className="w-4 h-4 mt-0.5 rounded accent-ciel-500" />
        <span className="text-sm text-foreground/40 leading-relaxed group-hover:text-foreground/55 transition-colors">
          Je déclare avoir pris connaissance du ROI du club.
          J&apos;atteste sur l&apos;honneur l&apos;absence de
          contre-indications à la pratique de la danse.{" "}
          <Link href="/roi" className="text-ciel-500 hover:text-ciel-600 underline underline-offset-2">
            Voir les termes
          </Link>
        </span>
      </label>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200/50">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-600">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-shine group w-full inline-flex items-center justify-center gap-2 px-10 py-4.5 text-sm font-semibold text-white bg-gradient-to-r from-ciel-500 via-ciel-400 to-rose-400 rounded-full hover:shadow-xl hover:shadow-ciel-300/25 transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer ma pré-inscription
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </>
        )}
      </button>
    </form>
  );
}
