import { useEffect, useState, type FormEvent } from "react";
import { IconClose } from "./Icons";
import { CONTACT_MODAL_EVENT } from "@/lib/contact-modal";

const inputCls =
  "w-full bg-white border border-border rounded-md px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";
const labelCls = "block text-sm font-medium text-foreground mb-1.5";

export function ContactModal() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(CONTACT_MODAL_EVENT, handler);
    return () => window.removeEventListener(CONTACT_MODAL_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setOpen(false);
      setSent(false);
    }, 1400);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-fade-in-up"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl shadow-2xl bg-white grid md:grid-cols-2"
      >
        {/* Left panel */}
        <div
          className="relative p-8 md:p-10 text-white flex flex-col justify-between min-h-[280px]"
          style={{
            background:
              "linear-gradient(160deg, #1e4d7a 0%, #1d4d4d 55%, #1e5a3a 100%)",
          }}
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Request a callback
            </h3>
            <p className="mt-4 text-sm md:text-base text-white/85 leading-relaxed max-w-md">
              Infynix Tech Solutions is a global IT services & digital transformation
              partner. Tell us about your project or staffing needs and our experts
              will reach out within one business day.
            </p>
          </div>
          <div className="mt-8 text-sm">
            <p className="font-semibold">Business Hours —</p>
            <p className="text-white/85">Weekday : 9am to 6pm EST</p>
            <p className="text-red-300">Sunday : closed</p>
          </div>
          <div className="pointer-events-none absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-white/5" />
        </div>

        {/* Right form */}
        <div className="relative p-6 md:p-8 overflow-y-auto max-h-[92vh]">
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition"
          >
            <IconClose />
          </button>

          <form onSubmit={onSubmit} className="space-y-4 mt-2">
            <div>
              <label className={labelCls}>Inquiry Type</label>
              <select className={inputCls} defaultValue="General Inquiry">
                <option>General Inquiry</option>
                <option>IT Staffing & Recruitment</option>
                <option>AI & Machine Learning</option>
                <option>Cloud & DevOps</option>
                <option>Web & Mobile Development</option>
                <option>Enterprise Software / ERP</option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>
                  First Name <span className="text-red-500">*</span>
                </label>
                <input className={inputCls} required maxLength={80} />
              </div>
              <div>
                <label className={labelCls}>
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input className={inputCls} required maxLength={80} />
              </div>
            </div>
            <div>
              <label className={labelCls}>
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                className={inputCls}
                placeholder="+1 201-555-0123"
                required
                maxLength={32}
              />
            </div>
            <div>
              <label className={labelCls}>
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className={inputCls}
                required
                maxLength={120}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={labelCls}>
                  Company Name <span className="text-red-500">*</span>
                </label>
                <input className={inputCls} required maxLength={120} />
              </div>
              <div>
                <label className={labelCls}>
                  Country <span className="text-red-500">*</span>
                </label>
                <input className={inputCls} required maxLength={60} />
              </div>
            </div>
            <div>
              <label className={labelCls}>Additional Information</label>
              <textarea className={inputCls} rows={3} maxLength={1000} />
            </div>
            <label className="flex items-start gap-2 text-sm text-foreground">
              <input type="checkbox" required className="mt-1" />
              <span>
                I agree to{" "}
                <a className="text-primary underline" href="#">
                  Terms &amp; Conditions
                </a>{" "}
                of Infynix Tech Solutions. <span className="text-red-500">*</span>
              </span>
            </label>
            <button
              type="submit"
              className="w-full md:w-auto px-7 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors"
            >
              {sent ? "Sent ✓" : "Request a callback"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
