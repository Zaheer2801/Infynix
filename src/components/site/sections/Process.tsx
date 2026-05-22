import { useEffect, useRef, useState } from "react";
import { Reveal } from "../Reveal";
import { SectionLabel } from "../SectionLabel";
import { Search, Map, Target, Rocket, TrendingUp } from "lucide-react";

interface StepData {
  num: string;
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string; size?: number }>;
  glowColor: string;
  textColor: string;
}

const steps: StepData[] = [
  {
    num: "01",
    title: "Discovery",
    desc: "Align on strategic goals, technical architectures, and resource dependencies to shape a clear initiative.",
    icon: Search,
    glowColor: "rgba(30, 111, 255, 0.35)",
    textColor: "text-blue-400",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "Formulate a tailored engineering roadmap with transparent checkpoints, delivery cycles, and success metrics.",
    icon: Map,
    glowColor: "rgba(167, 139, 250, 0.35)",
    textColor: "text-purple-400",
  },
  {
    num: "03",
    title: "Sourcing",
    desc: "Leverage our proprietary database of over 500k tech candidates and automated matching tools to find top talent.",
    icon: Target,
    glowColor: "rgba(6, 182, 212, 0.35)",
    textColor: "text-cyan-400",
  },
  {
    num: "04",
    title: "Delivery",
    desc: "Execute development in iterative sprints backed by quality gates, automated testing, and transparent progress reviews.",
    icon: Rocket,
    glowColor: "rgba(16, 185, 129, 0.35)",
    textColor: "text-emerald-400",
  },
  {
    num: "05",
    title: "Growth",
    desc: "Support continuous cloud optimization, technical training, and system updates to ensure long-term operational success.",
    icon: TrendingUp,
    glowColor: "rgba(245, 158, 11, 0.35)",
    textColor: "text-amber-400",
  },
];

const thresholds = [0.0, 0.22, 0.45, 0.70, 0.92];

