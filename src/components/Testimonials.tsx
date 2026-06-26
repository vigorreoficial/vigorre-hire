import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { SectionHeading, Reveal } from "./ui";

export default function Testimonials() {
  return (
    <section className="relative bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={<>Resultados · Clientes</>}
          title="Quem usa, transforma a forma de"
          highlight="contratar"
          subtitle="Padrão internacional reconhecido pela precisão científica e pelo impacto mensurável na retenção de talentos."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-mist/60 bg-paper p-6 shadow-sm shadow-navy-900/5 transition-all hover:-translate-y-1 hover:border-navy-400/40 hover:shadow-xl hover:shadow-navy-900/10">
                <Quote className="h-8 w-8 text-navy-300" />
                <div className="mt-2 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-navy-600 text-navy-600" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-graphite-700">"{t.quote}"</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-mist/60 pt-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full metallic-navy text-sm font-bold text-white">
                    {t.initials}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-navy-900">{t.name}</div>
                    <div className="text-xs text-graphite-500">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
