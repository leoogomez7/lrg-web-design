import { motion } from "framer-motion";
import { ArrowUpRight, Instagram } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const socials = [
  { handle: "@leoogomez7", label: "Personal", desc: "Un vistazo de mi día a día.", gradient: "from-pink-500/30 via-violet/20 to-orange-500/20" },
  { handle: "@lrg.web.design", label: "Diseño Web", desc: "Transformo ideas en experiencias digitales de alto impacto.", gradient: "from-violet/40 via-cyan/20 to-blue-500/20" },
  { handle: "@psplus_argentina_ps4ps5", label: "Gaming", desc: "Venta de suscripciones de PlayStation y juegos digitales.", gradient: "from-blue-500/30 via-cyan/20 to-violet/20" },
  { handle: "@lrg.scents", label: "Perfumes", desc: "Descubre la exclusividad de las fragancias árabes.", gradient: "from-gold/30 via-amber-500/20 to-orange-500/20" },
];

export function Social() {
  return (
    <section id="social" className="relative py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight mb-6">
          Mis redes sociales
        </h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {socials.map((s, i) => (
            <motion.a
              key={s.handle}
              href={`https://instagram.com/${s.handle.replace("@", "")}`}
              target="_blank"
              rel="noreferrer noopener"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden hover:border-accent/40 transition-all"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${s.gradient} opacity-100 transition-opacity duration-500`} />
              <div className="absolute -inset-px rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-accent/40 to-transparent blur-2xl -z-10" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-2xl glass-strong flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:rotate-45 transition-all" />
                </div>

                <div className="mt-8">
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                    {s.label}
                  </div>
                  <div className="font-display text-lg font-semibold mt-1 truncate">
                    {s.handle}
                  </div>
                  <div className="text-xs text-muted-foreground mt-2">{s.desc}</div>
                </div>

                <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                  Ver perfil
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