export function Process() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [beamCoords, setBeamCoords] = useState({ x: 0, y: 20 });
  const [pathLength, setPathLength] = useState(860);

  useEffect(() => {
    if (pathRef.current) {
      try {
        const totalLen = pathRef.current.getTotalLength();
        if (totalLen > 0) {
          setPathLength(totalLen);
        }
      } catch (e) {
        console.warn("Could not read SVG path length on initial mount:", e);
      }
    }

    const handleScroll = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isDesktop = window.innerWidth >= 1024;

      if (isDesktop) {
        // Sticky Pinning Math on Desktop:
        // Progress starts exactly when track top reaches the top of the viewport (rect.top === 0)
        // Progress ends exactly when track bottom reaches the bottom of the viewport (rect.bottom === windowHeight)
        const totalScrollable = rect.height - windowHeight;
        
        if (totalScrollable > 0) {
          const currentScrolled = -rect.top;
          let progress = currentScrolled / totalScrollable;
          progress = Math.max(0, Math.min(1, progress));
          setScrollProgress(progress);

          // Track coordinates of laser head in real-time
          if (pathRef.current) {
            try {
              const totalLen = pathRef.current.getTotalLength();
              if (totalLen > 0) {
                const currentPoint = pathRef.current.getPointAtLength(progress * totalLen);
                setBeamCoords({ x: currentPoint.x, y: currentPoint.y });
              }
            } catch (e) {
              const x = progress * 800;
              const y = 100 + Math.sin(progress * Math.PI * 2) * 80;
              setBeamCoords({ x, y });
            }
          }
        }
      } else {
        // Viewport-based triggers on mobile fallback
        const startTrigger = windowHeight * 0.8;
        const endTrigger = windowHeight * 0.15;
        const totalRange = rect.height || 600;

        const scrolledDistance = startTrigger - rect.top;
        const travelDistance = totalRange + (startTrigger - endTrigger) * 0.2;

        let progress = scrolledDistance / travelDistance;
        progress = Math.max(0, Math.min(1, progress));
        setScrollProgress(progress);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div 
      id="process" 
      ref={trackRef}
      className="relative w-full lg:h-[240vh] bg-[#0A0E1A]"
    >
      <section className="sticky top-0 h-auto lg:h-screen w-full flex flex-col justify-center overflow-hidden py-24 lg:py-0 text-white relative">
        
        {/* Subtle background grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(var(--color-primary) 1.2px, transparent 1.2px)",
            backgroundSize: "20px 20px",
          }}
        />
        
        <div className="mx-auto max-w-7xl px-6 relative z-10 w-full">
          
          {/* Section Header */}
          <Reveal>
            <div className="text-left lg:mb-4">
              <SectionLabel>HOW WE WORK</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mt-2 text-white">
                Our Proven Delivery Process
              </h2>
              <p className="mt-4 text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
                An aligned, transparent engineering framework engineered to deliver high-quality outcomes.
              </p>
            </div>
          </Reveal>

          {/* ========================================================================= */}
          {/* DESKTOP VIEW: FLOWING S-CURVE WAVE PATH WITH SCROLL-DRIVEN LASER BEAM */}
          {/* ========================================================================= */}
          <div className="mt-20 lg:mt-12 relative w-full hidden lg:block select-none">
            
            {/* Glowing neon S-curve connecting line */}
            <div className="absolute left-[10%] w-[80%] h-[240px] top-[30px] z-0 pointer-events-none overflow-visible">
              <svg
                className="w-full h-full overflow-visible"
                viewBox="0 0 800 200"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="neonWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1E6FFF" />
                    <stop offset="40%" stopColor="#00c6ff" />
                    <stop offset="70%" stopColor="#00c6ff" />
                    <stop offset="100%" stopColor="#00F5A0" />
                  </linearGradient>
                  {/* Glow Filter */}
                  <filter id="neonWaveGlow" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Inactive grey background wave path */}
                <path
                  d="M 0,20 C 100,20 100,180 200,180 C 300,180 300,20 400,20 C 500,20 500,180 600,180 C 700,180 700,20 800,20"
                  stroke="rgba(255, 255, 255, 0.04)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                {/* Glowing active path line - drawn based on scroll progress */}
                <path
                  ref={pathRef}
                  d="M 0,20 C 100,20 100,180 200,180 C 300,180 300,20 400,20 C 500,20 500,180 600,180 C 700,180 700,20 800,20"
                  stroke="url(#neonWaveGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  filter="url(#neonWaveGlow)"
                  className="opacity-80 transition-all duration-300"
                  style={{
                    strokeDasharray: pathLength,
                    strokeDashoffset: pathLength * (1 - scrollProgress),
                  }}
                />

                {/* Leading glowing laser point */}
                {scrollProgress > 0 && scrollProgress < 0.99 && (
                  <g transform={`translate(${beamCoords.x}, ${beamCoords.y})`} className="transition-transform duration-75">
                    <circle r="12" fill="#00c6ff" className="opacity-30 animate-pulse" />
                    <circle r="7" fill="#00F5A0" className="opacity-80" />
                    <circle r="3" fill="#ffffff" />
                  </g>
                )}
              </svg>
            </div>

            {/* Alternating Steps Grid */}
            <div className="grid grid-cols-5 gap-4 relative z-10 w-full min-h-[460px]">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isEven = i % 2 !== 0;
                const isActive = scrollProgress >= thresholds[i];

                return (
                  <div
                    key={step.num}
                    className={`flex flex-col items-center ${isEven ? "pt-40" : "pt-0"}`}
                  >
                    <Reveal delay={i * 100}>
                      <div className="relative flex flex-col items-center text-center group cursor-default">
                        
                        {/* Oversized background index */}
                        <div className={`absolute -top-12 text-[115px] font-black pointer-events-none select-none font-mono leading-none tracking-tighter transition-all duration-700 ${
                          isActive 
                            ? "text-cyan-400/10 scale-110" 
                            : "text-slate-800/10 scale-100"
                        }`}>
                          {step.num}
                        </div>

                        {/* Glowing Node Circle */}
                        <div className="relative z-10 flex items-center justify-center h-16 w-16">
                          
                          {/* Alignment Dot Anchor */}
                          <div className={`absolute w-4 h-4 rounded-full bg-slate-900 border flex items-center justify-center z-0 transition-colors duration-500 ${
                            isActive ? "border-cyan-400" : "border-slate-800"
                          }`}>
                            {isActive && <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />}
                          </div>

                          {/* Outer Circular Card */}
                          <div className={`relative z-10 h-14 w-14 rounded-full bg-[#0E1525] border shadow-lg flex items-center justify-center transition-all duration-500 ${
                            isActive 
                              ? "border-cyan-400 shadow-cyan-500/20 scale-110" 
                              : "border-slate-700/60 shadow-blue-500/5 group-hover:shadow-blue-500/20 group-hover:border-cyan-400 group-hover:scale-110"
                          }`}>
                            {/* Radial Glow */}
                            <div
                              className={`absolute inset-0 rounded-full blur transition-opacity duration-500 pointer-events-none ${
                                isActive ? "opacity-30" : "opacity-0 group-hover:opacity-20"
                              }`}
                              style={{
                                background: `radial-gradient(circle, ${step.glowColor} 0%, transparent 70%)`,
                              }}
                            />
                            <Icon className={`text-xl transition-colors duration-500 ${
                              isActive ? "text-emerald-400 scale-110" : "text-cyan-400 group-hover:text-emerald-400"
                            }`} />
                          </div>
                        </div>

                        {/* Step Metadata Card Details */}
                        <div className="mt-6 max-w-[190px] relative z-10">
                          <h3 className={`font-extrabold text-base tracking-tight transition-colors duration-500 ${
                            isActive ? "text-cyan-400 scale-105" : "text-white group-hover:text-cyan-400"
                          }`}>
                            {step.title}
                          </h3>
                          <p className={`mt-2.5 text-xs leading-relaxed font-normal transition-colors duration-500 ${
                            isActive ? "text-slate-300" : "text-slate-400"
                          }`}>
                            {step.desc}
                          </p>
                        </div>

                      </div>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* MOBILE & TABLET VIEW: VERTICAL TIMELINE WITH SCROLLING GLOW PATH */}
          {/* ========================================================================= */}
          <div className="lg:hidden block mt-12 relative w-full px-2">
            
            {/* Vertical base timeline line */}
            <div className="absolute left-7 top-4 bottom-4 w-0.5 bg-slate-800 opacity-40 z-0 pointer-events-none" />

            {/* Glowing vertical path progress bar */}
            <div 
              className="absolute left-7 top-4 w-0.5 bg-gradient-to-b from-[#1E6FFF] via-[#00c6ff] to-[#00F5A0] shadow-[0_0_12px_#00c6ff] z-10 origin-top transition-transform duration-200 pointer-events-none"
              style={{ 
                height: "calc(100% - 2rem)",
                transform: `scaleY(${scrollProgress})`
              }}
            />

            <div className="space-y-12">
              {steps.map((step, i) => {
                const Icon = step.icon;
                const isActive = scrollProgress >= thresholds[i];

                return (
                  <Reveal key={step.num} delay={i * 80}>
                    <div className="flex gap-6 items-start relative z-10 group">
                      
                      {/* Glowing Icon Node */}
                      <div className="relative shrink-0 z-10">
                        <div className={`h-14 w-14 rounded-full bg-[#0E1525] border flex items-center justify-center shadow-md transition-all duration-500 ${
                          isActive ? "border-cyan-400 shadow-cyan-500/20 scale-105" : "border-slate-700/60"
                        }`}>
                          <Icon className={`text-lg transition-colors duration-500 ${
                            isActive ? "text-emerald-400 scale-110" : "text-cyan-400"
                          }`} />
                        </div>
                      </div>

                      {/* Step Card Text Column */}
                      <div className="relative pt-1 z-10">
                        
                        {/* Oversized background monospace index */}
                        <div className={`absolute -top-3 left-0 text-6xl font-black pointer-events-none select-none font-mono leading-none z-0 transition-all duration-500 ${
                          isActive ? "text-cyan-400/10 scale-105" : "text-slate-800/10"
                        }`}>
                          {step.num}
                        </div>

                        <h3 className={`font-extrabold text-base sm:text-lg tracking-tight relative z-10 transition-colors duration-500 ${
                          isActive ? "text-cyan-400" : "text-white"
                        }`}>
                          {step.title}
                        </h3>
                        <p className={`mt-1.5 text-xs sm:text-sm leading-relaxed max-w-xl relative z-10 transition-colors duration-500 ${
                          isActive ? "text-slate-300" : "text-slate-400"
                        }`}>
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}