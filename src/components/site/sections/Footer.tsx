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

export function Footer() {
  return (
    <footer id="footer" className="bg-dark text-dark-foreground border-t border-dark-border">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <img
                src={logoMark}
                alt="Iresh Technologies"
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9 object-contain"
              />
              <span className="font-bold tracking-tight text-base leading-none">
                IRESH <span className="text-primary">TECHNOLOGIES</span>
              </span>
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

        <div className="mt-12 pt-8 border-t border-dark-border grid md:grid-cols-2 gap-6 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">
              Contact Info
            </div>
            <div className="mt-3 text-sm text-dark-muted space-y-1">
              <div>US: St Louis, MO &nbsp;|&nbsp; UK: London, England</div>
              <div>hr@ireshtechnologies.com</div>
              <div>(219) 249-0009</div>
            </div>
          </div>
          <div className="md:text-right text-xs uppercase tracking-[0.18em] text-dark-muted">
            E-Verify & DUNS Registered
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