import { useState, useEffect } from "react";
import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";
import { openContactModal } from "@/lib/contact-modal";
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
  SiTypescript,
  SiTailwindcss,
  SiDatabricks,
} from "react-icons/si";
import { FaAws, FaJava } from "react-icons/fa";

// Custom ServiceNow icon representing IT Workflows and tasks
const SiServicenow = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" strokeWidth="2" />
    <path d="M8.5 12.5l2.5 2.5 5-5" />
  </svg>
);

// Custom Oracle icon representing Enterprise Database & Cloud Core
const SiOracle = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12 4C5.373 4 0 7.582 0 12s5.373 8 12 8 12-3.582 12-8-5.373-8-12-8zm0 12.8c-3.976 0-7.2-2.149-7.2-4.8s3.224-4.8 7.2-4.8 7.2 2.149 7.2 4.8-3.224 4.8-7.2 4.8z" />
  </svg>
);

interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string; size?: number }>;
  color: string;
}

interface ServiceData {
  name: string;
  title: string;
  desc: string;
  glowColor: string;
  textColor: string;
  bgColor: string;
  borderColor: string;
  activeColorClass: string;
  techs: TechItem[];
}

const servicesList: ServiceData[] = [
  {
    name: "Staffing",
    title: "Premium Engineering Talent",
    desc: "Elite, pre-screened technical staffing pipelines delivering top-tier software engineers, product architects, and technology leads.",
    glowColor: "rgba(59, 130, 246, 0.22)", // Royal Blue
    textColor: "text-blue-600",
    bgColor: "bg-blue-50/90",
    borderColor: "border-blue-200/60",
    activeColorClass: "bg-blue-600 text-white shadow shadow-blue-500/20 border-blue-500",
    techs: [
      { name: "React", Icon: SiReact, color: "text-[#61DAFB]" },
      { name: "TypeScript", Icon: SiTypescript, color: "text-[#3178C6]" },
      { name: "Postgres", Icon: SiPostgresql, color: "text-[#4169E1]" },
      { name: "Java", Icon: FaJava, color: "text-[#007396]" },
    ],
  },
  {
    name: "AI & ML",
    title: "Production Generative AI",
    desc: "Deploy customized Agentic workflows, fine-tuned LLMs, and highly-scalable vector search systems built for enterprise operations.",
    glowColor: "rgba(167, 139, 250, 0.22)", // Violet
    textColor: "text-purple-600",
    bgColor: "bg-purple-50/90",
    borderColor: "border-purple-200/60",
    activeColorClass: "bg-purple-600 text-white shadow shadow-purple-500/20 border-purple-500",
    techs: [
      { name: "OpenAI", Icon: SiOpenai, color: "text-slate-900" },
      { name: "Python", Icon: SiPython, color: "text-[#3776AB]" },
      { name: "LangChain", Icon: SiLangchain, color: "text-[#1C3C3A]" },
      { name: "FastAPI", Icon: SiFastapi, color: "text-[#009688]" },
    ],
  },
  {
    name: "DevOps",
    title: "Resilient Cloud Operations",
    desc: "Achieve modern cloud-native architectures utilizing Docker containers, microservices, automated CI/CD pipelines, and secure IaC.",
    glowColor: "rgba(6, 182, 212, 0.22)", // Cyan
    textColor: "text-cyan-600",
    bgColor: "bg-cyan-50/90",
    borderColor: "border-cyan-200/60",
    activeColorClass: "bg-cyan-600 text-white shadow shadow-cyan-500/20 border-cyan-500",
    techs: [
      { name: "AWS", Icon: FaAws, color: "text-[#FF9900]" },
      { name: "Kubernetes", Icon: SiKubernetes, color: "text-[#326CE5]" },
      { name: "Docker", Icon: SiDocker, color: "text-[#2496ED]" },
      { name: "FastAPI", Icon: SiFastapi, color: "text-[#009688]" },
    ],
  },
  {
    name: "Web/Mob",
    title: "Stunning High-Performance Apps",
    desc: "Develop exceptionally optimized, fully responsive web and cross-platform mobile solutions featuring dynamic UI flows.",
    glowColor: "rgba(16, 185, 129, 0.22)", // Emerald Mint
    textColor: "text-emerald-600",
    bgColor: "bg-emerald-50/90",
    borderColor: "border-emerald-200/60",
    activeColorClass: "bg-emerald-600 text-white shadow shadow-emerald-500/20 border-emerald-500",
    techs: [
      { name: "Next.js", Icon: SiNextdotjs, color: "text-slate-950" },
      { name: "Flutter", Icon: SiFlutter, color: "text-[#02569B]" },
      { name: "Swift", Icon: SiSwift, color: "text-[#F05138]" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "text-[#06B6D4]" },
    ],
  },
  {
    name: "Data Eng",
    title: "Unified Analytical Pipelines",
    desc: "Synthesize large-scale multi-tenant transactional datasets using Spark clusters, real-time streams, and Snowflake data lakes.",
    glowColor: "rgba(245, 158, 11, 0.22)", // Amber Orange
    textColor: "text-amber-600",
    bgColor: "bg-amber-50/90",
    borderColor: "border-amber-200/60",
    activeColorClass: "bg-amber-600 text-white shadow shadow-amber-500/20 border-amber-500",
    techs: [
      { name: "Snowflake", Icon: SiSnowflake, color: "text-[#29B5E8]" },
      { name: "Spark", Icon: SiApachespark, color: "text-[#E25A1C]" },
      { name: "Databricks", Icon: SiDatabricks, color: "text-[#FF3621]" },
      { name: "MongoDB", Icon: SiMongodb, color: "text-[#47A248]" },
    ],
  },
  {
    name: "ERP/CRM",
    title: "SAP & Salesforce Core",
    desc: "Complete end-to-end alignment of enterprise ERP systems, Salesforce CRM cloud operations, and automated task-management flows.",
    glowColor: "rgba(244, 63, 94, 0.22)", // Rose Red
    textColor: "text-rose-600",
    bgColor: "bg-rose-50/90",
    borderColor: "border-rose-200/60",
    activeColorClass: "bg-rose-600 text-white shadow shadow-rose-500/20 border-rose-500",
    techs: [
      { name: "SAP ERP", Icon: SiSap, color: "text-[#0F8EC7]" },
      { name: "Salesforce", Icon: SiSalesforce, color: "text-[#00A1E0]" },
      { name: "ServiceNow", Icon: SiServicenow, color: "text-[#293E40]" },
      { name: "Oracle", Icon: SiOracle, color: "text-[#F80000]" },
    ],
  },
];

