import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./sections/Footer";
import { ContactModal } from "./ContactModal";

export function PageShell({ children, darkNavbar = false }: { children: ReactNode; darkNavbar?: boolean }) {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar dark={darkNavbar} />
      <main className="flex-1 animate-fade-in-up">{children}</main>
      <Footer />
      <ContactModal />
    </div>
  );
}