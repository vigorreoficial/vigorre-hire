import { ArrowUpRight } from "lucide-react";
import { modules, accentMap } from "../data/content";
import { SectionHeading, Reveal } from "./ui";

export default function Modules() {
  return (
    <section id="modulos" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="pointer-events-none absolute left-1/2 top-1/4 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-navy-400/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={<>O ecossistema · 12 módulos</>}
          title="Vigorre One™, uma plataforma"
          highlight="inteira e conectada"
          subtitle="Cada módulo foi desenhado como parte de uma arquitetura única. Do portal mundial de vagas ao BI executivo, tudo opera sobre os mesmos dados, identidade e inteligência."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {modules.map((m, i) => {
            const a = accentMap[m.accent];
            const Icon = m.icon;
            return (
              <Reveal key={m.id} delay={(i % 3) * 80}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-mist/60 bg-white p-6 shadow-sm shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className="pointer-events-none absolute inset-x-0 -top-px h-px hairline opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div
                    className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${a.from} to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-[0.12]`}
                  />

                  <div className="flex items-start justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-navy-500/10 ring-1 ${a.ring} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-6 w-6 ${a.text}`} />
                    </div>
                    <span className="font-display text-3xl font-bold text-navy-100 transition-colors group-hover:text-navy-200">
                      {m.n}
                    </span>
                  </div>

                  <div className="mt-5">
                    <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${a.text}`}>{m.tag}</span>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-navy-900">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-graphite-600">{m.desc}</p>
                  </div>

                  <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-graphite-500 transition-colors group-hover:text-navy-700">
                    Explorar módulo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
