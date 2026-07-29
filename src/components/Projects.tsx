import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, MousePointerClick, ExternalLink } from "lucide-react";
import digitalCommerceHub from "@/assets/Proyecto-Digital-Commerce-Hub.jpg";
import bodegonDelicia from "@/assets/Proyecto-Bodegon-Delicia.jpg";
import miTurnoYa from "@/assets/Proyecto-Mi-Turno-Ya.jpg";
import mandaRemito from "@/assets/Proyecto-Manda-Remito.jpg";
import revendedorDigital from "@/assets/Proyecto-Revendedor-Digital.jpg";
import laBandaGaming from "@/assets/Proyecto-La-Banda-Gaming.jpg";

type Project = {
  name: string;
  type: string;
  url: string;
  image: string;
  description: string;
  tech: string[];
  accent: string;
  available: boolean;
  stack: string;
};

const projects: Project[] = [
  {
    name: "Digital Commerce Hub",
    type: "Dashboard",
    url: "https://digital-commerce-hub-main.vercel.app",
    image: digitalCommerceHub,
    description:
      "Sistema completo para la gestión de ventas de productos y servicios digitales. Control total de clientes, gastos y ganancias automáticas.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-violet/40 to-cyan/20",
    available: true,
    stack: "dashboard",
  },
  {
    name: "Bodegón Delicia",
    type: "Web Gastronómica",
    url: "https://bodegon-delicia-web.vercel.app",
    image: bodegonDelicia,
    description:
      "Página web gastronómica moderna diseñada para potenciar la presencia digital del restaurante.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-gold/40 to-orange-500/20",
    available: true,
    stack: "",
  },
  {
    name: "Mi Turno Ya",
    type: "Reservación de turnos",
    url: "https://mi-turno-ya-reservado.vercel.app",
    image: miTurnoYa,
    description:
      "Plataforma de gestión de turnos online. Permite reservar, modificar y cancelar citas con profesionales en pocos clics.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-cyan/40 to-violet/20",
    available: true,
    stack: "",
  },
  {
    name: "Manda Remito",
    type: "Generador de Remitos",
    url: "https://manda-remito.vercel.app",
    image: mandaRemito,
    description:
      "Generador simple de remitos con logos e información de la empresa. Exportable y listo para enviar al cliente.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-gold/40 to-amber-500/20",
    available: true,
    stack: "",
  },
  {
    name: "Revendedor Digital",
    type: "Tienda Ecommerce",
    url: "https://web-products-amber.vercel.app",
    image: revendedorDigital,
    description:
      "Plataforma e-commerce multi-proveedor donde los usuarios pueden registrarse, publicar y vender sus propios productos y servicios.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-emerald-500/30 to-cyan/20",
    available: true,
    stack: "",
  },
  {
    name: "La Banda Gaming",
    type: "Simulador de Torneos Gaming",
    url: "https://la-banda-gaming.vercel.app",
    image: laBandaGaming,
    description:
      "Simulador de torneos gaming entre amigos para PlayStation y competencias. Ligas, grupos, llaves y resultados en tiempo real.",
    tech: ["Next.js", "Tailwind", "React", "Vercel"],
    accent: "from-violet/40 to-pink-500/20",
    available: true,
    stack: "",
  },
];

