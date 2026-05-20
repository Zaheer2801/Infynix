import { useState, type FormEvent } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import { IconArrowRight } from "../Icons";

const services = [
  "IT Staffing & Recruitment",
  "AI & Machine Learning",
  "Cloud & DevOps",
  "Web & Mobile Development",
  "Data Engineering",
  "Enterprise Software",
  "ERP",
  "Digital Transformation",
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const input =
    "w-full bg-background border border-border px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary transition-colors";

  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight max-w-3xl">
            Let's Build Something Great Together
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl">
            Tell us about your project or staffing needs and our experts will get back to you within
            24 hours.
          </p>
        </Reveal>

        <div className="mt-14 grid lg:grid-cols-2 gap-12">
          <Reveal>
            <div className="space-y-8">
              <ContactItem label="US Office" value="100 Chesterfield Business Parkway, Suite 200, St Louis, MO 63005" />
              <ContactItem label="UK Office" value="275 New North Road #3002, London, England, N17AA" />
              <ContactItem label="Email" value="hr@ireshtechnologies.com" />
              <ContactItem label="Phone" value="+1 (219) 249-0009" />
              <ContactItem label="Business Hours" value="Mon–Fri, 9:00 AM – 6:00 PM EST" />
              <div className="border-l-2 border-primary pl-5 py-2 bg-secondary">
                <p className="text-sm text-foreground/90 leading-relaxed">
                  We respond to all inquiries within 24 business hours. For urgent staffing needs,
                  call us directly for same-day support.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form onSubmit={onSubmit} className="bg-secondary p-8 border border-border space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className={input} placeholder="First Name" required />
                <input className={input} placeholder="Last Name" required />
              </div>
              <input className={input} type="email" placeholder="Work Email" required />
              <div className="grid grid-cols-2 gap-4">
                <input className={input} placeholder="Company" />
                <input className={input} placeholder="Phone" />
              </div>
              <select className={input} defaultValue="">
                <option value="" disabled>
                  Service Interested In
                </option>
                {services.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
              <textarea className={input} rows={5} placeholder="Tell Us About Your Needs" />
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-hover px-7 py-3.5 text-sm font-semibold transition-colors w-full justify-center"
              >
                {sent ? "Message Sent" : "Send Message"} <IconArrowRight width={16} height={16} />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-border pb-5">
      <div className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">{label}</div>
      <div className="mt-2 text-foreground/90 text-sm leading-relaxed">{value}</div>
    </div>
  );
}