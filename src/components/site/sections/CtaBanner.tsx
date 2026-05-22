import { Reveal } from "../Reveal";
import { IconArrowRight } from "../Icons";
import { openContactModal } from "@/lib/contact-modal";

export function CtaBanner() {
  return (
    <section
      className="text-white relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0d5380 0%, #1a71ad 60%, #297010 100%)",
      }}
    >
      {/* Subtle tech dot matrix overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="mx-auto max-w-4xl px-6 py-24 text-center relative z-10">
        <Reveal>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
            Accelerate Your Technical Capability
          </h2>
          <p className="mt-5 text-white/80 text-base md:text-lg max-w-2xl mx-auto font-normal">
            Join over 350 market-leading enterprises who trust Infynix Tech Solutions to supply pre-screened
            technical experts, secure cloud architectures, and production-ready AI systems.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <button
              onClick={openContactModal}
              className="inline-flex items-center gap-2 bg-white text-primary hover:bg-slate-50 px-8 py-4 text-sm font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-md cursor-pointer"
            >
              Start a Conversation <IconArrowRight width={16} height={16} />
            </button>
            <a
              href="tel:+12192490009"
              className="inline-flex items-center gap-2 border border-white/20 text-white hover:border-white/50 px-8 py-4 text-sm font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
            >
              Call Us Today: +1 (219) 249-0009
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}