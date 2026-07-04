import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { digitalProducts } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/digital-products/$slug")({
  head: ({ params }) => {
    const p = digitalProducts.find((x) => x.slug === params.slug);
    const title = p ? `${p.title} — Infynix Tech Solutions` : "Digital Product — Infynix Tech Solutions";
    return {
      meta: [
        { title },
        { name: "description", content: p?.tagline ?? "Digital products by Infynix Tech Solutions." },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.tagline ?? "Digital products by Infynix Tech Solutions." },
      ],
    };
  },
  loader: ({ params }) => {
    const p = digitalProducts.find((x) => x.slug === params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Product not found</h1>
        <Link to="/digital-products" className="mt-6 inline-block text-primary">All digital products</Link>
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
  component: DigitalProductPage,
});

function DigitalProductPage() {
  const data = Route.useLoaderData() as { product: (typeof digitalProducts)[number] };
  const { product } = data;

  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link to="/digital-products" className="text-xs uppercase tracking-[0.14em] text-primary">
            ← Digital Products
          </Link>
          <div className="mt-4 flex items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{product.category}</span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
              {product.audience}
            </span>
          </div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">{product.title}</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">{product.tagline}</p>
          <div className="mt-3 text-sm text-dark-muted">Format: {product.format}</div>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Overview</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">{product.overview}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">What's included</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 rounded-lg border border-border bg-card p-4">
                  <Check className="text-primary shrink-0 mt-0.5" size={18} />
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Ideal for</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {product.idealFor.map((t) => (
                <span
                  key={t}
                  className="text-xs font-semibold px-4 py-2 border border-border text-foreground/80 bg-card rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
            <div className="text-2xl font-bold text-foreground">{product.priceLabel}</div>
            <p className="mt-2 text-muted-foreground">Get in touch to purchase or ask questions about this product.</p>
            <button
              onClick={openContactModal}
              className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md"
            >
              Request this product <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
