import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";

export function CtaBanner() {
  return (
    <section className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to Scale Your Business?
          </h2>
          <p className="mt-5 text-dark-muted text-base md:text-lg max-w-2xl mx-auto">
            Join 350+ enterprises who trust Iresh Technologies for talent and technology solutions
            that deliver measurable ROI.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Start a Conversation <IconArrowRight width={16} height={16} />
            </a>
            <a
              href="tel:+12192490009"
              className="inline-flex items-center gap-2 border border-dark-border hover:border-primary hover:text-primary px-7 py-3.5 text-sm font-semibold transition-colors"
            >
              Call Us Today: +1 (219) 249-0009
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}