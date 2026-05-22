import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { industries } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/industries/$slug")({
  head: ({ params }) => {
    const it = industries.find((x) => x.slug === params.slug);
    const title = it ? `${it.title} — Infynix Tech Solutions` : "Industry — Infynix Tech Solutions";
    const desc = it?.tagline ?? "Industry solutions by Infynix Tech Solutions.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const it = industries.find((x) => x.slug === params.slug);
    if (!it) throw notFound();
    return { industry: it };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Industry not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary">Back home</Link>
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
  component: IndustryPage,
});

function IndustryPage() {
  const data = Route.useLoaderData() as { industry: (typeof industries)[number] };
  const { industry } = data;
  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link to="/" className="text-xs uppercase tracking-[0.14em] text-primary">
            ← Industries
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">{industry.title}</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">{industry.tagline}</p>
          <button
            onClick={openContactModal}
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors"
          >
            Discuss Your Initiative <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{industry.overview}</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Capabilities</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              {industry.capabilities.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-secondary p-6">
                  <div className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground">{c.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Outcomes we deliver</h2>
            <div className="mt-4 grid sm:grid-cols-3 gap-4">
              {industry.outcomes.map((o) => (
                <div key={o} className="rounded-xl border border-border bg-card p-5 text-center">
                  <div className="text-sm font-semibold text-foreground">{o}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Let's build for {industry.title.split(" ")[0]}</h3>
            <p className="mt-2 text-muted-foreground">Tell us about your initiative and we'll respond within one business day.</p>
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