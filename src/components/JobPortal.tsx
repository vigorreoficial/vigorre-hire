import { useState } from "react";
import { Search, MapPin, Sparkles, BadgeCheck, ArrowUpRight } from "lucide-react";
import { hireFeatures, sampleJobs } from "../data/content";
import { Reveal, SectionHeading } from "./ui";

const tabs = ["Vagas Recomendadas", "Seu Perfil DISC", "Indique e Ganhe"];

function MatchRing({ value }: { value: number }) {
  const r = 18;
  const c = 2 * Math.PI * r;
  const off = c - (value / 100) * c;
  return (
    <div className="relative flex h-12 w-12 items-center justify-center">
      <svg className="h-12 w-12 -rotate-90" viewBox="0 0 44 44">
        <circle cx="22" cy="22" r={r} fill="none" stroke="rgba(34,59,99,0.12)" strokeWidth="3" />
        <circle cx="22" cy="22" r={r} fill="none" stroke="url(#mg)" strokeWidth="3" strokeLinecap="round" strokeDasharray={c} strokeDashoffset={off} />
        <defs>
          <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#223B63" />
            <stop offset="100%" stopColor="#4A6F9B" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute font-display text-[11px] font-bold text-navy-800">{value}%</span>
    </div>
  );
}

export default function JobPortal() {
  const [active, setActive] = useState(0);
  return (
    <section id="hire" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[30rem] w-[30rem] rounded-full bg-navy-400/10 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={<>Novo · Vigorre Hire™</>}
          title="Conectando talentos e"
          highlight="oportunidades"
          subtitle="Plataforma independente para candidatos e empresas. Cadastre-se, publique vagas, encontre afiliados e acelere contratações com inteligência comportamental integrada."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          {/* mock app */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-mist/60 bg-white shadow-2xl shadow-navy-900/12">
              {/* top bar */}
              <div className="flex items-center gap-2 border-b border-mist/60 bg-paper px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-silver-300" />
                <span className="h-3 w-3 rounded-full bg-silver-400" />
                <span className="h-3 w-3 rounded-full bg-navy-400" />
                <div className="ml-3 hidden items-center gap-2 rounded-md bg-white px-3 py-1 text-xs text-graphite-500 ring-1 ring-mist/60 sm:flex">
                  <Search className="h-3.5 w-3.5" /> vigorre.hire / vagas
                </div>
              </div>
              <div className="p-4 sm:p-5">
                {/* search */}
                <div className="flex items-center gap-2 rounded-xl border border-mist/70 bg-paper px-3 py-2.5">
                  <Search className="h-4 w-4 text-graphite-500" />
                  <span className="text-sm text-graphite-500">Engenheiro de dados, Remoto...</span>
                  <span className="ml-auto rounded-lg metallic-navy px-3 py-1 text-xs font-semibold text-white">Buscar</span>
                </div>
                {/* tabs */}
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {tabs.map((t, i) => (
                    <button
                      key={t}
                      onClick={() => setActive(i)}
                      className={`rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                        active === i ? "bg-navy-800 text-white" : "bg-ice text-graphite-600 ring-1 ring-mist/60 hover:text-navy-800"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                {/* job list */}
                <div className="mt-4 space-y-2.5">
                  {sampleJobs.map((j) => (
                    <div
                      key={j.role}
                      className="group flex items-center gap-3 rounded-xl border border-mist/60 bg-paper p-3 transition-all hover:border-navy-400/40 hover:bg-white"
                    >
                      <MatchRing value={j.match} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <h4 className="truncate text-sm font-semibold text-navy-900">{j.role}</h4>
                          <BadgeCheck className="h-3.5 w-3.5 shrink-0 text-navy-600" />
                        </div>
                        <div className="mt-0.5 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[11px] text-graphite-500">
                          <span className="font-semibold text-navy-800">{j.company}</span>
                          <span className="flex items-center gap-0.5"><MapPin className="h-3 w-3" />{j.loc}</span>
                          <span className="rounded bg-ice px-1.5 py-0.5 text-graphite-600 ring-1 ring-mist/60">{j.type}</span>
                          <span className="rounded bg-navy-500/10 px-1.5 py-0.5 font-medium text-navy-700">{j.tag}</span>
                        </div>
                      </div>
                      <button className="hidden shrink-0 rounded-lg border border-mist bg-white px-3 py-1.5 text-xs font-semibold text-navy-800 transition-colors group-hover:border-navy-500/40 group-hover:bg-navy-500/10 sm:block">
                        Aplicar
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* features */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {hireFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group flex h-full items-start gap-3 rounded-xl border border-mist/60 bg-white p-4 shadow-sm shadow-navy-900/5 transition-all hover:border-navy-400/40 hover:shadow-md hover:shadow-navy-900/8">
                  <span className="text-2xl">{f.icon}</span>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">{f.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-graphite-600">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal delay={320}>
              <a
                href="#contato"
                className="group flex items-center justify-between rounded-xl metallic-navy p-4 text-white shadow-lg shadow-navy-800/20 transition-all hover:brightness-110"
              >
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <Sparkles className="h-4 w-4 text-silver-300" /> Acessar Vigorre Hire™
                </span>
                <ArrowUpRight className="h-4 w-4 text-silver-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
