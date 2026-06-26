import { Check } from "lucide-react";
import { features, accentMap } from "../data/content";
import { useInView } from "../lib/hooks";
import { Reveal, SectionHeading } from "./ui";

const axes = ["Dominância", "Influência", "Estabilidade", "Conformidade", "Emocional", "Cultural"];
const values = [0.82, 0.64, 0.71, 0.58, 0.76, 0.92];

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const a = (angleDeg - 90) * (Math.PI / 180);
  return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
}

function Radar({ active }: { active: boolean }) {
  const cx = 150;
  const cy = 150;
  const R = 108;
  const n = axes.length;
  const angle = 360 / n;

  const rings = [0.25, 0.5, 0.75, 1];
  const ringPath = (frac: number) =>
    Array.from({ length: n }, (_, i) => polar(cx, cy, R * frac, i * angle))
      .map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`)
      .join(" ") + " Z";

  const dataPts = values.map((v, i) => polar(cx, cy, R * v, i * angle));
  const dataPath =
    dataPts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ") + " Z";

  return (
    <svg viewBox="0 0 300 300" className="h-full w-full">
      <defs>
        <linearGradient id="radarFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#355C8B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4A6F9B" stopOpacity="0.18" />
        </linearGradient>
        <linearGradient id="radarStroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#223B63" />
          <stop offset="100%" stopColor="#4A6F9B" />
        </linearGradient>
      </defs>

      {rings.map((f) => (
        <path key={f} d={ringPath(f)} fill="none" stroke="rgba(34,59,99,0.1)" strokeWidth={1} />
      ))}
      {axes.map((label, i) => {
        const p = polar(cx, cy, R, i * angle);
        const lp = polar(cx, cy, R + 24, i * angle);
        return (
          <g key={label}>
            <line x1={cx} y1={cy} x2={p.x} y2={p.y} stroke="rgba(34,59,99,0.08)" strokeWidth={1} />
            <text x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle" className="fill-graphite-500 text-[9px] font-medium">
              {label}
            </text>
          </g>
        );
      })}

      <g style={{ transformBox: "fill-box", transformOrigin: "center", transform: active ? "scale(1)" : "scale(0.2)", opacity: active ? 1 : 0, transition: "all 1s cubic-bezier(0.22,1,0.36,1)" }}>
        <path d={dataPath} fill="url(#radarFill)" stroke="url(#radarStroke)" strokeWidth={2} />
        {dataPts.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={3.5} fill="#fff" stroke="#223B63" strokeWidth={1.5} />
        ))}
      </g>
    </svg>
  );
}

export default function Features() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <section id="plataforma" className="relative scroll-mt-24 bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* radar visual */}
          <Reveal>
            <div ref={ref} className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-tr from-navy-500/15 to-silver-400/15 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-mist/60 bg-paper p-6 shadow-2xl shadow-navy-900/12">
                <div className="mb-2 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-widest text-graphite-500">Assessment Comportamental</div>
                    <div className="font-display text-lg font-semibold text-navy-900">Perfil DISC + Inteligência</div>
                  </div>
                  <span className="rounded-full bg-navy-800 px-3 py-1 text-xs font-semibold text-white">Fit 92%</span>
                </div>
                <Radar active={inView} />
                <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                  {[
                    { l: "Match", v: "92%" },
                    { l: "Engaj.", v: "87%" },
                    { l: "Risco", v: "Baixo" },
                  ].map((s) => (
                    <div key={s.l} className="rounded-lg bg-ice py-2 ring-1 ring-mist/60">
                      <div className="font-display text-sm font-bold text-navy-800">{s.v}</div>
                      <div className="text-[10px] text-graphite-500">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* capabilities */}
          <div>
            <SectionHeading
              align="left"
              eyebrow={<>People Analytics</>}
              title="Decisões de pessoas baseadas em"
              highlight="ciência e dados"
              subtitle="Metodologias validadas academicamente que transformam comportamento em indicadores acionáveis para o seu negócio."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((f, i) => {
                const a = accentMap[f.accent];
                const Icon = f.icon;
                return (
                  <Reveal key={f.title} delay={i * 70}>
                    <div className="group flex h-full gap-3 rounded-xl border border-mist/60 bg-white p-4 shadow-sm shadow-navy-900/5 transition-all hover:border-navy-400/40 hover:shadow-md hover:shadow-navy-900/8">
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-500/10 ring-1 ${a.ring}`}>
                        <Icon className={`h-5 w-5 ${a.text}`} />
                      </div>
                      <div>
                        <h4 className="flex items-center gap-1.5 text-sm font-semibold text-navy-900">
                          {f.title}
                          <Check className="h-3.5 w-3.5 text-navy-600 opacity-0 transition-opacity group-hover:opacity-100" />
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-graphite-600">{f.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
