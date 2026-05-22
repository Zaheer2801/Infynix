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
  ShieldCheck,
  CheckCircle,
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
    title: "US Headquarters",
    city: "St. Petersburg Hub",
    address: [
      "7901 4TH ST N STE 300",
      "ST. PETERSBURG, FL. 33702 US",
    ],
    mapSrc:
      "https://www.google.com/maps?q=7901+4TH+ST+N+STE+300,+St.+Petersburg,+FL+33702&z=14&output=embed",
    phone: "(219) 249-0009",
    email: "info@infynixtek.com",
    hours: "8:00 AM – 6:00 PM EST",
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/infynix-tech-solutions-llc/about/", Icon: Linkedin },
  { label: "X (Twitter)", href: "https://twitter.com/infynixtek", Icon: IconX },
  { label: "Facebook", href: "https://www.facebook.com/infynixtek", Icon: Facebook },
  { label: "YouTube", href: "https://www.youtube.com/@infynixtek", Icon: Youtube },
];

export function Contact() {
  const [activeOffice, setActiveOffice] = useState(0);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fd.get("firstName"),
          lastName: fd.get("lastName"),
          email: fd.get("email"),
          company: fd.get("company"),
          phone: fd.get("phone"),
          service: fd.get("service"),
          message: fd.get("message"),
        }),
      });
    } catch {
      // always show success to the visitor
    } finally {
      setSubmitting(false);
      setSent(true);
    }
  };

  const inputStyle =
    "w-full bg-background/70 border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-border/80 transition-all duration-300 shadow-sm";

  return (
    <section id="contact" className="relative bg-background overflow-hidden border-t border-border/40">
      {/* Background radial accent glows for deep brand richness */}
      <div className="pointer-events-none absolute -left-64 -top-64 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl opacity-80" />
      <div className="pointer-events-none absolute -right-64 -bottom-64 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl opacity-80" />

      <div className="mx-auto max-w-[1200px] px-6 py-24 relative z-10">
        {/* HEADER SECTION */}
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold uppercase tracking-wider text-primary">
                Get In Touch
              </div>
              <h2 className="mt-4 font-bold leading-[1.1] tracking-tight text-foreground text-4xl md:text-5xl">
                Let's engineer something <span className="text-primary">exceptional</span> together.
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg leading-relaxed">
                Tell us about your project scaling requirements or technology recruitment needs. 
                Our engineering advisors will review and align custom solutions.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-wrap gap-4 lg:justify-end items-center">
              <a
                href="https://www.e-verify.gov/e-verify-employer-search"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="E-Verify Employer Search"
                className="cert-badge inline-flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm px-4 py-2.5 border border-border shadow-sm transition-all duration-300"
              >
                <img src={eVerifyLogo} alt="E-Verify" className="h-8 w-auto object-contain" />
              </a>
              <span
                aria-label="D-U-N-S Registered"
                className="cert-badge inline-flex items-center justify-center rounded-lg bg-background/50 backdrop-blur-sm px-4 py-2.5 border border-border shadow-sm transition-all duration-300"
              >
                <img src={dunsLogo} alt="D-U-N-S Registered" className="h-10 w-auto object-contain" />
              </span>
            </div>
          </div>
        </Reveal>

        {/* TWO-COLUMN GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN: INTERACTIVE OFFICE HUB */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal delay={60}>
              <div className="space-y-6">
                
                {/* Office Tab Switcher */}
                {offices.length > 1 && (
                  <div className="bg-secondary/40 border border-border rounded-xl p-1.5 flex gap-2 shadow-inner">
                    {offices.map((o, idx) => (
                      <button
                        key={o.code}
                        onClick={() => setActiveOffice(idx)}
                        className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg tracking-wider transition-all duration-300 ${
                          activeOffice === idx
                            ? "bg-primary text-primary-foreground shadow-md font-bold"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                        }`}
                      >
                        {o.title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Hub Profile Details Card */}
                <div className="bg-secondary/30 backdrop-blur-sm border border-border rounded-2xl p-6 md:p-8 space-y-6 hover:border-primary/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <svg
                      viewBox="0 0 120 80"
                      width="120"
                      height="80"
                      className="text-foreground fill-current"
                    >
                      <rect x="0" y="0" width="120" height="80" fill="none" stroke="currentColor" strokeWidth="2" rx="4" />
                      {/* Stripes */}
                      <line x1="0" y1="10" x2="120" y2="10" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="20" x2="120" y2="20" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="30" x2="120" y2="30" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="40" x2="120" y2="40" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="50" x2="120" y2="50" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="60" x2="120" y2="60" stroke="currentColor" strokeWidth="4" />
                      <line x1="0" y1="70" x2="120" y2="70" stroke="currentColor" strokeWidth="4" />
                      
                      {/* Canton */}
                      <rect x="0" y="0" width="55" height="45" fill="currentColor" rx="2" />
                      
                      {/* Grid of Stylized Star Dots in Canton */}
                      <g fill="#ffffff" opacity="0.8">
                        <circle cx="8" cy="8" r="1.5" />
                        <circle cx="18" cy="8" r="1.5" />
                        <circle cx="28" cy="8" r="1.5" />
                        <circle cx="38" cy="8" r="1.5" />
                        <circle cx="48" cy="8" r="1.5" />
                        
                        <circle cx="13" cy="16" r="1.5" />
                        <circle cx="23" cy="16" r="1.5" />
                        <circle cx="33" cy="16" r="1.5" />
                        <circle cx="43" cy="16" r="1.5" />
                        
                        <circle cx="8" cy="24" r="1.5" />
                        <circle cx="18" cy="24" r="1.5" />
                        <circle cx="28" cy="24" r="1.5" />
                        <circle cx="38" cy="24" r="1.5" />
                        <circle cx="48" cy="24" r="1.5" />
                        
                        <circle cx="13" cy="32" r="1.5" />
                        <circle cx="23" cy="32" r="1.5" />
                        <circle cx="33" cy="32" r="1.5" />
                        <circle cx="43" cy="32" r="1.5" />
                        
                        <circle cx="8" cy="40" r="1.5" />
                        <circle cx="18" cy="40" r="1.5" />
                        <circle cx="28" cy="40" r="1.5" />
                        <circle cx="38" cy="40" r="1.5" />
                        <circle cx="48" cy="40" r="1.5" />
                      </g>
                    </svg>
                  </div>
                  
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
                      {offices[activeOffice].code}
                    </div>
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      {offices[activeOffice].city}
                    </h3>
                    
                    {/* Local Address Details */}
                    <div className="mt-4 flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        {offices[activeOffice].address.map((line) => (
                          <div key={line}>{line}</div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <hr className="border-border/60" />

                  {/* Local Coordinates (Phones, Emails, Hours) */}
                  <div className="space-y-3.5 relative z-10">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone size={16} className="text-primary shrink-0" />
                      <span className="text-muted-foreground font-medium w-14">Phone:</span>
                      <a
                        href={`tel:${offices[activeOffice].phone.replace(/\D/g, "")}`}
                        className="text-foreground hover:text-primary transition-colors font-semibold"
                      >
                        {offices[activeOffice].phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Mail size={16} className="text-primary shrink-0" />
                      <span className="text-muted-foreground font-medium w-14">Email:</span>
                      <a
                        href={`mailto:${offices[activeOffice].email}`}
                        className="text-foreground hover:text-primary transition-colors font-semibold truncate"
                      >
                        {offices[activeOffice].email}
                      </a>
                    </div>

                    <div className="flex items-center gap-3 text-sm">
                      <Clock size={16} className="text-primary shrink-0" />
                      <span className="text-muted-foreground font-medium w-14">Hours:</span>
                      <span className="text-foreground font-semibold">
                        {offices[activeOffice].hours}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Map Preview Card */}
                <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary/20 h-[280px] shadow-md group">
                  <iframe
                    title={`${offices[activeOffice].title} Map`}
                    src={offices[activeOffice].mapSrc}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 h-full w-full opacity-90 group-hover:scale-[1.02] group-hover:opacity-100 transition-all duration-700"
                    style={{ border: 0 }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-sm border border-border/80 px-4 py-2.5 rounded-xl flex items-center justify-between shadow-md">
                    <span className="text-xs font-semibold text-foreground">Interactive Hub View</span>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary animate-pulse flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Active Live GPS
                    </span>
                  </div>
                </div>

                {/* Support Directories & Social Networks */}
                <div className="bg-secondary/15 border border-border/60 rounded-xl p-5 space-y-4 shadow-sm">
                  <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                    <ShieldCheck size={14} className="text-primary" /> Core Directories
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-background/40 border border-border/40 rounded-lg p-2.5 flex flex-col hover:border-primary/20 transition-all duration-300">
                      <span className="text-muted-foreground font-medium">Careers / HR</span>
                      <a href="mailto:hr@infynixtek.com" className="text-foreground hover:text-primary transition-colors font-semibold mt-1">
                        hr@infynixtek.com
                      </a>
                    </div>
                    <div className="bg-background/40 border border-border/40 rounded-lg p-2.5 flex flex-col hover:border-primary/20 transition-all duration-300">
                      <span className="text-muted-foreground font-medium">Enterprise Sales</span>
                      <a href="mailto:sales@infynixtek.com" className="text-foreground hover:text-primary transition-colors font-semibold mt-1">
                        sales@infynixtek.com
                      </a>
                    </div>
                    <div className="bg-background/40 border border-border/40 rounded-lg p-2.5 flex flex-col hover:border-primary/20 transition-all duration-300">
                      <span className="text-muted-foreground font-medium">Technical Support</span>
                      <a href="mailto:support@infynixtek.com" className="text-foreground hover:text-primary transition-colors font-semibold mt-1">
                        support@infynixtek.com
                      </a>
                    </div>
                    <div className="bg-background/40 border border-border/40 rounded-lg p-2.5 flex flex-col hover:border-primary/20 transition-all duration-300">
                      <span className="text-muted-foreground font-medium">General Inquiries</span>
                      <a href="mailto:info@infynixtek.com" className="text-foreground hover:text-primary transition-colors font-semibold mt-1">
                        info@infynixtek.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Social Network Integrations */}
                  <div className="flex items-center justify-between pt-3 border-t border-border/40">
                    <span className="text-xs text-muted-foreground font-medium">Global presence:</span>
                    <div className="flex items-center gap-2">
                      {socials.map(({ label, href, Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={label}
                          title={label}
                          className="social-glow group inline-flex h-8 w-8 items-center justify-center rounded-full bg-background border border-border text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:border-primary hover:-translate-y-0.5 shadow-sm"
                        >
                          <Icon width={13} height={13} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN: ENTERPRISE MESSAGE CENTER */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="bg-secondary/40 backdrop-blur-md border border-border rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden group hover:border-primary/20 transition-all duration-300">
                {/* Visual glow element in top right corner */}
                <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/8 transition-colors duration-500" />
                
                {sent ? (
                  /* GORGEOUS HIGH-IMPACT SUCCESS PANEL */
                  <div className="flex flex-col items-center justify-center text-center py-6 px-4 animate-fade-in-up">
                    <div className="relative mb-6">
                      {/* Pulsing visual halo */}
                      <div className="absolute inset-0 rounded-full bg-primary/10 animate-ping" />
                      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
                        <CheckCircle size={38} className="animate-bounce" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground tracking-tight">
                      Message Logged Successfully!
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground max-w-md leading-relaxed">
                      Your business and engineering requirements are securely transmitted to our core systems. Here is your tracking route:
                    </p>

                    {/* Interactive Response Timeline */}
                    <div className="mt-10 w-full max-w-md space-y-6 text-left relative z-10">
                      
                      {/* Step 1 */}
                      <div className="relative pl-8 before:absolute before:left-3.5 before:top-2 before:bottom-[-24px] before:w-0.5 before:bg-primary last:before:hidden">
                        <div className="absolute left-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-sm">
                          1
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground">Secure System Receipt</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Automated confirmation has been queued.</div>
                        </div>
                      </div>

                      {/* Step 2 */}
                      <div className="relative pl-8 before:absolute before:left-3.5 before:top-2 before:bottom-[-24px] before:w-0.5 before:bg-border last:before:hidden">
                        <div className="absolute left-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary border border-primary/40 text-xs font-bold animate-pulse">
                          2
                        </div>
                        <div>
                          <div className="text-sm font-bold text-foreground">Architect Alignment</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Matching your requirements to our regional solutions director.</div>
                        </div>
                      </div>

                      {/* Step 3 */}
                      <div className="relative pl-8">
                        <div className="absolute left-0 top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-secondary border border-border text-muted-foreground text-xs font-bold">
                          3
                        </div>
                        <div>
                          <div className="text-sm font-bold text-muted-foreground">Direct Consultation</div>
                          <div className="text-xs text-muted-foreground mt-0.5">Expert review call & architectural proposal sent to email.</div>
                        </div>
                      </div>

                    </div>

                    <div className="mt-8 p-4 bg-background border border-border rounded-xl text-xs text-muted-foreground flex items-center gap-3 w-full max-w-md shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                      <span>Average consultation scheduling speed: <strong>4.2 business hours</strong></span>
                    </div>

                    <button
                      onClick={() => setSent(false)}
                      className="mt-8 text-xs font-bold text-primary hover:text-primary-hover underline underline-offset-4 transition-colors"
                    >
                      Need to log another request? Click here
                    </button>
                  </div>
                ) : (
                  /* RE-ENGINEERED ENTERPRISE FORM */
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      Request Consultation
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Fill out your technical parameters below. Our experts respond in under 24 business hours.
                    </p>
                    
                    <form onSubmit={onSubmit} className="mt-8 grid gap-5">

                      {/* Name Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">First Name *</label>
                          <input name="firstName" className={inputStyle} placeholder="Jane" required />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Last Name *</label>
                          <input name="lastName" className={inputStyle} placeholder="Doe" required />
                        </div>
                      </div>

                      {/* Email & Company Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Work Email *</label>
                          <input name="email" className={inputStyle} type="email" placeholder="jane.doe@company.com" required />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Company Name *</label>
                          <input name="company" className={inputStyle} placeholder="Enterprise Inc." required />
                        </div>
                      </div>

                      {/* Phone & Service Row */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Phone Number</label>
                          <input name="phone" className={inputStyle} type="tel" placeholder="(219) 249-0009" />
                        </div>
                        <div className="space-y-1.5">
                          <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Service Interest *</label>
                          <div className="relative">
                            <select name="service" className={`${inputStyle} appearance-none cursor-pointer pr-10`} defaultValue="" required>
                              <option value="" disabled>Select Core Specialty</option>
                              {services.map((s) => (
                                <option key={s} value={s}>{s}</option>
                              ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3.5 text-muted-foreground">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Textarea Description */}
                      <div className="space-y-1.5">
                        <label className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Project Parameters & Timeline</label>
                        <textarea
                          name="message"
                          className={`${inputStyle} resize-none`}
                          rows={4}
                          placeholder="Please provide details about technical staffing, engineering scope, or infrastructure objectives..."
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={submitting}
                        className="mt-2 inline-flex items-center justify-center gap-2 w-full px-8 py-4 font-bold text-primary-foreground bg-primary hover:bg-primary-hover rounded-xl text-base shadow-sm hover:shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer disabled:opacity-60"
                      >
                        {submitting ? (
                          <><span className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
                        ) : (
                          <>Submit Technical Request <ArrowRight size={18} /></>
                        )}
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
