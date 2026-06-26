import { Check, ShieldCheck, Star } from "lucide-react";
import { plans } from "../data/content";
import { SectionHeading, Reveal } from "./ui";
import { cn } from "../utils/cn";

export default function Pricing() {
  return (
    <section id="planos" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-navy-400/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={<>Planos</>}
          title="Planos que escalam com a sua"
          highlight="operação de RH"
          subtitle="Todos os planos incluem SSL, backup diário e conformidade com a LGPD. Valores personalizados conforme a sua necessidade."
        />

        <div className="mt-14 grid items-stretch gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 100} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 sm:p-7",
                  p.featured
                    ? "border border-navy-600/30 bg-gradient-to-b from-navy-600/[0.07] to-white shadow-2xl shadow-navy-900/15 lg:-mt-4 lg:mb-4"
                    : "border border-mist/60 bg-white shadow-sm shadow-navy-900/5 hover:border-navy-400/40 hover:shadow-lg hover:shadow-navy-900/10"
                )}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full metallic-navy px-3 py-1 text-[11px] font-semibold text-white shadow-lg shadow-navy-800/30">
                    <Star className="h-3 w-3 fill-white" /> Mais Escolhido
                  </span>
                )}
                <h3 className="font-display text-xl font-semibold text-navy-900">{p.name}</h3>
                <p className="mt-1 text-sm text-graphite-600">{p.blurb}</p>
                <div className="mt-5 flex items-baseline gap-1">
                  <span className="font-display text-2xl font-bold text-navy-900">{p.price}</span>
                </div>
                <a
                  href="#contato"
                  className={cn(
                    "mt-5 inline-flex items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-all",
                    p.featured
                      ? "metallic-navy text-white shadow-lg shadow-navy-800/25 hover:brightness-110"
                      : "border border-navy-600/25 bg-white text-navy-800 hover:bg-navy-500/5"
                  )}
                >
                  {p.cta}
                </a>
                <div className="my-6 h-px hairline" />
                <ul className="flex flex-1 flex-col gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-graphite-700">
                      <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", p.featured ? "bg-navy-800" : "bg-navy-500/10")}>
                        <Check className={cn("h-3 w-3", p.featured ? "text-white" : "text-navy-700")} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-graphite-500">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-navy-600" /> SSL & Backup diário</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-navy-700" /> Conformidade LGPD</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-navy-800" /> ISO 27001</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
