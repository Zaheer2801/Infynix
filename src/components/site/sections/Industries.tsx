import type { ComponentType, SVGProps } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import {
  IconBank,
  IconHeart,
  IconFactory,
  IconCart,
  IconAntenna,
  IconShield,
} from "../Icons";

type Item = { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; desc: string; slug: string };

const items: Item[] = [
  { icon: IconBank, slug: "banking", title: "Banking & Financial Services", desc: "Core banking modernization, risk analytics, compliance automation and fintech integrations for leading banks and insurers." },
  { icon: IconHeart, slug: "healthcare", title: "Healthcare & Life Sciences", desc: "HIPAA-compliant solutions, EHR integrations, telehealth platforms, and clinical data management for healthcare leaders." },
  { icon: IconFactory, slug: "manufacturing", title: "Manufacturing & Engineering", desc: "Industrial IoT, smart factory solutions, supply chain optimization, and predictive maintenance for hi-end engineering firms." },
  { icon: IconCart, slug: "retail", title: "Retail & E-Commerce", desc: "Omnichannel platforms, personalization engines, inventory management, and customer analytics for modern retailers." },
  { icon: IconAntenna, slug: "telecom", title: "Telecom & Media", desc: "Network management, OSS/BSS transformation, media streaming, and content delivery solutions for telcos and broadcasters." },
  { icon: IconShield, slug: "government", title: "Government & Public Sector", desc: "Secure, compliant digital government solutions — citizen portals, data governance, and smart city infrastructure." },
];

export function Industries() {
  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="industries" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Industries We Serve</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Deep Domain Expertise Across Sectors
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            We understand that every industry has unique challenges. Our specialized teams bring
            targeted solutions.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <Reveal key={it.title} delay={i * 60}>
                <Link
                  to="/industries/$slug"
                  params={{ slug: it.slug }}
                  onMouseEnter={handleMove}
                  onMouseMove={handleMove}
                  className="industry-card group relative overflow-hidden p-8 rounded-2xl border border-border bg-card h-full isolate shadow-[0_10px_30px_-6px_rgba(13,83,128,0.03)] hover:shadow-[0_20px_48px_-8px_rgba(13,83,128,0.08)] hover:-translate-y-1 duration-500 transition-all cursor-pointer block"
                >
                  <Icon className="relative z-10 text-primary transition-colors duration-500 group-hover:text-white" width={32} height={32} />
                  <h3 className="relative z-10 mt-6 text-lg font-semibold text-foreground transition-colors duration-500 group-hover:text-white">
                    {it.title}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm text-muted-foreground leading-relaxed transition-colors duration-500 group-hover:text-white/90">
                    {it.desc}
                  </p>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}