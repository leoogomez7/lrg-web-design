import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#projects", label: "Ver proyectos" },
  { href: "#pricing", label: "Presupuestos" },
  { href: "#proposals", label: "Propuestas realizadas" },
  { href: "#about", label: "¿Quién soy?" },
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
      {/* Contenedor tipo Cápsula Negra */}
      <div className={`flex items-center justify-between gap-3 px-4 py-2 rounded-full border border-white/10 transition-all duration-500 ${
        scrolled 
          ? "bg-black/70 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.5)]" 
          : "bg-black/40 backdrop-blur-md"
      }`}>
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="LRG Web Developer"
            className="w-9 h-9 rounded-full object-cover border border-white/20"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          <a
            href="#top"
            className="text-[12px] text-white font-medium transition-colors px-4 py-2 rounded-full hover:bg-white/10"
          >
            Inicio
          </a>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[12px] text-white/70 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-white/10 whitespace-nowrap"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center gap-2 h-9 px-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          aria-label="Menú"
        >
          {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          <span className="text-xs font-medium">Menú</span>
        </button>
      </div>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden mt-2 bg-black/90 backdrop-blur-2xl rounded-3xl p-3 flex flex-col border border-white/10 shadow-2xl"
          >
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="text-sm text-white font-medium px-4 py-3 rounded-2xl hover:bg-white/10"
            >
              Inicio
            </a>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 hover:text-white px-4 py-3 rounded-2xl hover:bg-white/10"
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
