import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, Sparkles } from "lucide-react";
import { SectionLabel } from "./SectionLabel";

const plans = [
  {
    title: "Tienda Online",
    description: "Tu comercio digital listo para vender desde el primer día.",
    icon: ShoppingBag,
    details: ["Catálogo de productos", "Pasarela de pago integrada", "Gestión de stock"],
  },
  {
    title: "Pago y Cotización",
    description: "Compra tu proyecto con claridad y opciones a medida.",
    icon: CreditCard,
    details: ["Presupuesto transparente", "Planes adaptados", "Pagos seguros"],
  },
  {
    title: "Impulso Premium",
    description: "Acelera tu marca con diseño, posicionamiento y soporte.",
    icon: Sparkles,
    details: ["Landing optimizada", "SEO inicial", "Mantenimiento opcional"],
  },
];

export function Comprar() {
  return (
    <section id="comprar" className="relative py-20 px-6 bg-background/80">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
         <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-[10px] uppercase tracking-wider font-mono text-accent">
          <ShoppingBag className="w-3 h-3" /> Comprar
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-semibold tracking-tight mt-6">
            Empieza tu proyecto con una <span className="text-gradient">compra clara</span>
          </h2>
          <p className="text-muted-foreground mt-5 max-w-2xl mx-auto">
            Selecciona tu opción, consulta tu precio y avanza directo al siguiente paso.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <motion.article
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className="glass rounded-3xl p-8 hover:-translate-y-1 transition-transform"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-accent mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold mb-3">{plan.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-6">{plan.description}</p>
                <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                  {plan.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition hover:bg-white/90"
                >
                  Comprar ahora
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
