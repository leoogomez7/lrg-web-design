import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { SectionLabel } from "./SectionLabel";
import logo from "@/assets/logo.png";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 px-6">
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-50" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.65 0.22 295 / 0.15), transparent 70%)" }} />

      <div className="relative mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <SectionLabel>06 — Contacto</SectionLabel>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet/30 blur-[120px]" />
          <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan/20 blur-[120px]" />

          <div className="relative">
            <h2 className="font-display text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
              ¿Listo para llevar tu negocio al{" "}
              <span className="text-gradient">siguiente nivel digital?</span>
            </h2>
            <p className="text-muted-foreground mt-6 max-w-xl mx-auto">
              Hablemos de tu proyecto. Respuesta en menos de 24hs.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              <a
                href="https://wa.me/5491132965583"
                target="_blank"
                rel="noreferrer noopener"
                className="group glass rounded-2xl p-5 text-left flex items-center gap-4 hover:border-accent/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500/30 to-emerald-500/20 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">WhatsApp</div>
                  <div className="text-sm font-medium truncate">+54 9 11 3296-5583</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>

              <a
                href="mailto:leorgomez7@gmail.com"
                className="group glass rounded-2xl p-5 text-left flex items-center gap-4 hover:border-accent/40 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet/30 to-cyan/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">Email</div>
                  <div className="text-sm font-medium truncate">leorgomez7@gmail.com</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>

            <a
              href="https://wa.me/5491132965583"
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm font-semibold hover:scale-[1.03] transition-transform"
            >
              Hablemos
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6">
      <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <img src={logo} alt="LRG" className="w-9 h-9 rounded-full object-cover" />
        <div>© {new Date().getFullYear()} Leonardo Gómez · Diseño & Desarrollo Web</div>
        <div>Buenos Aires, Argentina</div>
      </div>
    </footer>
  );
}
