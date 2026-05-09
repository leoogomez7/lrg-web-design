import { motion } from "framer-motion";
import { ArrowUpRight, MousePointerClick, ExternalLink } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import dashboardImg from "@/assets/project-dashboard.jpg";
import restaurantImg from "@/assets/project-restaurant.jpg";
import medicalImg from "@/assets/project-medical.jpg";
import invoiceImg from "@/assets/project-invoice.jpg";
import statsImg from "@/assets/project-stats.jpg";
import gamingImg from "@/assets/project-gaming.jpg";

const projects = [
  {
    name: "Digital Commerce Hub",
    type: "Dashboard - Finalizado",
    url: "https://digital-commerce-hub-main.vercel.app",
    image: dashboardImg,
    description:
      "Sistema completo para la gestión de ventas de productos y servicios digitales. Control total de clientes, gastos y ganancias automáticas.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-violet/40 to-cyan/20",
    available: true,
  },
  {
    name: "Bodegón Delicia",
    type: "Web Gastronómica - Finalizado",
    url: "https://bodegon-delicia-web.vercel.app",
    image: restaurantImg,
    description:
      "Página web gastronómica moderna diseñada para potenciar la presencia digital del restaurante.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-gold/40 to-orange-500/20",
    available: true,
  },
  {
    name: "Mi Turno Ya Reservado",
    type: "Turnos de Citas Médicas - En desarrollo",
    url: "https://mi-turno-ya-reservado.vercel.app",
    image: medicalImg,
    description:
      "Plataforma de gestión de turnos médicos online. Permite reservar, modificar y cancelar citas con profesionales de la salud en pocos clics.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-cyan/40 to-violet/20",
    available: false,
  },
  {
    name: "Manda Factura",
    type: "Generador de Facturas / Recibos - En desarrollo",
    url: "https://manda-factura.vercel.app",
    image: invoiceImg,
    description:
      "Generador simple de facturas y recibos con logos e información de la empresa. Exportable y listo para enviar al cliente.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-gold/40 to-amber-500/20",
    available: false,
  },
  {
    name: "Cancha Limpia",
    type: "Estadísticas de Jugadores - En desarrollo",
    url: "https://cancha-limpia.vercel.app",
    image: statsImg,
    description:
      "Plataforma de estadísticas para partidos entre amigos: goles, asistencias, goles en contra, partidos ganados, perdidos, empatados y equipos asignados.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-emerald-500/30 to-cyan/20",
    available: false,
  },
  {
    name: "La Banda Gaming",
    type: "Simulador de Torneos Gaming - En desarrollo",
    url: "https://la-banda-gaming.vercel.app",
    image: gamingImg,
    description:
      "Simulador de torneos gaming entre amigos para PlayStation y competencias. Brackets, llaves y resultados en tiempo real.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-violet/40 to-pink-500/20",
    available: false,
  },
];

const allSites = [
  { name: "Bodegón Delicia", url: "https://bodegon-delicia-web.vercel.app"},
  { name: "Digital Commerce", url: "https://digital-commerce-hub-main.vercel.app"},
  { name: "Mi Turno Ya Reservado", url: "https://mi-turno-ya-reservado.vercel.app"},
  { name: "Manda Factura", url: "https://manda-factura.vercel.app"},
  { name: "Cancha Limpia", url: "https://cancha-limpia.vercel.app"},
  { name: "La Banda Gaming", url: "https://la-banda-gaming.vercel.app"},
];

export function Projects() {
  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel>01 — Proyectos</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
              Web de <span className="text-gradient">alto rendimiento</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Páginas web construidas con intención: rápidas, escalables y
            diseñadas para convertir un resultado de negocio tangible en cada
            visita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-50 group-hover:opacity-30 transition-opacity z-10 mix-blend-overlay`} />
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={1280}
                  height={832}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute top-3 right-3 z-20 glass-strong rounded-full p-2.5 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="p-6">
                <span className="text-xs text-accent font-mono uppercase tracking-wider">
                  {p.type}
                </span>
                <h3 className="font-display text-xl font-semibold tracking-tight mt-2">
                  {p.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent group-hover:text-foreground transition-colors">
                  <MousePointerClick className="w-3.5 h-3.5" />
                  Haz clic para ver la página web
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Listado completo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-16 glass-strong rounded-3xl overflow-hidden"
        >
          <div className="p-6 md:p-8 border-b border-border">
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Listado completo
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight mt-2">
              Todas mis páginas web
            </h3>
          </div>
          <div className="divide-y divide-border">
            {allSites.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 hover:bg-white/[0.03] transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-medium truncate">{s.name}</div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">
                    {s.status}
                  </div>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/[0.08] hover:border-accent/40 transition-all shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Ver proyecto
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
