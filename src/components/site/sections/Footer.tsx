import { IconLinkedIn, IconX, IconFacebook, IconYoutube } from "../Icons";
import { MapPin, Phone, Mail, Clock, Globe, ShieldCheck, BadgeCheck } from "lucide-react";


const cols = [
  {
    title: "Services",
    items: [
      "IT Staffing",
      "AI & ML Solutions",
      "Cloud & DevOps",
      "Web Development",
      "Data Analytics",
      "ERP Solutions",
    ],
  },
  {
    title: "Industries",
    items: [
      "Banking & Finance",
      "Healthcare",
      "Manufacturing",
      "Retail",
      "Telecommunications",
      "Government",
    ],
  },
  {
    title: "Company",
    items: [
      "About Us",
      "Careers",
      "Case Studies",
      "Blog",
      "Contact",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
];

const offices = [
  {
    code: "US",
    label: "US Office",
    mapSrc:
      "https://www.google.com/maps?q=100+Chesterfield+Business+Parkway,+St+Louis,+MO+63005&z=14&output=embed",
    lines: [
      "100 Chesterfield Business Parkway",
      "Suite 200, St Louis, MO 63005",
      "United States",
    ],
  },
  {
    code: "UK",
    label: "UK Office",
    mapSrc:
      "https://www.google.com/maps?q=275+New+North+Road,+London,+N1+7AA&z=14&output=embed",
    lines: [
      "Iresh Holdings LTD",
      "275 New North Road #3002",
      "London, England, N17AA",
    ],
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
  { day: "Mon – Fri", time: "8:00 AM – 6:00 PM PST" },
  { day: "Saturday", time: "9:00 AM – 2:00 PM PST" },
  { day: "Sunday", time: "Emergency Support Only" },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-dark-foreground border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="font-bold tracking-tight text-base">
              IRESH <span className="text-primary">TECHNOLOGIES</span>
            </div>
            <p className="mt-5 text-sm text-dark-muted leading-relaxed max-w-sm">
              Your strategic partner for IT staffing, AI solutions, and digital transformation. 15+
              years of delivering excellence across industries.
            </p>
            <div className="mt-6 flex gap-3">
              {[IconLinkedIn, IconX, IconFacebook, IconYoutube].map((Ic, i) => (
                <a
                  key={i}
                  href="#"
                  className="inline-flex h-9 w-9 items-center justify-center border border-dark-border text-dark-muted hover:text-primary hover:border-primary transition-colors"
                  aria-label="social"
                >
                  <Ic width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
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
        </div>

        <div className="mt-16 pt-10 border-t border-dark-border">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                Contact Information
              </div>
              <h3 className="mt-2 text-2xl font-bold tracking-tight">
                Reach out through any of these channels
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-2 border border-emerald-400/30 bg-emerald-400/10 text-emerald-300 rounded-md">
                <ShieldCheck size={16} className="shrink-0" />
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">Verified</div>
                  <div className="text-xs font-semibold">E-Verify</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-2 border border-amber-400/30 bg-amber-400/10 text-amber-200 rounded-md">
                <BadgeCheck size={16} className="shrink-0" />
                <div className="leading-tight">
                  <div className="text-[10px] uppercase tracking-[0.18em] opacity-80">Registered</div>
                  <div className="text-xs font-semibold">D-U-N-S</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-5">
            {offices.map((o) => (
              <div
                key={o.code}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-sm hover:border-primary/50 transition-all"
              >
                <div className="grid sm:grid-cols-[1fr_180px]">
                  <div className="p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary border border-primary/30">
                        <MapPin size={18} />
                      </span>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-primary font-semibold">
                          {o.code} Headquarters
                        </div>
                        <div className="text-base font-semibold text-white">{o.label}</div>
                      </div>
                    </div>
                    <div className="mt-4 text-sm text-white/70 leading-relaxed space-y-1">
                      {o.lines.map((l) => (
                        <div key={l}>{l}</div>
                      ))}
                    </div>
                  </div>
                  <div className="relative h-36 sm:h-full min-h-[140px] border-t sm:border-t-0 sm:border-l border-white/10">
                    <iframe
                      title={`${o.label} map`}
                      src={o.mapSrc}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 h-full w-full grayscale-[0.3] contrast-110 opacity-90"
                      style={{ border: 0 }}
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1437]/40 to-transparent" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ContactCard icon={<Phone size={18} />} title="Phone">
              <ul className="text-sm space-y-2">
                {phones.map((p) => (
                  <li key={p.label} className="flex items-baseline justify-between gap-3">
                    <span className="text-white/60">{p.label}</span>
                    <a href={`tel:${p.value.replace(/\D/g, "")}`} className="text-white hover:text-primary transition-colors font-medium">
                      {p.value}
                    </a>
                  </li>
                ))}
              </ul>
            </ContactCard>

            <ContactCard icon={<Mail size={18} />} title="Email">
              <ul className="text-sm space-y-2">
                {emails.map((e) => (
                  <li key={e.label} className="flex items-baseline justify-between gap-3">
                    <span className="text-white/60">{e.label}</span>
                    <a href={`mailto:${e.value}`} className="text-white hover:text-primary transition-colors font-medium truncate text-xs">
                      {e.value}
                    </a>
                  </li>
                ))}
              </ul>
            </ContactCard>

            <ContactCard icon={<Clock size={18} />} title="Business Hours">
              <ul className="text-sm space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between gap-3">
                    <span className="text-white/60">{h.day}</span>
                    <span className="text-white font-medium text-right text-xs">{h.time}</span>
                  </li>
                ))}
              </ul>
            </ContactCard>

            <ContactCard icon={<Globe size={18} />} title="Follow Us">
              <ul className="text-sm space-y-2">
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-white/60">LinkedIn</span>
                  <a href="#" className="text-white hover:text-primary transition-colors font-medium">@ireshtechnologies</a>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-white/60">Twitter</span>
                  <a href="#" className="text-white hover:text-primary transition-colors font-medium">@ireshtech</a>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-white/60">Facebook</span>
                  <a href="#" className="text-white hover:text-primary transition-colors font-medium">/ireshtechnologies</a>
                </li>
              </ul>
            </ContactCard>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-dark-border flex flex-wrap justify-between gap-4 text-xs text-dark-muted">
          <div>© 2026 Iresh Technologies, Inc. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-dark-foreground">Privacy Policy</a>
            <a href="#" className="hover:text-dark-foreground">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}