import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#projects", label: "Ver proyectos" },
  { href: "#pricing", label: "Presupuestos" },
  { href: "#about", label: "¿Quién soy?" },
  { href: "#proposals", label: "Propuestas realizadas" },
  { href: "#social", label: "Mis redes" },
  { href: "#contact", label: "Contactar" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
        scrolled ? "w-[min(94%,1040px)]" : "w-[min(96%,1120px)]"
      }`}
    >
      <div className="glass-strong rounded-full pl-2 pr-2 py-2 flex items-center justify-between gap-3">
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="LRG Web Developer"
            className="w-9 h-9 rounded-full object-cover"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-0.5">
          <a
            href="#top"
            className="text-[11px] text-foreground font-medium transition-colors px-3 py-1.5 rounded-full hover:bg-white/5 whitespace-nowrap"
          >
            Inicio
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-white/5 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center gap-2 h-9 px-3 rounded-full glass"
          aria-label="Menú"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="text-xs font-medium">Menú</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mt-2 glass-strong rounded-3xl p-3 flex flex-col"
          >
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="text-sm text-foreground font-medium transition-colors px-4 py-3 rounded-2xl hover:bg-white/5"
            >
              Inicio
            </a>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-3 rounded-2xl hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
