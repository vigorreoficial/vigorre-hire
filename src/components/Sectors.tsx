import { Check } from "lucide-react";
import { sectors, accentMap } from "../data/content";
import { SectionHeading, Reveal } from "./ui";

export default function Sectors() {
  return (
    <section id="setores" className="relative scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={<>Soluções por setor</>}
          title="Recrutamento especialista para cada"
          highlight="realidade de negócio"
          subtitle="Modelos desenhados para os desafios, normas e culturas específicas de cada cadeia produtiva."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {sectors.map((s, i) => {
            const a = accentMap[s.accent];
            return (
              <Reveal key={s.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-mist/60 bg-paper p-6 shadow-sm shadow-navy-900/5 transition-all duration-300 hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${a.from} to-transparent opacity-[0.08] blur-2xl transition-opacity group-hover:opacity-20`} />
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-mist/60 bg-white text-3xl">
                    {s.emoji}
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-navy-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-graphite-600">{s.desc}</p>
                  <ul className="mt-5 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-graphite-700">
                        <span className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-navy-500/10 ${a.ring} ring-1`}>
                          <Check className={`h-3 w-3 ${a.text}`} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
