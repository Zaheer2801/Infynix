import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./sections/Footer";
import { ContactModal } from "./ContactModal";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <ContactModal />
    </div>
  );
}