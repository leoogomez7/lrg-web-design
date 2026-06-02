import React from 'react';
import { ExternalLink, MousePointerClick } from 'lucide-react';
import dynimage from "@/assets/dyn.jpg";

interface Project {
  name: string;
  type: string;
  url: string;
  image: string;
  description: string;
  tech: string[];
  accent: string;
  //available: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      name: "D&N Estudio Jurídico",
      type: "Web Institucional - Landing Page",
      url: "https://dyn-estudio-juridico.vercel.app",
      image: dynimage, 
      description: "Plataforma web corporativa con sistema de asesoramiento, presentación de áreas de práctica especializada y un canal directo de contacto para resolver consultas legales.",
      tech: ["React", "Tailwind CSS", "Vite", "Vercel"],
      accent: "from-amber-500/20 via-amber-600/5 to-transparent",
      //available: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de Proyectos */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl tracking-tight">
            Mis Proyectos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
            Una selección de mis trabajos más recientes
          </p>
        </div>

        {/* Grilla de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card/50 rounded-xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 group flex flex-col h-full relative"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Capa de fondo del gradiente dinámico */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40 pointer-events-none`} />

              {/* Contenedor de Imagen */}
              <div className="relative overflow-hidden aspect-video z-10">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Indicador superior dinámico
                <div className="absolute top-3 right-3 z-20">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md border ${
                    project.available 
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
                  }`}>
                    {project.available ? 'Disponible' : 'En desarrollo'}
                  </span>
                </div> */}

                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-300">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </div>
              
              {/* Cuerpo del Proyecto */}
              <div className="p-6 flex flex-col flex-grow relative z-10">
                
                {/* Tipo de proyecto - Clonado exacto con text-accent y font-mono */}
                <span className="text-xs text-accent font-mono uppercase tracking-wider mb-2 block">
                  {project.type}
                </span>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Bloque de Tecnologías */}
                  <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tech.map((technology) => (
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
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
