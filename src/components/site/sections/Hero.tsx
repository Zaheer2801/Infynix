import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";

const stats = [
  ["15+", "Years Experience"],
  ["2500+", "Placements"],
  ["350+", "Enterprise Clients"],
  ["95%", "Client Retention"],
];

export function Hero() {
  return (
    <section id="top" className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-28">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              Most Trusted IT Services & Staffing Company
            </span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="max-w-4xl text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05]">
            Transforming Business <br className="hidden md:block" />
            Through Smart Tech
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-dark-muted leading-relaxed">
            Iresh Technologies delivers enterprise-grade IT staffing, AI-powered solutions, and
            digital transformation services that fuel sustainable growth.
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#services"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Explore Services <IconArrowRight width={16} height={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-dark-border text-dark-foreground hover:border-primary hover:text-primary px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Talk to an Expert
            </a>
          </div>
        </Reveal>
        <Reveal delay={320}>
          <div className="mt-14 flex flex-wrap gap-x-10 gap-y-4 text-sm">
            {stats.map(([n, l]) => (
              <div key={l} className="flex items-baseline gap-2">
                <span className="text-primary font-bold text-lg">{n}</span>
                <span className="text-dark-muted">{l}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}