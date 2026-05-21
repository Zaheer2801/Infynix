import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Iresh Technologies" },
      { name: "description", content: "15+ years delivering IT staffing, AI solutions and digital transformation." },
      { property: "og:title", content: "About Iresh Technologies" },
      { property: "og:description", content: "Strategic IT partner for global enterprises." },
    ],
  }),
  component: () => (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.14em] text-primary">About Us</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Strategic IT partner for global enterprises</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">
            15+ years delivering IT staffing, AI solutions and digital transformation across the US and UK.
          </p>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-10">
          <p className="text-muted-foreground leading-relaxed">
            Iresh Technologies combines deep technical expertise with the agility of a startup. From our St. Louis and London offices, we serve clients across banking, healthcare, manufacturing, retail, telecom and the public sector — from elite staffing to full-platform transformation.
          </p>
          <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Let's work together</h3>
            <p className="mt-2 text-muted-foreground">Tell us about your initiative.</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <button onClick={openContactModal} className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md">
                Request a Callback <ArrowRight size={16} />
              </button>
              <Link to="/careers" className="inline-flex items-center gap-2 border border-border text-foreground px-6 py-3 font-semibold rounded-md hover:bg-secondary transition-colors">
                See open roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  ),
});