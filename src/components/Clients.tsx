import React from 'react';
import { MousePointerClick } from 'lucide-react';
import dynimage from "@/assets/dyn.jpg";
import { motion } from "framer-motion";

interface Clients {
  name: string;
  type: string;
  url: string;
  image: string;
  description: string;
  tech: string[];
  accent: string;
}

export default function Clients() {
  const Clients: Clients[] = [
    {
      name: "D&N Estudio Jurídico",
      type: "Web Institucional - Landing Page",
      url: "https://dyn-estudio-juridico.vercel.app",
      image: dynimage, 
      description: "Plataforma web corporativa con sistema de asesoramiento, presentation de áreas de práctica especializada y un canal directo de contacto para resolver consultas legales.",
      tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
      accent: "from-amber-500/20 via-amber-600/5 to-transparent",
    }
  ];

  return (
    <section id="clients" className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de Clientes */}
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-accent bg-accent/10 px-3 py-1 rounded-full">
              Listado completo
            </span>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
              Mis clientes y <span className="text-gradient">su devolución</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md">
            Opiniones reales de quienes confiaron en nuestro servicio para llevar sus ideas al siguiente nivel digital.
          </p>
        </div>


        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Clients.map((client, index) => (
            <motion.a
              key={client.name}
              href="#clients"
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative glass rounded-3xl overflow-hidden hover:border-accent/30 transition-all flex flex-col h-full"
            >
              {/* Contenedor de Imagen (Limpio, sin íconos encima) */}
              <div className="relative aspect-video overflow-hidden w-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${client.accent} opacity-50 group-hover:opacity-30 transition-opacity z-10 mix-blend-overlay`} />
                <img
                  src={client.image}
                  alt={client.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Cuerpo del Proyecto */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                
                {/* Tipo de proyecto */}
                <span className="text-xs text-accent font-mono uppercase tracking-wider mb-2 block">
                  {client.type}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
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
          ))}
        </div>

      </div>
    </section>
  );
}


