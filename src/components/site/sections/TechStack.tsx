import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiDocker,
  SiKubernetes,
  SiLangchain,
  SiOpenai,
  SiSnowflake,
  SiFlutter,
  SiSwift,
  SiPostgresql,
  SiMongodb,
  SiApachespark,
  SiSalesforce,
  SiSap,
} from "react-icons/si";
import { FaAws, FaMicrosoft, FaChartBar } from "react-icons/fa";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";

type Tech = {
  name: string;
  icons: { Icon: IconType; color: string }[];
  desc: string;
  bg: string; // hover background (brand)
  fg: string; // hover foreground (text/icons)
};

const techs: Tech[] = [
  {
    name: "React / Next.js",
    icons: [{ Icon: SiReact, color: "#61DAFB" }, { Icon: SiNextdotjs, color: "#ffffff" }],
    desc: "Lightning-fast, SEO-ready web apps built with the modern React ecosystem and server-side rendering.",
    bg: "#20232a",
    fg: "#61DAFB",
  },
  {
    name: "Python / FastAPI",
    icons: [{ Icon: SiPython, color: "#FFD43B" }, { Icon: SiFastapi, color: "#009688" }],
    desc: "High-performance Python services and APIs powering data, ML, and mission-critical backends.",
    bg: "#1e3a5f",
    fg: "#FFD43B",
  },
  {
    name: "AWS / Azure",
    icons: [{ Icon: FaAws, color: "#FF9900" }, { Icon: FaMicrosoft, color: "#0078D4" }],
    desc: "Cloud-native architectures, secure migrations, and managed infrastructure on the world's leading clouds.",
    bg: "#232F3E",
    fg: "#FF9900",
  },
  {
    name: "Docker / K8s",
    icons: [{ Icon: SiDocker, color: "#2496ED" }, { Icon: SiKubernetes, color: "#326CE5" }],
    desc: "Containerized workloads and Kubernetes orchestration delivering elastic scale and zero-downtime releases.",
    bg: "#0db7ed",
    fg: "#ffffff",
  },
  {
    name: "LangChain / LLMs",
    icons: [{ Icon: SiLangchain, color: "#1C3C3C" }, { Icon: SiOpenai, color: "#ffffff" }],
    desc: "Production-grade Generative AI — RAG pipelines, agents, and LLM apps tailored to your domain.",
    bg: "#1C3C3C",
    fg: "#ffffff",
  },
  {
    name: "Snowflake",
    icons: [{ Icon: SiSnowflake, color: "#29B5E8" }],
    desc: "Cloud data warehousing and analytics that unify your enterprise data for faster decisions.",
    bg: "#29B5E8",
    fg: "#ffffff",
  },
  {
    name: "Flutter / Swift",
    icons: [{ Icon: SiFlutter, color: "#02569B" }, { Icon: SiSwift, color: "#F05138" }],
    desc: "Beautiful, native-quality mobile experiences for iOS and Android from a single shared codebase.",
    bg: "#02569B",
    fg: "#ffffff",
  },
  {
    name: "PostgreSQL / MongoDB",
    icons: [{ Icon: SiPostgresql, color: "#4169E1" }, { Icon: SiMongodb, color: "#47A248" }],
    desc: "Reliable relational and document databases tuned for performance, integrity, and scale.",
    bg: "#336791",
    fg: "#ffffff",
  },
  {
    name: "Apache Spark",
    icons: [{ Icon: SiApachespark, color: "#E25A1C" }],
    desc: "Distributed big-data processing for streaming, ETL, and large-scale machine learning pipelines.",
    bg: "#E25A1C",
    fg: "#ffffff",
  },
  {
    name: "Salesforce",
    icons: [{ Icon: SiSalesforce, color: "#00A1E0" }],
    desc: "End-to-end Salesforce implementation, customization, and integrations across Sales, Service, and Marketing Cloud.",
    bg: "#00A1E0",
    fg: "#ffffff",
  },
  {
    name: "Power BI / Tableau",
    icons: [{ Icon: FaChartBar, color: "#F2C811" }],
    desc: "Interactive dashboards and self-service BI that turn raw data into clear business intelligence.",
    bg: "#F2C811",
    fg: "#1a1a1a",
  },
  {
    name: "SAP / ERP",
    icons: [{ Icon: SiSap, color: "#0FAAFF" }],
    desc: "SAP S/4HANA and enterprise ERP modernization — finance, supply chain, and HR running as one.",
    bg: "#0FAAFF",
    fg: "#ffffff",
  },
];

export function TechStack() {
  const [active, setActive] = useState<string | null>(null);
  const mid = Math.ceil(techs.length / 2);
  const rowA = techs.slice(0, mid);
  const rowB = techs.slice(mid);

  const renderTile = (t: Tech, key: string) => {
    const Icons = t.icons;
    const isActive = active === key;
    return (
      <button
        key={key}
        type="button"
        onClick={() => setActive((cur) => (cur === key ? null : key))}
        onMouseEnter={(e) => (e.currentTarget.closest(".tech-marquee") as HTMLElement | null)?.style.setProperty("animation-play-state", "paused")}
        onMouseLeave={(e) => (e.currentTarget.closest(".tech-marquee") as HTMLElement | null)?.style.removeProperty("animation-play-state")}
        className={`tech-tile group relative shrink-0 w-[280px] text-left bg-white p-6 rounded-2xl border border-border shadow-[0_1px_2px_rgba(0,0,0,0.03)] ${isActive ? "is-active" : ""}`}
        style={{ ["--tech-fg" as any]: t.fg === "#ffffff" ? t.bg : t.fg } as React.CSSProperties}
      >
        <span className="inline-flex items-center gap-2.5">
          {Icons.map(({ Icon, color }, idx) => (
            <Icon key={idx} size={32} style={{ color }} />
          ))}
        </span>
        <h3 className="mt-4 text-base font-semibold text-foreground">{t.name}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {t.desc}
        </p>
      </button>
    );
  };

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Tech Stack</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Technologies We Master
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Our teams are certified across the industry's most in-demand platforms and tools.
          </p>
        </Reveal>

        <div className="mt-12 space-y-5 tech-marquee-mask">
          <div className="overflow-hidden">
            <div className="tech-marquee">
              {[...rowA, ...rowA].map((t, i) => renderTile(t, `a-${i}-${t.name}`))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="tech-marquee reverse">
              {[...rowB, ...rowB].map((t, i) => renderTile(t, `b-${i}-${t.name}`))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}