import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiPython,
  SiFastapi,
  SiAmazon,
  SiMicrosoftazure,
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
  SiTableau,
  SiSap,
} from "react-icons/si";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";

type Tech = {
  name: string;
  icons: { Icon: IconType; color: string }[];
  bg: string; // hover background (brand)
  fg: string; // hover foreground (text/icons)
};

const techs: Tech[] = [
  {
    name: "React / Next.js",
    icons: [{ Icon: SiReact, color: "#61DAFB" }, { Icon: SiNextdotjs, color: "#ffffff" }],
    bg: "#20232a",
    fg: "#61DAFB",
  },
  {
    name: "Python / FastAPI",
    icons: [{ Icon: SiPython, color: "#FFD43B" }, { Icon: SiFastapi, color: "#009688" }],
    bg: "#1e3a5f",
    fg: "#FFD43B",
  },
  {
    name: "AWS / Azure",
    icons: [{ Icon: SiAmazon, color: "#FF9900" }, { Icon: SiMicrosoftazure, color: "#0078D4" }],
    bg: "#232F3E",
    fg: "#FF9900",
  },
  {
    name: "Docker / K8s",
    icons: [{ Icon: SiDocker, color: "#2496ED" }, { Icon: SiKubernetes, color: "#326CE5" }],
    bg: "#0db7ed",
    fg: "#ffffff",
  },
  {
    name: "LangChain / LLMs",
    icons: [{ Icon: SiLangchain, color: "#1C3C3C" }, { Icon: SiOpenai, color: "#ffffff" }],
    bg: "#1C3C3C",
    fg: "#ffffff",
  },
  {
    name: "Snowflake",
    icons: [{ Icon: SiSnowflake, color: "#29B5E8" }],
    bg: "#29B5E8",
    fg: "#ffffff",
  },
  {
    name: "Flutter / Swift",
    icons: [{ Icon: SiFlutter, color: "#02569B" }, { Icon: SiSwift, color: "#F05138" }],
    bg: "#02569B",
    fg: "#ffffff",
  },
  {
    name: "PostgreSQL / MongoDB",
    icons: [{ Icon: SiPostgresql, color: "#4169E1" }, { Icon: SiMongodb, color: "#47A248" }],
    bg: "#336791",
    fg: "#ffffff",
  },
  {
    name: "Apache Spark",
    icons: [{ Icon: SiApachespark, color: "#E25A1C" }],
    bg: "#E25A1C",
    fg: "#ffffff",
  },
  {
    name: "Salesforce",
    icons: [{ Icon: SiSalesforce, color: "#00A1E0" }],
    bg: "#00A1E0",
    fg: "#ffffff",
  },
  {
    name: "Power BI / Tableau",
    icons: [{ Icon: SiTableau, color: "#E97627" }],
    bg: "#F2C811",
    fg: "#1a1a1a",
  },
  {
    name: "SAP / ERP",
    icons: [{ Icon: SiSap, color: "#0FAAFF" }],
    bg: "#0FAAFF",
    fg: "#ffffff",
  },
];

export function TechStack() {
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

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-border border border-border">
          {techs.map((t, i) => (
            <Reveal key={t.name} delay={i * 30}>
              <div
                className="tech-card group relative overflow-hidden bg-background p-6 flex items-center gap-4 h-full transition-colors duration-500"
                style={
                  {
                    "--tech-bg": t.bg,
                    "--tech-fg": t.fg,
                  } as React.CSSProperties
                }
              >
                <span className="relative z-10 inline-flex h-10 items-center gap-2">
                  {t.icons.map(({ Icon, color }, idx) => (
                    <Icon
                      key={idx}
                      size={28}
                      className="tech-icon transition-colors duration-500"
                      style={{ color }}
                    />
                  ))}
                </span>
                <span className="relative z-10 text-sm font-medium text-foreground transition-colors duration-500 group-hover:text-[color:var(--tech-fg)]">
                  {t.name}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}