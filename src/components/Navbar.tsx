import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";

const links = [
  { label: "Plataforma", href: "#plataforma" },
  { label: "Módulos", href: "#modulos" },
  { label: "Vigorre Hire™", href: "#hire" },
  { label: "Setores", href: "#setores" },
  { label: "Planos", href: "#planos" },
];

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl metallic-navy shadow-lg shadow-navy-800/30">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="url(#lg)" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
          <defs>
            <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F5F3EF" />
              <stop offset="1" stopColor="#D8DADF" />
            </linearGradient>
          </defs>
          <path d="M5 4 L12 20 L19 4" />
        </svg>
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-silver-300 ring-2 ring-ice" />
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-navy-900">
        Vigorre <span className="text-navy-500">One™</span>
      </span>
    </a>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "py-2.5" : "py-4")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5",
            scrolled ? "glass-strong shadow-xl shadow-navy-900/10" : "border border-transparent"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-lg px-3.5 py-2 text-sm font-medium text-graphite-600 transition-colors hover:bg-navy-500/5 hover:text-navy-900"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a href="#hire" className="rounded-lg px-4 py-2 text-sm font-medium text-graphite-600 transition-colors hover:text-navy-900">
              Entrar
            </a>
            <a
              href="#contato"
              className="group inline-flex items-center gap-1.5 rounded-lg metallic-navy px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-navy-800/25 transition-all hover:shadow-navy-800/40 hover:brightness-110"
            >
              Agendar Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-navy-900 md:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "mt-2 overflow-hidden rounded-2xl transition-all duration-300 md:hidden",
            open ? "max-h-[28rem] glass-strong shadow-xl shadow-navy-900/10" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 p-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-medium text-graphite-600 transition-colors hover:bg-navy-500/5 hover:text-navy-900"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="mt-1 inline-flex items-center justify-center gap-1.5 rounded-lg metallic-navy px-4 py-3 text-sm font-semibold text-white"
            >
              Agendar Demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
