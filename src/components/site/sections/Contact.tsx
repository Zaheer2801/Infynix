import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "../Reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  ArrowRight,
  Linkedin,
  Facebook,
  Youtube,
} from "lucide-react";
import type { SVGProps } from "react";
import eVerifyLogo from "@/assets/e-verify.png";
import dunsLogo from "@/assets/duns-registered.png";

const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M18.244 2H21.5l-7.5 8.57L22.5 22h-6.945l-5.43-7.094L3.7 22H.44l8.02-9.166L.75 2h7.13l4.91 6.49L18.244 2Zm-1.218 18h1.86L7.06 4H5.1l11.926 16Z" />
  </svg>
);

const services = [
  "IT Staffing & Recruitment",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Web & Mobile Development",
  "Data Engineering",
  "Enterprise Software / ERP",
  "Digital Transformation",
];

const offices = [
  {
    code: "US HEADQUARTERS",
    title: "US Office",
    address: [
      "100 Chesterfield Business Parkway",
      "Suite 200, St Louis, MO 63005",
      "United States",
    ],
    mapSrc:
      "https://www.google.com/maps?q=100+Chesterfield+Business+Parkway,+St+Louis,+MO+63005&z=14&output=embed",
  },
  {
    code: "UK HEADQUARTERS",
    title: "UK Office",
    address: [
      "Iresh Holdings LTD",
      "275 New North Road #3002",
      "London, England, N17AA",
    ],
    mapSrc:
      "https://www.google.com/maps?q=275+New+North+Road,+London,+N1+7AA&z=14&output=embed",
  },
];

const phones = [
  { label: "Main", value: "(219) 249-0009" },
  { label: "Direct", value: "(555) 123-4567" },
  { label: "Emergency", value: "(555) 911-8324" },
];
const emails = [
  { label: "HR", value: "hr@ireshtechnologies.com" },
  { label: "General", value: "info@ireshtechnologies.com" },
  { label: "Sales", value: "sales@ireshtechnologies.com" },
  { label: "Support", value: "support@ireshtechnologies.com" },
];
const hours = [
  { label: "Mon – Fri", value: "8:00 AM – 6:00 PM PST" },
  { label: "Saturday", value: "9:00 AM – 2:00 PM PST" },
  { label: "Sunday", value: "Emergency Only" },
];
const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/ireshtechnologies", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://twitter.com/ireshtech", Icon: IconX },
  { label: "Facebook", href: "https://www.facebook.com/ireshtechnologies", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@ireshtechnologies", Icon: Youtube },
];

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-xl p-6 bg-secondary border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="flex items-center gap-3 mb-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          {icon}
        </span>
        <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground">
          {title}
        </div>
      </div>
      {children}
    </div>
  );
}

function KV({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <li className="flex items-baseline justify-between gap-3 text-sm">
      <span className="shrink-0 text-muted-foreground">{k}</span>
      {href ? (
        <a
          href={href}
          className="text-right truncate font-medium text-foreground hover:text-primary transition-colors"
        >
          {v}
        </a>
      ) : (
        <span className="text-right font-medium text-foreground">{v}</span>
      )}
    </li>
  );
}

