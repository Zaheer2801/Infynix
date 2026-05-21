import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { caseStudies } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const c = caseStudies.find((x) => x.slug === params.slug);
    const title = c ? `${c.title} — Iresh Technologies` : "Case Study — Iresh Technologies";
    return {
      meta: [
        { title },
        { name: "description", content: c?.summary ?? "Iresh Technologies case study." },
        { property: "og:title", content: title },
        { property: "og:description", content: c?.summary ?? "Iresh Technologies case study." },
      ],
    };
  },
  loader: ({ params }) => {
    const c = caseStudies.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    return { study: c };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Case study not found</h1>
        <Link to="/case-studies" className="mt-6 inline-block text-primary">All case studies</Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center text-foreground">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </PageShell>
  ),
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const data = Route.useLoaderData() as { study: (typeof caseStudies)[number] };
  const { study } = data;
  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link to="/case-studies" className="text-xs uppercase tracking-[0.14em] text-primary">
            ← Case Studies
          </Link>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{study.industry}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">{study.title}</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">{study.summary}</p>
          <div className="mt-3 text-sm text-dark-muted">Client: {study.client}</div>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground">The challenge</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Our solution</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{study.solution}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Results</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {study.results.map((r) => (
                <li key={r} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <Check className="text-primary shrink-0 mt-0.5" size={18} />
                  <span className="text-sm font-medium text-foreground">{r}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Want similar outcomes?</h3>
            <p className="mt-2 text-muted-foreground">Let's talk about your initiative.</p>
            <button
              onClick={openContactModal}
              className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md"
            >
              Request a Callback <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}