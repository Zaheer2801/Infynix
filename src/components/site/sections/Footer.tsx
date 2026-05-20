import { MapPin, Mail, Phone, ShieldCheck, BadgeCheck, Linkedin, Facebook, Youtube } from "lucide-react";
import type { SVGProps } from "react";

const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.945l-5.43-7.094L3.7 22H.44l8.02-9.166L.75 2h7.13l4.91 6.49L18.244 2Zm-1.218 18h1.86L7.06 4H5.1l11.926 16Z" />
  </svg>
);

const cols = [
  { title: "Services", items: ["IT Staffing", "AI & ML Solutions", "Cloud & DevOps", "Web Development", "Data Analytics", "ERP Solutions"] },
  { title: "Industries", items: ["Banking & Finance", "Healthcare", "Manufacturing", "Retail", "Telecommunications", "Government"] },
  { title: "Company", items: ["About Us", "Careers", "Case Studies", "Blog", "Contact", "Privacy Policy", "Terms & Conditions"] },
];

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/ireshtechnologies" },
  { Icon: IconX, label: "X", href: "https://twitter.com/ireshtech" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/ireshtechnologies" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@ireshtechnologies" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-dark-foreground border-t border-dark-border">
      <div className="mx-auto max-w-[1200px] px-6" style={{ paddingTop: "70px", paddingBottom: "30px" }}>
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="font-bold tracking-tight text-base">
              IRESH <span className="text-primary">TECHNOLOGIES</span>
            </div>
            <p className="mt-5 text-sm leading-[1.7] text-dark-muted">
              Your strategic partner for IT staffing, AI solutions, and digital transformation.
              15+ years of delivering excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-glow inline-flex h-9 w-9 items-center justify-center rounded-full border border-dark-border text-dark-foreground transition-all duration-300 hover:bg-primary hover:border-primary hover:-translate-y-0.5"
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a href="#" className="text-sm text-dark-muted hover:text-dark-foreground transition-colors">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[13px] font-semibold uppercase tracking-[0.08em] text-primary">
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-sm text-dark-muted">
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> St Louis, MO (US)</li>
              <li className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> London, England (UK)</li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a href="mailto:hr@ireshtechnologies.com" className="hover:text-dark-foreground transition-colors">hr@ireshtechnologies.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <a href="tel:2192490009" className="hover:text-dark-foreground transition-colors">(219) 249-0009</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border border-primary/50 text-primary bg-primary/10">
                <ShieldCheck size={13} /> E-Verify Certified
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold border border-accent/50 bg-accent/10" style={{ color: "var(--accent)" }}>
                <BadgeCheck size={13} /> DUNS Registered
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-dark-border">
          <div className="text-[13px] text-dark-muted/70">
            © 2026 Iresh Technologies, Inc. All rights reserved.
          </div>
          <div className="flex gap-5 text-[13px]">
            {["Privacy Policy", "Terms & Conditions"].map((l) => (
              <a key={l} href="#" className="text-dark-muted/70 hover:text-dark-foreground transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
