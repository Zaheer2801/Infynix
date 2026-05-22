import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { type BlogPost } from "@/lib/gemini";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const p = blogPosts.find((x) => x.slug === params.slug);
    const title = p ? `${p.title} — Infynix Blog` : "Blog — Infynix Tech Solutions";
    return {
      meta: [
        { title },
        { name: "description", content: p?.excerpt ?? "Infynix Tech Solutions blog." },
        { property: "og:title", content: title },
        { property: "og:description", content: p?.excerpt ?? "Infynix Tech Solutions blog." },
      ],
    };
  },
  loader: ({ params }) => {
    const p = blogPosts.find((x) => x.slug === params.slug);
    return { staticPost: p ?? null, slug: params.slug };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { staticPost, slug } = Route.useLoaderData() as { staticPost: BlogPost | null; slug: string };
  const [post, setPost] = useState<BlogPost | null>(staticPost);
  const [loading, setLoading] = useState(!staticPost);

  useEffect(() => {
    if (!staticPost) {
      fetch("/api/posts")
        .then((r) => r.json())
        .then((data: BlogPost[]) => {
          const found = Array.isArray(data) ? data.find((x) => x.slug === slug) : null;
          setPost(found ?? null);
        })
        .catch(() => {})
        .finally(() => setLoading(false));
    }
  }, [staticPost, slug]);

  if (loading) {
    return (
      <PageShell>
        <div className="flex justify-center py-24">
          <Loader2 size={28} className="animate-spin text-primary" />
        </div>
      </PageShell>
    );
  }

  if (!post) {
    return (
      <PageShell>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-3xl font-bold text-foreground">Post not found</h1>
          <p className="mt-2 text-muted-foreground">The article you are looking for does not exist.</p>
          <Link to="/blog" className="mt-6 inline-block text-primary">← All posts</Link>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <article className="bg-background">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <Link to="/blog" className="text-xs uppercase tracking-[0.14em] text-primary">← Blog</Link>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{post.category}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight text-foreground">{post.title}</h1>
          <div className="mt-3 text-sm text-muted-foreground">{post.date} · {post.readingTime}</div>
          <div className="mt-10 space-y-5 text-base leading-[1.8] text-foreground">
            {post.body.map((para, i) => <p key={i}>{para}</p>)}
          </div>
          <div className="mt-14 rounded-2xl bg-secondary border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Have a project in mind?</h3>
            <p className="mt-2 text-muted-foreground">Tell us what you're building.</p>
            <button
              onClick={openContactModal}
              className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md cursor-pointer"
            >
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </article>
    </PageShell>
  );
}
