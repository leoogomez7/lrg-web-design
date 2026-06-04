import { motion } from "framer-motion";
import {
  Check,
  Crown,
  Gem,
  Layout,
  LayoutDashboard,
  CalendarCheck,
  ShoppingBag,
  CreditCard,
  Banknote,
  Wrench,
  Globe,
  ShieldCheck,
  Activity,
  HardDriveDownload,
  Headphones,
  ServerCog,
  Sparkles,
  Info,
  Settings2,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const packages = [
  {
    name: "Paquete Oro",
    icon: Crown,
    price: "Desde $100.000",
    note: "Punto de partida del proyecto",
    accent: "gold",
    features: [
      "Desarrollo y diseño a medida",
      "Seguridad SSL",
      "Hosting",
      "Dominio (no personalizado)",
      "Mantenimiento (1er mes gratis)",
    ],
  },
  {
    name: "Paquete Platino",
    icon: Gem,
    price: "Desde $125.000",
    note: "Posicionamiento + visibilidad incluidos",
    accent: "violet",
    highlight: true,
    features: [
      "Paquete Oro incluido",
      "Visibilidad Digital",
      "Optimización SEO",
      "Integración con Google Maps",
      "Posicionamiento mejorado",
    ],
  },
];

const webTypes = [
  {
    icon: Layout,
    title: "Landing Page",
    subtitle: "Web Informativa",
    price: "Desde $100.000",
    for: "Restaurantes, negocios y empresas",
    ref: "Similar a bodegon-delicia-web.vercel.app",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    subtitle: "Panel de Administración",
    price: "Desde $190.000",
    for: "Emprendedores · Control de ventas, stock y clientes",
    ref: "Similar a digital-commerce-hub-main.vercel.app",
  },
  {
    icon: CalendarCheck,
    title: "Booking Page",
    subtitle: "Plataforma de Reservas",
    price: "Desde $180.000",
    for: "Barberos, peluqueros, manicuristas, consultorios",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    subtitle: "Tienda Online",
    price: "Desde $410.000",
    for: "Tiendas, negocios, kioscos, emprendedores",
  },
];

const maintenancePlans = [
  { name: "Esencial", mods: "Hasta 4 modificaciones sencillas / mes. Influye la carga de módulos y la complejidad del sistema.", price: "Desde $25.000" },
  { name: "Avanzado", mods: "4 modificaciones avanzadas / mes. Influye la carga de módulos y la complejidad del sistema.", price: "Desde $32.000", highlight: true },
  { name: "Pro", mods: "10 modificaciones / mes. Influye la carga de módulos y la complejidad del sistema.", price: "Desde $47.000" },
];

const maintenanceIncluded = [
  { icon: Activity, label: "Monitoreo 24/7" },
  { icon: HardDriveDownload, label: "Backups automáticos" },
  { icon: Headphones, label: "Soporte directo" },
  { icon: ShieldCheck, label: "Seguridad reforzada" },
  { icon: ServerCog, label: "Sin caída de servidores" },
  { icon: Sparkles, label: "Mejoras de rendimiento" },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <SectionLabel>03 — Presupuestos</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
            Inversión <span className="text-gradient">transparente</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Cada proyecto se cotiza según su complejidad. Estos son los puntos
            de partida para que sepas exactamente en qué estás invirtiendo.
          </p>
        </div>

        {/* Packages */}
        <div className="grid md:grid-cols-2 gap-6">
          {packages.map((p, i) => {
            const isGold = p.accent === "gold";
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className={`glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden ${
                  p.highlight ? "border-accent/40" : ""
                }`}
              >
                <div
                  className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-[100px] opacity-30 ${
                    isGold ? "bg-gold" : "bg-violet"
                  }`}
                />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl glass flex items-center justify-center ${
                        isGold ? "text-gold" : "text-accent"
                      }`}
                    >
                      <p.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span
                      className={`font-display text-4xl md:text-5xl font-bold ${
                        isGold ? "text-gradient-gold" : "text-gradient"
                      }`}
                    >
                      {p.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">{p.note}</p>

                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <Check
                          className={`w-4 h-4 flex-shrink-0 ${
                            isGold ? "text-gold" : "text-accent"
                          }`}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Web Types */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="font-display text-2xl md:text-4xl font-semibold tracking-tight">
              Ejemplos de páginas web a desarrollar
            </h3>
            <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">
              Cuatro modelos pensados para distintos negocios. Todo el alcance
              final depende de la complejidad solicitada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {webTypes.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass rounded-2xl p-6 hover:-translate-y-1 transition-transform relative overflow-hidden group"
              >
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-violet/10 blur-2xl group-hover:bg-violet/20 transition-colors" />
                <div className="relative">
                  <div className="w-11 h-11 rounded-xl glass flex items-center justify-center text-accent">
                    <w.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-display text-lg font-semibold mt-5">{w.title}</h4>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mt-1">
                    {w.subtitle}
                  </p>
                  <div className="font-display text-xl font-bold text-gradient mt-4">
                    {w.price}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">
                    {w.for}
                  </p>
                  {w.ref && (
                    <p className="text-[10px] text-muted-foreground/70 mt-2 font-mono italic">
                      {w.ref}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Custom card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="mt-6 group block glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden hover:border-accent/40 transition-all"
          >
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-violet/15 blur-[100px]" />
            <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
              <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center text-accent">
                <Settings2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent">
                  100% personalizada
                </div>
                <h4 className="font-display text-xl md:text-2xl font-semibold mt-1.5">
                  Podemos diseñar tu negocio a tu gusto — tu web, tus reglas
                </h4>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">
                  Si tu proyecto necesita algo distinto, lo construimos a
                  medida según tus necesidades específicas.
                </p>
              </div>
              <div className="text-left md:text-right">
                <div className="font-display text-2xl font-bold text-gradient">
                  Desde $100.000
                </div>
                <div className="text-[11px] text-muted-foreground font-mono mt-1 group-hover:text-foreground transition-colors">
                  Cotizá tu proyecto →
                </div>
              </div>
            </div>
          </motion.a>

          <p className="text-center text-xs text-muted-foreground mt-8 max-w-xl mx-auto flex items-center justify-center gap-2">
            <Info className="w-3.5 h-3.5" />
            Todos los valores son orientativos y pueden variar según la
            complejidad del proyecto.
          </p>
        </div>

        {/* Payments + flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan/10 blur-[100px]" />
          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>Métodos de pago</SectionLabel>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mt-3">
                ¿Cómo se abona?
              </h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm">
                  <Banknote className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Transferencia bancaria</strong> sin recargo.
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <CreditCard className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">
                    <strong className="text-foreground">Tarjeta de crédito</strong> con
                    recargo del 15% y hasta 12 cuotas.
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <SectionLabel>Flujo de trabajo</SectionLabel>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mt-3">
                ¿Cómo trabajo?
              </h3>
              <ol className="mt-6 space-y-4">
                {[
                  "Abonás el 50% del monto para empezar el diseño.",
                  "Realizo una demostración funcional de la web.",
                  "Indicás qué modificar, quitar o agregar.",
                  "Entrega final con el 50% restante abonado.",
                ].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <span className="w-6 h-6 rounded-full glass text-[11px] font-mono flex items-center justify-center shrink-0 text-accent">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>

        {/* Maintenance */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
              <Wrench className="w-3 h-3" /> Mantenimiento mensual
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mt-5">
              Tu web siempre <span className="text-gradient">impecable</span>
            </h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">
              Plan mensual que mantiene tu sitio rápido, seguro y siempre
              online. Las modificaciones se cobran según el plan elegido.
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {maintenanceIncluded.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="w-11 h-11 mx-auto rounded-xl glass flex items-center justify-center text-accent">
                    <m.icon className="w-5 h-5" />
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-3">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {maintenancePlans.map((plan, i) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="relative rounded-2xl p-5 transition-all hover:-translate-y-1 glass"
                >
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {plan.name}
                  </div>
                  <div className="font-display text-2xl font-bold mt-2 text-gradient">
                    {plan.price}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">
                    {plan.mods}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Domain */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-12 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gold/15 blur-[100px]" />
          <div className="relative grid md:grid-cols-[auto_1fr_auto] gap-8 items-center">
            <div className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-gold">
              <Globe className="w-7 h-7" />
            </div>
            <div>
              <SectionLabel>Dominio propio</SectionLabel>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mt-2">
                Tu marca con dominio personalizado
              </h3>
              <p className="text-muted-foreground text-sm mt-2 max-w-xl">
                Registro y gestión de tu dominio propio (tunegocio.com,
                .com.ar, etc.). Profesionalismo real para tu marca, renovación
                anual.
              </p>
            </div>
            <div className="text-left md:text-right">
              <div className="font-display text-4xl font-bold text-gradient-gold">
                $60.000
              </div>
              <div className="text-xs text-muted-foreground font-mono mt-1">
                / año
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
