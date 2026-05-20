import type { ComponentType, SVGProps } from "react";
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
};

const services: Service[] = [
  {
    icon: IconUsers,
    title: "IT Staffing & Recruitment",
    desc: "Precision matching of top-tier IT talent with organizational needs, ensuring long-term value, cultural alignment, and rapid onboarding.",
    tags: ["Contract", "Full-Time", "C2C", "RPO"],
  },
  {
    icon: IconCpu,
    title: "AI & Machine Learning",
    desc: "Enterprise-grade AI solutions — from NLP and computer vision to predictive analytics and agentic AI systems that automate complex workflows.",
    tags: ["NLP", "Gen AI", "LLMs", "MLOps"],
  },
  {
    icon: IconCloud,
    title: "Cloud & DevOps",
    desc: "Architect, migrate, and manage cloud-native infrastructure. We accelerate delivery pipelines with CI/CD, IaC, and container orchestration.",
    tags: ["AWS", "Azure", "GCP", "Kubernetes"],
  },
  {
    icon: IconCode,
    title: "Web & Mobile Development",
    desc: "Full-stack web and mobile applications built with modern frameworks, delivering performance, scalability, and exceptional user experiences.",
    tags: ["React", "Flutter", "Node.js", "iOS/Android"],
  },
  {
    icon: IconChart,
    title: "Data Engineering & Analytics",
    desc: "Transform raw data into strategic intelligence. We build data pipelines, warehouses, and visualization dashboards that drive real decisions.",
    tags: ["Snowflake", "Databricks", "Power BI", "Spark"],
  },
  {
    icon: IconBuilding,
    title: "Enterprise Software & ERP",
    desc: "Modernize operations with ERP, CRM, and custom enterprise applications. We integrate SAP, Salesforce, and bespoke solutions at scale.",
    tags: ["SAP", "Salesforce", "ERP", "CRM"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-dark text-dark-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            End-to-End IT Solutions That Scale
          </h2>
          <p className="mt-5 text-dark-muted max-w-2xl">
            From talent acquisition to full-stack digital transformation — we've got you covered.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dark-border">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <article className="group relative bg-dark p-8 h-full border-t-2 border-t-transparent hover:border-t-primary transition-colors">
                  <Icon className="text-primary" width={32} height={32} />
                  <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-dark-muted leading-relaxed">{s.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] uppercase tracking-wider px-2.5 py-1 border border-dark-border text-dark-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover"
                  >
                    Read More <IconArrowRight width={14} height={14} />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}