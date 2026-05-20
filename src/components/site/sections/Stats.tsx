import { Reveal } from "../Reveal";

const stats = [
  ["15+", "Years of Excellence"],
  ["2500+", "Talent Placed"],
  ["350+", "Enterprise Clients"],
  ["95%", "Client Retention"],
];

export function Stats() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-20">
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