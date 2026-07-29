import React, { useState, useEffect } from 'react';
import { MousePointerClick , ExternalLink, Users} from 'lucide-react';
import dyn_web from "@/assets/web1-dyn.jpg";
import dyn_opinion from "@/assets/web1-dyn-opinion.jpg";
import wilson_web from "@/assets/web2-wilson.jpg";
import wilson_opinion from "@/assets/web2-wilson-opinion.jpg";
import { motion, AnimatePresence } from "framer-motion";


// Corregido: Nombre de interfaz en singular para evitar conflictos
interface ClientData {
  name: string;
  type: string;
  url: string;
  image: string;
  description: string;
  tech: string[];
  accent: string;
  budgetUrl: string; 
  reviewImageUrl: string;
}

export default function Clients() {
  // Corregido: Variable en minúscula para seguir las convenciones de desarrollo
  const clientsList: ClientData[] = [
    {
      name: "D&N Estudio Jurídico",
      type: "Web Institucional - Landing Page",
      url: "https://dyn-estudio-juridico.vercel.app",
      image: dyn_web, 
      description: "Plataforma web corporativa con sistema de asesoramiento, presentation de áreas de práctica especializada y un canal directo de contacto para resolver consultas legales.",
      tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
      accent: "from-amber-500/20 via-amber-600/5 to-transparent",
      budgetUrl: "https://drive.google.com/file/d/1exN4b1llXtnUtzMrR_0J9J80ddBIoqLr/view?usp=drivesdk",
      reviewImageUrl: dyn_opinion
    },
    {
      name: "Wilson Arquitectura",
      type: "Web Institucional - Landing Page",
      url: "https://wilsonarquitectura.com.ar",
      image: wilson_web,
      description: "Sitio web institucional para el estudio de arquitectura con enfoque en proyectos residenciales y comerciales. Diseño moderno, enlaces directos a portafolio y contacto optimizado.",
      tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
      accent: "from-sky-500/20 via-sky-600/5 to-transparent",
      budgetUrl: "https://drive.google.com/file/d/1UJtskcJ5IwhUZ1ss2Y6DipnEZ-zEiYzM/view?usp=sharing",
      reviewImageUrl: wilson_opinion
    }
  ];

  // AGREGADO: Estado para controlar qué imagen se muestra (0 = Web, 1 = Reseña)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeClient, setActiveClient] = useState<ClientData | null>(null);
  const [imagePreviewOpen, setImagePreviewOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [showAllClients, setShowAllClients] = useState(false);

  const clientModalSections = [
    {
      label: "¿De qué se trata la página?",
      content:
        "Texto de prueba: describe el propósito principal de la página y el valor que entrega al usuario.",
    },
    {
      label: "¿Para qué sirve?",
      content:
        "Texto de prueba: explica el objetivo funcional de la web y qué resuelve para el cliente final.",
    },
    {
      label: "¿Por qué es rápida e interactiva?",
      content:
        "Texto de prueba: menciona el rendimiento, la fluidez de la interfaz y la experiencia de usuario instantánea.",
    },
    {
      label: "¿Cómo se ve en celulares y tablets?",
      content:
        "Texto de prueba: indica que el diseño es responsive y se adapta bien a móviles, tablets y pantallas grandes.",
    },
    {
      label: "Caracteristicas",
      content:
        "Texto de prueba: destaca las características clave del sitio, como navegación clara, formularios y portafolio.",
    },
    {
      label: "Stack Tecnológico",
      content: "React, Tailwind CSS, Vite, Vercel",
    },
  ];

  const getClientModalSections = (client: ClientData | null) => {
    if (!client) return clientModalSections;

    if (client.name === "Wilson Arquitectura") {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es el portal web oficial de Wilson Arquitectura, un estudio dedicado al diseño de viviendas, proyectos comerciales, remodelaciones y dirección de obras. Sirve para que futuros clientes puedan ver fotos e información de sus proyectos construidos y ponerse en contacto directamente para cotizar su obra.",
        },
        {
          label: "¿Qué busca esta web?",
          content:
            "Que cualquier persona interesada en construir o remodelar su casa pueda explorar de forma visual, rápida y elegante los servicios, la metodología de trabajo y la visión de arquitectura sostenible del estudio.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología de última generación que carga la página casi al instante, permitiendo ver las galerías de imágenes y detalles de las casas sin esperar a que la pantalla se vuelva a recargar a cada rato.",
        },
        {
          label: "¿Cómo se ve en celulares?",
          content:
            "Está construida bajo una filosofía Mobile-First, lo que significa que la experiencia visual para solicitar presupuestos o ver galerías está optimizada al 100% para teléfonos móviles y tablets.",
        },
        {
          label: "Caracteristicas",
          content:
            "- Showcase de Proyectos: Presentación clara y estética de obras residenciales, comerciales e interiorismo con renderizado ágil de fotos de alta resolución.\n- Transmisión de Servicios: Exposición detallada de los procesos de trabajo (diseño conceptual, proyecto ejecutivo, cómputo y presupuesto, gestión integral de obra).\n- Rendimiento UI Excepcional: Transiciones fluidas y tiempos de respuesta inmediatos para la visualización de obras.\n- Infraestructura Edge: Servido en redes globales que optimizan la entrega de imágenes y assets para que la web cargue velozmente en cualquier parte del mundo.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está construido sobre una infraestructura moderna, modular y de tipado seguro para facilitar un mantenimiento ágil y una entrega de imágenes fluida.\n\nFrontend & UI:\n- React.js & TypeScript: Lógica de cliente robusta, escalable y libre de errores en tiempo de compilación.\n- Vite.js: Servidor de desarrollo instantáneo y empaquetado optimizado para producción.\n- Tailwind CSS: Framework CSS enfocado en la velocidad y el diseño Mobile-First.\n- shadcn/ui & Lucide Icons: Sistema de componentes e iconografía consistente para el catálogo visual.\n\nEntorno de Ejecución & Dependencias:\n- Bun: Gestor de paquetes ultrarrápido utilizado para acelerar la instalación y compilación.\n- Node.js & NPM: Ecosistema base para la gestión de dependencias y scripts de construcción.\n\nCalidad de Código:\n- ESLint: Reglas de análisis estático del código para mantener estándares limpios.\n- Prettier: Formateador automatizado del código.\n\nInfraestructura & Cloud:\n- Vercel Edge Network: Alojamiento global para distribución con compresión de imágenes y entrega de contenido a baja latencia.",
        },
      ];
    }

    if (
      client.name === "D&N Estudio Jurídico" ||
      client.name.toLowerCase().includes("dyn") ||
      client.url?.includes("dyn-estudio")
    ) {
      return [
        {
          label: "¿De qué se trata la página?",
          content:
            "Es el portal web oficial del estudio de abogados D&N Estudio Jurídico. Sirve como su carta de presentación institucional en internet.",
        },
        {
          label: "¿Para qué sirve?",
          content:
            "Permite a personas o empresas que necesitan asesoramiento legal conocer las especialidades del estudio (derecho laboral, civil, comercial, etc.), consultar la trayectoria de los profesionales y coordinar una cita o consulta directa.",
        },
        {
          label: "¿Por qué es rápida e interactiva?",
          content:
            "Utiliza tecnología web avanzada que carga las secciones, formularios e información de contacto al instante, sin hacerte esperar a que la página vuelva a recargar.",
        },
        {
          label: "¿Cómo se ve en celulares y tablets?",
          content:
            "Está totalmente optimizada para teléfonos móviles y tablets. Puedes consultar información o enviar un mensaje al estudio cómodamente desde la pantalla de tu celular.",
        },
        {
          label: "Caracteristicas",
          content:
            "- Catálogo de Servicios Legales: Presentación clara y dividida por áreas de práctica profesional (asesoramiento, litigios, contratos, etc.).\n- Canal de Contacto Directo: Formularios y accesos rápidos a mensajería para solicitar consultas legales sin intermediarios.\n- Navegación e Interfaz Limpia: Transiciones fluidas y diseño sobrio que transmite confianza y profesionalismo.\n- Diseño Responsive & Mobile-First: Adaptabilidad perfecta a cualquier dispositivo para garantizar una lectura cómoda tanto en móviles como en computadoras.\n- Infraestructura Edge: Despliegue en redes globales perimetrales para asegurar mínima latencia y máxima disponibilidad en todo momento.",
        },
        {
          label: "Stack Tecnológico",
          content:
            "El proyecto está desarrollado sobre una arquitectura frontend moderna, modular y de tipado seguro para garantizar escalabilidad, rendimiento y un mantenimiento libre de errores.\n\nFrontend & UI:\n- React.js & TypeScript: Lógica de cliente robusta, escalable y con tipado estático seguro.\n- Vite.js: Servidor de desarrollo instantáneo y compilación optimizada para producción.\n- Tailwind CSS: Framework de utilidades CSS para un diseño sobrio, moderno y adaptativo.\n- shadcn/ui & Lucide Icons: Sistema de componentes e iconografía clara orientada a plataformas profesionales.\n\nEntorno de Ejecución & Dependencias:\n- Bun: Gestor de paquetes ultrarrápido y ejecutor de entornos de JavaScript.\n- Node.js & NPM: Base estándar del ecosistema para la ejecución de scripts.\n\nCalidad de Código:\n- ESLint: Reglas avanzadas de validación y análisis estático del código.\n- Prettier: Formateador automático para mantener un estándar visual ordenado y limpio.\n\nInfraestructura & Cloud:\n- Vercel Edge Network: Alojamiento global perimetral para distribución ultrarrápida del sitio.",
        },
      ];
    }

    return clientModalSections;
  };

  const getClientIntro = (client: ClientData | null) => {
    if (!client) return "";
    if (client.name === "Wilson Arquitectura") {
      return (
        "Wilson Arquitectura es una plataforma web moderna desarrollada para presentar el portafolio digital, proyectos residenciales/comerciales y la metodología de trabajo del estudio de arquitectura Wilson Arquitectura (Pilar, Buenos Aires)."
      );
    }

    if (
      client.name === "D&N Estudio Jurídico" ||
      client.name.toLowerCase().includes("dyn") ||
      client.url?.includes("dyn-estudio")
    ) {
      return (
        "D&N Estudio Jurídico es una plataforma web moderna desarrollada para presentar los servicios legales, áreas de práctica, equipo profesional y vías de contacto del estudio jurídico D&N. El proyecto ofrece un canal institucional digital claro, serio e interactivo para clientes y consultas legales."
      );
    }

    return "";
  };

  // AGREGADO: Temporizador cíclico de 2 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="clients" className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
           <Users className="w-3 h-3" /> Clientes
            </div>
        {/* Título de Clientes */}
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
              Mis clientes y <span className="text-gradient">su devolución</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl">
            Las páginas web de nuestros clientes y opiniones reales de quienes confiaron en nuestro servicio para llevar sus ideas al siguiente nivel digital.
          </p>
        </div>

        {/* Grilla de Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsList.map((client, index) => {
            // Creamos una lista interna local para mapear el índice del carrusel
            const imagesList = [client.image, client.reviewImageUrl];

            return (
              <motion.div
                key={client.name}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setActiveClient(client);
                  setImagePreviewOpen(false);
                  setModalImageIndex(0);
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setActiveClient(client);
                    setImagePreviewOpen(false);
                  }
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all flex flex-col h-full w-full max-w-full text-left cursor-pointer"
              >
                {/* Contenedor de Imagen con transición automática */}
                <div className="relative aspect-video overflow-hidden w-full bg-black/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${client.accent} opacity-50 group-hover:opacity-30 transition-opacity z-10 mix-blend-overlay`} />
                  
                  {/* AGREGADO: AnimatePresence ejecuta el fundido suave al cambiar la imagen */}
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      src={imagesList[currentImageIndex]}
                      alt={client.name}
                      loading="lazy"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </AnimatePresence>
                </div>
                
                {/* Cuerpo del Proyecto */}
                <div className="p-6 flex flex-col flex-1 relative z-10">
                  
                  {/* Tipo de proyecto */}
                  <span className="text-xs text-accent font-mono uppercase tracking-wider mb-2 block">
                    {client.type}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-2 transition-colors">
                    {client.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                    {client.description}
                  </p>

                  {/* Bloque de Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {client.tech.map((technology) => (
                      <span
                        key={technology}
                        className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-muted-foreground"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Bloque de enlace inferior */}
                  <div className="mt-5 grid gap-3">
                    <a
                      href={client.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      onClick={(event) => event.stopPropagation()}
                      className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                    >
                      Ver página web
                    </a>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                          setActiveClient(client);
                          setImagePreviewOpen(false);
                          setModalImageIndex(0);
                      }}
                      className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                    >
                      Más información
                    </button>
                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-center mb-10 mt-10">
          <button
            type="button"
            onClick={() => setShowAllClients((prev) => !prev)}
            className="inline-flex min-w-[12rem] rounded-3xl border border-white/10 bg-white/5 px-8 py-4 items-center justify-center whitespace-nowrap text-center text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
          >
            {showAllClients ? "Ocultar listado" : "Mostrar listado"}
          </button>
        </div>

        {activeClient && (
          <div
            className="fixed inset-0 z-50 flex justify-center items-start overflow-y-auto bg-black/40 px-4 py-4"
            onClick={() => setActiveClient(null)}
          >
            <div
              className="relative mt-8 w-full max-w-2xl rounded-4xl border border-white/10 bg-slate-950/95 p-6 shadow-[0_35px_90px_-30px_rgba(0,0,0,0.85)] backdrop-blur-xl overflow-hidden"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setActiveClient(null)}
                className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 p-2 text-xs text-muted-foreground hover:bg-white/10"
              >
                Cerrar
              </button>
              <div className="mb-4 text-xs uppercase tracking-[0.22em] text-accent font-mono">
                Información detallada
              </div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">
                {activeClient.name}
              </h3>
              <div className="mt-2 text-sm text-muted-foreground">
                {activeClient.type}
              </div>
              <button
                type="button"
                onClick={() => setImagePreviewOpen(true)}
                className="group relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 transition-all hover:border-white/20"
                aria-label="Ver imagen completa"
                onKeyDown={(e) => e.stopPropagation()}
              >
                <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
                  <img
                    src={modalImageIndex === 0 ? activeClient.image : activeClient.reviewImageUrl}
                    alt={activeClient.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-xs text-white backdrop-blur">
                    Ver imagen
                  </span>
                </div>
              </button>

              <div className="mt-3 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImageIndex(0);
                  }}
                  className={`w-full rounded-2xl border px-3 py-2 text-xs font-medium transition-all ${
                    modalImageIndex === 0
                      ? "bg-amber-500/20 border-amber-400 text-amber-200"
                      : "bg-white/5 border-white/10 text-muted-foreground"
                  }`}
                >
                  Imagen previa de la web
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setModalImageIndex(1);
                  }}
                  className={`w-full rounded-2xl border px-3 py-2 text-xs font-medium transition-all ${
                    modalImageIndex === 1
                      ? "bg-amber-500/20 border-amber-400 text-amber-200"
                      : "bg-white/5 border-white/10 text-muted-foreground"
                  }`}
                >
                  Opinión del cliente
                </button>
              </div>

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
                      src={modalImageIndex === 0 ? activeClient.image : activeClient.reviewImageUrl}
                      alt={activeClient.name}
                      className="mx-auto w-full max-h-[75vh] object-contain"
                    />
                  </div>
                </div>
              )}

              {getClientIntro(activeClient) ? (
                <div className="mt-4 text-sm text-muted-foreground">
                  {getClientIntro(activeClient)}
                </div>
              ) : null}

              <div className="mt-6 flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground overflow-hidden">
                {getClientModalSections(activeClient).map((section) => (
                  <div key={section.label} className="space-y-2">
                    <button
                      type="button"
                      onClick={() =>
                        setExpandedSection((current) =>
                          current === section.label ? null : section.label,
                        )
                      }
                      className="flex w-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/80 px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground transition-all hover:border-white/20 hover:bg-slate-900"
                    >
                      {section.label}
                    </button>
                    {expandedSection === section.label ? (
                      <div className="rounded-3xl border border-white/10 bg-slate-950/95 px-4 py-4 text-center text-sm text-muted-foreground">
                        <div className="whitespace-pre-line">{section.content}</div>
                      </div>
                    ) : null}
                  </div>
                ))}
                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={activeClient.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                  >
                    Ver proyecto
                  </a>
                  <a
                    href={activeClient.budgetUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex w-full items-center justify-center rounded-3xl border border-amber-400/40 bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-transparent px-4 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-200 transition-all hover:border-amber-300/60 hover:bg-gradient-to-r hover:from-amber-500/25 hover:via-orange-500/15 hover:to-transparent"
                  >
                    Ver presupuesto
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {showAllClients && (
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
              Todos mis clientes
            </h3>
          </div>
          <div className="divide-y divide-border">
            {clientsList.map((s) => (
                <div
                  key={s.name}
                  // Cambiado a flex-col en celular y flex-row en escritorio
                  className="flex flex-col md:flex-row md:items-center justify-between gap-4 px-6 md:px-8 py-5 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <div className="font-medium truncate text-base md:text-lg">{s.name}</div>
                  </div>
                  {/* Contenedor de botones adaptado para celulares */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full md:w-auto shrink-0">

                                  
                  {/* Botón 1: Ver Opinion */}
                  <a
                    href={s.reviewImageUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/[0.08] hover:border-accent/40 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver opinion
                  </a>

                  {/* Botón 2: Ver Presupuesto */}
                  <a
                    href={s.budgetUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/[0.08] hover:border-accent/40 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver presupuesto
                  </a>

                  {/* Botón 3: Ver Página Web */}
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-1.5 glass rounded-full px-4 py-2 text-xs font-medium hover:bg-white/[0.08] hover:border-accent/40 transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Ver página web
                  </a>
                  
                </div>

              </div>
            ))}
          </div>
        </motion.div>
        )}

      </div>
    </section>
  );
}
