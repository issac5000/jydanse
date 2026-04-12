import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

export const metadata: Metadata = {
  title: "Horaires & Tarifs",
  description: "Horaires des cours et tarifs saison 2026-2027 du club J'y Danse à Gilly.",
};

const schedule = [
  {
    day: "Mardi",
    accent: "from-rose-400 to-rose-500",
    dotColor: "bg-rose-400",
    courses: [
      { time: "19h00 – 20h30", title: "Danses en ligne", prof: "Didier & Cowine Paschal", level: "Tous niveaux" },
      { time: "20h30 – 21h30", title: "Rock 4T, Soul & Boogie", prof: "Didier & Cowine Paschal", level: "Tous niveaux" },
    ],
  },
  {
    day: "Mercredi",
    accent: "from-ciel-400 to-ciel-500",
    dotColor: "bg-ciel-400",
    courses: [
      { time: "19h00 – 20h00", title: "Danses de salon", prof: "Eric Dehant", level: "Débutant" },
      { time: "20h00 – 21h00", title: "Danses de salon", prof: "Eric Dehant", level: "Perf. 1" },
      { time: "21h00 – 22h00", title: "Danses de salon", prof: "Eric Dehant", level: "Perf. 2" },
    ],
  },
  {
    day: "Jeudi",
    accent: "from-rose-400 to-ciel-400",
    dotColor: "bg-gradient-to-r from-rose-400 to-ciel-400",
    courses: [
      { time: "19h00 – 20h00", title: "Latino solo", prof: "Ivan Hidalgo O'Farrill", level: "Tous niveaux" },
      { time: "20h00 – 21h00", title: "Salsa & Bachata", prof: "Ivan Hidalgo O'Farrill", level: "Débutant" },
      { time: "21h00 – 22h00", title: "Salsa & Bachata", prof: "Ivan Hidalgo O'Farrill", level: "Moyen" },
    ],
  },
];

const pricing = [
  { courses: "1 cours", price: "180", detail: "par an / personne", popular: false },
  { courses: "2 cours", price: "350", detail: "180 € + 170 €", popular: true },
  { courses: "3 cours", price: "510", detail: "180 € + 170 € + 160 €", popular: false },
];

const events = [
  { date: "1–3 sept. 2026", title: "Portes ouvertes", desc: "Aux heures de cours — gratuit" },
  { date: "15 oct. 2026", title: "Entraînement Halloween", desc: "19h30 — Déguisement souhaité" },
  { date: "3–4 nov. 2026", title: "Entraînements dirigés", desc: "Didier (3/11) & Eric (4/11)" },
  { date: "15 & 17 déc. 2026", title: "Entraînements de Noël", desc: "19h30 — Ambiance festive" },
  { date: "3 fév. 2027", title: "Entraînement dirigé Eric", desc: "Danses de salon" },
  { date: "18 fév. 2027", title: "Entraînement Carnaval", desc: "19h30 — Déguisement souhaité" },
];

// === Calendar helpers ===
function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

function firstDayOfWeek(year: number, month: number): number {
  const jsDay = new Date(year, month - 1, 1).getDay();
  return jsDay === 0 ? 6 : jsDay - 1;
}

function toN(y: number, m: number, d: number): number {
  return y * 10000 + m * 100 + d;
}

const vacationRanges: [number, number][] = [
  [toN(2026, 10, 21), toN(2026, 11, 2)],   // Toussaint
  [toN(2026, 12, 21), toN(2027, 1, 2)],     // Noël
  [toN(2027, 2, 22), toN(2027, 3, 6)],      // Carnaval
  [toN(2027, 4, 26), toN(2027, 5, 9)],      // Printemps
];

const holidaySet = new Set([
  toN(2026, 11, 11), // 11 novembre
  toN(2027, 3, 29),  // Pâques
  toN(2027, 5, 7),   // Ascension
  toN(2027, 5, 17),  // Pentecôte
]);

