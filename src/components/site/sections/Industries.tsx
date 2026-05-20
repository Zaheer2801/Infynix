import type { ComponentType, SVGProps } from "react";
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

type Item = { icon: ComponentType<SVGProps<SVGSVGElement>>; title: string; desc: string };

const items: Item[] = [
  {
    icon: IconBank,
    title: "Banking & Financial Services",
    desc: "Core banking modernization, risk analytics, compliance automation and fintech integrations for leading banks and insurers.",
  },
  {
    icon: IconHeart,
    title: "Healthcare & Life Sciences",
    desc: "HIPAA-compliant solutions, EHR integrations, telehealth platforms, and clinical data management for healthcare leaders.",
  },
  {
    icon: IconFactory,
    title: "Manufacturing & Engineering",
    desc: "Industrial IoT, smart factory solutions, supply chain optimization, and predictive maintenance for hi-end engineering firms.",
  },
  {
    icon: IconCart,
    title: "Retail & E-Commerce",
    desc: "Omnichannel platforms, personalization engines, inventory management, and customer analytics for modern retailers.",
  },
  {
    icon: IconAntenna,
    title: "Telecom & Media",
    desc: "Network management, OSS/BSS transformation, media streaming, and content delivery solutions for telcos and broadcasters.",
  },
  {
    icon: IconShield,
    title: "Government & Public Sector",
    desc: "Secure, compliant digital government solutions — citizen portals, data governance, and smart city infrastructure.",
  },
];

export function Industries() {
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
                <article className="group p-8 border border-border bg-card border-t-2 border-t-transparent hover:border-t-primary transition-colors h-full">
                  <Icon className="text-primary" width={32} height={32} />
                  <h3 className="mt-6 text-lg font-semibold text-foreground">{it.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}