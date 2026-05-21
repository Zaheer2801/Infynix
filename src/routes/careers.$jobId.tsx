import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { jobs } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { ArrowRight, MapPin, Briefcase, Clock, Check } from "lucide-react";

export const Route = createFileRoute("/careers/$jobId")({
  head: ({ params }) => {
    const j = jobs.find((x) => x.id === params.jobId);
    const title = j ? `${j.title} — Careers at Iresh` : "Career — Iresh Technologies";
    const desc = j?.summary ?? "Open role at Iresh Technologies.";
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
    const j = jobs.find((x) => x.id === params.jobId);
    if (!j) throw notFound();
    return { job: j };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Job not found</h1>
        <Link to="/careers" className="mt-6 inline-block text-primary">All jobs</Link>
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
  component: JobPage,
});

function JobPage() {
  const data = Route.useLoaderData() as { job: (typeof jobs)[number] };
  const { job } = data;

  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <Link to="/careers" className="text-xs uppercase tracking-[0.14em] text-primary">
            ← All careers
          </Link>
          <div className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary">{job.service}</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold leading-tight">{job.title}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-dark-muted">
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
            <span className="inline-flex items-center gap-1.5"><Briefcase size={14} /> {job.type}</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={14} /> {job.experience}</span>
          </div>
          <button
            onClick={openContactModal}
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors"
          >
            Apply Now <ArrowRight size={16} />
          </button>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-4xl px-6 py-16 space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground">About the role</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">{job.summary}</p>
          </div>

          <JobSection title="What you'll do" items={job.responsibilities} />
          <JobSection title="What you'll bring" items={job.requirements} />
          <JobSection title="Nice to have" items={job.niceToHave} />

          <div className="rounded-2xl bg-secondary border border-border p-8 text-center">
            <h3 className="text-2xl font-bold text-foreground">Interested?</h3>
            <p className="mt-2 text-muted-foreground">
              Click apply and our talent team will reach out within one business day.
            </p>
            <button
              onClick={openContactModal}
              className="mt-5 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 font-semibold transition-colors rounded-md"
            >
              Apply for this role <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function JobSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <ul className="mt-4 space-y-3">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-3 text-foreground">
            <Check className="text-primary shrink-0 mt-0.5" size={18} />
            <span className="text-sm leading-relaxed">{i}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}