const eventSet = new Set([
  toN(2026, 9, 1), toN(2026, 9, 2), toN(2026, 9, 3),
  toN(2026, 10, 15),
  toN(2026, 11, 3), toN(2026, 11, 4),
  toN(2026, 12, 15), toN(2026, 12, 17),
  toN(2027, 2, 3),
  toN(2027, 2, 18),
]);

function getDayInfo(year: number, month: number, day: number) {
  const n = toN(year, month, day);
  const isVac = vacationRanges.some(([s, e]) => n >= s && n <= e) || holidaySet.has(n);
  const isEvt = eventSet.has(n);

  if (isVac) return { course: null as string | null, vacation: true, event: isEvt };

  const jsDay = new Date(year, month - 1, day).getDay();
  let course: string | null = null;
  if (jsDay === 2 && n >= toN(2026, 9, 1) && n <= toN(2027, 6, 15)) course = "mardi";
  else if (jsDay === 3 && n >= toN(2026, 9, 2) && n <= toN(2027, 6, 16)) course = "mercredi";
  else if (jsDay === 4 && n >= toN(2026, 9, 3) && n <= toN(2027, 6, 24)) course = "jeudi";

  return { course, vacation: false, event: isEvt };
}

const calendarMonths = [
  { year: 2026, month: 9, name: "Sept." },
  { year: 2026, month: 10, name: "Oct." },
  { year: 2026, month: 11, name: "Nov." },
  { year: 2026, month: 12, name: "Déc." },
  { year: 2027, month: 1, name: "Jan." },
  { year: 2027, month: 2, name: "Fév." },
  { year: 2027, month: 3, name: "Mars" },
  { year: 2027, month: 4, name: "Avr." },
  { year: 2027, month: 5, name: "Mai" },
  { year: 2027, month: 6, name: "Juin" },
];

const weekDayLabels = ["L", "M", "M", "J", "V", "S", "D"];

