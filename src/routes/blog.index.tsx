import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/data/content";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { type BlogPost } from "@/lib/gemini";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Infynix Tech Solutions" },
      { name: "description", content: "Insights on AI, cloud, data, hiring and engineering leadership." },
      { property: "og:title", content: "Blog — Infynix Tech Solutions" },
      { property: "og:description", content: "Insights from the Infynix Tech Solutions team." },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [apiPosts, setApiPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/posts")
      .then((r) => r.json())
      .then((data: BlogPost[]) => setApiPosts(Array.isArray(data) ? data : []))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const allPosts = [...apiPosts, ...blogPosts];

  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.14em] text-primary">Blog &amp; Insights</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Field notes from the team</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">
            Practical insights on AI, cloud, data, hiring and engineering leadership.
          </p>
        </div>
      </section>

      <section className="bg-background border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          {loading ? (
            <div className="flex justify-center py-20">
              <Loader2 size={28} className="animate-spin text-primary" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-6">
              {allPosts.map((p, idx) => (
                <Link
                  key={`${p.slug}-${idx}`}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group rounded-xl border border-border bg-card p-7 hover:border-primary hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{p.category}</span>
                    <h2 className="mt-2 text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{p.title}</h2>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.excerpt}</p>
                  </div>
                  <div>
                    <div className="mt-4 text-xs text-muted-foreground">{p.date} · {p.readingTime}</div>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      Read article <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </PageShell>
  );
}
