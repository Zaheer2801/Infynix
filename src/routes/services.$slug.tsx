import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { services } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    const title = s ? `${s.title} — Iresh Technologies` : "Service — Iresh Technologies";
    const desc = s?.tagline ?? "Enterprise IT services by Iresh Technologies.";
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
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
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
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <Link to="/" className="text-xs uppercase tracking-[0.14em] text-primary">
            ← Services
          </Link>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
            {service.title}
          </h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">{service.tagline}</p>
          <button
            onClick={openContactModal}
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors"
          >
            Talk to an Expert <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-5xl px-6 py-16 space-y-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed text-base">
              {service.overview}
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">What we offer</h2>
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              {service.highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-border bg-secondary p-6">
                  <div className="flex items-start gap-3">
                    <Check className="text-primary shrink-0 mt-0.5" size={20} />
                    <div>
                      <h3 className="font-semibold text-foreground">{h.title}</h3>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">How we work</h2>
            <ol className="mt-6 grid md:grid-cols-4 gap-4">
              {service.process.map((p, i) => (
                <li key={p.step} className="rounded-xl border border-border bg-card p-5">
                  <div className="text-xs font-semibold text-primary">STEP {i + 1}</div>
                  <div className="mt-2 font-semibold text-foreground">{p.step}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground">Technologies</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {service.technologies.map((t) => (
                <span key={t} className="text-xs uppercase tracking-wider px-3 py-1.5 border border-border text-foreground bg-secondary rounded-full">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Ready to get started?</h3>
            <p className="mt-2 text-muted-foreground">Tell us about your needs — we respond within one business day.</p>
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