export default function HorairesPage() {
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
              <div className="w-8 h-px bg-ciel-300" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-ciel-500">
                Saison 2026–2027
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[0.95]">
              Horaires & tarifs
            </h1>
            <p className="mt-6 text-foreground/40 text-lg font-light max-w-xl">
              28 leçons par saison + entraînements gratuits. Assurance comprise.
            </p>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
              Planning hebdomadaire
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-12">
              3 soirées de cours
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {schedule.map((s, si) => (
              <AnimatedSection key={s.day} delay={si * 120}>
                <div className="rounded-[2rem] overflow-hidden border border-blush/40 bg-blush/30 backdrop-blur-sm h-full">
                  <div className={`bg-gradient-to-r ${s.accent} px-8 py-5`}>
                    <h3 className="text-lg font-bold text-white tracking-wide">{s.day}</h3>
                  </div>
                  <div className="p-6 space-y-1">
                    {s.courses.map((c, ci) => (
                      <div
                        key={ci}
                        className="group p-4 rounded-xl hover:bg-rose-100/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-xs font-bold tabular-nums text-rose-500">
                            {c.time}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-ciel-100/60 text-[0.65rem] font-semibold text-ciel-600">
                            {c.level}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-foreground/70">{c.title}</p>
                        <p className="text-xs text-foreground/35 mt-0.5">{c.prof}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-frost/20 to-background" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-3">
              <Calendar size={18} className="text-ciel-500" />
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-ciel-500">
                Calendrier annuel
              </p>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-4">
              Saison complète
            </h2>
            <p className="text-foreground/40 text-sm font-light max-w-xl mb-10">
              Du 1er septembre 2026 au 24 juin 2027 — hors congés scolaires.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-8">
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-400 flex items-center justify-center text-[0.5rem] font-bold text-white">Ma</span>
                <span className="text-sm text-foreground/50">Mardi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-[4px] bg-ciel-400 flex items-center justify-center text-[0.5rem] font-bold text-white">Me</span>
                <span className="text-sm text-foreground/50">Mercredi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rotate-45 rounded-[3px] bg-amber-400 flex items-center justify-center text-[0.5rem] font-bold text-white"><span className="-rotate-45">Je</span></span>
                <span className="text-sm text-foreground/50">Jeudi</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-foreground/[0.07] ring-1 ring-foreground/10" />
                <span className="text-sm text-foreground/50">Congé</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="relative w-5 h-5 rounded-full ring-1 ring-foreground/10">
                  <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-rose-500 ring-2 ring-white" />
                </span>
                <span className="text-sm text-foreground/50">Événement</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-4">
              {calendarMonths.map(({ year, month, name }) => {
                const totalDays = daysInMonth(year, month);
                const startOffset = firstDayOfWeek(year, month);
                const cells: (number | null)[] = [];
                for (let i = 0; i < startOffset; i++) cells.push(null);
                for (let d = 1; d <= totalDays; d++) cells.push(d);

                return (
                  <div
                    key={`${year}-${month}`}
                    className="rounded-2xl p-2.5 sm:p-4"
                  >
                    <h4 className="font-display text-sm font-extrabold text-foreground text-center mb-2.5">
                      {name} <span className="text-foreground/30 font-normal text-xs">{year}</span>
                    </h4>
                    <div className="grid grid-cols-7 gap-[2px]">
                      {weekDayLabels.map((label, i) => (
                        <div key={i} className="text-[0.5rem] font-semibold text-foreground/25 text-center pb-1">
                          {label}
                        </div>
                      ))}
                      {cells.map((day, i) => {
                        if (day === null) return <div key={`e-${i}`} />;

                        const { course, vacation, event } = getDayInfo(year, month, day);

                        let shape = "rounded-full";
                        let bg = "";
                        let text = "text-foreground/25";

                        if (vacation) {
                          bg = "bg-foreground/[0.06]";
                          text = "text-foreground/20";
                        } else if (course === "mardi") {
                          shape = "rounded-full";
                          bg = "bg-rose-400";
                          text = "text-white font-bold";
                        } else if (course === "mercredi") {
                          shape = "rounded-[3px]";
                          bg = "bg-ciel-400";
                          text = "text-white font-bold";
                        } else if (course === "jeudi") {
                          shape = "rounded-[2px] rotate-45";
                          bg = "bg-amber-400";
                          text = "text-white font-bold";
                        }

                        return (
                          <div key={`d-${day}`} className="relative aspect-square flex items-center justify-center">
                            <div
                              className={`w-[85%] h-[85%] ${shape} ${bg} flex items-center justify-center text-[0.55rem] sm:text-[0.6rem] ${text}`}
                            >
                              <span className={course === "jeudi" ? "-rotate-45" : ""}>{day}</span>
                            </div>
                            {event && (
                              <span className="absolute -top-px -right-px w-1.5 h-1.5 rounded-full bg-rose-500 ring-1 ring-white" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
              <div className="rounded-2xl bg-blush/35 backdrop-blur-sm border border-blush/40 p-7 sm:p-8">
                <h4 className="font-display text-lg font-extrabold text-foreground mb-5">
                  Congés scolaires
                </h4>
                <ul className="space-y-3 text-sm text-foreground/50">
                  <li><span className="text-foreground/70 font-medium">Toussaint</span> — 21/10 → 02/11</li>
                  <li><span className="text-foreground/70 font-medium">Noël</span> — 21/12 → 02/01</li>
                  <li><span className="text-foreground/70 font-medium">Carnaval</span> — 22/02 → 06/03</li>
                  <li><span className="text-foreground/70 font-medium">Printemps</span> — 26/04 → 09/05</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-blush/35 backdrop-blur-sm border border-blush/40 p-7 sm:p-8">
                <h4 className="font-display text-lg font-extrabold text-foreground mb-5">
                  Jours fériés
                </h4>
                <ul className="space-y-3 text-sm text-foreground/50">
                  <li>11 novembre 2026</li>
                  <li>29 mars 2027 <span className="text-foreground/30">(Pâques)</span></li>
                  <li>7 mai 2027 <span className="text-foreground/30">(Ascension)</span></li>
                  <li>17 mai 2027 <span className="text-foreground/30">(Pentecôte)</span></li>
                </ul>
                <p className="mt-4 pt-4 border-t border-foreground/8 text-sm text-foreground/40">
                  Fermeture estivale : 25 juin → 1er sept. 2027
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-cream to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/30 rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
                Tarifs saison 2026–2027
              </p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">
                Des prix accessibles
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <AnimatedSection key={p.courses} delay={i * 120}>
                <div
                  className={`relative rounded-[2rem] p-8 text-center transition-all duration-500 hover:-translate-y-1 ${
                    p.popular
                      ? "bg-gradient-to-br from-rose-500 via-rose-400 to-ciel-400 text-white shadow-2xl shadow-rose-300/25 scale-[1.03]"
                      : "glass hover:shadow-xl hover:shadow-rose-100/15"
                  }`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-[0.65rem] font-bold text-rose-500 uppercase tracking-wider shadow-lg">
                      Populaire
                    </span>
                  )}
                  <p className={`text-sm font-medium mb-4 ${p.popular ? "text-white/70" : "text-foreground/40"}`}>
                    {p.courses}
                  </p>
                  <div className={`font-display text-5xl font-extrabold mb-2 ${p.popular ? "text-white" : "text-foreground"}`}>
                    {p.price}<span className="text-2xl">€</span>
                  </div>
                  <p className={`text-xs mb-6 ${p.popular ? "text-white/55" : "text-foreground/30"}`}>
                    {p.detail}
                  </p>
                  <Link
                    href="/inscription"
                    className={`inline-flex items-center justify-center w-full py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                      p.popular
                        ? "bg-white text-rose-500 hover:shadow-lg"
                        : "bg-gradient-to-r from-rose-500 to-ciel-400 text-white hover:shadow-lg hover:shadow-rose-300/20"
                    }`}
                  >
                    S&apos;inscrire
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={400}>
            <div className="mt-10 rounded-2xl bg-gradient-to-br from-rose-400/65 to-ciel-400/65 backdrop-blur-sm border border-white/20 p-6 max-w-2xl mx-auto text-sm text-white/70 space-y-2">
              <p><strong className="text-white">Enfants -15 ans :</strong> 6 € (assurance seule) si parents inscrits, sinon 95 €.</p>
              <p>Les cours non suivis ne sont ni déduits, ni remboursés.</p>
              <p><strong className="text-white">Compte bancaire :</strong> BE50 125-0107500-18</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-frost/30" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <AnimatedSection>
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-rose-400 mb-3">
              Événements
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-foreground mb-12">
              Temps forts 2026–2027
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {events.map((e, i) => (
              <AnimatedSection key={e.title} delay={i * 100}>
                <div className="rounded-[1.5rem] bg-gradient-to-br from-rose-500/65 to-ciel-400/65 backdrop-blur-sm border border-white/20 p-7 h-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-100/15">
                  <span className="inline-flex px-3 py-1 rounded-full bg-white/20 text-[0.65rem] font-bold text-white uppercase tracking-wider mb-4">
                    {e.date}
                  </span>
                  <h3 className="font-display text-lg font-extrabold text-white mb-1">{e.title}</h3>
                  <p className="text-xs text-white/60">{e.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 sm:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-frost/30" />
        <div className="relative text-center mx-auto max-w-3xl px-5 sm:px-8">
          <AnimatedSection>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Prêt à vous lancer ?
            </h2>
            <p className="text-foreground/40 text-lg sm:text-xl leading-relaxed mb-12 font-light">28 leçons, entraînements gratuits, assurance comprise.</p>
            <Link
              href="/inscription"
              className="btn-shine inline-flex items-center gap-2 px-10 py-4.5 text-base font-semibold text-white bg-gradient-to-r from-rose-500 via-rose-400 to-ciel-400 rounded-full hover:shadow-xl hover:shadow-rose-300/25 transition-all duration-500 hover:-translate-y-0.5"
            >
              S&apos;inscrire maintenant
              <ArrowUpRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
