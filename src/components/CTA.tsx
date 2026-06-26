import { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { Reveal } from "./ui";

export default function CTA() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contato" className="relative scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-navy-800/40 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-8 shadow-2xl shadow-navy-900/30 sm:p-12">
            {/* metallic texture */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-navy-500/40 blur-[100px]" />
              <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-silver-400/15 blur-[100px]" />
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
              />
              <div className="absolute inset-x-0 top-0 h-px hairline" />
            </div>

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold text-silver-300">
                  <Sparkles className="h-3.5 w-3.5" /> Fale com um especialista
                </span>
                <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                  Pronto para contratar com{" "}
                  <span className="text-gradient-silver">inteligência?</span>
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-silver-300 sm:text-base">
                  Receba uma demonstração personalizada do Vigorre One™ e descubra como dados
                  comportamentais podem elevar a retenção e o fit cultural da sua empresa.
                </p>
                <ul className="mt-6 space-y-2.5">
                  {["Demo guiada em 30 minutos", "Diagnóstico do seu processo atual", "Proposta sob medida"].map((b) => (
                    <li key={b} className="flex items-center gap-2.5 text-sm text-silver-300">
                      <CheckCircle2 className="h-4 w-4 text-silver-300" /> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* form */}
              <div className="rounded-2xl border border-white/15 bg-white p-6 shadow-2xl shadow-black/30 sm:p-7">
                {sent ? (
                  <div className="flex h-full min-h-[16rem] flex-col items-center justify-center text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-navy-500/10 ring-1 ring-navy-600/30">
                      <CheckCircle2 className="h-7 w-7 text-navy-700" />
                    </div>
                    <h3 className="mt-4 font-display text-lg font-semibold text-navy-900">Recebido!</h3>
                    <p className="mt-1 text-sm text-graphite-600">Nossa equipe entrará em contato em até 1 dia útil.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                    className="space-y-3"
                  >
                    <div className="grid gap-3 sm:grid-cols-2">
                      <Field label="Nome" placeholder="Seu nome" />
                      <Field label="Empresa" placeholder="Sua empresa" />
                    </div>
                    <Field label="E-mail corporativo" placeholder="voce@empresa.com" type="email" />
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-graphite-600">Porte da empresa</label>
                      <select className="w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-sm text-navy-800 outline-none transition-colors focus:border-navy-500/50 focus:ring-2 focus:ring-navy-500/20">
                        <option>Startup</option>
                        <option>Pequena e Média</option>
                        <option>Grande / Corporativo</option>
                        <option>Multinacional</option>
                      </select>
                    </div>
                    <button
                      type="submit"
                      className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl metallic-navy px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-navy-800/25 transition-all hover:brightness-110"
                    >
                      Agendar Demonstração
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                    <p className="text-center text-[11px] text-graphite-500">
                      Ao enviar, você concorda com nossa política de privacidade (LGPD).
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-graphite-600">{label}</label>
      <input
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-lg border border-mist bg-paper px-3 py-2.5 text-sm text-navy-800 placeholder:text-graphite-500 outline-none transition-colors focus:border-navy-500/50 focus:ring-2 focus:ring-navy-500/20"
      />
    </div>
  );
}
