import type { SVGProps } from "react";

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const IconUsers = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
);
export const IconCpu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2"/></svg>
);
export const IconCloud = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M17.5 19a4.5 4.5 0 1 0-1.5-8.74A6 6 0 0 0 4 12.5 4.5 4.5 0 0 0 5.5 19h12Z"/></svg>
);
export const IconCode = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
);
export const IconChart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>
);
export const IconBuilding = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 6h2M13 6h2M9 10h2M13 10h2M9 14h2M13 14h2M10 22v-4h4v4"/></svg>
);
export const IconBank = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M3 10l9-6 9 6"/><path d="M5 10v8M9 10v8M15 10v8M19 10v8"/><path d="M3 21h18"/></svg>
);
export const IconHeart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg>
);
export const IconFactory = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M2 20h20V9l-6 4V9l-6 4V4H2z"/><path d="M6 16h2M10 16h2M14 16h2"/></svg>
);
export const IconCart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>
);
export const IconAntenna = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M5 18a8 8 0 0 1 14 0"/><path d="M8.5 15a4.5 4.5 0 0 1 7 0"/><circle cx="12" cy="12" r="1"/><path d="M12 13v9"/></svg>
);
export const IconShield = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M12 2l9 4v6c0 5-3.5 9-9 10-5.5-1-9-5-9-10V6z"/></svg>
);
export const IconCheck = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><polyline points="20 6 9 17 4 12"/></svg>
);
export const IconArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
);
export const IconMenu = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
);
export const IconClose = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);
export const IconLinkedIn = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-12h4v2a4 4 0 0 1 2-2z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
);
export const IconX = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M4 4l16 16M20 4L4 20"/></svg>
);
export const IconFacebook = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
export const IconYoutube = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M22.5 6.5a3 3 0 0 0-2-2C18.7 4 12 4 12 4s-6.7 0-8.5.5a3 3 0 0 0-2 2A31 31 0 0 0 1 12a31 31 0 0 0 .5 5.5 3 3 0 0 0 2 2C5.3 20 12 20 12 20s6.7 0 8.5-.5a3 3 0 0 0 2-2A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.5z"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
);