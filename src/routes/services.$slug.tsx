import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { services } from "@/data/content";
import { openContactModal } from "@/lib/contact-modal";
import { Reveal } from "@/components/site/Reveal";
import { 
  ArrowRight, 
  Check, 
  Compass, 
  Cpu, 
  Layers,
  Users,
  Briefcase,
  CheckCircle,
  Brain,
  Workflow,
  Cloud,
  Terminal,
  GitBranch,
  Globe,
  Smartphone,
  Code2,
  Database,
  LineChart,
  Settings,
  Zap,
  Award
} from "lucide-react";

// Import custom generated process illustrations
import itStaffingProcess from "@/assets/it_staffing_process.png";
import aiMlProcess from "@/assets/ai_ml_process.png";
import cloudDevopsProcess from "@/assets/cloud_devops_process.png";
import webMobileProcess from "@/assets/web_mobile_process.png";
import dataAnalyticsProcess from "@/assets/data_analytics_process.png";
import enterpriseErpProcess from "@/assets/enterprise_erp_process.png";

// Import custom generated hero images
import itStaffingHero from "@/assets/it_staffing_hero.png";
import aiMlHero from "@/assets/ai_ml_hero.png";
import cloudDevopsHero from "@/assets/cloud_devops_hero.png";
import webMobileHero from "@/assets/web_mobile_hero.png";
import dataAnalyticsHero from "@/assets/data_analytics_hero.png";
import enterpriseErpHero from "@/assets/enterprise_erp_hero.png";

const processImages: Record<string, string> = {
  "it-staffing": itStaffingProcess,
  "ai-ml": aiMlProcess,
  "cloud-devops": cloudDevopsProcess,
  "web-mobile": webMobileProcess,
  "data-analytics": dataAnalyticsProcess,
  "enterprise-erp": enterpriseErpProcess,
};

const heroImages: Record<string, string> = {
  "it-staffing": itStaffingHero,
  "ai-ml": aiMlHero,
  "cloud-devops": cloudDevopsHero,
  "web-mobile": webMobileHero,
  "data-analytics": dataAnalyticsHero,
  "enterprise-erp": enterpriseErpHero,
};

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    const title = s ? `${s.title} — Infynix Tech Solutions` : "Service — Infynix Tech Solutions";
    const desc = s?.tagline ?? "Enterprise IT services by Infynix Tech Solutions.";
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
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return { service: s };
  },
  notFoundComponent: () => (
    <PageShell darkNavbar={true}>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-3xl font-bold text-foreground">Service not found</h1>
        <Link to="/" className="mt-6 inline-block text-primary">Back home</Link>
      </div>
    </PageShell>
  ),
  errorComponent: ({ error }) => (
    <PageShell darkNavbar={true}>
      <div className="mx-auto max-w-3xl px-6 py-24 text-center text-foreground">
        <h1 className="text-2xl font-bold">Something went wrong</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
      </div>
    </PageShell>
  ),
  component: ServicePage,
});

// Configure themed attributes specifically tailored for each service specialty in dark mode
const serviceThemes: Record<
  string,
  {
    accentColor: string;
    glowClass: string;
    heroGradient: string;
    bgDotColor: string;
    badgeStyle: string;
    diagramTitle: string;
    specialtyGlow: string;
    diagramSteps: { label: string; desc: string }[];
  }
