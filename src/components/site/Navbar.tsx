import { useEffect, useState } from "react";
import { IconMenu, IconClose } from "./Icons";
import { openContactModal } from "@/lib/contact-modal";

const links = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#industries" },
  { label: "Solutions", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "#contact", action: "contact" as const },
];

export function Navbar({ dark = false }: { dark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBg = dark
    ? scrolled
      ? "bg-slate-950/90 border-b border-slate-900/80 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
      : "bg-transparent border-b border-transparent"
    : scrolled
      ? "bg-background border-b border-border shadow-[0_1px_0_0_var(--color-border)]"
      : "bg-background border-b border-border";

  const logoColor = dark ? "text-white" : "text-foreground";
  const linkColor = dark
    ? "text-slate-300 hover:text-white"
    : "text-foreground/80 hover:text-primary";
  const btnColor = dark ? "text-white" : "text-foreground";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <nav className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <a href="/#top" className={`font-extrabold tracking-tight text-[16px] flex items-center gap-1.5 hover:opacity-90 duration-300 ${logoColor}`}>
          <span>INFYNIX</span> 
          <span className="text-primary font-medium tracking-[0.06em]">TECH SOLUTIONS</span>
          <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onClick={(e) => {
                  if ((l as { action?: string }).action === "contact") {
                    e.preventDefault();
                    openContactModal();
                  }
                }}
                className={`text-sm font-medium transition-colors ${linkColor}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={openContactModal}
          className="hidden lg:inline-flex items-center bg-gradient-to-r from-primary to-[#3185BA] text-primary-foreground hover:shadow-lg hover:shadow-primary/10 px-5.5 py-2.5 text-sm font-semibold rounded-lg hover:-translate-y-0.5 transition-all duration-300 shadow-md shadow-black/5 cursor-pointer"
        >
          Work Together
        </button>

        <button
          className={`lg:hidden ${btnColor}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </nav>

      {open && (
        <div className={`lg:hidden border-t ${dark ? "border-slate-900 bg-slate-950" : "border-border bg-background"}`}>
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={(e) => {
                    if ((l as { action?: string }).action === "contact") {
                      e.preventDefault();
                      openContactModal();
                    }
                    setOpen(false);
                  }}
                  className={`block text-sm ${dark ? "text-slate-300" : "text-foreground/80"}`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <button
                onClick={() => {
                  openContactModal();
                  setOpen(false);
                }}
                className="w-full inline-block bg-gradient-to-r from-primary to-[#3185BA] text-primary-foreground px-5 py-3 text-sm font-semibold rounded-lg transition-colors cursor-pointer text-center"
              >
                Work Together
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}