export function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const input =
    "w-full bg-background border border-border rounded-lg px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-[1200px] px-6 py-[90px]">
        {/* HEADER */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                Get In Touch
              </div>
              <h2 className="mt-3 font-bold leading-[1.1] text-foreground text-[38px]">
                Let's Build Something Great Together
              </h2>
              <p className="mt-4 max-w-xl text-muted-foreground text-base">
                Tell us about your project or staffing needs. Our experts respond within 24
                business hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="https://www.e-verify.gov/e-verify-employer-search"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Verify Employer Search"
                className="cert-badge inline-flex items-center justify-center rounded-lg bg-background px-4 py-2 border border-border transition-all duration-300"
              >
                <img src={eVerifyLogo} alt="E-Verify" className="h-8 w-auto object-contain" />
              </a>
              <span
                aria-label="D-U-N-S Registered"
                className="cert-badge inline-flex items-center justify-center rounded-lg bg-background px-4 py-2 border border-border transition-all duration-300"
              >
                <img src={dunsLogo} alt="D-U-N-S Registered" className="h-10 w-auto object-contain" />
              </span>
            </div>
          </div>
        </Reveal>

        {/* OFFICES */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {offices.map((o, i) => (
            <Reveal key={o.code} delay={i * 80}>
              <div className="rounded-[12px] p-7 bg-secondary border border-border hover:border-primary hover:-translate-y-[3px] transition-all duration-300 h-full">
                <div className="grid sm:grid-cols-[1fr_220px] gap-6 items-stretch">
                  <div>
                    <div className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                      {o.code}
                    </div>
                    <div className="mt-2 font-bold text-foreground text-[18px]">{o.title}</div>
                    <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {o.address.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-primary">
                      <MapPin size={14} /> View on map
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg h-[140px]">
                    <iframe
                      title={`${o.title} map`}
                      src={o.mapSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* INFO ROW */}
        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InfoCard icon={<Phone size={18} />} title="Phone">
            <div className="flex items-center gap-3 pt-1">
              {phones.map((p) => (
                <a
                  key={p.label}
                  href={`tel:${p.value.replace(/\D/g, "")}`}
                  aria-label={`${p.label} ${p.value}`}
                  title={`${p.label}: ${p.value}`}
                  className="social-glow inline-flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5"
                >
                  <Phone size={16} />
                </a>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={<Mail size={18} />} title="Email">
            <div className="flex items-center gap-3 pt-1">
              {emails.map((e) => (
                <a
                  key={e.label}
                  href={`mailto:${e.value}`}
                  aria-label={`${e.label} ${e.value}`}
                  title={`${e.label}: ${e.value}`}
                  className="social-glow inline-flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                </a>
              ))}
            </div>
          </InfoCard>

          <InfoCard icon={<Clock size={18} />} title="Business Hours">
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <KV key={h.label} k={h.label} v={h.value} />
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={<Globe size={18} />} title="Follow Us">
            <div className="flex items-center gap-3 pt-1">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-glow group inline-flex h-11 w-11 items-center justify-center rounded-full bg-background border border-border text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5"
                >
                  <Icon width={18} height={18} />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Follow us for product updates, hiring news and insights.
            </p>
          </InfoCard>
        </div>

        {/* FORM */}
        <Reveal delay={120}>
          <div className="mt-10 rounded-[16px] p-8 md:p-12 grid lg:grid-cols-[1fr_1.3fr] gap-10 bg-secondary border border-border">
            <div>
              <h3 className="font-bold leading-tight text-foreground text-[28px]">
                Send Us a Message
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                Fill out the form and we'll get back to you within one business day.
              </p>
              <div className="mt-7 space-y-4 text-sm">
                {[
                  { Icon: Phone, label: "Phone" },
                  { Icon: Mail, label: "Email" },
                  { Icon: Clock, label: "Mon – Fri, 8 AM – 6 PM PST" },
                  { Icon: MapPin, label: "St Louis, MO · London, UK" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3 text-foreground">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-background text-primary border border-border">
                      <Icon size={15} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className={input} placeholder="First Name" required />
                <input className={input} placeholder="Last Name" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className={input} type="email" placeholder="Work Email" required />
                <input className={input} placeholder="Company" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className={input} placeholder="Phone" />
                <select className={input} defaultValue="">
                  <option value="" disabled>
                    Service Interested In
                  </option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <textarea className={input} rows={4} placeholder="Tell Us About Your Needs" />
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 font-semibold text-primary-foreground bg-primary hover:bg-primary-hover rounded-[10px] text-base transition-colors"
              >
                {sent ? "Message Sent ✓" : "Send Message"} <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
