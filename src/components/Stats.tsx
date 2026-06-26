import { ShieldCheck } from "lucide-react";
import { trustStats } from "../data/content";
import { useInView, useCountUp } from "../lib/hooks";
import { Reveal } from "./ui";

function StatCard({ stat, active, i }: { stat: (typeof trustStats)[number]; active: boolean; i: number }) {
  const num = useCountUp(stat.value, active);
  const display = stat.value >= 1000 ? Math.round(num) : num.toFixed(0);
  return (
    <Reveal delay={i * 90}>
      <div className="group relative overflow-hidden rounded-2xl border border-mist/60 bg-white p-6 text-center shadow-sm shadow-navy-900/5 transition-all hover:-translate-y-0.5 hover:border-navy-400/40 hover:shadow-lg hover:shadow-navy-900/10">
        <div className="pointer-events-none absolute inset-x-0 -top-px h-px hairline opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="font-display text-4xl font-bold text-gradient sm:text-5xl">
          {stat.value >= 1000 ? Number(display).toLocaleString("pt-BR") : display}
          {stat.suffix}
        </div>
        <div className="mt-2 text-sm font-medium text-graphite-600">{stat.label}</div>
      </div>
    </Reveal>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="relative py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {trustStats.map((s, i) => (
            <StatCard key={s.label} stat={s} active={inView} i={i} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-graphite-500">
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-navy-600" /> Segurança de Dados</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-navy-700" /> Conformidade LGPD</span>
          <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-navy-800" /> SSL & Backup diário</span>
        </div>
      </div>
    </section>
  );
}
