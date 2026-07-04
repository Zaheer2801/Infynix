import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { jobs, jobExtras } from "@/data/content";
import { MapPin, Briefcase, Clock, Hash, Send, Check, ArrowRight, ChevronRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/careers/$jobId")({
  head: ({ params }) => {
    const j = jobs.find((x) => x.id === params.jobId);
    const title = j ? `${j.title} — Careers at Infynix` : "Career — Infynix Tech Solutions";
    const desc = j?.summary ?? "Open role at Infynix Tech Solutions.";
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
    const extra = jobExtras[params.jobId] ?? null;
    const related = jobs
      .filter((x) => x.id !== params.jobId && x.service === j.service)
      .slice(0, 3);
    return { job: j, extra, related };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Job not found</h1>
        <Link to="/careers" className="mt-6 inline-block text-primary">← All jobs</Link>
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
  const { job, extra, related } = Route.useLoaderData() as {
    job: (typeof jobs)[number];
    extra: (typeof jobExtras)[string] | null;
    related: (typeof jobs);
  };

  return (
    <PageShell>
      {/* ── Top header bar ── */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
            <ChevronRight size={12} />
            <span className="text-foreground">{job.service}</span>
            <ChevronRight size={12} />
            <span className="text-foreground truncate max-w-[200px]">{job.title}</span>
          </nav>
        </div>
      </div>

      {/* ── Job title block ── */}
      <div className="bg-background border-b border-border">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{job.title}</h1>
              {extra?.jobCode && (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground font-mono">
                  <Hash size={13} /> Job ID: {extra.jobCode}
                </p>
              )}
              <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5"><MapPin size={14} />{job.location}</span>
                <span className="text-border">·</span>
                <span className="flex items-center gap-1.5"><Briefcase size={14} />{job.service}</span>
                <span className="text-border">·</span>
                <span className={`font-medium ${job.type === "Full-Time" ? "text-emerald-500" : "text-amber-500"}`}>{job.type}</span>
              </div>
            </div>
            <a
              href="#apply"
              className="shrink-0 inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-7 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
            >
              Apply now <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-col lg:flex-row gap-10">

            {/* Left — job content */}
            <div className="flex-1 min-w-0 space-y-10">

              {/* Description */}
              <section>
                <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-5">Description</h2>
                <p className="text-muted-foreground leading-[1.8] text-[15px]">{job.summary}</p>
                {extra?.yourRole && (
                  <p className="mt-4 text-muted-foreground leading-[1.8] text-[15px]">{extra.yourRole}</p>
                )}
              </section>

              {/* Key job responsibilities */}
              <section>
                <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-5">Key Job Responsibilities</h2>
                <ul className="space-y-2.5">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Basic qualifications */}
              <section>
                <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-5">Basic Qualifications</h2>
                <ul className="space-y-2.5">
                  {job.requirements.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 size-1.5 rounded-full bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* What we expect */}
              {extra?.whatWeExpect && extra.whatWeExpect.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-1">What We Expect</h2>
                  <p className="text-sm text-muted-foreground mb-4">Beyond skills — mindset and ownership matter here.</p>
                  <ul className="space-y-2.5">
                    {extra.whatWeExpect.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 size-1.5 rounded-full bg-accent shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* Preferred qualifications */}
              {job.niceToHave.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-foreground border-b border-border pb-3 mb-5">Preferred Qualifications</h2>
                  <ul className="space-y-2.5">
                    {job.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-[15px] text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 size-1.5 rounded-full border border-muted-foreground/40 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>

            {/* Right — sidebar */}
            <div className="w-full lg:w-72 shrink-0 space-y-5">

              {/* Job Details card */}
              <div className="rounded-lg border border-border bg-card">
                <div className="px-5 py-4 border-b border-border">
                  <h3 className="font-semibold text-foreground">Job Details</h3>
                </div>
                <div className="px-5 py-4 space-y-4 text-sm">
                  {extra?.jobCode && (
                    <SidebarRow icon={<Hash size={14} />} label="Job ID">
                      <span className="font-mono text-xs">{extra.jobCode}</span>
                    </SidebarRow>
                  )}
                  <SidebarRow icon={<MapPin size={14} />} label="Location">
                    {job.location}
                  </SidebarRow>
                  <SidebarRow icon={<Briefcase size={14} />} label="Department">
                    {job.service}
                  </SidebarRow>
                  <SidebarRow icon={<Clock size={14} />} label="Employment Type">
                    <span className={job.type === "Full-Time" ? "text-emerald-500 font-medium" : "text-amber-500 font-medium"}>
                      {job.type}
                    </span>
                  </SidebarRow>
                  <SidebarRow icon={<Clock size={14} />} label="Experience">
                    {job.experience}
                  </SidebarRow>
                </div>
                <div className="px-5 py-4 border-t border-border">
                  <a
                    href="#apply"
                    className="block w-full text-center bg-primary hover:bg-primary-hover text-primary-foreground py-2.5 rounded-lg font-semibold text-sm transition-colors"
                  >
                    Apply for this job
                  </a>
                </div>
              </div>

              {/* Related jobs */}
              {related.length > 0 && (
                <div className="rounded-lg border border-border bg-card">
                  <div className="px-5 py-4 border-b border-border">
                    <h3 className="font-semibold text-foreground">Similar Openings</h3>
                  </div>
                  <div className="divide-y divide-border">
                    {related.map((r) => {
                      const rExtra = jobExtras[r.id];
                      return (
                        <Link
                          key={r.id}
                          to="/careers/$jobId"
                          params={{ jobId: r.id }}
                          className="block px-5 py-4 hover:bg-accent/5 transition-colors"
                        >
                          <p className="text-sm font-medium text-foreground hover:text-primary transition-colors line-clamp-2">{r.title}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{r.location}</p>
                          {rExtra?.salary && (
                            <p className="mt-1 text-xs text-emerald-500 font-medium">{rExtra.salary}</p>
                          )}
                          {rExtra?.jobCode && (
                            <p className="mt-1 text-[10px] font-mono text-muted-foreground/60">{rExtra.jobCode}</p>
                          )}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="px-5 py-3 border-t border-border">
                    <Link to="/careers" className="text-xs text-primary font-medium hover:underline">
                      View all openings →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ── Apply form ── */}
          <div id="apply" className="mt-16 scroll-mt-6 max-w-3xl">
            <ApplyForm jobTitle={job.title} jobCode={extra?.jobCode} />
          </div>
        </div>
      </div>
    </PageShell>
  );
}

function SidebarRow({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 text-primary shrink-0">{icon}</span>
      <div>
        <p className="text-xs text-muted-foreground mb-0.5">{label}</p>
        <div className="text-foreground">{children}</div>
      </div>
    </div>
  );
}

type FormState = "idle" | "submitting" | "success";

function ApplyForm({ jobTitle, jobCode }: { jobTitle: string; jobCode?: string }) {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", linkedin: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setState("submitting");
    setError("");
    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobTitle, jobCode: jobCode ?? "", ...form }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null) as { error?: string } | null;
        throw new Error(data?.error ?? "Something went wrong, please try again.");
      }
      setState("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong, please try again.");
      setState("idle");
    }
  };

  if (state === "success") {
    return (
      <div className="rounded-lg border border-border bg-card p-10 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-emerald-500/15">
          <Check size={22} className="text-emerald-400" strokeWidth={2.5} />
        </div>
        <h3 className="text-xl font-bold text-foreground">Application submitted!</h3>
        <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
          Thank you for applying for <strong className="text-foreground">{jobTitle}</strong>. Our talent team will be in touch within one business day.
        </p>
        <Link to="/careers" className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline">
          See all open positions <ArrowRight size={13} />
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #e5e7eb", backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div className="px-7 py-5" style={{ borderBottom: "1px solid #e5e7eb" }}>
        <h2 className="text-xl font-bold" style={{ color: "#111827" }}>Apply for this position</h2>
        <p className="mt-0.5 text-sm" style={{ color: "#6b7280" }}>
          {jobTitle}{jobCode ? ` · ${jobCode}` : ""}
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="px-7 py-6 space-y-5" style={{ backgroundColor: "#ffffff" }}>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full Name" required>
            <input name="name" value={form.name} onChange={handleChange} required placeholder="Jane Smith" className="form-input" />
          </Field>
          <Field label="Email Address" required>
            <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="jane@company.com" className="form-input" />
          </Field>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Phone Number" hint="Optional">
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className="form-input" />
          </Field>
          <Field label="LinkedIn URL" hint="Optional">
            <input name="linkedin" type="url" value={form.linkedin} onChange={handleChange} placeholder="linkedin.com/in/yourname" className="form-input" />
          </Field>
        </div>
        <Field label="Cover Letter / Message" required>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Tell us why you're a great fit for this role..."
            className="form-input resize-none"
          />
        </Field>

        {error && <p className="text-sm font-medium text-red-600">{error}</p>}

        <div className="flex items-center justify-between pt-1">
          <p className="text-xs" style={{ color: "#6b7280" }}>We respond to every application within 1 business day.</p>
          <button
            type="submit"
            disabled={state === "submitting"}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2.5 rounded-lg font-semibold text-sm transition-colors disabled:opacity-60 cursor-pointer"
          >
            {state === "submitting" ? (
              <>
                <span className="size-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Submitting...
              </>
            ) : (
              <>Submit Application <Send size={13} /></>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

function Field({ label, hint, required, children }: { label: string; hint?: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-medium" style={{ color: "#374151" }}>
        {label}
        {required && <span className="text-primary">*</span>}
        {hint && <span className="font-normal text-xs" style={{ color: "#9ca3af" }}>({hint})</span>}
      </label>
      {children}
    </div>
  );
}
