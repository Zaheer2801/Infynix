import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { jobs } from "@/data/content";
import { ArrowRight, MapPin, Briefcase, Clock } from "lucide-react";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — Infynix Tech Solutions" },
      { name: "description", content: "Open roles across AI, Cloud, Data, Web, Mobile, ERP and IT staffing." },
      { property: "og:title", content: "Careers — Infynix Tech Solutions" },
      { property: "og:description", content: "Join Infynix Tech Solutions. We're hiring across AI, Cloud, Data, Web, Mobile, ERP and IT staffing." },
    ],
  }),
  component: CareersPage,
});

function CareersPage() {
  return (
    <PageShell>
      <section className="bg-dark text-dark-foreground">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="text-xs uppercase tracking-[0.14em] text-primary">Careers</div>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">Build the future with us</h1>
          <p className="mt-4 text-lg text-dark-muted max-w-3xl">
            We're hiring across AI, Cloud, Data, Web, Mobile, ERP and IT staffing. Explore {jobs.length}+ open roles below.
          </p>
        </div>
      </section>
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-4">
            {jobs.map((j) => (
              <Link
                key={j.id}
                to="/careers/$jobId"
                params={{ jobId: j.id }}
                className="group block rounded-xl border border-border bg-card p-6 hover:border-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{j.service}</div>
                    <h2 className="mt-1.5 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {j.title}
                    </h2>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2 max-w-3xl">{j.summary}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1"><MapPin size={12} /> {j.location}</span>
                      <span className="inline-flex items-center gap-1"><Briefcase size={12} /> {j.type}</span>
                      <span className="inline-flex items-center gap-1"><Clock size={12} /> {j.experience}</span>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary shrink-0">
                    View role <ArrowRight size={14} />
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