import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";

const techs = [
  "React / Next.js",
  "Python / FastAPI",
  "AWS / Azure",
  "Docker / K8s",
  "LangChain / LLMs",
  "Snowflake",
  "Flutter / Swift",
  "PostgreSQL / MongoDB",
  "Apache Spark",
  "Salesforce",
  "Power BI / Tableau",
  "SAP / ERP",
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
            <Reveal key={t} delay={i * 30}>
              <div className="bg-background p-6 flex items-center gap-4 h-full hover:bg-secondary transition-colors">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-primary/10 text-primary text-sm font-bold">
                  {t.charAt(0)}
                </span>
                <span className="text-sm font-medium text-foreground">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}