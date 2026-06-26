import { type ReactNode } from "react";
import { useScrollReveal } from "../lib/hooks";
import { cn } from "../utils/cn";

/** Wraps children and fades/slides them in when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-navy-600/15 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-navy-700 shadow-sm shadow-navy-900/5",
        className
      )}
    >
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  highlight?: string;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" ? "items-center text-center" : "items-start text-left")}>
      {eyebrow && <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>}
      <Reveal delay={80}>
        <h2 className="font-display text-3xl font-semibold leading-[1.12] tracking-tight text-navy-900 sm:text-4xl md:text-[2.75rem]">
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className={cn("max-w-2xl text-base leading-relaxed text-graphite-600 sm:text-lg", align === "center" && "mx-auto")}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
