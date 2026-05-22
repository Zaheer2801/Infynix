import type { ComponentType, SVGProps } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import {
  IconUsers,
  IconCpu,
  IconCloud,
  IconCode,
  IconChart,
  IconBuilding,
  IconArrowRight,
} from "../Icons";

type Service = {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  tags: string[];
  slug: string;
  glowColor: string;
  badge: string;
};

const services: Service[] = [
  {
    icon: IconUsers,
    title: "IT Staffing & Recruitment",
    slug: "it-staffing",
    desc: "Precision matching of top-tier IT talent with organizational needs, ensuring long-term value, cultural alignment, and rapid onboarding.",
    tags: ["Contract", "Full-Time", "C2C", "RPO"],
    glowColor: "rgba(30, 58, 138, 0.4)", // Sapphire Blue
    badge: "01",
  },
  {
    icon: IconCpu,
    title: "AI & Machine Learning",
    slug: "ai-ml",
    desc: "Enterprise-grade AI solutions — from NLP and computer vision to predictive analytics and agentic AI systems that automate complex workflows.",
    tags: ["NLP", "Gen AI", "LLMs", "MLOps"],
    glowColor: "rgba(124, 58, 237, 0.35)", // Hyper Violet
    badge: "02",
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    desc: "Architect, migrate, and manage cloud-native infrastructure. We accelerate delivery pipelines with CI/CD, IaC, and container orchestration.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
    glowColor: "rgba(6, 182, 212, 0.35)", // Cyberpunk Cyan
    badge: "03",
  },
  {
    icon: IconCode,
    title: "Web & Mobile Development",
    slug: "web-mobile",
    desc: "Full-stack web and mobile applications built with modern frameworks, delivering performance, scalability, and exceptional user experiences.",
    tags: ["React", "Flutter", "Node.js", "iOS/Android"],
    glowColor: "rgba(16, 185, 129, 0.35)", // Emerald Green
    badge: "04",
  },
  {
    icon: IconChart,
    title: "Data Engineering & Analytics",
    slug: "data-analytics",
    desc: "Transform raw data into strategic intelligence. We build data pipelines, warehouses, and visualization dashboards that drive real decisions.",
    tags: ["Snowflake", "Databricks", "Power BI", "Spark"],
    glowColor: "rgba(245, 158, 11, 0.35)", // Copper Amber
    badge: "05",
  },
  {
    icon: IconBuilding,
    title: "Enterprise Software & ERP",
    slug: "enterprise-erp",
    desc: "Modernize operations with ERP, CRM, and custom enterprise applications. We integrate SAP, Salesforce, and bespoke solutions at scale.",
    tags: ["SAP", "Salesforce", "ERP", "CRM"],
    glowColor: "rgba(239, 68, 68, 0.35)", // Ruby Crimson
    badge: "06",
  },
];

export function Services() {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="services" className="bg-dark text-dark-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 relative z-10">
        
        {/* SECTION HEADER */}
        <Reveal>
          <div className="max-w-3xl mb-16">
            <SectionLabel>What We Do</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight bg-gradient-to-r from-white to-dark-muted bg-clip-text text-transparent mt-4">
              End-to-End IT Solutions That Scale
            </h2>
            <p className="mt-5 text-dark-muted text-base md:text-lg leading-relaxed">
              From elite technical talent pipelines to full-stack digital transformations — we engineer high-performance systems for modern enterprise architectures.
            </p>
          </div>
        </Reveal>

        {/* INTERACTIVE GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onMouseEnter={handleMove}
                  onMouseMove={handleMove}
                  className="group relative overflow-hidden bg-[#111927]/60 backdrop-blur-sm border border-dark-border/60 p-8 rounded-2xl h-full flex flex-col justify-between hover:border-primary/45 duration-500 transition-all cursor-pointer block isolate shadow-lg hover:shadow-black/25 hover:-translate-y-1"
                >
                  {/* Cursor-tracking dynamic color glow halo */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
                    style={{
                      background: `radial-gradient(350px circle at var(--mx, 50%) var(--my, 50%), ${s.glowColor}, transparent 80%)`,
                    }}
                  />

                  {/* Outlined Watermark Badge */}
                  <div className="absolute top-6 right-8 text-7xl font-extrabold text-[#ffffff]/[0.02] tracking-wider select-none z-0 font-mono transition-transform duration-500 group-hover:translate-y-[-4px] group-hover:scale-105">
                    {s.badge}
                  </div>

                  <div className="relative z-10 space-y-5">
                    {/* Icon Container with dynamic hover background */}
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-background/5 border border-dark-border/80 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary shadow-inner">
                      <Icon width={24} height={24} />
                    </div>

                    <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-white transition-colors">
                      {s.title}
                    </h3>

                    <p className="text-sm text-dark-muted leading-relaxed group-hover:text-white/90 transition-colors">
                      {s.desc}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 pt-5 border-t border-dark-border/40">
                    {/* Technology tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {s.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 border border-dark-border/50 text-dark-muted rounded-full bg-[#0d1520]/60 hover:border-primary/30 hover:text-white transition-all duration-300 shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Explore capacity glide link */}
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-primary-hover group/link transition-colors mt-2">
                      Explore Capability 
                      <IconArrowRight className="transform group-hover/link:translate-x-1.5 transition-transform duration-300" width={14} height={14} />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}