import { MapPin, Mail, Phone, ShieldCheck, BadgeCheck, Linkedin, Facebook, Youtube } from "lucide-react";
import type { SVGProps } from "react";

const BRAND = "#006432";
const DARK_BG = "#0a1a0f";

/* X (Twitter) logo — lucide doesn't ship the new X mark */
const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.945l-5.43-7.094L3.7 22H.44l8.02-9.166L.75 2h7.13l4.91 6.49L18.244 2Zm-1.218 18h1.86L7.06 4H5.1l11.926 16Z" />
  </svg>
);

const cols = [
  {
    title: "Services",
    items: ["IT Staffing", "AI & ML Solutions", "Cloud & DevOps", "Web Development", "Data Analytics", "ERP Solutions"],
  },
  {
    title: "Industries",
    items: ["Banking & Finance", "Healthcare", "Manufacturing", "Retail", "Telecommunications", "Government"],
  },
  {
    title: "Company",
    items: ["About Us", "Careers", "Case Studies", "Blog", "Contact", "Privacy Policy", "Terms & Conditions"],
  },
];

const socials = [
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: IconX, label: "X" },
  { Icon: Facebook, label: "Facebook" },
  { Icon: Youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer id="footer" style={{ background: DARK_BG }} className="text-white">
      <div className="mx-auto max-w-[1200px] px-6" style={{ paddingTop: "70px", paddingBottom: "30px" }}>
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-10">
          {/* Column 1 */}
          <div>
            <div className="font-bold tracking-tight text-white text-lg">
              IRESH <span style={{ color: BRAND }}>TECHNOLOGIES</span>
            </div>
            <p className="mt-5 text-sm leading-[1.7]" style={{ color: "rgba(255,255,255,0.65)" }}>
              Your strategic partner for IT staffing, AI solutions, and digital transformation. 15+
              years of delivering excellence.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "white" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = BRAND;
                    e.currentTarget.style.borderColor = BRAND;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div
                className="text-[13px] font-semibold uppercase"
                style={{ color: BRAND, letterSpacing: "0.08em" }}
              >
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.items.map((i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.7)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.7)")}
                    >
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Column 5 — Contact */}
          <div>
            <div
              className="text-[13px] font-semibold uppercase"
              style={{ color: BRAND, letterSpacing: "0.08em" }}
            >
              Contact
            </div>
            <ul className="mt-5 space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
              <li className="flex items-center gap-2">
                <MapPin size={14} style={{ color: BRAND }} /> St Louis, MO (US)
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={14} style={{ color: BRAND }} /> London, England (UK)
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} style={{ color: BRAND }} />
                <a href="mailto:hr@ireshtechnologies.com" className="hover:text-white transition-colors">
                  hr@ireshtechnologies.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} style={{ color: BRAND }} />
                <a href="tel:2192490009" className="hover:text-white transition-colors">
                  (219) 249-0009
                </a>
              </li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  border: "1px solid rgba(0,200,100,0.45)",
                  color: "#4ade80",
                  background: "rgba(0,200,100,0.08)",
                }}
              >
                <ShieldCheck size={13} /> E-Verify Certified
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold"
                style={{
                  border: "1px solid rgba(255,200,0,0.45)",
                  color: "#fbbf24",
                  background: "rgba(255,200,0,0.08)",
                }}
              >
                <BadgeCheck size={13} /> DUNS Registered
              </span>
            </div>
          </div>
        </div>

        <div
          className="mt-14 pt-6 flex flex-wrap items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)" }}>
            © 2026 Iresh Technologies, Inc. All rights reserved.
          </div>
          <div className="flex gap-5 text-[13px]">
            {["Privacy Policy", "Terms & Conditions"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
