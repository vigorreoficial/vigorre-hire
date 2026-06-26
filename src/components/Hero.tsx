import { ArrowRight, Play, Sparkles, ShieldCheck, TrendingUp, Activity } from "lucide-react";
import { heroStats } from "../data/content";
import { useInView, useCountUp } from "../lib/hooks";

function StatItem({ stat, active }: { stat: (typeof heroStats)[number]; active: boolean }) {
  const num = useCountUp(stat.value, active);
  const display = stat.value >= 1000 ? Math.round(num).toLocaleString("pt-BR") : num.toFixed(stat.value % 1 === 0 ? 0 : 1);
  return (
    <div className="text-center sm:text-left">
      <div className="font-display text-2xl font-bold text-navy-900 sm:text-3xl">
        {display}
        {stat.suffix}
        {stat.star && <span className="ml-1 text-navy-600">★</span>}
      </div>
      <div className="text-xs font-medium text-graphite-500 sm:text-sm">{stat.label}</div>
    </div>
  );
}

function ConsoleCard() {
  return (
    <div className="relative">
      {/* soft navy glow */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-navy-500/20 via-navy-600/10 to-silver-400/15 blur-2xl" />
      <div className="relative w-full max-w-md rounded-2xl border border-mist/70 bg-white p-5 shadow-2xl shadow-navy-900/15 animate-float">
        {/* header */}
        <div className="flex items-center justify-between border-b border-mist/60 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg metallic-navy">
              <Activity className="h-4 w-4 text-white" />
            </span>
            <span className="font-display text-sm font-semibold text-navy-900">Vigorre One™ · Console</span>
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-navy-600">
            <span className="h-1.5 w-1.5 rounded-full bg-navy-600 animate-pulse" /> AO VIVO
          </span>
        </div>

        {/* match score */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="col-span-1 rounded-xl bg-navy-500/10 p-3 ring-1 ring-navy-500/20">
            <div className="text-[11px] font-medium text-navy-700/80">Match Cultural</div>
            <div className="font-display text-2xl font-bold text-navy-800">92%</div>
          </div>
          <div className="col-span-2 rounded-xl bg-paper p-3 ring-1 ring-mist/70">
            <div className="mb-2 flex items-center justify-between text-[11px] text-graphite-500">
              <span>Fit por competência</span>
              <TrendingUp className="h-3.5 w-3.5 text-navy-600" />
            </div>
            <div className="flex h-10 items-end gap-1.5">
              {[55, 72, 48, 88, 65, 94, 78].map((h, i) => (
                <div key={i} className="flex h-full flex-1 items-end overflow-hidden rounded-sm bg-ice">
                  <div className="w-full rounded-sm metallic-navy" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DISC profile */}
        <div className="mt-3 rounded-xl bg-paper p-3 ring-1 ring-mist/70">
          <div className="mb-2 text-[11px] font-medium text-graphite-500">Perfil DISC · Dominância</div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { l: "D", v: 82 },
              { l: "I", v: 64 },
              { l: "S", v: 71 },
              { l: "C", v: 58 },
            ].map((b) => (
              <div key={b.l} className="flex flex-col items-center gap-1">
                <div className="flex h-16 w-full items-end overflow-hidden rounded-md bg-ice">
                  <div className="w-full rounded-md metallic-navy" style={{ height: `${b.v}%`, opacity: 0.45 + b.v / 250 }} />
                </div>
                <span className="text-[10px] font-semibold text-graphite-600">{b.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI insight */}
        <div className="mt-3 flex items-start gap-2 rounded-xl bg-navy-800 p-3">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-silver-300" />
          <p className="text-[11px] leading-relaxed text-silver-300">
            <span className="font-semibold text-white">IA Recrutadora:</span> candidato com alta
            aderência à liderança e clima da equipe. Recomendado para shortlist.
          </p>
        </div>
      </div>

      {/* floating mini badges */}
      <div className="absolute -left-6 top-16 hidden animate-float-slow rounded-xl border border-mist/70 bg-white px-3 py-2 shadow-xl shadow-navy-900/10 sm:flex sm:items-center sm:gap-2">
        <ShieldCheck className="h-4 w-4 text-navy-600" />
        <span className="text-[11px] font-semibold text-navy-800">ISO 27001 · LGPD</span>
      </div>
      <div className="absolute -right-4 bottom-10 hidden animate-float rounded-xl border border-mist/70 bg-white px-3 py-2 shadow-xl shadow-navy-900/10 sm:flex sm:items-center sm:gap-2">
        <span className="font-display text-base font-bold text-navy-800">94%</span>
        <span className="text-[11px] font-semibold text-graphite-600">Retenção</span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg mask-fade-b opacity-70" />
        <div className="absolute -top-40 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-navy-400/15 blur-[120px] animate-aurora" />
        <div className="absolute -left-32 top-20 h-[28rem] w-[28rem] rounded-full bg-navy-500/12 blur-[120px] animate-aurora" />
        <div className="absolute -right-32 top-40 h-[26rem] w-[26rem] rounded-full bg-silver-400/20 blur-[120px] animate-aurora" />
        <div className="absolute inset-x-0 top-0 h-px hairline" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          {/* left */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-navy-600/15 bg-white px-4 py-1.5 text-xs font-semibold text-navy-700 shadow-sm shadow-navy-900/5">
              <span className="flex h-2 w-2 rounded-full bg-navy-600 animate-pulse" />
              HR Tech Premium · Padrão Internacional
            </div>

            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight text-navy-950 sm:text-6xl lg:text-[4.25rem]">
              Inteligência Humana{" "}
              <span className="text-gradient">aplicada</span>{" "}
              à gestão de{" "}
              <span className="text-gradient">pessoas</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite-600 sm:text-lg">
              Plataforma completa de People Analytics, assessment comportamental e recrutamento
              inteligente. Conecte tecnologia, dados e humanização para resultados mensuráveis.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl metallic-navy px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-navy-800/25 transition-all hover:shadow-navy-800/40 hover:brightness-110 sm:w-auto"
              >
                Agendar Demonstração
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#modulos"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-mist bg-white px-7 py-3.5 text-sm font-semibold text-navy-800 shadow-sm shadow-navy-900/5 transition-all hover:border-navy-400/40 hover:bg-navy-500/5 sm:w-auto"
              >
                <Play className="h-4 w-4 text-navy-600" />
                Explorar Plataforma
              </a>
            </div>

            {/* stats */}
            <div
              ref={ref}
              className="mt-12 grid w-full max-w-md grid-cols-3 gap-6 border-t border-mist pt-6 sm:max-w-lg"
            >
              {heroStats.map((s) => (
                <StatItem key={s.label} stat={s} active={inView} />
              ))}
            </div>
          </div>

          {/* right */}
          <div className="flex justify-center lg:justify-end">
            <ConsoleCard />
          </div>
        </div>
      </div>
    </section>
  );
}
