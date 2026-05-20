import { useState, type FormEvent, type ReactNode } from "react";
import { Reveal } from "../Reveal";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Globe,
  ShieldCheck,
  BadgeCheck,
  ArrowRight,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";

const BRAND = "#006432";
const BRAND_DARK = "#004d26";
const AMBER = "#b8960c";

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
  { label: "Sunday", value: "Emergency Support Only" },
];
const socials: { label: string; handle: string; href: string; Icon: typeof Linkedin }[] = [
  { label: "LinkedIn", handle: "@ireshtechnologies", href: "#", Icon: Linkedin },
  { label: "Twitter", handle: "@ireshtech", href: "#", Icon: Twitter },
  { label: "Facebook", handle: "/ireshtechnologies", href: "#", Icon: Facebook },
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
    <div
      className="rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#f5f7f6", border: "1px solid #e0ede6" }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = BRAND)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#e0ede6")}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white"
          style={{ background: BRAND }}
        >
          {icon}
        </span>
        <div
          className="text-[11px] font-semibold uppercase tracking-[0.14em]"
          style={{ color: "#111" }}
        >
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
      <span style={{ color: "#888" }} className="shrink-0">
        {k}
      </span>
      {href ? (
        <a
          href={href}
          className="text-right truncate font-medium transition-colors"
          style={{ color: "#111" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = BRAND)}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
        >
          {v}
        </a>
      ) : (
        <span className="text-right font-medium" style={{ color: "#111" }}>
          {v}
        </span>
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
    "w-full bg-white rounded-lg px-4 py-3 text-sm text-[#111] placeholder:text-[#9aa6a0] focus:outline-none transition";
  const inputStyle: React.CSSProperties = {
    border: "1px solid #cfe2d6",
  };

  return (
    <section id="contact" style={{ background: "#ffffff" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-[90px]">
        {/* HEADER ROW */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <div>
              <div
                className="text-xs font-semibold uppercase"
                style={{ color: BRAND, letterSpacing: "0.1em" }}
              >
                Get In Touch
              </div>
              <h2
                className="mt-3 font-bold leading-[1.1]"
                style={{ color: "#111", fontSize: "38px" }}
              >
                Let's Build Something Great Together
              </h2>
              <p className="mt-4 max-w-xl" style={{ color: "#666", fontSize: "16px" }}>
                Tell us about your project or staffing needs. Our experts respond within 24
                business hours.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <span
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold"
                style={{ border: `1.5px solid ${BRAND}`, color: BRAND }}
              >
                <ShieldCheck size={16} /> Verified E-Verify
              </span>
              <span
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold"
                style={{ border: `1.5px solid ${AMBER}`, color: AMBER }}
              >
                <BadgeCheck size={16} /> Registered D-U-N-S
              </span>
            </div>
          </div>
        </Reveal>

        {/* OFFICES */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {offices.map((o, i) => (
            <Reveal key={o.code} delay={i * 80}>
              <div
                className="rounded-[12px] p-7 transition-all duration-300 hover:-translate-y-[3px] h-full"
                style={{ background: "#f5f7f6", border: "1px solid #e0ede6" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = BRAND)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = "#e0ede6")
                }
              >
                <div className="grid sm:grid-cols-[1fr_220px] gap-6 items-stretch">
                  <div>
                    <div
                      className="text-[11px] font-semibold uppercase"
                      style={{ color: BRAND, letterSpacing: "0.12em" }}
                    >
                      {o.code}
                    </div>
                    <div
                      className="mt-2 font-bold"
                      style={{ color: "#111", fontSize: "18px" }}
                    >
                      {o.title}
                    </div>
                    <div className="mt-3 space-y-1 text-sm" style={{ color: "#555" }}>
                      {o.address.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                    <div
                      className="mt-4 inline-flex items-center gap-2 text-xs font-semibold"
                      style={{ color: BRAND }}
                    >
                      <MapPin size={14} /> View on map
                    </div>
                  </div>
                  <div
                    className="relative overflow-hidden"
                    style={{ borderRadius: "8px", height: "140px" }}
                  >
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
            <ul className="space-y-2.5">
              {phones.map((p) => (
                <KV
                  key={p.label}
                  k={p.label}
                  v={p.value}
                  href={`tel:${p.value.replace(/\D/g, "")}`}
                />
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={<Mail size={18} />} title="Email">
            <ul className="space-y-2.5">
              {emails.map((e) => (
                <KV key={e.label} k={e.label} v={e.value} href={`mailto:${e.value}`} />
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={<Clock size={18} />} title="Business Hours">
            <ul className="space-y-2.5">
              {hours.map((h) => (
                <KV key={h.label} k={h.label} v={h.value} />
              ))}
            </ul>
          </InfoCard>

          <InfoCard icon={<Globe size={18} />} title="Follow Us">
            <ul className="space-y-2.5">
              {socials.map(({ label, handle, href, Icon }) => (
                <li
                  key={label}
                  className="flex items-center justify-between gap-3 text-sm"
                >
                  <span className="inline-flex items-center gap-2" style={{ color: "#888" }}>
                    <Icon size={14} /> {label}
                  </span>
                  <a
                    href={href}
                    className="font-medium transition-colors"
                    style={{ color: BRAND }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = BRAND_DARK)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = BRAND)}
                  >
                    {handle}
                  </a>
                </li>
              ))}
            </ul>
          </InfoCard>
        </div>

        {/* FORM */}
        <Reveal delay={120}>
          <div
            className="mt-10 rounded-[16px] p-8 md:p-12 grid lg:grid-cols-[1fr_1.3fr] gap-10"
            style={{ background: "#e8f5ee" }}
          >
            <div>
              <h3 className="font-bold leading-tight" style={{ color: "#111", fontSize: "28px" }}>
                Send Us a Message
              </h3>
              <p className="mt-3 text-sm" style={{ color: "#4a5d52" }}>
                Fill out the form and we'll get back to you within one business day.
              </p>
              <div className="mt-7 space-y-4 text-sm">
                {[
                  { Icon: Phone, label: "(219) 249-0009" },
                  { Icon: Mail, label: "hr@ireshtechnologies.com" },
                  { Icon: Clock, label: "Mon – Fri, 8 AM – 6 PM PST" },
                  { Icon: MapPin, label: "St Louis, MO · London, UK" },
                ].map(({ Icon, label }) => (
                  <div key={label} className="flex items-center gap-3" style={{ color: "#1f3a2a" }}>
                    <span
                      className="inline-flex h-8 w-8 items-center justify-center rounded-md"
                      style={{ background: "white", color: BRAND, border: "1px solid #cfe2d6" }}
                    >
                      <Icon size={15} />
                    </span>
                    <span className="font-medium">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input className={input} style={inputStyle} placeholder="First Name" required />
                <input className={input} style={inputStyle} placeholder="Last Name" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  className={input}
                  style={inputStyle}
                  type="email"
                  placeholder="Work Email"
                  required
                />
                <input className={input} style={inputStyle} placeholder="Company" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input className={input} style={inputStyle} placeholder="Phone" />
                <select className={input} style={inputStyle} defaultValue="">
                  <option value="" disabled>
                    Service Interested In
                  </option>
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <textarea
                className={input}
                style={inputStyle}
                rows={4}
                placeholder="Tell Us About Your Needs"
              />
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 w-full px-7 py-3.5 font-semibold text-white transition-colors"
                style={{ background: BRAND, borderRadius: "10px", fontSize: "16px" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = BRAND_DARK)}
                onMouseLeave={(e) => (e.currentTarget.style.background = BRAND)}
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
