import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { digitalProducts } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import {
  ArrowRight,
  Check,
  Layers,
  Sparkles,
  GraduationCap,
  Rocket,
  MessagesSquare,
  Briefcase,
  Crown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

type CategoryTheme = {
  icon: LucideIcon;
  badge: string;
  label: string;
  accentText: string;
  checkBox: string;
  chip: string;
};

const categoryThemes: Record<string, CategoryTheme> = {
  "Templates & Starter Kits": {
    icon: Layers,
    badge: "bg-blue-500/10 border-blue-500/20 text-blue-300",
    label: "text-blue-500",
    accentText: "text-blue-600",
    checkBox: "bg-blue-500/10 border-blue-500/20 text-blue-600",
    chip: "border-blue-500/20 text-blue-700 bg-blue-500/5",
  },
  "AI Products": {
    icon: Sparkles,
    badge: "bg-purple-500/10 border-purple-500/20 text-purple-300",
    label: "text-purple-500",
    accentText: "text-purple-600",
    checkBox: "bg-purple-500/10 border-purple-500/20 text-purple-600",
    chip: "border-purple-500/20 text-purple-700 bg-purple-500/5",
  },
  "Learning & Certification": {
    icon: GraduationCap,
    badge: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    label: "text-emerald-500",
    accentText: "text-emerald-600",
    checkBox: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    chip: "border-emerald-500/20 text-emerald-700 bg-emerald-500/5",
  },
  "Career Readiness": {
    icon: Rocket,
    badge: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    label: "text-amber-500",
    accentText: "text-amber-600",
    checkBox: "bg-amber-500/10 border-amber-500/20 text-amber-600",
    chip: "border-amber-500/20 text-amber-700 bg-amber-500/5",
  },
  "Interview Prep": {
    icon: MessagesSquare,
    badge: "bg-cyan-500/10 border-cyan-500/20 text-cyan-300",
    label: "text-cyan-500",
    accentText: "text-cyan-600",
    checkBox: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600",
    chip: "border-cyan-500/20 text-cyan-700 bg-cyan-500/5",
  },
  "Career Services": {
    icon: Briefcase,
    badge: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    label: "text-rose-500",
    accentText: "text-rose-600",
    checkBox: "bg-rose-500/10 border-rose-500/20 text-rose-600",
    chip: "border-rose-500/20 text-rose-700 bg-rose-500/5",
  },
  "1:1 Coaching": {
    icon: Crown,
    badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-300",
    label: "text-indigo-400",
    accentText: "text-indigo-600",
    checkBox: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600",
    chip: "border-indigo-500/20 text-indigo-700 bg-indigo-500/5",
  },
};

const defaultTheme = categoryThemes["Templates & Starter Kits"];

function DigitalProductPage() {
  const data = Route.useLoaderData() as { product: (typeof digitalProducts)[number] };
  const { product } = data;
  const theme = categoryThemes[product.category] || defaultTheme;
  const Icon = theme.icon;

  return (
    <PageShell>
      <section className="relative bg-dark text-dark-foreground overflow-hidden">
        {product.featured && (
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(700px circle at 80% 20%, rgba(99,102,241,0.16), transparent 65%)" }}
          />
        )}
        <div className="mx-auto max-w-4xl px-6 py-20 relative z-10">
          <Link to="/digital-products" className="text-xs uppercase tracking-[0.14em] text-primary">
            ← Digital Products
          </Link>
          <div className="mt-4 flex flex-wrap items-center gap-2.5">
            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase border ${theme.badge}`}>
              <Icon size={12} /> {product.category}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
              {product.audience}
            </span>
            {product.featured && (
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-indigo-400/15 border border-indigo-300/30 text-indigo-200">
                Flagship Program
              </span>
            )}
          </div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">{product.title}</h1>
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
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-md border ${theme.checkBox}`}>
                    <Check size={13} />
                  </span>
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
                  className={`text-xs font-semibold px-4 py-2 border rounded-full ${theme.chip}`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {product.featured ? (
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-950 via-[#161135] to-slate-950 border border-indigo-400/20 p-8 md:p-12 text-center text-white shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)]">
              <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
              <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />
              <div className="relative z-10">
                <div className="text-2xl md:text-3xl font-extrabold">{product.priceLabel}</div>
                <p className="mt-2 text-white/60">Get in touch to enroll or ask questions about this program.</p>
                <button
                  onClick={openContactModal}
                  className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:shadow-lg hover:shadow-indigo-500/30 px-7 py-3.5 font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  Request this program <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
              <div className={`text-2xl font-bold ${theme.accentText}`}>{product.priceLabel}</div>
              <p className="mt-2 text-muted-foreground">Get in touch to purchase or ask questions about this product.</p>
              <button
                onClick={openContactModal}
                className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md cursor-pointer"
              >
                Request this product <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
