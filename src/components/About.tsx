import { motion } from "framer-motion";
import { ArrowUpRight, Github, User } from "lucide-react";

const knowledge = [
  "Lenguajes: C, C++, C#, JavaScript, HTML, CSS, SQL, R, Python",
  "Frontend & Backend",
  "Bases de datos relacionales",
  "Control de versiones (Git y GitHub)",
  "Entornos de desarrollo (VS Code, Node.js)",
  "Networking (TCP/IP, Subnetting, VLANs, Routing, ACLs)",
  "Servicios de red (DHCP, DNS, NAT)",
  "Configuración de Switches y Routers",
  "Análisis de Requerimientos (Funcionales y No Funcionales)",
];

export function About() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 mt-10 items-start">
          <motion.div
            className="mx-auto max-w-2xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
              <User className="w-3 h-3" /> ¿Quién soy?
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
              Soy <span className="text-gradient">Leonardo Gómez</span>
            </h2>
            <p className="text-sm text-accent mt-2 font-medium">
              Analista de Sistemas · Desarrollador Web
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Analista de Sistemas recibido, especializado en diseño y
              desarrollo web.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Me enfoco en crear experiencias digitales modernas, rápidas y
              visualmente impactantes para marcas, estudios profesionales y
              negocios que buscan destacarse en internet.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
              { v: "+6", l: "Proyectos" },
              { v: "+2", l: "Clientes satisfechos" },
                { v: "2", l: "Años de exp." },
              ].map((s) => (
                <div key={s.l} className="glass rounded-xl p-4">
                  <div className="font-display text-2xl font-semibold text-gradient">{s.v}</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>

            {/* Enlace al portafolio eliminado a petición del usuario */}
          </motion.div>

          <motion.div
            className="mx-auto max-w-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-5">
              Conocimientos
            </div>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {knowledge.map((k, i) => (
                <motion.div
                  key={k}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="glass rounded-xl px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:border-accent/30 transition-all"
                >
                  {k}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
