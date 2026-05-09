import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Pricing } from "@/components/Pricing";
import { Proposals } from "@/components/Proposals";
import { Social } from "@/components/Social";
import { Contact, Footer } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pedi tu Web" },
      {
        name: "description",
        content:
          "Pedi tu Web — Diseño y desarrollo de páginas web premium, modernas y rápidas por Leonardo Gómez.",
      },
      { property: "og:title", content: "Pedi tu Web" },
      {
        property: "og:description",
        content:
          "Diseño y desarrollo web premium. Páginas rápidas, modernas y orientadas a conversión.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Pricing />
        <Proposals />
        <About />
        <Social />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
