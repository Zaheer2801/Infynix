import { IconLinkedIn, IconX, IconFacebook, IconYoutube } from "../Icons";


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
    flag: "US",
    label: "US Office",
    lines: [
      "100 Chesterfield Business Parkway",
      "Suite 200, St Louis, MO 63005",
      "United States",
    ],
  },
  {
    flag: "UK",
    label: "UK Office",
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
            <div className="text-xs uppercase tracking-[0.18em] text-dark-muted">
              E-Verify &amp; DUNS Registered
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {offices.map((o) => (
              <div
                key={o.flag}
                className="group relative border border-dark-border bg-dark-foreground/[0.02] p-6 hover:border-primary/60 hover:bg-dark-foreground/[0.04] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center bg-primary/10 text-primary text-[10px] font-bold tracking-wider border border-primary/30">
                    {o.flag}
                  </span>
                  <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                    {o.label}
                  </div>
                </div>
                <div className="mt-4 text-sm text-dark-muted leading-relaxed space-y-1">
                  {o.lines.map((l) => (
                    <div key={l}>{l}</div>
                  ))}
                </div>
              </div>
            ))}

            <div className="border border-dark-border bg-dark-foreground/[0.02] p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-primary/10 text-primary border border-primary/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>
                </span>
                <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Phone Numbers
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2">
                {phones.map((p) => (
                  <li key={p.label} className="flex items-baseline justify-between gap-3">
                    <span className="text-dark-muted">{p.label}</span>
                    <a href={`tel:${p.value.replace(/\D/g, "")}`} className="text-dark-foreground hover:text-primary transition-colors font-medium">
                      {p.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-dark-border bg-dark-foreground/[0.02] p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-primary/10 text-primary border border-primary/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </span>
                <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Email
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2">
                {emails.map((e) => (
                  <li key={e.label} className="flex items-baseline justify-between gap-3">
                    <span className="text-dark-muted">{e.label}</span>
                    <a href={`mailto:${e.value}`} className="text-dark-foreground hover:text-primary transition-colors font-medium truncate">
                      {e.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-dark-border bg-dark-foreground/[0.02] p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-primary/10 text-primary border border-primary/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>
                </span>
                <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Business Hours
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2">
                {hours.map((h) => (
                  <li key={h.day} className="flex items-baseline justify-between gap-3">
                    <span className="text-dark-muted">{h.day}</span>
                    <span className="text-dark-foreground font-medium text-right">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-dark-border bg-dark-foreground/[0.02] p-6 hover:border-primary/60 transition-colors">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center bg-primary/10 text-primary border border-primary/30">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                </span>
                <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
                  Follow Us
                </div>
              </div>
              <ul className="mt-4 text-sm space-y-2">
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-dark-muted">LinkedIn</span>
                  <a href="#" className="text-dark-foreground hover:text-primary transition-colors font-medium">@ireshtechnologies</a>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-dark-muted">Twitter</span>
                  <a href="#" className="text-dark-foreground hover:text-primary transition-colors font-medium">@ireshtech</a>
                </li>
                <li className="flex items-baseline justify-between gap-3">
                  <span className="text-dark-muted">Facebook</span>
                  <a href="#" className="text-dark-foreground hover:text-primary transition-colors font-medium">/ireshtechnologies</a>
                </li>
              </ul>
            </div>
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