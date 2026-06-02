import React, { useState, useEffect } from 'react';
import { MousePointerClick , ExternalLink} from 'lucide-react';
import dynimage from "@/assets/dyn.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import reviewImage from "@/assets/opinion-dyn.jpeg";

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
      image: dynimage, 
      description: "Plataforma web corporativa con sistema de asesoramiento, presentation de áreas de práctica especializada y un canal directo de contacto para resolver consultas legales.",
      tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
      accent: "from-amber-500/20 via-amber-600/5 to-transparent",
      budgetUrl: "https://drive.google.com/file/d/1exN4b1llXtnUtzMrR_0J9J80ddBIoqLr/view?usp=drivesdk",
      reviewImageUrl: reviewImage
    }
  ];

  // AGREGADO: Estado para controlar qué imagen se muestra (0 = Web, 1 = Reseña)
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
        
        {/* Título de Clientes */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <SectionLabel>02 — Clientes</SectionLabel>

            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
              Mis clientes y <span className="text-gradient">su devolución</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Las páginas web de nuestros clientes y opiniones reales de quienes confiaron en nuestro servicio para llevar sus ideas al siguiente nivel digital.
          </p>
        </div>

        {/* Grilla de Clientes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsList.map((client, index) => {
            // Creamos una lista interna local para mapear el índice del carrusel
            const imagesList = [client.image, client.reviewImageUrl];

            return (
              <motion.a
                key={client.name}
                href={client.url}
                target="_blank"
                rel="noreferrer noopener"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all flex flex-col h-full"
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
                <div className="p-6 flex flex-col flex-grow relative z-10">
                  
                  {/* Tipo de proyecto */}
                  <span className="text-xs text-accent font-mono uppercase tracking-wider mb-2 block">
                    {client.type}
                  </span>

                  <h3 className="text-xl font-bold text-foreground mb-2 transition-colors">
                    {client.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
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
                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-accent group-hover:text-foreground transition-colors">
                    <MousePointerClick className="w-3.5 h-3.5" />
                    Haz clic para ver la página web
                  </div>

                </div>
              </motion.a>
            );
          })}
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
              Todos mis clientes
            </h3>
          </div>
          <div className="divide-y divide-border">
            {clientsList.map((s) => (
              <div
                key={s.name}
                className="flex items-center justify-between gap-4 px-6 md:px-8 py-4 hover:bg-white/[0.03] transition-colors"
              >
                <div className="min-w-0 flex-1">
                  <div className="font-medium truncate">{s.name}</div>
                </div>
                {/* Contenedor de botones */}
                <div className="flex items-center gap-2 shrink-0">
                  
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

      </div>
    </section>
  );
}
