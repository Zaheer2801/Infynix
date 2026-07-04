import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { Reveal } from "@/components/site/Reveal";
import { digitalProducts, type DigitalProduct, type DigitalProductAudience } from "@/data/content";
import {
  ArrowRight,
  Layers,
  Sparkles,
  GraduationCap,
  Rocket,
  MessagesSquare,
  Briefcase,
  Crown,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

type CategoryTheme = {
  icon: LucideIcon;
  iconBox: string;
  label: string;
  glow: string;
};

const categoryThemes: Record<string, CategoryTheme> = {
  "Templates & Starter Kits": {
    icon: Layers,
    iconBox: "bg-blue-500/10 border-blue-500/20 text-blue-600",
    label: "text-blue-600",
    glow: "rgba(59,130,246,0.16)",
  },
  "AI Products": {
    icon: Sparkles,
    iconBox: "bg-purple-500/10 border-purple-500/20 text-purple-600",
    label: "text-purple-600",
    glow: "rgba(168,85,247,0.16)",
  },
  "Learning & Certification": {
    icon: GraduationCap,
    iconBox: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    label: "text-emerald-600",
    glow: "rgba(16,185,129,0.16)",
  },
  "Career Readiness": {
    icon: Rocket,
    iconBox: "bg-amber-500/10 border-amber-500/20 text-amber-600",
    label: "text-amber-600",
    glow: "rgba(245,158,11,0.16)",
  },
  "Interview Prep": {
    icon: MessagesSquare,
    iconBox: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600",
    label: "text-cyan-600",
    glow: "rgba(6,182,212,0.16)",
  },
  "Career Services": {
    icon: Briefcase,
    iconBox: "bg-rose-500/10 border-rose-500/20 text-rose-600",
    label: "text-rose-600",
    glow: "rgba(244,63,94,0.16)",
  },
  "1:1 Coaching": {
    icon: Crown,
    iconBox: "bg-indigo-500/10 border-indigo-500/20 text-indigo-600",
    label: "text-indigo-600",
    glow: "rgba(99,102,241,0.16)",
  },
};

const defaultTheme: CategoryTheme = categoryThemes["Templates & Starter Kits"];

const audienceBadge: Record<DigitalProductAudience, string> = {
  Businesses: "bg-blue-500/10 text-blue-700 border-blue-500/20",
  Students: "bg-emerald-500/10 text-emerald-700 border-emerald-500/20",
  "Job Seekers": "bg-amber-500/10 text-amber-700 border-amber-500/20",
};

function handleMove(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - r.left}px`);
  el.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function FeaturedCard({ product }: { product: DigitalProduct }) {
  const theme = categoryThemes[product.category] || defaultTheme;
  const Icon = theme.icon;
  return (
    <Link
      to="/digital-products/$slug"
      params={{ slug: product.slug }}
      onMouseEnter={handleMove}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-2xl border border-indigo-400/20 bg-gradient-to-br from-slate-950 via-[#161135] to-slate-950 p-8 md:p-10 text-white shadow-[0_20px_60px_-15px_rgba(99,102,241,0.35)] hover:-translate-y-0.5 transition-all duration-500 block"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(129,140,248,0.18), transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-8">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-indigo-400/15 border border-indigo-300/30 text-indigo-300 shadow-inner">
          <Icon size={28} />
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-indigo-400/15 border border-indigo-300/30 text-indigo-200">
              Flagship Program
            </span>
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/10 border border-white/15 text-white/80">
              {product.audience}
            </span>
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-extrabold tracking-tight group-hover:text-indigo-200 transition-colors">
            {product.title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-white/60 max-w-2xl leading-relaxed">{product.tagline}</p>
        </div>
        <div className="shrink-0 text-center md:text-right">
          <div className="text-2xl md:text-3xl font-extrabold text-white">{product.priceLabel}</div>
          <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 group-hover:text-indigo-200">
            Learn more <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function ProductCard({ product }: { product: DigitalProduct }) {
  const theme = categoryThemes[product.category] || defaultTheme;
  const Icon = theme.icon;
  return (
    <Link
      to="/digital-products/$slug"
      params={{ slug: product.slug }}
      onMouseEnter={handleMove}
      onMouseMove={handleMove}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:-translate-y-0.5 hover:border-primary/30 transition-all duration-300 flex flex-col shadow-[0_10px_30px_-10px_rgba(13,83,128,0.04)] hover:shadow-[0_20px_44px_-10px_rgba(13,83,128,0.1)]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), ${theme.glow}, transparent 80%)`,
        }}
      />
      <div className="relative z-10 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2">
          <div className={`flex h-10 w-10 items-center justify-center rounded-xl border ${theme.iconBox} shadow-inner`}>
            <Icon size={18} />
          </div>
          <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${audienceBadge[product.audience]}`}>
            {product.audience}
          </span>
        </div>
        <span className={`mt-4 text-xs font-extrabold uppercase tracking-[0.1em] ${theme.label}`}>{product.category}</span>
        <h2 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors">{product.title}</h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{product.tagline}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-sm font-extrabold text-foreground">{product.priceLabel}</span>
          <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Learn more <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function DigitalProductsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered = useMemo(
    () => (active === "All" ? digitalProducts : digitalProducts.filter((p) => p.audience === active)),
    [active]
  );

  const featured = filtered.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <PageShell>
      <section className="relative text-white overflow-hidden bg-dark">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(700px circle at 15% 20%, rgba(59,130,246,0.10), transparent 60%), radial-gradient(700px circle at 85% 60%, rgba(168,85,247,0.10), transparent 60%), radial-gradient(500px circle at 50% 100%, rgba(16,185,129,0.08), transparent 60%)",
          }}
        />
        <div className="mx-auto max-w-6xl px-6 py-20 relative z-10">
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
                    ? "bg-gradient-to-r from-primary to-[#3185BA] text-primary-foreground border-primary shadow-md shadow-primary/20"
                    : "bg-card text-foreground/70 border-border hover:border-primary/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {featured && (
            <Reveal>
              <div className="mb-8">
                <FeaturedCard product={featured} />
              </div>
            </Reveal>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 50}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
