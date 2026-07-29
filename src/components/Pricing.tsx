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
  ShieldCheck,
  Activity,
  HardDriveDownload,
  Headphones,
  AppWindow,
  ServerCog,
  Sparkles,
  Info,
  Settings2,
  Trophy,
} from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const packages = [
  {
    name: "Plan Esencial",
    icon: Crown,
    price: "Desde $100.000",
    note: "Punto de partida del proyecto",
    accent: "gold",
    features: [
      "Desarrollo y diseño a medida",
      "Botón de WhatsApp y redes sociales",
      "Mapa integrado",
      "Certificado SSL",
      "Hosting",
      "Dominio (no personalizado)",
    ],
  },
  {
    name: "Plan Impulso",
    icon: Gem,
    price: "$25.000",
    note: "Posicionamiento + visibilidad",
    accent: "violet",
    highlight: true,
    features: [
      "Mayor visibilidad digital",
      "Optimización SEO",
      "Integración con Google Maps",
      "Posicionamiento web mejorado",
      "Aumento de visitas locales",
    ],
  },
  {
    name: "Plan Profesional",
    icon: Gem,
    price: "$60.000",
    note: "Dominio personalizado + Profesionalismo",
    accent: "violet",
    features: [
      "Registro dominio .COM /COM.AR /.NET /.ORG",
      "Seguridad ante Malware y Hackers",
      "Posible regalo de dominio .STORE + .ONLINE",
      "Cambio de DNS y redirección de dominio",
    ],
  },

    {
    name: "Mantenimiento",
    icon: Gem,
    price: "Desde $25.000",
    note: "Segura, rápida y actualizada mes a mes",
    accent: "violet",
    highlight: true,
    features: [
      "Monitoreo 24/7",
      "Backups automáticos",
      "Soporte directo",
      "Seguridad reforzada",
      "Garantía de estabilidad en servidores",
      "Cambios y actualizaciones",
      "Agregación de nuevas funcionalidades",
      "Optimización de rendimiento",
      "Control de base de datos y seguridad avanzada",
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
    ref: "Similar a bodegon-delicia-web.vercel.app & dyn-estudio-juridico.vercel.app",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    subtitle: "Panel de Administración",
    price: "Desde $135.000",
    for: "Emprendedores · Control de ventas, stock y clientes · Remitos y facturación",
    ref: "Similar a digital-commerce-hub-main.vercel.app & manda-remito.vercel.app",
  },
  {
    icon: CalendarCheck,
    title: "Booking Page",
    subtitle: "Plataforma de Reservas",
    price: "Desde $135.000",
    for: "Barberos, peluqueros, manicuristas, consultorios",
    ref: "Similar a mi-turno-ya-reservado.vercel.app",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    subtitle: "Tienda Online",
    price: "Desde $370.000",
    for: "Tiendas, negocios, kioscos, emprendedores",
  },
  {
    icon: Trophy,
    title: "Esports & Tournaments",
    subtitle: "Gestor de Torneos y Estadísticas",
    price: "Desde $200.000",
    for: "Organizadores de torneos, ligas y comunidades de gaming",
    ref: "Similar a la-banda-gaming.vercel.app & ficha-player.vercel.app",
  },
];

const maintenancePlans = [
  { name: "Base", mods: "Hasta 4 modificaciones sencillas / mes. Influye la carga de módulos y la complejidad del sistema.", price: "Desde $25.000" },
  { name: "Avanzado", mods: "4 modificaciones avanzadas / mes. Influye la carga de módulos y la complejidad del sistema.", price: "Desde $32.000", highlight: true },
  { name: "Pro", mods: "10 modificaciones / mes. Influye la carga de módulos y la complejidad del sistema.", price: "Desde $47.000" },
];

const maintenanceIncluded = [
  { icon: Activity, label: "Monitoreo 24/7" },
  { icon: HardDriveDownload, label: "Backups automáticos" },
  { icon: Headphones, label: "Soporte directo" },
  { icon: ShieldCheck, label: "Seguridad reforzada" },
  { icon: ServerCog, label: "Garantía de estabilidad en servidores" },
  { icon: Sparkles, label: "Optimización de rendimiento" },
];

export function Pricing() {

  return (
    <section id="pricing" className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
            <Banknote className="w-3 h-3" /> Presupuestos
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
            Inversión <span className="text-gradient">transparente</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Cada proyecto se cotiza según su complejidad. Estos son los puntos
            de partida para que sepas exactamente en qué estás invirtiendo.
          </p>
        </div>

        {/* Packages grid (excludes Plan Bronce) */}
        <div className="grid md:grid-cols-2 gap-6">
          {packages.filter((p) => p.name !== "Plan Bronce").map((p, i) => {
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
                    <div className={`w-12 h-12 rounded-2xl glass flex items-center justify-center ${isGold ? "text-gold" : "text-accent"}`}>
                      <p.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  </div>

                  <div className="mt-6 flex items-baseline gap-2">
                    <span className={`font-display text-4xl md:text-5xl font-bold ${isGold ? "text-gradient-gold" : "text-gradient"}`}>
                      {p.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2 font-mono">{p.note}</p>

                  <ul className="mt-8 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 .flex-shrink-0 ${isGold ? "text-gold" : "text-accent"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>

                  {/* Per-package warnings (no background, left accent border) */}
                  {p.name === "Plan Esencial" && (
                    <div className="mt-6 rounded-md border-l-4 border-yellow-400 flex items-start gap-3 pl-3">
                      <Info className="w-5 h-5 mt-0.5 text-yellow-400" />
                      <div>
                        <strong className="block">A tener en cuenta:</strong>
                        <p className="text-sm text-muted-foreground">Todos los valores son orientativos y pueden variar según la complejidad del proyecto.</p>
                      </div>
                    </div>
                  )}

                  {p.name === "Plan Impulso" && (
                    <div className="mt-6 rounded-md border-l-4 border-yellow-400 flex items-start gap-3 pl-3">
                      <Info className="w-5 h-5 mt-0.5 text-yellow-400" />
                      <div>
                        <strong className="block">A tener en cuenta:</strong>
                        <p className="text-sm text-muted-foreground">El trabajo de <strong>SEO</strong> mejora la estructura de la web para que escale posiciones en Google frente a páginas que no están optimizadas. Esto es un proceso progresivo y <strong>no garantiza ventas inmediatas</strong>. Ten en cuenta que los primeros puestos suelen estar ocupados por empresas que pagan publicidad directa (anuncios), pero el SEO te asegura una presencia sólida en los resultados naturales del buscador.</p>
                      </div>
                    </div>
                  )}

                  {p.name === "Plan Profesional" && (
                    <div className="mt-6 rounded-md border-l-4 border-yellow-400 flex items-start gap-3 pl-3">
                      <Info className="w-5 h-5 mt-0.5 text-yellow-400" />
                      <div>
                        <strong className="block">A tener en cuenta:</strong>
                        <p className="text-sm text-muted-foreground">El dominio dura <strong>un año</strong> (luego se renueva) y su compra depende de que el nombre esté <strong>libre</strong>. Esto mejora la estructura web para subir escalones, pero <strong>no garantiza aparecer primero en Google ni un aumento de ventas inmediato</strong>, ya que los primeros puestos pertenecen a anuncios pagados.</p>
                      </div>
                    </div>
                  )}

                 {p.name === "Mantenimiento" && (
                    <div className="mt-6 rounded-md border-l-4 border-yellow-400 flex items-start gap-3 pl-3">
                      <Info className="w-5 h-5 mt-0.5 text-yellow-400" />
                      <div>
                        <strong className="block">A tener en cuenta:</strong>
                        <p className="text-sm text-muted-foreground">El precio de los planes de 4 cambios sencillos, 4 cambios complejos o 10 cambios complejos varía según las funcionalidades de tu web, si tiene base de datos (y otras tecnologías similares) y, si te pasas del límite de modificaciones mensuales, se cobrará un monto adicional proporcional a los cambios extra realizados.</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Web Types */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
              <AppWindow className="w-3 h-3" /> Modelos de páginas web
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Ejemplos de páginas web <span className="text-gradient">a desarrollar</span>
            </h2>
            <p className="text-muted-foreground mt-3 text-sm max-w-xl mx-auto">
              Modelos pensados para distintos negocios. Todo el alcance
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
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-mono mt-1">{w.subtitle}</p>
                  <div className="font-display text-xl font-bold text-gradient mt-4">{w.price}</div>
                  <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{w.for}</p>
                  {w.ref && <p className="text-[10px] text-muted-foreground/70 mt-2 font-mono italic">{w.ref}</p>}
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
                <div className="text-[10px] font-mono uppercase tracking-wider text-accent">100% personalizada</div>
                <h4 className="font-display text-xl md:text-2xl font-semibold mt-1.5">Podemos diseñar tu negocio a tu gusto — tu web, tus reglas</h4>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl">Si tu proyecto necesita algo distinto, lo construimos a medida según tus necesidades específicas.</p>
              </div>
              <div className="text-left md:text-right">
                <div className="font-display text-2xl font-bold text-gradient">Desde $100.000</div>
                <div className="text-[11px] text-muted-foreground font-mono mt-1 group-hover:text-foreground transition-colors">Cotizá tu proyecto →</div>
              </div>
            </div>
          </motion.a>

          <p className="text-center text-sm md:text-base text-muted-foreground mt-8 max-w-2xl mx-auto flex items-center justify-center gap-3 font-medium">
            <Info className="w-4 h-4 text-yellow-400" />
            Todos los valores son orientativos y pueden variar según la
            complejidad del proyecto.
          </p>

        </div>

        {/* Maintenance */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
              <Wrench className="w-3 h-3" /> Mantenimiento mensual
            </div>
            <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight mt-5">Tu web siempre <span className="text-gradient">impecable</span></h3>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm">Plan mensual que mantiene tu sitio rápido, seguro y siempre online. Las modificaciones se cobran según el plan elegido.</p>
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {maintenanceIncluded.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="w-11 h-11 mx-auto rounded-xl glass flex items-center justify-center text-accent"><m.icon className="w-5 h-5" /></div>
                  <p className="text-[11px] text-muted-foreground mt-3">{m.label}</p>
                </div>
              ))}
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {maintenancePlans.map((plan, i) => (
                <motion.div key={plan.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} className="relative rounded-2xl p-5 transition-all hover:-translate-y-1 glass">
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{plan.name}</div>
                  <div className="font-display text-2xl font-bold mt-2 text-gradient">{plan.price}</div>
                  <p className="text-[11px] text-muted-foreground mt-3 leading-relaxed">{plan.mods}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        

        {/* Payments + flow */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }} className="mt-16 glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-cyan/10 blur-[100px]" />
          <div className="relative grid md:grid-cols-2 gap-10">
            <div>
              <SectionLabel>Métodos de pago</SectionLabel>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mt-3">¿Cómo se abona?</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3 text-sm"><Banknote className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground"><strong className="text-foreground">Transferencia bancaria</strong> sin recargo.</span></li>
                <li className="flex items-start gap-3 text-sm"><CreditCard className="w-5 h-5 text-accent mt-0.5 shrink-0" /><span className="text-muted-foreground"><strong className="text-foreground">Tarjeta de crédito</strong> con recargo del 15% y hasta 12 cuotas.</span></li>
              </ul>
            </div>
            <div>
              <SectionLabel>Flujo de trabajo</SectionLabel>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mt-3">¿Cómo trabajo?</h3>
              <ol className="mt-6 space-y-4">
                {["Abonás el 50% del monto para empezar el diseño.", "Realizo una demostración funcional de la web.", "Indicás qué modificar, quitar o agregar.", "Entrega final con el 50% restante abonado."].map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm"><span className="w-6 h-6 rounded-full glass text-[11px] font-mono flex items-center justify-center shrink-0 text-accent">{i + 1}</span><span className="text-muted-foreground">{step}</span></li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