const stats = [
  ["15+", "Years Experience"],
  ["2500+", "Technical Placements"],
  ["350+", "Enterprise Clients"],
  ["95%", "Retention Rate"],
];

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoCycling, setIsAutoCycling] = useState(true);

  useEffect(() => {
    if (!isAutoCycling) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % servicesList.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isAutoCycling]);

  return (
    <section
      id="top"
      className="relative text-foreground overflow-hidden py-24 md:py-32 lg:py-36 z-10"
      style={{
        background:
          "linear-gradient(135deg, #ffffff 0%, #f3f8fc 45%, #e1f0fc 85%, #dceefc 100%)",
      }}
    >
      <style>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(14px) scale(0.97);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .tech-card-animate {
          animation: slideUpFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .float-card-animate {
          animation: floatCard 4s ease-in-out infinite;
        }
        @keyframes pulseRing {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.45);
          }
          70% {
            box-shadow: 0 0 0 7px rgba(16, 185, 129, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
          }
        }
        .pulse-ring-animate {
          position: relative;
        }
        .pulse-ring-animate::after {
          content: '';
          position: absolute;
          inset: -3.5px;
          border-radius: 9999px;
          animation: pulseRing 2.2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      {/* Wave mesh overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(var(--color-primary) 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Floating vector accent shapes (Infynix corporate look) */}
      <div className="pointer-events-none absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-gradient-to-tr from-primary/10 to-accent/5 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-gradient-to-tr from-[#3185BA]/15 to-[#A7D3F3]/5 blur-3xl opacity-50" />

      <div className="mx-auto max-w-7xl px-6 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: ORIGINAL TEXT & STATS */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3.5 mb-6">
                <span className="h-0.5 w-10 bg-accent shrink-0 block" />
                <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-primary">
                  PREMIER ENTERPRISE TALENT & TECHNOLOGY ARCHITECTS
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-slate-900">
                Engineering the <br />
                <span className="bg-gradient-to-r from-primary via-[#3185BA] to-accent bg-clip-text text-transparent">
                  Digital Future
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600 leading-relaxed font-normal">
                Infynix Tech Solutions delivers elite, pre-screened technical staffing pipelines, 
                production-ready Generative AI systems, and cloud infrastructure architectures built to scale.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-[#3185BA] text-white hover:shadow-lg hover:shadow-primary/20 px-8 py-4 text-sm font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-black/5"
                >
                  Explore Services <IconArrowRight width={16} height={16} />
                </a>
                <button
                  onClick={openContactModal}
                  className="inline-flex items-center gap-2 border border-border bg-white text-slate-700 hover:bg-slate-50 px-8 py-4 text-sm font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                >
                  Talk to an Expert
                </button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-16 pt-10 border-t border-slate-200/60 max-w-xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 gap-y-4">
                  {stats.map(([n, l]) => (
                    <div key={l} className="space-y-1">
                      <div className="text-3xl font-extrabold text-primary tracking-tight">{n}</div>
                      <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 leading-snug">
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: DYNAMIC SERVICE CAROUSEL CARD */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <Reveal delay={200} className="w-full">
              <div className="relative mx-auto max-w-[500px] lg:max-w-none w-full group/hub">
                
                {/* Neon soft backing glow that morphs colors based on the active service */}
                <div
                  className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-tr blur-3xl opacity-40 transition-all duration-1000 ease-in-out pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${servicesList[activeIndex].glowColor} 0%, transparent 70%)`,
                  }}
                />
                
                {/* Premium Glassmorphic Card Frame */}
                <div
                  className="float-card-animate relative rounded-2xl border border-slate-200/70 bg-white/70 p-5 md:p-6 backdrop-blur-md overflow-hidden transition-all duration-300"
                  style={{ boxShadow: "0 0 60px rgba(26,107,201,0.12)" }}
                >
                  
                  {/* Top Bar Header */}
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-200/60 select-none">
                    <div className="flex items-center gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="text-[9px] uppercase font-bold tracking-widest text-slate-400 bg-slate-100/80 px-3 py-1 rounded-full border border-slate-200/40">
                      Infynix Capabilities Hub
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-ring-animate" />
                      <span className="text-[8px] font-extrabold text-emerald-500 uppercase tracking-wider leading-none">
                        LIVE
                      </span>
                    </div>
                  </div>

                  {/* Service Navigation Grid Inside Card */}
                  <div className="grid grid-cols-3 gap-1.5 mb-5">
                    {servicesList.map((service, index) => {
                      const isActive = index === activeIndex;
                      return (
                        <button
                          key={service.name}
                          onClick={() => {
                            setActiveIndex(index);
                            setIsAutoCycling(false);
                          }}
                          className={`px-2 py-2.5 rounded-xl text-[9px] font-extrabold transition-all duration-300 uppercase tracking-wider border cursor-pointer text-center truncate ${
                            isActive
                              ? service.activeColorClass
                              : "bg-slate-50/60 hover:bg-slate-100/90 text-slate-500 border-slate-200/40"
                          }`}
                        >
                          {service.name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Service text (Slides up and fades in on index transition) */}
                  <div
                    key={`text-${activeIndex}`}
                    className="tech-card-animate min-h-[90px] flex flex-col justify-center"
                  >
                    <div className={`text-[10px] font-extrabold uppercase tracking-widest ${servicesList[activeIndex].textColor}`}>
                      Active Service
                    </div>
                    <h3 className="text-base font-bold text-slate-800 tracking-tight mt-1">
                      {servicesList[activeIndex].title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed font-normal">
                      {servicesList[activeIndex].desc}
                    </p>
                  </div>

                  {/* Staggered Technology Logo Row (One after another) */}
                  <div
                    key={`tech-${activeIndex}`}
                    className="grid grid-cols-4 gap-3 mt-6 border-t border-slate-200/60 pt-5"
                  >
                    {servicesList[activeIndex].techs.map((tech, idx) => {
                      const Icon = tech.Icon;
                      return (
                        <div
                          key={tech.name}
                          className="tech-card-animate group/tech flex flex-col items-center justify-center bg-slate-50/70 border border-slate-100/80 rounded-xl py-3.5 px-1.5 hover:shadow-md hover:bg-[#edf3ff] hover:border-l-[3px] hover:border-l-[#1a6bc9] hover:-translate-y-[2px] hover:border-slate-300 transition-all duration-300 cursor-pointer"
                          style={{
                            animationDelay: `${idx * 150}ms`,
                            opacity: 0,
                          }}
                        >
                          <div className="h-9 w-9 flex items-center justify-center rounded-lg bg-white shadow-inner group-hover/tech:scale-108 transition-transform duration-300 mb-1.5">
                            <Icon className={`text-xl ${tech.color}`} />
                          </div>
                          <span className="text-[8px] font-extrabold text-slate-400 uppercase tracking-wider group-hover/tech:text-slate-600 transition-colors">
                            {tech.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}