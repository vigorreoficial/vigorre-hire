import { Target, Eye, Gem } from "lucide-react";
import { SectionHeading, Reveal } from "./ui";

const items = [
  {
    icon: Target,
    title: "Missão",
    accent: "text-navy-700",
    ring: "ring-navy-600/20",
    body: "Democratizar o acesso a ferramentas de People Analytics de alta performance, permitindo que empresas de todos os portes tomem decisões de gestão de pessoas baseadas em dados, ética e humanização.",
  },
  {
    icon: Eye,
    title: "Visão",
    accent: "text-navy-600",
    ring: "ring-navy-500/20",
    body: "Ser a plataforma líder em inteligência comportamental na América Latina até 2030, reconhecida pela precisão científica, inovação contínua e impacto mensurável na retenção e desenvolvimento de talentos.",
  },
  {
    icon: Gem,
    title: "Valores",
    accent: "text-graphite-600",
    ring: "ring-graphite-500/20",
    body: "Ética e Transparência com dados tratados sob LGPD. Ciência Aplicada em metodologias validadas. Humanização com tecnologia a serviço das pessoas. Excelência em cada entrega.",
  },
];

export default function Mission() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={<>Propósito</>}
          title="Tecnologia a serviço das"
          highlight="pessoas"
          subtitle="Mais que uma plataforma, um compromisso com ética, ciência e humanização em cada decisão."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-mist/60 bg-white p-7 shadow-sm shadow-navy-900/5 transition-all hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-xl hover:shadow-navy-900/10">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-500/10 ring-1 ${it.ring}`}>
                    <Icon className={`h-7 w-7 ${it.accent}`} />
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">{it.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-graphite-600">{it.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
