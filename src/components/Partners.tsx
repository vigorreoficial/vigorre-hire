import { partners } from "../data/content";

export default function Partners() {
  const row = [...partners, ...partners];
  return (
    <section className="relative border-y border-mist/60 bg-white/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.22em] text-graphite-500">
          Empresas que confiam na inteligência Vigorre
        </p>
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-12">
            {row.map((p, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 whitespace-nowrap text-graphite-500 transition-all hover:text-navy-800"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-mist bg-paper">
                  <span className="font-display text-sm font-bold text-navy-700">{p.charAt(0)}</span>
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
