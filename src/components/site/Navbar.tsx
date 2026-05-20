import { useEffect, useState } from "react";
import { IconMenu, IconClose } from "./Icons";

const links = [
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Solutions", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Careers", href: "#footer" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-background border-b border-border ${scrolled ? "shadow-[0_1px_0_0_var(--color-border)]" : ""}`}
    >
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-bold tracking-tight text-[15px] text-foreground">
          IRESH <span className="text-primary">TECHNOLOGIES</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center bg-primary text-primary-foreground hover:bg-primary-hover px-5 py-2.5 text-sm font-semibold transition-colors"
        >
          Work Together
        </a>

        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="inline-block bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold"
              >
                Work Together
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}