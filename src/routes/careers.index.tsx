import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { jobs, jobExtras } from "@/data/content";
import { ArrowRight, MapPin, Clock, Hash } from "lucide-react";

export const Route = createFileRoute("/careers/")({
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
      {/* Hero */}
      <section className="relative bg-dark text-dark-foreground overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none" />
        <div className="mx-auto max-w-6xl px-6 py-24 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            <span className="size-1.5 rounded-full bg-primary animate-pulse" />
            We're Hiring
          </div>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
            Build the future<br />
            <span className="text-primary">with us</span>
          </h1>
          <p className="mt-5 text-lg text-dark-muted max-w-2xl leading-relaxed">
            We hire exceptional engineers, architects, and technologists across AI, Cloud, Data,
            Web, Mobile, ERP, and IT Staffing. Remote-first. Impact-driven.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-dark-muted">
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-emerald-400" />{jobs.length} open positions</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-primary" />Remote &amp; hybrid roles</span>
            <span className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-accent" />Competitive compensation</span>
          </div>
        </div>
      </section>

      {/* Job listings */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-3">
            {jobs.map((j) => {
              const extra = jobExtras[j.id];
              return (
                <Link
                  key={j.id}
                  to="/careers/$jobId"
                  params={{ jobId: j.id }}
                  className="group block rounded-xl border border-border bg-card p-6 hover:border-primary hover:bg-card/80 hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">{j.service}</span>
                        {extra?.jobCode && (
                          <span className="inline-flex items-center gap-1 rounded border border-border px-2 py-0.5 text-[10px] font-mono text-muted-foreground">
                            <Hash size={9} />{extra.jobCode}
                          </span>
                        )}
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                          j.type === "Full-Time"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : "bg-amber-500/10 text-amber-400"
                        }`}>{j.type}</span>
                      </div>

                      <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                        {j.title}
                      </h2>
                      <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2 max-w-2xl">{j.summary}</p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                        <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> {j.location}</span>
                        <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {j.experience}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary shrink-0 mt-1">
                      View role <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 border border-primary/20 p-10 text-center">
            <h3 className="text-2xl font-bold text-foreground">Don't see the right fit?</h3>
            <p className="mt-2 text-muted-foreground max-w-md mx-auto">
              We're always interested in exceptional talent. Send us your details and we'll reach out when a matching role opens.
            </p>
            <a
              href="mailto:info@infynixtek.com"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Send open application <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
