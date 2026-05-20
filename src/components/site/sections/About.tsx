import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import { IconCheck, IconArrowRight } from "../Icons";
import { openContactModal } from "@/lib/contact-modal";

const items = [
  "Strategic talent acquisition across 50+ technology domains",
  "AI-driven digital transformation consulting",
  "Dedicated delivery model with 95%+ satisfaction rate",
  "DUNS registered, E-Verify compliant, fully insured",
  "Nationwide reach with deep local market expertise",
];

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            15 Years of Delivering IT Excellence
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Iresh Technologies is a full-service IT solutions and staffing company with a proven
            track record of empowering businesses to scale faster, operate smarter, and compete
            confidently in the digital era.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From startup to Fortune 500, we deliver the talent and technology that organizations
            need to win — combining domain expertise, innovative tools, and a relentless commitment
            to quality.
          </p>
          <button
            onClick={openContactModal}
            className="inline-flex items-center gap-2 mt-8 text-sm font-semibold text-primary hover:text-primary-hover"
          >
            Partner With Us <IconArrowRight width={16} height={16} />
          </button>
        </Reveal>

        <Reveal delay={120}>
          <ul className="space-y-5 lg:pt-16">
            {items.map((it) => (
              <li key={it} className="flex gap-4 items-start border-b border-border pb-5">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center bg-primary/10 text-primary">
                  <IconCheck width={14} height={14} strokeWidth={2.5} />
                </span>
                <span className="text-foreground/90 text-sm leading-relaxed">{it}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}