> = {
  "it-staffing": {
    accentColor: "text-blue-500",
    glowClass: "hover:border-blue-500/40",
    heroGradient: "linear-gradient(135deg, #070913 0%, #0B0D1B 45%, #121630 100%)",
    bgDotColor: "rgba(59,130,246,0.06)",
    badgeStyle: "bg-blue-500/10 border-blue-500/20 text-blue-500",
    diagramTitle: "High-Velocity Talent Placement Flow",
    specialtyGlow: "rgba(13,83,128,0.25)",
    diagramSteps: [
      { label: "1. Engineering Intake & Alignment", desc: "Collaborate with lead architects to map precise programming stacks, team dynamics, and business objectives." },
      { label: "2. Multi-Channel Active Sourcing", desc: "Leverage global candidate registries alongside precise, real-time market-mapping tech systems." },
      { label: "3. SME Peer-to-Peer Screening", desc: "Senior subject-matter experts run rigorous live code challenges and architecture assessments." },
      { label: "4. Compliant Onboarding", desc: "Frictionless legal setups managing W2, 1099, C2C checks, drug screening, and day-one setup." }
    ]
  },
  "ai-ml": {
    accentColor: "text-purple-500",
    glowClass: "hover:border-purple-500/40",
    heroGradient: "linear-gradient(135deg, #080614 0%, #0D0B1F 45%, #1A1435 100%)",
    bgDotColor: "rgba(168,85,247,0.06)",
    badgeStyle: "bg-purple-500/10 border-purple-500/20 text-purple-600",
    diagramTitle: "Enterprise AI & MLOps Pipeline Blueprint",
    specialtyGlow: "rgba(168,85,247,0.25)",
    diagramSteps: [
      { label: "1. Secure Data Ingestion", desc: "Collect, govern, anonymize, and store highly complex structured or unstructured data layers." },
      { label: "2. LLM Fine-Tuning & Vector RAG", desc: "Run custom fine-tuning and ingest strategic metrics directories into semantic vector stores." },
      { label: "3. Multi-Agent System Execution", desc: "Orchestrate autonomous agent systems built to automate operational processes." },
      { label: "4. MLOps Drift Audits", desc: "Monitor drift, safety firewalls, and continuous training registries for maximum accuracy." }
    ]
  },
  "cloud-devops": {
    accentColor: "text-cyan-500",
    glowClass: "hover:border-cyan-500/40",
    heroGradient: "linear-gradient(135deg, #040812 0%, #070D1D 45%, #0E1B31 100%)",
    bgDotColor: "rgba(6,182,212,0.06)",
    badgeStyle: "bg-cyan-500/10 border-cyan-500/20 text-cyan-600",
    diagramTitle: "Continuous GitOps Automated Delivery Architecture",
    specialtyGlow: "rgba(6,182,212,0.25)",
    diagramSteps: [
      { label: "1. Multi-Branch Code Commit", desc: "Push fully typed code directly into automated linting, test suites, and compliance gateways." },
      { label: "2. Image Containerization & Scans", desc: "Compile lightweight images dynamically, scanned for potential security vulnerabilities." },
      { label: "3. GitOps ArgoCD Synchronization", desc: "Observe real-time discrepancies between Git and clusters, applying sync changes automatically." },
      { label: "4. Multi-Zone Kubernetes Delivery", desc: "Host production microservices on highly resilient auto-scaling cloud cluster environments." }
    ]
  },
  "web-mobile": {
    accentColor: "text-emerald-500",
    glowClass: "hover:border-emerald-500/40",
    heroGradient: "linear-gradient(135deg, #030910 0%, #06111C 45%, #0D2230 100%)",
    bgDotColor: "rgba(16,185,129,0.06)",
    badgeStyle: "bg-emerald-500/10 border-emerald-500/20 text-emerald-600",
    diagramTitle: "High-Performance Full-Stack Application Blueprint",
    specialtyGlow: "rgba(16,185,129,0.25)",
    diagramSteps: [
      { label: "1. Accessible Frontend Platform", desc: "Build responsive packages optimized for lightning-fast Core Web Vitals (WCAG 2.2 AA)." },
      { label: "2. Typesafe GraphQL/tRPC Gateway", desc: "Validate end-to-end type safety between client interfaces and distributed servers." },
      { label: "3. Distributed Microservice API", desc: "Process transactions on scalable node/microservice clusters with caching." },
      { label: "4. Proactive Edge CDN Route Caching", desc: "Distribute media and static resources globally via low-latency content nodes." }
    ]
  },
  "data-analytics": {
    accentColor: "text-amber-500",
    glowClass: "hover:border-amber-500/40",
    heroGradient: "linear-gradient(135deg, #090710 0%, #120E1C 45%, #20172D 100%)",
    bgDotColor: "rgba(245,158,11,0.06)",
    badgeStyle: "bg-amber-500/10 border-amber-500/20 text-amber-600",
    diagramTitle: "Modern Governed ELT Data Lakehouse Blueprint",
    specialtyGlow: "rgba(245,158,11,0.25)",
    diagramSteps: [
      { label: "1. Fivetran & Kafka Ingestion", desc: "Assemble continuous transactional datasets and high-speed telemetry log layers." },
      { label: "2. Cloud Storage Bronze/Silver", desc: "Structure raw file buckets into Snowflake or Databricks organized Lakehouse schemas." },
      { label: "3. Governed dbt Transformations", desc: "Execute modular SQL models with built-in data-lineage and automated schema testing." },
      { label: "4. Business Intelligence Reporting", desc: "Connect semantic warehouses to Power BI or Tableau to generate business intelligence." }
    ]
  },
  "enterprise-erp": {
    accentColor: "text-rose-500",
    glowClass: "hover:border-rose-500/40",
    heroGradient: "linear-gradient(135deg, #0A060F 0%, #130B1C 45%, #23122A 100%)",
    bgDotColor: "rgba(239,68,68,0.06)",
    badgeStyle: "bg-rose-500/10 border-rose-500/20 text-rose-600",
    diagramTitle: "Connected Enterprise Core System Architecture",
    specialtyGlow: "rgba(239,68,68,0.25)",
    diagramSteps: [
      { label: "1. Central Relational Operations", desc: "Database schemas managing real-time inventory, procurement, and supplier pipelines." },
      { label: "2. Salesforce CRM Client Portal", desc: "Customer identity directory, support registries, and interactive client accounts." },
      { label: "3. MuleSoft API Middleware", desc: "Verify and route transactional operations smoothly across fragmented legacy hardware." },
      { label: "4. SAP S/4HANA ERP Financial Core", desc: "Consolidate centralized financial ledger registers and tax automation systems." }
    ]
  }
};

