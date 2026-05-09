import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#projects", label: "Ver proyectos" },
  { href: "#pricing", label: "Presupuestos" },
  { href: "#proposals", label: "Propuestas" },
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
      /* 
         CAMBIO CLAVE: quitamos mx-auto y añadimos left-4.
         Ahora el menú se pega a la izquierda con un pequeño margen.
      */
      className={`fixed top-4 left-4 z-50 transition-all duration-500 w-[65%] lg:left-1/2 lg:-translate-x-1/2 lg:w-[min(94%,1120px)] ${
        scrolled ? "max-w-[1040px]" : "max-w-[1120px]"
      }`}
    >
      {/* Contenedor tipo Cápsula Negra */}
      <div className={`flex items-center justify-between gap-3 px-3 py-2 rounded-full border border-white/10 transition-all duration-500 ${
        scrolled 
          ? "bg-black/80 backdrop-blur-xl shadow-2xl" 
          : "bg-black/40 backdrop-blur-md"
      }`}>
        <a href="#top" className="flex items-center gap-2 shrink-0">
          <img
            src={logo}
            alt="LRG Web Developer"
            className="w-8 h-8 rounded-full object-cover border border-white/20"
          />
        </a>

        {/* Menú PC (Centrado en PC) */}
        <nav className="hidden lg:flex items-center gap-1">
          <a href="#top" className="text-[12px] text-white font-medium px-4 py-2 rounded-full hover:bg-white/10">
            Inicio
          </a>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[12px] text-white/70 hover:text-white px-4 py-2 rounded-full hover:bg-white/10 whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Botón Menú Mobile */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          <span className="text-[10px] font-medium">Menú</span>
        </button>
      </div>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            /* Alineado a la izquierda del header */
            className="lg:hidden mt-2 w-full bg-black/95 backdrop-blur-2xl rounded-[2rem] p-2 flex flex-col items-start border border-white/10 shadow-2xl overflow-hidden"
          >
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="text-xs text-white font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 w-full text-left"
            >
              Inicio
            </a>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/70 hover:text-white px-4 py-2.5 rounded-xl hover:bg-white/10 w-full text-left"
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
