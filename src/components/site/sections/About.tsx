import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import { IconCheck, IconArrowRight } from "../Icons";
import { openContactModal } from "@/lib/contact-modal";

const items = [
  "Strategic talent acquisition across 50+ specialized engineering domains",
  "Production-ready Generative AI systems and MLOps consulting",
  "Dedicated delivery frameworks ensuring a 95%+ client retention rate",
  "Fully compliant frameworks: DUNS registered, E-Verify compliant, and fully insured",
  "Global delivery capabilities backed by deep local market knowledge",
];

export function About() {
  return (
    <section id="about" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-16 items-start">
        <Reveal>
          <SectionLabel>Who We Are</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Over Fifteen Years of Delivering Technical Excellence
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Infynix Tech Solutions is a premium, full-service technology solutions and technical staffing partner
            with an established history of enabling enterprises to scale seamlessly, automate processes, and
            build long-term value in a rapidly evolving market.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Serving high-growth startups and global Fortune 500 enterprises alike, we deliver the technical
            specialists and robust custom systems required to win—unifying deep domain expertise, innovative
            workflows, and a commitment to delivery quality.
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