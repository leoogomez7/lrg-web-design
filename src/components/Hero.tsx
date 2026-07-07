import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, oklch(0.65 0.22 295 / 0.15), transparent 40%)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden pt-32 pb-12">
      <div className="absolute inset-0 grid-bg" />
      <div ref={glowRef} className="absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-violet/30 blur-[120px] animate-glow" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-cyan/20 blur-[120px] animate-glow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tight font-semibold"
          >
            Tu Web,{" "}
            <span className="text-gradient">tus reglas.</span>{" "}
            Desarrollo la web a tu gusto.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Diseño y desarrollo páginas web rápidas, modernas y estratégicas
            enfocadas en conversión, imagen profesional y escalabilidad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Ver proyectos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
                        <a
              href="#clients"
              className="group inline-flex items-center gap-2 bg-foreground text-background px-6 py-3.5 rounded-full text-sm font-medium hover:scale-[1.02] transition-transform"
            >
              Clientes satisfechos
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass-strong px-6 py-3.5 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
            >
              Contactar
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-6 text-sm"
          >
            {[
              { v: "100%", l: "Diseño web adaptable" },
              { v: "<1s", l: "Tiempo de carga" },
              { v: "A+", l: "Máximo rendimiento" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1 leading-snug">{s.l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative hidden lg:block"
          style={{ perspective: 1200 }}
        >
          <div className="relative animate-float">
            <div className="absolute -inset-10 .bg-gradient-to-br from-violet/40 via-cyan/30 to-transparent blur-3xl opacity-60" />
            <div className="relative glass-strong rounded-2xl p-1 shadow-[0_30px_80px_-20px_oklch(0_0_0/0.8)]">
              <div className="flex gap-1.5 px-3 py-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
              </div>
              <div className="rounded-xl .bg-gradient-to-br from-violet/20 via-card to-cyan/10 .aspect-[4/3] p-6 flex flex-col gap-3">
                <div className="h-3 w-32 rounded-full bg-white/10" />
                <div className="h-2 w-48 rounded-full bg-white/5" />
                <div className="grid grid-cols-2 gap-3 mt-4 flex-1">
                  <div className="rounded-lg .bg-gradient-to-br from-violet/40 to-violet/10 border border-white/5" />
                  <div className="rounded-lg .bg-gradient-to-br from-cyan/30 to-cyan/5 border border-white/5" />
                  <div className="rounded-lg bg-white/5 border border-white/5" />
                  <div className="rounded-lg .bg-gradient-to-br from-gold/30 to-transparent border border-white/5" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
