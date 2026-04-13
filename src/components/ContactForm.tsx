"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
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
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
          <CheckCircle size={28} className="text-emerald-500" />
        </div>
        <h3 className="font-display text-xl font-extrabold text-foreground mb-2">
          Message envoyé !
        </h3>
        <p className="text-sm text-foreground/40 mb-6">
          Nous vous répondrons dans les meilleurs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="text-sm font-medium text-ciel-500 hover:text-ciel-600 transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Nom *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
          placeholder="Votre nom"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
          placeholder="votre@email.com"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Sujet
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all"
          placeholder="Sujet de votre message"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-xl border border-ciel-200/50 bg-frost/40 px-5 py-3.5 text-sm text-foreground placeholder:text-foreground/20 focus:border-ciel-300 focus:ring-2 focus:ring-ciel-200/30 outline-none transition-all resize-none"
          placeholder="Votre message..."
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 border border-red-200/50">
          <AlertCircle size={16} className="text-red-500 shrink-0" />
          <p className="text-sm text-red-600">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-shine group w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-ciel-500 via-ciel-400 to-rose-400 rounded-full hover:shadow-xl hover:shadow-ciel-300/25 transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={14} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            <Send size={14} />
            Envoyer le message
          </>
        )}
      </button>
    </form>
  );
}
