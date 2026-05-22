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
      { title: "Infynix Tech Solutions — Premium IT Staffing, Production AI & Digital Transformation" },
      {
        name: "description",
        content:
          "Elite enterprise IT staffing models, production-grade Generative AI, cloud infrastructure, and end-to-end digital transformation services delivering quantitative ROI globally.",
      },
      { property: "og:title", content: "Infynix Tech Solutions — Engineering Technical Excellence for High-Scale Enterprise" },
      {
        property: "og:description",
        content:
          "A trusted strategic technology partner supplying pre-screened technical talent, robust cloud architectures, and secure compliance solutions to Fortune 500 and high-growth enterprises.",
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
