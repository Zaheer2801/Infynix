import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";

const items = [
  {
    quote:
      "Iresh placed 12 senior engineers with us in under 3 weeks — all exceptional fits. Their screening process is genuinely rigorous, and their account management is best-in-class.",
    author: "Michael K.",
    role: "CTO, FinTech Enterprise",
  },
  {
    quote:
      "The digital transformation roadmap Iresh built for us reduced our time-to-market by 40%. Their team understood our healthcare compliance needs without any hand-holding.",
    author: "Sarah R.",
    role: "VP Technology, Health System",
  },
  {
    quote:
      "We've worked with many staffing firms over 20 years. Iresh consistently delivers candidates who are technically strong AND culturally aligned. Retention rate is exceptional.",
    author: "James P.",
    role: "Head of Talent, Fortune 200",
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Client Stories</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Trusted by Industry Leaders Worldwide
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <Reveal key={t.author} delay={i * 80}>
              <figure className="bg-background border border-border p-8 h-full flex flex-col border-t-2 border-t-transparent hover:border-t-primary transition-colors">
                <svg width="28" height="28" viewBox="0 0 24 24" className="text-primary" fill="currentColor">
                  <path d="M7 7h4v4H7c0 2 1 3 3 4l-1 2c-3-1-5-3-5-7V7zm9 0h4v4h-4c0 2 1 3 3 4l-1 2c-3-1-5-3-5-7V7z" />
                </svg>
                <blockquote className="mt-5 text-foreground/90 leading-relaxed text-sm flex-1">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border">
                  <div className="font-semibold text-foreground text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}