import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { blogPosts } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight } from "lucide-react";

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
    if (!p) throw notFound();
    return { post: p };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Post not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-primary">All posts</Link>
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
  component: BlogPostPage,
});

function BlogPostPage() {
  const data = Route.useLoaderData() as { post: (typeof blogPosts)[number] };
  const { post } = data;
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
            <button onClick={openContactModal} className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md">
              Contact Us <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </article>
    </PageShell>
  );
}