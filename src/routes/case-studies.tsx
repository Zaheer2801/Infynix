import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { caseStudies } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Infynix Tech Solutions" },
      { name: "description", content: "Real-world outcomes across AI, cloud, data and digital transformation." },
      { property: "og:title", content: "Case Studies — Infynix Tech Solutions" },
      { property: "og:description", content: "Selected client outcomes from Infynix Tech Solutions." },
    ],
  }),
  component: CaseStudiesPage,
});

function CaseStudiesPage() {
  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.14em] text-primary">Case Studies</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Outcomes, not just deliverables</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">
            A selection of recent engagements across AI, cloud, data and digital transformation.
          </p>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6">
          {caseStudies.map((c) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              className="group rounded-xl border border-border bg-card p-7 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{c.industry}</div>
              <h2 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{c.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
              <div className="mt-4 text-xs text-muted-foreground">Client: {c.client}</div>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                Read case study <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}