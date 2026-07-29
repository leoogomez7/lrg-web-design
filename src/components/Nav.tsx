import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { href: "#projects", label: "Proyectos" },
  { href: "#clients", label: "Clientes" },
  { href: "#comprar", label: "Comprar" },
  { href: "#pricing", label: "Presupuestos" },
  { href: "#proposals", label: "Propuestas" },
  { href: "#about", label: "¿Quién soy?" },
  { href: "#social", label: "Mis redes" },
  { href: "#contact", label: "Contactar" },
];

export function Nav({ cartCount, cartSummary }: { cartCount: number; cartSummary: import('../App').CartSummary | null }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

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
      className="fixed inset-x-0 top-0 z-9999 transition-all duration-500"
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

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setCartOpen((v) => !v);
              setOpen(false);
            }}
            className="relative inline-flex items-center justify-center h-8 w-8 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Abrir carrito"
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-semibold text-background">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center gap-1.5 h-8 px-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Abrir menú"
          >
            {open ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
            <span className="text-[10px] font-medium">Menú</span>
          </button>
        </div>
      </div>

      {/* Menú Mobile Desplegable */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden w-full bg-black/95 backdrop-blur-2xl rounded-4xl p-2 flex flex-col items-start border border-white/10 shadow-2xl overflow-hidden"
          >
            <div className="text-sm text-white font-medium px-4 py-2.5 rounded-xl bg-white/5 w-full text-left">
              Carrito
            </div>
            {cartSummary ? (
              <div className="w-full space-y-3 px-4 py-3 text-sm text-white">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Resumen</div>
                  <p className="mt-3 text-white">{cartSummary.pageLabel}</p>
                  <p className="mt-2 text-muted-foreground">Mantenimiento: {cartSummary.maintenanceLabel}</p>
                  {cartSummary.impulse && <p className="text-muted-foreground">Incluye plan impulso</p>}
                  {cartSummary.professional && <p className="text-muted-foreground">Incluye plan profesional</p>}
                  <p className="mt-3 font-semibold text-white">Total: ${cartSummary.total.toLocaleString('es-AR')}</p>
                </div>
                <a
                  href="https://link.mercadopago.com.ar/psplusps4ps5"
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setCartOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-accent px-4 py-3 text-center text-sm font-semibold text-background transition hover:bg-accent/90"
                >
                  Finalizar compra
                </a>
              </div>
            ) : (
              <div className="w-full px-4 py-5 text-sm text-white">Tu carrito está vacío.</div>
            )}
          </motion.div>
        )}

        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden w-full bg-black/95 backdrop-blur-2xl rounded-4xl p-2 flex flex-col items-start border border-white/10 shadow-2xl overflow-hidden"
          >
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="text-sm text-white font-medium px-4 py-2.5 rounded-xl hover:bg-white/10 w-full text-left"
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
