import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/sections/Hero";
import { About } from "@/components/site/sections/About";
import { Stats } from "@/components/site/sections/Stats";
import { Services } from "@/components/site/sections/Services";
import { Industries } from "@/components/site/sections/Industries";
import { Process } from "@/components/site/sections/Process";
import { TechStack } from "@/components/site/sections/TechStack";
import { Testimonials } from "@/components/site/sections/Testimonials";
import { CtaBanner } from "@/components/site/sections/CtaBanner";
import { Contact } from "@/components/site/sections/Contact";
import { Footer } from "@/components/site/sections/Footer";
import { ContactModal } from "@/components/site/ContactModal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iresh Technologies — IT Staffing, AI & Digital Transformation" },
      {
        name: "description",
        content:
          "Enterprise IT staffing, AI solutions, and digital transformation services. 15+ years, 2500+ placements, 350+ enterprise clients.",
      },
      { property: "og:title", content: "Iresh Technologies — Smart Tech for Modern Enterprise" },
      {
        property: "og:description",
        content:
          "Trusted IT staffing and digital transformation partner delivering enterprise-grade solutions.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Stats />
        <Services />
        <Industries />
        <Process />
        <TechStack />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <ContactModal />
    </div>
  );
}
