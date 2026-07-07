import { motion } from "framer-motion";

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground"
    >
      <span className="h-px w-8 .bg-gradient-to-r from-accent to-transparent" />
      {children}
    </motion.div>
  );
}
