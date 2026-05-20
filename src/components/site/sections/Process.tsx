import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";

const steps = [
  ["01", "Discovery", "Deep-dive into your goals, tech stack, and talent gaps to design the right solution."],
  ["02", "Strategy", "Craft a tailored roadmap with clear milestones, timelines, and success metrics."],
  ["03", "Sourcing", "Tap our 500K+ talent network and AI matching for the perfect candidate profile."],
  ["04", "Delivery", "Agile sprint execution with daily standups, transparent tracking, and rapid iteration."],
  ["05", "Growth", "Continuous optimization, upskilling, and partnership expansion for long-term success."],
];

export function Process() {
  return (
    <section id="process" className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>How We Work</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Our Proven Delivery Process
          </h2>
          <p className="mt-5 text-dark-muted max-w-2xl">
            A streamlined, transparent approach that gets you results — fast.
          </p>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-5 left-0 right-0 h-px bg-dark-border" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            {steps.map(([n, t, d], i) => (
              <Reveal key={n} delay={i * 80}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground text-sm font-bold">
                      {n}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{t}</h3>
                  <p className="mt-2 text-sm text-dark-muted leading-relaxed">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}