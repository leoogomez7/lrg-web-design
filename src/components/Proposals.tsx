import { motion } from "framer-motion";
import { ArrowUpRight, FileText, FolderOpen } from "lucide-react";

const DRIVE_URL =
  "https://drive.google.com/drive/folders/1EVaYZC4OqfRnXwgyMLETsfhAyWUbM2Gr";

const proposals = [
  {
    client: "Wilson Arquitectura",
    type: "Portfolio Arquitectónico Premium",
    items: [
      "Desarrollo y Diseño",
      "Seguridad SSL",
      "Hosting incluido",
      "Dominio personalizado",
      "SEO optimizado",
      "Integración Google Maps",
      "Mantenimiento mensual",
    ],
  },
  {
    client: "García Palacio — Asistencia Legal GP",
    type: "Plataforma Jurídica Premium",
    items: [
      "Arquitectura del sitio",
      "Especialidades legales",
      "SEO jurídico",
      "Hosting + Dominio",
      "Seguridad reforzada",
      "Visibilidad digital",
      "Menú desplegable visual",
    ],
  },
];

export function Proposals() {
  return (
    <section id="proposals" className="relative py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-6xl font-semibold mt-4 tracking-tight">
            Planes de <span className="text-gradient">Transformación Digital</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-xl mx-auto">
            Documentos reales presentados a clientes.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="glass-strong rounded-3xl overflow-hidden"
        >
          <div className="divide-y divide-border">
            {proposals.map((p, idx) => (
              <div
                key={p.client}
                className="block p-6 md:p-8"
              >
                <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start md:items-center">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-accent shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                      <span>Propuesta #{String(idx + 1).padStart(2, "0")}</span>
                      <span>·</span>
                      <span>{p.type}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold mt-1.5 tracking-tight">
                      {p.client}
                    </h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {p.items.map((s) => (
                        <span
                          key={s}
                          className="text-[10px] px-2.5 py-1 rounded-full glass text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href={DRIVE_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 text-sm font-medium .hover:bg-white/[0.06] transition-colors"
          >
            <FolderOpen className="w-4 h-4 text-accent" />
            Ver todas las propuestas en Drive
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
