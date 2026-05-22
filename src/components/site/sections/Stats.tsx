import { Reveal } from "../Reveal";

const stats = [
  ["15+", "Years of Technical Excellence"],
  ["2500+", "Technical Experts Placed"],
  ["350+", "Enterprise Clients Served"],
  ["95%", "Annual Client Retention"],
];

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background technical grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map(([n, l], i) => (
            <Reveal key={l} delay={i * 80}>
              <div className="text-center md:text-left">
                <div className="text-5xl md:text-6xl font-bold tracking-tight">{n}</div>
                <div className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">
                  {l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center text-sm uppercase tracking-[0.18em] text-primary-foreground/80">
          Certified Partner &nbsp;|&nbsp; E-Verify & DUNS Registered
        </div>
      </div>
    </section>
  );
}