import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";

const items = [
  {
    quote:
      "Infynix deployed twelve senior software engineers into our core banking pods in less than three weeks—each candidate was an exceptional technical and operational fit. Their peer-to-peer technical screening is incredibly thorough, and their ongoing delivery support remains unmatched in the industry.",
    author: "Michael K.",
    role: "Chief Technology Officer, Enterprise Financial Services",
  },
  {
    quote:
      "The digital transformation and data platform roadmap designed by Infynix accelerated our product release cycle by forty percent. Their engineering pods immediately understood our complex healthcare compliance, HL7/FHIR, and security requirements.",
    author: "Sarah R.",
    role: "VP of Digital Engineering, Major National Health System",
  },
  {
    quote:
      "Over twenty years of technical scaling, we have partnered with numerous recruitment agencies. Infynix consistently supplies technical candidates who possess both high engineering competence and excellent cultural alignment. Our developer retention rate is stellar.",
    author: "James P.",
    role: "VP of Global Talent Acquisition, Fortune 200 Enterprise",
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
              <figure className="bg-background border border-border p-8 h-full flex flex-col rounded-2xl shadow-[0_10px_30px_-6px_rgba(13,83,128,0.02)] hover:shadow-[0_20px_48px_-8px_rgba(13,83,128,0.06)] hover:border-primary hover:-translate-y-0.5 duration-300 transition-all">
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