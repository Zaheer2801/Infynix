import { MapPin, Mail, Phone, Linkedin, Facebook, Youtube } from "lucide-react";
import type { SVGProps } from "react";
import { Link } from "@tanstack/react-router";
import eVerifyLogo from "@/assets/e-verify.png";
import dunsLogo from "@/assets/duns-registered.png";
import { openContactModal } from "@/lib/contact-modal";
import logoImg from "@/assets/logo.png";

const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.945l-5.43-7.094L3.7 22H.44l8.02-9.166L.75 2h7.13l4.91 6.49L18.244 2Zm-1.218 18h1.86L7.06 4H5.1l11.926 16Z" />
  </svg>
);

type FooterLink = { label: string; to?: string; params?: Record<string, string>; action?: "contact" };
const cols: { title: string; items: FooterLink[] }[] = [
  {
    title: "Services",
    items: [
      { label: "IT Staffing", to: "/services/$slug", params: { slug: "it-staffing" } },
      { label: "AI & ML Solutions", to: "/services/$slug", params: { slug: "ai-ml" } },
      { label: "Cloud & DevOps", to: "/services/$slug", params: { slug: "cloud-devops" } },
      { label: "Web Development", to: "/services/$slug", params: { slug: "web-mobile" } },
      { label: "Data Analytics", to: "/services/$slug", params: { slug: "data-analytics" } },
      { label: "ERP Solutions", to: "/services/$slug", params: { slug: "enterprise-erp" } },
    ],
  },
  {
    title: "Industries",
    items: [
      { label: "Banking & Finance", to: "/industries/$slug", params: { slug: "banking" } },
      { label: "Healthcare", to: "/industries/$slug", params: { slug: "healthcare" } },
      { label: "Manufacturing", to: "/industries/$slug", params: { slug: "manufacturing" } },
      { label: "Retail", to: "/industries/$slug", params: { slug: "retail" } },
      { label: "Telecommunications", to: "/industries/$slug", params: { slug: "telecom" } },
      { label: "Government", to: "/industries/$slug", params: { slug: "government" } },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Careers", to: "/careers" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Digital Products", to: "/digital-products" },
      { label: "Blog", to: "/blog" },
      { label: "Contact", action: "contact" },
      { label: "Privacy Policy", to: "/" },
      { label: "Terms & Conditions", to: "/" },
    ],
  },
];

const socials = [
  { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/infynix-tech-solutions-llc/about/" },
  { Icon: IconX, label: "X", href: "https://twitter.com/infynixtek" },
  { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/infynixtek" },
  { Icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@infynixtek" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-dark-foreground border-t border-dark-border">
      <div className="mx-auto max-w-[1200px] px-6" style={{ paddingTop: "70px", paddingBottom: "30px" }}>
        <div className="grid lg:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr] gap-10">
          <div>
            <div className="flex items-center">
              <img 
                src={logoImg} 
                alt="Infynix Tech Solutions" 
                className="h-14 w-auto object-contain" 
              />
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
                  <li key={i.label}>
                    {i.action === "contact" ? (
                      <button
                        onClick={openContactModal}
                        className="text-sm text-dark-muted hover:text-dark-foreground transition-colors text-left"
                      >
                        {i.label}
                      </button>
                    ) : (
                      <Link
                        to={i.to as string}
                        params={i.params as never}
                        className="text-sm text-dark-muted hover:text-dark-foreground transition-colors"
                      >
                        {i.label}
                      </Link>
                    )}
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
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-primary shrink-0 mt-0.5" />
                <span>7901 4TH ST N STE 300, ST. PETERSBURG, FL. 33702 US</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-primary" />
                <a href="mailto:info@infynixtek.com" className="hover:text-dark-foreground transition-colors">info@infynixtek.com</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-primary" />
                <a href="tel:+17864001280" className="hover:text-dark-foreground transition-colors">+1 (786) 400-1280</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.e-verify.gov/e-verify-employer-search"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Verify Employer Search"
                className="cert-badge inline-flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 border border-dark-border transition-all duration-300"
              >
                <img src={eVerifyLogo} alt="E-Verify" className="h-6 w-auto object-contain" />
              </a>
              <span
                aria-label="D-U-N-S Registered"
                className="cert-badge inline-flex items-center justify-center rounded-md bg-white px-2.5 py-1.5 border border-dark-border transition-all duration-300"
              >
                <img src={dunsLogo} alt="D-U-N-S Registered" className="h-7 w-auto object-contain" />
              </span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-dark-border">
          <div className="text-[13px] text-dark-muted/70">
            © 2026 Infynix Tech Solutions, LLC. All rights reserved.
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
