import { Mail, ArrowRight } from "lucide-react";

const cols = [
  {
    title: "Plataforma",
    links: ["People Analytics", "Análise DISC", "Inteligência Emocional", "Fit Cultural", "Assessment Premium"],
  },
  {
    title: "Vigorre One™",
    links: ["Portal de Vagas", "ATS Inteligente", "IA Recrutadora", "Interview AI", "BI Executivo"],
  },
  {
    title: "Empresa",
    links: ["Sobre Nós", "Setores", "Planos", "Blog", "Carreiras"],
  },
];

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.2 8.2h4.56V24H.2V8.2zM8.34 8.2h4.37v2.14h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-6.62c0-1.58-.03-3.62-2.2-3.62-2.2 0-2.54 1.72-2.54 3.5V24H8.34V8.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative border-t border-navy-800 bg-navy-950 text-silver-300">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px hairline" />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          {/* brand + newsletter */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl metallic-navy shadow-lg shadow-black/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#lfg)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
                  <defs>
                    <linearGradient id="lfg" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#F5F3EF" />
                      <stop offset="1" stopColor="#D8DADF" />
                    </linearGradient>
                  </defs>
                  <path d="M5 4 L12 20 L19 4" />
                </svg>
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-white">
                Vigorre <span className="text-silver-400">One™</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver-400">
              Inteligência Humana e People Analytics com padrão internacional. Tecnologia, dados e
              humanização para decisões de pessoas.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-5 flex max-w-xs items-center gap-2 rounded-xl border border-white/10 bg-white/5 p-1.5">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="w-full bg-transparent px-2 py-1.5 text-sm text-white placeholder:text-silver-400 outline-none"
              />
              <button type="submit" aria-label="Inscrever" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg metallic-silver text-navy-900">
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold text-white">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-sm text-silver-400 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-silver-400">© 2026 Vigorre One™. Todos os direitos reservados.</p>
          <div className="flex items-center gap-3">
            {[LinkedinIcon, InstagramIcon, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-silver-400 transition-colors hover:border-white/25 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3 text-[11px] text-silver-400">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">ISO 27001</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">LGPD</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
