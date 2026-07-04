import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { digitalProducts, type DigitalProductAudience } from "@/data/content";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/digital-products/")({
  head: () => ({
    meta: [
      { title: "Digital Products — Infynix Tech Solutions" },
      { name: "description", content: "Templates, courses, and career resources for businesses, students, and job seekers." },
      { property: "og:title", content: "Digital Products — Infynix Tech Solutions" },
      { property: "og:description", content: "Templates, courses, and career resources built by the Infynix team." },
    ],
  }),
  component: DigitalProductsPage,
});

const filters: ("All" | DigitalProductAudience)[] = ["All", "Businesses", "Students", "Job Seekers"];

function DigitalProductsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? digitalProducts : digitalProducts.filter((p) => p.audience === active)),
    [active]
  );

  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.14em] text-primary">Digital Products</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Templates, courses, and career tools</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">
            Practical, self-serve products built on the same expertise behind our consulting work — for businesses,
            students, and job seekers.
          </p>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-wrap gap-2.5 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full border transition-all duration-300 cursor-pointer ${
                  active === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-foreground/70 border-border hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <Link
                key={p.slug}
                to="/digital-products/$slug"
                params={{ slug: p.slug }}
                className="group rounded-xl border border-border bg-card p-7 hover:border-primary hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">{p.category}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-secondary text-foreground/70 border border-border">
                    {p.audience}
                  </span>
                </div>
                <h2 className="mt-3 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {p.title}
                </h2>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.tagline}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="text-sm font-bold text-foreground">{p.priceLabel}</span>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