function ServicePage() {
  const data = Route.useLoaderData() as { service: (typeof services)[number] };
  const { service } = data;

  // Retrieve the custom theme values for the current service, falling back to blue/it-staffing default
  const theme = serviceThemes[service.slug] || serviceThemes["it-staffing"];

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <PageShell darkNavbar={true}>
      {/* PREMIUM DARK-THEME TWO-COLUMN HERO */}
      <section
        className="relative text-white overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-44 lg:pb-36"
        style={{ background: theme.heroGradient }}
      >
        {/* Ambient overlay glow matching the service theme */}
        <div
          className="pointer-events-none absolute inset-0 opacity-35 mix-blend-screen"
          style={{
            background: `radial-gradient(800px circle at 80% 50%, ${theme.specialtyGlow}, transparent 80%)`
          }}
        />
        {/* Subtle dot overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />

        <div className="mx-auto max-w-6xl px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal>
                <Link
                  to="/"
                  hash="services"
                  className="text-xs uppercase tracking-[0.2em] text-white/50 hover:text-white font-extrabold transition-colors inline-flex items-center gap-1.5"
                >
                  ← Back to Capabilities
                </Link>
              </Reveal>

              {service.category && (
                <Reveal delay={40}>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold tracking-widest uppercase bg-white/5 border border-white/10 text-white/90">
                    <span className={`h-1.5 w-1.5 rounded-full bg-current ${theme.accentColor}`} />
                    {service.category}
                  </span>
                </Reveal>
              )}

              <Reveal delay={80}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] tracking-tight text-white">
                  {service.title}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed font-normal">
                  {service.tagline}
                </p>
              </Reveal>

              <Reveal delay={240}>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={openContactModal}
                    className="inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-[#3185BA] text-white hover:shadow-lg hover:shadow-primary/20 px-8 py-4 text-sm font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-black/5"
                  >
                    Talk to an Expert <ArrowRight size={16} />
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Premium Illustration Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <Reveal delay={200} className="w-full">
                <div className="relative mx-auto max-w-[480px] lg:max-w-none group/heroImg w-full">
                  {/* Soft ambient aura */}
                  <div 
                    className="absolute -inset-4 rounded-[2rem] opacity-35 blur-3xl group-hover:opacity-50 transition-opacity duration-700 pointer-events-none" 
                    style={{ background: `radial-gradient(circle, ${theme.specialtyGlow} 0%, transparent 70%)` }}
                  />
                  {/* Premium glass frame */}
                  <div className="relative rounded-2xl border border-white/10 bg-slate-950/40 p-2.5 backdrop-blur-md overflow-hidden shadow-2xl shadow-black/60">
                    <img
                      src={heroImages[service.slug] || itStaffingHero}
                      alt={service.title}
                      className="w-full h-auto object-cover rounded-xl transform transition-transform duration-700 group-hover/heroImg:scale-[1.025]"
                    />
                    <div className="absolute inset-0 rounded-xl border border-white/10 pointer-events-none" />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SPECIFIC CONTENT */}
      <section className="bg-background relative border-t border-border/40">
        <div className="mx-auto max-w-5xl px-6 py-20 space-y-20">
          
          {/* OVERVIEW SECTION */}
          <Reveal>
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-4 flex items-center gap-3">
                <Compass size={22} className={`${theme.accentColor}`} />
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  Overview
                </h2>
              </div>
              <div className="lg:col-span-8">
                <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                  {service.overview}
                </p>
              </div>
            </div>
          </Reveal>

          <hr className="border-border/60" />

          {/* TWO-COLUMN VISUAL PROCESS DASHBOARD */}
          <Reveal>
            <div className="rounded-3xl border border-border bg-card p-6 md:p-8 space-y-8 relative overflow-hidden group shadow-[0_12px_40px_rgba(13,83,128,0.02)]">
              {/* Decorative background light mesh */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/5 to-transparent blur-3xl opacity-50 pointer-events-none" />

              <div className="space-y-2 relative z-10">
                <span className={`text-[10px] font-extrabold uppercase tracking-[0.2em] ${theme.accentColor}`}>
                  Architectural Delivery Framework
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {theme.diagramTitle}
                </h3>
                <p className="text-sm text-slate-500 max-w-2xl leading-relaxed">
                  Our structured operational roadmap guarantees rigorous engineering alignment, seamless delivery, and robust lifecycle operations.
                </p>
              </div>

              <div className="grid lg:grid-cols-12 gap-8 items-stretch relative z-10">
                {/* Steps timeline - 5 cols */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-6">
                  {theme.diagramSteps.map((step, idx) => (
                    <div
                      key={step.label}
                      className="flex items-start gap-4 p-4 rounded-xl border border-border/40 bg-secondary/10 hover:border-primary/20 hover:bg-secondary/20 transition-all duration-300 group/step cursor-default"
                    >
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold font-mono shadow-sm border ${theme.badgeStyle}`}>
                        0{idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-sm font-bold text-slate-900 group-hover/step:text-primary transition-colors leading-none">
                          {step.label.substring(3)}
                        </h4>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Illustration block - 7 cols */}
                <div className="lg:col-span-7 flex items-center justify-center p-4 rounded-2xl border border-border/80 bg-secondary/15 relative overflow-hidden group/img min-h-[300px] shadow-inner">
                  <img
                    src={processImages[service.slug] || itStaffingProcess}
                    alt={theme.diagramTitle}
                    className="max-h-[360px] w-auto object-contain rounded-xl shadow-lg border border-border/60 group-hover/img:scale-[1.02] duration-500 transition-all"
                  />
                  {/* Ambient glowing outline overlay */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover/img:border-primary/10 rounded-2xl duration-500 transition-all pointer-events-none" />
                </div>
              </div>
            </div>
          </Reveal>

          <hr className="border-border/60" />

          {/* DYNAMIC WHAT WE OFFER SECTION */}
          <div className="space-y-8">
            <Reveal>
              <div className="flex items-center gap-3">
                <Layers size={22} className={`${theme.accentColor}`} />
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                  What We Offer
                </h2>
              </div>
            </Reveal>
            
            <div className="grid md:grid-cols-2 gap-6">
              {service.highlights.map((h, i) => (
                <Reveal key={h.title} delay={i * 60}>
                  <div
                    onMouseEnter={handleMove}
                    onMouseMove={handleMove}
                    className={`relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-500 shadow-[0_10px_30px_-6px_rgba(13,83,128,0.02)] hover:shadow-[0_20px_48px_-8px_rgba(13,83,128,0.08)] hover:-translate-y-0.5 group cursor-default h-full`}
                  >
                    {/* Radial glow background tracking mouse */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), ${theme.bgDotColor.replace('0.06', '0.15')}, transparent 80%)`
                      }}
                    />

                    <div className="flex items-start gap-4 relative z-10">
                      {/* Glowing Check box */}
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-inner">
                        <Check size={15} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg leading-snug group-hover:text-primary transition-colors">
                          {h.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500 leading-relaxed font-normal">
                          {h.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* DYNAMIC EXTRA SECTIONS */}
          {service.extraSections && service.extraSections.map((sec) => (
            <div key={sec.sectionTitle} className="space-y-8">
              <hr className="border-border/60" />
              <Reveal>
                <div className="space-y-4">
                  {sec.sectionSubtitle && (
                    <span className={`text-[10px] font-extrabold uppercase tracking-[0.2em] ${theme.accentColor}`}>
                      {sec.sectionSubtitle}
                    </span>
                  )}
                  <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                    {sec.sectionTitle}
                  </h2>
                  {sec.sectionDesc && (
                    <p className="text-slate-600 leading-relaxed text-sm md:text-base max-w-3xl">
                      {sec.sectionDesc}
                    </p>
                  )}
                </div>
              </Reveal>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.items.map((item, i) => (
                  <Reveal key={item.title} delay={i * 60}>
                    <div
                      onMouseEnter={handleMove}
                      onMouseMove={handleMove}
                      className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 md:p-8 transition-all duration-500 shadow-[0_10px_30px_-6px_rgba(13,83,128,0.02)] hover:shadow-[0_20px_48px_-8px_rgba(13,83,128,0.08)] hover:-translate-y-0.5 group cursor-default h-full"
                    >
                      {/* Radial glow background tracking mouse */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: `radial-gradient(200px circle at var(--mx, 50%) var(--my, 50%), ${theme.bgDotColor.replace('0.06', '0.15')}, transparent 80%)`
                        }}
                      />

                      <div className="space-y-4 relative z-10">
                        {/* Elegant mini icon box */}
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-500 shadow-inner">
                          <CheckCircle size={18} />
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-extrabold text-slate-900 text-lg leading-snug group-hover:text-primary transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-sm text-slate-500 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}

          <hr className="border-border/60" />

          {/* DYNAMIC TECHNOLOGIES BADGES */}
          <Reveal>
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Specialized Stack & Standards
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase font-extrabold tracking-wider px-4.5 py-3 border border-border text-slate-700 bg-white hover:border-primary/30 hover:shadow-sm rounded-full cursor-default transition-all duration-300 shadow-[0_2px_8px_rgba(13,83,128,0.02)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* DYNAMIC FOOTER BANNER CONTAINER */}
          <Reveal>
            <div className="rounded-3xl bg-card border border-border p-8 md:p-12 text-center relative overflow-hidden group shadow-[0_12px_40px_rgba(13,83,128,0.03)]">
              {/* Background absolute glow matching specialty */}
              <div className="pointer-events-none absolute -left-32 -bottom-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl opacity-80" />
              <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-accent/5 blur-3xl opacity-80" />
              
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight relative z-10">
                Ready to get started?
              </h3>
              <p className="mt-3 text-slate-500 max-w-lg mx-auto text-sm md:text-base font-normal relative z-10 leading-relaxed">
                Align our technical consultants to draft a tailored roadmap for your requirements.
              </p>
              
              <button
                onClick={openContactModal}
                className="mt-8 inline-flex items-center gap-2.5 bg-gradient-to-r from-primary to-[#3185BA] text-primary-foreground hover:shadow-lg hover:shadow-primary/20 px-8 py-4 text-sm font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-black/5 cursor-pointer relative z-10"
              >
                Request a Callback <ArrowRight size={16} />
              </button>
            </div>
          </Reveal>

        </div>
      </section>
    </PageShell>
  );
}