const allSites = [
  { name: "Bodegón Delicia", url: "https://bodegon-delicia-web.vercel.app"},
  { name: "Digital Commerce", url: "https://digital-commerce-hub-main.vercel.app"},
  { name: "Mi Turno Ya", url: "https://mi-turno-ya-reservado.vercel.app"},
  { name: "Manda Remito", url: "https://manda-remito.vercel.app"},
  { name: "Revendedor Digital", url: "https://web-products-amber.vercel.app"},
  { name: "La Banda Gaming", url: "https://la-banda-gaming.vercel.app"},
];

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const modalSections = [
    {
      label: "¿De qué se trata la página?",
      content:
        "Texto de prueba: describe brevemente el propósito y el enfoque principal del sitio.",
    },
    {
      label: "¿Para qué sirve?",
      content:
        "Texto de prueba: explica el beneficio práctico que ofrece la página a los usuarios.",
    },
    {
      label: "¿Por qué es rápida e interactiva?",
      content:
        "Texto de prueba: menciona el rendimiento y las interacciones fluidas del sitio.",
    },
    {
      label: "¿Cómo se ve en celulares, computadores y tablets?",
      content:
        "Texto de prueba: indica que el diseño es responsive y se adapta a todos los dispositivos.",
    },
    {
      label: "Caracteristicas",
      content:
        "Texto de prueba: lista algunas características clave que hacen único al proyecto.",
    },
    {
      label: "Stack Tecnológico",
      content:
        "Texto de prueba: menciona las tecnologías usadas para construir el proyecto.",
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-6">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 .w-[800px] .h-[800px] rounded-full bg-violet/5 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight">
              Web de <span className="text-gradient">alto rendimiento</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Páginas web construidas con intención: rápidas, escalables y
            diseñadas para convertir un resultado de negocio tangible en cada
            visita.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all flex flex-col h-full min-h-[26rem]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
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

              <div className="p-6 flex flex-col flex-1">
                <div className="space-y-3">
                  <span className="text-xs text-accent font-mono uppercase tracking-wider">
                    {p.type}
                  </span>
                  <h3 className="font-display text-xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[5rem]">
                    {p.description}
                  </p>
                </div>

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

                <div className="mt-6 grid gap-3">
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-muted-foreground transition-all hover:bg-white/10"
                  >
                    Ver página web
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setActiveProject(p);
                      setImagePreviewOpen(false);
                    }}
                    className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs font-semibold text-muted-foreground transition-all hover:bg-white/10"
                  >
                    Más información
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {activeProject && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-black/40 px-4 py-4"
            onClick={() => setActiveProject(null)}
          >
            <div
              className="relative mt-8 w-full max-w-2xl rounded-4xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_35px_90px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-xs text-muted-foreground hover:bg-white/10"
              >
                Cerrar
              </button>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-accent font-mono">
                Información detallada sobre mi proyecto
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {activeProject.name}
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">
                {activeProject.type}
              </div>
              <button
                type="button"
                onClick={() => setImagePreviewOpen(true)}
                className="group relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all hover:border-white/20"
                aria-label="Ver imagen completa"
              >
                <img
                  src={activeProject.image}
                  alt={activeProject.name}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-white backdrop-blur">
                    Ver imagen
                  </span>
                </div>
              </button>

              {imagePreviewOpen && (
                <div
                  className="absolute inset-0 z-50 flex flex-col bg-black/95 p-6"
                  onClick={() => setImagePreviewOpen(false)}
                >
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation();
                      setImagePreviewOpen(false);
                    }}
                    className="self-end rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-muted-foreground transition-all hover:bg-white/10"
                  >
                    Cerrar imagen
                  </button>
                  <div className="mt-4 flex-1 overflow-auto" onClick={(event) => event.stopPropagation()}>
                    <img
                      src={activeProject.image}
                      alt={activeProject.name}
                      className="mx-auto w-full max-h-[75vh] object-contain"
                    />
                  </div>
                </div>
              )}

              <div className="mt-6 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground overflow-hidden">
                {modalSections.map((section) => (
                  <div key={section.label} className="space-y-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSection((current) =>
                          current === section.label ? null : section.label,
                        )
                      }
                      className="w-full rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all hover:border-white/20 hover:bg-slate-900"
                    >
                      {section.label}
                    </button>
                    {expandedSection === section.label ? (
                      <div className="rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-4 text-sm text-muted-foreground">
                        {section.content}
                      </div>
                    ) : null}
                  </div>
                ))}

                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all hover:bg-white/10"
                >
                  VER PROYECTO
                </a>
              </div>
            </div>
          </div>
        )}

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
              Todos mis proyectos
            </h3>
          </div>
          <div className="divide-y divide-border">
            {allSites.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 hover:bg-white/0.03 transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-medium truncate">{s.name}</div>
                </div>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/0.08 hover:border-accent/40 transition-all shrink-0"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Ver Página Web
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
